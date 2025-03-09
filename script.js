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

  const transformations = [
    { option: remCommaOpt, filter: (text) => text.replace(/,/g, "") },
    { option: whitespaceOpt, filter: (text) => text.replace(/\s,/g, "") },
  ];

  transformations.forEach(({ option, filter }) => {
    if (option.checked) {
      dataToFilter = filter(dataToFilter);
    }
  });

  filteredTextArea.innerText = dataToFilter;
});
//   optionsArray.forEach((item) => {
//     if (item) {
//       switch (item) {
//         case commaOpt:
//           output.innerText = dataToFilter.replace(/,/g, "");
//           break;
//         case whitespaceOpt:
//           output.innerText = dataToFilter.replace(/\s/g, "");
//         default:
//           break;
//       }
//     }
//   });
// });

// console.log(dataTextArea);
