document.addEventListener('DOMContentLoaded', function() {
  // Загружаем модальные окна
  fetch('modals.html')
    .then(response => response.text())
    .then(data => {
      // Создаем контейнер для модалок
      const modalContainer = document.createElement('div');
      modalContainer.id = 'modal-container';
      modalContainer.style.display = 'none';
      modalContainer.innerHTML = data;
      
      // Добавляем контейнер в конец body
      document.body.appendChild(modalContainer);
    })
    .catch(error => console.error('Ошибка загрузки модальных окон:', error));
});