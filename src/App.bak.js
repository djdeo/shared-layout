import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

function App() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{borderRadius:25}}><Item /> </motion.ul>
    </AnimateSharedLayout>
  );
}

export default App;

const Item = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <motion.li onClick={toggleOpen} initial={{borderRadius:10}}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  )
}


const Content = () => (
  <motion.div layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <div className="row" />
    <div className="row" />
    <div className="row" />
  </motion.div>
)