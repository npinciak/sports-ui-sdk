export var TableColumnDataType;
(function (TableColumnDataType) {
    TableColumnDataType[TableColumnDataType["Number"] = 0] = "Number";
    TableColumnDataType[TableColumnDataType["String"] = 1] = "String";
    TableColumnDataType[TableColumnDataType["Percentage"] = 2] = "Percentage";
})(TableColumnDataType || (TableColumnDataType = {}));
export function cellDataAccessor(obj, path) {
    return path.split('.').reduce((o, p) => o && o[p], obj);
}
//# sourceMappingURL=table.model.js.map