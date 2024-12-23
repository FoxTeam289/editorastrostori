/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const PhraseCom = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${des()} {
    gap: ${d(12)};
  }

  ${mob()} {
    gap: ${m(15)};
  }
`;
