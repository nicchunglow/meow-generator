const MeowConfig = {
  General: "Meow",
};

const PunctuationArr = ["!", ".", "?", ","];

const ConvertEnglishToMeow = (input) => {
  const inputSplit = input.split(" ");
  let finalSentence = "";
  if (inputSplit.length > 1) {
    const wordArr = [];
    inputSplit.forEach((word, index) => {
      const processedWord = index > 0 ? MeowConfig.General.toLowerCase() : MeowConfig.General;
      const lastSymbol = word[word.length - 1];
      wordArr.push(PunctuationArr.includes(lastSymbol) ? processedWord + lastSymbol : processedWord);
    });
    finalSentence = `${wordArr.join(" ")}`;
  }
  finalSentence = finalSentence ? finalSentence : MeowConfig.General;

  const finalLastWord = finalSentence[finalSentence.length - 1];
  const finalLastSymbol = finalLastWord[finalLastWord.length - 1];

  return PunctuationArr.includes(finalLastSymbol) ? finalSentence : finalSentence + ".";
};

module.exports = ConvertEnglishToMeow;
