import { useState } from "react";

export default function Usuario() {
  const [userName, setUserName] = useState('catanacomics')
  const [userImg, setUserImg] = useState('./assets/img/catanacomics.svg')

  function changeName() {
    let newName = prompt('Digite um novo nome de exibição.');
    let nameVerify = newName ? newName : userName
    setUserName(nameVerify);
  }

  function changeImg(){
    let newImg = prompt('Insira um novo link de imagem para exibição.');
    let imgVerify = newImg ? newImg : userImg
    setUserImg(imgVerify);
  }

  return (
    <div className="usuario">
      <img onClick={changeImg} src={userImg} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>{userName}</strong>
          <ion-icon name="pencil" onClick={changeName}></ion-icon>
        </span>
      </div>
    </div>
  )
}