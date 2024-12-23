/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const DescrCom = styled.div`
  width: 100%;
  color: var(--gray-dark);
  line-height: 130%;

  display: flex;
  align-items: flex-start;

  & b {
    font-weight: 400;
    color: var(--orange);
  }

  ${des()} {
    font-size: ${d(14)};
    letter-spacing: ${d(-0.45)};
    padding-left: ${d(1)};
  }

  ${mob()} {
    font-size: ${m(11)};
    letter-spacing: ${m(-0.36)};
    padding-left: ${m(2)};
    grid-gap: ${m(2.5)};

    & br {
      display: none;
    }
  }
`;
