/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const CreatingCom = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mob()} {
    padding: ${m(50)} 0;
  }
`;

export const Wrap = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--white);
  border-style: solid;
  border-color: var(--gray);

  ${des()} {
    width: ${d(470)};
    padding: ${d(20)} ${d(10)} ${d(30)};
    border-radius: ${d(25)};
    border-width: ${d(1)};
    grid-gap: ${d(30)};
    min-height: ${d(220)};
  }

  ${mob()} {
    width: ${m(280)};
    padding: ${m(20)} ${m(16)};
    border-radius: ${m(20)};
    border-width: ${m(1)};
    grid-gap: ${m(20)};
    min-height: ${m(159)};

    & br {
      display: none;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${des()} {
    grid-gap: ${d(10)};
  }

  ${mob()} {
    grid-gap: ${m(6)};
  }
`;

export const Loader = styled.svg`
  stroke-dasharray: 310;
  stroke-dashoffset: 310;
  height: auto;
  transform: scale(1.8);

  ${des()} {
    width: ${d(100)};
  }

  ${mob()} {
    width: ${m(100)};
  }

  & path {
    &:nth-of-type(1) {
      animation: loading 1s ease 0s infinite alternate;
    }
  }

  @keyframes loading {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const Order = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;

  background-color: var(--white);
  border-style: solid;
  border-color: var(--gray);

  ${des()} {
    width: ${d(470)};
    align-items: center;
    padding: ${d(10)} ${d(12 * 2 + 8)} ${d(10)} ${d(12)};
    border-radius: ${d(25)};
    border-width: ${d(1)};
  }

  ${mob()} {
    width: ${m(280)};
    flex-direction: column;
    padding: ${m(12)} ${m(12)};
    border-radius: ${m(18)};
    border-width: ${m(1)};
    grid-gap: ${m(2)};
  }
`;

export const OrderDefault = styled(Order)`
  border-color: var(--gray);
`;

export const OrderError = styled(Order)`
  border-color: var(--red);
  color: var(--red);
  justify-content: center;
`;

export const OrderTitle = styled.span`
  line-height: 130%;

  ${des()} {
    font-size: ${d(12.5)};
  }

  ${mob()} {
    font-size: ${m(10)};
  }
`;

export const OrderNumber = styled.span`
  color: var(--orange);
  line-height: 130%;

  ${des()} {
    font-size: ${d(12.5)};
  }

  ${mob()} {
    font-size: ${m(10.5)};
  }
`;

export const Copy = styled(motion.div)`
  position: absolute;
  aspect-ratio: 1/1;
  border-radius: inherit;
  pointer-events: ${({ $styledDisabled }) => ($styledDisabled ? "none" : "auto")};

  ${des()} {
    top: 0;
    right: 0;
    height: 100%;
  }

  ${mob()} {
    bottom: 0;
    right: 0;
    height: 80%;
  }

  & svg {
    width: 100%;
    height: 100%;

    ${des()} {
      transform: scale(0.35);
    }

    ${mob()} {
      transform: scale(0.32);
    }
  }

  @media (hover: hover) {
    & rect {
      transition-property: stroke, fill;
      transition-duration: 0.3s;
      transition-timing-function: ease;
    }

    &:hover rect {
      &:first-of-type {
        stroke: var(--orange);
      }

      &:last-of-type {
        fill: var(--orange);
      }
    }
  }
`;
