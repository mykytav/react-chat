import React from "react";

import { ChatBox, Paragraph, Wrapper } from "./Dashboards.styles";

export default function Dashboard() {
  return (
    <Wrapper>
      <ChatBox>
        <Paragraph variant='h5' component='h3'>
          This is a sheet of paper.
        </Paragraph>
        <Paragraph component='p'>Paper can be used to build surface or other elements for your application.</Paragraph>
      </ChatBox>
    </Wrapper>
  );
}
