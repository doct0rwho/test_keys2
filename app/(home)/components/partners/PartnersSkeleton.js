import Image from 'next/image'

function PartnersSkeleton() {
	return (
		<div className="partners__container partners__skeleton">
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
					src='./assets/logos/hitachi-logo.svg'
					alt='Logo Hitachi'
					width={240}
					height={56}
				/>
			</div>
			<div className="partners__item">
				<Image
					src='./assets/logos/Cummins-logo.svg'
					alt='Logo Cummins'
					width={45}
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
					width={150}
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
					width={85}
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

		</div>
	)
}

export default PartnersSkeleton 