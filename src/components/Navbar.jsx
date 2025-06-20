import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useEffect } from 'react';
import {
  AiOutlineMenu
} from 'react-icons/ai';
import {
  BsChatLeft
} from 'react-icons/bs';
import {
  FiShoppingCart
} from 'react-icons/fi';
import {
  MdKeyboardArrowDown
} from 'react-icons/md';
import {
  RiNotification3Line
} from 'react-icons/ri';

import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

// Reusable Nav Button Component
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-[#2a2d3a] transition duration-200"
      aria-label={title}
    >
      {dotColor && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 animate-ping"
        />
      )}
      {icon}
    </button>
  </TooltipComponent>
);

// Main Navbar Component
const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar based on screen size
  useEffect(() => {
    setActiveMenu(screenSize > 900);
  }, [screenSize]);

  return (
    <nav className="flex justify-between items-center p-2 md:mx-6 relative z-50 bg-white dark:bg-[#1e1e2f] shadow-sm">
      {/* Left Side: Menu Button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      {/* Right Side: Icons & Profile */}
      <div className="flex items-center space-x-3">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor="rgb(254, 201, 15)"
        />

        {/* User Profile */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 pr-3 pl-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a2d3a] transition"
            onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} alt="User" className="w-8 h-8 rounded-full object-cover" />
            <div className="hidden md:block">
              <p className="text-gray-500 dark:text-gray-300 text-xs">Hi,</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-100">Michael</p>
            </div>
            <MdKeyboardArrowDown className="text-gray-400 text-sm" />
          </div>
        </TooltipComponent>
      </div>

      {/* Popups */}
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </nav>
  );
};

export default Navbar;
