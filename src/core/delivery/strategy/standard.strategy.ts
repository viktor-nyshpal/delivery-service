import { Injectable } from '@nestjs/common';
import { Big } from 'big.js';
import { StrategyInterface } from './interface/strategy.interface.js';

@Injectable()
export class StandardStrategy implements StrategyInterface {
  private readonly MINIMAL_FEE: number = 50;

  getMinimalFee(): Big {
    return new Big(this.MINIMAL_FEE);
  }
}
