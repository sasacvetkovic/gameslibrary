import React, { useEffect } from "react";
// Componentes
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get data back
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <Gamelist variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail />}

      {searched.length ? (
        <Games>
          {searched.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              rating={game.rating}
            />
          ))}
        </Games>
      ) : (
        ""
      )}

      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            rating={game.rating}
          />
        ))}
      </Games>
      <h2>Popular games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            rating={game.rating}
          />
        ))}
      </Games>
      <h2>New games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            rating={game.rating}
          />
        ))}
      </Games>
    </Gamelist>
  );
};

const Gamelist = styled(motion.div)`
  padding: 0rem 5rem;
  margin-bottom: 2rem;
  h2 {
    padding: 5rem 0;
  }

  @media screen and (max-width: 600px) {
    padding: 0 0.5rem;

    h2 {
      padding: 4rem 0;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default Home;
