async function start() {
  // Ждем, чтобы убедиться, что страница полностью загружена
  await new Promise(resolve => {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.addEventListener("load", resolve);
    }
  });

  // Получаем список кнопок "Откликнуться"
  var responseButtons = document.querySelectorAll('[data-qa="vacancy-serp__vacancy_response"]');

  // Нажимаем на каждую кнопку
  responseButtons.forEach(button => {
    button.click();
  });
}

start();
