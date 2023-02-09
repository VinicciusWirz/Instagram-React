export default function Posts() {
    const postInfo =[
        {id: 1, op: "meowed", post:"gato-telefone", likeHighlight:"respondeai", likes:"101.523"},
        {id: 2, op: "barked", post:"dog", likeHighlight:"adorable_animals", likes:"99.159"},
    ]
    return (
        <div className="posts">
            {postInfo.map((e) => <Post key={e.id} user={e.op} postvisual={e.post} lastLike={e.likeHighlight} likeAmount={e.likes}/>)}
        </div>
    )
}
function Post(props) {
    return (
        <div className="post">
            <PostTopo usuario={props.user}/>

            <div className="conteudo">
                <img src={"./assets/img/" + props.postvisual + ".svg"} alt={props.postvisual} />
            </div>
            
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <PostLike lastLikeHighlight={props.lastLike} amountOfLikes={props.likeAmount}/>

            </div>
        </div>
    )
}

function PostTopo(props){
    return(
        <div className="topo">
        <div className="usuario">
            <img src={"./assets/img/" + props.usuario + ".svg"} alt={props.usuario} />
            {props.usuario}
        </div>
        <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>
    )
}

function PostLike(props){
    return(
        <div className="curtidas">
        <img src={"./assets/img/" + props.lastLikeHighlight + ".svg"} alt={props.lastLikeHighlight} />
        <div className="texto">
            Curtido por <strong>{props.lastLikeHighlight}</strong> e <strong>outras {props.amountOfLikes} pessoas</strong>
        </div>
    </div>
    )
}
