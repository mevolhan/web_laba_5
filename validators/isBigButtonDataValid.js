const isBigButtonDataValid = (data) => {
  if (typeof data !== "object") {
    throw new Error("Данные должны быть объектом");
  }

  if (typeof data.text1 !== "string" || !data.text1.trim()) { // Correct property name
    throw new Error("Некорректное значение для свойства text1");
  }

  if (typeof data.buttonText !== "string" || !data.buttonText.trim()) {
    throw new Error("Некорректное значение для свойства buttonText");
  }
};