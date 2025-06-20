
const Footer = () => (
  <footer className="mt-24 border-t pt-6 pb-4 bg-white dark:bg-[#1f2937] shadow-sm">
    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">Shoppy</span>. All rights reserved.
    </p>
  </footer>
);

export default Footer;
