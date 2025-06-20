import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/Profile.jpeg';
import { userProfileData } from '../data/dummy';

const UserProfile = () => {
  const { currentColor, setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 shadow-lg z-50">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-color pb-4">
        <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          customFunc={() => setIsClicked((prev) => ({ ...prev, userProfile: false }))}
        />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-5 mt-6 border-b border-color pb-6">
        <img
          className="rounded-full h-24 w-24 object-cover"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="text-xl font-semibold dark:text-gray-200">Nishi Sharma</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Administrator</p>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">info@shop.com</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4">
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5 p-4 border-b border-color cursor-pointer hover:bg-light-gray dark:hover:bg-[#33373E] transition-all duration-200 rounded-lg"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="p-3 text-xl rounded-lg"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
