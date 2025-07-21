import type { JSX } from "react";
import * as _ from "./style.ts";
interface PropsType {
  name: string;
  img: string;
  comment: string;
  set: () => void;
}
const Viewer: ({ name, img, set }: PropsType) => JSX.Element = ({
  name,
  img,
  comment,
  set,
}: PropsType) => {
  const handleEdit = () => {
    alert("준비 중입니다 ∙∙∙");
  };
  const move = [
    {
      name: "캐릭터 정보(위키)",
      location: handleEdit,
    },
    {
      name: "방명록",
      location: handleEdit,
    },
    {
      name: "돌아가기",
      location: set,
    },
  ];

  return (
    <_.infoSet>
      <_.infoImg src={img} alt={name} />
      <_.info>
        <_.list>
          {move.map((item) => {
            return <_.move onClick={item.location}>{item.name}</_.move>;
          })}
        </_.list>
        <_.text>
          <_.userName>【 {name} 】</_.userName>
          <_.comment>{comment}</_.comment>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default Viewer;
