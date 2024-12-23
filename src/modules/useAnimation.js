/** @format */

const transition = {
  duration: 0.2,
  ease: "linear",
};

const cursorPointer = {
  cursor: "pointer",
};

const borderColorOrange = {
  borderColor: "var(--orange)",
};

const borderColorOrangeLight = {
  borderColor: "var(--orange-light)",
};

const scaleUp = {
  scale: 1.01,
};

const scaleDown = {
  scale: 0.96,
};

const y5 = {
  y: 5,
};

const y4 = {
  y: 4,
};

const xMinus4 = {
  x: -4,
};

const commonHoverTap = {
  hover: {
    ...cursorPointer,
  },
  tap: {
    ...scaleDown,
  },
  transition,
};

export const radioVariants = {
  ...commonHoverTap,
  hover: {
    ...cursorPointer,
    ...borderColorOrangeLight,
    ...scaleUp,
  },
};

export const textVariants = {
  hover: {
    ...cursorPointer,
    ...borderColorOrangeLight,
  },
  focus: {
    ...borderColorOrange,
  },
  transition,
};

export const resetVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  hover: {
    ...cursorPointer,
    ...borderColorOrange,
  },
  tap: {
    ...borderColorOrange,
    ...y4,
    ...xMinus4,
  },
  transition,
};

export const selectHeadVariants = {
  hover: {
    ...cursorPointer,
    ...borderColorOrangeLight,
  },
  tap: {
    ...y5,
  },
  transition,
};

export const listVariants = {
  hover: {
    ...cursorPointer,
    color: "var(--black)",
  },
  tap: {
    color: "var(--black)",
    ...y5,
  },
  transition,
};

export const checkboxVariants = {
  hover: {
    ...cursorPointer,
    color: "var(--orange)",
  },
  tap: {
    color: "var(--orange)",
    ...y5,
  },
  transition,
};

export const fasteningVariants = {
  hover: {
    ...cursorPointer,
    ...borderColorOrange,
  },
  tap: {
    ...borderColorOrange,
    ...y5,
  },
  transition,
};

export const moreVariants = {
  hover: {
    ...cursorPointer,
    color: "var(--orange)",
  },
  tap: {
    color: "var(--orange)",
    scale: 0.99,
  },
  transition: {
    duration: 0.1,
    ease: "linear",
  },
};

export const popupVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.3,
  },
};

export const timeVariants = {
  hover: {
    ...cursorPointer,
    ...borderColorOrange,
    ...scaleUp,
  },
  tap: {
    ...borderColorOrange,
    ...scaleDown,
  },
  transition,
};

export const btnVariants = {
  hover: {
    ...cursorPointer,
    scale: 1.02,
  },
  tap: {
    ...scaleDown,
  },
  transition,
};

export const copyVariants = {
  hover: {
    ...cursorPointer,
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
  transition: {
    duration: 0.1,
    ease: "linear",
  },
};
