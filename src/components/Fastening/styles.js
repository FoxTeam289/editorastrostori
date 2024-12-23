/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const FasteningCom = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
`;

export const Label = styled(motion.label)`
  position: relative;
  width: 100%;
  border-style: solid;
  border-color: var(--gray);
  background-color: var(--gray-light);

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  ${des()} {
    border-width: ${d(1)};
    padding: ${d(10)} ${d(16)} ${d(10)} ${d(20)};
    border-radius: ${d(20)};
    height: ${d(64)};
  }

  ${mob()} {
    border-width: ${m(1)};
    padding: ${m(8)} ${m(16)};
    border-radius: ${m(16)};
    height: ${m(64)};
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-weight: 500;
  line-height: 130%;

  ${des()} {
    font-size: ${d(16)};
    letter-spacing: ${d(-0.54)};
  }

  ${mob()} {
    font-size: ${m(12)};
    letter-spacing: ${m(-0.36)};
    padding-right: ${m(30)};
  }
`;

export const Wrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  ${des()} {
    gap: ${d(10)};
  }

  ${mob()} {
    gap: ${m(10)};
  }
`;

export const Price = styled.div`
  color: var(--gray-dark);
  font-weight: 500;
  line-height: 130%;

  ${des()} {
    font-size: ${d(15)};
    letter-spacing: ${d(-0.45)};
  }

  ${mob()} {
    font-size: ${m(12)};
    letter-spacing: ${m(-0.36)};
  }
`;

export const Checkbox = styled.div`
  display: block;
  position: relative;
  z-index: 99;
  background-color: var(--gray-light);
  overflow: hidden;
  -webkit-transition-property: box-shadow, background-color;
  transition-property: box-shadow, background-color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;

  ${des()} {
    width: ${d(60)};
    height: ${d(32)};
    border-radius: ${d(100)};
    -webkit-box-shadow: 0 0 0 ${d(1)} var(--gray);
    box-shadow: 0 0 0 ${d(1)} var(--gray);
  }

  ${mob()} {
    width: ${m(50)};
    height: ${m(25)};
    border-radius: ${m(100)};
    -webkit-box-shadow: 0 0 0 ${m(1)} var(--gray);
    box-shadow: 0 0 0 ${m(1)} var(--gray);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    aspect-ratio: 1/1;
    height: 100%;
    background-color: var(--gray);
    border-radius: 50%;
    -webkit-transition-property: background-color, -webkit-transform;
    -webkit-transition-property: background-color, transform;
    transition-property: background-color, transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;

    ${des()} {
      -webkit-box-shadow: inset 0 0 0 ${d(2)} var(--gray-light);
      box-shadow: inset 0 0 0 ${d(2)} var(--gray-light);
    }

    ${mob()} {
      -webkit-box-shadow: inset 0 0 0 ${m(2)} var(--gray-light);
      box-shadow: inset 0 0 0 ${m(2)} var(--gray-light);
    }
  }

  &.active {
    ${des()} {
      -webkit-box-shadow: 0 0 0 ${d(1)} var(--orange);
      box-shadow: 0 0 0 ${d(1)} var(--orange);
      background-color: var(--orange);

      &::after {
        -webkit-transform: translateX(calc(100% - ${d(4)}));
        transform: translateX(calc(100% - ${d(4)}));
        background-color: var(--orange);
      }
    }

    ${mob()} {
      -webkit-box-shadow: 0 0 0 ${m(1)} var(--orange);
      box-shadow: 0 0 0 ${m(1)} var(--orange);
      background-color: var(--orange);

      &::after {
        -webkit-transform: translateX(calc(100% - ${m(0)}));
        transform: translateX(calc(100% - ${m(0)}));
        background-color: var(--orange);
      }
    }
  }
`;
