import { type FC, useState } from "react";
import * as _ from "./style.ts";

interface PropsType extends infoType {
  img: string;
}
interface infoType {
  name: string;
  role: string;
  onClick: string;
}

const Profile: FC<PropsType> = ({ name, role, img, onClick }) => {
  const [hover, setHover] = useState<boolean>(false);

  console.log(img);
  return (
    <_.main
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <_.img src={img} alt={name} />
      {hover && <ProfileInfo name={name} role={role} onClick={onClick} />}
    </_.main>
  );
};

const ProfileInfo: FC<infoType> = ({ name, role, onClick }: infoType) => {
  return (
    <_.info onClick={() => window.open(onClick, "_blank")}>
      <_.text>{name}</_.text>
      <_.text>{role}</_.text>
    </_.info>
  );
};

export default Profile;
