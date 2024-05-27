import * as React from "react";
export interface ISSEProviderProps {
    url: string;
    opts?: EventSourceInit;
    onOpen?: (ev: Event) => void;
}
export declare const SSEProvider: React.FC<ISSEProviderProps>;
