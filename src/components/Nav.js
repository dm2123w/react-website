import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <a id="logo" href="#">
                    Capture
                </a>
            </h1>
            <ul>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Our Work</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    a {
        color: white;
        text-decoration: none;
    }
    #logo {
        font-size: 2.1rem;
        font-family: "Bebas Neue", cursive;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;
