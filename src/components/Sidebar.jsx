import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dummy';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false);
  };

  const activeLink = `flex items-center gap-4 p-3 mx-2 my-1 rounded-lg text-white text-sm font-medium`;
  const normalLink = `flex items-center gap-4 p-3 mx-2 my-1 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-light-gray dark:hover:text-black`;

  return (
    <aside className="h-screen overflow-auto md:hover:overflow-auto md:overflow-hidden pb-6 px-2 transition-all duration-300">
      {activeMenu && (
        <>
          {/* Logo and Cancel Button */}
          <div className="flex justify-between items-center mt-5">
            <Link
              to="/"
              className="flex items-center gap-3 text-xl font-extrabold text-slate-900 dark:text-white ml-2"
              onClick={handleCloseSidebar}
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="md:hidden text-xl p-2 hover:bg-light-gray rounded-full"
                style={{ color: currentColor }}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar Links */}
          <div className="mt-10">
            {links.map((section) => (
              <div key={section.title}>
                <p className="text-gray-400 uppercase text-xs font-semibold px-4 mb-2">
                  {section.title}
                </p>
                {section.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
