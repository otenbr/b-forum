import React, { useState, useEffect, useContext } from "react";

import BasePage from "../../components/BasePage/BasePage";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Modal from "../../components/Modal/Modal";

import PostDTO from "../../models/PostDTO";
import api from "../../services/api";

import UserContext from "../../UserContext";

const Home = () => {
  const [posts, setPosts] = useState([] as PostDTO[]);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");

  const { userName } = useContext(UserContext);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  async function handleAddPost() {
    const response = await api.post("/posts", {
      title: title,
      content: question,
      userName: userName,
    });

    const post = response.data;

    setPosts([post, ...posts]);
  }

  async function handleLikeQuestion(id: string) {
    const response = await api.put(`/posts/${id}/like`);

    const post = response.data;

    setPosts(posts.map((p) => (p._id === id ? { ...p, ...post } : p)));
  }

  async function handleDislikeQuestion(id: string) {
    const response = await api.put(`/posts/${id}/dislike`);

    const post = response.data;

    setPosts(posts.map((p) => (p._id === id ? { ...p, ...post } : p)));
  }

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <BasePage>
        <div className="w3-container w3-right-align">
          <button onClick={showModal} className="w3-button w3-blue-grey">
            Nova Pergunta
          </button>
        </div>
        <Modal handleClose={() => hideModal()} show={show}>
          <input
            className="w3-input w3-margin-bottom"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Título"
          ></input>
          <input
            className="w3-input w3-margin-bottom"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Conteúdo"
          ></input>
          <button
            className="w3-button w3-blue-grey"
            onClick={() => {
              handleAddPost();
              hideModal();
            }}
          >
            Salvar
          </button>
        </Modal>
        {posts.map((post) => (
          <QuestionCard
            key={post._id}
            post={post}
            showTotalAnswers={true}
            likeFunction={handleLikeQuestion}
            dislikeFunction={handleDislikeQuestion}
          />
        ))}
      </BasePage>
    </>
  );
};

export default Home;
