/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const SelectCom = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${des()} {
    gap: ${d(10)};
  }

  ${mob()} {
    margin-top: ${m(-6)};
    gap: ${m(8)};
  }
`;

export const SelectEl = styled.div`
  position: relative;
  width: 100%;

  ${des()} {
    height: ${d(68)};
  }

  ${mob()} {
    height: ${m(40)};
  }
`;

export const SelectHead = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-style: solid;
  border-color: var(--gray);
  color: var(--gray-dark);
  overflow: hidden;

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
    border-radius: ${d(18)};
    border-width: ${d(1)};
    padding: 0 ${d(22)};
  }

  ${mob()} {
    border-radius: ${m(12)};
    border-width: ${m(1)};
    padding: 0 ${m(12)};
  }

  .active & {
    border-color: var(--orange) !important;
    color: var(--black) !important;
  }
`;

export const SelectText = styled.div`
  color: inherit;
  font-weight: 500;
  line-height: 130%;
  -webkit-transition: color 0.3s ease 0s;
  transition: color 0.3s ease 0s;

  ${des()} {
    font-size: ${d(14)};
  }

  ${mob()} {
    font-size: ${m(11)};
  }
`;

export const SelectArrow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  ${des()} {
    right: ${d(22)};
    width: ${d(24)};
    height: ${d(24)};
  }

  ${mob()} {
    right: ${m(12)};
    width: ${m(16)};
    height: ${m(16)};
  }

  & svg {
    -webkit-transition: -webkit-transform 0.3s ease 0s;
    -webkit-transition: transform 0.3s ease 0s;
    transition: transform 0.3s ease 0s;

    ${des()} {
      width: ${d(12)};
      height: ${d(6)};
    }

    ${mob()} {
      width: ${m(8)};
      height: ${m(5)};
    }

    .active & {
      -webkit-transform: scaleY(-1);
      -ms-transform: scaleY(-1);
      transform: scaleY(-1);
    }
  }
`;
