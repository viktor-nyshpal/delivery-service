import { Test } from '@nestjs/testing';
import { DeliveryService } from '../../src/core/delivery/delivery.service.js';
import { StandardStrategy } from '../../src/core/delivery/strategy/standard.strategy.js';
import { ExpressStrategy } from '../../src/core/delivery/strategy/express.strategy.js';
import { DeliveryTypeEnum } from '../../src/core/delivery/interface/delivery.enum.js';

describe('DeliveryService', () => {
  let deliveryService: DeliveryService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [DeliveryService, StandardStrategy, ExpressStrategy],
    }).compile();

    await moduleRef.init();

    deliveryService = moduleRef.get(DeliveryService);
  });

  describe('calculateFee', () => {
    it('should return the calculated fee of "100.00"', () => {
      const weight = '2';
      const destination = 'odessa';
      const deliveryType = DeliveryTypeEnum.express;

      const expectedFee = '100.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "126.00"', () => {
      const weight = '5.5';
      const destination = 'kyiv';
      const deliveryType = DeliveryTypeEnum.express;

      const expectedFee = '126.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "110.00"', () => {
      const weight = '08.2';
      const destination = 'uman';
      const deliveryType = DeliveryTypeEnum.standard;

      const expectedFee = '110.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "45.00"', () => {
      const weight = '0.3';
      const destination = 'kyiv';
      const deliveryType = DeliveryTypeEnum.standard;

      const expectedFee = '45.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "100.00"', () => {
      const weight = '1.7';
      const destination = 'kharkiv';
      const deliveryType = DeliveryTypeEnum.express;

      const expectedFee = '100.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "50.00"', () => {
      const weight = '1.5';
      const destination = 'kharkiv';
      const deliveryType = DeliveryTypeEnum.standard;

      const expectedFee = '50.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "108.00"', () => {
      const weight = '3.5';
      const destination = 'kyiv';
      const deliveryType = DeliveryTypeEnum.express;

      const expectedFee = '108.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });

    it('should return the calculated fee of "108.00"', () => {
      const weight = '';
      const destination = 'kyiv';
      const deliveryType = DeliveryTypeEnum.express;

      const expectedFee = '108.00';

      expect(deliveryService.calculateFee(weight, destination, deliveryType)).toBe(expectedFee);
    });
  });
});
