import React, { FunctionComponent } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { AnswerDTO } from "../../models/PostDTO";

import avatar from "../../assets/avatar.svg";

interface AnswerCardProps {
  answer: AnswerDTO;
  postId: string;
  likeFunction: Function;
  dislikeFunction: Function;
}

const AnswerCard: FunctionComponent<AnswerCardProps> = ({
  answer,
  postId,
  likeFunction,
  dislikeFunction,
}) => {
  return (
    <div className="w3-container w3-card w3-margin-bottom container-answer w3-right">
      <div className="w3-quarter">
        <img alt="avatar" width="80" src={avatar}></img>
        <br />
        <span>Usuário: {answer.userName}</span>
        <br />
        <span className="created-date">
          {format(new Date(answer.createdAt), "dd/MM/yyyy HH:mm", {
            locale: ptBR,
          })}
        </span>
      </div>
      <div className="w3-half">
        <div className="w3-margin w3-padding w3-border w3-white">
          {answer.content}
        </div>
      </div>
      <div className="w3-quarter w3-center">
        <span>
          <span
            role="img"
            aria-label="like"
            onClick={() => likeFunction(postId, answer._id)}
          >
            👍️
          </span>
          {answer.likes}
        </span>
        <br />
        <span>
          <span
            role="img"
            aria-label="dislike"
            onClick={() => dislikeFunction(postId, answer._id)}
          >
            👎️
          </span>
          {answer.dislikes}
        </span>
      </div>
    </div>
  );
};

export default AnswerCard;
