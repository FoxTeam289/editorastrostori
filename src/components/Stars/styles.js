/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const Sky = styled.div`
  overflow: hidden;
  -webkit-transition: background-color 0.3s ease 0s;
  transition: background-color 0.3s ease 0s;
  pointer-events: none;

  ${des()} {
    position: sticky;
    top: ${d(20)};
    width: ${d(522)};
    height: ${d(745.74)};
    -webkit-box-shadow: 0 0 ${d(50)} 0 var(--gray);
    box-shadow: 0 0 ${d(50)} 0 var(--gray);
    border-radius: ${d(20)};
  }

  ${mob()} {
    position: absolute;
    top: ${m(79)};
    left: ${m(10)};
    width: ${m(300)};
    height: ${m(428.56)};
    z-index: 999;
    border-radius: ${m(10)};
  }

  & #${({ $styledId }) => $styledId} {
    position: absolute;
    z-index: 1;
    left: 50%;
    aspect-ratio: 1/1;

    ${des()} {
      width: ${({ $styledFull }) => ($styledFull ? "100%" : d(364))};
      top: ${({ $styledFull }) => ($styledFull ? "50%" : d(85))};
      -webkit-transform: ${({ $styledFull }) => ($styledFull ? "translate(-50%, -52%) scale(1.63)" : "translateX(-50%)")};
      -ms-transform: ${({ $styledFull }) => ($styledFull ? "translate(-50%, -52%) scale(1.63)" : "translateX(-50%)")};
      transform: ${({ $styledFull }) => ($styledFull ? "translate(-50%, -52%) scale(1.63)" : "translateX(-50%)")};
    }

    ${mob()} {
      width: ${({ $styledFull }) => ($styledFull ? "100%" : m(209))};
      top: ${({ $styledFull }) => ($styledFull ? "50%" : m(49))};
      -webkit-transform: ${({ $styledFull }) => ($styledFull ? "translate(-50%, -52%) scale(1.63)" : "translateX(-49.9%)")};
      -ms-transform: ${({ $styledFull }) => ($styledFull ? "translate(-50%, -52%) scale(1.63)" : "translateX(-49.9%)")};
      transform: ${({ $styledFull }) => ($styledFull ? "translate(-50%, -52%) scale(1.63)" : "translateX(-49.9%)")};
    }
  }
`;
