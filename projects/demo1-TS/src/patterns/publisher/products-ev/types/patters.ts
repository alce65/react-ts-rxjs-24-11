import type { Product } from "./product.js";


// Subscriber
export interface Listener {
    update(data: Product): void;
}


// Publisher
export interface Publisher {
    subscribe(eventType: string, listener: Listener): void;
    unsubscribe(eventType: string, listener: Listener): void;
    emit(eventType: string,data: Product): void;
}
