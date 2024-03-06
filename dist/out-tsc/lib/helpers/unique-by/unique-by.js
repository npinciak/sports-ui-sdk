export function unique(array) {
    return [...new Set(array)];
}
/**
 * Get unique obj in arr
 * @param array
 * @param getter
 * @returns
 */
export function uniqueBy(array, getter) {
    const dict = array.reduce((acc, t) => {
        const u = getter(t).toString();
        if (!(u in acc)) {
            acc[u] = t;
        }
        return acc;
    }, {});
    return Object.values(dict);
}
//# sourceMappingURL=unique-by.js.map