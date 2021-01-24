import{ref as e,onMounted as l,onUpdated as a,openBlock as t,createBlock as n,renderSlot as u,createVNode as o,withKeys as i,withModifiers as s,inject as d,Fragment as r,renderList as c,toDisplayString as p,createCommentVNode as v,computed as h,isRef as g,isReactive as m,toRef as y,watch as f,provide as b,resolveComponent as I,withCtx as B,withDirectives as M,vShow as w}from"vue";var V={inheritAttrs:!1,name:"vue-input",props:{modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean}},emits:["update:modelValue","input","change","focus","blur","escape"],setup(t,n){const u=e(null);return l((()=>{t.autofocus&&u.value.focus()})),a((()=>{t.autofocus&&u.value.focus()})),{handleInput:e=>{n.emit("input",e),n.emit("update:modelValue",e.target.value)},handleChange:e=>{n.emit("change",e),n.emit("update:modelValue",e.target.value)},handleFocus:e=>{n.emit("focus",e)},handleBlur:e=>{n.emit("blur",e)},input:u,handleEscape:e=>{u.value.blur(),n.emit("escape",e)}}}};const k={class:"vue-input"};V.render=function(e,l,a,d,r,c){return t(),n("div",k,[u(e.$slots,"prepend"),o("input",{ref:"input",modelValue:a.modelValue,placeholder:a.placeholder,disabled:a.disabled,onInput:l[1]||(l[1]=(...e)=>d.handleInput&&d.handleInput(...e)),onChange:l[2]||(l[2]=(...e)=>d.handleChange&&d.handleChange(...e)),onFocus:l[3]||(l[3]=(...e)=>d.handleFocus&&d.handleFocus(...e)),onBlur:l[4]||(l[4]=(...e)=>d.handleBlur&&d.handleBlur(...e)),onKeyup:l[5]||(l[5]=i(s(((...e)=>d.handleEscape&&d.handleEscape(...e)),["exact"]),["esc"])),tabindex:a.tabindex,autofocus:a.autofocus},null,40,["modelValue","placeholder","disabled","tabindex","autofocus"]),u(e.$slots,"append")])},V.__file="src/components/input.vue";var A={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},collapseTags:{type:Boolean}},emits:["click"],setup:(e,l)=>({dataAttrs:d("dataAttrs"),handleClick:e=>{l.emit("click",e)}})};A.render=function(e,l,a,i,d,v){return t(),n("ul",{class:["vue-tags",{collapsed:a.collapseTags}],onMousedown:l[1]||(l[1]=s((()=>{}),["prevent"])),tabindex:"-1",onClick:l[2]||(l[2]=(...e)=>i.handleClick&&i.handleClick(...e)),"data-is-focusing":i.dataAttrs.isFocusing,"data-visible-length":i.dataAttrs.visibleLength,"data-not-selected-length":i.dataAttrs.notSelectedLength,"data-selected-length":i.dataAttrs.selectedLength,"data-total-length":i.dataAttrs.totalLength},[(t(!0),n(r,null,c(a.modelValue,(l=>(t(),n("li",{key:l.key,class:["vue-tag",{selected:l.selected}]},[u(e.$slots,"default",{option:l},(()=>[o("span",null,p(l.label),1)]))],2)))),128))],42,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},A.__file="src/components/tags.vue";var x={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:e=>e.every((e=>void 0!==typeof e.key&&void 0!==e.label&&"boolean"==typeof e.selected))},headerHeight:{required:!0,type:String}},emits:["click"],setup:(e,l)=>({dataAttrs:d("dataAttrs"),handleClick:(e,a)=>{l.emit("click",e,a)}})};x.render=function(e,l,a,i,d,h){return t(),n("ul",{class:"vue-dropdown",onMousedown:l[1]||(l[1]=s((()=>{}),["prevent"])),style:{top:a.headerHeight},"data-is-focusing":i.dataAttrs.isFocusing,"data-visible-length":i.dataAttrs.visibleLength,"data-not-selected-length":i.dataAttrs.notSelectedLength,"data-selected-length":i.dataAttrs.selectedLength,"data-total-length":i.dataAttrs.totalLength},[(t(!0),n(r,null,c(a.modelValue,(l=>(t(),n(r,{key:l.key},[l.visible&&!1===l.hidden?(t(),n("li",{key:0,onClick:e=>i.handleClick(e,l),class:["vue-dropdown-item",{selected:l.selected}]},[u(e.$slots,"default",{option:l},(()=>[o("span",null,p(l.label),1)]))],10,["onClick"])):v("v-if",!0)],64)))),128))],44,["data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},x.__file="src/components/dropdown.vue";const F=(e,l,{valueBy:a})=>a(e)===a(l),C=(e,l,{valueBy:a})=>-1!==e.findIndex((e=>F(e,l,{valueBy:a}))),D=(e,l,{valueBy:a})=>e.find((e=>a(e)===l)),L=(e,l,{max:a,valueBy:t})=>C(e,l,{valueBy:t})||e.length+1>a?e:e.concat(l),N=(e,l,{min:a,valueBy:t})=>!1===C(e,l,{valueBy:t})||e.length-1<a?e:e.filter((e=>!1===F(e,l,{valueBy:t})));var S={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},options:{required:!0,type:Array},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},closeOnSelect:{default:!1,type:Boolean},clearOnSelect:{default:!1,type:Boolean},trackBy:{type:[String,Function]},hideSelected:{default:!1,type:Boolean},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},searchPlaceholder:{default:"Type to search",type:String},searchable:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean}},emits:["update:modelValue","selected","removed","opened","closed","search:input","search:change","search:focus","search:blur"],setup(a,t){const{trackBy:n,labelBy:u,valueBy:o,min:i,max:s,options:d}=(l=>({trackBy:h((()=>"function"==typeof l.trackBy?l.trackBy:"string"==typeof l.trackBy?e=>l.trackBy.split(".").reduce(((e,l)=>e[l]),e):e=>e)),labelBy:h((()=>"function"==typeof l.labelBy?l.labelBy:"string"==typeof l.labelBy?e=>l.labelBy.split(".").reduce(((e,l)=>e[l]),e):e=>e)),valueBy:h((()=>"function"==typeof l.valueBy?l.valueBy:"string"==typeof l.valueBy?e=>l.valueBy.split(".").reduce(((e,l)=>e[l]),e):e=>e)),min:h((()=>l.multiple?l.min:Math.min(1,l.min))),max:h((()=>l.multiple?l.max:1)),options:g(l.options)||m(l.options)?y(l,"options"):e(l.options)}))(a),r=e(null),c=e(null),p=e(!1);f((()=>p.value),(()=>{p.value?(t.emit("opened"),a.searchable&&t.emit("search:focus"),a.searchable?c.value&&c.value._.refs.input!==document.activeElement&&c.value._.refs.input.focus():!1===a.searchable&&r.value.focus()):(c.value&&c.value._.refs.input===document.activeElement&&c.value._.refs.input.blur(),r.value&&r.value===document.activeElement&&r.value.blur(),a.searchable&&t.emit("search:blur"),t.emit("closed"))}));const v=()=>{a.disabled||(p.value=!0)},I=()=>{p.value=!1};f((()=>a.disabled),(()=>I()));const B=e(null),M=(w=B,V=()=>a.modelValue,k=e("0"),f(V,A=function(){setTimeout((function(){w.value&&(k.value=window.getComputedStyle(w.value).height)}))}),l(A),k);var w,V,k,A;const x=h((()=>a.searchable&&a.multiple&&a.taggable?"22px":"0px")),F=h((()=>parseFloat(M.value)+parseFloat(x.value)+"px")),S=e(""),O=e([]),T=()=>{if(a.multiple){if(!1===Array.isArray(a.modelValue))return!1;if(O.value.length!==a.modelValue.length)return!1;if(Object.keys(O.value).some((e=>O.value[e]!==D(d.value,a.modelValue[e],{valueBy:o.value}))))return!1}else{if(0===O.value.length&&null!==a.modelValue)return!1;if(1===O.value.length&&null===a.modelValue)return!1;if(O.value[0]!==D(d.value,a.modelValue,{valueBy:o.value}))return!1}return!0},E=()=>{if(T())return;O.value=[];const e=a.multiple?a.modelValue:null===a.modelValue?[]:[a.modelValue];for(const l of e){const e=D(d.value,l,{valueBy:o.value});!1!==C(d.value,e,{valueBy:o.value})&&(O.value=L(O.value,e,{max:1/0,valueBy:o.value}))}};E(),f((()=>a.modelValue),(()=>{E()}),{deep:!0});f((()=>O),(()=>{(()=>{if(T())return;const e=O.value.map((e=>o.value(e)));a.multiple?t.emit("update:modelValue",e):e.length?t.emit("update:modelValue",e[0]):t.emit("update:modelValue",null)})()}),{deep:!0}),f((()=>d.value),(()=>{const e=new Set(O.value.map((e=>o.value(e))));O.value=d.value.filter((l=>e.has(o.value(l))))}),{deep:!0});const z=(e,l)=>{if(!a.disabled){if(l=l.originalOption,C(O.value,l,{valueBy:o.value}))O.value=N(O.value,l,{min:i.value,valueBy:o.value}),t.emit("removed",l);else{if(!a.multiple){const e=O.value[0];O.value=N(O.value,O.value[0],{min:0,valueBy:o.value}),t.emit("removed",e)}O.value=L(O.value,l,{max:s.value,valueBy:o.value}),t.emit("selected",l)}!0===a.closeOnSelect&&(p.value=!1),!0===a.clearOnSelect&&S.value&&(c.value._.refs.input.value="",c.value._.refs.input.dispatchEvent(new Event("input")),c.value._.refs.input.dispatchEvent(new Event("change")))}},j=h((()=>{const e=new Set(O.value.map((e=>o.value(e)))),l=null!==a.visibleOptions?new Set(a.visibleOptions.map((e=>o.value(e)))):new Set(d.value.map((e=>o.value(e))));return d.value.map((t=>({key:n.value(t),label:u.value(t),selected:e.has(o.value(t)),visible:l.has(o.value(t)),hidden:!!a.hideSelected&&e.has(o.value(t)),originalOption:t})))})),_=h((()=>({isFocusing:p.value,visibleLength:j.value.filter((e=>e.visible&&!1===e.hidden)).length,notSelectedLength:d.value.length-j.value.filter((e=>e.selected)).length,selectedLength:j.value.filter((e=>e.selected)).length,totalLength:d.value.length})));b("dataAttrs",_);const P=h((()=>{const e=j.value.filter((e=>e.selected));return a.multiple?0===e.length?a.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?a.placeholder:e[0].label}));return{isFocusing:p,wrapper:r,input:c,focus:v,blur:I,toggle:()=>{p.value?I():v()},header:B,headerAndInputHeight:F,searchingInputValue:S,handleInputForInput:e=>{t.emit("search:input",e)},handleChangeForInput:e=>{t.emit("search:change",e)},handleFocusForInput:e=>{v()},handleBlurForInput:e=>{I()},handleClickForDropdown:(e,l)=>z(0,l),handleClickForTag:(e,l)=>z(0,l),optionsWithInfo:j,addOrRemoveOption:z,dataAttrs:_,innerPlaceholder:P}},components:{VInput:V,VTags:A,VDropdown:x}};const O={ref:"header",class:"vue-select-header"},T={key:0,class:"vue-input"},E={class:"icon loading"},z=o("div",null,null,-1),j=o("div",null,null,-1),_=o("div",null,null,-1),P={class:"icon loading"},Z=o("div",null,null,-1),W=o("div",null,null,-1),q=o("div",null,null,-1);S.render=function(e,l,a,i,d,c){const h=I("v-tags"),g=I("v-input"),m=I("v-dropdown");return t(),n("div",{ref:"wrapper",class:["vue-select",{disabled:a.disabled}],tabindex:i.isFocusing?-1:a.tabindex,onFocus:l[9]||(l[9]=(...e)=>i.focus&&i.focus(...e)),onBlur:l[10]||(l[10]=()=>!a.searchable&&i.blur()),"data-is-focusing":i.dataAttrs.isFocusing,"data-visible-length":i.dataAttrs.visibleLength,"data-not-selected-length":i.dataAttrs.notSelectedLength,"data-selected-length":i.dataAttrs.selectedLength,"data-total-length":i.dataAttrs.totalLength},[o("div",O,[a.multiple&&a.taggable&&0===a.modelValue.length||!1===a.searchable&&!1===a.taggable?(t(),n("div",T,[o("input",{name:"{inputName}",placeholder:i.innerPlaceholder,readonly:"",onClick:l[1]||(l[1]=(...e)=>i.focus&&i.focus(...e))},null,8,["placeholder"])])):v("v-if",!0),a.multiple&&a.taggable?(t(),n(r,{key:1},[o(h,{modelValue:i.optionsWithInfo,"collapse-tags":a.collapseTags,tabindex:"-1",onClick:i.focus},{default:B((({option:l})=>[u(e.$slots,"tag",{option:l.originalOption},(()=>[o("span",null,p(l.label),1),o("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:s((()=>i.addOrRemoveOption(e.$event,l)),["prevent","stop"])},null,8,["onClick"])]))])),_:1},8,["modelValue","collapse-tags","onClick"]),o("span",{class:["icon arrow-downward",{active:i.isFocusing}],onClick:l[2]||(l[2]=(...e)=>i.toggle&&i.toggle(...e)),onMousedown:l[3]||(l[3]=s((()=>{}),["prevent","stop"]))},[u(e.$slots,"icon")],34)],64)):(t(),n(r,{key:2},[a.searchable?(t(),n(g,{key:0,ref:"input",modelValue:i.searchingInputValue,"onUpdate:modelValue":l[4]||(l[4]=e=>i.searchingInputValue=e),disabled:a.disabled,placeholder:i.isFocusing?a.searchPlaceholder:i.innerPlaceholder,onInput:i.handleInputForInput,onChange:i.handleChangeForInput,onFocus:i.handleFocusForInput,onBlur:i.handleBlurForInput,onEscape:i.blur,autofocus:a.autofocus||a.taggable&&a.searchable,tabindex:a.tabindex},null,8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex"])):v("v-if",!0),M(o("span",E,[z,j,_],512),[[w,a.loading]]),M(o("span",{class:["icon arrow-downward",{active:i.isFocusing}],onClick:l[5]||(l[5]=(...e)=>i.toggle&&i.toggle(...e)),onMousedown:l[6]||(l[6]=s((()=>{}),["prevent","stop"]))},[u(e.$slots,"icon")],34),[[w,!1===a.loading]])],64))],512),a.multiple&&a.taggable&&a.searchable?M((t(),n(g,{key:0,ref:"input",modelValue:i.searchingInputValue,"onUpdate:modelValue":l[7]||(l[7]=e=>i.searchingInputValue=e),disabled:a.disabled,placeholder:a.searchPlaceholder,onInput:i.handleInputForInput,onChange:i.handleChangeForInput,onFocus:i.handleFocusForInput,onBlur:i.handleBlurForInput,onEscape:i.blur,tabindex:a.tabindex,autofocus:a.autofocus||a.taggable&&a.searchable},{append:B((()=>[M(o("span",P,[Z,W,q],512),[[w,a.loading]])])),_:1},8,["modelValue","disabled","placeholder","onInput","onChange","onFocus","onBlur","onEscape","tabindex","autofocus"])),[[w,i.isFocusing]]):v("v-if",!0),M(o(m,{modelValue:i.optionsWithInfo,"onUpdate:modelValue":l[8]||(l[8]=e=>i.optionsWithInfo=e),onClick:i.handleClickForDropdown,"header-height":i.headerAndInputHeight},{default:B((({option:l})=>[u(e.$slots,"dropdown-item",{option:l.originalOption},(()=>[o("span",null,p(l.label),1)]))])),_:1},8,["modelValue","onClick","header-height"]),[[w,i.isFocusing]])],42,["tabindex","data-is-focusing","data-visible-length","data-not-selected-length","data-selected-length","data-total-length"])},S.__file="src/index.vue";export default S;
