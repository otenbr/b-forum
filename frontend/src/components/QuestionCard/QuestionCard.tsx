import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import PostDTO from "../../models/PostDTO";

import avatar from "../../assets/avatar.svg";

import "./QuestionCard.css";

interface QuestionCardProps {
  post: PostDTO;
  showTotalAnswers: boolean;
  likeFunction: Function;
  dislikeFunction: Function;
}

const QuestionCard: FunctionComponent<QuestionCardProps> = ({
  post,
  showTotalAnswers,
  likeFunction,
  dislikeFunction,
}) => {
  return (
    <div className="w3-container w3-card w3-margin container-question">
      <div className="w3-quarter">
        <img alt="avatar" width="80" src={avatar}></img>
        <br />
        <span>Usuário: {post.userName}</span>
        <br />
        <span className="created-date">
          {format(new Date(post.createdAt), "dd/MM/yyyy HH:mm", {
            locale: ptBR,
          })}
        </span>
      </div>
      <div className="w3-half">
        <a href={`/question/${post._id}`}>{post.title}</a>
        <div className="w3-margin w3-padding w3-border w3-white">
          {post.content}
        </div>
      </div>
      <div className="w3-quarter w3-center">
        {showTotalAnswers ? (
          <span>Respostas: {post.answers.length}</span>
        ) : null}
        <br />
        <span>
          <span
            role="img"
            aria-label="like"
            onClick={() => likeFunction(post._id)}
          >
            👍️
          </span>
          {post.likes}
        </span>
        <br />
        <span>
          <span
            role="img"
            aria-label="dislike"
            onClick={() => dislikeFunction(post._id)}
          >
            👎️
          </span>
          {post.dislikes}
        </span>
      </div>
    </div>
  );
};

export default QuestionCard;
