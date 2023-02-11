export default function Stories() {
  const storiesInfo = [
    { id: 1, op: "9gag", opImg: "./assets/img/9gag.svg" },
    { id: 2, op: "meowed", opImg: "./assets/img/meowed.svg" },
    { id: 3, op: "barked", opImg: "./assets/img/barked.svg" },
    { id: 4, op: "nathanwpylestrangeplanet", opImg: "./assets/img/nathanwpylestrangeplanet.svg" },
    { id: 5, op: "wawawicomics", opImg: "./assets/img/wawawicomics.svg" },
    { id: 6, op: "respondeai", opImg: "./assets/img/respondeai.svg" },
    { id: 7, op: "filomoderna", opImg: "./assets/img/filomoderna.svg" },
    { id: 8, op: "memeriagourmet", opImg: "./assets/img/memeriagourmet.svg" },
    { id: 9, op: "memeriagourmet", opImg: "./assets/img/memeriagourmet.svg" }
  ];
  return (
    <div className="stories">
      {storiesInfo.map((story) => <Story key={story.id} op={story.op} opImg={story.opImg} />)}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.opImg} alt={props.op} />
      </div>
      <div className="usuario">
        {props.op}
      </div>
    </div>
  );
}