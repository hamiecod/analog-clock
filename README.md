# Introduction
This repository holds the files for an analog clock built using HTML, CSS(SCSS) and Javascript ES6

## Links
- [Live Site URL](https://hargunclock.netlify.app)

## My procedure
- Figured out 3 formulas(described [here](#maths-equations-used)) that would determine the theta of the three hands of the clock viz the hour, minute and second hand.
- Added the clock png file via upload
- Wrote some basic HTML
- Wrote the styles for the HTML in SCSS
- Compiled SCSS to CSS
- Implemented the mathematical formulas determining the theta of the three hands(described [here](#maths-equations-used)) in javascript
- Tested the code
- Deployed to Netlify

### Built with
- Sematic HTML5 Markup
- SCSS
- Git
- Responsive CSS units(rem, vw, vh, em) that result in making the app auto responsive
- Javascript
- Mathematics(Algebra and Angles) :sunglasses:

### Maths equations used
where `h = number of hours`, `m = number of minutes`, `s = number of seconds`
- theta(hour hand) = (30h)° + (m/2)° + (s/120)°
- theta(minute hand) = (6m)° + (s/10)°
- theta(second hand) = (6s)°

## Author
- Website - [Hargunbeer Singh](https://hargunbeer.netlify.app)
- Twitter - [@hargunbeer](https://twitter.com/hargunbeer)

## License
This piece of code is licensed under [MIT License](./LICENSE)
