(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TbC0:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),o=function(){return function(){}}(),u=t("oBZk"),i=t("ZZ/e"),s=(t("mrSG"),t("K9Ia")),r=t("0/uQ"),c=t("6blF"),a=t("2WpN"),p=function(){return function(){this.animated=!1,this.color=null,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="arrow-round-back",this.cancelButtonText="Cancel",this.clearIcon="close-circle",this.clearInput=!1,this.clearOnEdit=!1,this.debounce=250,this.mode="md",this.noItems="",this.placeholder="Search",this.searchIcon="search",this.showCancelButton=!1,this.spellcheck="off",this.type="search",this.value=""}}(),h=function(){function l(){this.disabled=!1,this.exclude=[],this.frontIcon=!1,this.hideListOnSelection=!0,this.location="auto",this.multi=!1,this.name="",this.options=new p,this.removeButtonClasses="",this.removeButtonColor="primary",this.removeButtonIcon="close-circle",this.removeButtonSlot="end",this.removeDuplicateSuggestions=!0,this.onTouchedCallback=!1,this.onChangeCallback=!1,this.isLoading=!1,this.showListChanged=!1,this.autoBlur=new e.r,this.autoFocus=new e.r,this.blur=new e.r,this.focus=new e.r,this.ionAutoInput=new e.r,this.itemsChange=new e.r,this.itemsHidden=new e.r,this.itemRemoved=new e.r,this.itemSelected=new e.r,this.itemsShown=new e.r,this.modelChange=new e.r,this.keyword="",this.suggestions=[],this._showList=!1,this.options=new p,this.defaultOpts=new p,this.selected=[]}return Object.defineProperty(l.prototype,"model",{get:function(){var l=this.selected;return this.multi||void 0===this.selected.length||(l=0===this.selected.length?null:this.selected[0]),l},set:function(l){void 0!==l&&(this.selected=l,this.keyword=this.getLabel(l))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"eager",{set:function(l){l&&this.getItems(null,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"showList",{get:function(){return this._showList},set:function(l){this._showList!==l&&(this._showList=l,this.showListChanged=!0)},enumerable:!0,configurable:!0}),l.prototype.ngAfterViewChecked=function(){this.showListChanged&&(this.showListChanged=!1,this.showList?this.itemsShown.emit():this.itemsHidden.emit())},l.prototype.documentClickHandler=function(l){(this.searchbarElem&&this.searchbarElem.nativeElement&&!this.searchbarElem.nativeElement.contains(l.target)||!this.inputElem&&this.inputElem.nativeElement&&this.inputElem.nativeElement.contains(l.target))&&this.hideItemList()},l.prototype.getFormValue=function(l){if(null==l||"function"==typeof this.dataProvider)return null;var n=null==this.dataProvider.formValueAttribute?this.dataProvider.labelAttribute:this.dataProvider.formValueAttribute;return"object"==typeof l&&n?l[n]:l},l.prototype._getPosition=function(l){for(var n=0,t=0;l;){if("BODY"===l.tagName){var e=l.scrollLeft||document.documentElement.scrollLeft,o=l.scrollTop||document.documentElement.scrollTop;n+=l.offsetLeft-e+l.clientLeft,t+=l.offsetTop-o+l.clientTop}else n+=l.offsetLeft-l.scrollLeft+l.clientLeft,t+=l.offsetTop-l.scrollTop+l.clientTop;l=l.offsetParent}return{x:n,y:t}},l.prototype.clearValue=function(l){void 0===l&&(l=!1),this.keyword="",this.selection=null,this.formValue=null,l&&this.hideItemList()},l.prototype.getItems=function(l,n){var t=this;this.promise&&clearTimeout(this.promise),this.promise=setTimeout(function(){var e;l&&(t.keyword=l.detail.target.value),t.showResultsFirst&&""===t.keyword.trim()&&(t.keyword=""),(e="function"==typeof t.dataProvider?t.dataProvider(t.keyword):t.dataProvider.getResults(t.keyword))instanceof s.a&&(e=e.asObservable()),e instanceof Promise&&(e=Object(r.a)(e)),e instanceof c.a?(t.isLoading=!0,e.pipe(Object(a.a)(function(){t.isLoading=!1})).subscribe(function(l){t.setSuggestions(l,n)},function(l){return console.error(l)})):t.setSuggestions(e,n),t.ionAutoInput.emit(t.keyword)},this.options.debounce)},l.prototype.getLabel=function(l){if(null==l||"function"==typeof this.dataProvider)return"";var n=this.dataProvider.labelAttribute,t=l;return this.dataProvider.getItemLabel&&(t=this.dataProvider.getItemLabel(t)),"object"==typeof t&&n?t[n]||"":t||""},l.prototype.getSelection=function(){return this.multi?this.selection:this.selected},l.prototype.getStyle=function(){var l=this.location;if("auto"===this.location){var n=this._getPosition(this.searchbarElem.nativeElement).y;l=n>window.innerHeight-n?"top":"bottom"}return"bottom"===l?{}:{bottom:"37px"}},l.prototype.getValue=function(){return this.formValue},l.prototype.handleTap=function(l){(this.showResultsFirst||this.keyword.length>0)&&this.getItems()},l.prototype.handleSelectTap=function(l,n){return this.selectItem(n),l.srcEvent?(l.srcEvent.stopPropagation&&l.srcEvent.stopPropagation(),l.srcEvent.preventDefault&&l.srcEvent.preventDefault()):l.preventDefault&&l.preventDefault(),!1},l.prototype.hideItemList=function(){this.showList=this.alwaysShowList},l.prototype.onFocus=function(l){this.getItems(),l=this._reflectName(l),this.autoFocus.emit(l),this.focus.emit(l)},l.prototype.onBlur=function(l){l=this._reflectName(l),this.autoBlur.emit(l),this.blur.emit(l)},l.prototype._reflectName=function(l){return"object"==typeof l.srcElement.attributes["ng-reflect-name"]&&(l.srcElement.name=l.srcElement.attributes["ng-reflect-name"].value),l},l.prototype.registerOnChange=function(l){this.onChangeCallback=l},l.prototype.registerOnTouched=function(l){this.onTouchedCallback=l},l.prototype.removeDuplicates=function(l){for(var n=this.selected?this.selected.length:0,t=l.length,e=0;e<n;e++)for(var o=this.getLabel(this.selected[e]),u=0;u<t;u++)o===this.getLabel(l[u])&&l.splice(u,1);return l},l.prototype.removeExcluded=function(l){for(var n=this.exclude.length,t=this.suggestions.length,e=0;e<n;e++)for(var o=this.getLabel(this.exclude[e]),u=0;u<t;u++)o===this.getLabel(l[u])&&l.splice(u,1);return l},l.prototype.removeItem=function(l,n){for(var t=this.selected?this.selected.length:0,e=0;e<t;e++){var o=this.selected[e];this.getLabel(l)===this.getLabel(o)&&this.selected.splice(e,1)}(n=void 0===n||n)&&(this.itemRemoved.emit(l),this.itemsChange.emit(this.selected)),this.modelChange.emit(this.selected)},l.prototype.selectItem=function(l){this.keyword=this.getLabel(l),this.formValue=this.getFormValue(l),this.hideItemList(),this.updateModel(this.formValue),this.hideListOnSelection&&this.hideItemList(),this.multi?(this.clearValue(),this.selected.push(l),this.itemsChange.emit(this.selected)):(this.selection=l,this.selected=[l],this.itemsChange.emit(l)),this.itemSelected.emit(l),this.modelChange.emit(this.selected)},l.prototype.setFocus=function(){this.searchbarElem&&this.searchbarElem.nativeElement.setFocus()},l.prototype.setSuggestions=function(l,n){this.removeDuplicateSuggestions&&(l=this.removeDuplicates(l),l=this.removeExcluded(l)),this.suggestions=l,(n||void 0===n)&&this.showItemList()},l.prototype.setValue=function(l){this.formValue=this.getFormValue(l),this.keyword=this.getLabel(l)},l.prototype.showItemList=function(){this.showList=!0},l.prototype.updateModel=function(l){l!==this.formValue&&(this.formValue=l,this.selected=this.multi?[]:null),this.onChangeCallback&&this.onChangeCallback(this.formValue),this.modelChange.emit(this.selected)},l.prototype.writeValue=function(l){l!==this.selection&&(this.selection=l||null,this.formValue=this.getFormValue(this.selection),this.keyword=this.getLabel(this.selection))},l}(),d=function(){function l(){}return l.prototype.transform=function(l,n){if(!n)return l;var t=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return l.replace(new RegExp(t,"gi"),function(l){return l.bold()})},l}(),b=function(){function l(){}var n;return n=l,l.forRoot=function(){return{ngModule:n,providers:[]}},l}(),m=t("Ip0R"),f=t("gIcY"),g=e.Bb({encapsulation:2,styles:[],data:{}});function C(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"ion-icon",[["color","primary"]],[[8,"slot",0]],null,null,u.D,u.h)),e.Cb(1,49152,null,0,i.z,[e.j,e.p,e.H],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){l(n,1,0,"primary",n.component.frontIcon)},function(l,n){l(n,0,0,"start")})}function v(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"ion-icon",[],[[8,"slot",0]],null,null,u.D,u.h)),e.Cb(1,49152,null,0,i.z,[e.j,e.p,e.H],{name:[0,"name"]},null)],function(l,n){l(n,1,0,n.component.removeButtonIcon)},function(l,n){l(n,0,0,n.component.removeButtonSlot)})}function y(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,9,"div",[["class","selected-items"]],null,null,null,null,null)),(l()(),e.Db(1,0,null,null,8,"ion-chip",[],[[8,"className",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.removeItem(l.context.$implicit)&&e),e},u.z,u.d)),e.Cb(2,49152,null,0,i.p,[e.j,e.p,e.H],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),e.sb(16777216,null,0,1,null,C)),e.Cb(4,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.Db(5,0,null,0,2,"ion-label",[],null,null,null,u.I,u.m)),e.Cb(6,49152,null,0,i.K,[e.j,e.p,e.H],null,null),(l()(),e.Wb(7,0,["",""])),(l()(),e.sb(16777216,null,0,1,null,v)),e.Cb(9,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.removeButtonColor,!0),l(n,4,0,t.frontIcon),l(n,9,0,t.removeButtonIcon)},function(l,n){var t=n.component;l(n,1,0,e.Hb(1,"",t.removeButtonClasses,"")),l(n,7,0,t.getLabel(n.context.$implicit))})}function I(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.sb(16777216,null,null,1,null,y)),e.Cb(2,278528,null,0,m.i,[e.Y,e.U,e.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.selected)},null)}function w(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),e.Sb(1,2)],null,function(l,n){var t=e.Xb(n,0,0,l(n,1,0,e.Pb(n.parent,0),n.context.attrs.label,n.context.attrs.keyword));l(n,0,0,t)})}function k(l){return e.Yb(0,[(l()(),e.sb(0,null,null,0))],null,null)}function D(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,4,"li",[],null,[[null,"click"],[null,"tap"]],function(l,n,t){var e=!0,o=l.component;return"click"===n&&(e=!1!==o.handleSelectTap(t,l.context.$implicit)&&e),"tap"===n&&(e=!1!==o.handleSelectTap(t,l.context.$implicit)&&e),e},null,null)),(l()(),e.sb(16777216,null,null,3,null,k)),e.Cb(2,540672,null,0,m.n,[e.Y],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),e.Rb(3,{data:0,label:1,keyword:2,formValue:3,labelAttribute:4,formValueAttribute:5}),e.Rb(4,{attrs:0})],function(l,n){var t=n.component,o=l(n,4,0,l(n,3,0,n.context.$implicit,t.getLabel(n.context.$implicit),t.keyword,t.getFormValue(n.context.$implicit),t.getLabel(n.context.$implicit),t.getFormValue(n.context.$implicit)));l(n,2,0,o,t.template||e.Pb(n.parent.parent,25))},null)}function j(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,4,"ul",[],null,null,null,null,null)),e.Tb(512,null,m.u,m.v,[e.p,e.A,e.M]),e.Cb(2,278528,null,0,m.m,[m.u],{ngStyle:[0,"ngStyle"]},null),(l()(),e.sb(16777216,null,null,1,null,D)),e.Cb(4,278528,null,0,m.i,[e.Y,e.U,e.z],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,2,0,t.getStyle()),l(n,4,0,t.suggestions)},null)}function B(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Wb(1,null,[" ","\n"]))],null,function(l,n){l(n,1,0,n.component.options.noItems)})}function P(l){return e.Yb(0,[e.Qb(0,d,[]),e.Ub(671088640,1,{searchbarElem:0}),e.Ub(671088640,2,{inputElem:0}),(l()(),e.sb(16777216,null,null,1,null,I)),e.Cb(4,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.Db(5,0,[[2,0]],null,9,"ion-input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"tap"],[null,"ngModelChange"],[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==e.Pb(l,9)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==e.Pb(l,9)._handleInputEvent(t.target)&&o),"keyup"===n&&(o=!1!==u.getItems(t)&&o),"tap"===n&&(o=!1!==u.handleTap(t)&&o),"ngModelChange"===n&&(o=!1!==(u.keyword=t)&&o),"ngModelChange"===n&&(o=!1!==u.updateModel(t)&&o),"ionFocus"===n&&(o=!1!==u.onFocus(t)&&o),"ionBlur"===n&&(o=!1!==u.onBlur(t)&&o),o},u.F,u.j)),e.Tb(512,null,m.s,m.t,[e.z,e.A,e.p,e.M]),e.Cb(7,278528,null,0,m.h,[m.s],{ngClass:[0,"ngClass"]},null),e.Rb(8,{hidden:0,loading:1}),e.Cb(9,16384,null,0,i.Ib,[e.p],null,null),e.Tb(1024,null,f.b,function(l){return[l]},[i.Ib]),e.Cb(11,671744,null,0,f.e,[[8,null],[8,null],[8,null],[6,f.b]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Tb(2048,null,f.c,null,[f.e]),e.Cb(13,16384,null,0,f.d,[[4,f.c]],null,null),e.Cb(14,49152,[["inputElem",4]],0,i.D,[e.j,e.p,e.H],{clearInput:[0,"clearInput"],clearOnEdit:[1,"clearOnEdit"],color:[2,"color"],disabled:[3,"disabled"],mode:[4,"mode"],name:[5,"name"],placeholder:[6,"placeholder"],type:[7,"type"]},null),(l()(),e.Db(15,0,[[1,0]],null,9,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionInput"],[null,"tap"],[null,"ngModelChange"],[null,"ionClear"],[null,"ionFocus"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==e.Pb(l,19)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==e.Pb(l,19)._handleInputEvent(t.target)&&o),"ionInput"===n&&(o=!1!==u.getItems(t)&&o),"tap"===n&&(o=!1!==u.handleTap(t)&&o),"ngModelChange"===n&&(o=!1!==(u.keyword=t)&&o),"ngModelChange"===n&&(o=!1!==u.updateModel(t)&&o),"ionClear"===n&&(o=!1!==u.clearValue(!0)&&o),"ionFocus"===n&&(o=!1!==u.onFocus(t)&&o),"ionBlur"===n&&(o=!1!==u.onBlur(t)&&o),o},u.L,u.p)),e.Tb(512,null,m.s,m.t,[e.z,e.A,e.p,e.M]),e.Cb(17,278528,null,0,m.h,[m.s],{ngClass:[0,"ngClass"]},null),e.Rb(18,{hidden:0,loading:1,disabled:2}),e.Cb(19,16384,null,0,i.Ib,[e.p],null,null),e.Tb(1024,null,f.b,function(l){return[l]},[i.Ib]),e.Cb(21,671744,null,0,f.e,[[8,null],[8,null],[8,null],[6,f.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Tb(2048,null,f.c,null,[f.e]),e.Cb(23,16384,null,0,f.d,[[4,f.c]],null,null),e.Cb(24,49152,[["searchbarElem",4]],0,i.hb,[e.j,e.p,e.H],{animated:[0,"animated"],autocomplete:[1,"autocomplete"],autocorrect:[2,"autocorrect"],cancelButtonIcon:[3,"cancelButtonIcon"],cancelButtonText:[4,"cancelButtonText"],clearIcon:[5,"clearIcon"],color:[6,"color"],debounce:[7,"debounce"],mode:[8,"mode"],placeholder:[9,"placeholder"],searchIcon:[10,"searchIcon"],showCancelButton:[11,"showCancelButton"],spellcheck:[12,"spellcheck"],type:[13,"type"]},null),(l()(),e.sb(0,[["defaultTemplate",2]],null,0,null,w)),(l()(),e.sb(16777216,null,null,1,null,j)),e.Cb(27,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(16777216,null,null,1,null,B)),e.Cb(29,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.multi);var e=l(n,8,0,!t.useIonInput,t.isLoading);l(n,7,0,e),l(n,11,0,t.name,t.disabled,t.keyword),l(n,14,0,null==t.options.clearInput?t.defaultOpts.clearInput:t.options.clearInput,null==t.options.clearOnEdit?t.defaultOpts.clearOnEdit:t.options.clearOnEdit,null==t.options.color?null:t.options.color,t.disabled,null==t.options.mode?t.defaultOpts.mode:t.options.mode,t.name,null==t.options.placeholder?t.defaultOpts.placeholder:t.options.placeholder,null==t.options.type?t.defaultOpts.type:t.options.type);var o=l(n,18,0,t.useIonInput,t.isLoading,t.disabled);l(n,17,0,o),l(n,21,0,t.name,t.keyword),l(n,24,1,[null==t.options.animated?t.defaultOpts.animated:t.options.animated,null==t.options.autocomplete?t.defaultOpts.autocomplete:t.options.autocomplete,null==t.options.autocorrect?t.defaultOpts.autocorrect:t.options.autocorrect,null==t.options.cancelButtonIcon?t.defaultOpts.cancelButtonIcon:t.options.cancelButtonIcon,null==t.options.cancelButtonText?t.defaultOpts.cancelButtonText:t.options.cancelButtonText,null==t.options.clearIcon?t.defaultOpts.clearIcon:t.options.clearIcon,null==t.options.color?null:t.options.color,null==t.options.debounce?t.defaultOpts.debounce:t.options.debounce,null==t.options.mode?t.defaultOpts.mode:t.options.mode,null==t.options.placeholder?t.defaultOpts.placeholder:t.options.placeholder,null==t.options.searchIcon?t.defaultOpts.searchIcon:t.options.searchIcon,null==t.options.showCancelButton?t.defaultOpts.showCancelButton:t.options.showCancelButton,null==t.options.spellcheck?t.defaultOpts.spellcheck:t.options.spellcheck,null==t.options.type?t.defaultOpts.type:t.options.type]),l(n,27,0,!t.disabled&&t.suggestions.length>0&&t.showList),l(n,29,0,0==t.suggestions.length&&t.showList&&t.options.noItems)},function(l,n){l(n,5,0,e.Pb(n,13).ngClassUntouched,e.Pb(n,13).ngClassTouched,e.Pb(n,13).ngClassPristine,e.Pb(n,13).ngClassDirty,e.Pb(n,13).ngClassValid,e.Pb(n,13).ngClassInvalid,e.Pb(n,13).ngClassPending),l(n,15,0,e.Pb(n,23).ngClassUntouched,e.Pb(n,23).ngClassTouched,e.Pb(n,23).ngClassPristine,e.Pb(n,23).ngClassDirty,e.Pb(n,23).ngClassValid,e.Pb(n,23).ngClassInvalid,e.Pb(n,23).ngClassPending)})}var L=t("F/XL"),S=t("67Y/"),H=function(){function l(l){this.http=l,this.labelAttribute="name",this.countries=[]}return l.prototype.getResults=function(l){var n=this;return(0===this.countries.length?this.http.get("https://restcountries.eu/rest/v2/all").pipe(Object(S.a)(function(l){return l&&(n.countries=l),n.countries})):Object(L.a)(this.countries)).pipe(Object(S.a)(function(n){return n.filter(function(n){return n.name.toLowerCase().startsWith(l.toLowerCase())})}))},l}(),O=function(){function l(l){this.provider=l,this.selected="",this.options=new p,this.options.autocomplete="on",this.options.debounce=750,this.options.placeholder="Type text to search..",this.options.type="add-friend.svg"}return l.prototype.itemSelected=function(l){console.log("Item selected:"+l[this.provider.labelAttribute])},l}(),E=e.Bb({encapsulation:0,styles:[[".flag[_ngcontent-%COMP%]{width:50px;height:50px}"]],data:{}});function T(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,7,"ion-item",[],null,null,null,u.H,u.k)),e.Cb(1,49152,null,0,i.E,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,1,"ion-img",[["class","flag"]],[[8,"slot",0]],null,null,u.E,u.i)),e.Cb(3,49152,null,0,i.A,[e.j,e.p,e.H],{src:[0,"src"]},null),(l()(),e.Db(4,0,null,0,3,"ion-text",[],null,null,null,u.P,u.t)),e.Cb(5,49152,null,0,i.ub,[e.j,e.p,e.H],null,null),(l()(),e.Wb(6,0,[" "," (",") "])),e.Sb(7,2)],function(l,n){l(n,3,0,n.context.attrs.data.flag)},function(l,n){l(n,2,0,"start");var t=e.Xb(n,6,0,l(n,7,0,e.Pb(n.parent,0),n.context.attrs.data.name,n.context.attrs.keyword));l(n,6,0,t,n.context.attrs.data.nativeName)})}function x(l){return e.Yb(0,[e.Qb(0,d,[]),(l()(),e.sb(0,[["withFlags",2]],null,0,null,T)),(l()(),e.Db(2,0,null,null,2,"ion-auto-complete",[],null,[[null,"modelChange"],[null,"itemSelected"],["document","click"]],function(l,n,t){var o=!0,u=l.component;return"document:click"===n&&(o=!1!==e.Pb(l,4).documentClickHandler(t)&&o),"modelChange"===n&&(o=!1!==(u.selected=t)&&o),"itemSelected"===n&&(o=!1!==u.itemSelected(t)&&o),o},P,g)),e.Tb(5120,null,f.b,function(l){return[l]},[h]),e.Cb(4,8437760,null,0,h,[],{dataProvider:[0,"dataProvider"],disabled:[1,"disabled"],multi:[2,"multi"],template:[3,"template"],model:[4,"model"],eager:[5,"eager"]},{modelChange:"modelChange",itemSelected:"itemSelected"})],function(l,n){var t=n.component;l(n,4,0,t.provider,!1,!1,e.Pb(n,1),t.selected,!0)},null)}function Y(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"custom-template",[],null,null,null,x,E)),e.Cb(1,49152,null,0,O,[H],null,null)],null,null)}var _=e.zb("custom-template",O,Y,{},{},[]),F=function(){function l(){this.labelAttribute="full_name",this.objects=[{first_name:"Dominic",last_name:"Elliot",full_name:"Dominic Elliot"},{first_name:"Duke",last_name:"Ellington",full_name:"Duke Ellington"},{first_name:"Jeremy",last_name:"Quick",full_name:"Jeremy Quick"},{first_name:"Matt",last_name:"Smith",full_name:"Matt Smith"},{first_name:"Matthew",last_name:"Drake",full_name:"Matthew Drake"},{first_name:"Yu",last_name:"Lee",full_name:"Yu Lee"},{first_name:"Zach",last_name:"Smith",full_name:"Zach Smith"}]}return l.prototype.getResults=function(l){var n=this;return l=l.toLowerCase(),this.objects.filter(function(t){return t[n.labelAttribute].toLowerCase().includes(l)})},l}(),N=function(){return function(l){this.provider=l,this.selected=[],this.options=new p,this.options.autocomplete="on",this.options.debounce=750,this.options.placeholder="Filter and select multiple..",this.options.searchIcon="assets/icons/add-user.svg",this.options.type="search"}}(),A=e.Bb({encapsulation:0,styles:[[""]],data:{}});function M(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,2,"ion-auto-complete",[],null,[[null,"modelChange"],["document","click"]],function(l,n,t){var o=!0,u=l.component;return"document:click"===n&&(o=!1!==e.Pb(l,2).documentClickHandler(t)&&o),"modelChange"===n&&(o=!1!==(u.selected=t)&&o),o},P,g)),e.Tb(5120,null,f.b,function(l){return[l]},[h]),e.Cb(2,8437760,null,0,h,[],{dataProvider:[0,"dataProvider"],disabled:[1,"disabled"],multi:[2,"multi"],options:[3,"options"],removeButtonColor:[4,"removeButtonColor"],removeButtonIcon:[5,"removeButtonIcon"],model:[6,"model"]},{modelChange:"modelChange"})],function(l,n){var t=n.component;l(n,2,0,t.provider,!1,!0,t.options,"dark","assets/icons/clear.svg",t.selected)},null)}function V(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"multi-function",[],null,null,null,M,A)),e.Cb(1,49152,null,0,N,[F],null,null)],null,null)}var z=e.zb("multi-function",N,V,{},{},[]),U=t("pMnS"),R=function(){return function(l){this.provider=l,this.selected="",this.options=new p,this.options.autocomplete="on",this.options.cancelButtonIcon="assets/icons/clear.svg",this.options.clearIcon="assets/icons/clear.svg",this.options.debounce=750,this.options.placeholder="Type text to search..",this.options.searchIcon="assets/icons/add-user.svg",this.options.type="search"}}(),$=e.Bb({encapsulation:0,styles:[[""]],data:{}});function W(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,2,"ion-auto-complete",[],null,[[null,"modelChange"],["document","click"]],function(l,n,t){var o=!0,u=l.component;return"document:click"===n&&(o=!1!==e.Pb(l,2).documentClickHandler(t)&&o),"modelChange"===n&&(o=!1!==(u.selected=t)&&o),o},P,g)),e.Tb(5120,null,f.b,function(l){return[l]},[h]),e.Cb(2,8437760,null,0,h,[],{dataProvider:[0,"dataProvider"],disabled:[1,"disabled"],multi:[2,"multi"],options:[3,"options"],removeButtonColor:[4,"removeButtonColor"],removeButtonIcon:[5,"removeButtonIcon"],model:[6,"model"]},{modelChange:"modelChange"})],function(l,n){var t=n.component;l(n,2,0,t.provider,!1,!1,t.options,"dark","assets/icons/clear.svg",t.selected)},null)}function q(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"simple-function",[],null,null,null,W,$)),e.Cb(1,49152,null,0,R,[F],null,null)],null,null)}var K=e.zb("simple-function",R,q,{},{},[]),Q=function(){function l(l){this.provider=l,this.selected="",this.options=new p,this.options.autocomplete="on",this.options.debounce=750,this.options.placeholder="Type text to search..",this.options.type="add-friend.svg"}return l.prototype.itemSelected=function(l){console.log("Item selected:"+l[this.provider.labelAttribute])},l}(),Z=e.Bb({encapsulation:0,styles:[[""]],data:{}});function G(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,2,"ion-auto-complete",[],null,[[null,"modelChange"],[null,"itemSelected"],["document","click"]],function(l,n,t){var o=!0,u=l.component;return"document:click"===n&&(o=!1!==e.Pb(l,2).documentClickHandler(t)&&o),"modelChange"===n&&(o=!1!==(u.selected=t)&&o),"itemSelected"===n&&(o=!1!==u.itemSelected(t)&&o),o},P,g)),e.Tb(5120,null,f.b,function(l){return[l]},[h]),e.Cb(2,8437760,null,0,h,[],{dataProvider:[0,"dataProvider"],disabled:[1,"disabled"],multi:[2,"multi"],removeButtonColor:[3,"removeButtonColor"],model:[4,"model"]},{modelChange:"modelChange",itemSelected:"itemSelected"})],function(l,n){var t=n.component;l(n,2,0,t.provider,!1,!1,"dark",t.selected)},null)}function J(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"simple-service",[],null,null,null,G,Z)),e.Cb(1,49152,null,0,Q,[H],null,null)],null,null)}var X=e.zb("simple-service",Q,J,{},{},[]),ll=function(){function l(l,n){this.route=l,this.router=n,this.segments=[{key:"simple-function",label:"Simple Function"},{key:"simple-service",label:"Data Provider"},{key:"multi-function",label:"Multi Select"},{key:"custom-template",label:"Custom Template"}],this.selectedSegment=this.segments[0].key}return l.prototype.ngOnInit=function(){var l=this;this.route.fragment.subscribe(function(n){l.setSegment(n)})},l.prototype.onClickSegment=function(l){l.detail&&"string"==typeof l.detail.value&&this.setSegment(l.detail.value)},l.prototype.setSegment=function(l){"string"==typeof l&&(l=l.toLowerCase(),this.segments.some(function(n){return n.key===l})&&(this.selectedSegment=l,this.router.navigate([],{fragment:l}).then()))},l}(),nl=t("ZYCi"),tl=e.Bb({encapsulation:0,styles:[[""]],data:{}});function el(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,4,"ion-segment-button",[],null,null,null,u.M,u.r)),e.Cb(1,49152,null,0,i.jb,[e.j,e.p,e.H],{checked:[0,"checked"],value:[1,"value"]},null),(l()(),e.Db(2,0,null,0,2,"ion-label",[],null,null,null,u.I,u.m)),e.Cb(3,49152,null,0,i.K,[e.j,e.p,e.H],null,null),(l()(),e.Wb(4,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.key===n.component.selectedSegment,n.context.$implicit.key)},function(l,n){l(n,4,0,n.context.$implicit.label)})}function ol(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,12,"ion-card",[["style","height: 100%;"]],null,null,null,u.y,u.b)),e.Cb(1,49152,null,0,i.j,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,10,"ion-card-content",[],null,null,null,u.x,u.c)),e.Cb(3,49152,null,0,i.k,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,8,"ion-row",[],null,null,null,u.K,u.o)),e.Cb(5,49152,null,0,i.gb,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,2,"ion-col",[["class","label"]],null,null,null,u.A,u.e)),e.Cb(7,49152,null,0,i.q,[e.j,e.p,e.H],null,null),(l()(),e.Wb(-1,0,[" Select Anybody "])),(l()(),e.Db(9,0,null,0,3,"ion-col",[],null,null,null,u.A,u.e)),e.Cb(10,49152,null,0,i.q,[e.j,e.p,e.H],{size:[0,"size"]},null),(l()(),e.Db(11,0,null,0,1,"simple-function",[],null,null,null,W,$)),e.Cb(12,49152,null,0,R,[F],null,null)],function(l,n){l(n,10,0,12)},null)}function ul(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,12,"ion-card",[["style","height: 100%;"]],null,null,null,u.y,u.b)),e.Cb(1,49152,null,0,i.j,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,10,"ion-card-content",[],null,null,null,u.x,u.c)),e.Cb(3,49152,null,0,i.k,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,8,"ion-row",[],null,null,null,u.K,u.o)),e.Cb(5,49152,null,0,i.gb,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,2,"ion-col",[["class","label"]],null,null,null,u.A,u.e)),e.Cb(7,49152,null,0,i.q,[e.j,e.p,e.H],null,null),(l()(),e.Wb(-1,0,[" Select Any Country "])),(l()(),e.Db(9,0,null,0,3,"ion-col",[],null,null,null,u.A,u.e)),e.Cb(10,49152,null,0,i.q,[e.j,e.p,e.H],{size:[0,"size"]},null),(l()(),e.Db(11,0,null,0,1,"simple-service",[],null,null,null,G,Z)),e.Cb(12,49152,null,0,Q,[H],null,null)],function(l,n){l(n,10,0,12)},null)}function il(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,12,"ion-card",[["style","height: 100%;"]],null,null,null,u.y,u.b)),e.Cb(1,49152,null,0,i.j,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,10,"ion-card-content",[],null,null,null,u.x,u.c)),e.Cb(3,49152,null,0,i.k,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,8,"ion-row",[],null,null,null,u.K,u.o)),e.Cb(5,49152,null,0,i.gb,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,2,"ion-col",[["class","label"]],null,null,null,u.A,u.e)),e.Cb(7,49152,null,0,i.q,[e.j,e.p,e.H],null,null),(l()(),e.Wb(-1,0,[" Select Multiple People "])),(l()(),e.Db(9,0,null,0,3,"ion-col",[],null,null,null,u.A,u.e)),e.Cb(10,49152,null,0,i.q,[e.j,e.p,e.H],{size:[0,"size"]},null),(l()(),e.Db(11,0,null,0,1,"multi-function",[],null,null,null,M,A)),e.Cb(12,49152,null,0,N,[F],null,null)],function(l,n){l(n,10,0,12)},null)}function sl(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,12,"ion-card",[["style","height: 100%;"]],null,null,null,u.y,u.b)),e.Cb(1,49152,null,0,i.j,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,10,"ion-card-content",[],null,null,null,u.x,u.c)),e.Cb(3,49152,null,0,i.k,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,8,"ion-row",[],null,null,null,u.K,u.o)),e.Cb(5,49152,null,0,i.gb,[e.j,e.p,e.H],null,null),(l()(),e.Db(6,0,null,0,2,"ion-col",[["class","label"]],null,null,null,u.A,u.e)),e.Cb(7,49152,null,0,i.q,[e.j,e.p,e.H],null,null),(l()(),e.Wb(-1,0,[" Select a Country "])),(l()(),e.Db(9,0,null,0,3,"ion-col",[],null,null,null,u.A,u.e)),e.Cb(10,49152,null,0,i.q,[e.j,e.p,e.H],{size:[0,"size"]},null),(l()(),e.Db(11,0,null,0,1,"custom-template",[],null,null,null,x,E)),e.Cb(12,49152,null,0,O,[H],null,null)],function(l,n){l(n,10,0,12)},null)}function rl(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,6,"ion-header",[],null,null,null,u.C,u.g)),e.Cb(1,49152,null,0,i.y,[e.j,e.p,e.H],null,null),(l()(),e.Db(2,0,null,0,4,"ion-toolbar",[],null,null,null,u.R,u.v)),e.Cb(3,49152,null,0,i.zb,[e.j,e.p,e.H],null,null),(l()(),e.Db(4,0,null,0,2,"ion-title",[],null,null,null,u.Q,u.u)),e.Cb(5,49152,null,0,i.xb,[e.j,e.p,e.H],null,null),(l()(),e.Wb(-1,0,[" Demo: ionic4-auto-complete "])),(l()(),e.Db(7,0,null,null,19,"ion-content",[],null,null,null,u.B,u.f)),e.Cb(8,49152,null,0,i.r,[e.j,e.p,e.H],null,null),(l()(),e.Db(9,0,null,0,17,"ion-list",[["style","height: 100%;"]],null,null,null,u.J,u.n)),e.Cb(10,49152,null,0,i.L,[e.j,e.p,e.H],null,null),(l()(),e.Db(11,0,null,0,5,"ion-segment",[],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,t){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==e.Pb(l,14)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==e.Pb(l,14)._handleChangeEvent(t.target)&&o),"ionChange"===n&&(o=!1!==u.onClickSegment(t)&&o),o},u.N,u.q)),e.Tb(5120,null,f.b,function(l){return[l]},[i.Hb]),e.Cb(13,49152,null,0,i.ib,[e.j,e.p,e.H],null,null),e.Cb(14,16384,null,0,i.Hb,[e.p],null,null),(l()(),e.sb(16777216,null,0,1,null,el)),e.Cb(16,278528,null,0,m.i,[e.Y,e.U,e.z],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Db(17,0,null,0,1,"ion-item-divider",[],null,null,null,u.G,u.l)),e.Cb(18,49152,null,0,i.F,[e.j,e.p,e.H],null,null),(l()(),e.sb(16777216,null,0,1,null,ol)),e.Cb(20,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(16777216,null,0,1,null,ul)),e.Cb(22,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(16777216,null,0,1,null,il)),e.Cb(24,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(16777216,null,0,1,null,sl)),e.Cb(26,16384,null,0,m.j,[e.Y,e.U],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,16,0,t.segments),l(n,20,0,"simple-function"===t.selectedSegment),l(n,22,0,"simple-service"===t.selectedSegment),l(n,24,0,"multi-function"===t.selectedSegment),l(n,26,0,"custom-template"===t.selectedSegment)},null)}function cl(l){return e.Yb(0,[(l()(),e.Db(0,0,null,null,1,"home-page",[],null,null,null,rl,tl)),e.Cb(1,114688,null,0,ll,[nl.a,nl.m],null,null)],function(l,n){l(n,1,0)},null)}var al=e.zb("home-page",ll,cl,{},{},[]),pl=t("t/Na"),hl=function(){return function(){}}(),dl=function(){return function(){}}(),bl=function(){return function(){}}(),ml=function(){return function(){}}();t.d(n,"HomePageModuleNgFactory",function(){return fl});var fl=e.Ab(o,[],function(l){return e.Mb([e.Nb(512,e.m,e.lb,[[8,[_,z,U.a,K,X,al]],[3,e.m],e.F]),e.Nb(4608,m.l,m.k,[e.B,[2,m.x]]),e.Nb(4608,f.g,f.g,[]),e.Nb(4608,i.a,i.a,[e.H,e.g]),e.Nb(4608,i.Db,i.Db,[i.a,e.m,e.x]),e.Nb(4608,i.Gb,i.Gb,[i.a,e.m,e.x]),e.Nb(4608,F,F,[]),e.Nb(4608,H,H,[pl.c]),e.Nb(1073742336,m.b,m.b,[]),e.Nb(1073742336,f.f,f.f,[]),e.Nb(1073742336,f.a,f.a,[]),e.Nb(1073742336,i.Bb,i.Bb,[]),e.Nb(1073742336,b,b,[]),e.Nb(1073742336,hl,hl,[]),e.Nb(1073742336,dl,dl,[]),e.Nb(1073742336,nl.o,nl.o,[[2,nl.t],[2,nl.m]]),e.Nb(1073742336,bl,bl,[]),e.Nb(1073742336,ml,ml,[]),e.Nb(1073742336,o,o,[]),e.Nb(1024,nl.k,function(){return[[{path:"",component:ll}]]},[])])})}}]);