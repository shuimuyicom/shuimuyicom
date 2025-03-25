import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-washi-50 dark:bg-sumi-900 mt-auto border-t border-sumi-200 dark:border-sumi-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center">
              <div className="h-7 w-7 mr-3 flex items-center justify-center text-sumi-800 dark:text-washi-100">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V5H9V3Z" fill="currentColor" />
                  <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7Z" fill="currentColor" fillOpacity="0.24" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-sumi-700 dark:text-sumi-300 font-calligraphy">水木易</span>
            </div>
            <p className="text-sm text-sumi-500 dark:text-sumi-400 mt-4 font-light max-w-sm">
              一个记录技术、思考和生活的简约空间。感谢您的访问与阅读。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-sumi-400 dark:text-sumi-500 mb-5">
                导航
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-sm text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors">
                    分类
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-sumi-600 dark:text-sumi-400 hover:text-wisteria-600 dark:hover:text-wisteria-300 transition-colors">
                    关于
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-sumi-400 dark:text-sumi-500 mb-5">
                联系方式
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-sumi-600 dark:text-sumi-400 group">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2 text-sumi-400 dark:text-sumi-500 group-hover:text-wisteria-600 dark:group-hover:text-wisteria-300 transition-colors" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="group-hover:text-wisteria-600 dark:group-hover:text-wisteria-300 transition-colors">your.email@example.com</span>
                </li>
                <li className="flex items-center text-sm text-sumi-600 dark:text-sumi-400 group">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-2 text-sumi-400 dark:text-sumi-500 group-hover:text-wisteria-600 dark:group-hover:text-wisteria-300 transition-colors" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="group-hover:text-wisteria-600 dark:group-hover:text-wisteria-300 transition-colors">github.com/yourusername</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sumi-200 dark:border-sumi-800 mt-10 pt-6 text-center text-xs text-sumi-500 dark:text-sumi-500">
          <p>© {currentYear} 水木易. 保留所有权利.</p>
          <p className="mt-2">
            使用 Next.js 和 Tailwind CSS 构建
          </p>
        </div>
      </div>
    </footer>
  );
} 