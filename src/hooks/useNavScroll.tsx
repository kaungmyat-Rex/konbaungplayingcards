import { useEffect, useRef, useState } from "react";

const useNavScroll = () => {
  const [scroll, setScroll] = useState(false);
  const prevScrollRef = useRef(0);
  // const prev = 124;

  useEffect(() => {
    const handleScroll = () => {
      console.log("useEffect mounted");

      const currentPosition = Math.floor(window.pageYOffset);

      if (currentPosition > prevScrollRef.current) {
        setScroll(true); // scrolling down
      } else {
        setScroll(false); // scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scroll];
};

export default useNavScroll;
