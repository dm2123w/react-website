import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/contact" ? "50%" : "0%",
                        }}
                    />
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
    @media (max-width: 750px) {
        flex-direction: column;
        padding: 2rem 0rem;
        ul {
            padding: 1.5rem 0.5rem 0.5rem 0.5rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding: 0;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 750px) {
        left: 0%;
    }
`;

export default Nav;
