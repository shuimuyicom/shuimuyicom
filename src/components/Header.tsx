"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 检查系统主题偏好
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    
    // 从localStorage加载主题设置
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
    
    // 应用主题
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  // 导航链接
  const links = [
    { href: "/", label: "首页" },
    { href: "/categories", label: "分类" },
    { href: "/about", label: "关于" },
  ];

  return (
    <header className="bg-washi-50 dark:bg-sumi-900 border-b border-sumi-200 dark:border-sumi-800 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 mr-3 flex items-center justify-center text-sumi-800 dark:text-washi-100 font-medium">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V5H9V3Z" fill="currentColor" />
                <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z" fill="currentColor" fillOpacity="0.24" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-lg font-calligraphy text-sumi-800 dark:text-washi-100">水木易</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-wisteria-600 dark:text-wisteria-300 font-medium"
                    : "text-sumi-600 dark:text-sumi-400 hover:text-sumi-800 dark:hover:text-washi-100"
                } transition-colors text-sm px-1 py-1 font-calligraphy`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-sumi-500 dark:text-sumi-400 hover:text-sumi-800 dark:hover:text-washi-100 hover:bg-washi-200 dark:hover:bg-sumi-800 transition-colors focus:outline-none"
              aria-label={darkMode ? "切换到浅色模式" : "切换到深色模式"}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 md:hidden p-2 rounded-md text-sumi-500 dark:text-sumi-400 hover:text-sumi-800 dark:hover:text-washi-100 hover:bg-washi-200 dark:hover:bg-sumi-800 transition-colors focus:outline-none"
              aria-label="打开菜单"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端导航 */}
        {isOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-sumi-200 dark:border-sumi-800 mt-1 animate-fadeIn">
            <nav className="flex flex-col space-y-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-wisteria-600 dark:text-wisteria-300 font-medium"
                      : "text-sumi-600 dark:text-sumi-400 hover:text-sumi-800 dark:hover:text-washi-100"
                  } px-2 py-1 font-calligraphy transition-colors text-sm`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 