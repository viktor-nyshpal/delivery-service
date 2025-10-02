import { Injectable, OnModuleInit } from '@nestjs/common';
import { Big } from 'big.js';
import { StandardStrategy } from './strategy/standard.strategy.js';
import { ExpressStrategy } from './strategy/express.strategy.js';
import { getPercentOfAmount } from '../../shared/util/number.util.js';
import { DeliveryTypeEnum } from './interface/delivery.enum.js';
import { StrategyInterface } from './strategy/interface/strategy.interface.js';

@Injectable()
export class DeliveryService implements OnModuleInit {
  private readonly deliveryTypeToStrategyMap = new Map<DeliveryTypeEnum, StrategyInterface>();
  private readonly destinationDiscountList: DestinationDiscount[] = [];

  constructor(
    private readonly standardStrategy: StandardStrategy,
    private readonly expressStrategy: ExpressStrategy,
  ) {}

  onModuleInit(): void {
    this.deliveryTypeToStrategyMap.set(DeliveryTypeEnum.standard, this.standardStrategy);
    this.deliveryTypeToStrategyMap.set(DeliveryTypeEnum.express, this.expressStrategy);

    this.destinationDiscountList.push(new DestinationDiscount('kyiv', '10'));
  }

  calculateFee(weight: string, destination: string, deliveryType: DeliveryTypeEnum): string {
    const strategy = this.deliveryTypeToStrategyMap.get(deliveryType);

    const minimalFeeBig = strategy.getMinimalFee();
    const feeMarkupBig = this.calculateFeeMarkup(weight);

    const feeWithoutDiscountBig = minimalFeeBig.plus(feeMarkupBig);
    const feeDiscountBig = this.calculateFeeDiscount(feeWithoutDiscountBig, destination);

    const feeBig = feeWithoutDiscountBig.minus(feeDiscountBig);

    return feeBig.toFixed(2, Big.roundHalfUp);
  }

  private calculateFeeMarkup(weight: string): Big {
    const MARKUP_PER_UNIT = new Big(10);
    const WEIGHT_WITHOUT_MARKUP_BIG = new Big(2);

    const weightBig = new Big(weight);
    const weightIntegerBig = weightBig.round(0, Big.roundHalfUp);

    if (weightIntegerBig.lte(WEIGHT_WITHOUT_MARKUP_BIG)) return new Big(0);

    const weightDifferenceBig = weightIntegerBig.minus(WEIGHT_WITHOUT_MARKUP_BIG);

    return weightDifferenceBig.times(MARKUP_PER_UNIT);
  }

  private calculateFeeDiscount(feeBig: Big, destination: string): Big {
    const destinationDiscount = this.destinationDiscountList.find(
      (destinationDiscount) => destinationDiscount.destination === destination,
    );

    if (!destinationDiscount) return new Big(0);

    const discountInPercentBig = new Big(destinationDiscount.discountInPercent);

    return getPercentOfAmount(feeBig, discountInPercentBig);
  }
}

class DestinationDiscount {
  readonly destination: string;
  readonly discountInPercent: string;

  constructor(destination: string, discountInPercent: string) {
    this.destination = destination;
    this.discountInPercent = discountInPercent;
  }
}
