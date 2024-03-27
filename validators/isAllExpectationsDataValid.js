const isAllExpectationsDataValid = (data) => {
  const requiredProps = ["imageSrc", "imageAlt", "text1", "header", "text2", "ctaText"];

  // Проверяем, что все обязательные свойства присутствуют в объекте
  isObjectHasProps(data, requiredProps);

  // Проверяем типы обязательных свойств
  requiredProps.forEach(prop => {
    if (typeof data[prop] !== "string" || !data[prop].trim()) {
      throw new Error(`Некорректное значение для свойства ${prop}`);
    }
  });
};

module.exports = isAllExpectationsDataValid;
