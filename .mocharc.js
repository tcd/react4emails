/**
 * @type {import("mocha").MochaOptions}
 */
module.exports = {
    // "loader": "ts-node/esm",
    // "loader": "ts-node/register",
    extension: ["js", "ts", "tsx"],
    ignore: [
        "**/build/**",
        "**/node_modules/**",
    ],
    fullTrace: false,
    inlineDiffs: true,
    // require: "./test/helpers/hooks.ts"
}
