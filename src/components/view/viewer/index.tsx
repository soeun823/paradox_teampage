import type { Dispatch, SetStateAction } from "react";
import * as _ from "./style.ts";
import { useSelectedCharStore } from "@/store/selectedCharStore.ts";
interface PropsType {
  setMode: Dispatch<SetStateAction<boolean>>;
}
const Viewer = ({ setMode }: PropsType) => {
  const clearSelectedChar = useSelectedCharStore(
    (state) => state.clearSelectedChar,
  );
  const selectedChar = useSelectedCharStore((state) => state.selectedChar);
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
      location: () => setMode(true),
    },
    {
      name: "돌아가기",
      location: clearSelectedChar,
    },
  ];

  return (
    <_.infoSet>
      <_.infoImg src={selectedChar?.real} alt={selectedChar?.name} />
      <_.info>
        <_.list>
          {move.map((item, index) => {
            return (
              <_.move key={index} onClick={item.location}>
                {item.name}
              </_.move>
            );
          })}
        </_.list>
        <_.text>
          <_.userName>【 {selectedChar?.name} 】</_.userName>
          <_.comment>{selectedChar?.comment}</_.comment>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default Viewer;
