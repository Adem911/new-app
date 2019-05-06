import React from "react";
import { inject, observer } from 'mobx-react';
import { Collapse, Icon, Col, Row } from "antd";
import "./StreamsList.css";

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 14,
  border: 0,
  overflow: "hidden"
};



const StreamsList = inject("twitch")(observer((props: any) => {
  

  const list = props.twitch.searchResponce.map((el: any) => {
        
    const favoriteHandler = () => {
      el.favorite = !el.favorite;
      el.favorite  ? props.twitch.favoriteChannels.push(el) : 
      props.twitch.favoriteChannels.filter((elem:any) => {
        return elem.favorite === true;
      });
      
      console.log(props.twitch.favoriteChannels);
    };

    const iconTheme = el.favorite ? "filled" : "outlined";
    const panelHeader = (
      <Row>
        <Col span={4}>
          <img src={el.channel.logo} alt="logo" style={{ width: "25px" }} />{" "}
          {el.channel.name}
        </Col>
        <Col span={10}>Content: {el.game}</Col>
        <Col span={4}>Language: {el.channel.language}</Col>
      </Row>
    );
    return (
      <Collapse
        className="stream-list"
        key={el._id}
        bordered={false}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header={panelHeader} key="1" style={customPanelStyle}>
          <Row>
            <Col span={12}>
              <p>Title: {el.channel.status}</p>
              <p>Viewers: {el.viewers}</p>
              <a
                href={el.channel.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Channel
              </a>
              <p >
                <Icon type="star" theme={iconTheme} onClick={favoriteHandler} />
              </p>
            </Col>
            <Col span={12}>
              <img
                src={el.preview.large}
                alt="preview"
                style={{ width: "320px" }}
              />
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  });

  return <ul>{list}</ul>; // StreamList return
}));

export default StreamsList;
