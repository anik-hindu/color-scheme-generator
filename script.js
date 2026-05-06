const colorForm = document.getElementById("color-choice-form");
const getColorBtn = document.getElementById("get-color-btn");
const colorApiScheme = "https://www.thecolorapi.com/scheme";

getColorBtn.addEventListener("click", getColor);

function getColor(e) {
  e.preventDefault();
  const formData = new FormData(colorForm);
  const colorMode = formData.get("colorMode");
  const hexValue = formData.get("hexValue").substring(1);

  fetch(`${colorApiScheme}?hex=${hexValue}&mode=${colorMode}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      const colorsData = {
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
    <p class="color-hex">${colorsObj.colorOne}</p>
    <p class="color-hex">${colorsObj.colorTwo}</p>
    <p class="color-hex">${colorsObj.colorThree}</p>
    <p class="color-hex">${colorsObj.colorFour}</p>
    <p class="color-hex">${colorsObj.colorFive}</p>
  `;
}
