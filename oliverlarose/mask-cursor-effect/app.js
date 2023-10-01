'use client';
const { useState, useEffect } = React;
const {motion} = Motion;

function App() {
    const {x, y} = useMousePosition();
    // useEffect(()=>console.log(x,y));

    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 40;


    return (
        <main className="main">
            <motion.div 
                className="mask"
                animate={{
                    WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{type: "tween", ease: "backOut"}}
            >
                <p
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                >
                    A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
                </p>
            </motion.div>

            <div className="body">
                <p>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
            </div>
    </main>
    );
}


ReactDOM.render(<App />, document.getElementById('app'));


// -------- mouse Position ----------------- //
function useMousePosition(){
    const [mousePosition, setMousePosition] = useState({x:0, y:0});

    const updateMousePosition = e =>{
        setMousePosition({x: e.clientX, y: e.clientY})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', updateMousePosition)
        return ()=>  window.removeEventListener('mousemove', updateMousePosition)
    },[])

    return mousePosition
}