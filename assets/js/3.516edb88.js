(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(t,_,r){t.exports=r.p+"assets/img/quic.da0ae9e0.png"},202:function(t,_,r){t.exports=r.p+"assets/img/h2-man.5455e129.jpg"},203:function(t,_,r){t.exports=r.p+"assets/img/tcp-chain1.73e51d40.png"},204:function(t,_,r){t.exports=r.p+"assets/img/tcp-chain2.18b2f6e0.png"},205:function(t,_,r){t.exports=r.p+"assets/img/tcp-chain3.73e51d40.png"},206:function(t,_,r){t.exports=r.p+"assets/img/quic-chain4.470092ed.png"},217:function(t,_,r){"use strict";r.r(_);var a=r(0),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"为什么需要quic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要quic"}},[t._v("#")]),t._v(" 为什么需要QUIC")]),t._v(" "),a("p",[t._v("QUIC本身就是一个名字，不是缩略词，它的发音和英语单词“quick”一样。")]),t._v(" "),a("p",[t._v("在很多方面QUIC可以被看作是一种适用于HTTP等协议的、新型的、可靠且安全的传输层协议，并且可以解决基于TCP和TLS的HTTP/2的一些已知的缺点。它是Web传输层协议演变的浪潮中合乎情理的下一朵浪花。")]),t._v(" "),a("p",[t._v("QUIC的用途不局限于HTTP的传输，将数据更快速地交付给终端用户的这一愿景，是创造此新型传输协议的最大原因和动力。")]),t._v(" "),a("p",[t._v("那么我们为什么要创建一个新的传输层协议？为什么要基于UDP来实现呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:r(201),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"回顾http-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回顾http-2"}},[t._v("#")]),t._v(" 回顾HTTP/2")]),t._v(" "),a("p",[t._v("HTTP/2协议("),a("a",{attrs:{href:"https://httpwg.org/specs/rfc7540.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7540"),a("OutboundLink")],1),t._v(")于2015年5月发表，从那时起，该协议便在互联网和万维网上得到了广泛的实现和部署。")]),t._v(" "),a("p",[t._v("在2018年初，热度排名前一千的网站中几乎有40%运行着HTTP/2，而在Firefox发出的HTTPS请求中，约70%的请求得到了HTTP/2的响应。所有的主流浏览器、服务器以及代理都支持了HTTP/2。")]),t._v(" "),a("p",[t._v("HTTP/2解决了HTTP/1中的很多缺点，随着HTTP/2的引入，Web开发者不需要再用许多种变通方法来解决那些非常麻烦的问题。")]),t._v(" "),a("p",[t._v("HTTP/2的一个主要特性是使用了多路复用机制(multiplexing)，因此它可以通过一个TCP连接发送多个数据流。复用使得事情变得更快更好，它带来了更好的拥塞控制、更充分的带宽利用、更长久的TCP连接--这些都比以前更好了，链路能更容易的实现全速传输。头部压缩技术也减少了带宽的用量。")]),t._v(" "),a("p",[t._v("使用了HTTP/2后，浏览器通常与每个主机进行一个TCP连接，而不再是六个。实际上，与HTTP/2使用的连接聚合(connection coalescing)和“去分片”(desharding)技术还可以进一步缩减连接数。")]),t._v(" "),a("p",[t._v("HTTP/2解决了HTTP的队头阻塞(head of line blocking)问题，也就是客户端不需要等待一个请求完成才能发送下一个请求了。\n"),a("img",{attrs:{src:r(202),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"tcp队头阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp队头阻塞"}},[t._v("#")]),t._v(" TCP队头阻塞")]),t._v(" "),a("p",[t._v("HTTP/2是基于TCP实现的。与之前的版本相比，HTTP/2使用了更少的TCP连接数。TCP是一个可靠的传输协议，基本上，你可以将它看作为两台计算机之间建立的一个虚拟链路，由一端在网络上发布的内容将以相同的顺序最终到达另一端。(或者连接中断)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(203),alt:""}})]),t._v(" "),a("p",[t._v("使用HTTP/2时，典型的浏览器会在单个TCP连接中创建并行的数十或数百个传输。")]),t._v(" "),a("p",[t._v("在使用HTTP/2的双方如果有一个数据包在网络中丢失，或者网络中断都会造成整个TCP连接的暂停，丢失的数据包将被重新传输到目的地。由于TCP是一个链条，因此如果其中一个连接突然丢失，那么该连接之后的连接就都需要等待。")]),t._v(" "),a("p",[t._v("我们用一个链条来表示通过此连接发送的两个数据流，红色和绿色的数据流：")]),t._v(" "),a("p",[a("img",{attrs:{src:r(204),alt:""}})]),t._v(" "),a("p",[t._v("这就是TCP的队头阻塞(head of line block)。")]),t._v(" "),a("p",[t._v("随着丢包率的增加，HTTP/2的性能越来越差。测试表明，在丢包率为2%的情况下(一个糟糕的网络质量)，HTTP/1的用户通常情况下会更好-因为他们通常最多具有六个TCP连接来分发丢失的数据包。这意味着就算有包丢失了，其他没有丢包的连接仍然可以继续传输。")]),t._v(" "),a("p",[t._v("基于TCP协议来修复这个问题十分困难。")]),t._v(" "),a("h3",{attrs:{id:"独立的数据流避免阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立的数据流避免阻塞"}},[t._v("#")]),t._v(" 独立的数据流避免阻塞")]),t._v(" "),a("p",[t._v("使用QUIC时，两端之间仍然存在连接，安全并且数据传输可靠。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(205),alt:""}})]),t._v(" "),a("p",[t._v("当通过该连接建立两个不同的数据流时，将对他们进行独立处理，这样的话如果其中一个数据流丢包了，则只有该数据流必须停下来，等待重传。")]),t._v(" "),a("p",[t._v("下图中在两个断点之间发送了一个黄色流和一个蓝色流。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(206),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"用tcp还是udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用tcp还是udp"}},[t._v("#")]),t._v(" 用TCP还是UDP")]),t._v(" "),a("p",[t._v("如果我们无法解决TCP中的队头阻塞问题，那么从理论上讲，我们应该在网络栈中发明一个UDP和TCP之外的新型传输层协议。或者我们应该用IETF在"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc4960",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4960"),a("OutboundLink")],1),t._v("中的标准化"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("SCTP"),a("OutboundLink")],1),t._v("传输层协议，它也具有多个我们所需的特性。")]),t._v(" "),a("p",[t._v("然而，近些年来，创建的新型传输协议在互联网上的部署遇到了很多困难。用户与服务器之间要经过许多防火墙、NAT（地址转换）、路由器和其他中间设备（middle-box），这些设备只认得TCP和UDP。如果使用另一种新的传输协议会造成N%的连接失败，这些中间设备会阻止除了TCP和UDP协议以外的协议，会认为他们是不安全的或是错误的。如果高的失败率通常被认为不值得再坚持下去。")]),t._v(" "),a("p",[t._v("除此之外，网络栈中的传输层协议改动一般意味着操作系统内核也要作出相应的修改。更新和部署新的操作系统内核是一个缓慢的过程，需要大量的精力。由IETF标准化的许多TCP新特性都因缺乏广泛支持而没有得到广泛的部署或使用。")]),t._v(" "),a("h3",{attrs:{id:"为什么不基于udp使用sctp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不基于udp使用sctp"}},[t._v("#")]),t._v(" 为什么不基于UDP使用SCTP")]),t._v(" "),a("p",[t._v("SCTP是一个支持数据流的可靠传输协议，甚至在WebRTC上已有基于UDP对它的实现。")]),t._v(" "),a("p",[t._v("由于以下原因还不能说明用它来替代QUIC会更好：")]),t._v(" "),a("ul",[a("li",[t._v("SCTP不能解决队头阻塞问题")]),t._v(" "),a("li",[t._v("SCTP要求在连接建立时就确定数据流的数量")]),t._v(" "),a("li",[t._v("SCTP没有可靠的TLS/安全性支持")]),t._v(" "),a("li",[t._v("SCTP建立连接时需要4次握手，QUIC一次都不用(0-RTT)")]),t._v(" "),a("li",[t._v("QUIC是像TCP一样的字节流，SCTP是信息流(message-based)")]),t._v(" "),a("li",[t._v("QUIC连接可以IP地址之间迁移，SCTP不可以")])]),t._v(" "),a("p",[t._v("想要了解更多的SCTP与QUIC的差异，请参考"),a("a",{attrs:{href:"https://tools.ietf.org/html/draft-joseph-quic-comparison-quic-sctp-00",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Comparison between SCTP and QUIC"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"协议僵化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议僵化"}},[t._v("#")]),t._v(" 协议僵化")]),t._v(" "),a("p",[t._v("互联网由多个网络连接而成。我们在互联网的各处搭建设备，来保证互联网的正常工作。这些分布式架设的设备有时也被称作中间件。传统网络中两点之间的中间件用于网络数据的传输。")]),t._v(" "),a("p",[t._v("这些中间件有着许多不同的特定用途，我们也可以说它们的普遍存在是因为人们认为它们必须在那里才能工作。")]),t._v(" "),a("p",[t._v("中间件可以在网络之间传递IP数据包、阻止恶意流量、执行NAT(网路地址转换)、提升性能、监视流量等。")]),t._v(" "),a("p",[t._v("为了履行它们的职责，这些中间件必须了解网络以及它们所要监视或修改的协议信息，因此它们会依赖一些很少升级的软件。")]),t._v(" "),a("p",[t._v("尽管这些中间件是将互联网“粘”在一起的关键，但是它们总是跟不上技术的更新。网络的核心部分与边缘部分(客户端、服务器)相比，更新是很慢的。")]),t._v(" "),a("p",[t._v("这些中间件会检查网络协议，问题因此出现。这些中间件是在一段时间之前部署的，只具备当时的功能。当引入新的功能时，它们会认为新的功能是非法的、有风险的。很可能会直接丢弃，或者是拖延到用户不再想使用这些新功能的程度。")]),t._v(" "),a("p",[t._v("这种问题就叫做“协议僵化”。")]),t._v(" "),a("p",[t._v("TCP的变更也容易造成僵化：客户端和远程服务器之间的中间件可以发现未知的、新的TCP特性并阻止此类连接，因为它们并不知道这些特性是什么。如果允许检测协议的详细信息，系统将了解协议通常的行为方式，随着时间的流逝，它们将变得无法更改。")]),t._v(" "),a("p",[t._v("尽可能多的将通信进行加密是唯一有效的“对抗”僵化的方式，以防止中间件看到协议传输的内容。")]),t._v(" "),a("h2",{attrs:{id:"安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[t._v("#")]),t._v(" 安全性")]),t._v(" "),a("p",[t._v("QUIC一如既往是安全的，它没有明文版本，想要建立一个QUIC连接，就必须通过TLS 1.3来进行加密保证安全。如上文所说，加密可以避免协议僵化等拦截和特殊处理。这也使QUIC具有了Web用户所期望的所有HTTPS安全特性。")]),t._v(" "),a("p",[t._v("QUIC在加密协商前，只有很少的初始握手报文会以明文形式发送。")]),t._v(" "),a("h2",{attrs:{id:"减少延迟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少延迟"}},[t._v("#")]),t._v(" 减少延迟")]),t._v(" "),a("h3",{attrs:{id:"早期数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#早期数据"}},[t._v("#")]),t._v(" 早期数据")]),t._v(" "),a("p",[t._v("与TCP的三次握手相比较，QUIC只需要0-RTT或1-RTT的握手，可以减少协商和建立新连接所需的时间。")]),t._v(" "),a("p",[t._v("除此之外，QUIC提供了允许更多数据传输的“早期数据”支持，并且使用起来比TCP的快速打开更加简单。")]),t._v(" "),a("p",[t._v("基于数据流的概念引入，客户端无需等待前一个连接结束，就可以与同一个主机建立另一个逻辑连接。")]),t._v(" "),a("h3",{attrs:{id:"tcp的快速打开的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp的快速打开的问题"}},[t._v("#")]),t._v(" TCP的快速打开的问题")]),t._v(" "),a("p",[t._v("TCP的快速打开于2014年12月发布在"),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7413",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7413"),a("OutboundLink")],1),t._v("，该规范描述了客户端如何通过第一个TCP SYN报文向服务器推送数据。")]),t._v(" "),a("p",[t._v("但是支持这个特性是需要时间的，甚至在2018年的今天还是有许多的问题。在TCP上实现这个特性的工程师，不仅要注意操作系统的版本，还要小心地处理发生问题之时，如何优雅地降级到没有该特性的版本。已知有多个网络在积极破坏这种TCP握手，从而干扰了TCP快速打开的流量。")])])}),[],!1,null,null,null);_.default=v.exports}}]);