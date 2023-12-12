import { FeaturedImageContainer } from "../../styles/FeaturedImage.styled";

interface IFeaturedImage {
  imgSrc: string;
}

const FeaturedImage = ({ imgSrc }: IFeaturedImage) => {
  return (
    <FeaturedImageContainer>
      <img src={imgSrc} alt="" />
    </FeaturedImageContainer>
  );
};

export default FeaturedImage;
