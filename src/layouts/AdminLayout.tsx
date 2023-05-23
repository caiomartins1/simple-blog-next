import AdminNav from '@/components/AdminNav';
import Link from 'next/link';
import { File } from 'phosphor-react';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <AdminNav />

      <div className="flex-1 p-4">{children}</div>
      <Link
        href="/admin/post/create"
        className="fixed dark:text-slate-100 text-gray-600 bottom-10 right-10 z-10 bg-gray-200 rounded-full p-3 hover:scale-90 transition shadow-sm"
      >
        <File size={24} />
      </Link>
    </div>
  );
};
export default AdminLayout;
