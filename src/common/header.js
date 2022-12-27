import { Link } from 'react-router-dom';
import { Image } from './image';
import { Layout } from './layout';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import { MENUS } from '../constants/constants';

export const Header = () => {
  let activeClassName = 'underline';

  return (
    <Layout className="pt-[42px] pb-10 sticky top-0 bg-white z-10">
      <nav>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={'/'}>
            <Image src={logo} />
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-[60px] md:mt-0 md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {MENUS.map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={menu.to}
                    className={({ isActive }) => (isActive ? activeClassName : undefined)}
                  >
                    {menu.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Layout>
  );
};
