import { describe, test, expect } from "vitest"
import { binarySearch } from "../../main/array/Search"

describe("test search", () => {
  const nums = [2, 5]
  const target = 2
  test(`${nums} has ${target} at index 0`, () => {
    const expected = binarySearch(nums, target)
    expect(expected).toBe(0)
  })
})
