import chai from "chai"

const chaiCustom = (chai: Chai.ChaiStatic, _utils: Chai.ChaiUtils) => {
    const Assertion = chai.Assertion
    const assert = chai.assert

    // @ts-ignore: next-line
    assert.xmlEquals = (actual: string, expected: string) => {
        new Assertion(actual).xml.to.deep.equal(expected)
    }

    // @ts-ignore: next-line
    assert.looseEquals = (actual: string, expected: string) => {
        const cleanedActual   = `${actual}`.replaceAll("\s", "").replaceAll("\n", "")
        const cleanedExpected = `${expected}`.replaceAll("\s", "").replaceAll("\n", "")
        new Assertion(cleanedActual).to.equal(cleanedExpected)
    }
}

chai.use(chaiCustom)
