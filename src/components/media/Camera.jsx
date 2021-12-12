import { useState, useEffect, useRef, useContext } from 'react'
import './Media.css'
import { cameraOff, cameraOn, takePicture } from '../utils/mediaUtils'
import { Link } from "react-router-dom"
import { GalleryContext } from '../context/GalleryContext'


const Camera = () => {
	const [canUseMd, setCanUseMd] = useState(false);
	const [cameraIsOn, setCameraIsOn] = useState(false);
	const [videoStream, setVideoStream] = useState(null);
	const videoRef = useRef(null);

	const {gallery, setGallery} = useContext(GalleryContext)	

	useEffect(() => {
		setCanUseMd('mediaDevices' in navigator)
	}, [])

	const handleToggle = () => {
		if (cameraIsOn) {
			cameraOff(videoRef.current)
			setCameraIsOn(false)
		} else {
			cameraOn(
				{ videoStream, setVideoStream },
				videoRef.current				
			) 
			setCameraIsOn(true)
		} 
	}

	return (
		
		<div className="camera-container">
			{canUseMd ? <video ref={videoRef}></video> : null}
			<div className="buttonIcons">
				<div>
					<button onClick={handleToggle}>
						{cameraIsOn ?
							<img className="icon" alt="" src={require('./icons/camOn.png').default} />
							: <img className="icon" alt="" src={require('./icons/camOff.png').default} />
						}
					</button>
					<button	onClick={()=>
						takePicture(
							videoStream, 
							gallery,
							setGallery 
						)}>						
						<img className="icon" alt="" src={require('./icons/lens.png').default} />
					</button>
					<Link to="/gallery">
						<button >
							<img className="icon" alt="" src={require('./icons/gallery.png').default} />
						</button>
					</Link>
				</div>

			</div>
		</div>
	)
}

export default Camera
