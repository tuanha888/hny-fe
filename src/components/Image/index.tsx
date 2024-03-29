import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { useFetchData } from "../hooks/useFethData";
import {
  createComment,
  getComments,
} from "../../redux/actions/comment-actions";
import { IoSend } from "react-icons/io5";
import "./Image.scss";

import { setLoading } from "../../redux/features/loadingSlice";
interface ImageProps {
  imageId: string;
}
const Image: React.FC<ImageProps> = ({ imageId }) => {
  const dispatch: AppDispatch = useDispatch();
  const isFetched = useFetchData(() => {
    return dispatch(getComments(imageId));
  });
  const comments = useSelector(
    (state: RootState) => state.comment.comments
  ).filter((comment) => comment.imageId === imageId);
  const [content, setContent] = useState("");
  const renderComments = () => {
    return comments.map((comment) => {
      return (
        <li className="image-comment" key={comment.id}>
          {comment.content}
        </li>
      );
    });
  };
  const image =
    imageId === "1"
      ? "https://res.cloudinary.com/ddiudyz6q/image/upload/v1707476278/hny/1_ga6ju3.jpg"
      : imageId === "2"
      ? "https://res.cloudinary.com/ddiudyz6q/image/upload/v1707476277/hny/2_s0tzzt.jpg"
      : imageId === "3"
      ? "https://res.cloudinary.com/ddiudyz6q/image/upload/v1707476278/hny/3_nh5tfi.jpg"
      : imageId === "4"
      ? "https://res.cloudinary.com/ddiudyz6q/image/upload/v1707476277/hny/4_omufl3.jpg"
      : "https://res.cloudinary.com/ddiudyz6q/image/upload/v1707476278/hny/5_rkwzwl.jpg";
  const handledChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handledSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content !== "") {
      setLoading(true);
      await dispatch(
        createComment({
          imageId: imageId,
          content: content,
        })
      );
      setLoading(false);
      setContent("");
    }
  };
  console.log(comments);
  return (
    <div className="image">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      {isFetched && comments.length !== 0 && (
        <div className="image-comments-wrapper">
          <ul className="image-comments">{renderComments()}</ul>
        </div>
      )}
      <form className="chat-box-input" onSubmit={handledSubmit}>
        <input
          type="text"
          placeholder="Bình luận gì thì nhập vào đây, kê !!..."
          onChange={handledChange}
          value={content}
        />
        <button className="chat-button">
          <IoSend className="send-icon" />
        </button>
      </form>
    </div>
  );
};

export default Image;
