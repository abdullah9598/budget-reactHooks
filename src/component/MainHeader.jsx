import React from "react";
import { Header } from "semantic-ui-react";

function MainHeader(props) {
  return (
    // {/* Header of the application */}

    <Header as={props.type} color={props.color} style={{marginTop:'20px'}}>
      {props.title}
    </Header>
  );
}

export default MainHeader;
