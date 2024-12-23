/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { des, mob } from "../../styles/media";
import { d, m } from "../../styles/convert";

export const ListCom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  background-color: var(--white);
  border-style: solid;
  border-color: var(--gray);
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;

  ${des()} {
    border-radius: ${d(18)};
    border-width: ${d(1)};

    &.select {
      -webkit-transform: translateY(${d(278)});
      -ms-transform: translateY(${d(278)});
      transform: translateY(${d(278)});
      height: ${d(270)};
    }

    &.event {
      -webkit-transform: translateY(${d(178)});
      -ms-transform: translateY(${d(178)});
      transform: translateY(${d(178)});
      height: ${d(242)};
    }
  }

  ${mob()} {
    border-radius: ${m(12)};
    border-width: ${m(1)};

    &.select {
      -webkit-transform: translateY(${m(209)});
      -ms-transform: translateY(${m(209)});
      transform: translateY(${m(209)});
      height: ${m(204)};
    }

    &.event {
      -webkit-transform: translateY(${m(50)});
      -ms-transform: translateY(${m(50)});
      transform: translateY(${m(50)});
      height: ${m(150)};
    }
  }

  .active & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

export const Close = styled.button`
  position: absolute;
  z-index: 99;
  background-color: transparent;

  ${des()} {
    width: ${d(30)};
    height: ${d(30)};
    top: ${d(12)};
    right: ${d(12)};
  }

  ${mob()} {
    width: ${m(22)};
    height: ${m(22)};
    top: ${m(4)};
    right: ${m(4)};
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 65%;
    background-color: var(--black);
    -webkit-transition-property: background-color, width;
    transition-property: background-color, width;
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;

    @media (hover: hover) {
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
    }

    ${des()} {
      height: ${d(2)};
      border-radius: ${d(100)};
    }

    ${mob()} {
      height: ${m(1.2)};
      border-radius: ${m(100)};
    }
  }

  &::after {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    -ms-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  @media (hover: hover) {
    cursor: pointer;

    &:hover {
      &::after,
      &::before {
        background-color: var(--orange);
      }
    }
  }

  &:active {
    &::after,
    &::before {
      background-color: var(--orange);
      width: 50%;
    }
  }
`;

export const Scroll = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  ${des()} {
    width: calc(100% + ${d(30)});
    padding: ${d(22)} ${d(22 + 30)} ${d(22)} ${d(22)};
    gap: ${d(22)};

    .event & {
      padding: ${d(22)} ${d(22 + 60)} ${d(22)} ${d(22)};
    }
  }

  ${mob()} {
    width: calc(100% + ${m(20)});
    padding: ${m(12)} ${m(12 + 20)} ${m(12)} ${m(12)};
    gap: ${m(12)};

    .event & {
      padding: ${m(12)} ${m(12 + 60)} ${m(12)} ${m(12)};
    }
  }
`;

export const Item = styled(motion.span)`
  color: var(--gray-dark);
  font-weight: 500;
  line-height: 130%;

  ${des()} {
    font-size: ${d(14)};
  }

  ${mob()} {
    font-size: ${m(11)};
  }

  -webkit-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;
`;
