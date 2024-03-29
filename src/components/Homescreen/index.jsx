import React, { useRef, useEffect } from "react";
import styles from "./homescreen.module.scss";

const Homescreen = () => {
  const card = useRef();
  const THRESHOLD = 15;

  useEffect(() => {
    const divElement = card.current;

    const handleHover = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
    
      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
    
      divElement.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
  
    const resetStyles = (e) => {
      divElement.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
  
    if (divElement) {
      divElement.addEventListener("mousemove", handleHover);
      divElement.addEventListener("mouseleave", resetStyles);
    }
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.slidingBackground} />
      <div ref={card} className={styles.card}>
        <div className={styles.content}>
          <h2>Ribn Wallet</h2>
          <div className={styles.hoverAnimation} />
          <p>
            Topl's blockchain wallet for tracking, tokenizing,
            and transacting impact.
          </p>
          <div className={styles.container}>
            <label htmlFor="password">Wallet password</label>
            <input 
              placeholder="Enter here..."
              name="password"
              id="password"
            />
           </div>
           <div className={styles.buttons}>
            <button>Continue</button>
            <button>Restore Wallet</button>
           </div>
           <p>Need help?</p>
        </div>
    </div>
  </div>
  );
};

export default Homescreen;
