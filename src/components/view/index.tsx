import { useState } from "react";
import Editor from "@components/view/editor";
import Viewer from "@components/view/viewer";

export const View = () => {
  const [Mode, setMode] = useState<boolean>(false);

  if (Mode) {
    return <Editor setMode={setMode} />;
  } else return <Viewer setMode={setMode} />;
};
