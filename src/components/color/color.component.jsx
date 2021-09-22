import React from "react";
import { ColorName } from "./color.styles";
import { ColorCode } from "./color.styles";
import { Meta } from "./color.styles";
import { Swatch } from "./color.styles";
import { ColorBox } from "./color.styles";

export const ColorComponent = ({
  hexCode = "#000000",
  colorName = "BLACK",
}) => {
  return (
    <>
      <ColorBox>
        <Swatch color={hexCode} />
        <Meta>
          <ColorName>{colorName}</ColorName>
          <ColorCode>{hexCode}</ColorCode>
        </Meta>
      </ColorBox>
    </>
  );
};
