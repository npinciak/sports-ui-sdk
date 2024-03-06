export function exists(value) {
    return value != null;
}
export function existsFilter(value) {
    let index = 0;
    for (let i = 0; i < value.length; i++) {
        if (exists(value[i])) {
            value[index] = value[i];
            index++;
        }
    }
    value.length = index;
    return value;
}
//# sourceMappingURL=exists.js.map