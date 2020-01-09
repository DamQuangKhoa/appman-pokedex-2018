import React, { useState, useEffect } from "react";
import { List, Card, Row, Button, Modal, Input } from "antd";
import Meta from "antd/lib/card/Meta";
import PokeInfo from "./PokeInfo";
import CardItem from "./CardItem";
import callAPI from "../utils";

const { Search } = Input;

const HomePage = props => {
  const [visible, setVisible] = useState(false);
  const [myPoke, setMyPoke] = useState([]);
  const [searchPoke, setSearchPoke] = useState([]);

  const getValue = item => {
    const hp = item.hp > 100 ? 100 : 0;
    let strength = 0;
    let weakness = 0;
    let damage = 0;
    let tmp = "";
    if (item.attacks) {
      strength = item.attacks.length * 50;
      item.attacks.forEach(element => {
        tmp = element.damage.match(/\d/g);
        tmp = tmp ? tmp.join("") : 0;
        damage += parseInt(tmp);
      });
    } else {
      strength = 0;
    }
    if (item.weaknesses) {
      weakness = 100;
    } else {
      weakness = 0;
    }

    let happiness = (hp / 10 + damage / 10 + 10 - weakness) / 5;
    return { hp, strength, weakness };
  };
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = e => {
    setVisible(false);
  };
  useEffect(() => {
    getData();
    return () => {
      // cleanup
    };
  }, []);

  const getData = async () => {
    const data = localStorage.getItem("searchPoke");
    if (!data) {
      const payload = await callAPI("cards?limit=30");
      if (payload.data) {
        await setSearchPoke(payload.data.cards);
        localStorage.setItem("searchPoke", JSON.stringify(payload.data.cards));
      }
    }
    await setSearchPoke(JSON.parse(data));

    // return;
  };
  const searhByValue = async value => {
    const payload = await callAPI(`cards/?limit=30&name=${value}`);
    if (payload.data) {
      await setSearchPoke(payload.data.cards);
      // localStorage.setItem("searchPoke", JSON.stringify(payload.data.cards));
    }
  };
  const handleSearch = e => {
    searhByValue(e.target.value);
  };
  const addToMyPoke = item => {
    const data = searchPoke.filter(e => {
      return e.id !== item.id;
    });
    setSearchPoke(data);
    setMyPoke([...myPoke, item]);
  };
  const handleRemove = item => {
    const data = myPoke.filter(e => {
      return e.id !== item.id;
    });
    setMyPoke(data);
    setSearchPoke([...searchPoke, item]);
  };
  return (
    <>
      <Modal
        width={800}
        footer={null}
        title={
          <Search
            placeholder="Find pokemon"
            onChange={value => handleSearch(value)}
          />
        }
        visible={visible}
        onCancel={handleOk}
      >
        <List
          grid={{ column: 1 }}
          dataSource={searchPoke}
          renderItem={item => (
            <List.Item>
              <Row>
                <CardItem
                  addToMyPoke={addToMyPoke}
                  getValue={getValue}
                  item={item}
                />
              </Row>
              {/* <Card title={item.title}>Card content</Card> */}
            </List.Item>
          )}
        />
      </Modal>
      <h1 style={{ textAlign: "center" }}>My Pokedex </h1>
      <List
        grid={{ column: 2 }}
        dataSource={myPoke}
        renderItem={item => (
          <List.Item>
            <Row>
              <Card
                style={{ width: 300, margin: "auto" }}
                cover={<img alt="example" src={item.imageUrlHiRes} />}
                actions={[
                  <Button
                    icon="close"
                    type="danger"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </Button>
                ]}
              >
                <Meta
                  title={item.title}
                  description={<PokeInfo item={item} getValue={getValue} />}
                />
              </Card>

              {/* <CardItem /> */}
            </Row>

            {/* <Card title={item.title}>Card content</Card> */}
          </List.Item>
        )}
      />
      <div style={{ backgroundColor: "#d84800", height: "50px" }}>
        <Button
          style={{ left: "50%" }}
          size="large"
          type="primary"
          shape="circle"
          icon="plus"
          onClick={showModal}
        />
      </div>
    </>
  );
};

export default HomePage;
