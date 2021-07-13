(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(20),s=n.n(a),i=(n(27),n(21)),o=n(11),u=n.n(o),l=n(7),j=n(22),b=n(9),d=n(4),O=n(2),h=n(8),m=n.n(h),f=n(0);var p=function(e){var t=e.categories,n=e.handleSubmit,c=e.handleChange,r=e.loadingCategories,a=e.loadingQuestions,s=e.quizInProgress,i=e.defaultNumOfQuestions;return Object(f.jsx)("header",{children:Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"category",children:"Category"}),r?Object(f.jsx)("span",{children:"Loading categories..."}):Object(f.jsx)("select",{id:"category",onChange:c,disabled:r||s,children:t.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"difficulty",children:"Difficulty"}),Object(f.jsxs)("select",{id:"difficulty",defaultValue:"any",onChange:c,disabled:r||s,children:[Object(f.jsx)("option",{value:"any",children:"Any Difficulty"}),Object(f.jsx)("option",{value:"easy",children:"Easy"}),Object(f.jsx)("option",{value:"medium",children:"Medium"}),Object(f.jsx)("option",{value:"hard",children:"Hard"})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"type",children:"Type"}),Object(f.jsxs)("select",{id:"type",defaultValue:"any",onChange:c,disabled:r||s,children:[Object(f.jsx)("option",{value:"any",children:"Any Type"}),Object(f.jsx)("option",{value:"multiple",children:"Multiple Choice"}),Object(f.jsx)("option",{value:"boolean",children:"True / False"})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"amount",children:"Questions"}),Object(f.jsx)("input",{type:"number",id:"amount",min:"5",max:"50",step:"5",defaultValue:i,onChange:c,disabled:r||s})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("button",{className:"btn",type:"submit",disabled:r||s,children:a?"Loading...":s?"Quiz in progress":"Generate New Quiz"})})]})})};var x=function(e){var t=e.questionNum,n=e.totalQuestions,c=e.percentage;return Object(f.jsxs)("div",{className:"progress-conatiner",children:[Object(f.jsxs)("div",{className:"progress-text",children:["Question ",t," of ",n]}),Object(f.jsx)("div",{className:"progress-bar-box",children:Object(f.jsx)("div",{className:"progress-bar",style:{width:"".concat(c,"%")}})})]})};var g=function(e){var t=e.score;return Object(f.jsxs)("div",{className:"score-container",children:[Object(f.jsx)("div",{className:"score-text",children:"Score"}),Object(f.jsx)("div",{className:"score-number",children:t})]})};var v=function(e){var t=e.question,n=e.handleAnswers,r=e.lastQuestion,a=e.gameEnded,s=Object(c.useState)(!1),i=Object(O.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)(""),j=Object(O.a)(l,2),b=j[0],d=j[1];return Object(c.useEffect)((function(){d(""),u(!1)}),[t]),Object(f.jsxs)("article",{className:"question",children:[Object(f.jsx)("h2",{children:t.question}),Object(f.jsx)("ul",{children:t.options.map((function(e,c){return o?Object(f.jsx)("li",{className:"answered\n\t\t\t\t\t\t\t\t".concat(e===b?b===t.answer?"isRight":"isWrong":b!==t.answer&&e===t.answer?"isRight":""," \n\t\t\t\t\t\t\t"),children:e},e):Object(f.jsx)("li",{onClick:function(){return function(e){d(e),u(!0),n({id:t.id,isCorrectAnswer:t.answer===e})}(e)},children:e},e)}))}),o&&!r&&Object(f.jsxs)("p",{children:["Getting next question... ",Object(f.jsx)("span",{className:"loader",children:"\u23f3"})]}),o&&r&&Object(f.jsx)("p",{children:"Quiz has ended! \ud83c\udfc1"}),o&&r&&!a&&Object(f.jsxs)("p",{children:["Computing final score... ",Object(f.jsx)("span",{className:"loader",children:"\u23f3"})]})]})};var y=function(e){var t=e.lsKey,n=Object(c.useState)(null),r=Object(O.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(t))||null;e&&s(function(e){var t=e.reduce((function(e,t){var n=t.name.toLowerCase();return e[n]=n in e?Object(d.a)(Object(d.a)({},e[n]),{},{score:e[n].score+t.score}):t,e}),{});return Object.values(t).sort((function(e,t){return e.score<t.score}))}(e))}),[t]),Object(f.jsxs)("div",{className:"leaderboard",children:[Object(f.jsx)("h1",{children:"Leaderboard \ud83c\udfc6"}),Object(f.jsx)("ul",{children:a?a.map((function(e,t){return Object(f.jsxs)("li",{children:[0===t&&"\ud83e\udd47 ",1===t&&"\ud83e\udd48 ",2===t&&"\ud83e\udd49 ",e.name," - ",e.score]},e.id)})):Object(f.jsx)("li",{children:"No scores yet!"})})]})};var N=function(e){var t=e.score,n=e.lsKey,r=e.resetGame,a=Object(c.useState)(""),s=Object(O.a)(a,2),i=s[0],o=s[1];return Object(f.jsxs)("form",{className:"score-form",onSubmit:function(e){if(e.preventDefault(),i&&t&&n){var c=JSON.parse(localStorage.getItem(n))||null,a={id:Date.now(),name:i.trim(),score:t};localStorage.setItem(n,JSON.stringify(c?[].concat(Object(l.a)(c),[a]):[a])),r()}},children:[t?Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)("h3",{children:"You got a score! \ud83d\ude4c"}),Object(f.jsx)("p",{children:"Enter your name below to save your score."}),Object(f.jsx)("input",{type:"text",value:i,placeholder:"Enter your name",onChange:function(e){return o(e.target.value)},required:!0}),Object(f.jsx)("button",{className:"btn",type:"submit",children:"Save"}),Object(f.jsx)("span",{children:"or"})]}):Object(f.jsx)("h3",{children:"You didn't get a score! \ud83d\ude25"}),Object(f.jsx)("button",{className:"btn",type:"button",onClick:function(){return r()},children:"Back to Leaderboard"})]})},S="reactQuizLeaderboard",w=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value};var C=function(){var e,t,n=Object(c.useState)(!1),r=Object(O.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),h=Object(O.a)(o,2),C=h[0],q=h[1],E=Object(c.useState)(!1),Q=Object(O.a)(E,2),k=Q[0],T=Q[1],z=Object(c.useState)([]),A=Object(O.a)(z,2),F=A[0],I=A[1],L=Object(c.useState)({amount:"10"}),D=Object(O.a)(L,2),G=D[0],M=D[1],P=Object(c.useState)([]),J=Object(O.a)(P,2),K=J[0],_=J[1],R=Object(c.useState)(null),V=Object(O.a)(R,2),B=V[0],H=V[1],Y=Object(c.useState)(0),W=Object(O.a)(Y,2),U=W[0],X=W[1],Z=Object(c.useState)(0),$=Object(O.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)([]),ce=Object(O.a)(ne,2),re=ce[0],ae=ce[1],se=Object(c.useState)(0),ie=Object(O.a)(se,2),oe=ie[0],ue=ie[1],le=Object(c.useState)(!1),je=Object(O.a)(le,2),be=je[0],de=je[1],Oe=Object(c.useState)(!1),he=Object(O.a)(Oe,2),me=he[0],fe=he[1],pe=function(){_([]),H(null),X(0),te(0),ae([]),ue(0),de(!1),fe(!1)},xe=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),pe(),s(!1),T(!0),e.prev=4,e.next=7,m()({method:"GET",url:"https://opentdb.com/api.php",params:Object(d.a)({},G)});case 7:if(n=e.sent,(c=n.data).results.length){e.next=13;break}return s("\ud83d\ude41 No questions found with the selected options. please try again!"),T(!1),e.abrupt("return");case 13:_(c.results.map((function(e,t){var n=w(e.correct_answer),c=[].concat(Object(l.a)(e.incorrect_answers.map((function(e){return w(e)}))),[n]);return{id:"".concat(t,"-").concat(Date.now()),question:w(e.question),answer:n,options:c.sort((function(){return Math.random()-.5}))}}))),te(c.results.length),de(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0),s("Error loading questions from the API. Please try again later.");case 22:T(!1);case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),ge=Object(c.useRef)();return ge.current=function(){var e,t=0,n=Object(i.a)(re);try{for(n.s();!(e=n.n()).done;){e.value.isCorrectAnswer&&(t+=100)}}catch(c){n.e(c)}finally{n.f()}ue(t),U<ee?(H(K[U]),X(U+1)):de(!1),U===ee&&fe(!0)},Object(c.useEffect)((function(){var e;return q(!0),s(!1),m()({method:"GET",url:"https://opentdb.com/api_category.php",cancelToken:new m.a.CancelToken((function(t){return e=t}))}).then((function(e){var t=e.data;I(t.trivia_categories),q(!1)})).catch((function(e){m.a.isCancel(e)||(console.log(e),q(!1),s("Error loading categories from the API. Please try again later."))})),function(){return e()}}),[]),Object(c.useEffect)((function(){H(K[0]),X(1)}),[K]),Object(c.useEffect)((function(){if(re.length){var e=setTimeout((function(){ge.current()}),3e3);return function(){return clearTimeout(e)}}}),[re]),Object(f.jsxs)(c.Fragment,{children:[Object(f.jsx)(p,{categories:F,handleChange:function(e){M((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(b.a)({},e.target.id,e.target.value))}))},handleSubmit:xe,loadingCategories:C,loadingQuestions:k,quizInProgress:be,defaultNumOfQuestions:G.amount}),Object(f.jsxs)("div",{className:"container",children:[a&&Object(f.jsx)("div",{className:"error-message",children:a}),!be&&!ee&&Object(f.jsx)(y,{lsKey:S}),B&&Object(f.jsxs)(c.Fragment,{children:[Object(f.jsxs)("div",{className:"flex-between",children:[Object(f.jsx)(x,{questionNum:U,totalQuestions:ee,percentage:(e=U,t=ee,0===e||0===t?0:Math.floor(100*e/t))}),Object(f.jsx)(g,{score:oe})]}),Object(f.jsx)(v,{question:B,handleAnswers:function(e){ae((function(t){return[].concat(Object(l.a)(t),[e])})),ue("?")},lastQuestion:U===ee,gameEnded:me})]}),me&&Object(f.jsx)(N,{score:oe,lsKey:S,resetGame:pe})]})]})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c8157f17.chunk.js.map