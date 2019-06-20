import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const Wrapper = styled.div.attrs({
  className: "wrapper",
})`
  display: flex;
  justify-content: center;
`;

export const ChatBox = styled(Paper)`
  margin: 50px;
`;

export const Paragraph = styled(Typography)`
  color: #232936;
`;
