import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { useFetchData } from "../hooks/useFethData";
import { getComments } from "../../redux/actions/comment-actions";
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
  return (
    <div className="image">
      <div className="image-container">
        <img src={`../../assets/images/${imageId}.jpg`} alt="" />
      </div>
      {isFetched && <div className="image-comments">{renderComments()}</div>}
    </div>
  );
};

export default Image;
