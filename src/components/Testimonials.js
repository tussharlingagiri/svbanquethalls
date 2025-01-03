import React from "react";
import { motion } from "framer-motion";

const Testimonial = ({ text, author }) => (
  <motion.div
    className="testimonial"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p>"{text}"</p>
    <h4>- {author}</h4>
  </motion.div>
);

export default Testimonial;
