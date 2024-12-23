/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const ContentCom = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  ${des()} {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    padding: ${d(80)} ${d(208)};
    grid-gap: ${d(88)};
  }

  ${mob()} {
    padding: ${m(30)} ${m(10)} ${m(40)};
  }
`;

export const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${des()} {
    -ms-grid-columns: 1fr;
    grid-gap: ${d(40)};
  }

  ${mob()} {
    -ms-grid-columns: 1fr;
    grid-gap: ${m(30)};
  }

  & > div {
    position: relative;
    z-index: 1;
  }
`;
