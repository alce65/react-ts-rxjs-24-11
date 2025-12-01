// Event Manager: Publisher


import type { Listener, Publisher } from './types/patters.js';
import type { Product } from './types/product.js';

export class EventManager implements Publisher {
    private listeners: Map<string, Listener[]> = new Map<string, Listener[]>();

    public subscribe(eventType: string, listener: Listener): void {
        if (!this.listeners.has(eventType)) {
            this.listeners.set(eventType, []);
        }
        this.listeners.get(eventType)?.push(listener);
    }

    public unsubscribe(eventType: string, listener: Listener): void {
        this.listeners.get(eventType)?.filter((l) => l !== listener);
    }

    public emit(eventType: string, data: Product): void {
        this.listeners
            .get(eventType)
            ?.forEach((listener) => listener.update(data));
    }
}
