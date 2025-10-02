import { Big } from 'big.js';

export interface StrategyInterface {
  getMinimalFee(): Big;
}
