import { Injectable } from '@nestjs/common';
import { Big } from 'big.js';
import { StrategyInterface } from './interface/strategy.interface.js';

@Injectable()
export class ExpressStrategy implements StrategyInterface {
  private readonly MINIMAL_FEE: number = 100;

  getMinimalFee(): Big {
    return new Big(this.MINIMAL_FEE);
  }
}
