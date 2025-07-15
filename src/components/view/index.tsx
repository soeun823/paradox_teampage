// import type {FC} from "react";
import type { JSX } from "react";
import * as _ from "./style";
import { info } from "./style";

interface PropsType {
  name: string;
  img: string;
  set: () => void;
}

const view: ({ name, img, set }: PropsType) => JSX.Element = ({
  name,
  img,
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
          <div>
            다음 부턴 수행평가 ∙∙∙
            <br />
            <br />
            미리미리 준비해야지 ∙∙∙
          </div>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default view;
