import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
interface ImageProps {
  imageId: string;
}
const Image: React.FC<ImageProps> = ({ imageId }) => {
  const comments = useSelector((state: RootState) => state.comment.comments);

  return <div>Image</div>;
};

export default Image;
