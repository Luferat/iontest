"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7992],{7992:(Q,d,s)=>{s.r(d),s.d(d,{HomePageModule:()=>J});var u=s(6814),Z=s(95),t=s(2303),l=s(5877),h=s(5861),v=s(3182),c=s(15),m=s(553),n=s(9468);function P(o,i){1&o&&n._UZ(0,"ion-progress-bar",6)}function x(o,i){if(1&o&&(n.TgZ(0,"div")(1,"ion-item",18)(2,"ion-thumbnail",1),n._UZ(3,"ion-img",19),n.qZA(),n.TgZ(4,"ion-label"),n._uU(5),n.qZA()()()),2&o){const e=i.$implicit;n.xp6(1),n.Q6J("routerLink","/view/"+e.id),n.xp6(2),n.Q6J("alt",e.name)("src",e.image),n.xp6(2),n.Oqu(e.name)}}function H(o,i){if(1&o&&(n.TgZ(0,"ion-list",16),n.YNc(1,x,6,4,"div",17),n.qZA()),2&o){const e=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",e.docView)}}function T(o,i){1&o&&(n.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),n._uU(3,"Oooops!"),n.qZA()(),n.TgZ(4,"ion-card-content"),n._uU(5,"N\xe3o encontramos documentos."),n.qZA()())}function A(o,i){if(1&o&&(n.TgZ(0,"ion-content",7)(1,"ion-grid")(2,"ion-row",8)(3,"ion-col",9)(4,"h4",10),n._uU(5,"Documentos"),n.qZA()(),n.TgZ(6,"ion-col",11)(7,"ion-button",12),n._UZ(8,"ion-icon",13),n._uU(9,"Novo"),n.qZA()()()(),n.YNc(10,H,2,1,"ion-list",14),n.YNc(11,T,6,0,"ion-card",15),n.qZA()),2&o){const e=n.oxw();n.Q6J("fullscreen",!0),n.xp6(10),n.Q6J("ngIf",e.count>0),n.xp6(1),n.Q6J("ngIf",0==e.count)}}const I=[{path:"",component:(()=>{var o;class i{constructor(){this.env=m.N,this.app=(0,v.ZF)(m.N.firebase),this.db=(0,c.ad)(this.app),this.docView=[],this.count=0,this.view=!1}ngOnInit(){var a=this;return(0,h.Z)(function*(){const r=(0,c.IO)((0,c.hJ)(a.db,m.N.dbCollection),(0,c.ar)("status","!=","off"),(0,c.Xo)("status"),(0,c.Xo)("date","desc")),U=yield(0,c.Yp)(r);a.count=U.data().count,a.count>0&&(0,c.cf)(r,y=>{let g=[];y.forEach(f=>{let p=f.data();p.id=f.id,g.push(p)}),a.docView=g}),a.view=!0})()}}return(o=i).\u0275fac=function(a){return new(a||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-home"]],decls:9,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"ion-text-center"],["ios","home-outline","md","home-sharp","slot","end",1,"ion-padding"],["type","indeterminate",4,"ngIf"],[3,"fullscreen",4,"ngIf"],["type","indeterminate"],[3,"fullscreen"],[1,"ion-align-items-center"],["size","auto",1,"ion-no-padding"],[1,"ion-margin"],[1,"ion-text-end"],["routerLink","/add"],["ios","add-circle-outline","md","add-circle-sharp","slot","start"],["class","ion-margin-start ion-margin-end",4,"ngIf"],[4,"ngIf"],[1,"ion-margin-start","ion-margin-end"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"alt","src"]],template:function(a,r){1&a&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title",2),n._uU(5),n.qZA(),n._UZ(6,"ion-icon",3),n.YNc(7,P,1,0,"ion-progress-bar",4),n.qZA()(),n.YNc(8,A,12,3,"ion-content",5)),2&a&&(n.Q6J("translucent",!0),n.xp6(5),n.Oqu(r.env.appName),n.xp6(2),n.Q6J("ngIf",!r.view),n.xp6(1),n.Q6J("ngIf",r.view))},dependencies:[u.sg,u.O5,t.YG,t.Sm,t.PM,t.FN,t.Zi,t.Dq,t.wI,t.W2,t.jY,t.Gu,t.gu,t.Xz,t.Ie,t.Q$,t.q_,t.fG,t.X7,t.Nd,t.Bs,t.wd,t.sr,t.YI,l.rH]}),i})()}];let N=(()=>{var o;class i{}return(o=i).\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.Bz.forChild(I),l.Bz]}),i})(),J=(()=>{var o;class i{}return(o=i).\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,Z.u5,t.Pc,N]}),i})()}}]);