import { Editor } from '@tiptap/react';
import { FC } from 'react';
import DropdownOptions from '../DropdownOptions';
import { CaretDown } from 'phosphor-react';

interface Props {
  editor: Editor | null;
}

const EditorToolbar: FC<Props> = ({ editor }) => {
  if (!editor) return null;

  const options = [
    {
      label: 'Paragraph',
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    {
      label: 'Heading 1',
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: 'Heading 2',
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: 'Heading 3',
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
  ];

  const getLabel = () => {
    if (editor.isActive('heading', { level: 1 })) return 'Heading 1';
    if (editor.isActive('heading', { level: 2 })) return 'Heading 2';
    if (editor.isActive('heading', { level: 3 })) return 'Heading 3';

    return 'Paragraph';
  };

  const Head = () => {
    return (
      <div className="flex items-center space-x-2 dark:text-slate-100 text-gray-600">
        <p>{getLabel()}</p>
        <CaretDown size={12} />
      </div>
    );
  };

  return (
    <div>
      <DropdownOptions options={options} head={<Head />} />
    </div>
  );
};

export default EditorToolbar;
