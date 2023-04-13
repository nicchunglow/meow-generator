const MeowConfig = {
  General: "Meow",
  Punctuation: {
    FullStop: ".",
  },
};

const ConvertEnglishToMeow = (input) => {
  const inputSplit = input.split(" ");
  let finalSentence = "";
  if (inputSplit.length > 1) {
    const wordArr = [];
    inputSplit.forEach((_, index) => {
      const word = index > 0 ? MeowConfig.General.toLowerCase() : MeowConfig.General;
      wordArr.push(word);
    });
    finalSentence = `${wordArr.join(" ")}`;
  }
  return finalSentence
    ? finalSentence + MeowConfig.Punctuation.FullStop
    : MeowConfig.General + MeowConfig.Punctuation.FullStop;
};

module.exports = ConvertEnglishToMeow;
