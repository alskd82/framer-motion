'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import styles from './style.module.css';

import {motion, AnimatePresence} from 'framer-motion';
import {height, blur, translate, opacity} from '../anim';
import Image from 'next/image';

export default function Nav() {
    const links = [
        {title: "Home", href: "/", src: 'home.png'},
        {title: "Shop", href: "/shop", src: 'shop.png'},
        {title: "About us", href: "/about", src: 'about_us.png'},
        {title: "Lookbook", href: "/lookbook", src: 'lookbook.png'},
        {title: "Contact", href: "/contact", src: 'contact.png'},
    ];

    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
    useEffect(() => {
        console.log(selectedLink)
    }, [selectedLink])

    return (
        <motion.div 
            className={styles.nav}
            variants={height} initial="initial" animate="enter" exit="exit"
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
                </div>
                <IMAGE src={`/imgs/${links[selectedLink.index].src}`} isActive={selectedLink.isActive} />
                
            </div>
            <Footer />
        </motion.div>
    );
}



// ------------------------------------------------- //
// BODY //
function Body({links, selectedLink, setSelectedLink}) {
    
    const getChars = (word) => {
        let chars = [];
        word.split("").forEach( (char, i) => {
            chars.push(
            <motion.span 
                key={char + i}
                custom={[i * 0.02, (word.length - i) * 0.01]} // 배열로 넣으면 앞에꺼는 animate, 뒤에꺼는 exit
                variants={translate} initial="initial" 
                animate="enter" 
                exit="exit"
            >
                {char}
            </motion.span>
            )
        })
        return chars;
    }  
    
    return (
        <div className={styles.body}>
            {links.map((link, i)=>{
                const {title, href} = link;

                return (
                    <Link key={`l_${i}`} href={href}>
                        <motion.p
                            onMouseOver={() => {setSelectedLink({isActive: true, index: i})}}
                            onMouseLeave={() => {setSelectedLink({isActive: false, index: i})}}
                            variants={blur} 
                            animate={selectedLink.isActive && selectedLink.index != i ? "open" : "closed"}
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                )
            })}
        {/* {
            links.map( (link, index) => {
                const { title, href } = link;
                return <Link key={`l_${index}`} href={href}>
                <motion.p 
                    onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
                    onMouseLeave={() => {setSelectedLink({isActive: false, index})}} 
                    variants={blur} 
                    animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                    {getChars(title)}
                </motion.p>
                </Link>
            })
        } */}
        </div>
    )
}

// ------------------------------------------------- //
// FOOTER //
function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Made by:</span>Studio Lumio
                </motion.li>
            </ul>
            <ul>
                <motion.li  
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Typography:</span> Google Fonts
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Images:</span> Freepik, Envato
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Privacy Policy
                </motion.li>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Terms & Conditions
                </motion.li>
            </ul>
        </div>
    )
}

// ------------------------------------------------- //
// IMAGE //
function IMAGE({src, isActive}) {
    return (
        <motion.div 
            variants={opacity} 
            initial="initial" 
            animate={isActive ? "open" : "closed"} 
            className={styles.imageContainer}
        >
            <Image src={src} fill={true} alt="image"/>
        </motion.div>
    )
}