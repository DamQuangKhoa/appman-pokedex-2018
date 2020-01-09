import React from "react";
import { Row, Col, Button } from "antd";
import PokeAttrSecond from "./PokeAttrSecond";
import { HeartIcon } from "./HeartIcon";

const CardItem = props => {
  const { item } = props;
  const { hp, strength, weakness } = props.getValue(item);
  const handleClick = () => {
    props.addToMyPoke(item);
  };
  return (
    <>
      {/* <Card> */}
      <Col span={8}>
        <img
          style={{ width: "100%", padding: "20px" }}
          alt="example"
          src={item.imageUrlHiRes}
        />

        {/* <h1>hello</h1> */}
      </Col>
      <Col span={16} style={{ padding: "20px" }}>
        <Row>
          <Col span={20}>
            <h1>{item.name}</h1>
          </Col>
          <Col span={4}>
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={handleClick}
            />
          </Col>
        </Row>

        <PokeAttrSecond title={"HP"} value={hp} />
        <PokeAttrSecond title={"STR"} value={strength} />
        <PokeAttrSecond title={"WEAK"} value={weakness} />
        {/* <PokeAttr />
          <PokeAttr />
          <PokeAttr /> */}

        <HeartIcon style={{ color: "hotpink" }} />
        <HeartIcon style={{ color: "hotpink" }} />
        <HeartIcon style={{ color: "hotpink" }} />
      </Col>
      {/* </Card> */}
    </>
  );
};

export default CardItem;
