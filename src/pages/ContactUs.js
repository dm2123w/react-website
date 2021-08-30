import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send An Email</h2>
                    </Social>
                </Hide>

                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Subscribe To Our Instagram</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 750px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 2rem;
    color: black;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: #353535;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 1rem;
    }
`;

export default ContactUs;
