import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function FullPage() {
  const nameRef = useRef(null);
  const subRef = useRef(null);
  const bgRef = useRef([]);

  useEffect(() => {
    // Big intro animation for the whole screen
    // gsap.fromTo(
    //   "container",
    //   { opacity: 0, scale: 1},
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 1.8,
    //     ease: "power4.out"
    //   }
    // );

    // Typing your name in the center
    gsap.to(nameRef.current, {
      duration: 2,
      text: "Vamsi Krishna ",
      ease: "power2.out",
      delay: 0.5
    });

    // Subtitle typing in the opposite direction (right-to-left)
    // Delay it a bit so it runs after the name types
    gsap.to(subRef.current, {
      duration: 2,
      text: "an aspiring developer",
      ease: "power2.out",
      delay: 2.2
    }); 

    gsap.to(subRef.current, {
      duration: 4,
      text: "The site is work in Progress",
      ease: "power2.out",
      delay: 5.2
    });


    // Massive floating circles (orbs)
    bgRef.current.forEach((orb, i) => {
      gsap.to(orb, {
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-150, 150),
        scale: gsap.utils.random(0.8, 1.4),
        rotation: gsap.utils.random(-40, 40),
        duration: gsap.utils.random(6, 12),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    });
  }, []);

  return (
    <div className="hero-container">
      {[1, 2, 3].map((n, i) => (
        <div
          key={i}
          ref={(el) => (bgRef.current[i] = el)}
          style={{
            position: "absolute",
            width: "1800px",
            height: "1220px",
            top: ["-40px", "20%", "60%"][i],
            left: ["-40px", "70%", "40%"][i],
            borderRadius: "100%",
            filter: "blur(140px)",
            opacity: 0.6,
            background: [
              "rgba(109, 194, 250, 0.8)",
              "rgba(9, 245, 80, 0.8)",
              "rgba(54, 15, 231, 0.8)"
            ][i],
            transform: i === 0 ? "translate(0,0)" : i === 1 ? "translate(-25%,-50%)" : "translate(50,50)",
            pointerEvents: "none"
          }}
        ></div>
      ))}

      {/* Your name in the normal flow of the page */}
      <h1 ref={nameRef} className="hero-name"></h1>

      {/* subtitle below the name; animation still typed right-to-left via GSAP/TextPlugin and CSS direction */}
      <h2 ref={subRef} className="hero-subtitle"></h2>
    </div>
  );
}
