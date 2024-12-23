/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const TitleCom = styled.div`
  width: 100%;
  font-weight: 500;

  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr auto;
  grid-template-columns: 1fr auto;
  gap: 2%;

  & h1 {
    line-height: 110%;

    ${des()} {
      font-size: ${d(40)};
      letter-spacing: ${d(-1.6)};
      margin-left: ${d(-5)};
    }

    ${mob()} {
      font-size: ${m(18)};
      letter-spacing: ${m(-0.72)};
      margin-bottom: ${m(458)};
    }
  }

  & h2 {
    line-height: 130%;

    ${des()} {
      font-size: ${d(18)};
      letter-spacing: ${d(-0.54)};
    }

    ${mob()} {
      font-size: ${m(15)};
      letter-spacing: ${m(-0.45)};
      padding-left: ${m(1)};
    }
  }

  & h3 {
    color: var(--gray-dark);
    line-height: 130%;

    ${des()} {
      font-size: ${d(15)};
      letter-spacing: ${d(-0.45)};
      padding-left: ${d(3)};
    }

    ${mob()} {
      font-size: ${m(12)};
      letter-spacing: ${m(-0.36)};
    }
  }

  & p {
    color: var(--gray-dark);
    line-height: 130%;

    ${des()} {
      font-size: ${d(15)};
      letter-spacing: ${d(-0.45)};
    }

    ${mob()} {
      font-size: ${m(12)};
      letter-spacing: ${m(-0.36)};
    }
  }

  & b {
    color: var(--black);
    font-weight: inherit;
  }
`;

export const More = styled(motion.span)`
  position: relative;
  color: var(--gray-dark);
  font-weight: 400;
  line-height: 130%;

  ${des()} {
    font-size: ${d(14)};
    letter-spacing: ${d(-0.14)};
  }

  ${mob()} {
    font-size: ${m(12)};
    letter-spacing: ${m(-0.12)};
  }
`;

export const Error = styled.span`
  color: var(--red);
  font-weight: 400;
  line-height: 130%;
  opacity: 0;
  -webkit-transition: opacity 0.3s ease 0s;
  transition: opacity 0.3s ease 0s;

  ${des()} {
    font-size: ${d(14)};
    letter-spacing: ${d(-0.14)};
  }

  ${mob()} {
    font-size: ${m(12)};
    letter-spacing: ${m(-0.12)};
  }

  &.active {
    opacity: 1;
  }
`;
