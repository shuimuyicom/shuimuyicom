import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rice-50 dark:bg-ink-800 mt-auto border-t border-ink-200 dark:border-ink-700">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 mr-3 border border-ink-800 dark:border-ink-200 flex items-center justify-center text-ink-800 dark:text-ink-100">
                水
              </div>
              <span className="text-ink-700 dark:text-ink-300 font-calligraphy">水木易</span>
            </div>
            <p className="text-sm text-ink-600 dark:text-ink-400 mt-3 font-light">
              分享知识，记录生活
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-16">
            <div>
              <h3 className="text-sm font-calligraphy text-ink-800 dark:text-ink-200 mb-3">
                导航
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-200">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-sm text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-200">
                    分类
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-200">
                    关于
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-calligraphy text-ink-800 dark:text-ink-200 mb-3">
                联系方式
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-ink-600 dark:text-ink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  your.email@example.com
                </li>
                <li className="flex items-center text-sm text-ink-600 dark:text-ink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  github.com/yourusername
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ink-200 dark:border-ink-700 mt-8 pt-6 text-center text-sm text-ink-500 dark:text-ink-400">
          <p>© {currentYear} 水木易. 保留所有权利.</p>
          <p className="mt-2">
            使用 Next.js 和 Tailwind CSS 构建
          </p>
        </div>
      </div>
    </footer>
  );
} 