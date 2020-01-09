import React from "react";
import PokeAttr from "./PokeAttr";
import { Row } from "antd";
import { HeartIcon } from "./HeartIcon";

const PokeInfo = props => {
  const { item } = props;
  const { hp, strength, weakness } = props.getValue(item);
  return (
    <>
      <PokeAttr title={"HP"} value={hp} />
      <PokeAttr title={"STR"} value={strength} />
      <PokeAttr title={"WEAK"} value={weakness} />
      <Row>
        <HeartIcon style={{ color: "hotpink" }} />
        <HeartIcon style={{ color: "hotpink" }} />
        <HeartIcon style={{ color: "hotpink" }} />
      </Row>
    </>
  );
};
export default PokeInfo;
