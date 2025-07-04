import { useScroll, motion, useTransform, useSpring } from "motion/react";
import React from "react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, { damping: 50 });
  // While move the scroxll for 50% the mountain 3 y will move 70% along
  const mountain3Y = useTransform(y, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(y, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(y, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(y, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky1.jpg",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/mountain-1.png",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
