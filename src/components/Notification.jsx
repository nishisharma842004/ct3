import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#2c2f40] p-6 rounded-xl w-96 shadow-lg z-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg text-gray-800 dark:text-gray-100">Notifications</p>
          <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">5 New</span>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      {/* Notification Items */}
      <div className="mt-4 max-h-72 overflow-y-auto custom-scrollbar pr-1">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-b py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3a3d4d] transition"
          >
            <img
              src={item.image}
              alt="notification"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See All */}
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all notifications"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default Notification;
