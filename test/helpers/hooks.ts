/**
 * @see https://mochajs.org/#root-hook-plugins
 */
export const mochaHooks = {
    beforeAll(done: any) {
        console.log("[beforeAll] I ran")
        // do something before all tests
        done()
    },
}
