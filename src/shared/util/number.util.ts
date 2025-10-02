import { Big } from 'big.js';

export function getPercentOfAmount(amountBig: Big, percentBig: Big): Big {
  const MAX_PERCENT = new Big(100);

  return amountBig.times(percentBig.div(MAX_PERCENT));
}
