const colorForm = document.getElementById("color-choice-form");
const getColorBtn = document.getElementById("get-color-btn");
const colorApiScheme = "https://www.thecolorapi.com/scheme";
let colorsData = {
  colorOne: "#f55a5a",
  colorTwo: "#2b283a",
  colorThree: "#fbf3ab",
  colorFour: "#aad1b6",
  colorFive: "#a626d3",
};

getColorBtn.addEventListener("click", getColor);
document.addEventListener("click", (e) => {
  if (Object.hasOwn(colorsData, e.target.id)) {
    copyToClipBoard(colorsData[e.target.id]);
  } else if (e.target.dataset.hex) {
    copyToClipBoard(e.target.dataset.hex);
  }
});

function copyToClipBoard(value) {
  navigator.clipboard.writeText(value);
  alert("Copied the hex value: " + value);
}

function getColor(e) {
  e.preventDefault();
  const formData = new FormData(colorForm);
  const colorMode = formData.get("colorMode");
  const hexValue = formData.get("hexValue").substring(1);

  fetch(`${colorApiScheme}?hex=${hexValue}&mode=${colorMode}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      colorsData = {
        colorOne: data.colors[0].hex.value,
        colorTwo: data.colors[1].hex.value,
        colorThree: data.colors[2].hex.value,
        colorFour: data.colors[3].hex.value,
        colorFive: data.colors[4].hex.value,
      };
      renderColor(colorsData);
    });
}

function renderColor(colorsObj) {
  for (let color of Object.keys(colorsObj)) {
    document.getElementById(color).style.backgroundColor = colorsObj[color];
  }

  document.getElementById("hex-value").innerHTML = `
    <p class="color-hex" data-hex="${colorsObj.colorOne}">${colorsObj.colorOne}</p>
    <p class="color-hex" data-hex="${colorsObj.colorTwo}">${colorsObj.colorTwo}</p>
    <p class="color-hex" data-hex="${colorsObj.colorThree}">${colorsObj.colorThree}</p>
    <p class="color-hex" data-hex="${colorsObj.colorFour}">${colorsObj.colorFour}</p>
    <p class="color-hex" data-hex="${colorsObj.colorFive}">${colorsObj.colorFive}</p>
  `;
}

renderColor(colorsData);
