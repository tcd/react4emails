/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore: next-line
namespace Chai {
    interface AssertStatic {
        /**
         * Wrapper for [chai-xml](https://github.com/krampstudio/chai-xml).
         *
         * Asserts that `expected` is the same XML as `actual` ignoring the whitespace at the beginning and end of text nodes.
         */
        xmlEquals(actual: string, expected: string,): Promise<void>;
        /**
         * Asserts that `expected` is the same as `actual` ignoring all whitespace and newlines.
         */
        looseEquals(actual: string, expected: string,): Promise<void>;
    }
}
