import React from "react";
interface ImageProps {
  imageId: string;
}
const Image: React.FC<ImageProps> = ({ imageId }) => {
  return <div>Image</div>;
};

export default Image;
