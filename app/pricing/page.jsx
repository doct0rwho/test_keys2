import  GetVrAppBunner  from "../ui/bunner/GetVrAppBunner";
import TableWrapper  from "./component/TableWrapper"
import dynamic from "next/dynamic";


import './Pricing.css'
import { SpinnerBlock } from "../ui/spinner/SpinnerBlock";
import CalculatorWrapper from './component/CalculatorWrapper';


const ScrollUp = dynamic(() => import('../ui/autoScrollUp/AutoScrollUp'), {
	ssr: false,
});

export { generateMetadata } from './generateMetadata';
function Pricing() {
	return (
		<div className='header__container'>
			<main style={{width: '100%'}}>
				<section>
					<CalculatorWrapper />
				</section>
				<section>
					<TableWrapper />
				</section>

				<section className="bunner__section">
					<GetVrAppBunner />
				</section>
				<ScrollUp />
			</main>
		</div>
	)
}

export default Pricing