import {useEffect, useState} from "react";
import VideoIntro from "@/components/VideoIntro.tsx";
import Pages from "@/pages";

function App() {
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false);
        }, 9000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showVideo && <VideoIntro />}
            {!showVideo && <Pages/>}
        </>
    );
}

export default App
