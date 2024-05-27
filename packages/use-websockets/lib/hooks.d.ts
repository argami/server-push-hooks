export declare const useLastWebsocketMessage: () => {
    data: any;
    error: any;
    ws: WebSocket;
};
export declare const useWebsocket: <T extends unknown>(onMessage: (data: T) => void) => {
    error: any;
    ws: WebSocket;
};
