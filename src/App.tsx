import {useEffect, useState} from "react";
import VideoIntro from "@/components/VideoIntro.tsx";
import Pages from "@/pages";

function App() {
    const [showVideo, setShowVideo] = useState<boolean>(() => {
        return localStorage.getItem('hasBooted') !== 'true';
    });
    useEffect(() => {
        if (showVideo) {
            setTimeout(() => {
                localStorage.setItem('hasBooted', 'true');
                setShowVideo(false);
            }, 9000);
        }
    }, [showVideo]);
    if (showVideo) {
        return <VideoIntro />;
    }
    return (
        <>
            <Pages/>
        </>
    );
}

export default App
