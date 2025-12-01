import type { Listener } from './types/patters.js';
import type { Product } from './types/product.js';
import {
    AnalyticsService,
    LoggerService,
    OperationTeamBusinessService,
} from './products.js';

// Concrete Listeners / Subscribers Implementations

export class AnalyticsListener implements Listener {
    public update(data: Product): void {
        if (data && typeof data === 'object' && 'id' in data) {
            AnalyticsService.trackEvent('product_created', data as Product);
        }
    }
}

export class OperationTeamListener implements Listener {
    public update(data: Product): void {
        if (data && typeof data === 'object' && 'id' in data) {
            OperationTeamBusinessService.notifyAfterProductCreation(
                data as Product
            );
        }
    }
}
export class LoggerListener implements Listener {
    public update(data: Product): void {
        LoggerService.debug(
            '[CREATE PRODUCT] All business tasks executed successfully' + data
        );
    }
}
