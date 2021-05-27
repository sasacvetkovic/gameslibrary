import React from "react";
import { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import games from "../img/games.jpeg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (!textInput) return;
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Games Library</h1>
      </Logo>
      <h2>Games Ratings, Reviews, Screenshots and More.</h2>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background: url(${games}) no-repeat center center/cover;
  height: 50vh;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
  border-bottom: 3px solid #3d3d3d;
  opacity: 99%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 120px 100px 250px #000000,
      inset -120px -100px 250px #000000;
  }

  input {
    width: 25%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 3px;
    z-index: 2;
    position: relative;
    margin-right: 2px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-radius: 3px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    z-index: 2;
    position: relative;
  }

  h1 {
    position: relative;
    z-index: 2;
    color: white;
    margin-top: 2rem;
  }

  h2 {
    position: relative;
    z-index: 2;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    height: 30vh;
  }

  @media screen and (max-width: 700px) {
    height: 50vh;

    .search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        margin-bottom: 1rem;
        width: 70%;
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  z-index: 2;
  position: relative;
  cursor: pointer;
  img {
    margin: 1.5rem 0.4rem;
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
