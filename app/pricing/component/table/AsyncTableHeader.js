"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import cl from "../Price.module.css";
import TableHeader from "./TableHeader";

export default function AsyncTableHeader({ plans }) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const table = document.getElementById("compareTable");
			if (!table) return;
			const { top } = table.getBoundingClientRect();
			setIsScrolled(top < 140);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={classNames(cl.compare__header, isScrolled && cl.compare__header_scrolled)}>
			<div className={cl.compare__header_empty}></div>
			{plans.map(({ planKey, label, title }) => (
				<TableHeader key={planKey} planKey={planKey} title={title} label={label} />
			))}
		</div>
	);
}
