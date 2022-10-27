module.exports = {
    "extends": "@istanbuljs/nyc-config-typescript",
    "check-coverage": true,
    "all": true,
    "include": [
        // "src/**/!(*.test.*).[tj]s?(x)",
        "src/**/*.ts?(x)",
    ],
    "exclude": [
        "**/*.d.ts",
        "**/index.ts",
    ],
    "reporter": [
        "html",
        "lcov",
        "text",
        "text-summary",
    ],
    "report-dir": "coverage",
}
