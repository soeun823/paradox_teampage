import ReactFullpage from '@fullpage/react-fullpage';
import Header from '@components/header';
import Intro from "@pages/intro";
import Teammate from "@pages/teammate";
import Guest from "@pages/guest";
import Projects from "@pages/projects";
import type {FC} from "react";
import {useLocationStore} from "@/store/navigationStore.ts";

const pages :FC =() =>{
    const setIsLocate = useLocationStore((state) => state.setIsLocate);
    return (
        <>
            <Header />
            <ReactFullpage
                anchors={['introduce', 'teammate', 'projects', 'guest']}
                afterLoad={(origin, destination, direction,) => {
                    console.log('afterLoad', { origin, destination, direction });
                    setIsLocate(destination.index);
                }}
                credits={{ enabled: false }}
                render={() => {
                    return (
                        <>
                            <div className="section">
                                <Intro />
                            </div>
                            <div className="section">
                                <Teammate/>
                            </div>
                            <div className="section">
                                <Projects />
                            </div>
                            <div className="section">
                                <Guest/>
                            </div>
                        </>
                    );
                }}
            />
        </>
    );
}
export default pages;