let dataTextArea = document.getElementById("dataTextArea");
let filteredTextArea = document.getElementById("filteredTextArea");

let remCommaOpt = document.getElementById("remCommaOptId");
let remWhitespaceOpt = document.getElementById("remWhitespaceOptId");
let remDblQuoteIdOpt = document.getElementById("remDblQuoteId");
let remSinglQuoteId = document.getElementById("remSinglQuoteId");
let remSpecWordsOpt = document.getElementById("remSpecWords");
let allLowerCaseId = document.getElementById("allLowerCaseId");

dataTextArea.addEventListener("input", (e) => {
  let output = filteredTextArea;
  let dataToFilter = e.target.value;

  //console.log(allLowerCaseId.checked);

  // options
  let commaOpt = remCommaOpt.checked;
  let whitespaceOpt = remWhitespaceOpt.checked;
  let dblQuoteIdOpt = remDblQuoteIdOpt.checked;
  let singlQuoteId = remSinglQuoteId.checked;
  let remSpecWords = remSpecWordsOpt.value;
  let allLowerCaseOpt = allLowerCaseId.checked;

  //console.log(allLowerCaseOpt);

  let optionsArray = [
    commaOpt,
    whitespaceOpt,
    dblQuoteIdOpt,
    singlQuoteId,
    remSpecWords,
    allLowerCaseOpt,
  ];

  // Options object + data filtering functions
  const transformations = [
    {
      option: remCommaOpt,
      filter: (text) => text.replace(/,/g, ""),
    },
    {
      option: whitespaceOpt,
      filter: (text) => text.replace(/\s+/g, ""),
    },
    {
      option: dblQuoteIdOpt,
      filter: (text) => text.replace(/"+/g, ""),
    },
    {
      option: singlQuoteId,
      filter: (text) => text.replace(/'+/g, ""),
    },
    ,
    {
      option: remSpecWordsOpt,
      filter: (text) => {
        if (remSpecWordsOpt.value.length > 0) {
          //prettier-ignore
          let wordsToRemArray = remSpecWordsOpt.value.split(",").map(word => word.trim());

          //prettier-ignore
          let regex = new RegExp("\\b(" + wordsToRemArray.join("|") + ")\\b", "gi"); // \\b is a boundary flag

          //prettier-ignore
          let updatedText = text.replace(regex, '').replace(/\s{2,}/g, ' ').trim(); // s{2,} means 2 or more spaces

          return updatedText;
        }
        return text;
      },
    },
    {
      option: allLowerCaseOpt,
      filter: (text) => {
        console.log("Running lowercase filter", text); // Debugging log
        return text.toLowerCase();
      },
    },
  ];

  let resultData = dataToFilter;

  optionsArray.forEach((option, index) => {
    //console.log(index);
    //console.log(option);

    //console.log(dataToFilter);
    if (option) {
      resultData = transformations[index].filter(resultData);
      output.innerText = resultData;
    }
  });
});
