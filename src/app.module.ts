import { Module } from '@nestjs/common';
import { DeliveryModule as DeliveryCoreModule } from './core/delivery/delivery.module.js';

@Module({ imports: [DeliveryCoreModule] })
export class AppModule {}
