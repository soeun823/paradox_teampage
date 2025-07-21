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
            <input
              type={"text"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            】
          </_.userName>
          <_.comment>
            <input
              type={"text"}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </_.comment>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default Editor;
