import { useState } from "react";

export default function Posts() {
    const postInfo = [
        {
            id: 1,
            op: "meowed",
            opPic: "./assets/img/meowed.svg",
            postContent: "./assets/img/gato-telefone.svg",
            postContentAlt: "gato-telefone",
            likeHighlight: "respondeai",
            likeHighlightPic: "./assets/img/respondeai.svg",
            likes: "101.523"
        },
        {
            id: 2,
            op: "barked",
            opPic: "./assets/img/barked.svg",
            postContent: "./assets/img/dog.svg",
            postContentAlt: "dog",
            likeHighlight: "adorable_animals",
            likeHighlightPic: "./assets/img/adorable_animals.svg",
            likes: "99.159"
        },
        {
            id: 3,
            op: "wawawicomics",
            opPic: "./assets/img/wawawicomics.svg",
            postContent: "./assets/img/scooby.jpg",
            postContentAlt: "scooby",
            likeHighlight: "chibirdart",
            likeHighlightPic: "./assets/img/chibirdart.svg",
            likes: "55.521"
        }
    ];
    return (
        <div className="posts">
            {postInfo.map((post) => <Post
                key={post.id}
                postContentAlt={post.postContentAlt}
                user={post.op}
                userPic={post.opPic}
                postContent={post.postContent}
                likeHighlight={post.likeHighlight}
                likeHighlightPic={post.likeHighlightPic}
                likes={post.likes}
            />)}
        </div>
    );
}
function Post(props) {
    const [savePost, setSavePost] = useState("bookmark-outline");
    const [likePost, setLikePost] = useState("heart-outline");
    const [likePostColor, setLikePostColor] = useState("black");
    const [likes, setLikes] = useState(props.likes);
    const [likesAnimation, setLikesAnimation] = useState('conteudo hide');

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
            setLikes(((Number(likes) * 1000 + 1) / 1000).toFixed(3));
        }
        if (likePostColor === "liked" && identifier === "btn") {
            setLikePost("heart-outline");
            setLikePostColor("black");
            setLikes(((Number(likes) * 1000 - 1) / 1000).toFixed(3));
        }
        if (likePostColor !== "liked" && identifier !== "btn") {
            setLikesAnimation("conteudo overlay");
            setTimeout(() => {
                setLikesAnimation("conteudo hide");
            }, 500);
        }
    }

    function Content(props) {
        return (
            <div className={likesAnimation} onDoubleClick={likeContent} data-test="post-image">
                <ion-icon name="heart" />
                <img src={props.postContent} alt={props.postContentAlt} />
            </div>
        );
    }

    return (
        <div className="post" data-test="post">
            <PostTopo user={props.user} userPic={props.userPic} />

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

                <PostLike likeHighlight={props.likeHighlight} likeHighlightPic={props.likeHighlightPic} likes={likes} />

            </div>
        </div>
    );
}

function PostTopo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={props.userPic} alt={props.user} />
                {props.user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function PostLike(props) {
    return (
        <div className="curtidas">
            <img src={props.likeHighlightPic} alt={props.likeHighlight} />
            <div className="texto">
                Curtido por <strong>{props.likeHighlight}</strong> e <strong>outras <b data-test="likes-number">{props.likes}</b> pessoas</strong>
            </div>
        </div>
    )
}
