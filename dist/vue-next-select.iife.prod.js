this.VueNextSelect=function(e){"use strict";var t={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},inputName:{default:"",type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(t,l){const a=e.ref(null);return e.onMounted((()=>{t.autofocus&&a.value.focus()})),e.onUpdated((()=>{t.autofocus&&a.value.focus()})),{handleInput:e=>{l.emit("input",e),l.emit("update:modelValue",t.inputName,e.target.value)},handleChange:e=>{l.emit("change",e),l.emit("update:modelValue",t.inputName,e.target.value)},handleFocus:e=>{l.emit("focus",e)},handleBlur:e=>{l.emit("blur",e)},input:a,handleEscape:e=>{a.value.blur(),l.emit("escape",e)}}}};const l={class:"vue-input"};t.render=function(t,a,n,o,u,i){return e.openBlock(),e.createBlock("div",l,[e.renderSlot(t.$slots,"prepend"),e.createVNode("input",{ref:"input",modelValue:n.modelValue,placeholder:n.placeholder,disabled:n.disabled,onInput:a[1]||(a[1]=(...e)=>o.handleInput&&o.handleInput(...e)),onChange:a[2]||(a[2]=(...e)=>o.handleChange&&o.handleChange(...e)),onFocus:a[3]||(a[3]=(...e)=>o.handleFocus&&o.handleFocus(...e)),onBlur:a[4]||(a[4]=(...e)=>o.handleBlur&&o.handleBlur(...e)),onKeyup:a[5]||(a[5]=e.withKeys(e.withModifiers(((...e)=>o.handleEscape&&o.handleEscape(...e)),["exact"]),["esc"])),name:n.inputName,tabindex:n.tabindex,autofocus:n.autofocus},null,40,["modelValue","placeholder","disabled","name","tabindex","autofocus"]),e.renderSlot(t.$slots,"append")])},t.__file="src/components/input.vue";var a={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},collapseTags:{type:Boolean}},emits:["click"],setup:(t,l)=>({dataAttrs:e.inject("dataAttrs"),handleClick:e=>{l.emit("click",e)}})};a.render=function(t,l,a,n,o,u){return e.openBlock(),e.createBlock("ul",{class:["vue-tags",{collapsed:a.collapseTags}],onMousedown:l[1]||(l[1]=e.withModifiers((()=>{}),["prevent"])),tabindex:"-1",onClick:l[2]||(l[2]=(...e)=>n.handleClick&&n.handleClick(...e)),"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.modelValue,(l=>(e.openBlock(),e.createBlock("li",{key:l.key,class:["vue-tag",{selected:l.selected}]},[e.renderSlot(t.$slots,"default",{option:l},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1)]))],2)))),128))],42,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},a.__file="src/components/tags.vue";var n={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},headerHeight:{required:!0,type:String}},emits:["click"],setup:(t,l)=>({dataAttrs:e.inject("dataAttrs"),handleClick:(e,t)=>{l.emit("click",e,t)}})};n.render=function(t,l,a,n,o,u){return e.openBlock(),e.createBlock("ul",{class:"vue-dropdown",onMousedown:l[1]||(l[1]=e.withModifiers((()=>{}),["prevent"])),style:{top:a.headerHeight},"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[(e.openBlock(!0),e.createBlock(e.Fragment,null,e.renderList(a.modelValue,(l=>(e.openBlock(),e.createBlock(e.Fragment,{key:l.key},[l.visible&&!1===l.hidden?(e.openBlock(),e.createBlock("li",{key:0,onClick:e=>n.handleClick(e,l),class:["vue-dropdown-item",{selected:l.selected}]},[e.renderSlot(t.$slots,"default",{option:l},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1)]))],10,["onClick"])):e.createCommentVNode("v-if",!0)],64)))),128))],44,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},n.__file="src/components/dropdown.vue";const o=(e,t,{valueBy:l})=>l(e)===l(t),u=(e,t,{valueBy:l})=>-1!==e.findIndex((e=>o(e,t,{valueBy:l}))),i=(e,t,{valueBy:l})=>e.find((e=>l(e)===t)),d=(e,t,{max:l,valueBy:a})=>u(e,t,{valueBy:a})||e.length+1>l?e:e.concat(t),s=(e,t,{min:l,valueBy:a})=>!1===u(e,t,{valueBy:a})||e.length-1<l?e:e.filter((e=>!1===o(e,t,{valueBy:a})));var r={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},inputName:{default:"",type:String},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup(t,l){const{trackBy:a,labelBy:n,valueBy:o,min:r,max:c,options:p}=(t=>({trackBy:e.computed((()=>"function"==typeof t.trackBy?t.trackBy:"string"==typeof t.trackBy?e=>t.trackBy.split(".").reduce(((e,t)=>e[t]),e):e=>e)),labelBy:e.computed((()=>"function"==typeof t.labelBy?t.labelBy:"string"==typeof t.labelBy?e=>t.labelBy.split(".").reduce(((e,t)=>e[t]),e):e=>e)),valueBy:e.computed((()=>"function"==typeof t.valueBy?t.valueBy:"string"==typeof t.valueBy?e=>t.valueBy.split(".").reduce(((e,t)=>e[t]),e):e=>e)),min:e.computed((()=>t.multiple?t.min:Math.min(1,t.min))),max:e.computed((()=>t.multiple?t.max:1)),options:e.isRef(t.options)||e.isReactive(t.options)?e.toRef(t,"options"):e.ref(t.options)}))(t),h=e.ref(null),v=e.ref(null),g=e.ref(!1);e.watch((()=>g.value),(()=>{g.value?(l.emit("opened"),t.searchable&&l.emit("search:focus"),t.searchable?v.value&&v.value._.refs.input!==document.activeElement&&v.value._.refs.input.focus():!1===t.searchable&&h.value.focus()):(v.value&&v.value._.refs.input===document.activeElement&&v.value._.refs.input.blur(),h.value&&h.value===document.activeElement&&h.value.blur(),t.searchable&&l.emit("search:blur"),l.emit("closed"))}));const m=()=>{t.disabled||(g.value=!0)},y=()=>{g.value=!1};e.watch((()=>t.disabled),(()=>y()));const f=e.ref(null),b=(B=f,w=()=>t.modelValue,I=e.ref("0"),k=function(){setTimeout((function(){B.value&&(I.value=window.getComputedStyle(B.value).height)}))},e.watch(w,k),e.onMounted(k),I);var B,w,I,k;const V=e.computed((()=>t.searchable&&t.multiple&&t.taggable?"22px":"0px")),N=e.computed((()=>parseFloat(b.value)+parseFloat(V.value)+"px")),M=e.ref(""),S=e.ref([]),A=()=>{if(t.multiple){if(!1===Array.isArray(t.modelValue))return!1;if(S.value.length!==t.modelValue.length)return!1;if(Object.keys(S.value).some((e=>S.value[e]!==i(p.value,t.modelValue[e],{valueBy:o.value}))))return!1}else{if(0===S.value.length&&null!==t.modelValue)return!1;if(1===S.value.length&&null===t.modelValue)return!1;if(S.value[0]!==i(p.value,t.modelValue,{valueBy:o.value}))return!1}return!0},C=()=>{if(A())return;S.value=[];const e=t.multiple?t.modelValue:null===t.modelValue?[]:[t.modelValue];for(const t of e){const e=i(p.value,t,{valueBy:o.value});!1!==u(p.value,e,{valueBy:o.value})&&(S.value=d(S.value,e,{max:1/0,valueBy:o.value}))}};C(),e.watch((()=>t.modelValue),(()=>{C()}),{deep:!0});e.watch((()=>S),(()=>{(()=>{if(A())return;const e=S.value.map((e=>o.value(e)));t.multiple?l.emit("update:modelValue",t.inputName,e):e.length?l.emit("update:modelValue",t.inputName,e[0]):l.emit("update:modelValue",t.inputName,null)})()}),{deep:!0}),e.watch((()=>p.value),(()=>{const e=new Set(S.value.map((e=>o.value(e))));S.value=p.value.filter((t=>e.has(o.value(t))))}),{deep:!0});const D=(e,a)=>{if(!t.disabled){if(a=a.originalOption,u(S.value,a,{valueBy:o.value}))S.value=s(S.value,a,{min:r.value,valueBy:o.value}),l.emit("removed",t.inputName,a);else{if(!t.multiple){const e=S.value[0];S.value=s(S.value,S.value[0],{min:0,valueBy:o.value}),l.emit("removed",t.inputName,e)}S.value=d(S.value,a,{max:c.value,valueBy:o.value}),l.emit("selected",t.inputName,a)}!0===t.closeOnSelect&&(g.value=!1),!0===t.clearOnSelect&&M.value&&(v.value._.refs.input.value="",v.value._.refs.input.dispatchEvent(new Event("input")),v.value._.refs.input.dispatchEvent(new Event("change")))}},F=e.computed((()=>{const e=new Set(S.value.map((e=>o.value(e)))),l=null!==t.visibleOptions?new Set(t.visibleOptions.map((e=>o.value(e)))):new Set(p.value.map((e=>o.value(e))));return p.value.map((u=>({key:a.value(u),label:n.value(u),selected:e.has(o.value(u)),visible:l.has(o.value(u)),hidden:!!t.hideSelected&&e.has(o.value(u)),originalOption:u})))})),x=e.computed((()=>({isFocusing:g.value,visibleLength:F.value.filter((e=>e.visible&&!1===e.hidden)).length,notSelectedLength:p.value.length-F.value.filter((e=>e.selected)).length,selectedLength:F.value.filter((e=>e.selected)).length,totalLength:p.value.length})));e.provide("dataAttrs",x);const L=e.computed((()=>{const e=F.value.filter((e=>e.selected));return t.multiple?0===e.length?t.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?t.placeholder:e[0].label}));return{isFocusing:g,wrapper:h,input:v,focus:m,blur:y,toggle:()=>{g.value?y():m()},header:f,headerAndInputHeight:N,searchingInputValue:M,handleInputForInput:e=>{l.emit("search:input",e)},handleChangeForInput:e=>{l.emit("search:change",e)},handleFocusForInput:e=>{m()},handleBlurForInput:e=>{y()},handleClickForDropdown:(e,t)=>D(0,t),handleClickForTag:(e,t)=>D(0,t),optionsWithInfo:F,addOrRemoveOption:D,dataAttrs:x,innerPlaceholder:L}},components:{VInput:t,VTags:a,VDropdown:n}};const c={ref:"header",class:"vue-select-header"},p={key:0,class:"vue-input"},h={class:"icon loading"},v=e.createVNode("div",null,null,-1),g=e.createVNode("div",null,null,-1),m=e.createVNode("div",null,null,-1),y={class:"icon loading"},f=e.createVNode("div",null,null,-1),b=e.createVNode("div",null,null,-1),B=e.createVNode("div",null,null,-1);return r.render=function(t,l,a,n,o,u){const i=e.resolveComponent("v-tags"),d=e.resolveComponent("v-input"),s=e.resolveComponent("v-dropdown");return e.openBlock(),e.createBlock("div",{ref:"wrapper",class:["vue-select",{disabled:a.disabled}],tabindex:n.isFocusing?-1:a.tabindex,onFocus:l[9]||(l[9]=(...e)=>n.focus&&n.focus(...e)),onBlur:l[10]||(l[10]=()=>!a.searchable&&n.blur()),"data-is-focusing":n.dataAttrs.isFocusing,"data-visible-length":n.dataAttrs.visibleLength,"data-not-selected-length":n.dataAttrs.notSelectedLength,"data-selected-length":n.dataAttrs.selectedLength,"data-total-length":n.dataAttrs.totalLength},[e.createVNode("div",c,[a.multiple&&a.taggable&&0===a.modelValue.length||!1===a.searchable&&!1===a.taggable?(e.openBlock(),e.createBlock("div",p,[e.createVNode("input",{name:a.inputName,placeholder:n.innerPlaceholder,readonly:"",onClick:l[1]||(l[1]=(...e)=>n.focus&&n.focus(...e))},null,8,["name","placeholder"])])):e.createCommentVNode("v-if",!0),a.multiple&&a.taggable?(e.openBlock(),e.createBlock(e.Fragment,{key:1},[e.createVNode(i,{modelValue:n.optionsWithInfo,"collapse-tags":a.collapseTags,tabindex:"-1",onClick:n.focus},{default:e.withCtx((({option:l})=>[e.renderSlot(t.$slots,"tag",{option:l.originalOption},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1),e.createVNode("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:e.withModifiers((()=>n.addOrRemoveOption(t.$event,l)),["prevent","stop"])},null,8,["onClick"])]))])),_:1},8,["modelValue","collapse-tags","onClick"]),e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:l[2]||(l[2]=(...e)=>n.toggle&&n.toggle(...e)),onMousedown:l[3]||(l[3]=e.withModifiers((()=>{}),["prevent","stop"]))},[e.renderSlot(t.$slots,"icon")],34)],64)):(e.openBlock(),e.createBlock(e.Fragment,{key:2},[a.searchable?(e.openBlock(),e.createBlock(d,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":l[4]||(l[4]=e=>n.searchingInputValue=e),disabled:a.disabled,placeholder:n.isFocusing?a.searchPlaceholder:n.innerPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,name:a.inputName,autofocus:a.autofocus||a.taggable&&a.searchable,tabindex:a.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","name","autofocus","tabindex"])):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode("span",h,[v,g,m],512),[[e.vShow,a.loading]]),e.withDirectives(e.createVNode("span",{class:["icon arrow-downward",{active:n.isFocusing}],onClick:l[5]||(l[5]=(...e)=>n.toggle&&n.toggle(...e)),onMousedown:l[6]||(l[6]=e.withModifiers((()=>{}),["prevent","stop"]))},[e.renderSlot(t.$slots,"icon")],34),[[e.vShow,!1===a.loading]])],64))],512),a.multiple&&a.taggable&&a.searchable?e.withDirectives((e.openBlock(),e.createBlock(d,{key:0,ref:"input",modelValue:n.searchingInputValue,"onUpdate:modelValue":l[7]||(l[7]=e=>n.searchingInputValue=e),disabled:a.disabled,placeholder:a.searchPlaceholder,onInput:n.handleInputForInput,onChange:n.handleChangeForInput,onFocus:n.handleFocusForInput,onBlur:n.handleBlurForInput,onEscape:n.blur,name:a.inputName,tabindex:a.tabindex,autofocus:a.autofocus||a.taggable&&a.searchable},{append:e.withCtx((()=>[e.withDirectives(e.createVNode("span",y,[f,b,B],512),[[e.vShow,a.loading]])])),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","name","tabindex","autofocus"])),[[e.vShow,n.isFocusing]]):e.createCommentVNode("v-if",!0),e.withDirectives(e.createVNode(s,{modelValue:n.optionsWithInfo,"onUpdate:modelValue":l[8]||(l[8]=e=>n.optionsWithInfo=e),onClick:n.handleClickForDropdown,"header-height":n.headerAndInputHeight},{default:e.withCtx((({option:l})=>[e.renderSlot(t.$slots,"dropdown-item",{option:l.originalOption},(()=>[e.createVNode("span",null,e.toDisplayString(l.label),1)]))])),_:1},8,["modelValue","onClick","header-height"]),[[e.vShow,n.isFocusing]])],42,["tabindex","data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},r.__file="src/index.vue",r}(Vue);
