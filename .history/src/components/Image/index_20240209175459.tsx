import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { useFetchData } from "../hooks/useFethData";
import { getComments } from "../../redux/actions/comment-actions";
import { IoSend } from "react-icons/io5";
import "./Image.scss";
import imageSrc from "../../assets/images/1.jpg";
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
  ).filter((comment) => comment.imageId == imageId);
  const [content, setContent] = useState("");
  const renderComments = () => {
    return comments.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });
  };
  //const imageSrc = `../../assets/images/${imageId}.jpg`;
  console.log(imageSrc);
  const handledChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content !== "") {
      setContent((prev) => "");
    }
  };
  return (
    <div className="image">
      <div className="image-container">
        <img src={imageSrc} alt="" />
      </div>
      {isFetched && comments.length !== 0 && (
        <div className="image-comments-wrapper">
          <ul className="image-comments">{renderComments()}</ul>
        </div>
      )}
      <form className="chat-box-input" onSubmit={handledSubmit}>
        <input
          type="text"
          placeholder="Nhập tin nhắn của bạn..."
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
