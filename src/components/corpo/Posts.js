export default function Posts() {
    const postInfo = [
        { id: 1, op: "meowed", postContent: "gato-telefone", postType: "img", likeHighlight: "respondeai", likes: "101.523" },
        { id: 2, op: "barked", postContent: "dog", postType: "img", likeHighlight: "adorable_animals", likes: "99.159" },
        { id: 3, op: "wawawicomics", postContent: "video", postType: "video", likeHighlight: "chibirdart", likes: "55.521" },
    ]
    return (
        <div className="posts">
            {postInfo.map((post) => <Post key={post.id} postType={post.postType} user={post.op} postContent={post.postContent} likeHighlight={post.likeHighlight} likes={post.likes} />)}
        </div>
    )
}
function Post(props) {
    return (
        <div className="post">
            <PostTopo usuario={props.user} />

            <Content postContent={props.postContent} postType={props.postType} />

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

                <PostLike likeHighlight={props.likeHighlight} likes={props.likes} />

            </div>
        </div>
    )
}

function Content(props) {
    if (props.postType === "img") {
        return (
            <div className="conteudo">
                <img src={"./assets/img/" + props.postContent + ".svg"} alt={props.postContent} />
            </div>
        )
    }
    if (props.postType === "video") {
        return (
            <video autoPlay="autoplay" loop="" muted>
                <source src={"./assets/img/" + props.postContent + ".mp4"} />
                <source src={"./assets/img/" + props.postContent + ".ogg"} />
                Seu navegador não suporta vídeos
            </video>
        )
    }
}

function PostTopo(props) {
    return (
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

function PostLike(props) {
    return (
        <div className="curtidas">
            <img src={"./assets/img/" + props.likeHighlight + ".svg"} alt={props.likeHighlight} />
            <div className="texto">
                Curtido por <strong>{props.likeHighlight}</strong> e <strong>outras {props.likes} pessoas</strong>
            </div>
        </div>
    )
}
