import cl from '../../styles/pages/trainingOverview/GetVRApp.module.css'
import VrAppLink from '../../UI/vrAppLink/VrAppLink'

function GetVRApp() {
	return (
		<div className={cl.get}>
			<div className="container">
				<div className={cl.get__content}>
					<h5 className='main__header'>Get VR app</h5>
					<p className='text__body'>
					To access the our cutting-edge VR training library, download <br /> the XR training platform on your preferred headset. 
					</p>
					<div className={cl.get__content_buttons}>
						<VrAppLink />
					</div>
				</div>
			</div>
		</div>
	)
}

export  {GetVRApp}