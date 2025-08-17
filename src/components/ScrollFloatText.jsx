import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  textColor = "white",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="char" key={index} style={{display: 'inline-block'}}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll(".char");
    if (charElements.length === 0) return;

    gsap.set(charElements, {
      opacity: 0,
      y: 30
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(charElements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [children]);

  return (
    <h2
      ref={containerRef}
      className={`overflow-hidden ${containerClassName}`}
    >
      <span
        className={`inline-block leading-[1.5] ${textClassName} font-bold text-7xl`}
        style={{color: textColor}}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
