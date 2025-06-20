
const ChartsHeader = ({ category, title }) => (
  <div className="border-l-4 border-blue-500 pl-4 mb-10">
    <p className="text-sm uppercase text-blue-500 tracking-wider mb-1">Chart</p>
    
    <h2 className="text-2xl font-semibold text-slate-800 dark:text-gray-200">
      {category}
    </h2>
    
    <h3 className="mt-2 text-center text-xl text-gray-700 dark:text-gray-300 font-medium">
      {title}
    </h3>
  </div>
);

export default ChartsHeader;
