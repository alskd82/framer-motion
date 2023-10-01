'use client';
const { useState, useEffect, useRef } = React;
const gsap = window.gsap;

const styles= {
    main: {
        position: 'relative',
        display: 'flex',
        height: '100vh',
        marginBottom: '100vh',
        overflow: 'hidden',
    },
    sliderContainer:{
        position: 'absolute',
        top: 'calc(100vh - 350px)',
    },
    slider:{
        position: 'relative',
        whiteSpace: 'nowrap',
    },
    slider__p:{
        position: 'relative',
        margin: '0px',
        color: 'black',
        fontSize: '230px',
        fontWeight: '500',
        paddingRight: '50px',
    },
    slider__p_nOT_2:{
        position: 'relative',
        margin: '0px',
        color: 'black',
        fontSize: '230px',
        fontWeight: '500',
        paddingRight: '50px',

        position: 'absolute',
        left: '100%',
        top: 0
    }
}


function App() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        requestAnimationFrame(animation);

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger:{
                markers: true,
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: .25,

                onUpdate: e => direction = e.direction * -1
            },
            x: "-=600px", // 스크롤 할때마다 픽셀씩 이동
        })
    }, []);

    const animation = () => {
        if(xPercent <= -100) xPercent = 0;
        if(xPercent > 0) xPercent = -100;
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        xPercent += .05 * direction;
        requestAnimationFrame(animation);
    };

    return (
    <main style={styles.main}>
        <div style={styles.sliderContainer}>
            <div
                ref={slider} 
                style={styles.slider}>
                <p 
                    ref={firstText}
                    style={styles.slider__p}>Interaction Designer</p>
                <p 
                    ref={secondText}
                    style={styles.slider__p_nOT_2}>Interaction Designer</p>
            </div>
        </div>

    </main>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));

