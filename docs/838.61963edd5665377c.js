"use strict";(self.webpackChunkCRUD=self.webpackChunkCRUD||[]).push([[838],{7838:(O,l,a)=>{a.r(l),a.d(l,{AuthModule:()=>F});var m=a(6895),g=a(78),n=a(1571),c=a(384),s=a(9549),d=a(4144),f=a(3546),_=a(4859),h=a(1572),e=a(433);function C(t,i){1&t&&n._UZ(0,"mat-spinner")}function Z(t,i){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Please enter a valid email."),n.qZA())}function M(t,i){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Please enter a valid passowrd."),n.qZA())}function v(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"form",2,3),n.NdJ("submit",function(){n.CHM(o);const u=n.MAs(1),p=n.oxw();return n.KtG(p.onLogin(u))}),n.TgZ(2,"mat-form-field"),n._UZ(3,"input",4,5),n.YNc(5,Z,2,0,"mat-error",0),n.qZA(),n.TgZ(6,"mat-form-field"),n._UZ(7,"input",6,7),n.YNc(9,M,2,0,"mat-error",0),n.qZA(),n.TgZ(10,"button",8),n._uU(11,"Login"),n.qZA()()}if(2&t){const o=n.MAs(4),r=n.MAs(8);n.xp6(5),n.Q6J("ngIf",o.invalid),n.xp6(4),n.Q6J("ngIf",r.invalid)}}function A(t,i){1&t&&n._UZ(0,"mat-spinner")}function L(t,i){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Please enter a valid email."),n.qZA())}function I(t,i){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Please enter a valid password."),n.qZA())}function y(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"form",2,3),n.NdJ("submit",function(){n.CHM(o);const u=n.MAs(1),p=n.oxw();return n.KtG(p.onSignup(u))}),n.TgZ(2,"mat-form-field"),n._UZ(3,"input",4,5),n.YNc(5,L,2,0,"mat-error",0),n.qZA(),n.TgZ(6,"mat-form-field"),n._UZ(7,"input",6,7),n.YNc(9,I,2,0,"mat-error",0),n.qZA(),n.TgZ(10,"button",8),n._uU(11,"Register"),n.qZA()()}if(2&t){const o=n.MAs(4),r=n.MAs(8);n.xp6(5),n.Q6J("ngIf",o.invalid),n.xp6(4),n.Q6J("ngIf",r.invalid)}}const J=[{path:"login",component:(()=>{class t{constructor(o){this._authService=o,this.isLoading=!1}ngOnInit(){}onLogin(o){o.invalid||(this.isLoading=!0,this._authService.login(o.value).subscribe(r=>{this.isLoading=!1},r=>{this.isLoading=!1}))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(c.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","type","email","placeholder","E-Mail","name","email","ngModel","","required","","email",""],["emailInput","ngModel"],["type","password","matInput","","placeholder","Password","name","password","ngModel","","required",""],["passwordInput","ngModel"],["mat-button","","color","primary","type","submit"]],template:function(o,r){1&o&&(n.YNc(0,C,1,0,"mat-spinner",0),n.TgZ(1,"mat-card"),n.YNc(2,v,12,2,"form",1),n.qZA()),2&o&&(n.Q6J("ngIf",r.isLoading),n.xp6(2),n.Q6J("ngIf",!r.isLoading))},dependencies:[m.O5,s.TO,s.KE,d.Nt,f.a8,_.lW,h.$g,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.on,e.On,e.F],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()},{path:"signup",component:(()=>{class t{constructor(o){this._authService=o,this.isLoading=!1}ngOnInit(){}onSignup(o){o.invalid||(this.isLoading=!0,this._authService.signup(o.value).subscribe(r=>{this.isLoading=!1},r=>{this.isLoading=!1}))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(c.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-signup"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","type","email","placeholder","E-Mail","name","email","ngModel","","required","","email",""],["emailInput","ngModel"],["type","password","matInput","","placeholder","Password","name","password","ngModel","","required",""],["passwordInput","ngModel"],["mat-button","","color","primary","type","submit"]],template:function(o,r){1&o&&(n.YNc(0,A,1,0,"mat-spinner",0),n.TgZ(1,"mat-card"),n.YNc(2,y,12,2,"form",1),n.qZA()),2&o&&(n.Q6J("ngIf",r.isLoading),n.xp6(2),n.Q6J("ngIf",!r.isLoading))},dependencies:[m.O5,s.TO,s.KE,d.Nt,f.a8,_.lW,h.$g,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.on,e.On,e.F],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(J),g.Bz]}),t})();var x=a(3466);let F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,S,x.q,e.u5]}),t})()}}]);