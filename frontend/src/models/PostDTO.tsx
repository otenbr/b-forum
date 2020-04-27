export interface AnswerDTO {
  _id: string;
  content: string;
  userName: string;
  likes: number;
  dislikes: number;
  createdAt: number;
  updatedAt: number;
}

export default interface PostDTO {
  _id: string;
  title: string;
  content: string;
  userName: string;
  likes: number;
  dislikes: number;
  createdAt: number;
  updatedAt: number;
  answers: Array<AnswerDTO>;
}
