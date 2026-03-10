"use client";
import Image from "next/image";

import {useEffect, useState} from "react";

import Link from "next/link";
import Button from "./button";

const Logo = () => {

	const [width, setWidth] = useState(0);

	const updateWidth = () => {
		const newWidth = window.innerWidth;
		setWidth(newWidth);
	};


	const [showButton, setShowButton] = useState(false);
	const changeNavButton = () => {
		if (window.scrollY >= 400 && window.innerWidth < 768) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		updateWidth();
		window.addEventListener("scroll", changeNavButton);
	}, []);

	return (
		<>
			<Link href="/" style={{ display: showButton ? "none" : "block" }}>
				<Image src="/images/NLOGO.png" alt="Logo" width={width < 1024 ? "150" : "250"}
					height={width < 1024 ? "45" : "75"} className="relative" />
			</Link>

			<div style={{ display: showButton ? "block" : "none"}}>
				<Button />
			</div>

		</>
	);
};

export default Logo;