import { useState } from "react";

export default function Usuario() {
  const [userName, setUserName] = useState('catanacomics')

  function changeName() {
    let newName = prompt('Digite um novo nome de exibição.');
    let nameVerify = newName ? newName : userName
    setUserName(nameVerify);
  }

  return (
    <div className="usuario">
      <img src="./assets/img/catanacomics.svg" alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>{userName}</strong>
          <ion-icon name="pencil" onClick={changeName}></ion-icon>
        </span>
      </div>
    </div>
  )
}