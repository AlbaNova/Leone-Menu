// Lightweight, original SVG decorations. No downloaded artwork or image requests.
const art=(body,viewBox='0 0 100 120',cls='')=>`<svg class="${cls}" viewBox="${viewBox}" aria-hidden="true" focusable="false">${body}</svg>`;
const star='<path d="m50 2 4 10 11 1-8 7 2 11-9-6-9 6 2-11-8-7 11-1Z" fill="#e7bd62"/>';
const tree=(i=0)=>art(`${star}<rect x="44" y="98" width="12" height="18" rx="2" fill="#9a684b"/><path d="m50 21 24 31H63l22 28H71l24 28H5l24-28H15l22-28H26Z" fill="${['#285c45','#38775a','#1e4938'][i%3]}"/><path d="M35 45q15 8 31 0M25 70q25 12 50 0M18 95q32 12 64 0" fill="none" stroke="#d3b773" stroke-width="2"/><g stroke="#fff8e0" stroke-width="1"><circle cx="39" cy="53" r="4" fill="#d85c59"/><circle cx="60" cy="69" r="4" fill="#e5bb60"/><circle cx="30" cy="83" r="4" fill="#7fc3c5"/><circle cx="49" cy="99" r="4" fill="#d85c59"/><circle cx="74" cy="94" r="4" fill="#cf95b8"/></g>`,'0 0 100 120','xmas-tree');
const bauble=(colour,i)=>art(`<path d="M50 0v29" stroke="#bda66b" stroke-width="2"/><rect x="43" y="27" width="14" height="9" rx="2" fill="#cbb16b"/><circle cx="50" cy="56" r="23" fill="${colour}"/><path d="M32 58q18 15 36 0" fill="none" stroke="#fff5d5" stroke-width="3"/><ellipse cx="42" cy="45" rx="4" ry="7" fill="#fff" opacity=".45"/>`,'0 0 100 86',`xmas-bauble bauble-${i}`);
const snow=art('<g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M40 5v70M10 22l60 36M10 58l60-36M32 12l8 8 8-8M32 68l8-8 8 8M12 32l11-3-1-12M58 63l-1-12 11-3M12 48l11 3-1 12M58 17l-1 12 11 3"/></g>','0 0 80 80');
// Flying reindeer, side view facing right: front legs tucked, back legs stretched, harness band, collar
// bell and branched antlers. The lead reindeer has a glowing red nose. Legs gallop gently in flight.
const leg=(side,d,hoof,colour)=>`<g class="reindeer-leg leg-${side}"><path d="${d}" fill="none" stroke="${colour}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${hoof[0]}" cy="${hoof[1]}" r="3.1" fill="#3e2c22"/></g>`;
const deer=(x,y,lead=false,index=0)=>`<g class="xmas-reindeer deer-${index}" transform="translate(${x} ${y})">${leg('back','M20 64L10 74L-1 78',[-2,78.3],'#7a5034')}${leg('front','M44 62L53 71L47 80',[46.5,80.5],'#7a5034')}${leg('back','M14 62L2 70L-10 72',[-11,72],'#8c5d3c')}${leg('front','M50 60L60 68L56 78',[55.5,78.6],'#8c5d3c')}<path d="M3 52C-3 48-4 44 0 42C4 46 5 49 3 52Z" fill="#f1e2c9"/><path d="M2 56C2 46 12 42 24 43C36 44 46 42 54 40C62 39 66 48 60 56C56 62 48 66 36 67C22 68 2 66 2 56Z" fill="#a8744d"/><path d="M14 62C24 66 40 66 52 58C48 64 40 67 30 67C22 67 16 66 14 62Z" fill="#e8d2b4"/><path d="M46 46C50 36 56 28 62 24L72 30C66 36 60 46 58 54Z" fill="#a8744d"/><path d="M54 44C60 46 62 54 58 60C56 54 54 50 50 48Z" fill="#f1e2c9"/><path d="M30 43C28 52 30 60 34 66" fill="none" stroke="#c8494f" stroke-width="5" stroke-linecap="round"/><circle cx="31" cy="54" r="2" fill="#e7bd62"/><path d="M52 44C56 50 60 52 65 49" fill="none" stroke="#c8494f" stroke-width="5" stroke-linecap="round"/><circle cx="58" cy="55" r="3.2" fill="#e2bd61" stroke="#9a7a35" stroke-width=".8"/><g class="reindeer-antlers" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M64 15C62 8 59 4 53 2M61 8L64 2M57 4L55-1" stroke="#b88a54"/></g><path d="M62 17C56 12 51 13 49 16C53 19 57 20 62 20Z" fill="#8c5d3c"/><path d="M60 18C56 15.5 53 16 52 16.8C55 18.4 57 18.8 60 18.6Z" fill="#e6c9a5"/><g class="reindeer-antlers" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M69 14C69 6 73 1 80-1M71 8L67 2M74 3L74-3" stroke="#d2a86f"/></g><circle cx="68" cy="24" r="9" fill="#a8744d"/><ellipse cx="80" cy="27" rx="9" ry="5.5" fill="#c99a6e"/><circle cx="70" cy="21.5" r="2" fill="#2b211b"/><circle cx="70.7" cy="20.8" r=".7" fill="#fff"/><path d="M80 31q3 1.5 6 0" fill="none" stroke="#5a3d2b" stroke-width="1.2" stroke-linecap="round"/>${lead ? '<circle class="reindeer-glow" cx="88" cy="26" r="7" fill="#ff7a6b" opacity=".32"/><circle cx="88" cy="26" r="3.8" fill="#d8343c"/><circle cx="87" cy="24.8" r="1.1" fill="#fff" opacity=".8"/>' : '<ellipse cx="88" cy="26" rx="3.2" ry="2.8" fill="#3e2c22"/>'}</g>`;
// Santa's sleigh. The three reindeer above are unchanged; everything else is drawn in sleigh-local
// coordinates (translate 46,18): gold runners fixed to the hull, the sack of gifts, Santa holding the
// reins, then the carved hull in front so Santa and the sack sit inside it.
const sparkle=(x,y,s)=>`<path class="xmas-sparkle" d="M${x} ${y-s}Q${x} ${y} ${x+s} ${y}Q${x} ${y} ${x} ${y+s}Q${x} ${y} ${x-s} ${y}Q${x} ${y} ${x} ${y-s}Z" fill="#e2ad45"/>`;
// Traces: sleigh front → first harness band, then each collar → the next reindeer's band.
const harness=`<g class="xmas-harness" fill="none" stroke="#d3b26c" stroke-width="2.3" stroke-linecap="round"><path d="M246 98Q300 112 358 92"/><path d="M386 94Q430 98 469 78"/><path d="M497 80Q540 84 578 64"/></g><g fill="#e2bd61" stroke="#9a7a35" stroke-width=".8"><circle cx="279" cy="103.3" r="3.3"/><circle cx="318" cy="101.9" r="3.3"/></g>`;
const runners=`<g fill="none" stroke="#c9973f" stroke-linecap="round" stroke-linejoin="round"><path d="M46 108V134M104 110V134M162 108V134" stroke-width="5"/><path d="M8 121C2 120 2 134 12 134H196C228 134 232 110 232 102C232 92 220 89 212 94C206 99 210 109 219 107" stroke-width="6.5"/></g><path d="M22 132.4H190" stroke="#f0cd7c" stroke-width="1.6" stroke-linecap="round"/>`;
const gifts=`<g class="xmas-gifts"><rect x="30" y="12" width="22" height="19" rx="2" fill="#3f8a63"/><path d="M41 12v19M30 21.5h22" stroke="#e7bd62" stroke-width="3"/><path d="M41 12c-7-7-11-1-6 1M41 12c7-7 11-1 6 1" fill="none" stroke="#e7bd62" stroke-width="2" stroke-linecap="round"/><g transform="rotate(10 59 27)"><rect x="50" y="19" width="18" height="16" rx="2" fill="#d85c59"/><path d="M59 19v16M50 27h18" stroke="#fff5dc" stroke-width="2.6"/></g><path d="M22 66C16 48 26 32 44 30C58 29 71 36 73 50C74 58 73 63 71 68Z" fill="#8b5e3c"/><path d="M30 31C38 27 54 27 64 32" fill="none" stroke="#6f4a2e" stroke-width="3" stroke-linecap="round"/><path d="M38 42q6 10 2 22M58 40q4 8 1 20" fill="none" stroke="#6f4a2e" stroke-width="1.8" stroke-linecap="round" opacity=".7"/></g>`;
const santa=`<g class="xmas-santa"><path d="M80 72C78 50 86 38 100 36H118C132 38 140 52 140 72Z" fill="#c4343f"/><path d="M80 72C78 52 84 42 94 38C90 50 89 62 91 72Z" fill="#a52a35"/><path d="M132 42C137 52 139 62 139 70" fill="none" stroke="#fff6e8" stroke-width="6" stroke-linecap="round"/><rect x="81" y="60" width="58" height="7" fill="#2b2622"/><rect x="117" y="58.5" width="11" height="10" rx="2" fill="none" stroke="#e7bd62" stroke-width="2.2"/><path d="M112 46C126 50 138 54 150 56" fill="none" stroke="#c4343f" stroke-width="13" stroke-linecap="round"/><circle cx="150" cy="56.5" r="7" fill="#fff6e8"/><ellipse cx="158.5" cy="58" rx="6.5" ry="6" fill="#2f6b4f"/><ellipse cx="160.5" cy="52.5" rx="2.6" ry="3.3" fill="#2f6b4f"/><circle cx="112" cy="24" r="12.5" fill="#f2c4a0"/><ellipse cx="103.5" cy="25" rx="3" ry="4" fill="#e3a984"/><path d="M98 26C94 44 104 54 116 54C128 52 133 40 128 28C124 35 119 34 114 32C108 35 102 33 98 26Z" fill="#f3ebdd"/><circle cx="117.5" cy="27" r="3.2" fill="#ef9c92" opacity=".75"/><path d="M109 31C112 26.5 118 26.5 121 30.5C118 33.5 113 34 109 31ZM116 30.5C119 26.5 125 27 127 31C124 34 119 34 116 30.5Z" fill="#fffdf8" stroke="#dcd1bf" stroke-width=".8"/><circle cx="123.5" cy="25.5" r="3.4" fill="#e7957c"/><path d="M114 21q2.5-2.6 5 0" fill="none" stroke="#3a2c25" stroke-width="1.6" stroke-linecap="round"/><path d="M113 17.6q3-2 6 0" fill="none" stroke="#fff6e8" stroke-width="2.4" stroke-linecap="round"/><path d="M106-2C96-7 88-3 84 5" fill="none" stroke="#c4343f" stroke-width="8" stroke-linecap="round"/><path d="M101 11C99 1 106-5 116-4C122-3 126 3 126 9Z" fill="#c4343f"/><circle cx="83" cy="8" r="5.2" fill="#fff6e8"/><rect x="98" y="8.5" width="31" height="8" rx="4" fill="#fff6e8" transform="rotate(-6 113.5 12.5)"/></g>`;
const hull=`<g class="xmas-hull"><path d="M12 36C12 28 22 26 26 32C32 50 44 64 66 68H146C170 68 182 58 192 44C198 34 212 32 216 42C219 50 212 57 205 54C210 66 204 92 186 104C180 108 172 110 162 110H40C22 110 14 98 14 84Z" fill="#b8323f"/><path d="M44 78H176C185 78 187 87 181 95C177 100 171 102 162 102H48C40 102 36 96 36 89C36 82 39 78 44 78Z" fill="#a52b37" stroke="#e7bd62" stroke-width="2.2"/><path d="M80 91c8-10 18-10 22 0s14 10 22 0" fill="none" stroke="#e7bd62" stroke-width="2.2" stroke-linecap="round"/><g fill="#e7bd62"><circle cx="64" cy="90" r="2.4"/><circle cx="142" cy="90" r="2.4"/><circle cx="160" cy="90" r="1.8"/><circle cx="50" cy="90" r="1.8"/></g><path d="M26 32C32 50 44 64 66 68H146C170 68 182 58 192 44C198 34 212 32 216 42" fill="none" stroke="#e7bd62" stroke-width="3.2" stroke-linecap="round"/><path d="M205 54C199 51 199 44 205 43C209 43 210 47 207 48" fill="none" stroke="#e7bd62" stroke-width="2.4" stroke-linecap="round"/><path d="M17 42C11 37 15 30 21 33" fill="none" stroke="#e7bd62" stroke-width="2.4" stroke-linecap="round"/><path d="M70 73H150" stroke="#d65a64" stroke-width="2" stroke-linecap="round" opacity=".8"/></g>`;
const sleigh=art(`${[[36,124,8],[17,106,5.5],[8,136,4.5],[25,150,4],[43,96,4]].map(p=>sparkle(...p)).join('')}${harness}<g class="xmas-santa-sleigh" transform="translate(46 18)">${runners}${gifts}${santa}${hull}</g><path class="xmas-rein" d="M206 76Q300 92 384 93" fill="none" stroke="#7b3a2b" stroke-width="1.8" stroke-linecap="round"/>${deer(327,39,false,0)}${deer(438,25,false,1)}${deer(547,11,true,2)}`,'0 0 660 180','xmas-sleigh-art');

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
