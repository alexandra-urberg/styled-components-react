import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.color || props.theme.colors.primary};
`;

export default function Title(props) {
  return <StyledTitle {...props}/>;
}
