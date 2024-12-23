/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const PreloaderCom = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--white);
  z-index: 9999999999;

  & img {
    position: absolute;
    width: 0;
    height: 0;
    overflow: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;
