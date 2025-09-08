import React from 'react';
import cl from './Members.module.css';
import { Member } from './members/Member';
import getTeamMembers from './getTeamMembers';

export default async function Members() {
	const data = await getTeamMembers();

	return (
		<div className="header__container">
			<div className={cl.members}>
				{data.map((item, index) => (
					<Member key={item.lastname + index} info={item} />
				))}
			</div>
		</div>
	);
}
