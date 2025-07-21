import * as _ from "./style.ts";
import type { Dispatch, SetStateAction } from "react";
interface PropsType {
  setMode: Dispatch<SetStateAction<boolean>>;
}
const Editor = ({ setMode }: PropsType) => {
  return (
    <_.infoSet>
      <_.info>
        <_.list>
          <_.move onClick={() => setMode(false)}>{"돌아가기"}</_.move>
        </_.list>
        <_.text>
          <_.userName>
            【
            <input type={"text"} />】
          </_.userName>
          <_.comment>
            <input type={"text"} />
          </_.comment>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default Editor;
