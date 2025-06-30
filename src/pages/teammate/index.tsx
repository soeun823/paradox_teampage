import {type FC } from "react";
import * as _ from "./style.ts";
import profile from '@datas/profile.ts';
import Profiles from "@components/profiles";

interface Profile {
    id: number;
    name: string;
    role: string;
    img: string;
}

const teammate: FC = () => {
    const profile1 = profile.filter((item: Profile) => item.id < 2);
    const profile2 = profile.filter((item: Profile) => item.id >= 2);

    return (
        <_.main id="1">
                <_.list>
                    {profile1.map((item: Profile) => (
                        <Profiles key={item.id} name={item.name} role={item.role} img={item.img} />
                    ))}
                </_.list>
                <_.list>
                    {profile2.map((item: Profile) => (
                        <Profiles key={item.id} name={item.name} role={item.role} img={item.img} />
                    ))}
                </_.list>
        </_.main>
    );
};

export default teammate;