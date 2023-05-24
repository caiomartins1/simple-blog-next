import { Editor } from "@tiptap/react";
import { FC } from "react";
import DropdownOptions from "../DropdownOptions";

interface Props {
  editor: Editor | null;
}

const EditorToolbar: FC<Props> = ({ editor }) => {
  if (!editor) return null;
  return (
    <div>
      <DropdownOptions
        options={[
          { label: "Paragraph", onClick: () => { } },
          { label: "Heading 1", onClick: () => { } },
          { label: "Heading 2", onClick: () => { } },
          { label: "Heading 3", onClick: () => { } },
        ]}
        head={<p>Paragraph</p>}
      />
    </div>
  );
};

export default EditorToolbar;
