/** @format */

import CryptoJS from 'crypto-js';

const useAddToBag = (data) => {
  const result = {
    "Номер заказа": data.order,
    img: data.img,
    total: data.total,
  };

  const jsonString = JSON.stringify(result);
  const secretKey = 'lFzQSwQbTYRy4aKYmvuq5eGkIdMl5C'; // Секретный ключ для шифрования
  const encryptedData = CryptoJS.AES.encrypt(jsonString, secretKey).toString();

  const url = `https://astrostori.ru/star-maps?data=${encodeURIComponent(encryptedData)}`;

  window.location.href = url
};

export default useAddToBag;
