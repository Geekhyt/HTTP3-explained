module.exports = {
    title: 'HTTP/3详解',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: '首页', link: '/' }
        ],
        sidebar: {
          '/quic/': [
             '引言',
             '为什么需要QUIC',
             '协议进展',
             '协议特点',
             'QUIC工作原理',
             'HTTP3',
             '常见批评',
             '技术标准',
             'QUIC v2'
          ]
        },
        displayAllHeaders: true, // 默认值：false
        activeHeaderLinks: false // 默认值：true
    }
  }