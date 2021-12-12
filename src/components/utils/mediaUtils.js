export function cameraOff(videoElement) {
    videoElement.srcObject = null
    console.log('cameraOff', videoElement);
}

export async function cameraOn(context, videoElement) {
    const constraints = {
        audio: false,
        video: {
            facingMode: 'user',
            width: 500,
            height: 400
        }
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        context.setVideoStream(stream)
        videoElement.srcObject = stream
        videoElement.addEventListener('loadedmetadata', () => {
            videoElement.play()
        })
    } catch (error) {
        console.log('Failed to get video. ' + error.message);
    }
}

export async function takePicture(videoStream, gallery, setGallery) {

    if (!videoStream) {
        console.log("Camera off!")
        return alert("Turn camera on to proceed!")
    } else {

        try {
            console.log("Taking picture!")

        const imageCapture = new ImageCapture(videoStream.getVideoTracks()[0])
        let blob = await imageCapture.takePhoto()
        console.log(blob)

        const picture = URL.createObjectURL(blob)

        const photoTakenTime = photoTime();
        let dateTimePhotoTaken;
        if (photoTakenTime.time && photoTakenTime.date) {
            dateTimePhotoTaken = photoTakenTime.date + " " + photoTakenTime.time
        } else {
            dateTimePhotoTaken = "Unknown time";
        }
        const takenPicture = {
            url: picture,
            class: "gallery",
            alt: "Instablam photo",
            location: (await getGeolocation() || "Location unknown"),
            dateTimePhotoTaken
        }
        console.log(takenPicture)
        console.log(gallery)

        setGallery([...gallery, takenPicture])

        } catch (error) {
            console.log(`Error occured! '${error.message}'.`);
        }        
    }
}

export async function getGeolocation() {
    let geolocation;
    try {
        geolocation = await getImageGeolocation()
    } catch (error) {
        console.log("Location not available.")
    }
    return geolocation
}


async function getImageGeolocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coordinates = `${position.coords.latitude}, 
                    ${position.coords.longitude}` 
                    console.log(coordinates)
                    resolve(coordinates)
                },
                (error) => reject(error)
            )

        }  else {
            console.log("Need permission to use location!");
        }
       
    })
}

function photoTime() {
    const currentdate = new Date()
    const date = currentdate.getDate() + "." +
        (currentdate.getMonth() + 1) + "." + currentdate.getFullYear()
    const time = currentdate.getHours() + ":" + currentdate.getMinutes() 
    return { date, time }
}

// async function getImageGeolocation() {
//             if ("geolocation" in navigator) {    
//                 const city = await navigator.geolocation.getCurrentPosition(lookupPosition)  
//                 return city
//             }  else {
//                 alert("Need permission to use location!");
//             }
//     }
    
//     async function lookupPosition(position) {
//         let latitude = position.coords.latitude;
//         let longitude = position.coords.longitude;
//         console.log(latitude, longitude)
//         try {
//             const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
//             const data = await response.json()
//             if (data.error) {
//     			console.log("Couldn't get position<br>" + data.error.message ) 
//                 return null
//             }
//             console.log(data.city)
//             return data.city
//         } catch (error) {
//             console.log( "Couldn't get position" + error.message)
//             return null
//         }
//     }




