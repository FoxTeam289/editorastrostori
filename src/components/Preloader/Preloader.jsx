/** @format */

import { PreloaderCom } from "./styles";

const Preloader = ({}) => (
  <PreloaderCom
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    exit={{
      opacity: 0,
    }}
  >
    <img src="/skys/black.jpg" alt="Black" />
    <img src="/skys/classic.jpg" alt="Classic" />
    <img src="/skys/white.jpg" alt="White" />
    <img src="/skys/transparent.jpg" alt="Transparent" />
    <img src="/skys/transparent-black.jpg" alt="Transparent Black" />
    <img src="/skys/transparent-beige.jpg" alt="Transparent Beige" />
    <img src="/skys/sizes.jpg" alt="Sizes" />
  </PreloaderCom>
);

export default Preloader;
