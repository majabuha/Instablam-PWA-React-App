import { createContext, useState } from "react"

export const GalleryContext = createContext();

export default function GalleryProvider({ children }) {

    const [gallery, setGallery] = useState([])
	const [address, setAddress] = useState("Location unknown")

	// useEffect(() => {
	// 	const localData = JSON.parse(localStorage.getItem("Instablam-photo"));
	// 	console.log('GalleryContext localdata: ', localData);
	// 	if (localData) {
	// 		setGallery([
	// 			...localData,
	// 			...gallery,				
	// 		]);
	// 	} 		
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem("Instablam-photo", JSON.stringify(gallery));
	// 	console.log(gallery)
	// }, [gallery]);


	return (
		<GalleryContext.Provider
			value={{gallery, setGallery, address, setAddress, GalleryProvider}}
		>			{ children }
		</GalleryContext.Provider>
	)
}

