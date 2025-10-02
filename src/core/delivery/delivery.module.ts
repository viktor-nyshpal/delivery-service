import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller.js';
import { DeliveryService } from './delivery.service.js';
import { StandardStrategy } from './strategy/standard.strategy.js';
import { ExpressStrategy } from './strategy/express.strategy.js';

@Module({ controllers: [DeliveryController], providers: [DeliveryService, StandardStrategy, ExpressStrategy] })
export class DeliveryModule {}
