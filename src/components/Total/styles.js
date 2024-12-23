/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const TotalCom = styled.div`
  display: grid;

  ${des()} {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${d(10)};

    & button:first-of-type {
      display: none;
    }
  }

  ${mob()} {
    grid-gap: ${m(20)};
    margin-top: ${m(-10)};

    & button:first-of-type {
      order: -1;
    }
  }
`;

export const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  ${des()} {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: ${d(5)};
  }

  ${mob()} {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    gap: ${m(12)};
  }
`;

export const Text = styled.span`
  color: var(--gray-dark);
  font-weight: 400;
  line-height: 130%;

  ${des()} {
    font-size: ${d(12)};
  }

  ${mob()} {
    font-size: ${m(12)};
    margin-bottom: ${m(1.6)};
  }
`;

export const Price = styled.div`
  font-weight: 400;
  line-height: 110%;

  ${des()} {
    font-size: ${d(40)};
    letter-spacing: ${d(-1.2)};
  }

  ${mob()} {
    font-size: ${m(24)};
    letter-spacing: ${m(-0.72)};
  }
`;
