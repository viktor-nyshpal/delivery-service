import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { DeliveryService } from './delivery.service.js';
import { CalculateFeeRequest } from './request/delivery.request.js';
import { CalculateFeeResponse } from './response/delivery.response.js';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post('calculate-fee')
  calculateFee(@Body(new ValidationPipe()) body: CalculateFeeRequest): CalculateFeeResponse {
    const { weight, destination, deliveryType } = body;

    const fee = this.deliveryService.calculateFee(weight, destination, deliveryType);

    return new CalculateFeeResponse(fee);
  }
}
