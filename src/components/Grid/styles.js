/** @format */

import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const GridCom = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${des()} {
    gap: ${d(12)};
  }

  ${mob()} {
    gap: ${m(15)};
  }
`;

export const GridScroll = styled.div`
  ${des()} {
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: repeat(${({ $styledCol }) => ($styledCol ? $styledCol : "1")}, 1fr);
    grid-template-columns: repeat(${({ $styledCol }) => ($styledCol ? $styledCol : "1")}, 1fr);
    gap: ${d(10)};
  }

  ${mob()} {
    ${({ $styledColMob }) =>
      $styledColMob
        ? `
          width: 100%;
          display: -ms-grid;
          display: grid;
          -ms-grid-columns: repeat(${$styledColMob}, 1fr);
              grid-template-columns: repeat(${$styledColMob}, 1fr);
          gap: ${m(15)} ${m(10)}; 
        `
        : `
          width: 100vw;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: nowrap;
              flex-wrap: nowrap;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
          gap: ${m(10)}; 
          margin: 0 ${m(-10)} ${m(-10)};
          padding: 0 ${m(10)} ${m(10)};
        `}
  }
`;
