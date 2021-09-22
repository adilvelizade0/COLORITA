import React from "react";
import { ColorComponent } from "../color/color.component";
import { ColorsContainer, ColorsList } from "./colors.styles";
import data from "../../data/bigdata.json";

export const ColorsComponent = () => {
  console.log(data.length);
  const dataA = data.slice(0, 316);
  const dataB = data.slice(316, 632);
  const dataC = data.slice(632, data.length - 1);

  console.log(dataA.length, dataB.length, dataC.length);
  const renderItemA = (index, key) => {
    return (
      <ColorComponent
        key={key}
        hexCode={dataA[index].hex}
        colorName={dataA[index].color}
      />
    );
  };
  const renderItemB = (index, key) => {
    return (
      <ColorComponent
        key={key}
        hexCode={dataB[index].hex}
        colorName={dataB[index].color}
      />
    );
  };
  const renderItemC = (index, key) => {
    return (
      <ColorComponent
        key={key}
        hexCode={dataC[index].hex}
        colorName={dataC[index].color}
      />
    );
  };

  return (
    <ColorsContainer>
      <ColorsList
        itemRenderer={renderItemA}
        length={dataA.length}
        type="variable"
      />
      <ColorsList
        itemRenderer={renderItemB}
        length={dataB.length}
        type="variable"
      />
      <ColorsList
        itemRenderer={renderItemC}
        length={dataC.length}
        type="variable"
      />
    </ColorsContainer>
  );
};
