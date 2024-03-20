import PropTypes from 'prop-types';

import '../App.css'
import '../styles/button.css'
import '../styles/gallery.css'
import '../styles/card.css'
import { motion } from 'framer-motion';

const Profile = () => {
    const introText = "Hello, I'm Gustavo David";
  
    return (
      <>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {introText.split('').map((char, index) => (
            <motion.span
              key={index}
              style={{ display: 'inline-block', marginRight: '3px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h3>
      </>
    );
  };


export default Profile