"use strict";(self.webpackChunk_vaultera_webapp=self.webpackChunk_vaultera_webapp||[]).push([[6802],{"./stories/common/UpdateNotification/UpdateNotification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UpdateNotification_stories});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),UpdateNotification_module=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/UpdatesNotification/UpdateNotification.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UpdateNotification_module.A,options);const UpdatesNotification_UpdateNotification_module=UpdateNotification_module.A&&UpdateNotification_module.A.locals?UpdateNotification_module.A.locals:void 0;var vi=__webpack_require__("../../packages/vaultera-ui-icons/src/vi/index.tsx"),WalletAddressHash=__webpack_require__("./components/common/WalletAddressHash/WalletAddressHash.tsx"),AnimatedProgressBar=__webpack_require__("./components/common/AnimatedProgressBar/AnimatedProgressBar.tsx");const UpdateNotification=({message,description,walletAddress,onClose})=>{const[progress,setProgress]=react.useState(70);return(0,react.useEffect)((()=>{setProgress(70)}),[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:UpdatesNotification_UpdateNotification_module.containerUpdateNotification,children:[(0,jsx_runtime.jsxs)("div",{className:UpdatesNotification_UpdateNotification_module.containerUpdateNotificationInner,children:[(0,jsx_runtime.jsxs)("div",{className:UpdatesNotification_UpdateNotification_module.frameParent,children:[(0,jsx_runtime.jsxs)("div",{className:UpdatesNotification_UpdateNotification_module.transactionSubmittedParent,children:[(0,jsx_runtime.jsx)("div",{className:UpdatesNotification_UpdateNotification_module.transactionSubmitted,children:message}),(0,jsx_runtime.jsx)("div",{className:UpdatesNotification_UpdateNotification_module.utIpsamCulpa,children:description})]}),(0,jsx_runtime.jsx)("div",{className:UpdatesNotification_UpdateNotification_module.walletAddress,children:(0,jsx_runtime.jsx)(WalletAddressHash.A,{walletAddress})})]}),0===progress&&(0,jsx_runtime.jsx)("div",{className:UpdatesNotification_UpdateNotification_module.icons,children:(0,jsx_runtime.jsx)(vi.FB,{width:24,height:24,onClick:onClose})})]}),progress>0&&(0,jsx_runtime.jsx)("div",{className:UpdatesNotification_UpdateNotification_module.rectangleParent,children:(0,jsx_runtime.jsx)(AnimatedProgressBar.A,{progress,height:"4px"})})]})})},UpdatesNotification_UpdateNotification=UpdateNotification;UpdateNotification.__docgenInfo={description:"",methods:[],displayName:"UpdateNotification",props:{message:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},walletAddress:{required:!0,tsType:{name:"string"},description:""}}};var console=__webpack_require__("../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const UpdateNotification_stories={title:"Common/UpdateNotification",component:UpdatesNotification_UpdateNotification,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{message:"Transaction Submitted",description:"Ut ipsam culpa laborum reprehenderit nihil.",walletAddress:"0x85cEd334...b857",onClose:()=>{console.log("onClose"),alert("onClose!")}}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    message: `Transaction Submitted`,\n    description: `Ut ipsam culpa laborum reprehenderit nihil.`,\n    walletAddress: `0x85cEd334...b857`,\n    // Commented out because these props are not valid for the update notification\n    // onCopy: () => {\n    //   console.log('onCopied');\n    //   alert('onCopied!');\n    // },\n    // onShare: () => {\n    //   console.log('onShare');\n    //   alert('onShare!');\n    // },\n    onClose: () => {\n      console.log(\"onClose\");\n      alert(\"onClose!\");\n    }\n  }\n}",...Default.parameters?.docs?.source}}}},"./components/common/AnimatedProgressBar/AnimatedProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AnimatedProgressBar_AnimatedProgressBar});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AnimatedProgressBar_module=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/AnimatedProgressBar/AnimatedProgressBar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AnimatedProgressBar_module.A,options);const AnimatedProgressBar_AnimatedProgressBar_module=AnimatedProgressBar_module.A&&AnimatedProgressBar_module.A.locals?AnimatedProgressBar_module.A.locals:void 0,AnimatedProgressBar=({progress,height="20px",backgroundColor="#252424",barColor="#C3F84D",borderRadius="5px",className})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{className:`${AnimatedProgressBar_AnimatedProgressBar_module.progressBarContainer} ${className}`,style:{height,backgroundColor,borderRadius},children:(0,jsx_runtime.jsx)("div",{className:AnimatedProgressBar_AnimatedProgressBar_module.progress,style:{width:`${progress}%`,backgroundColor:barColor,height:"100%",borderRadius}})})}),AnimatedProgressBar_AnimatedProgressBar=AnimatedProgressBar;AnimatedProgressBar.__docgenInfo={description:"",methods:[],displayName:"AnimatedProgressBar",props:{className:{required:!1,tsType:{name:"string"},description:""},progress:{required:!0,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'20px'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#252424'",computed:!1}},barColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#C3F84D'",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'5px'",computed:!1}}}}},"./components/common/WalletAddressHash/WalletAddressHash.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>WalletAddressHash_WalletAddressHash});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),WalletAddressHash_module=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/WalletAddressHash/WalletAddressHash.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(WalletAddressHash_module.A,options);const WalletAddressHash_WalletAddressHash_module=WalletAddressHash_module.A&&WalletAddressHash_module.A.locals?WalletAddressHash_module.A.locals:void 0;var vi=__webpack_require__("../../packages/vaultera-ui-icons/src/vi/index.tsx"),clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");const WalletAddressHash=({label,walletAddress})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:WalletAddressHash_WalletAddressHash_module.txnHashParent,children:[label&&(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(WalletAddressHash_WalletAddressHash_module.txnHash,WalletAddressHash_WalletAddressHash_module.txnHashColor),children:label}),(0,jsx_runtime.jsxs)("div",{className:WalletAddressHash_WalletAddressHash_module.walletAddress,children:[(0,jsx_runtime.jsx)("div",{className:WalletAddressHash_WalletAddressHash_module.txnHash,children:walletAddress}),(0,jsx_runtime.jsxs)("div",{className:WalletAddressHash_WalletAddressHash_module.iconsParent,children:[(0,jsx_runtime.jsx)("div",{className:WalletAddressHash_WalletAddressHash_module.icons,onClick:()=>{alert("Copied")},children:(0,jsx_runtime.jsx)(vi.QR,{width:18,height:18,color:"#C3F84D"})}),(0,jsx_runtime.jsx)("div",{className:WalletAddressHash_WalletAddressHash_module.icons,onClick:()=>{alert("OpenLink")},children:(0,jsx_runtime.jsx)(vi.bX,{width:18,height:18,stroke:"#C3F84D"})})]})]})]})}),WalletAddressHash_WalletAddressHash=WalletAddressHash;WalletAddressHash.__docgenInfo={description:"",methods:[],displayName:"WalletAddressHash",props:{label:{required:!1,tsType:{name:"string"},description:""},walletAddress:{required:!0,tsType:{name:"string"},description:""}}}},"../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/AnimatedProgressBar/AnimatedProgressBar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AnimatedProgressBar_progressBarContainer__0mgeh{position:relative;width:400px;overflow:hidden}.AnimatedProgressBar_progress__mH2Tt{transition:width .6s ease-in-out;position:relative}","",{version:3,sources:["webpack://./components/common/AnimatedProgressBar/AnimatedProgressBar.module.scss"],names:[],mappings:"AACA,iDACI,iBAAA,CACA,WAAA,CACA,eAAA,CAGJ,qCACI,gCAAA,CACA,iBAAA",sourcesContent:["// AnimatedProgressBar.module.scss\n.progressBarContainer {\n    position: relative;\n    width: 400px;\n    overflow: hidden;\n}\n\n.progress {\n    transition: width 0.6s ease-in-out; // Smooth animation for progress\n    position: relative;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={progressBarContainer:"AnimatedProgressBar_progressBarContainer__0mgeh",progress:"AnimatedProgressBar_progress__mH2Tt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/UpdatesNotification/UpdateNotification.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UpdateNotification_transactionSubmitted__gpI1I{align-self:stretch;position:relative;font-weight:600}.UpdateNotification_utIpsamCulpa__yOwoU{align-self:stretch;position:relative;font-size:16px;line-height:24px;color:#d3d3d3}.UpdateNotification_transactionSubmittedParent__UVMyQ{align-self:stretch;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:8px}.UpdateNotification_x85ced334b857__fJ2c3{position:relative;line-height:20px}.UpdateNotification_icons__J5iXP{width:18px;position:relative;height:18px;overflow:hidden;flex-shrink:0;cursor:pointer}.UpdateNotification_iconsParent__VRxsx{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px}.UpdateNotification_walletAddress__LWGKz{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;font-size:15px}.UpdateNotification_frameParent__PKKuK{flex:1;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:20px}.UpdateNotification_containerUpdateNotificationInner__gTcXa{align-self:stretch;border-radius:8px 8px 0px 0px;background-color:#171616;display:flex;flex-direction:row;align-items:flex-start;justify-content:flex-end;padding:24px}.UpdateNotification_groupChild__zL6ds{position:absolute;top:0px;left:0px;border-radius:0px 0px 8px 8px;background-color:#252424;width:400px;height:4px}.UpdateNotification_groupItem__I9Hl9{position:absolute;top:0px;left:0px;border-radius:0px 32px 32px 8px;background-color:#c3f84d;width:199.4px;height:4px}.UpdateNotification_rectangleParent__2AA2n{align-self:stretch;position:relative;border-radius:8px;bottom:0px;overflow:hidden}.UpdateNotification_containerUpdateNotification__8JOzC{width:400px;position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;text-align:left;font-size:20px;color:#fff;font-family:var(--font-inter);border-radius:8px;overflow:hidden}","",{version:3,sources:["webpack://./components/common/UpdatesNotification/UpdateNotification.module.scss"],names:[],mappings:"AAAA,gDACI,kBAAA,CACA,iBAAA,CACA,eAAA,CAEJ,wCACI,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CAEJ,sDACI,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,0BAAA,CACA,OAAA,CAEJ,yCACI,iBAAA,CACA,gBAAA,CAEJ,iCACI,UAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CACA,aAAA,CACA,cAAA,CAEJ,uCACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,OAAA,CAEJ,yCACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,OAAA,CACA,cAAA,CAEJ,uCACI,MAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,0BAAA,CACA,QAAA,CAEJ,4DACI,kBAAA,CACA,6BAAA,CACA,wBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBAAA,CACA,YAAA,CAEJ,sCACI,iBAAA,CACA,OAAA,CACA,QAAA,CACA,6BAAA,CACA,wBAAA,CACA,WAAA,CACA,UAAA,CAEJ,qCACI,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,wBAAA,CACA,aAAA,CACA,UAAA,CAEJ,2CACI,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,UAAA,CACA,eAAA,CAEJ,uDACI,WAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,0BAAA,CACA,eAAA,CACA,cAAA,CACA,UAAA,CACA,6BAAA,CACA,iBAAA,CACA,eAAA",sourcesContent:[".transactionSubmitted {\n    align-self: stretch;\n    position: relative;\n    font-weight: 600;\n}\n.utIpsamCulpa {\n    align-self: stretch;\n    position: relative;\n    font-size: 16px;\n    line-height: 24px;\n    color: #d3d3d3;\n}\n.transactionSubmittedParent {\n    align-self: stretch;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 8px;\n}\n.x85ced334b857 {\n    position: relative;\n    line-height: 20px;\n}\n.icons {\n    width: 18px;\n    position: relative;\n    height: 18px;\n    overflow: hidden;\n    flex-shrink: 0;\n    cursor: pointer;\n}\n.iconsParent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 8px;\n}\n.walletAddress {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 8px;\n    font-size: 15px;\n}\n.frameParent {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 20px;\n}\n.containerUpdateNotificationInner {\n    align-self: stretch;\n    border-radius: 8px 8px 0px 0px;\n    background-color: #171616;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-end;\n    padding: 24px;\n}\n.groupChild {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    border-radius: 0px 0px 8px 8px;\n    background-color: #252424;\n    width: 400px;\n    height: 4px;\n}\n.groupItem {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    border-radius: 0px 32px 32px 8px;\n    background-color: #c3f84d;\n    width: 199.4px;\n    height: 4px;\n}\n.rectangleParent {\n    align-self: stretch;\n    position: relative;\n    border-radius: 8px;\n    bottom: 0px;\n    overflow: hidden;\n}\n.containerUpdateNotification {\n    width: 400px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    text-align: left;\n    font-size: 20px;\n    color: #fff;\n    font-family: var(--font-inter);\n    border-radius: 8px;\n    overflow: hidden;\n\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={transactionSubmitted:"UpdateNotification_transactionSubmitted__gpI1I",utIpsamCulpa:"UpdateNotification_utIpsamCulpa__yOwoU",transactionSubmittedParent:"UpdateNotification_transactionSubmittedParent__UVMyQ",x85ced334b857:"UpdateNotification_x85ced334b857__fJ2c3",icons:"UpdateNotification_icons__J5iXP",iconsParent:"UpdateNotification_iconsParent__VRxsx",walletAddress:"UpdateNotification_walletAddress__LWGKz",frameParent:"UpdateNotification_frameParent__PKKuK",containerUpdateNotificationInner:"UpdateNotification_containerUpdateNotificationInner__gTcXa",groupChild:"UpdateNotification_groupChild__zL6ds",groupItem:"UpdateNotification_groupItem__I9Hl9",rectangleParent:"UpdateNotification_rectangleParent__2AA2n",containerUpdateNotification:"UpdateNotification_containerUpdateNotification__8JOzC"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/WalletAddressHash/WalletAddressHash.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".WalletAddressHash_txnHash__esneI{position:relative;font-size:15px;line-height:24px;color:#fff;text-align:left;font-family:var(--font-inter);font-weight:400;font-style:normal}.WalletAddressHash_txnHashColor__Dyw_7{color:#929292}.WalletAddressHash_icons__bvxNq{width:18px;position:relative;height:18px;overflow:hidden;flex-shrink:0;cursor:pointer}.WalletAddressHash_iconsParent__t8Dfo{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px}.WalletAddressHash_walletAddress__2IL9m{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;text-align:left;color:#fff}.WalletAddressHash_txnHashParent__9LMPV{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px;font-size:16px;color:#929292}","",{version:3,sources:["webpack://./components/common/WalletAddressHash/WalletAddressHash.module.scss"],names:[],mappings:"AAAA,kCACI,iBAAA,CACA,cAAA,CACA,gBAAA,CAEA,UAAA,CACA,eAAA,CACA,6BAAA,CACA,eAAA,CACA,iBAAA,CAGJ,uCACI,aAAA,CAEJ,gCACI,UAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CACA,aAAA,CACA,cAAA,CAEJ,sCACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,OAAA,CAEJ,wCACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,OAAA,CACA,eAAA,CACA,UAAA,CAEJ,wCACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CACA,cAAA,CACA,aAAA",sourcesContent:[".txnHash {\n    position: relative;\n    font-size: 15px;\n    line-height: 24px;\n    font-family: var(--font-inter);\n    color: #fff;\n    text-align: left;\n    font-family: var(--font-inter);\n    font-weight: 400;\n    font-style: normal;\n\n}\n.txnHashColor {\n    color: #929292;\n}\n.icons {\n    width: 18px;\n    position: relative;\n    height: 18px;\n    overflow: hidden;\n    flex-shrink: 0;\n    cursor: pointer;\n}\n.iconsParent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 8px;\n}\n.walletAddress {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 8px;\n    text-align: left;\n    color: #fff;\n}\n.txnHashParent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    font-size: 16px;\n    color: #929292;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={txnHash:"WalletAddressHash_txnHash__esneI",txnHashColor:"WalletAddressHash_txnHashColor__Dyw_7",icons:"WalletAddressHash_icons__bvxNq",iconsParent:"WalletAddressHash_iconsParent__t8Dfo",walletAddress:"WalletAddressHash_walletAddress__2IL9m",txnHashParent:"WalletAddressHash_txnHashParent__9LMPV"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);