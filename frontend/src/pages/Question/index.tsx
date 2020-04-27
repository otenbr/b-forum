import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BasePage from "../../components/BasePage/BasePage";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import AnswerCard from "../../components/AnswerCard/AnswerCard";
import NewAnswerCard from "../../components/NewAnswerCard/NewAnswerCard";

import { AnswerDTO } from "../../models/PostDTO";
import api from "../../services/api";

const Question = () => {
  const aux = {
    _id: "",
    title: "",
    content: "",
    userName: "",
    likes: 0,
    dislikes: 0,
    createdAt: 0,
    updatedAt: 0,
    answers: [],
  };
  const [post, setPost] = useState(aux);
  const [answers, setAnswers] = useState([] as AnswerDTO[]);

  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    api.get(`/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  useEffect(() => {
    setAnswers(post.answers);
  }, [post.answers]);

  function handleUpdateAnswers(answer: AnswerDTO) {
    setAnswers([answer, ...answers]);
  }

  async function handleLikeAnswer(postId: string, answerId: string) {
    const response = await api.put(`/posts/${postId}/answers/${answerId}/like`);

    const answer = response.data;

    setAnswers(
      answers.map((a) => (a._id === answerId ? { ...a, ...answer } : a))
    );
  }

  async function handleDislikeAnswer(postId: string, answerId: string) {
    const response = await api.put(
      `/posts/${postId}/answers/${answerId}/dislike`
    );

    const answer = response.data;

    setAnswers(
      answers.map((a) => (a._id === answerId ? { ...a, ...answer } : a))
    );
  }

  return (
    <>
      <BasePage>
        <div>
          <QuestionCard
            key={post._id}
            post={post}
            showTotalAnswers={false}
            likeFunction={() => {}}
            dislikeFunction={() => {}}
          />
          <div>
            {answers.map((answer: AnswerDTO) => (
              <AnswerCard
                key={answer._id}
                answer={answer}
                postId={post._id}
                likeFunction={handleLikeAnswer}
                dislikeFunction={handleDislikeAnswer}
              ></AnswerCard>
            ))}
          </div>
        </div>
        <NewAnswerCard postId={post._id} handleUpdate={handleUpdateAnswers} />
      </BasePage>
    </>
  );
};

export default Question;
