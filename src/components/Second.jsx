import { motion } from "framer-motion";
import {
    fadeIn,
    planetVariants,
    staggerContainer,
    textVariant,
} from "../utils/motion";

const Second = () => {
    return (
        <div className="flex overflow-x-hidden lustria h-screen items-center justify-center">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="px-[5rem] py-[8rem] h-full w-1/2"
            >
                <motion.h1
                    variants={textVariant(0.2)}
                    className="text-[7rem] w-fit"
                >
                    Elevate
                </motion.h1>
                <motion.h1
                    variants={textVariant(0.6)}
                    className="text-[7rem] w-fit"
                >
                    Your Brand
                </motion.h1>
                <motion.h1
                    variants={textVariant(1)}
                    className="text-[3rem] w-fit"
                >
                    <span className="text-[1.5rem]">to</span> Extraordinary
                    Heights
                </motion.h1>
                <motion.div
                    variants={fadeIn("up", "tween", 1.8, 0.3)}
                    className="w-fit"
                >
                    {/* <button className="bg-[#340C42] hover:bg-transparent text-white font-semibold hover:text-[#340C42] px-6 py-2 border border-[#340C42] rounded-full text-[20px] mt-8">
                        Learn More
                    </button> */}
                </motion.div>
            </motion.div>
            <motion.div
                variants={planetVariants("right")}
                className="overflow-hidden w-1/2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <div className="">
                    <div className="flex gap-8 items-baseline w-fit mx-auto">
                        <img src="1.png" alt="screen" className="h-[350px]" />
                        <img src="2.png" alt="screen" className="h-[250px]" />
                    </div>
                    <div className="mt-8 pl-16 w-fit mx-auto">
                        <img src="3.png" alt="screen" className="h-[280px]" />
                    </div>
                    <div className="text-sm w-2/3 mx-auto pl-16 mt-2">
                        At everidoor, we present a realm of luxury that
                        transcends expectations. Our Luxury Display Network is
                        where sophistication meets innovation, where your
                        brand’s story unfolds on digital screens that as symbols
                        of opulence.
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Second;
