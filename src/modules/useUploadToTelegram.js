/** @format */
import { newData } from "./useObjectTransformation";
import { valueMap } from "./useObjectTransformation";
import useAddToBag from "./useAddToBag";
const telegramToken = "7791206193:AAHABjpnibX3jp0A9tmB2RN849yq9qgnMoc"; // Токен бота
const chatId = "-1002418014233";

const useUploadToTelegram = (blob, dataSky, error) => {
  const order = dataSky.order;
  const fileName = `${order}.png`;
  const dataSkyCopy = { ...dataSky };
  // Удаление ненужных полей
  delete dataSkyCopy.coords;
  delete dataSkyCopy["design-price"];
  delete dataSkyCopy.img;
  delete dataSkyCopy["size-price"];
  newData.total = "Сумма заказа";
  // Трансформация данных
  const transformedData = Object.keys(newData).reduce((acc, key) => {
    if (dataSkyCopy.hasOwnProperty(key)) {
      acc[newData[key]] = valueMap.hasOwnProperty(dataSkyCopy[key]) ? valueMap[dataSkyCopy[key]] : dataSkyCopy[key];
    }
    return acc;
  }, {});
  const textContent = Object.entries(transformedData)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  // Отправка файла (изображения) с текстом в качестве подписи
  const sendDocumentToTelegram = async (file, caption) => {
    const formData = new FormData();
    formData.append("chat_id", chatId);
    formData.append("document", file, fileName); // Отправляем файл как документ
    formData.append("caption", caption); // Добавляем текст в качестве подписи
    const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendDocument`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      localStorage.setItem("dataSky", JSON.stringify(transformedData));
      error(true);
      throw new Error("error");
    }
  };
  // Выполнение отправки
  sendDocumentToTelegram(blob, textContent)
    .then(() => {
      setTimeout(() => useAddToBag(dataSky), 500);
    })
    .catch((error) => {
      // console.log(error);
    });
};
export default useUploadToTelegram;
