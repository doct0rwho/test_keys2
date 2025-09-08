import { ButtonLink } from "@/app/ui/button/ButtonLink";
import cl from "../Price.module.css";

export default function TableHeader({ planKey, title, label }) {
	return (
		<div className={cl.table__header}>
			<p className="text__body-bold small__header" style={{ fontWeight: 600 }}>
				{title}
			</p>

			{planKey === "Enterprise" ? (
				<ButtonLink
					className="btn-link secondary"
					id="free-btn-plan"
					href="/contact-sales"
					target="_blank"
				>
					{label}
				</ButtonLink>
			) : planKey === "Standard" ? (
				<ButtonLink
					className="btn-link primary"
					id="standard-btn-plan"
					href="https://app.metaenga.com/self-registration?referrer=metaenga"
					target="_blank"
				>
					{label}
				</ButtonLink>
			) : planKey === "Flex" ? (
				<ButtonLink
					className="btn-link secondary"
					id="free-btn-plan"
					href="/pricing/flex"
				>
					{label}
				</ButtonLink>
			) : null}
		</div>
	);
}
