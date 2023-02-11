import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";
export default function Sidebar() {
  const userInfo = {userName: 'catanacomics', userPic: './assets/img/catanacomics.svg'}
  return (
    <div className="sidebar">
      <Usuario userName={userInfo.userName} userPic={userInfo.userPic}/>
      <Sugestoes />
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>
      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}