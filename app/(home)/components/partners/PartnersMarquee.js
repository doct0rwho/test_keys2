"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function PartnersMarquee() {
	return (
		<div className="partners__container">
			<Marquee autoFill speed={45} >
				<div className="partners__item">
					<Image
						src='./assets/logos/AVO-logo.svg'
						alt='Logo AVO'
						width={64}
						height={56}
					/>
				</div>
				<div className="partners__item">
					<Image
						src='./assets/logos/GRE-logo.svg'
						alt='Logo GRE'
						width={79}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='/assets/logos/DTEK-logo.svg'
						alt='Logo DTEK'
						width={96}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='./assets/logos/hitachi-logo.svg'
						alt='Logo Hitachi'
						width={240}
						height={56}
					/>
				</div>

				<div className="partners__item">

					<Image
						src='/assets/logos/MITA-logo.svg'
						alt='Logo MITA'
						width={120}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='/assets/logos/EDP-logo.svg'
						alt='Logo EDP'
						width={120}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='./assets/logos/Cummins-logo.svg'
						alt='Logo Cummins'
						width={46}
						height={56}
					/>
				</div>
				<div className="partners__item">
					<Image
						src='./assets/logos/wincanton-logo.svg'
						alt='Logo Wincanton'
						width={186}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='./assets/logos/RAF-logo.svg'
						alt='Logo RAF'
						width={93}
						height={56}
					/>
				</div>
				<div className="partners__item">
					<Image
						src='./assets/logos/tfl-logo.svg'
						alt='Logo TFL'
						width={131}
						height={56}
					/>
				</div>
				<div className="partners__item">
					<Image
						src='./assets/logos/Mercury-logo.svg'
						alt='Logo Mercury'
						width={174}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='/assets/logos/stowe-logo.png'
						alt='Logo Stowe'
						width={84}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='/assets/logos/eq-logo.png'
						alt='Logo EQ'
						width={56}
						height={56}
					/>
				</div>

				<div className="partners__item">
					<Image
						src='/assets/logos/logo_Chernihiv National University of Technology.svg'
						alt='Chernihiv National University of Technology'
						width={56}
						height={56}
					/>
				</div>

			</Marquee>
		</div>
	)
}

export default PartnersMarquee 