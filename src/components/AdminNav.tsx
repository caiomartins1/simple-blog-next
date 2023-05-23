import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  EnvelopeSimple,
  Gauge,
  List,
  TerminalWindow,
  Tray,
  Users,
} from 'phosphor-react';

const AdminNav: FC = () => {
  const [visible, setVisible] = useState(true);

  const toggleNav = () => {
    setVisible(!visible);
    localStorage.setItem('nav-visibility', JSON.stringify(!visible));
  };

  useEffect(() => {
    const visibility = localStorage.getItem('nav-visibility');

    if (visibility) {
      setVisible(JSON.parse(visibility));
    } else {
      setVisible(true);
    }
  }, []);

  return (
    <nav
      className={`h-screen ${
        visible ? 'w-60' : 'w-12'
      }  bg-gray-200 dark:bg-gray-600 shadow-sm flex flex-col justify-between transition-width overflow-hidden`}
    >
      <div>
        <Link href={'/admin'} className="flex items-center space-x-2 p-3 mb-10">
          <TerminalWindow
            size={32}
            className="dark:text-slate-100 text-gray-600"
          />
          {visible && (
            <span className="text-xl font-semibold dark:text-slate-100 text-gray-600 leading-none">
              Admin
            </span>
          )}
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
            {visible && <span className="ml-2 leading-none">Dashboard</span>}
          </Link>

          <Link
            href={'/admin/posts'}
            className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
          >
            <Tray size={28} />
            {visible && <span className="ml-2 leading-none">Posts</span>}
          </Link>

          <Link
            href={'/admin/users'}
            className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
          >
            <Users size={28} />
            {visible && <span className="ml-2 leading-none">Users</span>}
          </Link>

          <Link
            href={'/admin/comments'}
            className="
            flex
            items-center text-base dark:text-slate-100 text-gray-600 hover:scale-[0.98] transition p-3
          "
          >
            <EnvelopeSimple size={28} />
            {visible && <span className="ml-2 leading-none">Comments</span>}
          </Link>
        </div>
      </div>

      <button
        onClick={toggleNav}
        className="dark:text-slate-100 text-gray-600 p-3 hover:scale-[0.98] transition "
      >
        <List size={25} />
      </button>
    </nav>
  );
};
export default AdminNav;
