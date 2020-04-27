import React, { useState, useContext } from "react";

import "./NewAnswerCard.css";

import api from "../../services/api";

import UserContext from "../../UserContext";

interface NewAnswerCardProps {
  postId: string;
  handleUpdate: any;
}

function NewAnswerCard({ postId, handleUpdate }: NewAnswerCardProps) {
  const [answer, setAnswer] = useState("");

  const { userName } = useContext(UserContext);

  async function handleAddAnswer(postId: string) {
    const response = await api.post(`/posts/${postId}/answers`, {
      content: answer,
      userName: userName,
    });

    handleUpdate(response.data);

    setAnswer("");
  }

  return (
    <div className="new-answer-card w3-container w3-card w3-margin container-answer">
      <div className="w3-threequarter w3-margin-top">
        <textarea
          className="w3-input"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.ctrlKey && e.keyCode === 13) handleAddAnswer(postId);
          }}
          placeholder="Nova Resposta"
        ></textarea>
        <span>* Pressione Ctrl + Enter para enviar a resposta.</span>
      </div>
      <div className="w3-quarter">
        <button
          id="buttonSend"
          className="buttonSend"
          onClick={() => handleAddAnswer(postId)}
        >
          Enviar
        </button>
        <br />
        <button
          id="buttonClear"
          className="buttonClear"
          onClick={() => setAnswer("")}
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

export default NewAnswerCard;
