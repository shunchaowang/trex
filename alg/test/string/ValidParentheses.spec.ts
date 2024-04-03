import { describe, test, expect } from "vitest"
import { validParentheses } from "../../main/string/ValidParentheses"

describe("test the parentheses are valid", () => {
  const case1 = "()"
  const case2 = "()[]{}"
  const case3 = "(])]"
  const case4 = "({})"
  test(`${case1} is a valid parentheses`, () => {
    expect(validParentheses(case1)).toBe(true)
  })

  test(`${case2} is a valid parentheses`, () => {
    expect(validParentheses(case2)).toBe(true)
  })
  test(`${case3} is not a valid parentheses`, () => {
    expect(validParentheses(case3)).toBe(false)
  })
  test(`${case4} is a valid parentheses`, () => {
    expect(validParentheses(case4)).toBe(true)
  })
})
