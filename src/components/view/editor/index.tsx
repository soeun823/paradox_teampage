import * as _ from "./style.ts";
import { type Dispatch, type SetStateAction, useState } from "react";
import { insertUserData } from "@/api/user.ts";
interface PropsType {
  setMode: Dispatch<SetStateAction<boolean>>;
}
const Editor = ({ setMode }: PropsType) => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const handleGuestBook = () => {
    insertUserData({
      name,
      comment,
    });
  };

  return (
    <_.infoSet>
      <_.info>
        <_.list>
          <_.move onClick={() => setMode(false)}>{"돌아가기"}</_.move>
          <_.move onClick={handleGuestBook}>{"방명록 남기기"}</_.move>
        </_.list>
        <_.text>
          <_.userName>
            【
            <_.inputName
              type={"text"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"**이름을 작성해주세요."}
            />
            】
          </_.userName>
          <_.comment>
            <_.inputComment
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={
                "자유롭게 작성해주세요\n" +
                "**캐릭터는 랜덤으로 배정 됩니다.\n" +
                "**최대 40자까지 작성 가능합니다"
              }
            />
          </_.comment>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default Editor;
