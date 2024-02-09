import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
interface ImageProps {
  imageId: string;
}
const Image: React.FC<ImageProps> = ({ imageId }) => {
  const comments = useSelector(
    (state: RootState) => state.comment.comments
  ).filter((comment) => comment.imageId == imageId);
  const [content, setContent] = useState("");
  const renderComments = () => {};
  return (
    <div className="image">
      <div className="image-container">
        <img src={`../../assets/images/${imageId}.jpg`} alt="" />
      </div>
      <div className="image-comments">{}</div>
    </div>
  );
};

export default Image;
