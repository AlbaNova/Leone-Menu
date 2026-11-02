// Lightweight, original SVG decorations. No downloaded artwork or image requests.
const art=(body,viewBox='0 0 100 120',cls='')=>`<svg class="${cls}" viewBox="${viewBox}" aria-hidden="true" focusable="false">${body}</svg>`;
const star='<path d="m50 2 4 10 11 1-8 7 2 11-9-6-9 6 2-11-8-7 11-1Z" fill="#e7bd62"/>';
const tree=(i=0)=>art(`${star}<rect x="44" y="98" width="12" height="18" rx="2" fill="#9a684b"/><path d="m50 21 24 31H63l22 28H71l24 28H5l24-28H15l22-28H26Z" fill="${['#285c45','#38775a','#1e4938'][i%3]}"/><path d="M35 45q15 8 31 0M25 70q25 12 50 0M18 95q32 12 64 0" fill="none" stroke="#d3b773" stroke-width="2"/><g stroke="#fff8e0" stroke-width="1"><circle cx="39" cy="53" r="4" fill="#d85c59"/><circle cx="60" cy="69" r="4" fill="#e5bb60"/><circle cx="30" cy="83" r="4" fill="#7fc3c5"/><circle cx="49" cy="99" r="4" fill="#d85c59"/><circle cx="74" cy="94" r="4" fill="#cf95b8"/></g>`,'0 0 100 120','xmas-tree');
const bauble=(colour,i)=>art(`<path d="M50 0v29" stroke="#bda66b" stroke-width="2"/><rect x="43" y="27" width="14" height="9" rx="2" fill="#cbb16b"/><circle cx="50" cy="56" r="23" fill="${colour}"/><path d="M32 58q18 15 36 0" fill="none" stroke="#fff5d5" stroke-width="3"/><ellipse cx="42" cy="45" rx="4" ry="7" fill="#fff" opacity=".45"/>`,'0 0 100 86',`xmas-bauble bauble-${i}`);
const snow=art('<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M40 5v70M10 22l60 36M10 58l60-36M32 12l8 8 8-8M32 68l8-8 8 8M12 32l11-3-1-12M58 63l-1-12 11-3M12 48l11 3-1 12M58 17l-1 12 11 3"/></g>','0 0 80 80');
const deer=(x,y)=>`<g class="xmas-reindeer" transform="translate(${x} ${y})"><g fill="none" stroke="#795539" stroke-width="5" stroke-linecap="round"><path class="reindeer-leg" d="M18 62 12 77 2 80"/><path class="reindeer-leg" d="M36 62 40 82 51 86"/></g><g class="reindeer-antlers" fill="none" stroke="#866042" stroke-width="4" stroke-linecap="round"><path d="M58 25 57 10 51 3M57 10 64 2M67 25 70 10 78 5M70 10 69 1"/></g><ellipse cx="28" cy="56" rx="29" ry="16" fill="#ac7954"/><path d="m42 49 9-20 20 8-17 20" fill="#ac7954"/><ellipse cx="63" cy="32" rx="14" ry="12" fill="#ac7954"/><path d="m55 32-11-11q12 0 16 8" fill="#bd916e"/><circle cx="67" cy="31" r="2.5" fill="#302d26"/><circle cx="77" cy="36" r="4" fill="#b53c40"/><g fill="none" stroke="#936544" stroke-width="6" stroke-linecap="round"><path class="reindeer-leg" d="M9 65-5 83-15 84"/><path class="reindeer-leg" d="M46 61 63 76 75 72"/></g><path d="M49 46 59 50" stroke="#c8494f" stroke-width="5"/><circle cx="57" cy="53" r="3" fill="#e6bf58"/><path d="m3 51-10-9" stroke="#ac7954" stroke-width="6" stroke-linecap="round"/></g>`;
const sleigh=art(`<path d="M157 118Q330 95 603 78" fill="none" stroke="#d3b26c" stroke-width="2"/>${deer(327,39)}${deer(438,25)}${deer(547,11)}<g transform="translate(22 20)"><path d="M20 103h151q24 0 27-28h-18q-6 14-28 14H43Z" fill="#ab3542"/><path d="M27 111v20m124-20v20M7 132h166q24 0 30-19" fill="none" stroke="#d6af5d" stroke-width="6" stroke-linecap="round"/><path d="M28 100V58q23-17 45 0v42" fill="#a17845"/><rect x="31" y="67" width="25" height="32" rx="2" fill="#46856a"/><path d="M43 68v31M32 80h24" stroke="#edc96c" stroke-width="4"/><rect x="55" y="82" width="30" height="20" rx="2" fill="#dd9b8a"/><path d="M70 82v20" stroke="#fff0ca" stroke-width="4"/><path d="M85 101V67q12-22 40-10l27 40" fill="#c4434d"/><path d="m93 76 28 9 28-11" fill="none" stroke="#c4434d" stroke-width="13" stroke-linecap="round"/><path d="m124 84 20-8" stroke="#fff1da" stroke-width="8"/><circle cx="112" cy="43" r="19" fill="#f1c4a0"/><path d="M93 41q-7 29 20 34 22-14 17-31l-13 12-8-7-8 4Z" fill="#fff6e8"/><circle cx="120" cy="40" r="2" fill="#382a24"/><path d="M93 29q8-36 38-14l12 8-24-3 8 10" fill="#c4434d"/><path d="M92 29h37" stroke="#fff6e8" stroke-width="9" stroke-linecap="round"/><circle cx="144" cy="23" r="6" fill="#fff6e8"/><path d="M79 92h50" stroke="#493b30" stroke-width="8"/><rect x="105" y="87" width="12" height="11" rx="1" fill="#eac36d"/></g>`,'0 0 660 180','xmas-sleigh-art');

