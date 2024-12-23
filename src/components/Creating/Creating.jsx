/** @format */

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "../../context/state";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CreatingCom, Wrap, OrderDefault, OrderError, Text, Loader, OrderTitle, OrderNumber, Copy } from "./styles";
import creatingsky from "../../data/creatingsky.json";
import { copyVariants } from "../../modules/useAnimation";
import { d, m } from "../../styles/convert";

import Title from "../Title";

const Info = ({ texts }) => (
  <Text>
    <Title title={texts.title} />
    <Title title={texts.descr} />
  </Text>
);

const Creating = ({}) => {
  const { done, error } = useAppContext();
  const { defaultText, orderText } = creatingsky;
  const { hover, tap, transition } = copyVariants;

  const [showCopyText, setShowCopyText] = useState(false);

  const handleCopy = () => {
    setShowCopyText(true);

    setTimeout(() => setShowCopyText(false), 1000);
  };

  return (
    <CreatingCom>
      <AnimatePresence initial={false}>
        {done && (
          <OrderDefault
            key="orde-default"
            initial={{
              opacity: 0,
              marginTop: "-10%",
            }}
            animate={{
              opacity: 1,
              marginTop: window.innerWidth < 480 ? m(20) : d(15),
            }}
            exit={{
              opacity: 0,
              marginTop: "-10%",
            }}
          >
            <OrderTitle>{orderText}&nbsp;</OrderTitle>
            <OrderNumber>{done}</OrderNumber>
            <CopyToClipboard text={done} onCopy={handleCopy}>
              <Copy variants={copyVariants} whileHover={hover} whileTap={tap} transition={transition} $styledDisabled={showCopyText}>
                {!showCopyText ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <rect x="0.5" y="3.5" width="13" height="13" rx="3.5" stroke="var(--gray-dark)" />
                    <rect x="3" width="14" height="14" rx="3" fill="var(--gray-dark)" />
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.6752 3.67895C15.9614 3.93648 15.9846 4.37723 15.727 4.66338L8.53558 12.6539C7.62983 13.6603 6.09641 13.7857 5.03915 12.9399L1.76164 10.3179C1.46102 10.0774 1.41228 9.63872 1.65277 9.33811C1.89327 9.03749 2.33192 8.98875 2.63254 9.22924L5.91005 11.8513C6.39062 12.2357 7.08763 12.1787 7.49934 11.7212L14.6908 3.73076C14.9483 3.44461 15.3891 3.42141 15.6752 3.67895Z"
                      fill="var(--orange)"
                    />
                  </svg>
                )}
              </Copy>
            </CopyToClipboard>
          </OrderDefault>
        )}
        {error && (
          <OrderError
            key="orde-error"
            initial={{
              opacity: 0,
              marginTop: "-10%",
            }}
            animate={{
              opacity: 1,
              marginTop: window.innerWidth < 480 ? m(20 * 4) : d(15 * 4),
            }}
            exit={{
              opacity: 0,
              marginTop: "-10%",
            }}
          >
            <OrderTitle>Что-то пошло не так</OrderTitle>
          </OrderError>
        )}
      </AnimatePresence>
      <AnimatePresence initial>
        {!error && (
          <Wrap
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <Info texts={defaultText} />
            <Loader width="398" height="102" viewBox="0 0 398 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 28L81 57L177 77L273 53M273 53L343 4L394 47L308 98L273 53Z" stroke="var(--black)" />
              <path
                d="M8 28C8 30.2091 6.20914 32 4 32C1.79086 32 0 30.2091 0 28C0 25.7909 1.79086 24 4 24C6.20914 24 8 25.7909 8 28Z"
                fill="var(--black)"
              />
              <path
                d="M85 57C85 59.2091 83.2091 61 81 61C78.7909 61 77 59.2091 77 57C77 54.7909 78.7909 53 81 53C83.2091 53 85 54.7909 85 57Z"
                fill="var(--black)"
              />
              <path
                d="M181 77C181 79.2091 179.209 81 177 81C174.791 81 173 79.2091 173 77C173 74.7909 174.791 73 177 73C179.209 73 181 74.7909 181 77Z"
                fill="var(--black)"
              />
              <path
                d="M277 53C277 55.2091 275.209 57 273 57C270.791 57 269 55.2091 269 53C269 50.7909 270.791 49 273 49C275.209 49 277 50.7909 277 53Z"
                fill="var(--black)"
              />
              <path
                d="M347 4C347 6.20914 345.209 8 343 8C340.791 8 339 6.20914 339 4C339 1.79086 340.791 0 343 0C345.209 0 347 1.79086 347 4Z"
                fill="var(--black)"
              />
              <path
                d="M398 47C398 49.2091 396.209 51 394 51C391.791 51 390 49.2091 390 47C390 44.7909 391.791 43 394 43C396.209 43 398 44.7909 398 47Z"
                fill="var(--black)"
              />
              <path
                d="M312 98C312 100.209 310.209 102 308 102C305.791 102 304 100.209 304 98C304 95.7909 305.791 94 308 94C310.209 94 312 95.7909 312 98Z"
                fill="var(--black)"
              />
            </Loader>
          </Wrap>
        )}
      </AnimatePresence>
    </CreatingCom>
  );
};

export default Creating;
