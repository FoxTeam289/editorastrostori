/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const CheckboxCom = styled.div`
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  display: none;

  &:checked + label svg path:first-of-type {
    opacity: 1;
  }
`;

export const Label = styled(motion.label)`
  position: relative;
  z-index: 999;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  ${des()} {
    -ms-grid-columns: ${d(12)};
    grid-gap: ${d(12)};
  }

  ${mob()} {
    -ms-grid-columns: ${m(10)};
    grid-gap: ${m(10)};
    padding-left: ${m(1)};
  }
`;

export const Title = styled.h2`
  color: inherit;
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

export const Icon = styled.svg`
  ${des()} {
    width: ${d(20)};
    height: ${d(20)};
  }
  ${mob()} {
    width: ${m(16)};
    height: ${m(16)};
  }

  & path:first-of-type {
    opacity: 0;
    -webkit-transition: opacity 0.3s ease 0s;
    -moz-transition: opacity 0.3s ease 0s;
    -o-transition: opacity 0.3s ease 0s;
    transition: opacity 0.3s ease 0s;
  }
`;
