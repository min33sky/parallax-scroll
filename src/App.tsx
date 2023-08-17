import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import Image from './components/Image';

function App() {
  const { scrollYProgress } = useScroll();

  // https://www.framer.com/motion/transition/#spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // 강성
    damping: 30, // 반동
    restDelta: 0.001,
  });

  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Image key={i} id={i + 1} />
        ))}
      <motion.div
        className="progress"
        style={{
          scaleX,
        }}
      />
    </>
  );
}

export default App;
