import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "水木易 | 分享知识，记录生活",
  description: "水木易的个人博客，分享技术、生活和读书心得",
};

export default function Home() {
  const latestPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-sumi-950">
      <div className="max-w-6xl mx-auto bg-card-50 dark:bg-ink-900 min-h-screen shadow-xl">
        {/* 博主信息部分 - 参考华生AI首页样式 */}
        <section className="relative pt-16 pb-16 px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* 左侧头像区域 */}
            <div className="relative w-72 h-72 flex-shrink-0">
              <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-500/30 dark:to-purple-500/30">
                <Image
                  src="/images/avatar.png"
                  alt="水木易"
                  fill
                  sizes="288px"
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
            
            {/* 右侧内容区域 */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl text-violet-600 dark:text-violet-400 font-bold mb-4 text-center md:text-left">
                水木易
              </h1>
              
              <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 text-center md:text-left">
                哲学硕士，独立开发 | 总是站在科技与人文的十字路口
              </div>
              
              {/* 成就/标签列表 */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-500">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-gray-700 dark:text-gray-200">
                    研习中国传统文化、国学、命理学多年；
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-violet-500">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-gray-700 dark:text-gray-200">
                    不喜夸张人设，只欲分享真理，成人达己；
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-amber-500">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-gray-700 dark:text-gray-200">
                    坚持学术传承，拒绝故弄玄虚、故作高深；
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-500">
                      <rect width="18" height="18" x="3" y="3" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7h10M7 12h10M7 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-gray-700 dark:text-gray-200">
                    咨询交流请扫码添加微信
                  </div>
                </div>
              </div>
              
              {/* 社交媒体链接 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                {/* 公众号 */}
                <a href="#" 
                   className="social-link mp group relative flex items-center justify-center h-10 w-fit px-3 rounded-full bg-white dark:bg-ink-700 border border-gray-200 dark:border-ink-600 shadow-sm hover:shadow-md transition-all">
                  <svg className="h-5 w-5 text-green-600 mr-1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 3.5h-17a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-200">公众号</span>
                  <div className="qr-tooltip">
                    <div className="w-36 h-36 bg-white dark:bg-ink-800 p-2 rounded-lg shadow-lg">
                      <div className="w-full h-full rounded-md qr-placeholder">
                        <Image 
                          src="/images/social/mp-qr.png" 
                          alt="Official Account QR Code" 
                          width={128} 
                          height={128}
                          className="w-full h-full rounded-md"
                          priority
                        />
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-white dark:bg-ink-800 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </a>

                {/* B站 */}
                <a href="https://space.bilibili.com/1394172436" target="_blank" rel="noopener noreferrer" 
                   className="social-link bilibili flex items-center justify-center h-10 w-fit px-3 rounded-full bg-white dark:bg-ink-700 border border-gray-200 dark:border-ink-600 shadow-sm hover:shadow-md transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906L17.813 4.653zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773H5.333zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"></path>
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-200">B站</span>
                </a>

                {/* 小红书 */}
                <a href="https://www.xiaohongshu.com/user/profile/67c43e27000000000601de46" target="_blank" rel="noopener noreferrer"
                   className="social-link xiaohongshu flex items-center justify-center h-10 w-fit px-3 rounded-full bg-white dark:bg-ink-700 border border-gray-200 dark:border-ink-600 shadow-sm hover:shadow-md transition-all">
                  <svg className="h-5 w-5 text-red-500 mr-1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M17 2v20M7 2v20M2 12h20M2 7h5M17 7h5M2 17h5M17 17h5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-200">小红书</span>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@shuimuyicom" target="_blank" rel="noopener noreferrer" 
                   className="social-link youtube flex items-center justify-center h-10 w-fit px-3 rounded-full bg-white dark:bg-ink-700 border border-gray-200 dark:border-ink-600 shadow-sm hover:shadow-md transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-200">YouTube</span>
                </a>

                {/* X */}
                <a href="https://x.com/shuimuyicom" target="_blank" rel="noopener noreferrer" 
                   className="social-link x flex items-center justify-center h-10 w-fit px-3 rounded-full bg-white dark:bg-ink-700 border border-gray-200 dark:border-ink-600 shadow-sm hover:shadow-md transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-200">X</span>
                </a>

                {/* 微信 */}
                <a href="#" 
                   className="social-link wechat group relative flex items-center justify-center h-10 w-fit px-3 rounded-full bg-white dark:bg-ink-700 border border-gray-200 dark:border-ink-600 shadow-sm hover:shadow-md transition-all">
                  <svg className="h-5 w-5 text-green-600 mr-1.5" viewBox="0 0 24 24" fill="none">
                    <path d="M8.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor"/>
                    <path d="M15.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor"/>
                    <path d="M21.5 11c0-4.418-4.03-8-9-8s-9 3.582-9 8c0 2.21 1.008 4.187 2.583 5.584l-1.334 4.035 4.576-2.013A10.15 10.15 0 0 0 12.5 19c4.97 0 9-3.582 9-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-200">微信</span>
                  <div className="qr-tooltip">
                    <div className="w-36 h-36 bg-white dark:bg-ink-800 p-2 rounded-lg shadow-lg">
                      <div className="w-full h-full rounded-md qr-placeholder">
                        <Image 
                          src="/images/social/wechat-qr.png" 
                          alt="WeChat QR Code" 
                          width={128} 
                          height={128}
                          className="w-full h-full rounded-md"
                          priority
                        />
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-white dark:bg-ink-800 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 py-16 md:py-24">
          {/* 分隔线 */}
          <div className="max-w-xs mx-auto mb-24">
            <hr className="border-bg-300 dark:border-ink-700" />
          </div>
          
          {/* 最新文章部分 */}
          <section>
            <h2 className="text-2xl text-ink-800 dark:text-bg-100 mb-12 text-center">最新文章</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {latestPosts.length > 0 ? (
                latestPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-card-50 dark:bg-ink-800 border border-bg-200 dark:border-ink-700 shadow-surface dark:shadow-none overflow-hidden group hover:border-bg-300 dark:hover:border-ink-600 transition-all"
                  >
                    <div className="p-6 md:p-8">
                      <Link href={`/categories/${post.category.id}`} className="inline-block mb-4">
                        <span className="text-xs uppercase tracking-wider font-medium text-ink-400 dark:text-ink-400">
                          {post.category.name}
                        </span>
                      </Link>
                      
                      <Link href={`/posts/${post.id}`}>
                        <h3 className="text-xl mb-3 text-ink-800 dark:text-bg-100 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <time className="text-sm text-ink-400 dark:text-ink-500 mb-4 block">{post.date}</time>
                      
                      <p className="text-ink-500 dark:text-ink-300 mb-5 line-clamp-2">{post.excerpt}</p>
                      
                      <Link 
                        href={`/posts/${post.id}`} 
                        className="inline-flex items-center text-sm text-accent-600 dark:text-accent-300 font-medium group-hover:translate-x-0.5 transition-transform"
                      >
                        阅读全文
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1" 
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full py-16 flex flex-col items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 text-bg-300 dark:text-ink-700 mb-4" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="M8 15h8"></path>
                  </svg>
                  <p className="text-center text-ink-500 dark:text-ink-300 text-lg">暂无文章</p>
                  <p className="text-center text-ink-400 dark:text-ink-500 mt-2 text-sm">敬请期待内容更新</p>
                </div>
              )}
            </div>
            
            {latestPosts.length > 0 && (
              <div className="flex justify-center mt-16">
                <Link 
                  href="/categories" 
                  className="inline-flex items-center text-ink-500 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
                >
                  查看所有分类
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
