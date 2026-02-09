import{j as e,T as c,N as l,I as d,a as p,r as i}from"./index-nilSSU1d.js";import{g as x}from"./viewAI-CRLjGN57.js";import{u as h}from"./index-BNdfWG1K.js";import"./Breadcrumbs-qVsHvHjF.js";const m=t=>e.jsx(g,{children:e.jsx(c,{title:`AI : ${t==null?void 0:t.title} tự động !`,placement:"top",children:e.jsx(l,{to:t==null?void 0:t.path,onClick:()=>{},children:e.jsxs("div",{className:"card w-full h-full rounded-2xl p-2 bg-[#1b233d] overflow-hidden",children:[e.jsxs("div",{className:"top-section relative",children:[e.jsx("div",{className:"border"}),e.jsxs("div",{className:"icons",children:[e.jsx("div",{className:"logo text-white font-bold",children:"AI"}),e.jsx("div",{className:"social-media",children:e.jsx(d,{iconName:"faHeart",className:"text-red-400"})})]}),e.jsx("div",{className:"absolute top-[20%] left-0 w-full h-[75%] overflow-y-auto px-3 text-justify",children:e.jsx("p",{className:"text-sm",children:t==null?void 0:t.description})})]}),e.jsxs("div",{className:"bottom-section flex flex-col",children:[e.jsx("span",{className:"title h-[50px] line-clamp-2",children:t==null?void 0:t.title}),e.jsxs("div",{className:"row row1",children:[e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"big-text",children:"Gemini"}),e.jsx("span",{className:"regular-text",children:"AI moldel"})]}),e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"big-text",children:"Miễn phí"}),e.jsx("span",{className:"regular-text",children:"giá"})]}),e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"big-text",children:"0"}),e.jsx("span",{className:"regular-text",children:"Lượt sử dụng"})]})]})]})]})})})}),g=p.div`
    .card {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 20px 0px;
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card:hover {
        transform: scale(1.02);
    }

    .card .top-section {
        height: 180px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        background: linear-gradient(
            45deg,
            rgb(4, 159, 187) 0%,
            rgb(80, 246, 255) 100%
        );
        position: relative;
    }

    .card .top-section .border {
        border-bottom-right-radius: 10px;
        height: 30px;
        width: 130px;
        background: white;
        background: #1b233d;
        position: relative;
        transform: skew(-40deg);
        box-shadow: -10px -10px 0 0 #1b233d;
    }

    .card .top-section .border::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        top: 0;
        right: -15px;
        background: rgba(255, 255, 255, 0);
        border-top-left-radius: 10px;
        box-shadow: -5px -5px 0 2px #1b233d;
    }

    .card .top-section::before {
        content: "";
        position: absolute;
        top: 30px;
        left: 0;
        background: rgba(255, 255, 255, 0);
        height: 15px;
        width: 15px;
        border-top-left-radius: 15px;
        box-shadow: -5px -5px 0 2px #1b233d;
    }

    .card .top-section .icons {
        position: absolute;
        top: 0;
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
    }

    .card .top-section .icons .logo {
        height: 100%;
        aspect-ratio: 1;
        padding: 7px 0 7px 15px;
    }

    .card .top-section .icons .logo .top-section {
        height: 100%;
    }

    .card .top-section .icons .social-media {
        height: 100%;
        padding: 8px 15px;
        display: flex;
        gap: 7px;
    }

    .card .top-section .icons .social-media .svg {
        height: 100%;
        fill: #1b233d;
    }

    .card .top-section .icons .social-media .svg:hover {
        fill: white;
    }

    .card .bottom-section {
        margin-top: 15px;
        padding: 10px 5px;
        border-radius: 15px;
    }

    .card .bottom-section .title {
        display: block;
        font-size: 17px;
        font-weight: bolder;
        color: white;
        text-align: center;
        letter-spacing: 2px;
    }

    .card .bottom-section .row {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .card .bottom-section .row .item {
        flex: 30%;
        text-align: center;
        padding: 5px;
        color: rgba(170, 222, 243, 0.721);
    }

    .card .bottom-section .row .item .big-text {
        font-size: 12px;
        display: block;
    }

    .card .bottom-section .row .item .regular-text {
        font-size: 9px;
    }

    .card .bottom-section .row .item:nth-child(2) {
        border-left: 1px solid rgba(255, 255, 255, 0.126);
        border-right: 1px solid rgba(255, 255, 255, 0.126);
    }
`,b=i.memo(({title:t})=>e.jsxs("span",{className:"flex items-center",children:[e.jsx("span",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"}),e.jsx("span",{className:"shrink-0 px-4 text-gray-900 dark:text-white font-bold text-2xl",children:t}),e.jsx("span",{className:"h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600"})]})),f=i.memo(({title:t})=>e.jsx("div",{className:"w-full text-center",children:e.jsx("span",{className:"text-sky-500 ",children:t})}));function v(){const t=h();i.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const r=x(),a=i.useCallback(()=>!r||!Array.isArray(r.data)?[]:r.data.filter(o=>o.trangthai==="view"),[]),n=i.useCallback(()=>{const o=a();return o.length===0?e.jsx("div",{className:"text-center w-full col-span-full",children:"Không có công cụ nào để hiển thị."}):o.map(s=>e.jsx(m,{title:s.tieude,path:s.path,description:s.mieuta},s.id||s.path||Math.random()))},[a]);return e.jsxs(e.Fragment,{children:[t,e.jsx(b,{title:"AI - Trí tuệ nhân tạo"}),e.jsx(f,{title:"AI của trang sử dụng AI Gemini là một bot trí tuệ nhân tạo được phát hành bởi Google."}),e.jsx("div",{className:"text-center my-10 px-5 xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5",children:n()})]})}export{v as default};
