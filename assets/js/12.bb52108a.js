(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(e,t,r){"use strict";r.r(t);var _=r(0),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"协议进展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#协议进展"}},[e._v("#")]),e._v(" 协议进展")]),e._v(" "),r("p",[e._v("最初的QUIC协议是由Google的Jim Roskind设计的并于2012年实施的，在Google的扩大范围实验后，于2013年向全世界公开宣布。")]),e._v(" "),r("p",[e._v("那时的QUIC还是“快速UDP互联网连接”（Quick UDP Internet Connections）的缩写，但现在已经不是了。")]),e._v(" "),r("p",[e._v("Google实现了QUIC协议，并随后将它部署在其广泛流行的浏览器（Chrome）和最流行的服务（搜索、Gmail、YouTube等等）中。他们相当快地迭代该协议的版本，并且随着时间的流逝，他们证明了该协议可以面向大量的用户提供可靠的运作。")]),e._v(" "),r("p",[e._v("2015年6月，QUIC的第一个互联网草案被提交到IETF进行标准化，但是直到2016年底，QUIC工作组才获得批准并开始工作。但随后，它立即引起了多方的高度关注。")]),e._v(" "),r("p",[e._v("在2017年，据Google的QUIC工程师称，整个互联网中大约有7%的流量在使用该协议（Google版本）。")]),e._v(" "),r("h2",{attrs:{id:"iefe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iefe"}},[e._v("#")]),e._v(" IEFE")]),e._v(" "),r("p",[e._v("IETF为QUIC标准化成立的QUIC工作组很快作出决定，IETF标准化的QUIC协议应该支持除HTTP以外的其他协议。Google版的QUIC只传输HTTP--在实践中，它使用HTTP/2的帧语法传输了有效的HTTP/2帧。")]),e._v(" "),r("p",[e._v("另外还指出，IETF-QUIC应该基于TLS 1.3而不是Google-QUIC使用的“自定义”方法来建立其加密和安全性。")]),e._v(" "),r("p",[e._v("为了满足HTTP以外的需求，IETF QUIC协议体系结构分为两个单独的层：传输层QUIC和“基于QUIC的HTTP”(HTTP over QUIC)层(有时候缩写为“hq”)。")]),e._v(" "),r("p",[e._v("尽管听起来可能是绿色无害的，但这一层的拆分已导致IETF-QUIC与原始Google-QUIC有很大不同。")]),e._v(" "),r("p",[e._v("工作组很快便察觉到这一点，为了保持适当关注和按时交付第一版QUIC，工作组专注于交付HTTP，将非HTTP的传输留给以后的工作。")]),e._v(" "),r("p",[e._v("我们在2018年3月开始编写本书，那时的计划是在2018年11月发布第一版QUIC的最终规范，不过后来推迟到2019年7月。")]),e._v(" "),r("p",[e._v("在有关IETF-QUIC的工作取得了进展的同时，谷歌团队已整合了IETF版本的详细信息，并开始逐步将其协议版本发展为IETF版本。\n谷歌仍继续在其浏览器和服务中使用自己的QUIC版本。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/quicwg/base-drafts/wiki/Implementations",target:"_blank",rel:"noopener noreferrer"}},[e._v("正在开发的大多数新实现"),r("OutboundLink")],1),e._v("已将重点放在IETF版本上，并且与Google版本不兼容。")]),e._v(" "),r("h2",{attrs:{id:"http-2的经验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-2的经验"}},[e._v("#")]),e._v(" HTTP/2的经验")]),e._v(" "),r("p",[e._v("HTTP/2规范RFC 7540于2015年5月发布，比QUIC首次引入IETF仅一个月的时间。")]),e._v(" "),r("p",[e._v("使用HTTP/2奠定了通过网络更改HTTP的基础，并且创建HTTP/2的工作组已经有了这样的经验：迭代更新的HTTP版本会比从第一版到第二版快得多(约16年)。")]),e._v(" "),r("p",[e._v("随着HTTP/2的发展，用户和软件协议栈不再以假定HTTP是一个以串行方式使用基于文本的协议。")]),e._v(" "),r("p",[e._v("HTTP-over-QUIC于2018年11月重命名为HTTP/3。")]),e._v(" "),r("h2",{attrs:{id:"标准化进展情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标准化进展情况"}},[e._v("#")]),e._v(" 标准化进展情况")]),e._v(" "),r("p",[e._v("QUIC工作组自2016年底以来一直在努力制定协议，现在计划在2019年7月之前完成工作。")]),e._v(" "),r("p",[e._v("截止至2018年11月，仍然没有使用HTTP/3进行过大型的互操作性测试--仅有的两种实现方式，还不是通过浏览器或是主流的开源服务器软件来完成的。")]),e._v(" "),r("p",[e._v("QUIC工作组的Wiki页面上列出了15种左右的QUIC实现，但是它们距离在最新的规范草案修订版上互操作还有很远的距离。")]),e._v(" "),r("p",[e._v("实施QUIC并非易事，直到今天该协议仍在不断发展和变化。")]),e._v(" "),r("h3",{attrs:{id:"服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[e._v("#")]),e._v(" 服务器")]),e._v(" "),r("p",[e._v("NGINX对QUIC和HTTP/3的支持正在开发中。它计划在NGINX 1.17开发周期中发布。")]),e._v(" "),r("p",[e._v("关于Apache对QUIC的支持，还没有公开声明。")]),e._v(" "),r("h3",{attrs:{id:"客户端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[e._v("#")]),e._v(" 客户端")]),e._v(" "),r("p",[e._v("尚未有任何大型浏览器供应商在任何状态下提供可以运行IETF版本QUIC或HTTP/3的任何版本。")]),e._v(" "),r("p",[e._v("多年以来，谷歌浏览器一直在提供谷歌自己的QUIC版本的有效实施，但是它无法与IETF QUIC协议互操作，并且它的HTTP实施不同于HTTP/3。")]),e._v(" "),r("p",[e._v("Mozilla正在开发"),r("a",{attrs:{href:"https://github.com/mozilla/neqo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Neqo"),r("OutboundLink")],1),e._v("--用"),r("a",{attrs:{href:"https://www.rust-lang.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),r("OutboundLink")],1),e._v("编写的QUIC和HTTP/3的实现。"),r("a",{attrs:{href:"https://github.com/mozilla/neqo/issues/10",target:"_blank",rel:"noopener noreferrer"}},[e._v("计划将Neqo集成到"),r("OutboundLink")],1),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Necko",target:"_blank",rel:"noopener noreferrer"}},[e._v("Necko"),r("OutboundLink")],1),e._v("(这是许多基于Mozilla的客户端应用程序，包括Firefox中使用的网络库)。")]),e._v(" "),r("p",[e._v("curl在2019年9月11日发布了7.66.0版本中的第一个实验性HTTP/3支持(draft-22)。curl使用Cloudflare的Quiche库或ngtcp2系列库来完成工作。")]),e._v(" "),r("h3",{attrs:{id:"实现的障碍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现的障碍"}},[e._v("#")]),e._v(" 实现的障碍")]),e._v(" "),r("p",[e._v("为了避免重复造轮子，以及依靠可信赖的现有协议，QUIC决定使用TLS 1.3作为它的加密和安全协议层。与此同时，工作组还决定要简化QUIC中TLS的使用，只使用“TLS信息”(TLS Messages)而不是协议中的“TLS记录”(TLS Records)。")]),e._v(" "),r("p",[e._v("这听上去可能是绿色无害的更改，但实际上对许多的QUIC协议栈实现者造成了重大的障碍。现有的支持TLS 1.3的TLS库根本没有足够的API来公开此功能并允许QUIC访问它。虽然一些QUIC实施者来自大型组织，这些组织并行处理自己的TLS协议栈，但并非每个人都如此。")]),e._v(" "),r("p",[e._v("例如，占主导地位的开源重量级OpenSSL对此没有任何API。解决这个问题的计划似乎在它们的"),r("a",{attrs:{href:"https://github.com/openssl/openssl/pull/8797",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR 8797"),r("OutboundLink")],1),e._v("中，该PR 8797的目的是引入一种与BoringSSL非常相似的API。")]),e._v(" "),r("p",[e._v("这最终将成为QUIC协议栈部署的障碍。因为QUIC要么选择基于其他TLS库，要么使用补丁版的OpenSSL或者等待OpenSSL版本更新。")]),e._v(" "),r("h3",{attrs:{id:"操作系统内核和cpu负载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作系统内核和cpu负载"}},[e._v("#")]),e._v(" 操作系统内核和CPU负载")]),e._v(" "),r("p",[e._v("Google和Facebook都提到，他们的QUIC大规模部署所需的CPU数量大约是通过TLS提供HTTP/2时相同流量负载所需要的CPU数量的两倍。")]),e._v(" "),r("p",[e._v("对此的一些解释包括：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("主要是Linux中的UDP部分根本没有像TCP协议栈那样优化，因为传统上它没有像这样被用于高速传输。")])]),e._v(" "),r("li",[r("p",[e._v("TCP和TLS有硬件加速，而这对于UDP很罕见，对于QUIC而言则基本不存在。")])])]),e._v(" "),r("p",[e._v("我们有理由相信性能和CPU的要求会随着时间的推移而得到改善。")])])}),[],!1,null,null,null);t.default=v.exports}}]);