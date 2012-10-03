/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("resize-constrain",function(a,t){var K=a.Lang,s=K.isBoolean,J=K.isNumber,g=K.isString,q=a.Resize.capitalize,e=function(L){return(L instanceof a.Node);},F=function(L){return parseFloat(L)||0;},b="borderBottomWidth",z="borderLeftWidth",B="borderRightWidth",f="borderTopWidth",D="border",r="bottom",u="con",j="constrain",n="host",o="left",m="maxHeight",h="maxWidth",c="minHeight",G="minWidth",I="node",y="offsetHeight",A="offsetWidth",C="preserveRatio",p="region",E="resizeConstrained",H="right",k="tickX",i="tickY",v="top",d="width",l="view",x="viewportRegion";function w(){w.superclass.constructor.apply(this,arguments);}a.mix(w,{NAME:E,NS:u,ATTRS:{constrain:{setter:function(L){if(L&&(e(L)||g(L)||L.nodeType)){L=a.one(L);}return L;}},minHeight:{value:15,validator:J},minWidth:{value:15,validator:J},maxHeight:{value:Infinity,validator:J},maxWidth:{value:Infinity,validator:J},preserveRatio:{value:false,validator:s},tickX:{value:false},tickY:{value:false}}});a.extend(w,a.Plugin.Base,{constrainSurrounding:null,initializer:function(){var L=this,M=L.get(n);M.delegate.dd.plug(a.Plugin.DDConstrained,{tickX:L.get(k),tickY:L.get(i)});M.after("resize:align",a.bind(L._handleResizeAlignEvent,L));M.on("resize:start",a.bind(L._handleResizeStartEvent,L));},_checkConstrain:function(N,W,O){var T=this,S,P,Q,V,U=T.get(n),L=U.info,M=T.constrainSurrounding.border,R=T._getConstrainRegion();if(R){S=L[N]+L[O];P=R[W]-F(M[q(D,W,d)]);if(S>=P){L[O]-=(S-P);}Q=L[N];V=R[N]+F(M[q(D,N,d)]);if(Q<=V){L[N]+=(V-Q);L[O]-=(V-Q);}}},_checkHeight:function(){var L=this,N=L.get(n),P=N.info,M=(L.get(m)+N.totalVSurrounding),O=(L.get(c)+N.totalVSurrounding);L._checkConstrain(v,r,y);if(P.offsetHeight>M){N._checkSize(y,M);}if(P.offsetHeight<O){N._checkSize(y,O);}},_checkRatio:function(){var Z=this,S=Z.get(n),Y=S.info,O=S.originalInfo,R=O.offsetWidth,aa=O.offsetHeight,Q=O.top,ab=O.left,U=O.bottom,X=O.right,N=function(){return(Y.offsetWidth/R);},P=function(){return(Y.offsetHeight/aa);},T=S.changeHeightHandles,L,ac,V,W,M,ad;if(Z.get(j)&&S.changeHeightHandles&&S.changeWidthHandles){V=Z._getConstrainRegion();ac=Z.constrainSurrounding.border;L=(V.bottom-F(ac[b]))-U;W=ab-(V.left+F(ac[z]));M=(V.right-F(ac[B]))-X;ad=Q-(V.top+F(ac[f]));if(S.changeLeftHandles&&S.changeTopHandles){T=(ad<W);}else{if(S.changeLeftHandles){T=(L<W);}else{if(S.changeTopHandles){T=(ad<M);}else{T=(L<M);}}}}if(T){Y.offsetWidth=R*P();Z._checkWidth();Y.offsetHeight=aa*N();}else{Y.offsetHeight=aa*N();Z._checkHeight();Y.offsetWidth=R*P();}if(S.changeTopHandles){Y.top=Q+(aa-Y.offsetHeight);}if(S.changeLeftHandles){Y.left=ab+(R-Y.offsetWidth);}a.each(Y,function(af,ae){if(J(af)){Y[ae]=Math.round(af);}});},_checkRegion:function(){var L=this,M=L.get(n),N=L._getConstrainRegion();return a.DOM.inRegion(null,N,true,M.info);},_checkWidth:function(){var L=this,O=L.get(n),P=O.info,N=(L.get(h)+O.totalHSurrounding),M=(L.get(G)+O.totalHSurrounding);L._checkConstrain(o,H,A);if(P.offsetWidth<M){O._checkSize(A,M);}if(P.offsetWidth>N){O._checkSize(A,N);}},_getConstrainRegion:function(){var L=this,N=L.get(n),M=N.get(I),P=L.get(j),O=null;if(P){if(P==l){O=M.get(x);}else{if(e(P)){O=P.get(p);}else{O=P;}}}return O;},_handleResizeAlignEvent:function(N){var L=this,M=L.get(n);L._checkHeight();L._checkWidth();if(L.get(C)){L._checkRatio();}if(L.get(j)&&!L._checkRegion()){M.info=M.lastInfo;}},_handleResizeStartEvent:function(N){var L=this,O=L.get(j),M=L.get(n);L.constrainSurrounding=M._getBoxSurroundingInfo(O);}});a.namespace("Plugin");a.Plugin.ResizeConstrained=w;},"3.7.1pr1",{"requires":["plugin","resize-base"]});