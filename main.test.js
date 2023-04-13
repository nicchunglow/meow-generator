const ConvertEnglishToMeow = require("./main");

describe("ConvertEnglishToMeow", () => {
  test("should convert input to Meow", () => {
    const result = ConvertEnglishToMeow("Something");
    const expected = "Meow";
    expect(result).toBe(expected);
  });
});
