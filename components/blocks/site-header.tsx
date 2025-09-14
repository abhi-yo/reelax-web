"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function SiteHeader() {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 8);
	});

	// Fallback for environments without motion events
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<motion.header
			className="fixed inset-x-0 top-0 z-50"
			initial={{ opacity: 1 }}
			animate={{ opacity: scrolled ? 0.92 : 1 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
	 >
			<div
				className={
					"mx-auto max-w-[1120px] px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between " +
					(scrolled
						? "border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md"
						: "bg-white")
				}
			>
				<a href="#" className="flex items-center gap-2 select-none">
					<div className="size-6 rounded border border-black bg-white" aria-hidden />
					<span className="text-[15px] tracking-[-0.01em] font-semibold">Reelax</span>
				</a>
				<nav className="hidden sm:flex items-center gap-6 text-[13px]">
					<a href="#features" className="hover:underline">Features</a>
					<a href="#how" className="hover:underline">How it works</a>
					<a href="#faq" className="hover:underline">FAQ</a>
				</nav>
				<a
					href="#cta"
					className="px-3 py-1.5 text-[13px] font-medium border border-black bg-[var(--accent)] text-white hover:bg-white hover:text-black transition-colors rounded-md"
				>
					Add to Chrome
				</a>
			</div>
		</motion.header>
	);
}

