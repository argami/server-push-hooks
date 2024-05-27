"use strict";
exports.__esModule = true;
exports.useSSE = exports.useLastSSE = void 0;
var react_1 = require("react");
var context_1 = require("./context");
exports.useLastSSE = function () {
    var _a = react_1.useState(undefined), data = _a[0], setData = _a[1];
    var _b = react_1.useState(undefined), error = _b[0], setError = _b[1];
    var eventSource = react_1.useContext(context_1.SSEContext);
    react_1.useEffect(function () {
        eventSource.onmessage = function (e) {
            var message;
            try {
                message = JSON.parse(e.data);
            }
            catch (_a) {
                message = e.data;
            }
            setData(message);
        };
        eventSource.onerror = function (e) {
            setError(e);
        };
    }, []);
    return { data: data, error: error };
};
exports.useSSE = function (onMessage) {
    var _a = react_1.useState(undefined), error = _a[0], setError = _a[1];
    var onMessageRef = react_1.useRef(undefined);
    onMessageRef.current = onMessage;
    var eventSource = react_1.useContext(context_1.SSEContext);
    react_1.useEffect(function () {
        eventSource.onmessage = function (e) {
            var message;
            try {
                message = JSON.parse(e.data);
            }
            catch (_a) {
                message = e.data;
            }
            onMessageRef.current(message);
        };
        eventSource.onerror = function (e) {
            setError(e);
        };
    }, []);
    return error;
};
