import { describe, test, expect } from "vitest"
import {
  longestSubstrWithUniqueChar,
  checkStringPermutation,
  minimumWindow,
} from "../../main/string/Substrings"

describe("test the longest sub str with k unique characters", () => {
  const case1 = "aabbcc"
  const k1 = 2
  const expected1 = "aabb"
  test(`the longest substr of ${case1} with ${k1} unique characters should be ${expected1}`, () => {
    const actual = longestSubstrWithUniqueChar(case1, k1)
    console.log(actual)
    expect(actual).toBe(expected1)
  })
  const case2 = "aabbcc"
  const k2 = 1
  const expected2 = "aa"
  test(`the longest substr of ${case2} with ${k2} unique characters should be ${expected2}`, () => {
    const actual = longestSubstrWithUniqueChar(case2, k2)
    console.log(actual)
    expect(actual).toBe(expected2)
  })

  const case3 = "aaabbb"
  const k3 = 3
  const expected3 = "not existing"
  test(`the longest substr of ${case3} with ${k3} unique characters should be ${expected3}`, () => {
    const actual = longestSubstrWithUniqueChar(case3, k3)
    expect(actual).toBe(expected3)
  })
})

describe("test string permutation", () => {
  const case1_s1 = "ab"
  const case1_s2 = "eidboaoo"
  const case1_expected = false
  test(`test if ${case1_s1} is a permutation of ${case1_s2} should be ${case1_expected}`, () => {
    expect(checkStringPermutation(case1_s1, case1_s2)).toBe(case1_expected)
  })

  const case2_s1 = "ab"
  const case2_s2 = "eidbaooo"
  const case2_expected = true
  test(`test if ${case2_s1} is a permutation of ${case2_s2} should be ${case2_expected}`, () => {
    expect(checkStringPermutation(case2_s1, case2_s2)).toBe(case2_expected)
  })
})

describe("test the minimum window of substring", () => {
  const s1 = "ADOBECODEBANC"
  const t1 = "ABC"
  const expected1 = "BANC"
  test(`${s1} should have the minimum window for ${t1} of ${expected1}`, () => {
    expect(minimumWindow(s1, t1)).toBe(expected1)
  })
})
