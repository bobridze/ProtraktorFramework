// Type augmentations for Protractor + Jasmine (jasminewd2)
// Protractor patches Jasmine so that expect() accepts promises.
// These declarations tell TypeScript that's valid.

declare namespace jasmine {
  interface Matchers<T> {
    toBe(expected: any, expectationFailOutput?: any): boolean;
    toEqual(expected: any, expectationFailOutput?: any): boolean;
    toContain(expected: any, expectationFailOutput?: any): boolean;
    toBeDefined(expectationFailOutput?: any): boolean;
    toBeUndefined(expectationFailOutput?: any): boolean;
    toBeNull(expectationFailOutput?: any): boolean;
    toBeTruthy(expectationFailOutput?: any): boolean;
    toBeFalsy(expectationFailOutput?: any): boolean;
    toBeGreaterThan(expected: number, expectationFailOutput?: any): boolean;
    toBeLessThan(expected: number, expectationFailOutput?: any): boolean;
    toBeNaN(): boolean;
    toMatch(expected: string | RegExp, expectationFailOutput?: any): boolean;
    toThrow(expected?: any): boolean;
  }
}

declare function expect(actual: any): jasmine.Matchers<any>;
