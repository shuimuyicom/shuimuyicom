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
    <header className="bg-rice-50 dark:bg-ink-800 border-b border-ink-200 dark:border-ink-700 sticky top-0 z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 mr-3 border border-ink-800 dark:border-ink-200 flex items-center justify-center text-ink-800 dark:text-ink-100 font-medium">
              水
            </div>
            <span className="text-xl font-calligraphy text-ink-800 dark:text-ink-100">水木易</span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-ink-900 border-b-2 border-ink-800 dark:text-ink-50 dark:border-ink-300"
                    : "text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100"
                } transition-colors px-1 py-1 font-calligraphy`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-700 focus:outline-none"
              aria-label={darkMode ? "切换到浅色模式" : "切换到深色模式"}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 md:hidden p-2 rounded-md text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-700 focus:outline-none"
              aria-label="打开菜单"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端导航 */}
        {isOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-ink-200 dark:border-ink-700 mt-2">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "text-ink-900 dark:text-ink-100 font-medium"
                      : "text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100"
                  } px-2 py-1 font-calligraphy transition-colors`}
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