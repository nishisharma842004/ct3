import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BsCheck } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import { themeColors } from '../data/dummy';

const ThemeSettings = () => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50">
      <div className="float-right h-screen w-96 dark:text-gray-200 bg-white dark:bg-[#484B52] shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-color">
          <p className="text-lg font-semibold">Theme Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="text-xl p-2 hover:bg-light-gray rounded-full"
            style={{ color: 'rgb(153, 171, 180)' }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Theme Mode Toggle */}
        <div className="p-6 border-b border-color">
          <p className="text-md font-semibold mb-4">Mode</p>
          <div className="flex flex-col gap-3">
            {['Light', 'Dark'].map((mode) => (
              <label key={mode} className="inline-flex items-center cursor-pointer text-md">
                <input
                  type="radio"
                  name="theme"
                  value={mode}
                  onChange={setMode}
                  checked={currentMode === mode}
                  className="form-radio h-4 w-4 text-blue-500 cursor-pointer"
                />
                <span className="ml-2">{mode}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Theme Color Selection */}
        <div className="p-6">
          <p className="text-md font-semibold mb-4">Theme Colors</p>
          <div className="flex flex-wrap gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <button
                  type="button"
                  onClick={() => setColor(item.color)}
                  className="w-10 h-10 rounded-full cursor-pointer relative flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <BsCheck className={`text-white text-xl ${currentColor === item.color ? 'block' : 'hidden'}`} />
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
