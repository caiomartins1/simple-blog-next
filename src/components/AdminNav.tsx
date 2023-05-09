import { NextPage } from 'next';
import Link from 'next/link';
import {
  EnvelopeSimple,
  Gauge,
  TerminalWindow,
  Tray,
  Users,
} from 'phosphor-react';

interface Props {}

const AdminNav: NextPage<Props> = () => {
  return (
    <div className="h-screen w-60 bg-gray-200 dark:bg-gray-600">
      <Link href={'/admin'} className="flex items-center space-x-2 p-3 mb-10">
        <TerminalWindow
          size={32}
          className="dark:text-slate-100 text-gray-600"
        />
        <span className="text-xl font-semibold dark:text-slate-100 text-gray-600">
          Admin
        </span>
      </Link>

      <div>
        <Link
          href={'/admin'}
          className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
        >
          <Gauge size={28} />
          <span className="ml-2">Dashboard</span>
        </Link>
        <Link
          href={'/admin/posts'}
          className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
        >
          <Tray size={28} />
          <span className="ml-2">Posts</span>
        </Link>
        <Link
          href={'/admin/users'}
          className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
        >
          <Users size={28} />
          <span className="ml-2">Users</span>
        </Link>
        <Link
          href={'/admin/comments'}
          className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
        >
          <EnvelopeSimple size={28} />
          <span className="ml-2">Comments</span>
        </Link>
      </div>
    </div>
  );
};
export default AdminNav;
