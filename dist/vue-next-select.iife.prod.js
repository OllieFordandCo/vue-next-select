this.VueNextSelect=function(e){"use strict";var l={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(l,t){const a=e.ref(null);return e.onMounted((()=>{l.autofocus&&a.value.focus()})),e.onUpdated((()=>{l.autofocus&&a.value.focus()})),{handleInput:e=>{t.emit("input",e),t.emit("update:modelValue",e.target.value)},handleChange:e=>{t.emit("change",e),t.emit("update:modelValue",e.target.value)},handleFocus:e=>{t.emit("focus",e)},handleBlur:e=>{t.emit("blur",e)},input:a,handleEscape:e=>{a.value.blur(),t.emit("escape",e)}}}};const t={class:"vue-input"};l.render=function(l,a,n,o,u,i){return e.openBlock(),e.createBlock("div",t,[e.renderSlot(l.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:n.modelValue,placeholder:n.placeholder,disabled:n.disabled,onInput:a[1]||(a[1]=(...e)=>o.handleInput&&o.handleInput(...e)),onChange:a[2]||(a[2]=(...e)=>o.handleChange&&o.handleChange(...e)),onFocus:a[3]||(a[3]=(...e)=>o.handleFocus&&o.handleFocus(...e)),onBlur:a[4]||(a[4]=(...e)=>o.handleBlur&&o.handleBlur(...e)),onKeyup:a[5]||(a[5]=e.withKeys(e.withModifiers(((...e)=>o.handleEscape&&o.handleEscape(...e)),["exact"]),["esc"])),tabindex:n.tabindex,autofocus:n.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),e.renderSlot(l.$slots,"append")])},l.__file="src/components/input.vue";var a={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},collapseTags:{type:Boolean}},emits:["click"],setup:(l,t)=>({dataAttrs:e.inject("dataAttrs"),handleClick:e=>{t.emit("click",e)}})};a.render=function(l,t,a,n,o,u){return e.openBlock(),e.createBlock("ul",{class:["vue-tags",{collapsed:a.collapseTags}],onMousedown:t[1]||(t[1]=e.withModifiers((()=>{}),["prevent"])),tabindex:"-1",onClick:t[2]||(t[2]=(...e)=>n.handleClick&&n.handleClick(...e)),"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.modelValue,(t=>(e.openBlock(),e.createBlock("li",{key:t.key,class:["vue-tag",{selected:t.selected}]},[e.renderSlot(l.$slots,"default",{option:t},(()=>[e.createVNode("span",null,e.toDisplayString(t.label),1)]))],2)))),128))],42,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},a.__file="src/components/tags.vue";var n={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},headerHeight:{required:!0,type:String}},emits:["click"],setup:(l,t)=>({dataAttrs:e.inject("dataAttrs"),handleClick:(e,l)=>{t.emit("click",e,l)}})};n.render=function(l,t,a,n,o,u){return e.openBlock(),e.createBlock("ul",{class:"vue-dropdown",onMousedown:t[1]||(t[1]=e.withModifiers((()=>{}),["prevent"])),style:{top:a.headerHeight},"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.modelValue,(t=>(e.openBlock(),e.createBlock(e.Fragment,{key:t.key},[t.visible&&!1===t.hidden?(e.openBlock(),e.createBlock("li",{key:0,onClick:e=>n.handleClick(e,t),class:["vue-dropdown-item",{selected:t.selected}]},[e.renderSlot(l.$slots,"default",{option:t},(()=>[e.createVNode("span",null,e.toDisplayString(t.label),1)]))],10,["onClick"])):e.createCommentVNode("v-if",!0)],64)))),128))],44,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},n.__file="src/components/dropdown.vue";const o=(e,l,{valueBy:t})=>t(e)===t(l),u=(e,l,{valueBy:t})=>-1!==e.findIndex((e=>o(e,l,{valueBy:t}))),i=(e,l,{valueBy:t})=>e.find((e=>t(e)===l)),d=(e,l,{max:t,valueBy:a})=>u(e,l,{valueBy:a})||e.length+1>t?e:e.concat(l),s=(e,l,{min:t,valueBy:a})=>!1===u(e,l,{valueBy:a})||e.length-1<t?e:e.filter((e=>!1===o(e,l,{valueBy:a})));var r={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup(l,t){const{trackBy:a,labelBy:n,valueBy:o,min:r,max:c,options:p}=(l=>({trackBy:e.computed((()=>"function"==typeof l.trackBy?l.trackBy:"string"==typeof l.trackBy?e=>l.trackBy.split(".").reduce(((e,l)=>e[l]),e):e=>e)),labelBy:e.computed((()=>"function"==typeof l.labelBy?l.labelBy:"string"==typeof l.labelBy?e=>l.labelBy.split(".").reduce(((e,l)=>e[l]),e):e=>e)),valueBy:e.computed((()=>"function"==typeof l.valueBy?l.valueBy:"string"==typeof l.valueBy?e=>l.valueBy.split(".").reduce(((e,l)=>e[l]),e):e=>e)),min:e.computed((()=>l.multiple?l.min:Math.min(1,l.min))),max:e.computed((()=>l.multiple?l.max:1)),options:e.isRef(l.options)||e.isReactive(l.options)?e.toRef(l,"options"):e.ref(l.options)}))(l),h=e.ref(null),v=e.ref(null),g=e.ref(!1);e.watch((()=>g.value),(()=>{g.value?(t.emit("opened"),l.searchable&&t.emit("search:focus"),l.searchable?v.value&&v.value._.refs.input!==document.activeElement&&v.value._.refs.input.focus():!1===l.searchable&&h.value.focus()):(v.value&&v.value._.refs.input===document.activeElement&&v.value._.refs.input.blur(),h.value&&h.value===document.activeElement&&h.value.blur(),l.searchable&&t.emit("search:blur"),t.emit("closed"))}));const m=()=>{l.disabled||(g.value=!0)},y=()=>{g.value=!1};e.watch((()=>l.disabled),(()=>y()));const f=e.ref(null),b=(B=f,w=()=>l.modelValue,I=e.ref("0"),k=function(){setTimeout((function(){B.value&&(I.value=window.getComputedStyle(B.value).height)}))},e.watch(w,k),e.onMounted(k),I);var B,w,I,k;const V=e.computed((()=>l.searchable&&l.multiple&&l.taggable?"22px":"0px")),M=e.computed((()=>parseFloat(b.value)+parseFloat(V.value)+"px")),N=e.ref(""),S=e.ref([]),A=()=>{if(l.multiple){if(!1===Array.isArray(l.modelValue))return!1;if(S.value.length!==l.modelValue.length)return!1;if(Object.keys(S.value).some((e=>S.value[e]!==i(p.value,l.modelValue[e],{valueBy:o.value}))))return!1}else{if(0===S.value.length&&null!==l.modelValue)return!1;if(1===S.value.length&&null===l.modelValue)return!1;if(S.value[0]!==i(p.value,l.modelValue,{valueBy:o.value}))return!1}return!0},C=()=>{if(A())return;S.value=[];const e=l.multiple?l.modelValue:null===l.modelValue?[]:[l.modelValue];for(const l of e){const e=i(p.value,l,{valueBy:o.value});!1!==u(p.value,e,{valueBy:o.value})&&(S.value=d(S.value,e,{max:1/0,valueBy:o.value}))}};C(),e.watch((()=>l.modelValue),(()=>{C()}),{deep:!0});e.watch((()=>S),(()=>{(()=>{if(A())return;const e=S.value.map((e=>o.value(e)));l.multiple?t.emit("update:modelValue",e):e.length?t.emit("update:modelValue",e[0]):t.emit("update:modelValue",null)})()}),{deep:!0}),e.watch((()=>p.value),(()=>{const e=new Set(S.value.map((e=>o.value(e))));S.value=p.value.filter((l=>e.has(o.value(l))))}),{deep:!0});const D=(e,a)=>{if(!l.disabled){if(a=a.originalOption,u(S.value,a,{valueBy:o.value}))S.value=s(S.value,a,{min:r.value,valueBy:o.value}),t.emit("removed",a);else{if(!l.multiple){const e=S.value[0];S.value=s(S.value,S.value[0],{min:0,valueBy:o.value}),t.emit("removed",e)}S.value=d(S.value,a,{max:c.value,valueBy:o.value}),t.emit("selected",a)}!0===l.closeOnSelect&&(g.value=!1),!0===l.clearOnSelect&&N.value&&(v.value._.refs.input.value="",v.value._.refs.input.dispatchEvent(new Event("input")),v.value._.refs.input.dispatchEvent(new Event("change")))}},F=e.computed((()=>{const e=new Set(S.value.map((e=>o.value(e)))),t=null!==l.visibleOptions?new Set(l.visibleOptions.map((e=>o.value(e)))):new Set(p.value.map((e=>o.value(e))));return p.value.map((u=>({key:a.value(u),label:n.value(u),selected:e.has(o.value(u)),visible:t.has(o.value(u)),hidden:!!l.hideSelected&&e.has(o.value(u)),originalOption:u})))})),x=e.computed((()=>({isFocusing:g.value,visibleLength:F.value.filter((e=>e.visible&&!1===e.hidden)).length,notSelectedLength:p.value.length-F.value.filter((e=>e.selected)).length,selectedLength:F.value.filter((e=>e.selected)).length,totalLength:p.value.length})));e.provide("dataAttrs",x);const L=e.computed((()=>{const e=F.value.filter((e=>e.selected));return l.multiple?0===e.length?l.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?l.placeholder:e[0].label}));return{isFocusing:g,wrapper:h,input:v,focus:m,blur:y,toggle:()=>{g.value?y():m()},header:f,headerAndInputHeight:M,searchingInputValue:N,handleInputForInput:e=>{t.emit("search:input",e)},handleChangeForInput:e=>{t.emit("search:change",e)},handleFocusForInput:e=>{m()},handleBlurForInput:e=>{y()},handleClickForDropdown:(e,l)=>D(0,l),handleClickForTag:(e,l)=>D(0,l),optionsWithInfo:F,addOrRemoveOption:D,dataAttrs:x,innerPlaceholder:L}},components:{VInput:l,VTags:a,VDropdown:n}};const c={ref:"header",class:"vue-select-header"},p={key:0,class:"vue-input"},h={class:"icon loading"},v=e.createVNode("div",null,null,-1),g=e.createVNode("div",null,null,-1),m=e.createVNode("div",null,null,-1),y={class:"icon loading"},f=e.createVNode("div",null,null,-1),b=e.createVNode("div",null,null,-1),B=e.createVNode("div",null,null,-1);return r.render=function(l,t,a,n,o,u){const i=e.resolveComponent("v-tags"),d=e.resolveComponent("v-input"),s=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",{ref:"wrapper",class:["vue-select",{disabled:a.disabled}],tabindex:n.isFocusing?-1:a.tabindex,onFocus:t[9]||(t[9]=(...e)=>n.focus&&n.focus(...e)),onBlur:t[10]||(t[10]=()=>!a.searchable&&n.blur()),"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[e.createVNode("div",c,[a.multiple&&a.taggable&&0===a.modelValue.length||!1===a.searchable&&!1===a.taggable?(e.openBlock(),e.createBlock("div",p,[e.createVNode("input",{"model-value":{innerPlaceholder:n.innerPlaceholder},placeholder:n.innerPlaceholder,readonly:"",onClick:t[1]||(t[1]=(...e)=>n.focus&&n.focus(...e))},null,8,["model-value","placeholder"])])):e.createCommentVNode("v-if",!0),a.multiple&&a.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:1},[e.createVNode(i,{modelValue:n.optionsWithInfo,"collapse-tags":a.collapseTags,tabindex:"-1",onClick:n.focus},{default:e.withCtx((({option:t})=>[e.renderSlot(l.$slots,"tag",{option:t.originalOption},(()=>[e.createVNode("span",null,e.toDisplayString(t.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:e.withModifiers((()=>n.addOrRemoveOption(l.$event,t)),["prevent","stop"])},null,8,["onClick"])]))])),_:1},8,["modelValue","collapse-tags","onClick"]),e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:t[2]||(t[2]=(...e)=>n.toggle&&n.toggle(...e)),onMousedown:t[3]||(t[3]=e.withModifiers((()=>{}),["prevent","stop"]))},[e.renderSlot(l.$slots,"icon")],34)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:2},[a.searchable?(e.openBlock(),e.createBlock(d,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":t[4]||(t[4]=e=>n.searchingInputValue=e),disabled:a.disabled,placeholder:n.isFocusing?a.searchPlaceholder:n.innerPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,autofocus:a.autofocus||a.taggable&&a.searchable,tabindex:a.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode("span",h,[v,g,m],512),[[e.vShow,a.loading]]),e.withDirectives(e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:t[5]||(t[5]=(...e)=>n.toggle&&n.toggle(...e)),onMousedown:t[6]||(t[6]=e.withModifiers((()=>{}),["prevent","stop"]))},[e.renderSlot(l.$slots,"icon")],34),[[e.vShow,!1===a.loading]])],64))],512),a.multiple&&a.taggable&&a.searchable?e.withDirectives((e.openBlock(),e.createBlock(d,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":t[7]||(t[7]=e=>n.searchingInputValue=e),disabled:a.disabled,placeholder:a.searchPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,tabindex:a.tabindex,autofocus:a.autofocus||a.taggable&&a.searchable},{append:e.withCtx((()=>[e.withDirectives(e.createVNode("span",y,[f,b,B],512),[[e.vShow,a.loading]])])),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])),[[e.vShow,n.isFocusing]]):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode(s,{modelValue:n.optionsWithInfo,"onUpdate:modelValue":t[8]||(t[8]=e=>n.optionsWithInfo=e),onClick:n.handleClickForDropdown,"header-height":n.headerAndInputHeight},{default:e.withCtx((({option:t})=>[e.renderSlot(l.$slots,"dropdown-item",{option:t.originalOption},(()=>[e.createVNode("span",null,e.toDisplayString(t.label),1)]))])),_:1},8,["modelValue","onClick","header-height"]),[[e.vShow,n.isFocusing]])],42,["tabindex","data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},r.__file="src/index.vue",r}(Vue);
