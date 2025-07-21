import { useState } from "react";
import Editor from "@components/view/editor";
import Viewer from "@components/view/viewer";

export const View = () => {
  const [isEditMode, setEditMode] = useState<boolean>(false);

  if (isEditMode) {
    return <Editor />;
  } else return <Viewer />;
};
