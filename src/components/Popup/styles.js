/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const PopupCom = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.3);

  ${des()} {
    -webkit-backdrop-filter: blur(${d(10)});
    backdrop-filter: blur(${d(10)});
  }

  ${mob()} {
    -webkit-backdrop-filter: blur(${m(10)});
    backdrop-filter: blur(${m(10)});
  }
`;

export const Close = styled.button`
  position: absolute;
  z-index: 99;
  background-color: transparent;

  ${des()} {
    width: ${d(30)};
    height: ${d(30)};
    top: ${d(20)};
    right: ${d(20)};
  }

  ${mob()} {
    width: ${m(24)};
    height: ${m(24)};
    top: ${m(10)};
    right: ${m(10)};
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    background-color: var(--black);
    -webkit-transition-property: background-color, width;
    transition-property: background-color, width;
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;

    @media (hover: hover) {
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
    }

    ${des()} {
      height: ${d(2)};
      border-radius: ${d(100)};
    }

    ${mob()} {
      height: ${m(2)};
      border-radius: ${d(100)};
    }
  }

  &::after {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (hover: hover) {
    cursor: pointer;

    &:hover {
      &::after,
      &::before {
        background-color: var(--orange);
      }
    }
  }

  &:active {
    &::after,
    &::before {
      background-color: var(--orange);
      width: 50%;
    }
  }
`;
