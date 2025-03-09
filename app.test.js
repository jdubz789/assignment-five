// Imports
import { mockPosts } from "./mockData.js";
import { toTitleCase, getUserNameByID } from "./app.js";
import { assert, describe, expect, test } from "vitest";

// this console log is just to check that my posts have imported correctly
//console.log(mockPosts);

// My first suite of tests. I am testing the mock post data:
describe("JSON Placeholder posts", () => {
  // Individual tests. Describing what it is testing for:
  test("should return a positive result that it is an array", () => {
    assert.isArray(mockPosts, "mockPosts in should be an array");
  });

  // I now want to test the individual items in an array.
  // First of all I have to describe what the structure of an item should be:
  const bodyObject = {
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  };

  test("Each item in the array should be an object.", () => {
    expect(mockPosts).toContainEqual(bodyObject);
  });

 // Write a test which checks that "Each item in the array should be an object, but with a for loop":
test("Each item in the Array should be an object, through a for loop.", () => {
    for (let i = 0; i < mockPosts.length; i++) {
      expect(mockPosts[i]).toMatchObject(bodyObject);
    }
  });
  
  // Test the function toTitleCase:
  test("any string put through the toTitleCase function should return a Titled Case String.", () => {
    const input = "this is a test string";
    const result = toTitleCase(input);
    const expected = "This Is A Test String";
  
    expect(result).toBe(expected);
  });
  
  // Next, make a 'toTitleCase' test work with a single title, from a post, from the mockData
  test("a post title, put through the toTitleCase function, should return a Titled Case String.", () => {
    const input = "This Is A Test Title"; 
    const result = toTitleCase(input);
    const expected = "This Is A Test Title"; 
  
    expect(result).toBe(expected);
  });

// The following tests are going to fail. Part of your assignment is to figure out why (it's partly because your project lead gets paid way too much, and spends their time at the pub, and not coding correctly....):
test("individual item should not be an array", () => {
    mockPosts.forEach((post) => {
      assert.isNotArray(post, "We expected the value to NOT be an array, so check what it is");
    });
  });
  
  // Perhaps some of these tests should be in a different suite??
  test("checks that each userID, in each item, should be a number", () => {
    mockPosts.forEach((post) => {
      expect(post.userId).toEqual(expect.any(Number));
    });
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(4);
    const expected = "Jez";

    expect(result).toBe(expected);
  });

  test("return the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(5);
    const expected = "Sam";

    expect(result).toBe(expected);
  });
});
