/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../../styles/media";
import { d, m } from "../../../styles/convert";

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
  display: none;

  &:checked + label {
    border-color: var(--orange) !important;
    pointer-events: none !important;
  }
`;

export const Label = styled(motion.label)`
  position: relative;
  z-index: 9;
  width: 100%;
  border-style: solid;
  border-color: var(--gray);
  overflow: hidden;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  ${({ $styledBig }) => $styledBig && "padding-bottom: 134.29%;"}

  ${des()} {
    border-radius: ${d(16)};
    border-width: ${d(1)};
    ${({ $styledBig }) => !$styledBig && `height: ${d(60)};`}
    ${({ $styledBig }) => !$styledBig && `padding: ${d(10)};`}
  }

  ${mob()} {
    border-radius: ${m(12)};
    border-width: ${m(1)};
    ${({ $styledBig }) => !$styledBig && `height: ${m(40)};`}
    ${({ $styledBig }) => !$styledBig && `padding: ${m(5)};`}
  }
`;

export const Text = styled.span`
  font-weight: 500;
  line-height: 130%;

  ${des()} {
    font-size: ${d(15)};
    letter-spacing: ${d(-0.3)};
  }

  ${mob()} {
    font-size: ${m(12)};
    letter-spacing: ${m(-0.24)};
  }
`;

export const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;
