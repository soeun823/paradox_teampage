import {useEffect, useState} from "react";
import VideoIntro from "@/components/VideoIntro.tsx";
import Intro from "@pages/intro";

function App() {
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false);
        }, 9000); // 5초
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showVideo && <VideoIntro />}
            {!showVideo && <Intro />}
        </>
    );
}

export default App
