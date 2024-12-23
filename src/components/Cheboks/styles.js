/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const CheboksCom = styled.div`
  position: relative;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;

  ${des()} {
    grid-gap: ${d(10)};
  }

  ${mob()} {
    grid-gap: ${m(10)};
  }
`;
