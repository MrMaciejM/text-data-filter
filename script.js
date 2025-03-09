let dataTextArea = document.getElementById("dataTextArea");
let filteredTextArea = document.getElementById("filteredTextArea");

let remCommaOpt = document.getElementById("remCommaOptId");
let remWhitespaceOpt = document.getElementById("remWhitespaceOptId");

dataTextArea.addEventListener("input", (e) => {
  let output = filteredTextArea;
  let dataToFilter = e.target.value;

  // options
  let commaOpt = remCommaOpt.checked;
  let whitespaceOpt = remWhitespaceOpt.checked;

  let optionsArray = [commaOpt, whitespaceOpt];

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
  ];

  let resultData = dataToFilter;

  optionsArray.forEach((option, index) => {
    //console.log(dataToFilter);
    if (option) {
      resultData = transformations[index].filter(resultData);
      output.innerText = resultData;
    }
  });
});
