(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{36:function(e,t){},44:function(e,t,r){},65:function(e,t){},66:function(e,t){},69:function(e,t){},77:function(e,t){},78:function(e,t){},79:function(e,t){},82:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(38),s=r.n(a),o=(r(44),r(39)),i=r(3),u=r.n(i),l=r(24),j=r(8),d=r(17),b=r(7),O=r(2),f=r(13),h=r.n(f),p=r(0);var m=function(e){var t=e.categories,r=e.handleSubmit,n=e.handleChange,c=e.loadingCategories,a=e.loadingQuestions,s=e.quizInProgress,o=e.defaultNumOfQuestions;return Object(p.jsx)("header",{children:Object(p.jsxs)("form",{onSubmit:r,children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"category",children:"Category"}),c?Object(p.jsx)("span",{children:"Loading categories..."}):Object(p.jsx)("select",{id:"category",onChange:n,disabled:c||s,children:t.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"difficulty",children:"Difficulty"}),Object(p.jsxs)("select",{id:"difficulty",defaultValue:"any",onChange:n,disabled:c||s,children:[Object(p.jsx)("option",{value:"any",children:"Any Difficulty"}),Object(p.jsx)("option",{value:"easy",children:"Easy"}),Object(p.jsx)("option",{value:"medium",children:"Medium"}),Object(p.jsx)("option",{value:"hard",children:"Hard"})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"type",children:"Type"}),Object(p.jsxs)("select",{id:"type",defaultValue:"any",onChange:n,disabled:c||s,children:[Object(p.jsx)("option",{value:"any",children:"Any Type"}),Object(p.jsx)("option",{value:"multiple",children:"Multiple Choice"}),Object(p.jsx)("option",{value:"boolean",children:"True / False"})]})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"amount",children:"Questions"}),Object(p.jsx)("input",{type:"number",id:"amount",min:"5",max:"50",step:"5",defaultValue:o,onChange:n,disabled:c||s})]}),Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("button",{className:"btn",type:"submit",disabled:c||s,children:a?"Loading...":s?"Quiz in progress":"Generate New Quiz"})})]})})};var x=function(e){var t=e.questionNum,r=e.totalQuestions,n=e.percentage;return Object(p.jsxs)("div",{className:"progress-conatiner",children:[Object(p.jsxs)("div",{className:"progress-text",children:["Question ",t," of ",r]}),Object(p.jsx)("div",{className:"progress-bar-box",children:Object(p.jsx)("div",{className:"progress-bar",style:{width:"".concat(n,"%")}})})]})};var v=function(e){var t=e.score;return Object(p.jsxs)("div",{className:"score-container",children:[Object(p.jsx)("div",{className:"score-text",children:"Score"}),Object(p.jsx)("div",{className:"score-number",children:t})]})};var g=function(e){var t=e.question,r=e.handleAnswers,c=e.lastQuestion,a=e.gameEnded,s=Object(n.useState)(!1),o=Object(O.a)(s,2),i=o[0],u=o[1],l=Object(n.useState)(""),j=Object(O.a)(l,2),d=j[0],b=j[1];return Object(n.useEffect)((function(){b(""),u(!1)}),[t]),Object(p.jsxs)("article",{className:"question",children:[Object(p.jsx)("h2",{children:t.question}),Object(p.jsx)("ul",{children:t.options.map((function(e,n){return i?Object(p.jsx)("li",{className:"answered\n\t\t\t\t\t\t\t\t".concat(e===d?d===t.answer?"isRight":"isWrong":d!==t.answer&&e===t.answer?"isRight":""," \n\t\t\t\t\t\t\t"),children:e},e):Object(p.jsx)("li",{onClick:function(){return function(e){b(e),u(!0),r({id:t.id,isCorrectAnswer:t.answer===e})}(e)},children:e},e)}))}),i&&!c&&Object(p.jsxs)("p",{children:["Getting next question... ",Object(p.jsx)("span",{className:"loader",children:"\u23f3"})]}),i&&c&&Object(p.jsx)("p",{children:"Quiz has ended! \ud83c\udfc1"}),i&&c&&!a&&Object(p.jsxs)("p",{children:["Computing final score... ",Object(p.jsx)("span",{className:"loader",children:"\u23f3"})]})]})},y=r(6),w=new y.Client({secret:"fnAEOCHDjSACRF5LsqMFIWJItn4ACmZGEHXYGQdp"}),N=y.query.Collection,S=y.query.Create,q=y.query.Index,C=y.query.Map,E=y.query.Get,k=y.query.Lambda,Q=y.query.Match,T=y.query.Paginate,A=y.query.Var,G=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.query(S(N("playerScores"),{data:t}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.query(C(T(Q(q("allPlayerScores"))),k("ref",E(A("ref")))));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.map((function(e){return Object(b.a)(Object(b.a)({},e.data),{},{id:e.ref.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e.reduce((function(e,t){var r=t.name.toLowerCase();return e[r]=r in e?Object(b.a)(Object(b.a)({},e[r]),{},{score:e[r].score+t.score}):t,e}),{});return Object.values(t).sort((function(e,t){return e.score<t.score}))},M=function(e){var t=e.reduce((function(e,t){var r=t.category;return r in e?e[r].push(t):e[r]=[t],e}),{}),r=[];for(var n in t){var c=I(t[n]);r.push({category:n,scores:c})}return r};var L=function(e){var t=e.setError,r=Object(n.useState)(null),c=Object(O.a)(r,2),a=c[0],s=c[1],o=Object(n.useState)(""),i=Object(O.a)(o,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){Object(j.a)(u.a.mark((function e(){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:if((r=e.sent).length){e.next=6;break}return e.abrupt("return");case 6:d(I(r)[0]),s(M(r)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),t("\ud83d\ude41 Error loading leaderboard.");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[t]),Object(p.jsxs)("div",{className:"leaderboard",children:[Object(p.jsx)("h1",{children:"Leaderboard \ud83c\udfc6"}),l&&Object(p.jsxs)("div",{className:"leaderboard-group gold",children:[Object(p.jsx)("h3",{children:"Overall Top Scorer"}),Object(p.jsxs)("span",{children:["\ud83e\udd47 ",l.name," - ",l.score]})]}),a?a.map((function(e){var t=e.category,r=e.scores;return Object(p.jsxs)("div",{className:"leaderboard-group",children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("ul",{children:r.map((function(e,t){return Object(p.jsxs)("li",{children:[0===t&&"\ud83e\udd47 ",1===t&&"\ud83e\udd48 ",2===t&&"\ud83e\udd49 ",e.name," - ",e.score]},e.id)}))})]},t)})):Object(p.jsx)("h3",{children:"No scores yet!"})]})};var P=function(e){var t=e.category,r=e.score,c=e.setError,a=e.resetGame,s=Object(n.useState)(""),o=Object(O.a)(s,2),i=o[0],l=o[1],d=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),i&&t&&r){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,G({category:t,name:i.trim(),score:r});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0),c("\ud83d\ude41 Error saving player score.");case 12:a();case 13:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{className:"score-form",onSubmit:d,children:[r?Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("h3",{children:"You got a score! \ud83d\ude4c"}),Object(p.jsx)("p",{children:"Enter your name below to save your score."}),Object(p.jsx)("input",{type:"text",value:i,placeholder:"Enter your name",onChange:function(e){return l(e.target.value)},required:!0}),Object(p.jsx)("button",{className:"btn",type:"submit",children:"Save"}),Object(p.jsx)("span",{children:"or"})]}):Object(p.jsx)("h3",{children:"You didn't get a score! \ud83d\ude25"}),Object(p.jsx)("button",{className:"btn",type:"button",onClick:function(){return a()},children:"Back to Leaderboard"})]})},z=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value};var D=function(){var e,t,r=Object(n.useState)(!1),c=Object(O.a)(r,2),a=c[0],s=c[1],i=Object(n.useState)(!1),f=Object(O.a)(i,2),y=f[0],w=f[1],N=Object(n.useState)(!1),S=Object(O.a)(N,2),q=S[0],C=S[1],E=Object(n.useState)({amount:"10"}),k=Object(O.a)(E,2),Q=k[0],T=k[1],A=Object(n.useState)([]),G=Object(O.a)(A,2),F=G[0],I=G[1],M=Object(n.useState)([]),D=Object(O.a)(M,2),H=D[0],R=D[1],V=Object(n.useState)("General Knowledge"),_=Object(O.a)(V,2),J=_[0],Y=_[1],B=Object(n.useState)(null),K=Object(O.a)(B,2),W=K[0],X=K[1],Z=Object(n.useState)(0),U=Object(O.a)(Z,2),$=U[0],ee=U[1],te=Object(n.useState)(0),re=Object(O.a)(te,2),ne=re[0],ce=re[1],ae=Object(n.useState)([]),se=Object(O.a)(ae,2),oe=se[0],ie=se[1],ue=Object(n.useState)(0),le=Object(O.a)(ue,2),je=le[0],de=le[1],be=Object(n.useState)(!1),Oe=Object(O.a)(be,2),fe=Oe[0],he=Oe[1],pe=Object(n.useState)(!1),me=Object(O.a)(pe,2),xe=me[0],ve=me[1],ge=function(){R([]),Y("General Knowledge"),X(null),ee(0),ce(0),ie([]),de(0),he(!1),ve(!1)},ye=function(){var e=Object(j.a)(u.a.mark((function e(t){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),ge(),Q.category&&Y(F.find((function(e){return e.id===parseInt(Q.category)})).name),C(!0),e.prev=4,e.next=7,h()({method:"GET",url:"https://opentdb.com/api.php",params:Object(b.a)({},Q)});case 7:if(r=e.sent,(n=r.data).results.length){e.next=13;break}return s("\ud83d\ude41 No questions found with the selected options. please try again!"),C(!1),e.abrupt("return");case 13:R(n.results.map((function(e,t){var r=z(e.correct_answer),n=[].concat(Object(l.a)(e.incorrect_answers.map((function(e){return z(e)}))),[r]);return{id:"".concat(t,"-").concat(Date.now()),question:z(e.question),answer:r,options:n.sort((function(){return Math.random()-.5}))}}))),ce(n.results.length),he(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0),s("\ud83d\ude41 Error loading questions from the API. Please try again later.");case 22:C(!1);case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),we=Object(n.useRef)();return we.current=function(){var e,t=0,r=Object(o.a)(oe);try{for(r.s();!(e=r.n()).done;){e.value.isCorrectAnswer&&(t+=100)}}catch(n){r.e(n)}finally{r.f()}de(t),$<ne?(X(H[$]),ee($+1)):he(!1),$===ne&&ve(!0)},Object(n.useEffect)((function(){var e;return w(!0),h()({method:"GET",url:"https://opentdb.com/api_category.php",cancelToken:new h.a.CancelToken((function(t){return e=t}))}).then((function(e){var t=e.data;I(t.trivia_categories),w(!1)})).catch((function(e){h.a.isCancel(e)||(console.log(e),w(!1),s("\ud83d\ude41 Error loading categories from the API. Please try again later."))})),function(){return e()}}),[]),Object(n.useEffect)((function(){X(H[0]),ee(1)}),[H]),Object(n.useEffect)((function(){if(oe.length){var e=setTimeout((function(){return we.current()}),3e3);return function(){return clearTimeout(e)}}}),[oe]),Object(n.useEffect)((function(){var e=setTimeout((function(){return s(!1)}),5e3);return function(){return clearTimeout(e)}}),[a]),Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(m,{categories:F,handleChange:function(e){T((function(t){return Object(b.a)(Object(b.a)({},t),{},Object(d.a)({},e.target.id,e.target.value))}))},handleSubmit:ye,loadingCategories:y,loadingQuestions:q,quizInProgress:fe,defaultNumOfQuestions:Q.amount}),Object(p.jsxs)("div",{className:"container",children:[a&&Object(p.jsx)("div",{className:"error-message",children:a}),!fe&&!ne&&Object(p.jsx)(L,{setError:s}),W&&Object(p.jsxs)(n.Fragment,{children:[Object(p.jsxs)("div",{className:"flex-between",children:[Object(p.jsx)(x,{questionNum:$,totalQuestions:ne,percentage:(e=$,t=ne,0===e||0===t?0:Math.floor(100*e/t))}),Object(p.jsx)(v,{score:je})]}),Object(p.jsx)(g,{question:W,handleAnswers:function(e){ie((function(t){return[].concat(Object(l.a)(t),[e])})),de("?")},lastQuestion:$===ne,gameEnded:xe})]}),xe&&Object(p.jsx)(P,{category:J,score:je,setError:s,resetGame:ge})]})]})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.41bda610.chunk.js.map