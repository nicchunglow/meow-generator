const MeowConfig = {
  general: "Meow",
};

const ConvertEnglishToMeow = (input) => {
  const inputSplit = input.split(" ");
  if (inputSplit.length > 1) {
    console.log(inputSplit);
    const wordArr = [];
    inputSplit.forEach(() => {
      wordArr.push("Meow");
    });
    return wordArr.join(" ");
  } else {
    return "Meow";
  }
};

module.exports = ConvertEnglishToMeow;
