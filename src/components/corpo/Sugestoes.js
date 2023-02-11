export default function Sugestoes() {
  const sugestionData = [
    { id: 1, op: "bad.vibes.memes", opImg: "./assets/img/bad.vibes.memes.svg", reason: "Segue você" },
    { id: 2, op: "chibirdart", opImg: "./assets/img/chibirdart.svg", reason: "Segue você" },
    { id: 3, op: "razoesparaacreditar", opImg: "./assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
    { id: 4, op: "adorable_animals", opImg: "./assets/img/adorable_animals.svg", reason: "Segue você" },
    { id: 5, op: "smallcutecats", opImg: "./assets/img/smallcutecats.svg", reason: "Segue você" }
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestionData.map((s) => <Sugestao key={s.id} user={s.op} userImg={s.opImg} followReason={s.reason} />)}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.userImg} alt={props.user} />
        <div className="texto">
          <div className="nome">{props.user}</div>
          <div className="razao">{props.followReason}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}