import { useState } from "react";

export default function Usuario(props) {
  const [userName, setUserName] = useState(props.userName)
  const [userImg, setUserImg] = useState(props.userPic)

  function changeName() {
    let newName = prompt('Digite um novo nome de exibição.');
    let nameVerify = newName ? newName : userName
    setUserName(nameVerify);
  }

  function changeImg() {
    let newImg = prompt('Insira um novo link de imagem para exibição.');
    let imgVerify = newImg ? newImg : userImg
    setUserImg(imgVerify);
  }

  function UserImageRender(props) {
    return (
      <>
        <img onClick={changeImg} src={props.pictureSrc} alt="imagem de perfil" data-test="profile-image"/>
      </>
    )
  }

  function UserNameRender(props) {
    return (
      <>
        <strong data-test="name">{props.name}</strong>
      </>
    )
  }

  return (
    <div className="usuario">
      <UserImageRender pictureSrc={userImg} />
      <div className="texto">
        <span>
          <UserNameRender name={userName} />
          <ion-icon name="pencil" onClick={changeName} data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  )
}