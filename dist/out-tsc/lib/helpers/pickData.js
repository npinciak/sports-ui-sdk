export function pickData(data, getter) {
    return data.map(d => {
        if (getter(d) !== undefined)
            return getter(d);
        return [];
    });
}
//# sourceMappingURL=pickData.js.map