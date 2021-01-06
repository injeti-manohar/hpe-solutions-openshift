(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{310:function(t,e,a){t.exports=a.p+"assets/img/figure22.2cd2f198.png"},483:function(t,e,a){"use strict";a.r(e);var r=a(42),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"user-provisioned-dns-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#user-provisioned-dns-requirements"}},[t._v("#")]),t._v(" User-provisioned DNS requirements")]),t._v(" "),r("p",[t._v("This section covers the host entries that need to be made in the base domain to enable installation of Red Hat OpenShift Container Platform 4.4.")]),t._v(" "),r("p",[t._v("Red Hat OpenShift Container Platform 4.4 uses three types of DNS records (A, CNAME, and SRV). The host names and their types are described in Table 7.")]),t._v(" "),r("p",[r("strong",[t._v("Table 7.")]),t._v(" DNS entries for Red Hat OpenShift Container Platform")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Hosts")]),t._v(" "),r("th",[t._v("DNS Record Types")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("master_nodes")]),t._v(" "),r("td",[t._v("A")])]),t._v(" "),r("tr",[r("td",[t._v("worker_nodes")]),t._v(" "),r("td",[t._v("A")])]),t._v(" "),r("tr",[r("td",[t._v("bootstrap_nodes")]),t._v(" "),r("td",[t._v("A")])]),t._v(" "),r("tr",[r("td",[t._v("installer VM")]),t._v(" "),r("td",[t._v("A")])]),t._v(" "),r("tr",[r("td",[t._v("*, api, api-int, haproxy")]),t._v(" "),r("td",[t._v("A")])]),t._v(" "),r("tr",[r("td",[t._v("Etcd")]),t._v(" "),r("td",[t._v("CNAME, SRV")])])])]),t._v(" "),r("p",[t._v("To add the appropriate records, follow these steps:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("'A' type resource record [ Host (A) ]. An A record specifies an IPv4 address. Example entries are shown in Table 8. Ensure that these entries are created for all the nodes in the installation environment.")]),t._v(" "),r("p",[r("strong",[t._v("Table 8.")]),t._v(" 'A' type DNS entry")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Host (A)")]),t._v(" "),r("th",[t._v("IP Address")]),t._v(" "),r("th",[t._v("Host name")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("master_nodes")]),t._v(" "),r("td",[t._v("master_ip")]),t._v(" "),r("td",[t._v("master_name.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("worker_nodes")]),t._v(" "),r("td",[t._v("worker_ip")]),t._v(" "),r("td",[t._v("worker_name.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("bootstrap_nodes")]),t._v(" "),r("td",[t._v("bootstrap_ip")]),t._v(" "),r("td",[t._v("bootstrap_name.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("installer VM")]),t._v(" "),r("td",[t._v("installer_ip")]),t._v(" "),r("td",[t._v("installer_name.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("*")]),t._v(" "),r("td",[t._v("haproxy_ip")]),t._v(" "),r("td",[t._v("*.apps.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("Api")]),t._v(" "),r("td",[t._v("haproxy_ip")]),t._v(" "),r("td",[t._v("api.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("api-int")]),t._v(" "),r("td",[t._v("haproxy_ip")]),t._v(" "),r("td",[t._v("api-int.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("haproxy")]),t._v(" "),r("td",[t._v("haproxy_ip")]),t._v(" "),r("td",[t._v("haproxy_name.cluster_name.baseDomain")])])])])]),t._v(" "),r("li",[r("p",[t._v("Create a CNAME resource record [ Alias (CNAME) ] in DNS. Example entries are shown in Table 9. Ensure that these entries are created for all of the master nodes.")]),t._v(" "),r("p",[r("strong",[t._v("Table 9.")]),t._v(" DNS entries for Red Hat OpenShift Container Platform")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Host (CNAME)")]),t._v(" "),r("th",[t._v("Target host name")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("etcd-0")]),t._v(" "),r("td",[t._v("*master01_name.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("etcd-1")]),t._v(" "),r("td",[t._v("*master02_name.cluster_name.baseDomain")])]),t._v(" "),r("tr",[r("td",[t._v("etcd-2")]),t._v(" "),r("td",[t._v("*master03_name.cluster_name.baseDomain")])])])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),r("p",[t._v("Replace the italicized components in the examples above with the actual values that align to the installation environment.")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[t._v("For each master node, Red Hat OpenShift Container Platform also requires a Service Location (SRV) DNS record for the etcd server on that machine with priority 0, weight 10, and port 2380. The SRV record is used to identify computers that host specific services.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(310),alt:""}})])])])])}),[],!1,null,null,null);e.default=_.exports}}]);