import styled from "styled-components";

function lightOrDark(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
}

const ColorBox = styled.div`
  width: 420px;
  height: 97px;
  background: #f9f9fa;
  box-shadow: 0px 13px 31px rgba(12, 20, 33, 0.04),
    0px 9.45547px 20.8947px rgba(12, 20, 33, 0.032375),
    0px 6.58125px 13.5141px rgba(12, 20, 33, 0.027),
    0px 4.31641px 8.38574px rgba(12, 20, 33, 0.023125),
    0px 2.6px 5.0375px rgba(12, 20, 33, 0.02),
    0px 1.37109px 2.99707px rgba(12, 20, 33, 0.016875),
    0px 0.56875px 1.79219px rgba(12, 20, 33, 0.013), inset 0px 2px 1px #ffffff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 30px;
`;

const Swatch = styled.div`
  background: ${(props) => (props.color ? props.color : "#000")};
  border-radius: 14px;
  width: 96px;
  height: 48px;
  margin-left: 24px;
  ${(props) => {
    if (props.color) {
      if (lightOrDark(props.color) === "light") {
        return "border: 1px solid #E1E2E3 !important;";
      } else {
        return null;
      }
    }
  }}
`;

const Meta = styled.div`
  width: auto;
  height: 49px;
  filter: drop-shadow(0px 0px 3px #ffffff);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 18px;
  margin-right: 24px;
`;

const ColorName = styled.span`
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;

  color: #000000;
`;

const ColorCode = styled.span`
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;

  color: #2f3132;
`;

export { ColorBox, Swatch, Meta, ColorName, ColorCode };
