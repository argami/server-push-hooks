"use strict";
exports.__esModule = true;
exports.useWebsocket = exports.useLastWebsocketMessage = void 0;
var react_1 = require("react");
var context_1 = require("./context");
exports.useLastWebsocketMessage = function () {
    var _a = react_1.useState(undefined), data = _a[0], setData = _a[1];
    var _b = react_1.useState(undefined), error = _b[0], setError = _b[1];
    var ws = react_1.useContext(context_1.WebsocketContext);
    react_1.useEffect(function () {
        ws.onmessage = function (e) {
            var message;
            try {
                message = JSON.parse(e.data);
            }
            catch (_a) {
                message = e.data;
            }
            setData(message);
        };
        ws.onerror = function (e) {
            setError(e);
        };
    }, []);
    return { data: data, error: error, ws: ws };
};
exports.useWebsocket = function (onMessage) {
    var _a = react_1.useState(undefined), error = _a[0], setError = _a[1];
    var onMessageRef = react_1.useRef(undefined);
    onMessageRef.current = onMessage;
    var ws = react_1.useContext(context_1.WebsocketContext);
    react_1.useEffect(function () {
        ws.onmessage = function (event) {
            var message;
            try {
                message = JSON.parse(event.data);
            }
            catch (_a) {
                message = event.data;
            }
            onMessageRef.current(message);
        };
        ws.onerror = function (e) {
            setError(e);
        };
    }, []);
    return { error: error, ws: ws };
};
