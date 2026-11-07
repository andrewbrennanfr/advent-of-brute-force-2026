import { part01, part02 } from "./"
import input from "./input.txt"
import { describe, expect, test } from "bun:test"

const example = String.raw`

`

describe("part01", () => {
    test.todo("example", () => {
        expect(part01(example)).toEqual(Infinity)
    })

    test.todo("input", () => {
        expect(part01(input)).toEqual(Infinity)
    })
})

describe("part02", () => {
    test.todo("example", () => {
        expect(part02(example)).toEqual(Infinity)
    })

    test.todo("input", () => {
        expect(part02(input)).toEqual(Infinity)
    })
})
