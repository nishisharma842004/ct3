import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="absolute right-5 md:right-52 top-16 w-96 rounded-xl bg-white dark:bg-[#2f3241] shadow-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-200">Messages</h2>
        <div className="flex items-center gap-2">
          <span className="bg-orange text-white text-xs px-2 py-1 rounded-full font-medium">5 New</span>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
      </div>

      {/* Chat Items */}
      <div className="mt-4 max-h-72 overflow-y-auto custom-scrollbar">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start p-3 rounded-md hover:bg-gray-100 dark:hover:bg-[#3b3f4a] cursor-pointer transition"
          >
            <div className="relative">
              <img
                src={item.image}
                alt="user"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span
                className="absolute right-0 -top-1 h-2 w-2 rounded-full"
                style={{ backgroundColor: item.dotColor }}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-700 dark:text-gray-100">{item.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              <p className="text-[11px] text-gray-400 mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5">
        <Button
          text="See all messages"
          color="white"
          bgColor={currentColor}
          borderRadius="8px"
          width="full"
        />
      </div>
    </div>
  );
};

export default Chat;
