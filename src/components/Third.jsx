import { motion } from "framer-motion";
import {
    fadeIn,
    planetVariants,
    staggerContainer,
    textVariant,
} from "../utils/motion";

const Third = () => {
    return (
        <div className="flex overflow-x-hidden lustria h-screen items-center justify-center">
            <motion.div
                variants={planetVariants("left")}
                className="overflow-hidden w-1/3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <div className="pl-[2.5rem]">
                    <div className="mt-8 h-[700px]">
                        <img
                            src="4.png"
                            alt="screen"
                            className="object-contain"
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="px-[5rem] py-[8rem] h-full w-2/3"
            >
                <motion.h1
                    variants={textVariant(0.2)}
                    className="text-[12rem] w-fit"
                >
                    Digital
                </motion.h1>
                <motion.h1
                    variants={textVariant(0.6)}
                    className="text-[7rem] w-fit"
                >
                    Brilliance
                </motion.h1>
                <motion.h1
                    variants={textVariant(1)}
                    className="text-[4rem] w-fit"
                >
                    <span className="text-[2rem]">in</span> Exclusive Locations
                </motion.h1>

                <motion.div
                    variants={fadeIn("up", "tween", 1.8, 0.3)}
                    className="w-fit"
                ></motion.div>
            </motion.div>
        </div>
    );
};

export default Third;
