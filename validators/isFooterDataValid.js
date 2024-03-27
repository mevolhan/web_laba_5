// isFooterDataValid.js
const { isObjectHasProps } = require("../validators/utils/validators");

const isFooterDataValid = (data) => {
  isObjectHasProps(data, [
    "header",
    "buttonText",
    "logoSrc",
    "address",
    "links",
    "companyLinks",
    "contactInfo",
    "copyright",
  ]);

  const {
    header,
    buttonText,
    logoSrc,
    address,
    links,
    companyLinks,
    contactInfo,
    copyright,
  } = data;

  // Проверка типов и наличия обязательных полей
  if (typeof header !== "string" || !header.trim())
    throw new Error("Некорректное значение для свойства header");

  if (typeof buttonText !== "string" || !buttonText.trim())
    throw new Error("Некорректное значение для свойства buttonText");

  if (typeof logoSrc !== "string" || !logoSrc.trim())
    throw new Error("Некорректное значение для свойства logoSrc");

  if (typeof address !== "string" || !address.trim())
    throw new Error("Некорректное значение для свойства address");

  // Проверка типа и наличия объекта links
  if (typeof links !== "object" || !links)
    throw new Error("Некорректное значение для свойства links");

  // Проверка наличия обязательных полей в объекте links
  isObjectHasProps(links, ["overony", "socialMedia", "counters", "contacts"]);

  // Проверка типа и наличия объекта companyLinks
  if (typeof companyLinks !== "object" || !companyLinks)
    throw new Error("Некорректное значение для свойства companyLinks");

  // Проверка наличия обязательных полей в объекте companyLinks
  isObjectHasProps(companyLinks, ["termsOfUse", "personalData", "contacts"]);

  // Проверка типа и наличия объекта contactInfo
  if (typeof contactInfo !== "object" || !contactInfo)
    throw new Error("Некорректное значение для свойства contactInfo");

  // Проверка наличия обязательных полей в объекте contactInfo
  isObjectHasProps(contactInfo, ["address", "phoneNumber", "email"]);

  // Проверка типа и наличия обязательного поля copyright
  if (typeof copyright !== "string" || !copyright.trim())
    throw new Error("Некорректное значение для свойства copyright");
};

module.exports = isFooterDataValid;
