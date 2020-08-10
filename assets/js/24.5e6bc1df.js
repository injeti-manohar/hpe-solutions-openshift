(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{391:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"validating-openshift-container-platform-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validating-openshift-container-platform-deployment"}},[t._v("#")]),t._v(" Validating OpenShift Container Platform deployment")]),t._v(" "),a("p",[t._v("After the cluster is up and running with OpenShift Local Storage Operator, the cluster configuration is validated by deploying a MongoDB pod with persistent volume and Yahoo Cloud Service Benchmarking (YCSB). This section covers the steps to validate the OpenShift Container Platform deployment.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Prerequisites")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("OCP 4 cluster must be installed.")])]),t._v(" "),a("li",[a("p",[t._v("Use local storage or OCS to claim persistent volume (PV).")])]),t._v(" "),a("li",[a("p",[t._v("MongoDB instance will only support local file system storage or OCS file system.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Block storage is not supported.")])]),t._v(" "),a("h2",{attrs:{id:"deploying-mongodb-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-mongodb-application"}},[t._v("#")]),t._v(" Deploying MongoDB application")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Login to the installer VM as a non-root user.")])]),t._v(" "),a("li",[a("p",[t._v("Use the following command to download the Red Hat scripts specific to the MongoDB application at "),a("a",{attrs:{href:"https://github.com/red-hat-storage/SAWORF",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/red-hat-storage/SAWORF"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com/red-hat-storage/SAWORF.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n")])])])]),t._v(" "),a("li",[a("p",[t._v("From within the red-hat-storage repository, navigate to the folder SAWORF/OCS3/MongoDB/blog2.")])]),t._v(" "),a("li",[a("p",[t._v("Update the "),a("em",[t._v("create_and_load.sh")]),t._v(" script with "),a("strong",[t._v("local storage")]),t._v(", "),a("strong",[t._v("OCS ,")]),t._v(" "),a("strong",[t._v("Nimble storage,")]),t._v(" and "),a("strong",[t._v("3PAR storage")]),t._v(" in place of "),a("strong",[t._v("glusterfs")]),t._v(" content. Example is as follows.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("mongodb_ip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$(")]),t._v("oc get svc -n "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${PROJECT_NAME}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v **local storage** "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" mongodb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v("}'")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Create MongoDB and YCSB pods and load the sample data. Update the following command with appropriate values for the command line parameters and execute the command to create the MongoDB and YCSB pods and also to load the sample data.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./create_and_load_mongodb "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROJECT_NAME")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OCP_TEMPLATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MONGODB_MEMORY_LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PV_SIZE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MONGODB_VERSION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_WORKLOAD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_DISTRIBUTION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_RECORDCOUNT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_OPERATIONCOUNT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$YCSB_THREADS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$LOG_DIR")]),t._v("\n")])])]),a("p",[t._v("Example command is shown as follows.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./create_and_load_mongodb dbtest mongodb-persistent 4Gi 10Gi "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),t._v(" workloadb uniform "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" root /mnt/data/\n")])])]),a("p",[t._v("The output is as follows.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(' > Deploying template "openshift/mongodb-persistent" to project dbtest\n\n    MongoDB\n\n---------\n\n> MongoDB database service, with persistent storage. For more information about using this template, including OpenShift considerations, see documentation in the upstream repository: <https://github.com/sclorg/mongodb-container>.   \n\nThe following service(s) have been created in the project: mongodb.\n\nUsername: redhat\n\nPassword: redhat\n\nDatabase Name: redhatdb\n\nConnection URL: mongodb://redhat:redhat@mongodb/redhatdb\n\nFor more information about using this template, including OpenShift considerations, see documentation in the upstream repository: <https://github.com/sclorg/mongodb-container>.\n\nWith parameters:\n\n        * Memory Limit=4Gi\n\n        * Namespace=openshift\n\n        * Database Service Name=mongodb\n\n        * MongoDB Connection Username=redhat\n\n        * MongoDB Connection Password=redhat\n\n        * MongoDB Database Name=redhatdb\n\n        * MongoDB Admin Password=redhat\n\n        * Volume Capacity=10Gi\n\n        * Version of MongoDB Image=3.6\n\n> Creating resources ...\n\n    secret "mongodb" created\n\n    service "mongodb" created\n\n    error: persistentvolumeclaims "mongodb" already exists\n\n    deploymentconfig.apps.openshift.io "mongodb" created\n\n> Failed\n\npod/ycsb-pod created\n')])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("    Scaling to more than one replica is not supported. You must have persistent volume available in your cluster to use this template.\n")])])])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("Execute the following command to run the check_db_size script.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./check_db_size "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PROJECT_NAME")]),t._v("\n")])])]),a("p",[t._v("The output is as follows.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('MongoDB shell version v3.6.12\n\nconnecting to: mongodb://172.x.x.x:27017/redhatdb?gssapiServiceName=mongodb\n\nImplicit session: session {"id" : UUID("c0a76ddc-ea0b-4fc-88fd-045d0f98b2") }\n\nMongoDB server version: 3.6.3\n\n{\n\n              "db" : "redhatdb",\n\n              "collections" : 1,\n\n              "views" : 0,\n\n              "objects" : 4000,\n\n              "avgObjSize" : 1167.877,\n\n              "dataSize" : 0.004350680857896805,\n\n              "storageSize" : 0.00446319580078125,\n\n              "numExtents" : 0,\n\n              "indexes" : 1,\n\n              "indexSize" : 0.0001068115234375,\n\n              "fsUsedSize" : 1.0311393737792969,\n\n              "fsTotalSize" : 99.951171875,\n\n              "ok" : 1\n\n}\n')])])])])]),t._v(" "),a("h2",{attrs:{id:"verifying-mongodb-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-mongodb-deployment"}},[t._v("#")]),t._v(" Verifying MongoDB deployment")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Execute the following command to verify the persistent volume associated with MongoDB pods.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ oc get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pv")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" mongodb\n")])])]),a("p",[t._v("The output is as follows.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("local-pv-e7f10f65 100Gi RWO Delete Bound dbtest/mongodb local-sc 26h\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Execute the following command to verify the persistent volume claim (PVC) associated with MongoDB pods.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ oc get pvc \n")])])]),a("p",[t._v("The output is as follows.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("local-pv-e7f10f65 100Gi RWO Delete Bound dbtest/mongodb local-sc 26h\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Execute the following command to ensure MongoDB and YCSB pods are up and running.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ oc get pod\n")])])]),a("p",[t._v("The output is as follows.")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  NAME               READY   STATUS      RESTARTS   AGE\n  \n  mongodb-1-deploy   0/1     Completed   0          3m40s\n  \n  mongodb-1-skbwq    1/1     Running     0          3m36s\n  \n  ycsb-pod           1/1     Running     0          3m41s\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For more information about deploying MongoDB application along with YCSB, refer to the Red Hat documentation at "),a("a",{attrs:{href:"https://www.redhat.com/en/blog/multitenant-deployment-mongodb-using-openshift-container-storage-and-using-ycsb-test-performance",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.redhat.com/en/blog/multitenant-deployment-mongodb-using-openshift-container-storage-and-using-ycsb-test-performance"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports}}]);