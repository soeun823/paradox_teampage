import {type FC, useState } from "react";
import * as _ from "./style.ts"

interface PropsType {
    name: string;
    role: string;
    img: string;
}

const Profile: FC<PropsType> = ({ name, role, img }) => {
    const [click, setClick] = useState<boolean>(false);

    const handleClick = () => {
        setClick(!click);
    };
    console.log(img);
    return (
        <_.main onMouseEnter={handleClick} onMouseOut={handleClick}>
            <_.img src={img} alt={name}/>
            {click && <ProfileInfo name={name} role={role} img={img}/>}
        </_.main>
    );
};

const ProfileInfo: FC<PropsType> = ({ name, role }:PropsType) => {
    return (
        <_.info>
            <_.text>{name}</_.text>
            <_.text>{role}</_.text>
        </_.info>
    );
};

export default Profile;
