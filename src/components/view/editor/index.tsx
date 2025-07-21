import type { JSX } from "react";
import * as _ from "./style.ts";
interface PropsType {
  name: string;
  img: string;
  comment: string;
  set: () => void;
}

const Editor: ({ name, img, set }: PropsType) => JSX.Element = ({
  name,
  img,
  comment,
  set,
}: PropsType) => {
  return (
    <_.infoSet>
      <_.infoImg src={img} alt={name} />
      <_.info>
        <_.list>
          <_.move onClick={set}>{"돌아가기"}</_.move>
        </_.list>
        <_.text>
          <_.userName>【 {name} 】</_.userName>
          <_.comment>{comment}</_.comment>
        </_.text>
      </_.info>
    </_.infoSet>
  );
};
export default Editor;
