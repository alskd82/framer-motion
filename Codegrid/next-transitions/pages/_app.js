import { useRouter } from "next/router";

import React, { Component } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
// import styled from "styled-components";

import './global.css';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <div key={router.pathname}>
                <Component {...pageProps} />
                
                <motion.div
                    className="slide-in"
                    style={{...style_slide, ...style_slideIn}}
                    initial={{scaleY:0}}
                    animate={{scaleY:0}}
                    exit={{scaleY:1}}
                    transition={{duration: 1, ease: [0.4, 0, 0.2, 1]}}
                ></motion.div>
                <motion.div
                    className="slide-out"
                    style={{...style_slide, ...style_slideOut}}
                    initial={{scaleY:1}}
                    animate={{scaleY:0}}
                    exit={{scaleY:0}}
                    transition={{duration: 1, ease: [0.4, 0, 0.2, 1]}}
                ></motion.div>

            </div>
        </AnimatePresence>
    );
}

const style_slide ={
    position: "absolute",
    top: 0, left: 0,
    width: "100%", height: "100vh",
    background: "#0f0f0f",
}
const style_slideIn = {   
    transformOrigin: "bottom"
}
const style_slideOut={
    transformOrigin: "top"
}