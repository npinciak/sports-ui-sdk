export function enumAsList(_enum) {
    const values = Object.values(_enum);
    return values.some(o => typeof o === 'number') ? values.filter(o => !Number.isNaN(parseFloat(o.toString()))) : values;
}
//# sourceMappingURL=enum-as-list.js.map