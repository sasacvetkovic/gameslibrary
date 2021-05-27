//Star Images
import starEmpty from "./img/star-empty.png";
import starFull from "./img/star-full.png";

//Image resize
export const smallImage = (imagePath, size) => {
  if (!imagePath) return;
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);

  return image;
};

//Get Stars
export const getStars = (rate) => {
  const stars = [];
  const rating = Math.floor(rate);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt="star" key={i} src={starFull}></img>);
    } else {
      stars.push(<img alt="star" key={i} src={starEmpty}></img>);
    }
  }
  return stars;
};
