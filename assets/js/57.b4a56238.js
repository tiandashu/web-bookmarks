(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{263:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"httpserver-nginx安装-withssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#httpserver-nginx安装-withssl","aria-hidden":"true"}},[t._v("#")]),t._v(" HttpServer Nginx安装 withSSL")]),t._v(" "),n("p",[t._v("备注：")]),t._v(" "),n("p",[t._v("1、Nginx统一安装1.10.2版本")]),t._v(" "),n("p",[t._v("2、安装的 openssl 版本若是 1.0.1—1.0.1f / 1.0.2 Beta1（可通过 openssl version 查看），而且如果还未修复心血漏洞的话（CentOS 可以通过 rpm -q --changelog openssl-1.0.1e | grep CVE-2014-0160 查看是否有输出，有输出则表示已修复），则需重新手动安装，否则会有心血漏洞的隐患。可参照 这篇文章下方的操作步骤 编译安装。")]),t._v(" "),n("p",[t._v("1.安装编译工具及库文件")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("（CentOS）\nyum -y "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" zlib zlib-devel gcc-c++ libtool  openssl openssl-devel\n\n（Ubuntu）\n"),n("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" zlib1g zlib1g-dev build-essential libtool openssl libssl-dev\n\n")])])]),n("p",[t._v("2.安装PCRE")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /data/software\n"),n("span",{attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz\n"),n("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf pcre-8.35.tar.gz\n\n"),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" pcre-8.35\n./configure\n"),n("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n\npcre-config --version\n")])])]),n("p",[t._v("3.安装Nginx")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O /data/software/nginx-1.10.2.tar.gz http://nginx.org/download/nginx-1.10.2.tar.gz\n"),n("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf /data/software/nginx-1.10.2.tar.gz\n"),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /data/software/nginx-1.10.2\n\n./configure --prefix"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/apps/nginx-main \\\n    --pid-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/logs/nginx-main/nginx.pid \\\n    --lock-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/apps/nginx-main/nginx.lock \\\n    --error-log-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/logs/nginx-main/error.log \\\n    --http-log-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/logs/nginx-main/access.log \\\n    --http-client-body-temp-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/temps/nginx-main/client_body_temp \\\n    --http-proxy-temp-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/temps/nginx-main/proxy_temp \\\n    --http-fastcgi-temp-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/temps/nginx-main/fastcgi_temp \\\n    --http-uwsgi-temp-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/temps/nginx-main/uwsgi_temp \\\n    --http-scgi-temp-path"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/temps/nginx-main/scgi_temp \\\n    --with-http_stub_status_module \\\n    --with-http_ssl_module \\\n    --with-http_realip_module \\\n    --with-pcre"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/data/software/pcre-8.35\n\n"),n("span",{attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="linux-install-nginx.md";a.default=e.exports}}]);