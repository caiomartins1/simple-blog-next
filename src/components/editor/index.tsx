import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import EditorToolbar from "./EditorToolbar";

interface Props { }

const Editor: FC<Props> = ({ }) => {
  const editor = useEditor({ extensions: [StarterKit] });

  return (
    <div>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
