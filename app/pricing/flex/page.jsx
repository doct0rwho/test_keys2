
import dynamic from "next/dynamic";

import './Flex.css'
import { SpinnerBlock } from "../../ui/spinner/SpinnerBlock";
import Image from "next/image";
import  FlexFormWrapper from "./component/FlexFormWrapper";


export { generateMetadata } from './generateMetadata';


function Flex() {
	return (
		<div className="flex__bg">
			<div className="header__container">
				<main className="flex">

					<section className="flex__img">
						<Image width={690} height={733} src='/assets/img/flex/bg.png' quality={100} />
					</section>
					<section className="flex__form">
						<FlexFormWrapper />
					</section>

				</main>
			</div>
		</div>
	)
}

export default Flex 