import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { staggerContainer, textVariant } from "../utils/motion";

const Hero = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 0.7]);
    const opacity = useTransform(scrollY, [0, 40], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            console.log(scrollY.get());
            console.log(scale);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);
    return (
        <div className="h-[120vh] overflow-hidden w-full relative">
            <motion.img
                src="main-bg.png"
                alt="bg"
                style={{ scale: scale }}
            ></motion.img>
            <h1 className="absolute text-[4rem] z-[-1] bottom-0 mb-4 w-full text-center left-1/2 transform -translate-x-1/2 font-light lustria">
                Welcome to the Epitome of Luxury Advertising.
            </h1>
            {/* <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="px-[5rem] mx-auto"
            >
                <motion.h1
                    className="text-[4rem] text-center lustria fixed bottom-0"
                    style={{ opacity: opacity }}
                >
                    Welcome to the Epitome of Luxury Advertising.
                </motion.h1>
            </motion.div> */}
        </div>
    );
};

export default Hero;
