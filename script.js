let dataTextArea = document.getElementById("dataTextArea");
let filteredTextArea = document.getElementById("filteredTextArea");
let container = document.getElementById("container");

let remCommaOpt = document.getElementById("remCommaOptId");
let remFullStopOptId = document.getElementById("remFullStopOptId");
let remWhitespaceOpt = document.getElementById("remWhitespaceOptId");
let remDblQuoteIdOpt = document.getElementById("remDblQuoteId");
let remSinglQuoteId = document.getElementById("remSinglQuoteId");
let allLowerCaseId = document.getElementById("allLowerCaseId");
let allUpperCaseId = document.getElementById("allUpperCaseId");
let remSpecCharsOpt = document.getElementById("remSpecChars");
let remSplitCharsOpt = document.getElementById("remSplitChars");
let remNumbersOpt = document.getElementById("remNumbers");
let trimExtraSpaceopt = document.getElementById("trimExtraSpace");

container.addEventListener("input", () => {
  let textData = dataTextArea.value;
  let applyOptions = [
    {
      option: remCommaOpt.checked,
      text: (textData) => textData.replace(/,/g, ""), // one expression, hence why it returns itself
    },
    {
      option: remFullStopOptId.checked,
      text: (textData) => textData.replace(/\./g, ""),
    },
    {
      option: remWhitespaceOpt.checked,
      text: (textData) => textData.replace(/\s+/g, ""),
    },
    {
      option: remDblQuoteIdOpt.checked,
      text: (textData) => textData.replace(/"/g, ""),
    },
    {
      option: remSinglQuoteId.checked,
      text: (textData) => textData.replace(/'/g, ""),
    },
    {
      option: allLowerCaseId.checked,
      text: (textData) => textData.toLowerCase(),
    },
    {
      option: allUpperCaseId.checked,
      text: (textData) => textData.toUpperCase(),
    },
    {
      option: remSpecCharsOpt.value,
      text: (textData) => {
        //prettier-ignore
        let wordsToRemArray = remSpecCharsOpt.value.split(",").map(textData => textData.trim());

        //prettier-ignore
        let valuesToRemove = new RegExp("\\b(" + wordsToRemArray.join("|") + ")\\b", "gi"); // \\b is a boundary flag

        //prettier-ignore
        return textData.replace(valuesToRemove, '').replace(/\s{2,}/g, ' ').trim(); // s{2,} means 2 or more spaces
      },
    },
    {
      option: remSplitCharsOpt.value,
      text: (textData) => {
        //prettier-ignore
        let valuesToRemove = new RegExp(`[${remSplitCharsOpt.value.split("").join("")}]`, "g");
        return textData.replace(valuesToRemove, "");
      },
    },
    {
      option: remSplitCharsOpt.value,
      text: (textData) => {
        //prettier-ignore
        let valuesToRemove = new RegExp(`[${remSplitCharsOpt.value.split("").join("")}]`, "g");
        return textData.replace(valuesToRemove, "");
      },
    },
    {
      option: remNumbersOpt.checked,
      //prettier-ignore
      text: (textData) => textData.replace(/[0-9]/g, ""), //if code contains { } in this line, it will NOT return the value
    },
    {
      option: trimExtraSpaceopt.checked,
      //prettier-ignore
      text: (textData) => textData.replace(/\s{2,}/g, " ").trim(),
    },
  ];

  applyOptions.forEach((item) => {
    if (item.option) {
      textData = item.text(textData);
    }
  });

  filteredTextArea.value = textData;
});
