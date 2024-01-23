import React from 'react';
import './navbar.css';

import {motion} from 'framer-motion';

const RagamLogo = () => {
    return (
        
    <motion.div className="logo" initial={{ x:-1000 }}
    animate={{ x:0  }}
    transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,

    }}>
        <div className="alpha"><p>R</p></div>
        <div className="alpha"><p>A</p></div>
        <div className="alpha"><p>G</p></div>
        <div className="alpha"><p>A</p></div>
        <div className="alpha"><p>M</p></div>
    </motion.div>
    );
};

export default RagamLogo;
