"use strict";var Inferno=function(){function t(t){this.dom=null,this.tag=t,this.key=null,this.props=null,this.attrs=null,this.events=null,this.hooks=null,this.text=null,this.children=null,this.ref=null,this.isKeyed=!1,this.instance=null}function n(n){return new t(n)}var i={input:!0};return t.prototype={$children:function(t){if(i[this.tag])throw new Error('Inferno Error: "'+this.tag+'" is a void element and cannot contain children');return isStringOrNumber(t)?this.text=t:this.children=t,this},$text:function(t){if(i[this.tag])throw new Error('Inferno Error: "'+this.tag+'" is a void element and cannot contain text');return this.text=t,this},$key:function(t){return this.key=t,this},$hooks:function(t){return this.hooks=t,this},$attrs:function(t){return this.attrs=t,this},$props:function(t){return this.props=t,this},$events:function(t){return this.events=t,this},$style:function(t){return this.props||(this.props={}),this.props.style=t,this},$ref:function(t){return this.ref=t,this},$keyed:function(t){return this.isKeyed=t||!0,this}},{node:n}}();