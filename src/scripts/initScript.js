/** @format */
import CryptoJS from "crypto-js";

const url = "http://www.editor-astrostori.ru/";

const blocksChecking = (name) => {
  const block = document.querySelector(name);
  if (!block) return;

  const info = block.querySelector(`${name}__info`);
  if (!info) return;

  const price = block.querySelector(`${name}__price-value`);
  if (!price) return;

  const wrap = info.querySelector(".js-product-controls-wrapper");
  const imgs = block.querySelectorAll(".t-slds__wrapper");

  return {
    price,
    wrap,
    imgs,
  };
};

const createProductOption = (name, value) => {
  const productOption = document.createElement("div");
  productOption.classList.add("t-product__option", "js-product-option");

  const optionTitle = document.createElement("div");
  optionTitle.classList.add("t-product__option-title", "t-descr", "t-descr_xxs", "js-product-option-name");
  optionTitle.textContent = name;

  const optionVariants = document.createElement("div");
  optionVariants.classList.add("t-product__option-variants");

  const select = document.createElement("select");
  select.classList.add("t-product__option-select", "t-descr", "t-descr_xxs", "js-product-option-variants");

  const optionElement = document.createElement("option");
  optionElement.value = value;
  optionElement.textContent = value;

  select.appendChild(optionElement);
  optionVariants.appendChild(select);
  productOption.appendChild(optionTitle);
  productOption.appendChild(optionVariants);

  return productOption;
};

export const initScript = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const btn = document.querySelector('a[href="#order"]');
  const addToBag = document.querySelector("[data-add-to-bag]");
  const popup = document.querySelector("[data-popup]");

  const encodedString = urlParams.get("data");

  if (encodedString) {
    const secretKey = "lFzQSwQbTYRy4aKYmvuq5eGkIdMl5C"; // Секретный ключ для шифрования
    const encryptedString = decodeURIComponent(encodedString);

    try {
      const bytes = CryptoJS.AES.decrypt(encryptedString, secretKey);
      const jsonString = bytes.toString(CryptoJS.enc.Utf8);
      const data = JSON.parse(jsonString);

      const { price, wrap, imgs } = blocksChecking(".t762");

      if (price && wrap && imgs) {
        wrap.innerHTML = "";

        const originalTotal = price.getAttribute("data-product-price-def-str");

        price.info = data.total;
        price.setAttribute("data-product-price-def-str", data.total);

        imgs.forEach((img) => {
          const meta = img.querySelector("meta");
          const bg = img.querySelector(".t-slds__bgimg");

          meta.setAttribute("content", data.img);
          bg.setAttribute("data-original", data.img);
          bg.style.backgroundImage = `url('${data.img}')`;
        });

        delete data.total;
        delete data.img;

        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const productOptionElement = createProductOption(key, data[key]);
            wrap.appendChild(productOptionElement);
          }
        }

        popup.classList.add("active");

        const observer = new MutationObserver(() => {
          if (price.getAttribute("data-product-price-def-str") !== originalTotal) {
            addToBag.addEventListener("click", () => {
              btn.click();

              popup.classList.remove("active");

              const newUrl = window.location.origin + window.location.pathname;
              history.replaceState({}, document.title, newUrl);
            });
          }
        });

        observer.observe(price, {
          attributes: true,
          attributeFilter: ["data-product-price-def-str"],
        });
      }
    } catch (error) {
      // window.location.href = url;
    }
  } else {
    // window.location.href = url;
  }
};

initScript();
