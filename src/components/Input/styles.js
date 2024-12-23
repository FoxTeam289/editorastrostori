/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const InputCom = styled.div`
  position: relative;
  width: 100%;

  &.event {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    &:nth-of-type(1) {
      ${des()} {
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-column-span: 7;
        grid-column-end: 8;
      }

      ${mob()} {
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-column-span: 5;
        grid-column-end: 6;
      }
    }
    &:nth-of-type(5) {
      ${des()} {
        -ms-grid-column: 6;
        grid-column-start: 6;
        -ms-grid-column-span: 1;
        grid-column-end: 7;
      }

      ${mob()} {
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-column-span: 2;
        grid-column-end: 3;
      }
    }
  }

  &.design {
    ${mob()} {
      width: auto;
      min-width: 40%;
    }
  }

  &.receive {
    &:last-of-type {
      ${mob()} {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

        -ms-grid-column: 2;
        grid-column-start: 2;

        -ms-grid-column-span: 4;
        grid-column-end: 4;
      }
    }
  }
`;

export const Label = styled.label`
  position: relative;
  z-index: 9;
  width: 100%;
  border-style: solid;
  border-color: var(--gray);

  -webkit-transition-property: border-color, -webkit-transform;
  transition-property: border-color, -webkit-transform;
  transition-property: border-color, transform;
  transition-property: border-color, transform, -webkit-transform;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;

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
    ${({ $styledDefault }) => $styledDefault && `height: ${d(60)};`}
    ${({ $styledDefault }) => $styledDefault && `padding: ${d(10)};`}
  }

  @media (hover: hover) {
    cursor: pointer;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    &:hover {
      border-color: var(--orange-light);
    }
  }

  &:active {
    -webkit-transform: scale(0.98);
    -ms-transform: scale(0.98);
    transform: scale(0.98);
  }
`;
