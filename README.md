# Color Scheme Generator

A solo project from **Scrimba’s Front-End Developer Career Path**. Pick a base color and a mode to generate a 5-color palette using **The Color API**, then click any color/hex value to copy it to your clipboard.

## Live Demo

- GitHub Pages: https://anik-hindu.github.io/color-scheme-generator

## Overview

This project is a simple, practical tool for generating color palettes for UI design. It takes a user-selected hex color and a color harmony mode (e.g., monochrome, analogic, complement, triad), fetches a matching palette from **thecolorapi.com**, and renders the results instantly.

## Features

- Choose a base color with the native color picker
- Select a scheme mode:
  - Monochrome
  - Monochrome-dark
  - Monochrome-light
  - Analogic
  - Complement
  - Analogic-complement
  - Triad
- Generates a 5-color palette via The Color API
- Click a color swatch or hex value to copy the hex code
- Clean, minimal UI

## Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- [The Color API](https://www.thecolorapi.com/)

## How It Works

1. The form collects:
   - `hexValue` (from the color input)
   - `colorMode` (from the dropdown)
2. On submit, the app requests a palette from:

   `https://www.thecolorapi.com/scheme?hex=<hex>&mode=<mode>&count=5`

3. The response is used to update:
   - the background colors of the 5 swatches
   - the hex labels below the swatches
4. Clicking a swatch or hex value copies the corresponding hex code using the Clipboard API.
