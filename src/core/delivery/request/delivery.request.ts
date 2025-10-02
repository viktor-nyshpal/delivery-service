import { Matches, IsEnum } from 'class-validator';
import { DeliveryTypeEnum } from '../interface/delivery.enum.js';

export class CalculateFeeRequest {
  @Matches(/^(?:[1-9][0-9]?(?:\.[1-9])?|0\.[1-9])$/)
  weight: string;

  @Matches(/^[a-z]{2,50}$/)
  destination: string;

  @IsEnum(DeliveryTypeEnum)
  deliveryType: DeliveryTypeEnum;
}
