/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../../styles/media";
import { d, m } from "../../../styles/convert";

export const TextCom = styled(motion.input)`
  width: 100%;
  border-style: solid;
  border-color: var(--gray);
  color: var(--gray-dark);
  font-weight: 500;
  line-height: 130%;

  ${({ $styledCenter }) => $styledCenter && "text-align: center;"}

  ${des()} {
    height: ${d(62)};
    border-radius: ${d(18)};
    border-width: ${d(1)};

    font-size: ${d(14)};
    ${({ $styledCenter }) => ($styledCenter ? `padding: 0 ${d(4)};` : `padding: 0 ${d(22)};`)}
  }

  ${mob()} {
    height: ${m(40)};
    border-radius: ${m(12)};
    border-width: ${m(1)};

    font-size: ${m(12)};
    ${({ $styledCenter }) => ($styledCenter ? `padding: 0 ${m(2)};` : `padding: 0 ${m(12)};`)}
  }

  &.error {
    border-color: var(--red) !important;
  }
`;
