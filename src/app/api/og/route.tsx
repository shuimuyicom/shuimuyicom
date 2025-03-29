import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// 定义字体文件路径，确保中文显示正常
const fontRegular = fetch(
  new URL('../../../assets/fonts/NotoSansSC-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const fontBold = fetch(
  new URL('../../../assets/fonts/NotoSansSC-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // 从查询参数中获取自定义值
    const title = searchParams.get('title') || '水木易'
    const subtitle = searchParams.get('subtitle') || '总是站在科技与人文的十字路口'
    const type = searchParams.get('type') || 'default'
    
    // 加载字体
    const [regularFont, boldFont] = await Promise.all([
      fontRegular,
      fontBold,
    ])

    return new ImageResponse(
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
          }}
        >
          {/* 白色卡片容器 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              margin: '80px',
              padding: '60px',
              width: '90%',
              maxWidth: '900px',
            }}
          >
            {/* 网站标识 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                top: '40px',
                fontSize: '24px',
                color: '#6B7280',
                opacity: 0.8,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B5CF6" strokeWidth="2"/>
                <path d="M8 12L12 16L16 12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8V16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ marginLeft: '8px' }}>shuimuyi.com</span>
            </div>
            
            {/* 标题 */}
            <h1
              style={{
                fontSize: type === 'article' ? '60px' : '72px',
                fontWeight: 'bold',
                margin: '0 0 20px',
                color: '#8B5CF6',
                lineHeight: 1.2,
                maxWidth: '800px',
              }}
            >
              {title}
            </h1>
            
            {/* 副标题 */}
            <p
              style={{
                fontSize: '30px',
                marginTop: '0',
                color: '#4B5563',
                lineHeight: 1.5,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </p>
            
            {/* 如果是文章类型，添加日期和类别标签 */}
            {type === 'article' && searchParams.get('date') && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '28px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: '#F3E8FF',
                  color: '#8B5CF6',
                  fontSize: '24px',
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
                {searchParams.get('date')} · {searchParams.get('category') || '博客'}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'NotoSansSC',
            data: regularFont,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'NotoSansSC',
            data: boldFont,
            weight: 700,
            style: 'normal',
          },
        ],
      },
    )
  } catch (error: any) {
    console.log(`${error.message}`)
    return new Response(`Failed to generate the OG image`, {
      status: 500,
    })
  }
} 