/**
 * Created by zhaoyong on 2014/10/31.
 * 常见的TCP/UDP端口整理
 */
(function ($) {
    'use strict';

    // 常见端口
    var commonPortData = [
        {port: '1', name: 'tcpmux', descrition: 'TCP 端口服务多路复用'},
        {port: '5', name: 'rje', descrition: '远程作业入口'},
        {port: '7', name: 'echo', descrition: 'Echo 服务'},
        {port: '9', name: 'discard', descrition: '用于连接测试的空服务'},
        {port: '11', name: 'systat', descrition: '用于列举连接了的端口的系统状态'},
        {port: '13', name: 'daytime', descrition: '给请求主机发送日期和时间'},
        {port: '17', name: 'qotd', descrition: '给连接了的主机发送每日格言'},
        {port: '18', name: 'msp', descrition: '消息发送协议'},
        {port: '19', name: 'chargen', descrition: '字符生成服务；发送无止境的字符流'},
        {port: '20', name: 'ftp-data', descrition: 'FTP 数据端口'},
        {port: '21', name: 'ftp', descrition: '文件传输协议（FTP）端口；有时被文件服务协议（FSP）使用'},
        {port: '22', name: 'ssh', descrition: '安全 Shell（SSH）服务'},
        {port: '23', name: 'telnet', descrition: 'Telnet 服务'},
        {port: '25', name: 'smtp', descrition: '简单邮件传输协议（SMTP）'},
        {port: '37', name: 'time', descrition: '时间协议'},
        {port: '39', name: 'rlp', descrition: '资源定位协议'},
        {port: '42', name: 'nameserver', descrition: '互联网名称服务'},
        {port: '43', name: 'nicname', descrition: 'WHOIS 目录服务'},
        {port: '49', name: 'tacacs', descrition: '用于基于 TCP/IP 验证和访问的终端访问控制器访问控制系统'},
        {port: '50', name: 're-mail-ck', descrition: '远程邮件检查协议'},
        {port: '53', name: 'domain', descrition: '域名服务（如 BIND）'},
        {port: '63', name: 'whois++', descrition: 'WHOIS++，被扩展了的 WHOIS 服务'},
        {port: '67', name: 'bootps', descrition: '引导协议（BOOTP）服务；还被动态主机配置协议（DHCP）服务使用'},
        {port: '68', name: 'bootpc', descrition: 'Bootstrap（BOOTP）客户；还被动态主机配置协议（DHCP）客户使用'},
        {port: '69', name: 'tftp', descrition: '小文件传输协议（TFTP）'},
        {port: '70', name: 'gopher', descrition: 'Gopher 互联网文档搜寻和检索'},
        {port: '71', name: 'netrjs-1', descrition: '远程作业服务'},
        {port: '72', name: 'netrjs-2', descrition: '远程作业服务'},
        {port: '73', name: 'netrjs-3', descrition: '远程作业服务'},
        {port: '73', name: 'netrjs-4', descrition: '远程作业服务'},
        {port: '79', name: 'finger', descrition: '用于用户联系信息的 Finger 服务'},
        {port: '80', name: 'http', descrition: '用于万维网（WWW）服务的超文本传输协议（HTTP）'},
        {port: '88', name: 'kerberos', descrition: 'Kerberos 网络验证系统'},
        {port: '95', name: 'supdup', descrition: 'Telnet 协议扩展'},
        {port: '101', name: 'hostname', descrition: 'SRI-NIC 机器上的主机名服务'},
        {port: '102', name: 'iso-tsap', descrition: 'ISO 开发环境（ISODE）网络应用'},
        {port: '105', name: 'csnet-ns', descrition: '邮箱名称服务器；也被 CSO 名称服务器使用'},
        {port: '107', name: 'rtelnet', descrition: '远程 Telnet'},
        {port: '109', name: 'pop2', descrition: '邮局协议版本2'},
        {port: '110', name: 'pop3', descrition: '邮局协议版本3'},
        {port: '111', name: 'sunrpc', descrition: '用于远程命令执行的远程过程调用（RPC）协议，被网络文件系统（NFS）使用'},
        {port: '113', name: 'auth', descrition: '验证和身份识别协议'},
        {port: '115', name: 'sftp', descrition: '安全文件传输协议（SFTP）服务'},
        {port: '117', name: 'uucp-path', descrition: 'Unix 到 Unix 复制协议（UUCP）路径服务'},
        {port: '119', name: 'nntp', descrition: '用于 USENET 讨论系统的网络新闻传输协议（NNTP）'},
        {port: '123', name: 'ntp', descrition: '网络时间协议（NTP）'},
        {port: '137', name: 'netbios-ns', descrition: '在红帽企业 Linux 中被 Samba 使用的 NETBIOS 名称服务'},
        {port: '138', name: 'netbios-dgm', descrition: '在红帽企业 Linux 中被 Samba 使用的 NETBIOS 数据报服务'},
        {port: '139', name: 'netbios-ssn', descrition: '在红帽企业 Linux 中被 Samba 使用的NET BIOS 会话服务'},
        {port: '143', name: 'imap', descrition: '互联网消息存取协议（IMAP）'},
        {port: '161', name: 'snmp', descrition: '简单网络管理协议（SNMP）'},
        {port: '162', name: 'snmptrap', descrition: 'SNMP 的陷阱'},
        {port: '163', name: 'cmip-man', descrition: '通用管理信息协议（CMIP）'},
        {port: '164', name: 'cmip-agent', descrition: '通用管理信息协议（CMIP）'},
        {port: '174', name: 'mailq', descrition: 'MAILQ'},
        {port: '177', name: 'xdmcp', descrition: 'X 显示管理器控制协议'},
        {port: '178', name: 'nextstep', descrition: 'NeXTStep 窗口服务器'},
        {port: '179', name: 'bgp', descrition: '边界网络协议'},
        {port: '191', name: 'prospero', descrition: 'Cliffod Neuman 的 Prospero 服务'},
        {port: '194', name: 'irc', descrition: '互联网中继聊天（IRC）'},
        {port: '199', name: 'smux', descrition: 'SNMP UNIX 多路复用'},
        {port: '201', name: 'at-rtmp', descrition: 'AppleTalk 选路'},
        {port: '202', name: 'at-nbp', descrition: 'AppleTalk 名称绑定'},
        {port: '204', name: 'at-echo', descrition: 'AppleTalk echo 服务'},
        {port: '206', name: 'at-zis', descrition: 'AppleTalk 区块信息'},
        {port: '209', name: 'qmtp', descrition: '快速邮件传输协议（QMTP）'},
        {port: '210', name: 'z39.50', descrition: 'NISO Z39.50 数据库'},
        {port: '213', name: 'ipx', descrition: '互联网络分组交换协议（IPX），被 Novell Netware 环境常用的数据报协议'},
        {port: '220', name: 'imap3', descrition: '互联网消息存取协议版本3'},
        {port: '245', name: 'link', descrition: 'LINK'},
        {port: '347', name: 'fatserv', descrition: 'Fatmen 服务器'},
        {port: '363', name: 'rsvp_tunnel', descrition: 'RSVP 隧道'},
        {port: '369', name: 'rpc2portmap', descrition: 'Coda 文件系统端口映射器'},
        {port: '370', name: 'codaauth2', descrition: 'Coda 文件系统验证服务'},
        {port: '372', name: 'ulistproc', descrition: 'UNIX Listserv'},
        {port: '389', name: 'ldap', descrition: '轻型目录存取协议（LDAP）'},
        {port: '427', name: 'svrloc', descrition: '服务位置协议（SLP）'},
        {port: '434', name: 'mobileip-agent', descrition: '可移互联网协议（IP）代理'},
        {port: '435', name: 'mobilip-mn', descrition: '可移互联网协议（IP）管理器'},
        {port: '443', name: 'https', descrition: '安全超文本传输协议（HTTP）'},
        {port: '444', name: 'snpp', descrition: '小型网络分页协议'},
        {port: '445', name: 'microsoft-ds', descrition: '通过 TCP/IP 的服务器消息块（SMB）'},
        {port: '464', name: 'kpasswd', descrition: 'Kerberos 口令和钥匙改换服务'},
        {port: '468', name: 'photuris', descrition: 'Photuris 会话钥匙管理协议'},
        {port: '487', name: 'saft', descrition: '简单不对称文件传输（SAFT）协议'},
        {port: '488', name: 'gss-http', descrition: '用于 HTTP 的通用安全服务（GSS）'},
        {port: '496', name: 'pim-rp-disc', descrition: '用于协议独立的多址传播（PIM）服务的会合点发现（RP-DISC）'},
        {port: '500', name: 'isakmp', descrition: '互联网安全关联和钥匙管理协议（ISAKMP）'},
        {port: '535', name: 'iiop', descrition: '互联网内部对象请求代理协议（IIOP）'},
        {port: '538', name: 'gdomap', descrition: 'GNUstep 分布式对象映射器（GDOMAP）'},
        {port: '546', name: 'dhcpv6-client', descrition: '动态主机配置协议（DHCP）版本6客户'},
        {port: '547', name: 'dhcpv6-server', descrition: '动态主机配置协议（DHCP）版本6服务'},
        {port: '554', name: 'rtsp', descrition: '实时流播协议（RTSP）'},
        {port: '563', name: 'nntps', descrition: '通过安全套接字层的网络新闻传输协议（NNTPS）'},
        {port: '565', name: 'whoami', descrition: 'whoami'},
        {port: '587', name: 'submission', descrition: '邮件消息提交代理（MSA）'},
        {port: '610', name: 'npmp-local', descrition: '网络外设管理协议（NPMP）本地 / 分布式排队系统（DQS）'},
        {port: '611', name: 'npmp-gui', descrition: '网络外设管理协议（NPMP）GUI / 分布式排队系统（DQS）'},
        {port: '612', name: 'hmmp-ind', descrition: 'HMMP 指示 / DQS'},
        {port: '631', name: 'ipp', descrition: '互联网打印协议（IPP）'},
        {port: '636', name: 'ldaps', descrition: '通过安全套接字层的轻型目录访问协议（LDAPS）'},
        {port: '674', name: 'acap', descrition: '应用程序配置存取协议（ACAP）'},
        {port: '694', name: 'ha-cluster', descrition: '用于带有高可用性的群集的心跳服务'},
        {port: '749', name: 'kerberos-adm', descrition: 'Kerberos 版本5（v5）的“kadmin”数据库管理'},
        {port: '750', name: 'kerberos-iv', descrition: 'Kerberos 版本4（v4）服务'},
        {port: '765', name: 'webster', descrition: '网络词典'},
        {port: '767', name: 'phonebook', descrition: '网络电话簿'},
        {port: '873', name: 'rsync', descrition: 'rsync 文件传输服务'},
        {port: '992', name: 'telnets', descrition: '通过安全套接字层的 Telnet（TelnetS）'},
        {port: '993', name: 'imaps', descrition: '通过安全套接字层的互联网消息存取协议（IMAPS）'},
        {port: '994', name: 'ircs', descrition: '通过安全套接字层的互联网中继聊天（IRCS）'},
        {port: '995', name: 'pop3s', descrition: '通过安全套接字层的邮局协议版本3（POPS3）'}
    ];

    // UNIX特有端口数据
    var unixPortData = [
        {port: '512/tcp', name: 'exec', descrition: '用于对远程执行的进程进行验证'},
        {port: '512/udp', name: 'biff [comsat]', descrition: '异步邮件客户（biff）和服务（comsat）'},
        {port: '513/tcp', name: 'login', descrition: '远程登录（rlogin）'},
        {port: '513/udp', name: 'who [whod]', descrition: '登录的用户列表'},
        {port: '514/tcp', name: 'shell [cmd]', descrition: '不必登录的远程 shell（rshell）和远程复制（rcp）'},
        {port: '514/udp', name: 'syslog', descrition: 'UNIX 系统日志服务'},
        {port: '515', name: 'printer [spooler]', descrition: '打印机（lpr）假脱机'},
        {port: '517/udp', name: 'talk', descrition: '远程对话服务和客户'},
        {port: '518/udp', name: 'ntalk', descrition: '网络交谈（ntalk），远程对话服务和客户'},
        {port: '519', name: 'utime [unixtime]', descrition: 'UNIX 时间协议（utime）'},
        {port: '520/tcp', name: 'efs', descrition: '扩展文件名服务器（EFS）'},
        {port: '520/udp', name: 'router [route, routed]', descrition: '选路信息协议（RIP）'},
        {port: '521', name: 'ripng', descrition: '用于互联网协议版本6（IPv6）的选路信息协议'},
        {port: '525', name: 'timed [timeserver]', descrition: '时间守护进程（timed）'},
        {port: '526/tcp', name: 'tempo [newdate]', descrition: 'Tempo'},
        {port: '530/tcp', name: 'courier [rpc]', descrition: 'Courier 远程过程调用（RPC）协议'},
        {port: '531/tcp', name: 'conference [chat]', descrition: '互联网中继聊天'},
        {port: '532', name: 'netnews', descrition: 'Netnews'},
        {port: '533/udp', name: 'netwall', descrition: '用于紧急广播的 Netwall'},
        {port: '540/tcp', name: 'uucp [uucpd]', descrition: 'Unix 到 Unix 复制服务'},
        {port: '543/tcp', name: 'klogin', descrition: 'Kerberos 版本5（v5）远程登录'},
        {port: '544/tcp', name: 'kshell', descrition: 'Kerberos 版本5（v5）远程 shell'},
        {port: '548', name: 'afpovertcp', descrition: '通过传输控制协议（TCP）的 Appletalk 文件编制协议（AFP）'},
        {port: '556', name: 'remotefs [rfs_server, rfs]', descrition: 'Brunhoff 的远程文件系统（RFS）'}
    ];

    //注册的端口
    var registerPortData = [
        {port: '1080', name: 'socks', descrition: 'SOCKS 网络应用程序代理服务'},
        {port: '1236', name: 'bvcontrol [rmtcfg]', descrition: 'Garcilis Packeten 远程配置服务器'},
        {port: '1300', name: 'h323hostcallsc', descrition: 'H.323 电话会议主机电话安全'},
        {port: '1433', name: 'ms-sql-s', descrition: 'Microsoft SQL 服务器'},
        {port: '1434', name: 'ms-sql-m', descrition: 'Microsoft SQL 监视器'},
        {port: '1494', name: 'ica', descrition: 'Citrix ICA 客户'},
        {port: '1512', name: 'wins', descrition: 'Microsoft Windows 互联网名称服务器'},
        {port: '1524', name: 'ingreslock', descrition: 'Ingres 数据库管理系统（DBMS）锁定服务'},
        {port: '1525', name: 'prospero-np', descrition: '无特权的 Prospero'},
        {port: '1645', name: 'datametrics [old-radius]', descrition: 'Datametrics / 从前的 radius 项目'},
        {port: '1646', name: 'sa-msg-port [oldradacct]', descrition: 'sa-msg-port / 从前的 radacct 项目'},
        {port: '1649', name: 'kermit', descrition: 'Kermit 文件传输和管理服务'},
        {port: '1701', name: 'l2tp [l2f]', descrition: '第2层隧道服务（LT2P） / 第2层转发（L2F）'},
        {port: '1718', name: 'h323gatedisc', descrition: 'H.323 电讯守门装置发现机制'},
        {port: '1719', name: 'h323gatestat', descrition: 'H.323 电讯守门装置状态'},
        {port: '1720', name: 'h323hostcall', descrition: 'H.323 电讯主持电话设置'},
        {port: '1758', name: 'tftp-mcast', descrition: '小文件 FTP 组播'},
        {port: '1759', name: 'mtftp', descrition: '组播小文件 FTP（MTFTP）'},
        {port: '1789', name: 'hello', descrition: 'Hello 路由器通信端口'},
        {port: '1812', name: 'radius', descrition: 'Radius 拨号验证和记帐服务'},
        {port: '1813', name: 'radius-acct', descrition: 'Radius 记帐'},
        {port: '1911', name: 'mtp', descrition: 'Starlight 网络多媒体传输协议（MTP）'},
        {port: '1985', name: 'hsrp', descrition: 'Cisco 热备用路由器协议'},
        {port: '1986', name: 'licensedaemon', descrition: 'Cisco 许可管理守护进程'},
        {port: '1997', name: 'gdp-port', descrition: 'Cisco 网关发现协议（GDP）'},
        {port: '2049', name: 'nfs [nfsd]', descrition: '网络文件系统（NFS）'},
        {port: '2102', name: 'zephyr-srv', descrition: 'Zephyr 通知传输和发送服务器'},
        {port: '2103', name: 'zephyr-clt', descrition: 'Zephyr serv-hm 连接'},
        {port: '2104', name: 'zephyr-hm', descrition: 'Zephyr 主机管理器'},
        {port: '2401', name: 'cvspserver', descrition: '并行版本系统（CVS）客户 / 服务器操作'},
        {port: '2430/tcp', name: 'venus', descrition: '用于 Coda 文件系统（codacon 端口）的 Venus 缓存管理器'},
        {port: '2430/udp', name: 'venus', descrition: '用于 Coda 文件系统（callback/wbc interface 界面）的 Venus 缓存管理器'},
        {port: '2431/tcp', name: 'venus-se', descrition: 'Venus 传输控制协议（TCP）的副作用'},
        {port: '2431/udp', name: 'venus-se', descrition: 'Venus 用户数据报协议（UDP）的副作用'},
        {port: '2432/udp', name: 'codasrv', descrition: 'Coda 文件系统服务器端口'},
        {port: '2433/tcp', name: 'codasrv-se', descrition: 'Coda 文件系统 TCP 副作用'},
        {port: '2433/udp', name: 'codasrv-se', descrition: 'Coda 文件系统 UDP SFTP 副作用'},
        {port: '2600', name: 'hpstgmgr [zebrasrv]', descrition: 'HPSTGMGR；Zebra 选路'},
        {port: '2601', name: 'discp-client [zebra]', descrition: 'discp 客户；Zebra 集成的 shell'},
        {port: '2602', name: 'discp-server [ripd]', descrition: 'discp 服务器；选路信息协议守护进程（ripd）'},
        {port: '2603', name: 'servicemeter [ripngd]', descrition: '服务计量；用于 IPv6 的 RIP 守护进程'},
        {port: '2604', name: 'nsc-ccs [ospfd]', descrition: 'NSC CCS；开放式短路径优先守护进程（ospfd）'},
        {port: '2605', name: 'nsc-posa', descrition: 'NSC POSA；边界网络协议守护进程（bgpd）'},
        {port: '2606', name: 'netmon [ospf6d]', descrition: 'Dell Netmon；用于 IPv6 的 OSPF 守护进程（ospf6d）'},
        {port: '2809', name: 'corbaloc', descrition: '公共对象请求代理体系（CORBA）命名服务定位器'},
        {port: '3130', name: 'icpv2', descrition: '互联网缓存协议版本2（v2）；被 Squid 代理缓存服务器使用'},
        {port: '3306', name: 'mysql', descrition: 'MySQL 数据库服务'},
        {port: '3346', name: 'trnsprntproxy', descrition: 'Trnsprnt 代理'},
        {port: '4011', name: 'pxe', descrition: '执行前环境（PXE）服务'},
        {port: '4321', name: 'rwhois', descrition: '远程 Whois（rwhois）服务'},
        {port: '4444', name: 'krb524', descrition: 'Kerberos 版本5（v5）到版本4（v4）门票转换器'},
        {port: '5002', name: 'rfe', descrition: '无射频以太网（RFE）音频广播系统'},
        {port: '5308', name: 'cfengine', descrition: '配置引擎（Cfengine）'},
        {port: '5999', name: 'cvsup [CVSup]', descrition: 'CVSup 文件传输和更新工具'},
        {port: '6000', name: 'x11 [X]', descrition: 'X 窗口系统服务'},
        {port: '7000', name: 'afs3-fileserver', descrition: 'Andrew 文件系统（AFS）文件服务器'},
        {port: '7001', name: 'afs3-callback', descrition: '用于给缓存管理器回电的 AFS 端口'},
        {port: '7002', name: 'afs3-prserver', descrition: 'AFS 用户和组群数据库'},
        {port: '7003', name: 'afs3-vlserver', descrition: 'AFS 文件卷位置数据库'},
        {port: '7004', name: 'afs3-kaserver', descrition: 'AFS Kerberos 验证服务'},
        {port: '7005', name: 'afs3-volser', descrition: 'AFS 文件卷管理服务器'},
        {port: '7006', name: 'afs3-errors', descrition: 'AFS 错误解释服务'},
        {port: '7007', name: 'afs3-bos', descrition: 'AFS 基本监查进程'},
        {port: '7008', name: 'afs3-update', descrition: 'AFS 服务器到服务器更新器'},
        {port: '7009', name: 'afs3-rmtsys', descrition: 'AFS 远程缓存管理器服务'},
        {port: '9876', name: 'sd', descrition: '会话指引器'},
        {port: '10080', name: 'amanda', descrition: '高级 Maryland 自动网络磁盘归档器（Amanda）备份服务'},
        {port: '11371', name: 'pgpkeyserver', descrition: '良好隐私（PGP） / GNU 隐私卫士（GPG）公钥服务器'},
        {port: '11720', name: 'h323callsigalt', descrition: 'H.323 调用信号交替'},
        {port: '13720', name: 'bprd', descrition: 'Veritas NetBackup 请求守护进程（bprd）'},
        {port: '13721', name: 'bpdbm', descrition: 'Veritas NetBackup 数据库管理器（bpdbm）'},
        {port: '13722', name: 'bpjava-msvc', descrition: 'Veritas NetBackup Java / Microsoft Visual C++ (MSVC) 协议'},
        {port: '13724', name: 'vnetd', descrition: 'Veritas 网络工具'},
        {port: '13782', name: 'bpcd', descrition: 'Vertias NetBackup'},
        {port: '13783', name: 'vopied', descrition: 'Veritas VOPIED 协议'},
        {port: '22273', name: 'wnn6 [wnn4]', descrition: '假名/汉字转换系统'},
        {port: '26000', name: 'quake', descrition: 'Quake（以及相关的）多人游戏服务器'},
        {port: '26208', name: 'wnn6-ds', descrition: ' '},
        {port: '33434', name: 'traceroute', descrition: 'Traceroute 网络跟踪工具'}
    ];

    //数据报传递协议端口
    var datagramPortData = [
        {port: '1/ddp', name: 'rtmp', descrition: '路由表管理协议'},
        {port: '2/ddp', name: 'nbp', descrition: '名称绑定协议'},
        {port: '4/ddp', name: 'echo', descrition: 'AppleTalk Echo 协议'},
        {port: '6/ddp', name: 'zip', descrition: '区块信息协议'}
    ];

    // Kerberos（工程 Athena/MIT）端口
    var kerberosPortData = [
        {port: '751', name: 'kerberos_master', descrition: 'Kerberos 验证'},
        {port: '752', name: 'passwd_server', descrition: 'Kerberos 口令（kpasswd）服务器'},
        {port: '754', name: 'krb5_prop', descrition: 'Kerberos v5 从属传播'},
        {port: '760', name: 'krbupdate [kreg]', descrition: 'Kerberos 注册'},
        {port: '1109', name: 'kpop', descrition: 'Kerberos 邮局协议（KPOP）'},
        {port: '2053', name: 'knetd', descrition: 'Kerberos 多路分用器'},
        {port: '2105', name: 'eklogin', descrition: 'Kerberos v5 加密的远程登录（rlogin）'}
    ];

    //  未注册的端口
    var unregisterPortData = [
        {port: '15/tcp', name: 'netstat', descrition: '网络状态（netstat）'},
        {port: '98/tcp', name: 'linuxconf', descrition: 'Linuxconf Linux 管理工具'},
        {port: '106', name: 'poppassd', descrition: '邮局协议口令改变守护进程（POPPASSD）'},
        {port: '465/tcp', name: 'smtps', descrition: '通过安全套接字层的简单邮件传输协议（SMTPS）'},
        {port: '616/tcp', name: 'gii', descrition: '使用网关的（选路守护进程）互动界面'},
        {port: '808', name: 'omirr [omirrd]', descrition: '联机镜像（Omirr）文件镜像服务'},
        {port: '871/tcp', name: 'supfileserv', descrition: '软件升级协议（SUP）服务器'},
        {port: '901/tcp', name: 'swat', descrition: 'Samba 万维网管理工具（SWAT）'},
        {port: '953', name: 'rndc', descrition: 'Berkeley 互联网名称域版本9（BIND 9）远程名称守护进程配置工具'},
        {port: '1127', name: 'sufiledbg', descrition: '软件升级协议（SUP）调试'},
        {port: '1178/tcp', name: 'skkserv', descrition: '简单假名到汉字（SKK）日文输入服务器'},
        {port: '1313/tcp', name: 'xtel', descrition: '法国 Minitel 文本信息系统'},
        {port: '1529/tcp', name: 'support [prmsd, gnatsd]', descrition: 'GNATS 错误跟踪系统'},
        {port: '2003/tcp', name: 'cfinger', descrition: 'GNU Finger 服务'},
        {port: '2150', name: 'ninstall', descrition: '网络安装服务'},
        {port: '2988', name: 'afbackup', descrition: 'afbackup 客户-服务器备份系统'},
        {port: '3128/tcp', name: 'squid', descrition: 'Squid 万维网代理缓存'},
        {port: '3455', name: 'prsvp', descrition: 'RSVP 端口'},
        {port: '5432', name: 'postgres', descrition: 'PostgreSQL 数据库'},
        {port: '4557/tcp', name: 'fax', descrition: 'FAX 传输服务（旧服务）'},
        {port: '4559/tcp', name: 'hylafax', descrition: 'HylaFAX 客户-服务器协议（新服务）'},
        {port: '5232', name: 'sgi-dgl', descrition: 'SGI 分布式图形库'},
        {port: '5354', name: 'noclog', descrition: 'NOCOL 网络操作中心记录守护进程（noclogd）'},
        {port: '5355', name: 'hostmon', descrition: 'NOCOL 网络操作中心主机监视'},
        {port: '5680/tcp', name: 'canna', descrition: 'Canna 日文字符输入界面'},
        {port: '6010/tcp', name: 'x11-ssh-offset', descrition: '安全 Shell（SSH）X11 转发偏移'},
        {port: '6667', name: 'ircd', descrition: '互联网中继聊天守护进程（ircd）'},
        {port: '7100/tcp', name: 'xfs', descrition: 'X 字体服务器（XFS）'},
        {port: '7666/tcp', name: 'tircproxy', descrition: 'Tircproxy IRC 代理服务'},
        {port: '8008', name: 'http-alt', descrition: '超文本传输协议（HTTP）的另一选择'},
        {port: '8080', name: 'webcache', descrition: '万维网（WWW）缓存服务'},
        {port: '8081', name: 'tproxy', descrition: '透明代理'},
        {port: '9100/tcp', name: 'jetdirect [laserjet, hplj]', descrition: 'Hewlett-Packard (HP) JetDirect 网络打印服务'},
        {port: '9359', name: 'mandelspawn [mandelbrot]', descrition: '用于 X 窗口系统的并行 Mandelbrot 生成程序'},
        {port: '10081', name: 'kamanda', descrition: '使用 Kerberos 的 Amanda 备份服务'},
        {port: '10082/tcp', name: 'amandaidx', descrition: 'Amanda 备份服务'},
        {port: '10083/tcp', name: 'amidxtape', descrition: 'Amanda 备份服务'},
        {port: '20011', name: 'isdnlog', descrition: '综合业务数字网（ISDN）登录系统'},
        {port: '20012', name: 'vboxd', descrition: 'ISDN 音箱守护进程（vboxd）'},
        {port: '22305/tcp', name: 'wnn4_Kr', descrition: 'kWnn 韩文输入系统'},
        {port: '22289/tcp', name: 'wnn4_Cn', descrition: 'cWnn 中文输入系统'},
        {port: '22321/tcp', name: 'wnn4_Tw', descrition: 'tWnn 中文输入系统（台湾）'},
        {port: '24554', name: 'binkp', descrition: 'Binkley TCP/IP Fidonet 邮寄程序守护进程'},
        {port: '27374', name: 'asp', descrition: '地址搜索协议'},
        {port: '60177', name: 'tfido', descrition: 'Ifmail FidoNet 兼容邮寄服务'},
        {port: '60179', name: 'fido', descrition: 'FidoNet 电子邮件和新闻网络'}
    ];

    $(document).ready(function () {
        $('#commonPort').populateGrid({
            headers: [
                {header: '端口号码 / 层', name: 'port'},
                {header: '名称', name: 'name'},
                {header: '描述', name: 'descrition'}
            ]
        }, commonPortData);

        $('#unixPort').populateGrid({
            headers: [
                {header: '端口号码 / 层', name: 'port'},
                {header: '名称', name: 'name'},
                {header: '描述', name: 'descrition'}
            ]
        }, unixPortData);

        $('#registerPort').populateGrid({
            headers: [
                {header: '端口号码 / 层', name: 'port'},
                {header: '名称', name: 'name'},
                {header: '描述', name: 'descrition'}
            ]
        }, registerPortData);

        $('#datagramPort').populateGrid({
            headers: [
                {header: '端口号码 / 层', name: 'port'},
                {header: '名称', name: 'name'},
                {header: '描述', name: 'descrition'}
            ]
        }, datagramPortData);

        $('#kerberosPort').populateGrid({
            headers: [
                {header: '端口号码 / 层', name: 'port'},
                {header: '名称', name: 'name'},
                {header: '描述', name: 'descrition'}
            ]
        }, kerberosPortData);

        $('#unregisterPort').populateGrid({
            headers: [
                {header: '端口号码 / 层', name: 'port'},
                {header: '名称', name: 'name'},
                {header: '描述', name: 'descrition'}
            ]
        }, unregisterPortData);
    });
})(jQuery);