import { useState } from "react"

export default function Posts() {
    const postInfo = [
        { id: 1, op: "meowed", postContent: "./assets/img/gato-telefone.svg", postContentAlt: "gato-telefone", likeHighlight: "respondeai", likes: "101.523" },
        { id: 2, op: "barked", postContent: "./assets/img/dog.svg", postContentAlt: "dog", likeHighlight: "adorable_animals", likes: "99.159" },
        { id: 3, op: "wawawicomics", postContent: "./assets/img/scooby.jpg", postContentAlt: "scooby", likeHighlight: "chibirdart", likes: "55.521" },
    ]
    return (
        <div className="posts">
            {postInfo.map((post) => <Post key={post.id} postContentAlt={post.postContentAlt} user={post.op} postContent={post.postContent} likeHighlight={post.likeHighlight} likes={post.likes} />)}
        </div>
    )
}
function Post(props) {
    const [savePost, setSavePost] = useState("bookmark-outline");
    const [likePost, setLikePost] = useState("heart-outline");
    const [likePostColor, setLikePostColor] = useState("black");
    const [likes, setLikes] = useState(props.likes);
    const [likesAnimation, setLikesAnimation] = useState('hide'); 

    function bookmarkPost() {
        if (savePost === "bookmark-outline") {
            setSavePost("bookmark");
        } else {
            setSavePost("bookmark-outline");
        }
    }

    function likeContent(identifier) { 
        if (likePostColor !== "liked") {
            setLikePost("heart");
            setLikePostColor("liked");
            setLikes(((Number(likes) * 1000 + 1) / 1000).toFixed(3))
        }
        if (likePostColor === "liked" && identifier === "btn") {
            setLikePost("heart-outline");
            setLikePostColor("black");
            setLikes(((Number(likes) * 1000 - 1) / 1000).toFixed(3))
        }
        if (likePostColor !== "liked" && identifier !== "btn") {
            setLikesAnimation("overlay")
            setTimeout(() => {
                setLikesAnimation("hide")
            }, 500);
        }

    }

    function Content(props) {
        return (
            <div className="conteudo">
                <div className={likesAnimation} >
                    <ion-icon name="heart" />
                </div>
                <img src={props.postContent} alt={props.postContentAlt} onDoubleClick={likeContent} data-test="post-image"/>
            </div>
        )
    }

    return (
        <div className="post" data-test="post">
            <PostTopo usuario={props.user} />

            <Content postContent={props.postContent} postContentAlt={props.postContentAlt} />

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <div className={likePostColor}>
                            <ion-icon name={likePost} onClick={() => likeContent('btn')} data-test="like-post"></ion-icon>
                        </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={savePost} onClick={bookmarkPost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <PostLike likeHighlight={props.likeHighlight} likes={likes} />

            </div>
        </div>
    )
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
                Curtido por <strong>{props.likeHighlight}</strong> e <strong>outras <b data-test="likes-number">{props.likes}</b> pessoas</strong>
            </div>
        </div>
    )
}
