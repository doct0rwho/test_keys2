import TableHeader from "./TableHeader";

import cl from "../Price.module.css";

const SkeletonTableHeader = () => {
	<div className={cl.compare__header}>
		<div className={cl.compare__header_empty}></div>
		<TableHeader plan="Flex" />
		<TableHeader plan="Standard" />
		<TableHeader plan="Enterprise" />
	</div>
};

export default SkeletonTableHeader ;