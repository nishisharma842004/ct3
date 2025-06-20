
const Header = ({ category, title }) => (
  <div className="mb-10 border-l-4 pl-4 border-blue-500">
    <p className="text-sm text-blue-500 uppercase tracking-wider">{category}</p>
    <h1 className="mt-1 text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-200">
      {title}
    </h1>
  </div>
);

export default Header;
