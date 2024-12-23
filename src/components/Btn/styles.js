/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const BtnCom = styled(motion.button)`
  width: 100%;
  border-style: solid;
  border-color: var(--orange);

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  ${des()} {
    border-width: ${d(1)};
    height: ${d(68)};
    border-radius: ${d(20)};
  }

  ${mob()} {
    height: ${m(57)};
    border-radius: ${m(14)};
    border-width: ${m(1)};
  }

  ${({ $styledTheme }) =>
    $styledTheme === "light" &&
    `
      color: var(--orange);
      background-color: var(--white);
    `}

  ${({ $styledTheme }) =>
    $styledTheme === "dark" &&
    `
      color: var(--white);
      background-color: var(--orange);
    `}

  & span {
    color: inherit;
    font-weight: 500;

    ${des()} {
      font-size: ${d(15)};
      letter-spacing: ${d(-0.3)};
    }

    ${mob()} {
      font-size: ${m(14)};
      letter-spacing: ${m(-0.14)};
    }
  }
`;
