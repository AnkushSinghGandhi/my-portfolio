import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CursorFollower = () => {
    const blobRef = useRef(null);
    const dotRef = useRef(null);

    // Store follower position
    const follower = useRef({ x: -100, y: -100 });
    const mouse = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const blob = blobRef.current;
        const dot = dotRef.current;
        if (!blob || !dot) return;

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Move dot instantly to cursor
            gsap.set(dot, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50
            });

            // Animate follower with elastic easing
            gsap.to(follower.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 1.2,
                ease: "elastic.out(1, 0.4)",
                overwrite: true
            });
        };

        // Animation loop for stretch effect
        const tick = () => {
            const dx = mouse.current.x - follower.current.x;
            const dy = mouse.current.y - follower.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Calculate stretch (same formula as reference)
            const stretch = Math.min(dist / 735, 0.35);

            // Calculate rotation to point toward cursor
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            // Apply transforms
            gsap.set(blob, {
                x: follower.current.x,
                y: follower.current.y,
                xPercent: -50,
                yPercent: -50,
                rotation: angle,
                scaleX: 1 + stretch,
                scaleY: 1 - stretch * 2,
                width: 50 + 300 * stretch
            });
        };

        gsap.ticker.add(tick);

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            gsap.ticker.remove(tick);
        };
    }, []);

    return (
        <>
            {/* Dot at cursor */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[1001] mix-blend-difference"
                style={{ willChange: "transform" }}
            />

            {/* Jelly blob */}
            <div
                ref={blobRef}
                className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[1000] mix-blend-difference"
                style={{
                    willChange: "transform, width",
                    width: 50,
                    height: 50
                }}
            />
        </>
    );
};

export default CursorFollower;
