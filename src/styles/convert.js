/** @format */

const viewportDesktop = 1616;
const viewportMobile = 320;

export const d = (pxValue) => `${(pxValue / viewportDesktop) * 100}vw`;
export const m = (pxValue) => `${(pxValue / viewportMobile) * 100}vw`;
