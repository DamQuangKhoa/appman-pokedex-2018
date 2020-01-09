import React from "react";
import { Col, Progress, Row } from "antd";

const PokeAttrSecond = props => {
  return (
    <>
      <Row style={{ padding: "20px" }}>
        <Row gutter={8} style={{ padding: "auto" }}>
          <Col span={4}>
            <h2 style={{ weight: "bold" }}> {props.title} </h2>
          </Col>
          <Col span={16}>
            <Progress
              strokeWidth={30}
              strokeColor="#f3701a"
              percent={props.value}
              showInfo={false}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default PokeAttrSecond;
