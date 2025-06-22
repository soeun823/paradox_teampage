import { useRef, useEffect } from "react";
import Opening from "@assets/PARADOX.mp4";

function VideoIntro() {
    const videoRef = useRef<HTMLVideoElement>(null);

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
            style={{
                position: "fixed",    // 화면에 고정
                top: 0,
                left: 0,
                width: "100vw",       // 뷰포트 너비 전체
                height: "100vh",      // 뷰포트 높이 전체
                objectFit: "cover",   // 영상 비율 유지하면서 꽉 차게
                zIndex: -1            // 다른 요소보다 뒤에 위치
            }}
        />
    );
}

export default VideoIntro;