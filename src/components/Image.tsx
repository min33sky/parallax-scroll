import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
  //? scrollYProgress: 0 ~ 1
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 1000);

  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="image" />
      </div>
      <motion.h2
        style={{
          y,
        }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}
