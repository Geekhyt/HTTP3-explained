(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{216:function(t,_,v){"use strict";v.r(_);var a=v(0),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"quic工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#quic工作原理"}},[t._v("#")]),t._v(" QUIC工作原理")]),t._v(" "),v("p",[t._v("本章节将解释QUIC传输层协议各基本模块的功能，而不会逐比特逐字节解释协议的报文。如果你想自己实现QUIC，这些介绍会加强你对协议的理解，但有关具体细节，请参考IETF的互联网草案（Internet Draft）和RFC。")]),t._v(" "),v("p",[t._v("1.建立一个"),v("router-link",{attrs:{to:"/quic/QUIC工作原理.html#连接"}},[t._v("连接")])],1),t._v(" "),v("p",[t._v("2.协商"),v("router-link",{attrs:{to:"/quic/QUIC工作原理.html#使用tls的连接"}},[t._v("安全的TLS连接")])],1),t._v(" "),v("p",[t._v("3.使用"),v("router-link",{attrs:{to:"/quic/QUIC工作原理.html#数据流"}},[t._v("数据流")])],1),t._v(" "),v("h2",{attrs:{id:"连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[t._v("#")]),t._v(" 连接")]),t._v(" "),v("p",[t._v("QUIC连接是两个QUIC端点之间的单次会话（conversation）过程。QUIC建立连接时，加密算法的版本协商与传输层握手合并完成，以减小延迟。")]),t._v(" "),v("p",[t._v("在连接上实际传输数据时需要建立并使用一个或多个数据流。")]),t._v(" "),v("h3",{attrs:{id:"连接id"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接id"}},[t._v("#")]),t._v(" 连接ID")]),t._v(" "),v("p",[t._v("每个连接过程都有一组连接标识符，或称连接ID，该ID用以识别该连接。每个端点各自选择连接ID。每个端点选择其对等方使用的连接ID。")]),t._v(" "),v("p",[t._v("这些连接ID的主要功能是确保较低协议层（UDP、IP及其底层协议）的地址更改不会导致QUIC连接的数据包传递到错误的端点。")]),t._v(" "),v("p",[t._v("通常利用连接ID，可以在IP地址和网络接口迁移的情况下得到保持——而这TCP永远做不到。举例来说，当用户的设备连接到一个Wi-Fi网络时，将进行中的下载从蜂窝网络连接转移到更快速的Wi-Fi连接。与此类似，当Wi-Fi连接不再可用时，将连接转移到蜂窝网络连接。")]),t._v(" "),v("h3",{attrs:{id:"端口号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#端口号"}},[t._v("#")]),t._v(" 端口号")]),t._v(" "),v("p",[t._v("QUIC基于UDP建立，因此使用16位的UDP端口号字段来区分传入的不同连接。")]),t._v(" "),v("h3",{attrs:{id:"版本协商"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本协商"}},[t._v("#")]),t._v(" 版本协商")]),t._v(" "),v("p",[t._v("客户端的QUIC连接请求会告知服务器所希望使用的QUIC协议版本，服务器端会回复一系列支持的版本供客户端选择。")]),t._v(" "),v("h2",{attrs:{id:"使用tls的连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用tls的连接"}},[t._v("#")]),t._v(" 使用TLS的连接")]),t._v(" "),v("p",[t._v("在初始的数据包建立连接之后，连接发起者会马上发一个加密的帧，来开始进行安全层握手。安全层使用TLS 1.3协议。")]),t._v(" "),v("p",[t._v("在QUIC中，没有方法或机制避免使用TLS连接。该设计旨在使中间设备难以篡改数据包，防止协议僵化。")]),t._v(" "),v("h2",{attrs:{id:"数据流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据流"}},[t._v("#")]),t._v(" 数据流")]),t._v(" "),v("p",[t._v("数据流（Streams）在QUIC中提供了一个轻量级、有序的字节流的抽象化。")]),t._v(" "),v("p",[t._v("QUIC中有两种基本的数据流类型：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("从发起者到对等端（Peer）的单向数据流。")])]),t._v(" "),v("li",[v("p",[t._v("双向均可发出数据的双向数据流。")])])]),t._v(" "),v("p",[t._v("连接端点的任意一方都可以建立这两种数据流，数据流之间可并行、交错地传输，并且可以被取消。")]),t._v(" "),v("p",[t._v("为了通过QUIC发送数据需要建立一个或多个数据流。")]),t._v(" "),v("h3",{attrs:{id:"流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[t._v("#")]),t._v(" 流量控制")]),t._v(" "),v("p",[t._v("每个数据流都有独立的流量控制，从而端点可以实现内存控制和反压。数据流的创建本身也有流量控制，连接双方可以声明最多可以创建几个流ID。")]),t._v(" "),v("h3",{attrs:{id:"流标识符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流标识符"}},[t._v("#")]),t._v(" 流标识符")]),t._v(" "),v("p",[t._v("数据流通过一个无符号的62比特整数标识，也称流ID。流ID的最低2位比特用于识别流的类型（单向或双向）和流的发起者。")]),t._v(" "),v("p",[t._v("流ID的最低1位比特（0x1）用于识别流的发起者。客户端发起双数（最低位置0）流，服务器发起单数（最低位置1）流。")]),t._v(" "),v("p",[t._v("第2个比特（0x2）识别单/双向流。单向流始终置1，双向流则置0。")]),t._v(" "),v("h3",{attrs:{id:"流并发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流并发"}},[t._v("#")]),t._v(" 流并发")]),t._v(" "),v("p",[t._v("QUIC允许任意数量的并发流。端点通过限制最大流ID来限制同时并发活动的传入流数量。")]),t._v(" "),v("p",[t._v("每个端点指定自己的最大流ID数，并且仅适用于对等方有效。")]),t._v(" "),v("h3",{attrs:{id:"收发数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#收发数据"}},[t._v("#")]),t._v(" 收发数据")]),t._v(" "),v("p",[t._v("端点使用流来收发数据，这是它们的最终目的。QUIC数据流是有序的字节流抽象。但是，不同流之间是无序的。")]),t._v(" "),v("h3",{attrs:{id:"流优先度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流优先度"}},[t._v("#")]),t._v(" 流优先度")]),t._v(" "),v("p",[t._v("如果正确分配了分配给流的资源的优先级，则流多路复用会对应用程序性能有很大的提升。使用其他多路复用协议（例如HTTP/2）的经验表明，有效的优先级划分策略对性能有重大的正面影响。")]),t._v(" "),v("p",[t._v("QUIC本身不提供用于交换优先级信息的框架。相反，它依赖于从使用QUIC的应用程序接收的优先级信息。使用QUIC的协议能够定义适合其应用程序语义的优先级分配方案。")]),t._v(" "),v("p",[t._v("基于QUIC使用HTTP/3时，优先级信息在HTTP层完成。")]),t._v(" "),v("h2",{attrs:{id:"_0-rtt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-rtt"}},[t._v("#")]),t._v(" 0-RTT")]),t._v(" "),v("p",[t._v("为了减少建立新连接所需的时间，先前已连接到服务器的客户端可以缓存来自该连接的某些参数，然后与服务器建立0-RTT连接。从而客户端可以立即发送数据，而无需等待握手完成。")]),t._v(" "),v("h2",{attrs:{id:"旋转比特位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#旋转比特位"}},[t._v("#")]),t._v(" 旋转比特位")]),t._v(" "),v("p",[t._v("在QUIC工作组的设计讨论中，最长的主题之一就是旋转比特位，已经花费了数百封邮件和数百个小时来讨论它。")]),t._v(" "),v("p",[t._v("旋转比特位的支持者认为，两个QUIC端点之间路径上的运营商和人员需要有办法来测量延迟。")]),t._v(" "),v("p",[t._v("反对者则反感此功能潜在的信息泄露。")]),t._v(" "),v("h3",{attrs:{id:"旋转一个比特"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#旋转一个比特"}},[t._v("#")]),t._v(" 旋转一个比特")]),t._v(" "),v("p",[t._v("QUIC连接的客户端、服务器这两个端点各为每一个QUIC连接维护一个旋转的值——0或1，在传送时候它们在报文中设置该值。")]),t._v(" "),v("p",[t._v("然后，在每一次往返时，连接双方都翻转这一比特的值。效果是观察者可以监视该比特字段的0与1脉冲。")]),t._v(" "),v("p",[t._v("这一观测只在发送方未被应用层或流量控制限制的情况下有效，并且网络上经过重新排序的数据包也会给数据带来噪声。")]),t._v(" "),v("h2",{attrs:{id:"用户空间实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户空间实现"}},[t._v("#")]),t._v(" 用户空间实现")]),t._v(" "),v("p",[t._v("在用户空间中实现传输层协议有助于协议的快速迭代，可以相对容易地发展协议而无需客户端和服务器更新其操作系统内核以部署新版本。")]),t._v(" "),v("p",[t._v("希望有人发现一个好主意，QUIC固有的任何功能都不会阻碍它未来由操作系统内核的实现和提供。")]),t._v(" "),v("h3",{attrs:{id:"众多的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#众多的实现"}},[t._v("#")]),t._v(" 众多的实现")]),t._v(" "),v("p",[t._v("在用户空间中实现一个新的传输层协议时，一个显而易见的效果是我们会看到很多独立的实现。")]),t._v(" "),v("p",[t._v("在可预见的未来，不同的应用程序可能包含（或基于）不同的HTTP/3和QUIC实现。")]),t._v(" "),v("h2",{attrs:{id:"api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),v("p",[t._v("常规TCP与程序最成功的因素之一便是标准化的套接字（socket）API。其API有着定义良好的功能，使用它能让你轻松地在各操作系统之间移植程序，因为TCP采用同样的方式运作。")]),t._v(" "),v("p",[t._v("但QUIC不是这样的。QUIC目前没有标准化的API。")]),t._v(" "),v("p",[t._v("使用QUIC时，你需要选择一个现有的库实现，并坚持使用它的API。这在某种程度上把应用“绑定”到了单一的库上。换库意味着使用另外一套API，这可能带来很多的工作。")]),t._v(" "),v("p",[t._v("另外，由于QUIC通常在用户空间中实现，所以它不像现有的TCP和UDP套接字API那样能轻易的扩展。使用QUIC意味着选择了套接字API之外的另一套API。")])])}),[],!1,null,null,null);_.default=r.exports}}]);