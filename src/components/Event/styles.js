/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const EventCom = styled.div`
  position: relative;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${des()} {
    grid-gap: ${d(10)};
  }

  ${mob()} {
    grid-gap: ${m(15)};
  }
`;

export const Grid = styled.div`
  display: -ms-grid;
  display: grid;

  ${des()} {
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: ${d(10)};
  }

  ${mob()} {
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(5, 1fr);
    -ms-grid-rows: ${m(12)};
    grid-gap: ${m(12)} ${m(10)};
  }
`;

export const Btn = styled(motion.button)`
  position: relative;
  width: 100%;
  border: 1px solid red;
  background-color: var(--pink);
  border-style: solid;
  border-color: var(--pink);

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
    border-radius: ${d(18)};
    border-width: ${d(1)};
  }

  ${mob()} {
    border-radius: ${m(12)};
    border-width: ${m(1)};
  }

  & svg {
    ${des()} {
      width: ${d(22)};
      height: ${d(18)};
    }

    ${mob()} {
      width: ${m(16)};
      height: ${m(13)};
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 38%;
    background-color: var(--orange);
    transition: width 0.3s ease 0s;

    ${des()} {
      height: ${d(2)};
      border-radius: ${d(10)};
    }

    ${mob()} {
      height: ${m(1.5)};
      border-radius: ${m(10)};
    }
  }

  &.show::after {
    width: 0%;
  }
`;
