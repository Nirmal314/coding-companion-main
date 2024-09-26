import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-start w-full min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center fixed h-[90vh] bottom-0 w-full bg-transparent">
                <div className="h-[90vh] w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute left-[10%] top-[20%] text-7xl md:text-9xl text-[#30353e] font-semibold blur-[5px]"
                    >
                        {"<>"}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        className="absolute left-[75%] top-[30%] text-7xl md:text-9xl text-[#30353e] font-semibold blur-[5px]"
                    >
                        {"{}"}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ duration: 2, delay: 0.6 }}
                        className="absolute left-[35%] top-[75%] text-7xl md:text-9xl text-[#30353e] font-semibold blur-[5px]"
                    >
                        {"</>"}
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#141c28] text-white mont">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-10 text-4xl font-bold md:text-6xl"
                >
                    Coming Soon...
                </motion.div>

                {/* Under Construction Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="w-3/4 text-lg font-normal text-center md:text-2xl md:w-full"
                >
                    Our website is currently under construction. Stay tuned for exciting updates and features!
                </motion.div>
            </div>
        </div>
    );
}

export default UnderConstruction;
