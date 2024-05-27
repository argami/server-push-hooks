import * as React from "react";
export interface IWebSocketProviderProps {
    url: string;
    protocols?: string | string[];
    onOpen?: (ev: Event) => void;
}
export declare const WebSocketProvider: React.FC<IWebSocketProviderProps>;
