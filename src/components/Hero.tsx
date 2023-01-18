import { motion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lottie from "lottie-web"
import { useScroll } from "framer-motion"
import ScrollAnim from "../assets/scroll.json";
import Image from 'next/image';


type Props = {

    t: any,
}

export default function Hero({t}: Props) {
    
    const { scrollYProgress } = useScroll()
    const transform = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const container = useRef<any>(null);

    useEffect(() => {

        Lottie.loadAnimation({
            container: container.current as any,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: ScrollAnim,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }

        })
    })
    
    return (
        <main className='mt-10 md:mt-0 relative h-[100vh] z-0'>
            <div className='w-[80%] h-full m-auto 3xl:w-[60%] flex flex-col lg:flex-row justify-evenly md:justify-around items-center '>
                
                <div className=''>
                    <motion.h1 initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition: {type: "spring", stiffness: 200}}} className='text-2xl xl:text-4xl font-light mb-2 text-gray-800'>{t("hero.upText")}</motion.h1>
                    <motion.h1 initial={{x: -500}} animate={{x: 0}} className='text-4xl xl:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 uppercase '>David Xavier</motion.h1>
                    <motion.h2 initial={{opacity: 0, scale: 0}} animate={{scale: 1, opacity: 1, transition: {duration: 3}}} className='text-lg xl:text-xl text-gray-400 text-right pt-4 uppercase tracking-widest origin-center'>{t("hero.bottomText")}</motion.h2>
                </div> 

                <motion.div initial={{y: 0}} animate={{y: [10, -10, 10]}} style={{translateY: transform}} transition={{repeat: Infinity, ease: 'linear', duration: 3}} className='relative z-0 '>
                    <motion.span animate={{rotateZ: [180, -180]}} transition={{repeat: Infinity, ease: 'linear', duration: 30}} className='absolute min-w-full min-h-full bg-gradient-to-tl from-blue-900 to-blue-500 z-10 rotate-45 rounded-3xl drop-shadow-md' />
                    <Image src="/img/foto.jpg" alt="David Xavier" width={400} height={400} className='relative w-[250px] h-[250px] md:w-[330px] md:h-[330px] xl:w-[400px] xl:h-[400px] rounded-full shadow-md z-20 m-5' />
                </motion.div>      
                    
                
                <div className='absolute w-[100px] h-[100px] m-auto bottom-10 overflow-hidden'>
                    <div className=' w-[100px] h-[100px]' ref={container} />
                </div>
            </div>

        </main>
    )
}