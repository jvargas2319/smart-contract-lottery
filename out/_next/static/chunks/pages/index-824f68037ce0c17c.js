(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6316)}])},96301:function(e,t,n){"use strict";let a=n(37917),s=n(63021);e.exports={abi:s,contractAddresses:a}},6316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(85893),s=n(9008),r=n.n(s);n(25675);var i=n(41942);function l(){return(0,a.jsx)("nav",{className:" fixed w-full bg-opacity-80 backdrop-blur bg-gray-900 shadow-lg shadow-gray-900 mb-0",children:(0,a.jsx)("div",{className:" mx-auto max-w-7xl px-4 sm:px-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-between border-slate-800 py-6 md:justify-start md:space-x-10",children:[(0,a.jsxs)("h1",{className:"text-white font-black text-2xl",children:[(0,a.jsx)("span",{className:"text-orange-600",children:"Goerli"})," Payout"]}),(0,a.jsx)("div",{className:" hidden items-center justify-end md:flex md:flex-1 lg:w-0",children:(0,a.jsx)(i.cg,{moralisAuth:!1,children:"Connect Wallet"})})]})})})}function o(){return(0,a.jsx)("div",{className:"w-full h-screen bg-cover bg-[55%] md:mb-0 bg-[#010803] sm:bg-cover bg-no-repeat bg-origin-border sm:bg-center sm:pb-10 lg:py-40 mt-0 hero-img sm:mb-[10vh]",children:(0,a.jsx)("div",{className:"max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center z-1",children:(0,a.jsxs)("div",{className:"pt-20 grid grid-cols-1 content-center gap-8",children:[(0,a.jsx)("div",{className:"flex justify-end md:pr-[18vh]",children:(0,a.jsxs)("h2",{className:"uppercase sm:text-md mb-4font-semibold leading-8 text-orange-600",children:[(0,a.jsxs)("span",{className:"text-zinc-300 uppercase text-sm mb-4",children:["Unlock Your Fortune with"," "]}),"DefiLotto"]})}),(0,a.jsx)("div",{className:"flex justify-end md:pr-[13vh]",children:(0,a.jsxs)("p",{className:"mt-2 text-sm sm:text-xl font-bold tracking-tight text-zinc-300 md:text-3xl",children:["A ",(0,a.jsx)("span",{className:"text-5xl text-orange-600",children:"better"})," way to bet Crypto!"]})}),(0,a.jsx)("div",{className:"flex text-right md:text-center sm:pl-[32vw]",children:(0,a.jsx)("p",{className:"mx-auto block mt-6 max-w-2xl text-sm sm:text-lg leading-8 text-zinc-100",children:"Welcome to DefiLotto, the decentralized lottery platform built on Ethereum blockchain. With our platform, you can participate in fair and transparent draws for a chance to win big. Our smart contracts ensure that every draw is random and unbiased, giving you the best chance to hit the jackpot."})}),(0,a.jsx)("div",{className:"flex justify-end md:pr-[25vh]",children:(0,a.jsx)("a",{href:"#lottery",className:" border rounded-full text-sm text-center border-orange-600 text-zinc-300 p-[11px] sm:mt-[10vh] hover:scale-105",children:"Join DefiLotto now"})})]})})})}var c=n(83078),d=n(96301),u=n(67294),p=n(61744),m={src:"/_next/static/media/moneyBags.48f702d9.png",height:833,width:833,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAyElEQVR42mOAA24+SQZ1Bw5dWy4WBiZmFgYfd/fIIL/w0AhVM3snV1tdS1cpeW1xYS6GrsrCLVObpy5cGV89Ld6FwcLQVE7XQVKIicHeySMjJqx6/oaAsAJzBgY9dWUlWXk3cwOGpoKY2tqKqMbZES4JwS6uucE6/NIasd5ODNVZIQVZqWFRWRG2wW7mdk6mmgziGlqqqgxe7vahvs5h7jaWelKC/EIs7Hx8nGwgV3LyiktIqaip6NubGTmaqLqYKnOysTAwMAAANycqwW1NoYcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};let x=()=>{let{chainId:e,isWeb3Enabled:t}=(0,c.Nr)(),n=parseInt(e),s=n in d.contractAddresses?d.contractAddresses[n][0]:null,[r,l]=(0,u.useState)("0"),[o,x]=(0,u.useState)("0"),[f,y]=(0,u.useState)("0"),[g,b]=(0,u.useState)("0"),h=(0,i.aa)(),{runContractFunction:v}=(0,c.JX)({abi:d.abi,contractAddress:s,functionName:"enterRaffle",params:{},msgValue:p.vz(g).toString()}),{runContractFunction:w}=(0,c.JX)({abi:d.abi,contractAddress:s,functionName:"getEntranceFee",params:{}}),{runContractFunction:j}=(0,c.JX)({abi:d.abi,contractAddress:s,functionName:"getNumberOfPlayers",params:{}}),{runContractFunction:N}=(0,c.JX)({abi:d.abi,contractAddress:s,functionName:"getRecentWinner",params:{}});async function A(){let e=(await w()).toString(),t=(await j()).toString(),n=(await N()).toString();l(e),y(t),x(n)}let k=async function(e){await e.wait(1),S(e),console.log(p.vz(g).toString()),A()},E=e=>{b(e.target.value),console.log("value is:",e.target.value)},S=function(){h({type:"info",message:"Transaction Complete",title:"Tx Notification",position:"topR",icon:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"})})})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{id:"lottery",className:" md:grid md:grid-cols-2 ",children:[(0,a.jsxs)("div",{className:" md:grid md:grid-cols-1 gap-11 ",children:[(0,a.jsxs)("div",{className:"md:grid gap-10 mb-10 md:mb-0",children:[(0,a.jsx)("div",{className:"text-center pt-4",children:(0,a.jsx)("h2",{className:"text-lg font-semibold leading-8 text-orange-600",children:"Lottery Entrance"})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-4 px-4",children:[(0,a.jsx)("div",{children:(0,a.jsxs)("label",{htmlFor:"price",className:"block text-sm font-medium text-center text-zinc-300",children:["Must be connected to Goerli Testnet on Metamask and Minimum Entrance Fee: ",p.bM(r),(0,a.jsx)("span",{className:"text-indigo-400",children:" ETH"})]})}),(0,a.jsxs)("div",{className:"relative mt-1 rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",children:(0,a.jsx)("span",{className:"text-orange-500 sm:text-sm",children:"$"})}),(0,a.jsx)("input",{type:"text",name:"price",id:"price",onChange:E,value:g,className:"block w-full rounded-md text-zinc-200 border-orange-600 pl-7 pr-12 focus:border-indigo-500 bg-zinc-600 focus:ring-indigo-500 sm:text-sm",placeholder:"0.00"}),(0,a.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:s?(0,a.jsx)("button",{onClick:async function(){await v({onSuccess:k,onError:e=>console.log(e)})},className:"h-full rounded-md border border-y-orange-600 border-l-black border-r-orange-600 bg-zinc-600 py-0 pl-2 pr-2 text-orange-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",children:"Submit"}):(0,a.jsx)("p",{className:"pr-10",children:"No Raffle address detected"})})]})]})]}),(0,a.jsxs)("div",{className:" grid grid-cols-1 justify-center px-5 lg:justify-between ",children:[(0,a.jsx)("div",{className:"rounded-xl p-5 shadow-xl shadow-gray-900 bg-orange-700 backdrop-filter backdrop-blur-xl bg-opacity-10 border border-orange-700 mb-[90px] ",children:(0,a.jsx)("div",{className:" p-auto ",children:(0,a.jsxs)("div",{className:"grid grid-rows-3 grid-flow-col gap-4",children:[(0,a.jsx)("div",{className:" text-zinc-200 text-lg text-center row-span-9",children:(0,a.jsx)("h1",{children:"Recent Winner: "})}),(0,a.jsx)("div",{className:"row-span-9 overflow-hidden",children:(0,a.jsx)("div",{className:"text-zinc-200 text-center ",children:(0,a.jsx)("p",{className:" break-words",children:o})})})]})})}),(0,a.jsx)("div",{className:"rounded-xl p-5 pr-[12.5vh] pl-[12.5vh] sm:p-[2vh] shadow-xl shadow-gray-900 bg-orange-700 backdrop-filter backdrop-blur-xl bg-opacity-10 border border-orange-700 mb-[35px]",children:(0,a.jsx)("div",{className:" p-auto",children:(0,a.jsxs)("div",{className:"grid grid-rows-3 grid-flow-col gap-4",children:[(0,a.jsx)("div",{className:" text-zinc-200 text-lg text-center row-span-9",children:(0,a.jsx)("h1",{children:"Number of Players: "})}),(0,a.jsx)("div",{className:"row-span-9",children:(0,a.jsx)("div",{className:"text-zinc-200 text-center",children:f})})]})})})]})]}),(0,a.jsx)("div",{className:"bg-center bg-cover bg-no-repeat ",style:{backgroundImage:"url(".concat(m.src,")")}})]})})};function f(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Win Big with Ethereum Lottery | DefiLotto - Decentralized and Fair Draws"}),(0,a.jsx)("meta",{name:"description",content:"Join DefiLotto, the decentralized Ethereum lottery platform with fair and transparent draws. Instant payouts, no wait times. Unlock your fortune now"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(l,{}),(0,a.jsx)(o,{}),(0,a.jsx)(x,{})]})}},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"vrfCoordinatorV2"},{"type":"uint64","name":"subscriptionId"},{"type":"bytes32","name":"gasLane"},{"type":"uint256","name":"interval"},{"type":"uint256","name":"entranceFee"},{"type":"uint32","name":"callbackGasLimit"},{"type":"address","name":"owner"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle__RaffleNotOpen","inputs":[]},{"type":"error","name":"Raffle__SendMoreToEnterRaffle","inputs":[]},{"type":"error","name":"Raffle__TransferFailed","inputs":[]},{"type":"error","name":"Raffle__UpkeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"numPlayers"},{"type":"uint256","name":"raffleState"}]},{"type":"event","anonymous":false,"name":"RaffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"RequestedRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"WinnerPicked","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLastTimeStamp","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"5":["0x211E23488BBf4f6dD4A370A525Ff3ec5765887C4"],"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"],"80001":["0xdc663Ce60903541A3f06d1bc5312852aABDE3743"]}')}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);