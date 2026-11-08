import{ht as e,r as t}from"./ui-BUzB5uaV.js";function n(e){let t=String(e??``);return/[",\n]/.test(t)?`"`+t.replace(/"/g,`""`)+`"`:t}function r(e,t,r){let i=[t.map(n).join(`,`),...r.map(e=>e.map(n).join(`,`))],a=new Blob([`﻿`+i.join(`\r
`)],{type:`text/csv;charset=utf-8;`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=e.endsWith(`.csv`)?e:e+`.csv`,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function i(e,t,n,r){let i=e=>String(e??``).replace(/[&<>]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`})[e]),a=`<tr>${n.map(e=>`<th>${i(e)}</th>`).join(``)}</tr>`,o=r.map(e=>`<tr>${e.map(e=>`<td>${i(e)}</td>`).join(``)}</tr>`).join(``),s=`<!doctype html><html lang="bn"><head><meta charset="utf-8"><title>${i(e)}</title>
  <style>
    body{font-family:'Kalpurush','Noto Sans Bengali',system-ui,sans-serif;color:#0f172a;margin:24px;}
    .hdr{text-align:center;margin-bottom:16px;}
    .hdr .g{font-weight:700;} .hdr .o{color:#334155;} .hdr .t{font-size:18px;font-weight:700;color:#1b4d3e;margin-top:6px;} .hdr .s{font-size:12px;color:#64748b;}
    table{width:100%;border-collapse:collapse;font-size:13px;}
    th,td{border:1px solid #cbd5e1;padding:6px 8px;text-align:left;}
    th{background:#eef2f7;} tr:nth-child(even) td{background:#f8fafc;}
    @media print{.noprint{display:none}}
  </style></head><body>
    <div class="hdr"><div class="g">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</div><div class="o">সমাজসেবা অধিদফতর</div><div class="t">${i(e)}</div><div class="s">${i(t)}</div></div>
    <button class="noprint" onclick="window.print()" style="margin-bottom:12px;padding:6px 14px;cursor:pointer;">প্রিন্ট / PDF সংরক্ষণ</button>
    <table><thead>${a}</thead><tbody>${o}</tbody></table>
  </body></html>`,c=window.open(``,`_blank`);c&&(c.document.open(),c.document.write(s),c.document.close(),setTimeout(()=>{try{c.focus(),c.print()}catch{}},400))}function a(e,t,n,r){let i=e=>String(e??``).replace(/[&<>]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`})[e]),a=n.map(([e,t])=>`<tr><th>${i(e)}</th><td>${i(t)}</td></tr>`).join(``),o=`<!doctype html><html lang="bn"><head><meta charset="utf-8"><title>${i(e)}</title>
  <style>
    body{font-family:'Kalpurush','Noto Sans Bengali',system-ui,sans-serif;color:#0f172a;margin:24px;}
    .hdr{text-align:center;margin-bottom:16px;}
    .hdr .g{font-weight:700;} .hdr .o{color:#334155;} .hdr .t{font-size:18px;font-weight:700;color:#1b4d3e;margin-top:6px;} .hdr .s{font-size:12px;color:#64748b;}
    table{width:100%;border-collapse:collapse;font-size:14px;max-width:640px;margin:0 auto;}
    th,td{border:1px solid #cbd5e1;padding:8px 10px;text-align:left;vertical-align:top;}
    th{background:#eef2f7;width:40%;}
    .ft{max-width:640px;margin:14px auto 0;font-size:12px;color:#64748b;}
    .sign{display:flex;justify-content:space-between;max-width:640px;margin:48px auto 0;font-size:13px;text-align:center;}
    .sign .line{border-top:1px solid #475569;width:180px;margin-bottom:4px;}
    @media print{.noprint{display:none}}
  </style></head><body>
    <div class="hdr"><div class="g">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</div><div class="o">সমাজসেবা অধিদফতর</div><div class="t">${i(e)}</div><div class="s">${i(t)}</div></div>
    <button class="noprint" onclick="window.print()" style="display:block;margin:0 auto 12px;padding:6px 14px;cursor:pointer;">প্রিন্ট / PDF সংরক্ষণ</button>
    <table><tbody>${a}</tbody></table>
    ${r?`<p class="ft">${i(r)}</p>`:``}
    <div class="sign"><div><div class="line"></div>উত্তোলনকারীর স্বাক্ষর</div><div><div class="line"></div>হাসপাতাল সমাজসেবা কর্মকর্তা</div></div>
  </body></html>`,s=window.open(``,`_blank`);s&&(s.document.open(),s.document.write(o),s.document.close(),setTimeout(()=>{try{s.focus(),s.print()}catch{}},400))}var o=e();function s({filename:e,title:n,subtitle:a,headers:s,rows:c,size:l=`sm`,disabled:u}){let d=u||c.length===0;return(0,o.jsxs)(`div`,{className:`flex gap-2`,children:[(0,o.jsx)(t,{size:l,variant:`secondary`,icon:`FileSpreadsheet`,disabled:d,onClick:()=>r(e,s,c),children:`Excel`}),(0,o.jsx)(t,{size:l,variant:`ghost`,icon:`Printer`,disabled:d,onClick:()=>i(n,a,s,c),children:`প্রিন্ট / PDF`})]})}export{i,r as n,a as r,s as t};