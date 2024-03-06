export var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
    StatusCode[StatusCode["NoContent"] = 204] = "NoContent";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
export var ErrorStatusCode;
(function (ErrorStatusCode) {
    ErrorStatusCode[ErrorStatusCode["Unknown"] = 0] = "Unknown";
    ErrorStatusCode[ErrorStatusCode["BadRequest"] = 400] = "BadRequest";
    ErrorStatusCode[ErrorStatusCode["Unauthorized"] = 401] = "Unauthorized";
    ErrorStatusCode[ErrorStatusCode["Forbidden"] = 403] = "Forbidden";
    ErrorStatusCode[ErrorStatusCode["NotFound"] = 404] = "NotFound";
    ErrorStatusCode[ErrorStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    ErrorStatusCode[ErrorStatusCode["InternalServerError"] = 500] = "InternalServerError";
    ErrorStatusCode[ErrorStatusCode["BadGateway"] = 502] = "BadGateway";
    ErrorStatusCode[ErrorStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    ErrorStatusCode[ErrorStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
})(ErrorStatusCode || (ErrorStatusCode = {}));
export const statusCodeToEspnMessage = {
    [ErrorStatusCode.Unknown]: 'Invalid LeagueId',
    [ErrorStatusCode.BadRequest]: 'Bad Request',
    [ErrorStatusCode.Unauthorized]: 'Unauthorized, not a public league',
    [ErrorStatusCode.Forbidden]: 'Forbidden',
    [ErrorStatusCode.NotFound]: 'League does not exist',
    [ErrorStatusCode.NotAcceptable]: 'Not Acceptable',
    [ErrorStatusCode.InternalServerError]: 'Internal Server Error',
    [ErrorStatusCode.BadGateway]: 'Bad Gateway',
    [ErrorStatusCode.ServiceUnavailable]: 'Service Unavailable',
    [ErrorStatusCode.GatewayTimeout]: 'Gateway Timeout',
};
export const statusCodeToMessage = {
    [ErrorStatusCode.Unknown]: 'Could not contact server',
    [ErrorStatusCode.BadRequest]: 'Bad Request',
    [ErrorStatusCode.Unauthorized]: 'Unauthorized',
    [ErrorStatusCode.Forbidden]: 'Forbidden',
    [ErrorStatusCode.NotFound]: 'Resource Not Found',
    [ErrorStatusCode.NotAcceptable]: 'Not Acceptable',
    [ErrorStatusCode.InternalServerError]: 'Internal Server Error',
    [ErrorStatusCode.BadGateway]: 'Bad Gateway',
    [ErrorStatusCode.ServiceUnavailable]: 'Service Unavailable',
    [ErrorStatusCode.GatewayTimeout]: 'Gateway Timeout',
};
//# sourceMappingURL=http-errors.model.js.map