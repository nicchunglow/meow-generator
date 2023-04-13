const MeowConfig = {
  general: "Meow",
};

const ConvertEnglishToMeow = (input) => {
  const inputSplit = input.split(" ");
  if (inputSplit.length > 1) {
    const wordArr = [];
    inputSplit.forEach((_, index) => {
      const word = index > 0 ? MeowConfig.general.toLowerCase() : MeowConfig.general;
      wordArr.push(word);
    });
    return `${wordArr.join(" ")}.`;
  } else {
    return `${MeowConfig.general}.`;
  }
};

module.exports = ConvertEnglishToMeow;
