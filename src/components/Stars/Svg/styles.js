/** @format */

import styled from "styled-components";
import { des, mob } from "../../../styles/media";
import { d, m } from "../../../styles/convert";

export const SvgCom = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-color: ${({ $styledBorder }) => ($styledBorder ? "#000" : "var(--transparent)")};
  border-radius: inherit;
  -webkit-transition-property: fill, border-color;
  transition-property: fill, border-color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;

  ${des()} {
    border-width: ${d(0.5)};
  }

  ${mob()} {
    border-width: ${m(0.5)};
  }

  & path {
    -webkit-transition: fill;
    transition: fill;
    -webkit-transition-duration: inherit;
    transition-duration: inherit;
    -webkit-transition-timing-function: inherit;
    transition-timing-function: inherit;
  }

  & div {
    width: 100%;
    height: auto;
    text-align: center;
    font-weight: 300;
    -webkit-transition: color 0.3s ease 0s;
    transition: color 0.3s ease 0s;
    letter-spacing: 8px;

    &:nth-of-type(1) {
      font-size: 74px;
      margin-bottom: 156px;
      line-height: 1.1;
    }

    &:nth-of-type(2) {
      font-size: 43.5px;
      margin-bottom: 23.5px;
    }

    &:nth-of-type(3) {
      font-size: 41px;
      margin-bottom: 23.5px;
    }

    &:nth-of-type(4) {
      font-size: 45px;
    }
  }
`;
