import classNames from 'classnames';
import cl from './Inctruction.module.css'
import { InstallInstruction } from '@/app/ui/instruction/InstallInstruction';
import { getTranslations } from 'next-intl/server';


export default async function Inctruction() {
	const t = await getTranslations('gettingStarted'); 
	return (
		<div className="header__container">
			<div className={cl.instruction}>

				<p className={classNames('main__header', 'title', cl.title)}>{t(`title`)}</p>
				<InstallInstruction />
			</div>
		</div>
	)
}

export { Inctruction }