function lights(){
  const colours=['#d35a52','#e2bd61','#6fae94','#92b9ce'];
  return art(`<path d="M5 17Q90 2 165 15T325 17M5 82Q90 97 165 84T325 82" fill="none" stroke="#617854" stroke-width="1.5"/>${Array.from({length:18},(_,i)=>{const x=12+(i%9)*38,y=i<9?17:83;return `<g class="xmas-bulb bulb-${i%4}"><path d="M${x} ${y}v${i<9?7:-7}" stroke="#617854" stroke-width="2"/><ellipse cx="${x}" cy="${y+(i<9?10:-10)}" rx="3.5" ry="5" fill="${colours[i%4]}"/></g>`}).join('')}`,'0 0 330 100','xmas-brand-lights');
}

export function setupChristmas(){
  let enabled=false,sleighTimer,sleighEnd;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const stage=document.createElement('div');stage.className='xmas-weather';stage.setAttribute('aria-hidden','true');stage.hidden=true;document.body.append(stage);
  const snowLayer=document.createElement('div');snowLayer.className='xmas-snow-layer';
  const sleighLayer=document.createElement('div');sleighLayer.className='xmas-sleigh-layer';stage.append(snowLayer,sleighLayer);
  document.querySelectorAll('.brand').forEach(el=>el.insertAdjacentHTML('beforeend',lights()));
  const grove=document.createElement('div');grove.className='xmas-grove wrap';grove.setAttribute('aria-hidden','true');grove.hidden=true;
  grove.innerHTML=Array.from({length:11},(_,i)=>tree(i)).join('');document.querySelector('.hero').after(grove);
  const garland=document.createElement('div');garland.className='xmas-garland';garland.setAttribute('aria-hidden','true');garland.hidden=true;
  garland.innerHTML=['#b43d49','#d9ad56','#478b82','#d68aab','#6993b4','#b43d49','#d9ad56'].map(bauble).join('');document.querySelector('.hero-copy').prepend(garland);
  const greeting=document.querySelector('#christmas-greeting');
  greeting.querySelectorAll('[aria-hidden]').forEach((el,i)=>{el.innerHTML=tree(i);});
  const wreath=document.querySelector('.christmas-special-art');if(wreath)wreath.innerHTML=tree(1)+bauble('#b43d49',0)+tree(2);
  function stop(){
    clearTimeout(sleighTimer);clearTimeout(sleighEnd);
    snowLayer.replaceChildren();sleighLayer.replaceChildren();
  }
  const canAnimate=()=>enabled&&!reduced.matches&&!document.hidden;
  function snowfall(){
    if(!canAnimate())return;
    snowLayer.innerHTML=Array.from({length:16},(_,i)=>`<span class="xmas-flake flake-${i}">${snow}</span>`).join('');
  }
  function fly(){
    if(!canAnimate())return;
    sleighLayer.innerHTML=`<div class="xmas-sleigh">${sleigh}</div>`;
    sleighEnd=setTimeout(()=>sleighLayer.replaceChildren(),9500);
    sleighTimer=setTimeout(fly,10000+Math.random()*5000);
  }
  function resume(){stop();if(canAnimate()){snowfall();sleighTimer=setTimeout(fly,2500);}}
  reduced.addEventListener('change',resume);document.addEventListener('visibilitychange',resume);
  return {setEnabled(value){
    const next=!!value;if(next===enabled)return;enabled=next;
    stage.hidden=grove.hidden=garland.hidden=!enabled;
    document.body.classList.toggle('christmas-mode',enabled);
    resume();
  }};
}
