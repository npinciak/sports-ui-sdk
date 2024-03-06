import { exists, existsFilter } from './exists';
describe('exists', () => {
    it('should return true', () => {
        const obj = { val: 1 };
        const actual = exists(obj.val);
        expect(actual).toBeTruthy();
    });
    it('null should return false', () => {
        const objNull = { val: null };
        const actual = exists(objNull.val);
        expect(actual).toBeFalsy();
    });
    it('undefined should return false', () => {
        const objUndefined = {};
        // eslint-disable-next-line @typescript-eslint/dot-notation
        const actual = exists(objUndefined['j']);
        expect(actual).toBeFalsy();
    });
});
describe('existsFilter', () => {
    it('should remove nulls from array', () => {
        const expected = [1, 2, 3];
        const actual = existsFilter([1, 2, 3, null]);
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=exists.spec.js.map