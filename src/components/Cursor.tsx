import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + 'px';
        cursorRef.current.style.top = e.clientY - 6 + 'px';
      }
      if (followerRef.current) {
        setTimeout(() => {
          followerRef.current!.style.left = e.clientX - 18 + 'px';
          followerRef.current!.style.top = e.clientY - 18 + 'px';
        }, 80);
      }
    };

    const grow = () => {
      cursorRef.current?.classList.add('scale-150');
      followerRef.current?.classList.add('scale-150', 'border-cyan-400');
    };
    const shrink = () => {
      cursorRef.current?.classList.remove('scale-150');
      followerRef.current?.classList.remove('scale-150', 'border-cyan-400');
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
