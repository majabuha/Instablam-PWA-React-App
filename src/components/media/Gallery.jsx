import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import { Link } from "react-router-dom"


export default function NewGallery() {

    const { gallery, setGallery } = useContext(GalleryContext)

    const deletePhoto = (index) => {
        const newList = (gallery) => gallery.filter((_, i) => i !== index);
        setGallery(newList);
    };

    return (
        <div>
            {gallery && gallery.map((obj, i) => {
                return (

                    <div>

                    

                    <div key={i}>
                        <figcaption>{`${obj.location}, ${obj.dateTimePhotoTaken}`}</figcaption>
                        <img src={obj.url} alt={obj.alt} className="gallery" />
                        <div className="icon-gallery">
                            <button  onClick={ () => deletePhoto( i)}>
                                <img className="icon" alt="" src={require('./icons/delete.png').default} />
                            </button>
                            
                                <button>
                                <a href={obj.url} download>
                                    <img className="icon" alt="" src={require('./icons/download.png').default} />
                                    </a>
                                </button>
                            
                        </div>
                    </div>

                    </div>
                )
            })}

            <div>
                <figcaption>{`${"Kenya"}, ${"11.06.2001 11:30"}`}</figcaption>
                <img src={require('./pictures/lion.jfif').default} alt="lion" className="gallery" />

                <figcaption>{`${"Castleland"}, ${"15.11.2005 07:30"}`}</figcaption>
                <img src={require('./pictures/castle.jfif').default} alt="castle" className="gallery" />

                <Link to="/">
						<button className="cam">
                        <img className="cam-img" alt="" src={require('./icons/camOn.png').default} />
						</button>
					</Link>

            </div>
        </div>
    )
}
