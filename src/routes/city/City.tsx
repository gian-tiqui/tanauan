import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const City = () => {
  const [isOpen, setIsOpen] = useState(false);

  const springs = useSpring({
    from: { x: isOpen ? 0 : -100 },
    to: { x: isOpen ? 100 : 0 },
  });

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <animated.div
        style={{
          width: 200,
          height: 200,
          background: "#ff6d6d",
          borderRadius: 8,
          transform: springs.x.to((x) => `translateX(${x}%)`),
        }}
      />
    </>
  );
};

export default City;
