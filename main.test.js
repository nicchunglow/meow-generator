const ConvertEnglishToMeow = require("./main");

describe("ConvertEnglishToMeow", () => {
  test("should convert input to Meow.", () => {
    const result = ConvertEnglishToMeow("Something");
    const expected = "Meow.";
    expect(result).toBe(expected);
  });
  test("if text is more than 1 word, have 2 meows.", () => {
    const result = ConvertEnglishToMeow("One Two");
    const expected = "Meow meow.";
    expect(result).toBe(expected);
  });
});
