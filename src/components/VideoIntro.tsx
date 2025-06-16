import { useRef, useEffect } from "react";
import Opening from "@assets/PARADOX.mp4";

function VideoIntro() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <video
            ref={videoRef}
            src={Opening}
            muted
            style={{ width: "100%", height: "auto" }}
        />
    );
}

export default VideoIntro;