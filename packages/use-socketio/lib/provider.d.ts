/// <reference types="socket.io-client" />
import * as React from "react";
export interface ISocketIOProviderProps {
    url: string;
    opts?: SocketIOClient.ConnectOpts;
}
export declare const SocketIOProvider: React.FC<ISocketIOProviderProps>;
