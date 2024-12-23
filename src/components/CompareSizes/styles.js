/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const CompareSizesCom = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.div`
  position: relative;
  overflow: hidden;
  /* pointer-events: none; */

  ${des()} {
    width: ${d(600)};
    padding-bottom: 33%;
    border-radius: ${d(20)};
  }

  ${mob()} {
    width: ${m(280)};
    padding-bottom: 78%;
    border-radius: ${m(15)};
  }

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
