/**
 * Takes input of object and specified fields, returns if fields are nullable
 *
 * @param object
 * @param fields
 * @returns
 *
 * @example ```typescript
 *
 * pickFields(person, ["name", "email", "phone"])
 *
 * ```
 *
 */
export function hasNonNullableFields(obj, requiredKeys, throwError = true) {
    for (const key of requiredKeys) {
        if (obj[key] == null) {
            if (!throwError)
                return false;
            throw new Error(`${key.toString()} cannot be null.`);
        }
    }
    return true;
}
//# sourceMappingURL=has-nullable-field.js.map