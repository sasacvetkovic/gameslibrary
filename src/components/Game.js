import React from "react";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
import calendar from "../img/calendar.png";
import { getStars } from "../util";

// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link, useHistory } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id, rating }) => {
  // Fix Scrolling
  const history = useHistory();

  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <div className="date">
          <div>
            <img className="icon" src={calendar} alt="icon" />
            <p>{released}</p>
          </div>
          <div className="rating">{getStars(rating)}</div>
        </div>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  .date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.2rem;

    div {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    width: 1.3rem;
    height: 1.3rem;
    display: inline-block;
    margin: 0 0.5rem 0 1.5rem;
  }

  .rating {
    margin-right: 1.5rem;
    img {
      width: 1rem;
      height: 1rem;
      display: inline-block;
    }
  }

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
