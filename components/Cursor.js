'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(animateRing);
    };
    raf.current = requestAnimationFrame(animateRing);

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor${hovered ? ' hovered' : ''}`} />
      <div ref={ringRef} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  );
}
