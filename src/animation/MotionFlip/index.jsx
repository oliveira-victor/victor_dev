import { motion } from 'framer-motion'

const MotionFlip = ({ children, delay = 0, duration = 0.8, axis = 'Y' }) => {
    const flipVariants = {
        hidden: { opacity: 0, [`rotate${axis}`]: -90 },
        visible: { opacity: 1, [`rotate${axis}`]: 0 },
    }

    return (
        <motion.div
            variants={flipVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, delay, ease: "easeOut" }}
            style={{
                perspective: 1000,
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionFlip;
