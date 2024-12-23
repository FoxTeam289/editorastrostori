/** @format */

const mediaDesktop = 480;
const mediaMobile = mediaDesktop - 1;

export const des = () => `@media only screen and (min-width: ${mediaDesktop}px)`;
export const mob = () => `@media only screen and (max-width: ${mediaMobile}px)`;
