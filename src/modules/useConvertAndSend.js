/** @format */

import domtoimage from "dom-to-image-more";
import useUploadToTelegram from "./useUploadToTelegram";
import useGetRandomNumber from "./useGetRandomNumber";
import useDownloadSky from "./useDownloadSky";

const download = false;

const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
};

const useConvertAndSend = (el, data, done, total, error) => {
  const order = useGetRandomNumber(30);

  data.order = order;
  data.total = total;
  done(order);

  const size = data.size.split("x");
  const scale = window.innerWidth > 767 ? 9 : 9 / 1.3;
  const aspectRatio = parseInt(size[0], 10) / parseInt(size[1], 10);
  const newHeight = el.offsetHeight * scale;
  const newWidth = newHeight * aspectRatio;

  const style = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${newWidth}px`,
    height: `${newHeight}px`,
  };

  el.style.width = `${newWidth / scale}px`;
  el.style.height = `${newHeight / scale}px`;
  el.style.borderRadius = 0;

  domtoimage
    .toPng(el, { style, width: newWidth, height: newHeight })
    .then((dataUrl) => {
      const blob = dataURItoBlob(dataUrl);
      const name = `${order} ${data.size} ${data.design}.png`;

      !download ? useUploadToTelegram(blob, data, error) : useDownloadSky(name, dataUrl);
    })
    .catch((error) => {
      console.error("Ошибка при конвертации в изображение", error);
    });
};

export default useConvertAndSend;
