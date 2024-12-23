/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../../styles/media";
import { d, m } from "../../../styles/convert";

export const TextareaCom = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${des()} {
    height: ${d(102)};
    border-radius: ${d(18)};
  }

  ${mob()} {
    height: ${m(74)};
    border-radius: ${m(12)};
  }
`;

export const Reset = styled(motion.span)`
  position: absolute;
  z-index: 9;
  border-style: solid;
  border-color: var(--pink);
  background-color: var(--pink);
  color: var(--orange);

  ${des()} {
    top: ${d(5)};
    right: ${d(4.5)};
    border-radius: ${d(18)};
    border-width: ${d(1)};
    font-size: ${d(13)};
    padding: ${d(8)} ${d(12)};
  }

  ${mob()} {
    top: ${m(2)};
    right: ${m(2.3)};
    border-radius: ${m(12)};
    border-width: ${m(1)};
    font-size: ${m(9)};
    padding: ${m(4)} ${m(6)};
  }
`;

export const Input = styled(motion.textarea)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  font-weight: 500;
  line-height: 130%;
  resize: none;
  color: var(--gray-dark);
  background-color: var(--white);
  border-style: solid;
  border-color: var(--gray);
  overflow: hidden;
  border-radius: inherit;

  ${des()} {
    font-size: ${d(14)};
    padding: ${d(22)};
    border-width: ${d(1)};
  }

  ${mob()} {
    font-size: ${m(12)};
    padding: ${m(12)};
    border-width: ${m(1)};
  }

  &:disabled {
    pointer-events: none;
  }
`;
