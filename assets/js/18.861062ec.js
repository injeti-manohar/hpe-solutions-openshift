(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{384:function(e,t,r){"use strict";r.r(t);var o=r(28),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"physical-node-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#physical-node-configuration"}},[e._v("#")]),e._v(" Physical node configuration")]),e._v(" "),r("p",[e._v("This section describes the configuration of the bare metal compute modules and is separated into sections that disseminate universal configuration parameters, pointers exclusively for virtualized nodes, and options used exclusively for bare metal nodes. The required configuration steps are outlined. These may be in the form of UI instruction pointers to code, or command line options. Use the CLI options or UI instruction pointers accordingly to reach the desired end state.")]),e._v(" "),r("h2",{attrs:{id:"red-hat-openshift-master-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-master-nodes"}},[e._v("#")]),e._v(" Red Hat OpenShift master nodes")]),e._v(" "),r("p",[e._v("Refer to the "),r("RouterLink",{attrs:{to:"/Physical environment configuration/Physical-environment-configuration.html#server-profiles"}},[e._v("Server profile")]),e._v(" section in this document to create a server profile for the bare metal master nodes.")],1),e._v(" "),r("p",[e._v("After the server profile is successfully created and attached to a compute module, refer to the following steps to install the operating system on the bootstrap node and the master nodes.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Ensure that the location of ignition files of the corresponding nodes is updated in the PXE configuration files.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure the MAC address of the network adapter in each server profile is updated with the corresponding IP address in the DHCP configuration file.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure that the load balancer server is up and running.")])]),e._v(" "),r("li",[r("p",[e._v("From the "),r("strong",[e._v("HPE OneView")]),e._v(" interface, navigate to "),r("strong",[e._v("Server Profiles")]),e._v(" and select the appropriate server profile for the corresponding nodes. Select "),r("strong",[e._v("Actions")]),e._v(" > "),r("strong",[e._v("Launch Console")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Select the OS label.")])]),e._v(" "),r("li",[r("p",[e._v("Wait until the master node is booted.")])]),e._v(" "),r("li",[r("p",[e._v("Use the following command to verify the installation by logging on to the node from the installer VM.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" core@"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" replace_with_node_fqdn_or_ip "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("To utilize virtual machines as the OpenShift master nodes, refer to the "),r("RouterLink",{attrs:{to:"/Virtual node configuration/Virtual-node-configuration.html"}},[e._v("Virtual node configuration")]),e._v(" section and "),r("RouterLink",{attrs:{to:"/Virtual node configuration/Virtual-node-configuration.html#deploying-virtual-master-nodes"}},[e._v("Deploying virtual master nodes")]),e._v(" section in this document.")],1)]),e._v(" "),r("h2",{attrs:{id:"red-hat-openshift-worker-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-worker-nodes"}},[e._v("#")]),e._v(" Red Hat OpenShift worker nodes")]),e._v(" "),r("p",[e._v("Worker nodes for OpenShift 4 can run either RHCOS or RHEL 7.6. This section outlines the steps required to create worker nodes with either OS.")]),e._v(" "),r("h3",{attrs:{id:"red-hat-openshift-worker-nodes-with-rhcos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-worker-nodes-with-rhcos"}},[e._v("#")]),e._v(" Red Hat OpenShift worker nodes with RHCOS")]),e._v(" "),r("p",[e._v("Refer the "),r("RouterLink",{attrs:{to:"/Physical environment configuration/Physical-environment-configuration.html#server-profiles"}},[e._v("Server profile")]),e._v(" section in this document to create the server profile for the worker nodes before proceeding with the subsequent section.")],1),e._v(" "),r("p",[e._v("After the server profile is successfully created and attached to a compute module, refer to the following steps to install the operating system on the worker nodes.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Ensure that the location of ignition files of the corresponding nodes is updated in the PXE configuration files.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure the MAC address of the network adapter in each server profile is updated with the corresponding IP address in the DHCP configuration file.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure that the load balancer server is up and running.")])]),e._v(" "),r("li",[r("p",[e._v("From the "),r("strong",[e._v("HPE OneView")]),e._v(" interface, navigate to "),r("strong",[e._v("Server Profiles")]),e._v(" and select the appropriate server profile for the corresponding nodes. Select "),r("strong",[e._v("Actions")]),e._v(" > "),r("strong",[e._v("Launch Console")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Select the OS label.")])]),e._v(" "),r("li",[r("p",[e._v("Wait until the worker nodes are booted.")])]),e._v(" "),r("li",[r("p",[e._v("Use the following command to verify the installation by logging on to the node from the installer VM.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" core@"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" replace_with_node_fqdn_or_ip "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),r("p",[e._v("After the RHCOS worker nodes are up and running, refer the "),r("RouterLink",{attrs:{to:"/Red Hat OpenShift Container Platform deployment/Red-Hat-OpenShift-Container-Platform-deployment.html"}},[e._v("Red Hat OpenShift Container Platform deployment")]),e._v(" section to create the OpenShift 4 cluster.")],1),e._v(" "),r("h3",{attrs:{id:"red-hat-openshift-worker-nodes-with-rhel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#red-hat-openshift-worker-nodes-with-rhel"}},[e._v("#")]),e._v(" Red Hat OpenShift worker nodes with RHEL")]),e._v(" "),r("p",[e._v("Refer the "),r("RouterLink",{attrs:{to:"/Physical environment configuration/Physical-environment-configuration.html#server-profiles"}},[e._v("Server profile")]),e._v(" section in this document to create the server profile for the worker nodes before proceeding with the subsequent section.")],1),e._v(" "),r("p",[e._v("After the server profile is successfully created and attached to a compute module, refer to the following steps to install the operating system on the worker nodes.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Ensure that the location of ignition files of the corresponding nodes is updated in the PXE configuration files.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure the MAC address of the network adapter in each server profile is updated with the corresponding IP address in the DHCP configuration file.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure that the load balancer server is up and running.")])]),e._v(" "),r("li",[r("p",[e._v("From the "),r("strong",[e._v("HPE OneView")]),e._v(" interface, navigate to "),r("strong",[e._v("Server Profiles")]),e._v(" and select the appropriate Server Profile for the corresponding nodes. Select "),r("strong",[e._v("Actions")]),e._v(" > "),r("strong",[e._v("Launch Console")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Select the RHEL OS.")])]),e._v(" "),r("li",[r("p",[e._v("Wait until the worker nodes are booted.")])]),e._v(" "),r("li",[r("p",[e._v("Verify the installation by logging on to the node from the installer VM using the following command.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" root@"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" replace_with_node_fqdn_or_ip "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])]),e._v(" "),r("h4",{attrs:{id:"preparing-worker-nodes-with-rhel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preparing-worker-nodes-with-rhel"}},[e._v("#")]),e._v(" Preparing worker nodes with RHEL")]),e._v(" "),r("p",[e._v("After the RHEL operating system is installed on the worker nodes, perform the following steps on that node:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Login to the RHEL host, register and attach the host pool with Red Hat by running the following command.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager register\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Execute the following command to list the available subscriptions.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager list --available --matches "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'*OpenShift*'")]),e._v(" \n")])])])]),e._v(" "),r("li",[r("p",[e._v("In the output for the command in step 2, find the pool ID for Red Hat OpenShift Container Platform subscription and attach it.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager attach --pool"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("pool_id"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" \n")])])])]),e._v(" "),r("li",[r("p",[e._v("Disable all repositories and enable only the repositories required by Red Hat OpenShift Container Platform 4.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" yum-config-manager --disable * \n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subscription-manager repos --disable"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),e._v("\n\n   --enable"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rhel-7-server-rpms"')]),e._v(" \n\n   --enable"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rhel-7-server-extras-rpms"')]),e._v(" \n\n   --enable"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rhel-7-server-ose-4.3-rpms"')]),e._v("\n")])])])])]),e._v(" "),r("p",[e._v("After the RHEL 7.6 nodes are ready, refer to the "),r("RouterLink",{attrs:{to:"/Red Hat OpenShift Container Platform deployment/Red-Hat-OpenShift-Container-Platform-deployment.html#adding-rhel-7-6-worker-nodes"}},[e._v("Adding RHEL 7.6 worker nodes")]),e._v(" section in this document to add them to the OpenShift 4 cluster.")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);