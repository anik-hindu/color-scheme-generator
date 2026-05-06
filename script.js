const colorApiScheme = "https://www.thecolorapi.com/scheme";
const colorMode = "monochrome";
const hexValue = "0047AB";

fetch(`${colorApiScheme}?hex=${hexValue}&mode=${colorMode}&count=5`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
