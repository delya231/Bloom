let modalRegTemplate = `<div class="modal-user-container">
    <div class="modal-user">
      <div class="modal-user-header">
        <div class="modal-user-header-register">
          <img src="web/images/icons/x.svg" alt="Выход" class="modal-out">
          <p>Регистрация</p>
        </div>
        <div class="modal-user-header-auth">
          <p>Вход в аккаунт</p>
        </div>
      </div>
      <div class="modal-user-main">

        <div class="modal-user-main-logo">
          <a href="index.html">
            <img src="web/images/icons/logo.svg" alt="Логотип">
          </a>
        </div>
        <form action="">

          <div class="modal-user-main-input">
            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+7 XXX XXX XX-XX"
              required />
          </div>
          <div class="modal-user-main-input">
            <input type="text" name="username" minlength="2" maxlength="50" placeholder="Логин" required>
          </div>
          <div class="modal-user-main-input">
            <input type="password" name="password" minlength="5" maxlength="50" placeholder="Пароль" required>
          </div>
          <div class="modal-user-main-input">
            <input type="password" name="password_repeat" minlength="5" maxlength="50" placeholder="Повторение пароля"
              required>
          </div>

          <div class="modal-user-main-button">
            <button type="button" class="modal-user-main-button-submit">Подтвердить</button>
          </div>
        </form>

      </div>
    </div>
  </div>`;

let bodyNode = document.querySelector('body');
let profileButtonNode = document.querySelector(`#profile-btn`);
let modalUserContainer = null;
let outNode = null;

function outClick() {
  if (modalUserContainer) {
    modalUserContainer.removeEventListener(`click`, profileClick);
    modalUserContainer.remove();
  }
  if (outNode) {
    outNode.removeEventListener(`click`, outClick);
  }
  bodyNode.classList.remove(`body-modal`);
  modalUserContainer = null;
  outNode = null;
}

function profileClick() {

  if (bodyNode.classList.contains(`body-modal`)) {
    return;
  }

  bodyNode.classList.add(`body-modal`);
  bodyNode.insertAdjacentHTML('beforeend', modalRegTemplate);
  let submitButton = document.querySelector(`.modal-user-main-button-submit`)

  submitButton.addEventListener(`click`, () => {
    alert(`Вы зарегистрировались`)
    outClick()
  })
  
  modalUserContainer = bodyNode.querySelector(`.modal-user-container`);
  outNode = document.querySelector(`.modal-out`);
  
  outNode.addEventListener(`click`, outClick);
  

}

profileButtonNode.addEventListener(`click`, profileClick);