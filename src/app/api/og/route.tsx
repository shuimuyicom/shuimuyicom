import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

// 设置运行时环境为Edge，充分利用Edge运行时的性能优势
export const runtime = 'edge'

// 设置路由段配置，优化重新验证策略
export const revalidate = 3600 // 1小时重新验证一次

// 为中文网站优化的字体加载，使用可变字体以减少文件大小
const loadFont = async (url: string): Promise<ArrayBuffer> => {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    },
  })
  if (!res.ok) {
    throw new Error(`Failed to load font: ${res.status} ${res.statusText}`)
  }
  return await res.arrayBuffer()
}

// 使用 JSDoc 增强类型安全和文档化
/**
 * 生成OG图片
 * @param {NextRequest} request - 请求对象
 * @returns {Promise<ImageResponse>} 生成的图片响应
 */
export async function GET(request: NextRequest): Promise<ImageResponse | Response> {
  try {
    // 使用Next.js 15推荐的URL解析方式
    const { searchParams } = new URL(request.url)
    
    // 使用严格类型断言和默认值
    const title = searchParams.get('title')?.slice(0, 100) || '水木易'
    const subtitle = searchParams.get('subtitle')?.slice(0, 200) || '总是站在科技与人文的十字路口'
    const type = searchParams.has('type') ? searchParams.get('type') : 'default'
    const date = searchParams.get('date') || ''
    const category = searchParams.get('category') || ''
    
    // 并行加载字体，使用CDN以减少项目大小
    const fontData = await loadFont(
      'https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk@main/Sans/Variable/OTF/NotoSansSC-VF.otf'
    ).catch(() => {
      console.warn('Failed to load font, falling back to system fonts')
      return new ArrayBuffer(0)
    })
    
    // 使用更多Next.js 15支持的CSS特性
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F7FA',
            background: 'linear-gradient(to bottom right, #EBF4FF, #F3E8FF, #FCE7F3)',
            fontFamily: '"NotoSansSC", ui-sans-serif, system-ui, -apple-system, sans-serif',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* 背景装饰图案 - 利用Next.js 15改进的SVG支持 */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  background: 'linear-gradient(120deg, #8B5CF6, #EC4899)',
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  top: `${Math.sin(i * 0.5) * 100 + 50}px`,
                  left: `${Math.cos(i * 0.5) * 100 + i * 200}px`,
                  opacity: 0.1,
                  transform: `rotate(${i * 20}deg)`,
                }}
              />
            ))}
          </div>
          
          {/* 白色卡片容器 - 优化阴影和圆角 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: '24px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
              margin: '80px',
              padding: '60px',
              width: '90%',
              maxWidth: '900px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* 网站标识 - 使用Next.js 15支持的更多CSS功能 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                top: '40px',
                fontSize: '24px',
                color: '#6B7280',
                opacity: 0.9,
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(6px)',
                padding: '8px 16px',
                borderRadius: '9999px',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2"/>
                <path d="M8 12L12 16L16 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ marginLeft: '8px' }}>shuimuyi.com</span>
            </div>
            
            {/* 标题 - 优化文字大小和行高 */}
            <h1
              style={{
                fontSize: type === 'article' ? '60px' : '72px',
                fontWeight: 'bold',
                margin: '0 0 20px',
                color: '#8B5CF6',
                lineHeight: 1.2,
                maxWidth: '800px',
                // 添加文字阴影增强可读性
                textShadow: '0px 2px 4px rgba(139, 92, 246, 0.1)',
              }}
            >
              {title}
            </h1>
            
            {/* 副标题 - 使用更好的文字渲染 */}
            <p
              style={{
                fontSize: '30px',
                margin: '0',
                color: '#4B5563',
                lineHeight: 1.5,
                maxWidth: '800px',
                fontWeight: '400',
              }}
            >
              {subtitle}
            </p>
            
            {/* 如果是文章类型，添加日期和类别标签 */}
            {type === 'article' && date && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '32px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  backgroundColor: '#F3E8FF',
                  color: '#8B5CF6',
                  fontSize: '24px',
                  fontWeight: '500',
                  boxShadow: '0 2px 6px rgba(139, 92, 246, 0.15)',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginRight: '8px' }}>
                  <rect width="18" height="18" x="3" y="3" rx="2" stroke="#8B5CF6" strokeWidth="2"/>
                  <path d="M9 13h6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 17h6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 3v4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 3v4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 9h18" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {date} {category && `· ${category}`}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // 使用加载的字体，如果没有则回退到系统字体
        fonts: fontData.byteLength > 0 ? [
          {
            name: 'NotoSansSC',
            data: fontData,
            style: 'normal',
            weight: 400,
          }
        ] : undefined,
        // 添加缓存控制头
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          'Content-Type': 'image/png',
          'Content-Disposition': 'inline',
        },
      },
    )
    
    return imageResponse
  } catch (error: unknown) {
    // 增强错误处理，提供更详细信息
    console.error('Error generating image:', error instanceof Error ? error.message : String(error))
    
    // 返回带有详细错误信息的响应
    return new Response(`Failed to generate the OG image: ${error instanceof Error ? error.message : 'Unknown error'}`, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      }
    })
  }
} 