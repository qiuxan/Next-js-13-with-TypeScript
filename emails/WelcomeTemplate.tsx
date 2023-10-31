import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Body>
        <Container>
          <Text>Welcome to the site!</Text>
          <Text>{name}</Text>
          <Link href="https://google.com">Google</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
