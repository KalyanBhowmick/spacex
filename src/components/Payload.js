import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Payload = (props) => {

    console.log(props)
  return (
    <Card>
      {/* <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} /> */}
      <Card.Content>
  <Card.Header>{props.name}</Card.Header>
  <Card.Meta>{props.nationality}</Card.Meta>
        <Card.Description>
          {props.manufacturer}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="/">
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default Payload;
