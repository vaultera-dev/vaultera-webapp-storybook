"use strict";(self.webpackChunk_vaultera_webapp=self.webpackChunk_vaultera_webapp||[]).push([[5177],{"./stories/dashboard/Breadcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoFormattedPath:()=>AutoFormattedPath,CustomSeparator:()=>CustomSeparator,Default:()=>Default,HomepageOnly:()=>HomepageOnly,LongNestedPath:()=>LongNestedPath,MixedTitlesAndFormatting:()=>MixedTitlesAndFormatting,WithCustomStyles:()=>WithCustomStyles,WithCustomTitles:()=>WithCustomTitles,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_common_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/common/Breadcrumb/Breadcrumb.tsx"),_vaultera_icons_vi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/vaultera-ui-icons/src/vi/index.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Dashboard/Breadcrumbs",component:_components_common_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A breadcrumb navigation component that supports default routes, custom routes, and automatic path formatting."}}},argTypes:{pathname:{description:"The current path (optional, defaults to current route)",control:"text"},routeTitles:{description:"Custom route titles that override default titles",control:"object"},separator:{description:"Custom separator between breadcrumb items",control:"object"},className:{description:"Additional CSS class for the nav element",control:"text"},itemClassName:{description:"Additional CSS class for list items",control:"text"},linkClassName:{description:"Additional CSS class for link elements",control:"text"},activeClassName:{description:"Additional CSS class for the active breadcrumb",control:"text"}}},customRouteTitles={"/dashboard":"Dashboard","/users":"Users","/products":"Products","/settings":"Settings","/profile":"Profile","/orders":"Orders","/customers":"Customers","/analytics":"Analytics","/reports":"Reports"},Default={args:{},parameters:{docs:{description:{story:"Default breadcrumb navigation using internal default titles"}}}},WithCustomTitles={args:{pathname:"/investments/exchange",routeTitles:customRouteTitles,separator:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vaultera_icons_vi__WEBPACK_IMPORTED_MODULE_2__.iv,{})},parameters:{docs:{description:{story:"Breadcrumbs with custom route titles overriding defaults"}}}},LongNestedPath={args:{pathname:"/investments/vaults/VE_Blue_Chips",routeTitles:customRouteTitles},parameters:{docs:{description:{story:"Demonstrates handling of deeply nested paths"}}}},AutoFormattedPath={args:{pathname:"/user-settings/notification-preferences/email-updates"},parameters:{docs:{description:{story:"Shows automatic formatting of path segments without explicit titles"}}}},MixedTitlesAndFormatting={args:{pathname:"/investments/custom-portfolio/user-settings",routeTitles:{"/investments":"Investment Portal","/investments/custom-portfolio":"My Portfolio"}},parameters:{docs:{description:{story:"Combines custom titles with auto-formatted segments"}}}},CustomSeparator={args:{pathname:"/investments/exchange",routeTitles:customRouteTitles,separator:" → "},parameters:{docs:{description:{story:"Demonstrates using a custom text separator instead of an icon"}}}},WithCustomStyles={args:{pathname:"/investments/exchange",routeTitles:customRouteTitles,className:"custom-nav-class",itemClassName:"custom-item-class",linkClassName:"custom-link-class",activeClassName:"custom-active-class"},parameters:{docs:{description:{story:"Shows usage with custom CSS classes for styling"}}}},HomepageOnly={args:{pathname:"/"},parameters:{docs:{description:{story:"Shows single breadcrumb for homepage"}}}},__namedExportsOrder=["Default","WithCustomTitles","LongNestedPath","AutoFormattedPath","MixedTitlesAndFormatting","CustomSeparator","WithCustomStyles","HomepageOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {},\n  parameters: {\n    docs: {\n      description: {\n        story: 'Default breadcrumb navigation using internal default titles'\n      }\n    }\n  }\n}",...Default.parameters?.docs?.source}}},WithCustomTitles.parameters={...WithCustomTitles.parameters,docs:{...WithCustomTitles.parameters?.docs,source:{originalSource:"{\n  args: {\n    pathname: \"/investments/exchange\",\n    routeTitles: customRouteTitles,\n    separator: <Chevronright />\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Breadcrumbs with custom route titles overriding defaults'\n      }\n    }\n  }\n}",...WithCustomTitles.parameters?.docs?.source}}},LongNestedPath.parameters={...LongNestedPath.parameters,docs:{...LongNestedPath.parameters?.docs,source:{originalSource:"{\n  args: {\n    pathname: \"/investments/vaults/VE_Blue_Chips\",\n    routeTitles: customRouteTitles\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Demonstrates handling of deeply nested paths'\n      }\n    }\n  }\n}",...LongNestedPath.parameters?.docs?.source}}},AutoFormattedPath.parameters={...AutoFormattedPath.parameters,docs:{...AutoFormattedPath.parameters?.docs,source:{originalSource:"{\n  args: {\n    pathname: \"/user-settings/notification-preferences/email-updates\"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Shows automatic formatting of path segments without explicit titles'\n      }\n    }\n  }\n}",...AutoFormattedPath.parameters?.docs?.source}}},MixedTitlesAndFormatting.parameters={...MixedTitlesAndFormatting.parameters,docs:{...MixedTitlesAndFormatting.parameters?.docs,source:{originalSource:'{\n  args: {\n    pathname: "/investments/custom-portfolio/user-settings",\n    routeTitles: {\n      "/investments": "Investment Portal",\n      "/investments/custom-portfolio": "My Portfolio"\n    }\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: \'Combines custom titles with auto-formatted segments\'\n      }\n    }\n  }\n}',...MixedTitlesAndFormatting.parameters?.docs?.source}}},CustomSeparator.parameters={...CustomSeparator.parameters,docs:{...CustomSeparator.parameters?.docs,source:{originalSource:'{\n  args: {\n    pathname: "/investments/exchange",\n    routeTitles: customRouteTitles,\n    separator: " → "\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: \'Demonstrates using a custom text separator instead of an icon\'\n      }\n    }\n  }\n}',...CustomSeparator.parameters?.docs?.source}}},WithCustomStyles.parameters={...WithCustomStyles.parameters,docs:{...WithCustomStyles.parameters?.docs,source:{originalSource:'{\n  args: {\n    pathname: "/investments/exchange",\n    routeTitles: customRouteTitles,\n    className: "custom-nav-class",\n    itemClassName: "custom-item-class",\n    linkClassName: "custom-link-class",\n    activeClassName: "custom-active-class"\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: \'Shows usage with custom CSS classes for styling\'\n      }\n    }\n  }\n}',...WithCustomStyles.parameters?.docs?.source}}},HomepageOnly.parameters={...HomepageOnly.parameters,docs:{...HomepageOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    pathname: '/'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Shows single breadcrumb for homepage'\n      }\n    }\n  }\n}",...HomepageOnly.parameters?.docs?.source}}}},"./components/common/Breadcrumb/Breadcrumb.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Breadcrumb});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.97.1_esbuild@0.24.2_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Breadcrumb_module=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/Breadcrumb/Breadcrumb.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Breadcrumb_module.A,options);const Breadcrumb_Breadcrumb_module=Breadcrumb_module.A&&Breadcrumb_module.A.locals?Breadcrumb_module.A.locals:void 0;var next_link=__webpack_require__("../../node_modules/.pnpm/next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),vi=__webpack_require__("../../packages/vaultera-ui-icons/src/vi/index.tsx"),navigation=__webpack_require__("../../node_modules/.pnpm/@storybook+nextjs@8.4.7_esbuild@0.24.2_next@15.1.0_@babel+core@7.26.0_react-dom@19.0.0_react@_xgwy4gikdjlknqsywe7aqpeg6u/node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs"),console=__webpack_require__("../../node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const defaultRouteTitles={"/investments":"Investment","/investments/exchange":"Trade Exchange","/investments/vaults":"Investment Vaults","/investments/vaults/VE_Blue_Chips":"VE Blue Chips"},formatPathSegment=segment=>segment.replace(/[-_]/g," ").split(" ").map((word=>word.charAt(0).toUpperCase()+word.slice(1))).join(" "),Breadcrumbs=({pathname:propPathname,routeTitles:propRouteTitles={},separator=(0,jsx_runtime.jsx)(vi.iv,{}),className="",itemClassName="",linkClassName="",activeClassName=""})=>{const routerPathname2=(0,navigation.usePathname)();console.log(routerPathname2);const strippedRouterPathname=(url=>{try{return new URL(url).pathname}catch(e){return url}})("https://app.vaultra.com/investments/vaults/VE_Blue_Chips"),pathname=propPathname||strippedRouterPathname,combinedRouteTitles=react.useMemo((()=>{const titles={...defaultRouteTitles};return Object.keys(defaultRouteTitles).forEach((path=>{if("/"!==path){const segments=path.split("/").filter(Boolean);segments.forEach(((_,index)=>{const partialPath="/"+segments.slice(0,index+1).join("/");titles[partialPath]||(titles[partialPath]=formatPathSegment(segments[index]))}))}})),{...titles,...propRouteTitles}}),[propRouteTitles]),breadcrumbItems=(()=>{const segments=pathname.split("/").filter(Boolean),items=[];return segments.forEach(((segment,index)=>{const currentPath="/"+segments.slice(0,index+1).join("/"),title=combinedRouteTitles[currentPath]||formatPathSegment(segment);items.push({path:currentPath,title,isLast:index===segments.length-1})})),items})();return(0,jsx_runtime.jsx)("nav",{className:`${Breadcrumb_Breadcrumb_module.Breadcrumbs} ${className}`,"aria-label":"breadcrumb",children:(0,jsx_runtime.jsx)("ul",{className:Breadcrumb_Breadcrumb_module.BreadcrumbsList,children:breadcrumbItems.map((item=>(0,jsx_runtime.jsx)("li",{className:`${Breadcrumb_Breadcrumb_module.BreadcrumbsItem} ${itemClassName} ${item.isLast?`${Breadcrumb_Breadcrumb_module.Active} ${activeClassName}`:""}`,"aria-current":item.isLast?"page":void 0,children:item.isLast?(0,jsx_runtime.jsx)("span",{className:`${Breadcrumb_Breadcrumb_module.Text} ${activeClassName}`,children:item.title}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(link_default(),{href:item.path,className:`${Breadcrumb_Breadcrumb_module.Link} ${linkClassName}`,title:item.title,children:item.title}),separator&&(0,jsx_runtime.jsx)("span",{className:Breadcrumb_Breadcrumb_module.Separator,"aria-hidden":"true",children:separator})]})},item.path)))})})},Breadcrumb=Breadcrumbs;Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{pathname:{required:!1,tsType:{name:"string"},description:""},routeTitles:{required:!1,tsType:{name:"RouteConfig"},description:"",defaultValue:{value:"{}",computed:!1}},separator:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:"<Chevronright />",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},itemClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},linkClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},activeClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}}},"../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.97.1_esbuild@0.24.2_/node_modules/postcss-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@13.3.3_sass@1.83.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./components/common/Breadcrumb/Breadcrumb.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1_esbuild@0.24.2_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_esbuild_0_24_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Breadcrumb_Breadcrumbs___egbO{color:var(--VE-White-50, #929292);font-family:var(--font-inter);font-size:16px;font-style:normal;font-weight:300;line-height:normal;padding:4px;height:24px;max-height:max-content}.Breadcrumb_Breadcrumbs___egbO *,.Breadcrumb_Breadcrumbs___egbO ::after,.Breadcrumb_Breadcrumbs___egbO ::before{box-sizing:border-box}.Breadcrumb_BreadcrumbsList__yB3UN{list-style:none;display:flex;align-items:center;padding:0;margin:0}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_BreadcrumbsItem__cZQRm{display:flex;align-items:center;color:var(--VE-White-50, #929292);font-family:var(--font-inter);font-size:16px;font-style:normal;font-weight:300;line-height:normal}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Link__BACNN{color:var(--VE-White-50, #929292);font-family:var(--font-inter);font-size:16px;font-style:normal;font-weight:300;line-height:normal;text-decoration:none}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Link__BACNN::first-letter{text-transform:capitalize}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Link__BACNN:hover{text-decoration:none;color:var(--VE-Main-Green-100, #c3f84d)}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Separator__bLIle{display:flex;margin:0 4px}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Active__pBdQ2{color:var(--VE-White-100, #fff);font-family:var(--font-inter);font-size:16px;font-style:normal;font-weight:500;line-height:24px}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Text__Ps2PB{color:var(--VE-White-100, #fff);font-family:var(--font-inter);font-size:16px;font-style:normal;font-weight:500;line-height:24px}.Breadcrumb_Breadcrumbs___egbO .Breadcrumb_Text__Ps2PB::first-letter{text-transform:capitalize}","",{version:3,sources:["webpack://./components/common/Breadcrumb/Breadcrumb.module.scss"],names:[],mappings:"AAAA,+BAOE,iCAAA,CAGA,6BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,WAAA,CACA,WAAA,CACA,sBAAA,CAhBA,gHAGE,qBAAA,CAeF,mCACE,eAAA,CACA,YAAA,CACA,kBAAA,CACA,SAAA,CACA,QAAA,CAGF,kEACE,YAAA,CACA,kBAAA,CACA,iCAAA,CAGA,6BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CAGF,uDACE,iCAAA,CAGA,6BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,oBAAA,CAEA,qEACE,yBAAA,CAGF,6DACE,oBAAA,CACA,uCAAA,CAIJ,4DACE,YAAA,CACA,YAAA,CAGF,yDACE,+BAAA,CAGA,6BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CAGF,uDACE,+BAAA,CAGA,6BAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CAEA,qEACE,yBAAA",sourcesContent:[".Breadcrumbs {\n  *,\n  ::after,\n  ::before {\n    box-sizing: border-box;\n  }\n\n  color: var(--VE-White-50, #929292);\n\n  /* 16px-Light */\n  font-family: var(--font-inter);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: normal;\n  padding: 4px;\n  height: 24px;\n  max-height: max-content;\n\n  &List {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n  }\n\n  .BreadcrumbsItem {\n    display: flex;\n    align-items: center;\n    color: var(--VE-White-50, #929292);\n\n    /* 16px-Light */\n    font-family: var(--font-inter);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n  }\n\n  .Link {\n    color: var(--VE-White-50, #929292);\n\n    /* 16px-Light */\n    font-family: var(--font-inter);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    text-decoration: none;\n\n    &::first-letter {\n      text-transform: capitalize;\n    }\n\n    &:hover {\n      text-decoration: none;\n      color: var(--VE-Main-Green-100, #c3f84d);\n    }\n  }\n\n  .Separator {\n    display: flex;\n    margin: 0 4px;\n  }\n\n  .Active {\n    color: var(--VE-White-100, #fff);\n\n    /* 16px-Medium */\n    font-family: var(--font-inter);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 150% */\n  }\n\n  .Text {\n    color: var(--VE-White-100, #fff);\n\n    /* 16px-Medium */\n    font-family: var(--font-inter);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 150% */\n\n    &::first-letter {\n      text-transform: capitalize;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Breadcrumbs:"Breadcrumb_Breadcrumbs___egbO",BreadcrumbsList:"Breadcrumb_BreadcrumbsList__yB3UN",BreadcrumbsItem:"Breadcrumb_BreadcrumbsItem__cZQRm",Link:"Breadcrumb_Link__BACNN",Separator:"Breadcrumb_Separator__bLIle",Active:"Breadcrumb_Active__pBdQ2",Text:"Breadcrumb_Text__Ps2PB"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);