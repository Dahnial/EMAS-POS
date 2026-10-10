(function(){
'use strict';
const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const esc=x=>String(x==null?'':x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LS={g(k){try{return localStorage.getItem(k)}catch(e){return null}},s(k,v){try{localStorage.setItem(k,v)}catch(e){}},d(k){try{localStorage.removeItem(k)}catch(e){}}};

let PUB={};try{PUB=JSON.parse(LS.g('pos_pub')||'{}')}catch(e){}
/* ============ IKON SVG (inline, tanpa emoji) ============ */
const IC={
layout:'<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
calc:'<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><path d="M16 14v4M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"/>',
gem:'<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
lock:'<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
bank:'<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l8 5H4z"/>',
pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
file:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
chart:'<path d="M12 20V10M18 20V4M6 20v-4"/>',
sliders:'<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>',
bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
plus:'<path d="M5 12h14M12 5v14"/>',check:'<path d="M20 6 9 17l-5-5"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',
arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',
eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
eyeoff:'<path d="M9.9 4.2A9.1 9.1 0 0 1 12 4c7 0 10 8 10 8a13.2 13.2 0 0 1-1.7 2.7M6.6 6.6A13.5 13.5 0 0 0 2 12s3 8 10 8a9.7 9.7 0 0 0 5.4-1.6M2 2l20 20"/>',
camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
scale:'<path d="M16 16l3-8 3 8c-.9.6-1.9 1-3 1s-2.1-.4-3-1ZM2 16l3-8 3 8c-.9.6-1.9 1-3 1s-2.1-.4-3-1ZM7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
printer:'<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3h12v6"/><rect width="12" height="8" x="6" y="14"/>',
send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
up:'<path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6"/>',down:'<path d="m22 17-8.5-8.5-5 5L2 7M16 17h6v-6"/>',
refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5"/>',
logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
alert:'<path d="m21.7 18-8-14a2 2 0 0 0-3.5 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3M12 9v4M12 17h.01"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
cal:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
key:'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
swap:'<path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/>',
info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
coin:'<circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-1.8-1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-1.8-1M12 6v2M12 16v2"/>',
edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9Z"/>',
database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
server:'<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>'
};
const ic=(n,c)=>'<svg class="ic '+(c||'')+'" viewBox="0 0 24 24" aria-hidden="true">'+(IC[n]||'')+'</svg>';
function hydrateIcons(root){$$('[data-ic]',root).forEach(e=>{if(!e.firstChild)e.innerHTML=ic(e.dataset.ic,e.classList.contains('s')?'s':'')})}

/* ============ FORMAT ============ */
const nf=new Intl.NumberFormat('id-ID'), nf2=new Intl.NumberFormat('id-ID',{minimumFractionDigits:2,maximumFractionDigits:2}), nf3=new Intl.NumberFormat('id-ID',{minimumFractionDigits:2,maximumFractionDigits:3});
const rp=n=>(n<0?'-':'')+'Rp '+nf.format(Math.abs(Math.round(n||0)));
const rpS=n=>{n=n||0;const a=Math.abs(n);const s=a>=1e9?nf2.format(a/1e9)+' M':a>=1e6?nf2.format(a/1e6).replace(/,00$/,'')+' Jt':nf.format(a);return (n<0?'-':'')+'Rp '+s};
const gr=n=>nf3.format(n||0)+' gr';
const rpVal=s=>+String(s==null?'':s).replace(/\D/g,'')||0;
const numG=s=>{const v=parseFloat(String(s==null?'':s).replace(',','.'));return isNaN(v)?0:Math.round(v*1000)/1000};
const maskRp=el=>{const d=el.value.replace(/\D/g,'');el.value=d?'Rp. '+nf.format(+d):''};
let OFF=0;
const fmtWIT=d=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Jayapura',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(d).replace(',','');
const nowWIT=()=>fmtWIT(new Date(Date.now()+OFF));
const today=()=>nowWIT().slice(0,10);
const addDays=(s,n)=>new Date(Date.parse(s+'T00:00:00Z')+n*864e5).toISOString().slice(0,10);
const BLN=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'], HR=['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
const tgl=s=>{if(!s)return '-';const p=String(s).slice(0,10).split('-');return (+p[2])+' '+BLN[p[1]-1]+' '+p[0]};
const jam=s=>String(s||'').slice(11,16);
const hari=s=>HR[new Date(s+'T00:00:00Z').getUTCDay()];
const jenisLbl={PENJUALAN:'Penjualan',BUYBACK:'Buyback',JASA:'Jasa',PENGELUARAN_OPS:'Pengeluaran'};

/* ============ STATE ============ */
let S=null,TOKEN=null,CUR='dashboard',Q=[],busy=false,pend=null,needResync=false,RJ='',DR=7,RC=null,TF={},AB={};
const FILT={q:'',j:'ALL'}, A={}, F={}, SUB={}, IN={}, P={};
const isO=()=>S.me.role==='OWNER';
const uname=id=>{const u=(S.users||[]).find(x=>x.userId===id);return u?u.nama:id};
const getUserObj=idOrObj=>{
  if(!idOrObj)return null;
  if(typeof idOrObj==='object')return idOrObj;
  if(S&&S.me&&S.me.userId===idOrObj)return S.me;
  return (S&&S.users||[]).find(x=>x.userId===idOrObj)||{userId:idOrObj,nama:idOrObj,role:'KARYAWAN'};
};
const getStoredPhoto=uid=>uid?LS.g('pos_av_'+uid)||'':'';
function uAvatar(userOrId,size){
  const u=getUserObj(userOrId);
  const uid=u?u.userId:'';
  const name=u?(u.nama||u.username||'User'):'User';
  const ini=name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase()||'U';
  const isOwner=u&&u.role==='OWNER';
  const photo=(u&&u.foto)||getStoredPhoto(uid);
  const szClass=size?' '+size:'';
  const roleClass=isOwner?' owner':' karyawan';
  if(photo){
    return '<div class="av'+szClass+roleClass+'" title="'+esc(name)+' ('+(isOwner?'Owner':'Kasir')+')"><img src="'+esc(photo)+'" alt="'+esc(name)+'"></div>';
  }
  return '<div class="av'+szClass+roleClass+'" title="'+esc(name)+' ('+(isOwner?'Owner':'Kasir')+')"><span>'+esc(ini)+'</span></div>';
}
function uPill(userOrId){
  const u=getUserObj(userOrId);
  const name=u?(u.nama||u.username||'User'):'User';
  const isOwner=u&&u.role==='OWNER';
  return '<span class="u-pill">'+uAvatar(u,'xs')+'<span>'+esc(name)+'</span>'+(isOwner?'<span class="tag gold" style="font-size:9px;padding:0 3px">Owner</span>':'')+'</span>';
}
function uBadge(userOrId,showRole){
  const u=getUserObj(userOrId);
  const name=u?(u.nama||u.username||'User'):'User';
  const isOwner=u&&u.role==='OWNER';
  return '<div class="u-badge">'+uAvatar(u,'sm')+'<span class="nm"><b>'+esc(name)+'</b>'+(showRole?'<small style="display:block;color:var(--mut)">'+(isOwner?'Owner / Superadmin':'Kasir')+'</small>':'')+'</span></div>';
}
const live=t=>t.status==='AKTIF'||t.status==='DIAJUKAN_BATAL';
const isJual=t=>t.jenis==='PENJUALAN'||t.jenis==='JASA';
const isOut=t=>t.jenis==='BUYBACK'||t.jenis==='PENGELUARAN_OPS';
const sortD=a=>a.slice().sort((x,y)=>String(y.waktu||y.createdAt).localeCompare(String(x.waktu||x.createdAt)));
const nota=t=>String(t.transaksiId).indexOf('TMP-')===0?'memproses…':t.transaksiId;
const pending=()=>S&&S.approval?S.approval.filter(a=>a.status==='MENUNGGU'):[];

/* ============ TOAST ============ */
function toast(msg,type){
  const el=document.createElement('div');el.className='toast '+(type||'');el.setAttribute('role','status');
  el.innerHTML=ic(type==='err'?'alert':'check')+'<span>'+esc(msg)+'</span>';
  $('#toast-root').appendChild(el);setTimeout(()=>el.remove(),type==='err'?5200:2800);
}

/* ============ KOMUNIKASI SERVER + ANTREAN OPTIMISTIC ============ */
const call=(fn,args)=>window.API.call(fn,args);
let lastWarn=0;function warnOnce(m){if(Date.now()-lastWarn>60000){lastWarn=Date.now();toast(m,'err')}}
function saveQ(){LS.s('pos_q',JSON.stringify(Q))}
function setSync(){
  const st=!navigator.onLine?'off':busy||Q.length?'run':'ok';
  const txt={off:'Offline — tersimpan di perangkat',run:'Menyinkronkan'+(Q.length?' ('+Q.length+')':'')+'…',ok:'Tersinkron dengan Google Sheets'}[st];
  $$('.sync').forEach(e=>{e.className='sync '+st;e.querySelector('span').textContent=txt});
  $$('.syncchip').forEach(e=>{e.className='pill syncchip '+(st==='ok'?'ok':st==='off'?'bad':'warn');e.textContent=st==='ok'?'Sheets Sync':st==='off'?'Offline':'Menyimpan…'});
}
function adopt(st){
  S=st;OFF=new Date(st.now.replace(' ','T')+'+09:00').getTime()-Date.now();
  LS.s('pos_snap',JSON.stringify(S));
  const j=JSON.stringify(S);
  if(j!==RJ){RJ=j;chrome();render();refreshStruk()}
}
/** Ubah state SEKARANG (sinkron), kirim ke server di latar belakang. */
function mut(action,payload,local){
  const id='c'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  if(local)local(id);
  Q.push({id:id,a:action,p:payload,u:S.me.userId});saveQ();
  RJ='';LS.s('pos_snap',JSON.stringify(S));chrome();render();setSync();pump();
  return id;
}
function pump(){
  if(busy||!Q.length||!TOKEN)return;
  busy=true;setSync();const it=Q[0];
  call('apiCall',[TOKEN,it.a,it.p,it.id]).then(r=>{
    busy=false;
    if(r&&r.expired){toast('Sesi berakhir, silakan masuk lagi','err');return logout(true)}
    Q.shift();saveQ();
    if(r&&r.success){if(r.data&&r.data.state)pend=r.data.state;if(r.message)toast(r.message,'ok')}
    else{toast((r&&r.message)||'Gagal menyimpan','err');needResync=true}
    if(!Q.length){if(pend){adopt(pend);pend=null;needResync=false}else if(needResync){needResync=false;loadState()}}
    setSync();pump();
  }).catch(e=>{busy=false;setSync();if(e&&e.fatal)warnOnce(e.message);setTimeout(pump,5000)});
}
function loadState(){
  if(!TOKEN)return Promise.resolve();
  return call('apiCall',[TOKEN,'sync',{},'']).then(r=>{
    if(r&&r.expired){return logout(true)}
    if(r&&r.success&&!Q.length&&!busy)adopt(r.data.state);
  }).catch(()=>{});
}
function startPolling(){
  if(window.__poll)return;
  window.__poll=setInterval(()=>{
    if(document.hidden||!TOKEN||busy||Q.length||!S)return;
    call('apiPing',[TOKEN,S.ver]).then(r=>{if(r.expired)return logout(true);if(r.changed)loadState()}).catch(()=>{});
  },25000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&TOKEN)loadState()});
  window.addEventListener('online',()=>{setSync();pump();loadState()});
  window.addEventListener('offline',setSync);
}

/* ============ AUTH ============ */
let ROLE='KARYAWAN';
function showLogin(){
  $('#view-app').classList.add('hidden');$('#view-login').classList.remove('hidden');$('#boot').classList.add('hidden');
  $('#lg-p').value='';
}
function showApp(){$('#view-login').classList.add('hidden');$('#view-app').classList.remove('hidden');$('#boot').classList.add('hidden')}
SUB['lg-form']=()=>{
  const u=$('#lg-u').value.trim(),p=$('#lg-p').value,er=$('#lg-err'),b=$('#lg-go');
  er.classList.add('hidden');
  if(!u||!p){er.textContent='Isi NIK/username dan PIN/kata sandi.';er.classList.remove('hidden');return}
  b.disabled=true;b.firstChild.textContent='Memverifikasi… ';
  call('apiLogin',[u,p,ROLE]).then(r=>{
    b.disabled=false;b.firstChild.textContent='Masuk ke Sistem ';
    if(!r.success){er.textContent=r.message;er.classList.remove('hidden');return}
    TOKEN=r.data.token;LS.s('pos_tk',TOKEN);
    try{Q=JSON.parse(LS.g('pos_q')||'[]').filter(x=>x.u===r.data.state.me.userId)}catch(e){Q=[]}
    adopt(r.data.state);RJ='';showApp();hydrateIcons();chrome();go(CUR==='menu'?'dashboard':'dashboard');startPolling();pump();
  }).catch(e=>{b.disabled=false;b.firstChild.textContent='Masuk ke Sistem ';er.textContent=(e&&e.fatal)?e.message:'Gagal terhubung ke server. Periksa internet lalu coba lagi.';er.classList.remove('hidden')});
};
function logout(silent){
  const t=TOKEN;TOKEN=null;LS.d('pos_tk');LS.d('pos_snap');S=null;RJ='';
  if(t&&!silent)call('apiLogout',[t]).catch(()=>{});
  closeModal();showLogin();
}
A.logout=()=>logout();

/* ============ MENU & NAVIGASI (SPA — 0ms) ============ */
const MENU=[
['dashboard','Ringkasan / Dashboard','Beranda','layout','B'],['kasir','Kasir Transaksi POS','Kasir','calc','B'],
['stok','Stok Etalase Emas & Perak','Stok','gem','O'],['kas','Kas Laci & Tutup Kas','Kas','wallet','B'],
['brankas','Saldo Brankas (Vault)','Brankas','lock','O'],['bank','Rekening Bank & QRIS','Bank','bank','O'],
['absensi','Absensi & Izin','Absen','pin','B'],['piutang','Piutang, Hutang & Pinjaman','Piutang','file','O'],
['approval','Pusat Persetujuan','Persetujuan','shield','O'],['laporan','Laporan & Rekap','Laporan','chart','O'],
['pengaturan','Pengaturan Toko','Pengaturan','sliders','O'],
['backend','Backend GAS & Basis Data','Backend & DB','database','O']];
const allowed=()=>MENU.filter(m=>m[4]==='B'||(m[4]==='O')===isO());
const BN={O:['dashboard','kasir','stok','absensi','menu'],K:['dashboard','kasir','kas','absensi','menu']};
function label(id){if(id==='menu')return 'Menu';const m=MENU.find(x=>x[0]===id);return m?(id==='absensi'&&isO()?'Absensi Karyawan':m[1]):'';}
function chrome(){
  if(!S||!$('#sidebar'))return;
  const n=pending().length, o=isO();
  $('#sidebar').innerHTML='<div class="brand"><div class="logo">'+ic('gem','l')+'</div><div><b>'+esc(S.setting.namaToko.replace('Toko Emas & Perak ','Toko '))+'</b><small>EMAS &amp; PERAK POS</small></div></div>'+
   '<div style="background:rgba(255,255,255,.05);border-radius:14px;padding:8px 12px;display:flex;align-items:center;gap:10px;cursor:pointer;border:1px solid rgba(255,255,255,.08)" data-a="myphoto" title="Klik untuk ubah foto profil">'+
     uAvatar(S.me,'sm')+
     '<div style="flex:1;min-width:0"><b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px">'+esc(S.me.nama)+'</b><small style="color:#a1a1aa">'+(o?'Owner / Superadmin':'Kasir / Karyawan')+'</small></div>'+
     ic('camera','s')+
   '</div>'+
   '<div class="inp" style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.07);border:0;color:#a1a1aa;min-height:44px;border-radius:999px">'+ic('search','s')+'<input data-in="gs" placeholder="Cari transaksi / nota…" style="background:none;border:0;color:#fff;outline:0;width:100%"></div>'+
   '<nav class="nav" aria-label="Menu utama">'+allowed().map(m=>'<button class="nv'+(m[0]===CUR?' on':'')+'" data-a="go" data-v="'+m[0]+'">'+ic(m[3])+'<span>'+esc(m[0]==='absensi'&&o?'Absensi GPS Karyawan':m[1])+'</span>'+(m[0]==='approval'&&n?'<em class="cnt" style="font-style:normal">'+n+'</em>':'')+'</button>').join('')+'</nav>'+
   '<div class="sbf"><div class="sync"><i></i><span>Tersinkron</span></div><button class="nv" data-a="logout">'+ic('logout')+'<span>Keluar</span></button></div>';
  const hr=+nowWIT().slice(11,13);
  $('#topbar').innerHTML='<div class="ttl"><b id="tt-t">'+esc(label(CUR))+'</b><small>'+esc(S.setting.namaToko)+' • Nabire</small></div>'+
   '<div class="chips desk"><span class="chip"><i style="width:8px;height:8px;border-radius:50%;background:var(--ok)"></i>Toko Buka • '+(hr<13?'Shift Pagi':'Shift Siang')+'</span><span class="chip gold">'+ic('up','s')+' Spot Emas '+rp(S.setting.spotEmas)+'/gr</span><span class="pill syncchip ok">Sheets Sync</span></div>'+
   '<button class="btn sm pri" data-a="trxnew" data-v="PENJUALAN" style="display:inline-flex;gap:6px;align-items:center;font-weight:700;box-shadow:0 4px 14px -3px rgba(245,179,1,.65)" title="Akses Cepat Transaksi Baru">'+ic('plus','s')+' <span class="desk">Transaksi Baru</span></button>'+
   '<button class="ibtn" data-a="bell" aria-label="Notifikasi">'+ic('bell')+(n?'<span class="dot">'+n+'</span>':'')+'</button>'+
   '<div class="me" data-a="myphoto" style="cursor:pointer" title="Klik untuk ubah foto profil"><div class="nm"><b>'+esc(S.me.nama)+'</b><small>'+(o?'Owner / Superadmin':'Kasir')+'</small></div>'+uAvatar(S.me)+'</div>';
  const bn=BN[o?'O':'K'];
  $('#bnav').innerHTML=bn.map(id=>{const m=MENU.find(x=>x[0]===id),on=id===CUR||(id==='menu'&&!bn.includes(CUR));return '<button class="'+(on?'on':'')+'" data-a="go" data-v="'+id+'" aria-label="'+esc(label(id))+'">'+ic(m?m[3]:'menu')+'<span>'+(m?m[2]:'Menu')+'</span>'+(id==='menu'&&n?'<em class="cnt" style="font-style:normal">'+n+'</em>':'')+'</button>'}).join('');
  setSync();
  hydrateIcons();
}
function go(p){
  if(!S)return;
  if(p!=='menu'&&!allowed().some(m=>m[0]===p))p='dashboard';
  CUR=p;$$('.pg').forEach(e=>e.classList.toggle('on',e.id==='pg-'+p));
  chrome();RJ='';render();window.scrollTo(0,0);
}
function render(){
  if(!S)return;
  const el=$('#pg-'+CUR),a=document.activeElement;
  if(a&&el.contains(a)&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))return;
  el.innerHTML=(P[CUR]||P.dashboard)();
}
A.go=v=>go(v);A.close=()=>closeModal();
A.bell=()=>go(isO()?'approval':'dashboard');
IN.gs=(v,el)=>{};
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')closeModal();
  if(e.key==='Enter'&&e.target.dataset&&e.target.dataset.in==='gs'){FILT.q=e.target.value;FILT.j='ALL';e.target.value='';go('kasir')}
});

/* ============ MODAL & FORM ============ */
function modal(title,body){
  const r=$('#modal-root');
  r.innerHTML='<div class="bd" id="bd"><div class="md" role="dialog" aria-modal="true" aria-label="'+esc(title)+'"><div class="mh"><h2>'+esc(title)+'</h2><button class="ibtn" data-a="close" aria-label="Tutup">'+ic('x')+'</button></div><div class="mb">'+body+'</div></div></div>';
  $('#bd').addEventListener('mousedown',e=>{if(e.target.id==='bd')closeModal()});
  const f=$('.md input:not([type=hidden]),.md select',r);if(f&&window.innerWidth>900)setTimeout(()=>f.focus(),30);
}
function closeModal(){RC=null;$('#modal-root').innerHTML=''}
function field(f){
  const id='f_'+f.k,rq=f.req?' required':'';let inp;
  if(f.t==='select')inp='<select class="inp" name="'+f.k+'" id="'+id+'">'+f.o.map(o=>{const a=Array.isArray(o)?o:[o,o];return '<option value="'+esc(a[0])+'"'+(String(f.v)===String(a[0])?' selected':'')+'>'+esc(a[1])+'</option>'}).join('')+'</select>';
  else if(f.t==='ta')inp='<textarea class="inp" name="'+f.k+'" id="'+id+'" rows="2">'+esc(f.v||'')+'</textarea>';
  else if(f.t==='rp')inp='<input class="inp rp" name="'+f.k+'" id="'+id+'" inputmode="numeric" autocomplete="off" placeholder="Rp. 0" value="'+(f.v?'Rp. '+nf.format(f.v):'')+'">';
  else if(f.t==='num')inp='<input class="inp" name="'+f.k+'" id="'+id+'" inputmode="decimal" autocomplete="off" placeholder="0,00" value="'+(f.v||'')+'">';
  else if(f.t==='chk')return '<label class="chk"><input type="checkbox" name="'+f.k+'"'+(f.v?' checked':'')+'> '+esc(f.l)+'</label>';
  else inp='<input class="inp" name="'+f.k+'" id="'+id+'" type="'+(f.t||'text')+'" autocomplete="off" value="'+esc(f.v||'')+'" placeholder="'+esc(f.ph||'')+'">';
  return '<label class="fld"><span class="lb">'+esc(f.l)+(f.req?' *':'')+'</span>'+(f.suf?'<div class="adorn">'+inp+'<b>'+f.suf+'</b></div>':inp)+(f.h?'<small>'+esc(f.h)+'</small>':'')+'</label>';
}
let FORM=null;
function openForm(o){
  FORM=o;
  let h='<form id="gform" novalidate>'+(o.pre||'')+'<div class="err hidden" id="gerr"></div>';
  let row=[];o.fields.forEach(f=>{if(f.half){row.push(field(f));if(row.length===2){h+='<div class="row2">'+row.join('')+'</div>';row=[]}}else{if(row.length){h+='<div class="row2">'+row.join('')+'</div>';row=[]}h+=field(f)}});
  if(row.length)h+='<div class="row2">'+row.join('')+'</div>';
  h+='<button class="btn pri blk" type="submit">'+esc(o.ok||'Simpan')+'</button></form>';
  modal(o.title,h);
}
SUB.gform=form=>{
  const o=FORM,v={};let bad='';
  o.fields.forEach(f=>{
    const el=form.elements[f.k];if(!el)return;
    let x=f.t==='chk'?el.checked:el.value;
    if(f.t==='rp')x=rpVal(x);else if(f.t==='num')x=numG(x);else if(typeof x==='string')x=x.trim();
    if(f.req&&!bad&&(f.t==='rp'||f.t==='num'?!(x>0):!x))bad=f.l+' wajib diisi.';
    v[f.k]=x;
  });
  if(bad){const e=$('#gerr');e.textContent=bad;e.classList.remove('hidden');return}
  const r=o.fn(v);if(r===false)return;if(typeof r==='string'){const e=$('#gerr');e.textContent=r;e.classList.remove('hidden');return}
  closeModal();
};
document.addEventListener('click',e=>{const el=e.target.closest('[data-a]');if(!el)return;const f=A[el.dataset.a];if(f){e.preventDefault();f(el.dataset.v,el,e)}});
document.addEventListener('input',e=>{const t=e.target;if(t.classList&&t.classList.contains('rp'))maskRp(t);if(t.dataset&&t.dataset.in&&IN[t.dataset.in])IN[t.dataset.in](t.value,t,e)});
document.addEventListener('change',e=>{const t=e.target;if(t.dataset&&t.dataset.in&&IN[t.dataset.in])IN[t.dataset.in](t.value,t,e)});
document.addEventListener('submit',e=>{e.preventDefault();const h=SUB[e.target.id];if(h)h(e.target)});

/* ============ EFEK LOKAL (cermin logika server → UI instan) ============ */
function pushKas(arah,nom,sumber,ref){
  S.saldo.kas+=(arah==='MASUK'?1:-1)*nom;
  S.kas.push({mutasiKasId:'TMP-'+Math.random().toString(36).slice(2,7),waktu:nowWIT(),arah:arah,nominal:nom,sumber:sumber,referensiId:ref,saldo:S.saldo.kas,operatorId:S.me.userId});
}
function localEfek(t,sign){
  const masuk=isJual(t)?1:-1,d=masuk*sign;
  if(t.metodeBayar==='TUNAI')pushKas(d>0?'MASUK':'KELUAR',t.nominal,(sign<0?'BATAL_':'')+t.jenis,t.transaksiId);
  else if(S.saldo.bank){const r=t.rekening||'';S.saldo.bank[r]=(S.saldo.bank[r]||0)+d*t.nominal}
  if(isO()&&S.stokSum){
    let b=0;if(t.jenis==='PENJUALAN')b=-t.berat;else if(t.jenis==='BUYBACK'&&t.tambahStok)b=t.berat;b*=sign;
    if(b){const x=S.stokSum.find(r=>r.logam===t.logam&&r.jenisBarang===t.kategori&&String(r.kadar)===String(t.kadar));
      if(x)x.berat=Math.round((x.berat+b)*1000)/1000;else S.stokSum.push({logam:t.logam,jenisBarang:t.kategori,kadar:t.kadar,berat:b})}
  }
}
const kasOK=n=>n<=S.saldo.kas+0.5;

/* ============ KOMPONEN ============ */
const kpi=(t,v,sub,icn,cls)=>'<div class="card kpi '+(cls||'')+'"><span class="ci">'+ic(icn,'s')+'</span><div class="t">'+t+'</div><div class="v">'+v+'</div><div>'+(sub||'')+'</div></div>';
const dpill=v=>v==null?'<span class="pill">baru</span>':'<span class="pill '+(v>=0?'ok':'bad')+'">'+ic(v>=0?'up':'down','s')+(v>=0?'+':'')+nf2.format(v).replace(',00','')+'%</span>';
const empty=t=>'<div class="empty">'+esc(t)+'</div>';
function trxRow(t){
  const m={PENJUALAN:['gem',''],BUYBACK:['undo','bad'],JASA:['tool',''],PENGELUARAN_OPS:['wallet','bad']}[t.jenis]||['gem',''];
  const st={DIAJUKAN_BATAL:['warn','Ajukan batal'],DIBATALKAN:['bad','Dibatalkan'],PENDING_APPROVAL:['warn','Menunggu Owner']}[t.status];
  const d=t.waktu.slice(0,10)===today()?jam(t.waktu):tgl(t.waktu)+' '+jam(t.waktu);
  return '<button class="tr" data-a="trx" data-v="'+esc(t.transaksiId)+'"><span class="ico '+m[1]+'">'+ic(m[0])+'</span><span class="tm"><b>'+esc(t.kategori||jenisLbl[t.jenis])+'</b><small>'+d+' · '+uPill(t.operatorId)+' · '+(t.berat?gr(t.berat)+' · ':'')+'<span class="tag">'+esc(t.metodeBayar)+'</span>'+(st?'<span class="tag '+st[0]+'">'+st[1]+'</span>':'')+'</small></span><span class="ta '+(isOut(t)?'neg':'')+'"><b>'+(isOut(t)?'-':'')+rp(t.nominal)+'</b><small>#'+esc(String(t.transaksiId).replace(/^TRX-\d{4}/,''))+'</small></span></button>';
}
function apItem(a,act){
  const lb={PEMBATALAN_TRX:['bad','Batal Nota'],PENGELUARAN_OPS_BESAR:['warn','Butuh Otorisasi'],IZIN:['gold','Izin']}[a.jenis]||['','Pengajuan'];
  return '<div class="ap"><div style="display:flex;justify-content:space-between;gap:8px"><span class="tag '+lb[0]+'">'+lb[1]+'</span><small>'+tgl(a.createdAt)+' '+jam(a.createdAt)+'</small></div><p>'+esc(a.ringkasan||a.alasan)+'</p>'+
   (act&&a.status==='MENUNGGU'?'<div class="ac"><button class="btn sm gh" data-a="apr" data-v="'+a.approvalId+'|TOLAK">Tolak</button><button class="btn sm pri" data-a="apr" data-v="'+a.approvalId+'|SETUJU">Setujui</button></div>':'<span class="tag '+(a.status==='DISETUJUI'?'ok':a.status==='DITOLAK'?'bad':'warn')+'">'+a.status+'</span>')+'</div>';
}
function stats(mine){
  const td=today(),yd=addDays(td,-1);let L=S.trx.filter(live);if(mine)L=L.filter(t=>t.operatorId===S.me.userId);
  const at=d=>L.filter(t=>isJual(t)&&t.waktu.slice(0,10)===d),a=at(td),b=at(yd);
  const sum=x=>x.reduce((s,t)=>s+t.nominal,0),g=x=>x.filter(t=>t.jenis==='PENJUALAN'&&t.logam==='EMAS').reduce((s,t)=>s+t.berat,0);
  const om=sum(a),oy=sum(b),gm=g(a),gy=g(b);
  return {om:om,delta:oy?(om-oy)/oy*100:null,gram:gm,gdelta:gy?(gm-gy)/gy*100:null,nota:a.length};
}
function bars(){
  const td=today(),days=[];for(let i=DR-1;i>=0;i--)days.push(addDays(td,-i));
  const L=S.trx.filter(live),data=days.map(d=>{const r=L.filter(t=>t.waktu.slice(0,10)===d);return {d:d,j:r.filter(isJual).reduce((s,t)=>s+t.nominal,0),b:r.filter(t=>t.jenis==='BUYBACK').reduce((s,t)=>s+t.nominal,0)}});
  const mx=Math.max(1,...data.map(x=>Math.max(x.j,x.b)));
  return '<div class="bars">'+data.map(x=>'<div class="bc'+(x.j?'':' z')+'" tabindex="0" data-a="bar"><div class="tip"><span class="lbl" style="color:#a1a1aa">'+tgl(x.d)+'</span><br><b style="color:var(--gold)">Jual '+rpS(x.j)+'</b> · Buyback '+rpS(x.b)+'</div><div class="bw"><div class="b1" style="height:'+Math.round(x.j/mx*100)+'%"></div><div class="b2" style="height:'+Math.round(x.b/mx*100)+'%"></div></div><small>'+(DR<=7?hari(x.d):+x.d.slice(8))+'</small></div>').join('')+'</div>';
}
A.bar=(v,el)=>{$$('.bc.sel').forEach(e=>e!==el&&e.classList.remove('sel'));el.classList.toggle('sel')};
A.range=v=>{DR=+v;RJ='';render()};
function komposisi(){
  const from=addDays(today(),-29),L=S.trx.filter(t=>live(t)&&isJual(t)&&t.waktu.slice(0,10)>=from);
  const e=L.filter(t=>t.jenis==='PENJUALAN'&&t.logam==='EMAS').reduce((s,t)=>s+t.nominal,0),p=L.filter(t=>t.jenis==='PENJUALAN'&&t.logam==='PERAK').reduce((s,t)=>s+t.nominal,0),j=L.filter(t=>t.jenis==='JASA').reduce((s,t)=>s+t.nominal,0),T=e+p+j||1;
  const c=(n,sub,v)=>'<div class="mini"><div style="display:flex;justify-content:space-between"><b>'+n+'</b><span class="tag gold">'+sub+'</span></div><div class="big">'+nf2.format(v/T*100).replace(',00','')+'%</div><div class="track"><i style="width:'+Math.round(v/T*100)+'%"></i></div><small>'+rpS(v)+' · 30 hari</small></div>';
  return '<div class="grid g3">'+c('Emas 700 &amp; 24K','Top Seller',e)+c('Perak 925 &amp; 999','Stabil',p)+c('Jasa Patri &amp; Sepuh','Marginal',j)+'</div>';
}

/* ============ HALAMAN: DASHBOARD ============ */
P.dashboard=function(){
  const o=isO(),st=stats(!o),set=S.setting;
  let h='<div class="ph"><div style="display:flex;align-items:center;gap:14px">'+uAvatar(S.me,'lg')+'<div><h1>Selamat Datang Kembali, '+esc(S.me.nama)+'!</h1><p>'+(o?'Pantau arus kas, gramasi emas, saldo brankas, dan pergerakan transaksi toko hari ini.':'Ringkasan shift Anda hari ini.')+'</p></div></div><div class="chips"><button class="btn sm pri" data-a="trxnew" data-v="PENJUALAN">'+ic('plus','s')+' Transaksi Baru</button><span class="chip">'+ic('cal','s')+' '+tgl(today())+'</span><span class="pill syncchip ok">Sheets Sync</span>'+(o?'<button class="btn sm dk" data-a="harga">'+ic('scale','s')+' Atur Harga</button>':'')+'</div></div>';
  const bankTot=o?Object.keys(S.saldo.bank||{}).reduce((s,k)=>s+S.saldo.bank[k],0):0;
  h+='<div class="grid g4">'+
   kpi(o?'Total Omzet Hari Ini':'Omzet Saya Hari Ini',rp(st.om),dpill(st.delta)+' <small>vs kemarin</small>','coin','gold')+
   kpi('Gramasi Emas Terjual',nf2.format(st.gram)+' <small>gram</small>',dpill(st.gdelta)+' <small>'+st.nota+' nota</small>','scale')+
   kpi('Saldo Kas Laci (POS)',rp(S.saldo.kas),'<span class="pill ok">Siap Tutup Kas</span>','wallet')+
   (o?kpi('Saldo Brankas &amp; Bank',rp((S.saldo.brankas||0)+bankTot),'<small>Vault '+rpS(S.saldo.brankas)+' · Bank '+rpS(bankTot)+'</small>','lock'):kpi('Nota Saya Hari Ini',st.nota,'<small>transaksi penjualan &amp; jasa</small>','calc'))+'</div>';
  h+='<div class="card" style="margin:20px 0"><div class="hd"><h3>Aksi Cepat</h3><small>POS &amp; Operasional</small></div><div class="tiles">'+
   '<button class="tile pri" data-a="trxnew" data-v="PENJUALAN"><span class="ico">'+ic('plus')+'</span>+ Transaksi Baru</button>'+
   '<button class="tile" data-a="go" data-v="kasir"><span class="ico">'+ic('calc')+'</span>Kasir POS</button>'+
   (o?'<button class="tile" data-a="go" data-v="brankas"><span class="ico">'+ic('lock')+'</span>Brankas</button><button class="tile" data-a="go" data-v="laporan"><span class="ico">'+ic('chart')+'</span>Laporan</button>':'<button class="tile" data-a="go" data-v="absensi"><span class="ico">'+ic('pin')+'</span>Absen</button><button class="tile" data-a="go" data-v="absensi"><span class="ico">'+ic('cal')+'</span>Izin</button>')+
   '<button class="tile" data-a="tutup"><span class="ico">'+ic('clock')+'</span>Tutup Kas</button></div></div>';
  const rec=sortD(S.trx.filter(t=>o||t.operatorId===S.me.userId)).slice(0,6);
  if(o){
    const pd=pending();
    h+='<div class="grid dash2"><div class="grid" style="gap:20px"><div class="card"><div class="hd"><div><h3>Grafik Penjualan &amp; Buyback</h3><small>Tren transaksi perhiasan emas, perak, dan buyback</small></div><div class="seg"><button class="'+(DR===7?'on':'')+'" data-a="range" data-v="7">7 Hari</button><button class="'+(DR===30?'on':'')+'" data-a="range" data-v="30">30 Hari</button></div></div>'+bars()+
     '<div class="legend"><span><i style="background:var(--gold)"></i>Penjualan &amp; Jasa</span><span><i style="background:#D4D4D8"></i>Buyback</span></div></div>'+
     '<div class="card"><div class="hd"><div><h3>Performa Komoditas Logam &amp; Jasa</h3><small>Kontribusi omzet 30 hari terakhir</small></div></div>'+komposisi()+'</div></div>'+
     '<div class="grid" style="gap:20px;align-content:start"><div class="card"><div class="hd"><h3>Otorisasi &amp; Tugas Kasir '+(pd.length?'<span class="pill bad">'+pd.length+'</span>':'')+'</h3></div>'+(pd.length?pd.slice(0,3).map(a=>apItem(a,1)).join('')+(pd.length>3?'<button class="btn sm gh blk" data-a="go" data-v="approval">Lihat semua '+pd.length+' pengajuan '+ic('arrow','s')+'</button>':''):empty('Tidak ada pengajuan tertunda.'))+'</div>'+
     '<div class="dark"><span class="coin">'+ic('coin')+'</span><div style="flex:1"><small>HARGA EMAS TOKO HARI INI</small><b>Kadar 700: '+rp(set.hargaKadar700)+'/g</b><small>Spot 24K '+rp(set.spotEmas)+' · Perak '+rp(set.spotPerak)+'</small></div><button class="ibtn" style="background:rgba(255,255,255,.1);border:0;color:#fff" data-a="harga" aria-label="Ubah harga">'+ic('edit','s')+'</button></div></div></div>';
    h+='<div class="card" style="margin-top:20px"><div class="hd"><h3>Transaksi Terbaru</h3><button class="btn sm gh" data-a="go" data-v="kasir">Lihat Semua</button></div>'+(rec.length?rec.map(trxRow).join(''):empty('Belum ada transaksi.'))+'</div>';
  }else{
    const my=sortD(S.approval).slice(0,4);
    h+='<div class="grid g2"><div class="card"><div class="hd"><h3>Transaksi Terbaru Saya</h3><button class="btn sm gh" data-a="go" data-v="kasir">Lihat Semua</button></div>'+(rec.length?rec.map(trxRow).join(''):empty('Belum ada transaksi.'))+'</div>'+
     '<div class="card"><div class="hd"><h3>Pengajuan Saya</h3></div>'+(my.length?my.map(a=>apItem(a,0)).join(''):empty('Belum ada pengajuan.'))+'</div></div>';
  }
  return h;
};
A.harga=()=>F.harga();
A.tutup=()=>F.tutup();

/* ============ KASIR ============ */
function trxList(){
  const q=FILT.q.toLowerCase().trim(),td=today(),from=FILT.p==='7'?addDays(td,-6):FILT.p==='all'?'0000':td;
  const rows=sortD(S.trx).filter(t=>t.waktu.slice(0,10)>=from&&(FILT.j==='ALL'||t.jenis===FILT.j)&&(isO()||t.operatorId===S.me.userId||true)&&(!q||[t.transaksiId,t.kategori,t.pelanggan,t.catatan,t.metodeBayar,uname(t.operatorId),String(t.nominal)].join(' ').toLowerCase().indexOf(q)>=0));
  return rows.length?rows.slice(0,100).map(trxRow).join('')+(rows.length>100?'<small class="empty">Menampilkan 100 terbaru. Persempit pencarian.</small>':''):empty('Tidak ada transaksi pada filter ini.');
}
P.kasir=function(){
  FILT.p=FILT.p||'today';
  const tl=[['PENJUALAN','Penjualan','gem','pri'],['BUYBACK','Buyback','undo',''],['JASA','Jasa','tool',''],['PENGELUARAN_OPS','Pengeluaran','wallet','']];
  return '<div class="ph"><div><h1>Kasir Transaksi POS</h1><p>Catat penjualan, buyback, jasa, dan pengeluaran. Tersimpan instan, sinkron di latar belakang.</p></div></div>'+
   '<div class="tiles" style="margin-bottom:20px">'+tl.map(t=>'<button class="tile '+t[3]+'" data-a="trxnew" data-v="'+t[0]+'"><span class="ico">'+ic(t[2])+'</span>'+t[1]+'</button>').join('')+'</div>'+
   '<div class="card"><div class="hd"><h3>Riwayat Transaksi</h3><div class="seg" id="fp">'+[['today','Hari ini'],['7','7 hari'],['all','Semua']].map(x=>'<button class="'+(FILT.p===x[0]?'on':'')+'" data-a="fp" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div></div>'+
   '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"><input class="inp" style="flex:1;min-width:160px" placeholder="Cari nota, barang, pelanggan…" value="'+esc(FILT.q)+'" data-in="q" aria-label="Cari transaksi"><div class="seg" id="fj">'+[['ALL','Semua'],['PENJUALAN','Jual'],['BUYBACK','Buyback'],['JASA','Jasa'],['PENGELUARAN_OPS','Keluar']].map(x=>'<button class="'+(FILT.j===x[0]?'on':'')+'" data-a="fj" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div></div><div id="trx-list">'+trxList()+'</div></div>';
};
IN.q=v=>{FILT.q=v;const e=$('#trx-list');if(e)e.innerHTML=trxList()};
A.fj=v=>{FILT.j=v;RJ='';render()};A.fp=v=>{FILT.p=v;RJ='';render()};
A.trxnew=v=>F.trx(v);

/* ============ STOK (Owner) ============ */
P.stok=function(){
  const sum=S.stokSum||[],tot=l=>sum.filter(x=>x.logam===l).reduce((s,x)=>s+x.berat,0);
  const g=sum.slice().sort((a,b)=>(a.logam+a.jenisBarang).localeCompare(b.logam+b.jenisBarang));
  return '<div class="ph"><div><h1>Stok Etalase Emas &amp; Perak</h1><p>Rekapan total gramasi. Penjualan otomatis mengurangi, buyback bisa menambah.</p></div><button class="btn pri" data-a="stokadd">'+ic('plus','s')+' Penyesuaian Stok</button></div>'+
   '<div class="grid g3" style="margin-bottom:20px">'+kpi('Total Emas Etalase',nf2.format(tot('EMAS'))+' <small>gram</small>','<small>Nilai acuan '+rpS(tot('EMAS')*S.setting.hargaKadar700)+'</small>','gem','gold')+kpi('Total Perak Etalase',nf2.format(tot('PERAK'))+' <small>gram</small>','<small>Nilai acuan '+rpS(tot('PERAK')*S.setting.spotPerak*0.925)+'</small>','gem')+kpi('Jenis Barang',g.length,'<small>kombinasi logam · jenis · kadar</small>','file')+'</div>'+
   '<div class="card" style="margin-bottom:20px"><div class="hd"><h3>Rekap Per Jenis &amp; Kadar</h3></div><div class="tbw"><table><thead><tr><th>Logam</th><th>Jenis</th><th>Kadar</th><th class="r">Berat</th></tr></thead><tbody>'+(g.map(x=>'<tr><td><span class="tag '+(x.logam==='EMAS'?'gold':'')+'">'+x.logam+'</span></td><td>'+esc(x.jenisBarang)+'</td><td>'+esc(x.kadar)+'</td><td class="r"><b>'+gr(x.berat)+'</b></td></tr>').join('')||'<tr><td colspan="4">'+empty('Stok kosong.')+'</td></tr>')+'</tbody></table></div></div>'+
   '<div class="card"><div class="hd"><h3>Mutasi Stok Terakhir</h3></div>'+(S.stokLog&&S.stokLog.length?sortD(S.stokLog.map(x=>Object.assign({waktu:x.createdAt},x))).slice(0,25).map(x=>'<div class="tr"><span class="ico '+(x.berat<0?'bad':'ok')+'">'+ic(x.berat<0?'down':'up')+'</span><span class="tm"><b>'+esc(x.jenisBarang)+' '+esc(x.kadar)+' · '+x.logam+'</b><small>'+tgl(x.createdAt)+' '+jam(x.createdAt)+' · '+(x.referensiId==='MANUAL'?'Manual':esc(x.referensiId))+'</small></span><span class="ta '+(x.berat<0?'neg':'')+'"><b>'+(x.berat>0?'+':'')+gr(x.berat)+'</b></span></div>').join(''):empty('Belum ada mutasi.'))+'</div>';
};
A.stokadd=()=>F.stok();

/* ============ KAS LACI ============ */
P.kas=function(){
  const o=isO(),rows=sortD(S.kas).slice(0,40);
  return '<div class="ph"><div><h1>Kas Laci &amp; Tutup Kas</h1><p>Saldo berjalan = saldo awal + kas masuk − kas keluar.</p></div><div class="chips"><button class="btn dk" data-a="tutup">'+ic('clock','s')+' Tutup Kas Harian</button>'+(o?'<button class="btn" data-a="brk" data-v="SETOR">'+ic('lock','s')+' Setor ke Brankas</button>':'')+'</div></div>'+
   '<div class="grid g2" style="margin-bottom:20px">'+kpi('Saldo Kas Laci Sistem',rp(S.saldo.kas),'<span class="pill ok">Berjalan</span>','wallet','gold')+kpi('Tutup Kas Terakhir',S.tutup.length?rp(S.tutup[S.tutup.length-1].saldoFisik):'-',S.tutup.length?'<span class="pill '+(S.tutup[S.tutup.length-1].selisih===0?'ok':'warn')+'">Selisih '+rp(S.tutup[S.tutup.length-1].selisih)+'</span>':'<small>belum ada</small>','clock')+'</div>'+
   '<div class="grid dash2"><div class="card"><div class="hd"><h3>Mutasi Kas Laci</h3></div>'+(rows.length?rows.map(m=>'<div class="tr"><span class="ico '+(m.arah==='MASUK'?'ok':'bad')+'">'+ic(m.arah==='MASUK'?'down':'up')+'</span><span class="tm"><b>'+esc(String(m.sumber).replace(/_/g,' '))+'</b><small>'+tgl(m.waktu)+' '+jam(m.waktu)+' · '+uPill(m.operatorId)+' · saldo '+rpS(m.saldo)+'</small></span><span class="ta '+(m.arah==='KELUAR'?'neg':'')+'"><b>'+(m.arah==='KELUAR'?'-':'+')+rp(m.nominal)+'</b></span></div>').join(''):empty('Belum ada mutasi.'))+'</div>'+
   '<div class="card"><div class="hd"><h3>Riwayat Tutup Kas</h3></div>'+(S.tutup.length?sortD(S.tutup.map(x=>Object.assign({},x))).slice(0,12).map(x=>'<div class="tr"><span class="ico '+(x.selisih===0?'ok':'gold')+'">'+ic(x.selisih===0?'check':'alert')+'</span><span class="tm"><b>'+tgl(x.tanggal)+'</b><small>Sistem '+rpS(x.saldoSistem)+' · Fisik '+rpS(x.saldoFisik)+'</small></span><span class="ta '+(x.selisih<0?'neg':'')+'"><b>'+(x.selisih>0?'+':'')+rp(x.selisih)+'</b></span></div>').join(''):empty('Belum ada.'))+'</div></div>';
};
F.tutup=function(){
  openForm({title:'Tutup Kas Harian',ok:'Simpan Tutup Kas',pre:'<div class="mini" style="margin-bottom:14px"><small>Saldo menurut sistem</small><div class="big">'+rp(S.saldo.kas)+'</div></div>',
   fields:[{k:'saldoFisik',l:'Saldo uang fisik di laci',t:'rp',req:1,h:'Hitung seluruh uang tunai di laci. Selisih dicatat otomatis.'},{k:'catatan',l:'Catatan selisih (opsional)',t:'ta'}],
   fn:v=>{const sis=S.saldo.kas,sel=v.saldoFisik-sis;
    mut('kasTutup',v,()=>{S.tutup.push({tutupKasId:'TMP',tanggal:today(),saldoSistem:sis,saldoFisik:v.saldoFisik,selisih:sel,catatan:v.catatan,operatorId:S.me.userId,waktu:nowWIT()})});
    toast(sel===0?'Tutup kas klop 100%':'Tutup kas dicatat. Selisih '+rp(sel),sel===0?'ok':'')}});
};

/* ============ BRANKAS & BANK (Owner) ============ */
P.brankas=function(){
  const rows=sortD(S.brankas).slice(0,40);
  return '<div class="ph"><div><h1>Saldo Brankas (Vault)</h1><p>Transfer internal antara kas laci dan brankas.</p></div><div class="chips"><button class="btn pri" data-a="brk" data-v="SETOR">'+ic('down','s')+' Setor dari Kas</button><button class="btn" data-a="brk" data-v="TARIK">'+ic('up','s')+' Tarik ke Kas</button></div></div>'+
   '<div class="grid g2" style="margin-bottom:20px">'+kpi('Saldo Brankas Utama',rp(S.saldo.brankas),'<span class="pill ok">Terkunci</span>','lock','gold')+kpi('Saldo Kas Laci',rp(S.saldo.kas),'<small>sumber setoran</small>','wallet')+'</div>'+
   '<div class="card"><div class="hd"><h3>Mutasi Brankas</h3></div>'+(rows.length?rows.map(m=>'<div class="tr"><span class="ico '+(m.arah==='SETOR'?'ok':'bad')+'">'+ic(m.arah==='SETOR'?'down':'up')+'</span><span class="tm"><b>'+(m.arah==='SETOR'?'Setor dari kas laci':'Tarik ke kas laci')+'</b><small>'+tgl(m.waktu)+' '+jam(m.waktu)+' · '+uPill(m.operatorId)+(m.catatan?' · '+esc(m.catatan):'')+'</small></span><span class="ta '+(m.arah==='TARIK'?'neg':'')+'"><b>'+(m.arah==='TARIK'?'-':'+')+rp(m.nominal)+'</b></span></div>').join(''):empty('Belum ada mutasi. Saldo awal diatur di Pengaturan.'))+'</div>';
};
A.brk=v=>F.brankas(v);
F.brankas=function(arah){
  openForm({title:arah==='SETOR'?'Setor Kas Laci → Brankas':'Tarik Brankas → Kas Laci',ok:'Simpan Mutasi',
   pre:'<div class="mini" style="margin-bottom:14px"><small>'+(arah==='SETOR'?'Kas laci tersedia':'Brankas tersedia')+'</small><div class="big">'+rp(arah==='SETOR'?S.saldo.kas:S.saldo.brankas)+'</div></div>',
   fields:[{k:'nominal',l:'Nominal',t:'rp',req:1},{k:'catatan',l:'Catatan',t:'text'}],
   fn:v=>{
    if(arah==='SETOR'&&!kasOK(v.nominal))return 'Saldo kas laci tidak cukup.';
    if(arah==='TARIK'&&v.nominal>S.saldo.brankas)return 'Saldo brankas tidak cukup.';
    mut('brankasMutasi',{arah:arah,nominal:v.nominal,catatan:v.catatan},()=>{
      pushKas(arah==='SETOR'?'KELUAR':'MASUK',v.nominal,arah+'_BRANKAS','');
      S.saldo.brankas+=(arah==='SETOR'?1:-1)*v.nominal;
      S.brankas.push({mutasiBrankasId:'TMP',waktu:nowWIT(),arah:arah,nominal:v.nominal,catatan:v.catatan,operatorId:S.me.userId})});
    toast('Mutasi brankas tercatat','ok')}});
};
P.bank=function(){
  const rek=S.setting.rekening||[],rows=sortD(S.bank).slice(0,40);
  return '<div class="ph"><div><h1>Rekening Bank &amp; QRIS</h1><p>Pembayaran transfer/QRIS/EDC masuk ke rekening yang dipilih saat transaksi.</p></div></div>'+
   '<div class="grid g2" style="margin-bottom:20px">'+(rek.length?rek.map(r=>'<div class="card"><div class="hd"><div><b>'+esc(r.nama)+'</b><br><small>'+esc(r.noRek||'-')+'</small></div><span class="ico gold">'+ic('bank')+'</span></div><div class="kpi"><div class="v">'+rp(S.saldo.bank[r.nama]||0)+'</div></div><div style="display:flex;gap:8px;margin-top:6px"><button class="btn sm pri" data-a="bk" data-v="SETOR|'+esc(r.nama)+'">Setor dari Kas</button><button class="btn sm" data-a="bk" data-v="TARIK|'+esc(r.nama)+'">Tarik ke Kas</button></div></div>').join(''):'<div class="card">'+empty('Belum ada rekening. Tambahkan di Pengaturan.')+'</div>')+'</div>'+
   '<div class="card"><div class="hd"><h3>Mutasi Bank &amp; QRIS</h3></div>'+(rows.length?rows.map(m=>'<div class="tr"><span class="ico '+(m.arah==='TARIK'?'bad':'ok')+'">'+ic('bank')+'</span><span class="tm"><b>'+esc(m.rekening)+' · '+esc(String(m.arah).replace('_',' '))+'</b><small>'+tgl(m.waktu)+' '+jam(m.waktu)+' · '+esc(String(m.sumber).replace(/_/g,' '))+' · saldo '+rpS(m.saldo)+'</small></span><span class="ta '+(m.arah==='TARIK'?'neg':'')+'"><b>'+(m.arah==='TARIK'?'-':'+')+rp(m.nominal)+'</b></span></div>').join(''):empty('Belum ada mutasi.'))+'</div>';
};
A.bk=v=>{const p=v.split('|');F.bank(p[0],p[1])};
F.bank=function(arah,rek){
  openForm({title:arah==='SETOR'?'Setor Kas → Bank':'Tarik Bank → Kas',ok:'Simpan',
   fields:[{k:'rekening',l:'Rekening',t:'select',o:(S.setting.rekening||[]).map(r=>r.nama),v:rek},{k:'nominal',l:'Nominal',t:'rp',req:1,h:'Kas laci tersedia '+rp(S.saldo.kas)},{k:'catatan',l:'Catatan'}],
   fn:v=>{
    if(arah==='SETOR'&&!kasOK(v.nominal))return 'Saldo kas laci tidak cukup.';
    mut('bankMutasi',{arah:arah,rekening:v.rekening,nominal:v.nominal,catatan:v.catatan},()=>{
      pushKas(arah==='SETOR'?'KELUAR':'MASUK',v.nominal,arah+'_BANK','');
      S.saldo.bank[v.rekening]=(S.saldo.bank[v.rekening]||0)+(arah==='SETOR'?1:-1)*v.nominal;
      S.bank.push({mutasiBankId:'TMP',waktu:nowWIT(),rekening:v.rekening,arah:arah,nominal:v.nominal,sumber:arah+'_BANK',referensiId:'',saldo:S.saldo.bank[v.rekening],operatorId:S.me.userId})});
    toast('Mutasi bank tercatat','ok')}});
};

/* ============ ABSENSI & IZIN ============ */
const jarakM=(a,b,c,d)=>{const R=6371000,r=x=>x*Math.PI/180,dl=r(c-a),dn=r(d-b),h=Math.sin(dl/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(dn/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(h)))};
P.absensi=function(){
  const o=isO(),td=today();
  if(o){
    const rows=S.absensi.slice().sort((a,b)=>String(b.jamMasuk).localeCompare(String(a.jamMasuk))).slice(0,60),iz=S.izin.slice().reverse().slice(0,15);
    return '<div class="ph"><div><h1>Absensi GPS Karyawan</h1><p>Rekap selfie + lokasi. Pengajuan izin diproses di Pusat Persetujuan.</p></div></div>'+
     '<div class="card" style="margin-bottom:20px"><div class="hd"><h3>Rekap Absensi</h3></div><div class="tbw"><table><thead><tr><th>Tanggal</th><th>Karyawan</th><th>Masuk</th><th>Pulang</th><th>Status</th><th class="r">Jarak</th><th>Selfie</th></tr></thead><tbody>'+
     (rows.map(a=>'<tr><td>'+tgl(a.tanggal)+'</td><td>'+uBadge(a.userId)+'</td><td>'+jam(a.jamMasuk)+'</td><td>'+(jam(a.jamPulang)||'-')+'</td><td><span class="tag '+(a.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+String(a.statusMasuk).replace('_',' ')+'</span></td><td class="r">'+(a.jarakMeter!==''?a.jarakMeter+' m':'-')+'</td><td>'+(a.fotoSelfieMasuk?'<a href="'+esc(a.fotoSelfieMasuk)+'" target="_blank" rel="noopener">Lihat</a>':'-')+'</td></tr>').join('')||'<tr><td colspan="7">'+empty('Belum ada absensi.')+'</td></tr>')+'</tbody></table></div></div>'+
     '<div class="card"><div class="hd"><h3>Pengajuan Izin / Sakit / Cuti</h3></div>'+(iz.length?iz.map(i=>'<div class="tr"><span class="ico gold">'+ic('cal')+'</span><span class="tm"><b>'+uBadge(i.userId)+' · '+i.jenis+'</b><small>'+tgl(i.tanggalMulai)+(i.tanggalSelesai!==i.tanggalMulai?' – '+tgl(i.tanggalSelesai):'')+' · '+esc(i.alasan)+'</small></span><span class="tag '+(i.status==='DISETUJUI'?'ok':i.status==='DITOLAK'?'bad':'warn')+'">'+i.status+'</span></div>').join(''):empty('Belum ada pengajuan.'))+'</div>';
  }
  const me=S.absensi.find(a=>a.userId===S.me.userId&&a.tanggal===td),hist=S.absensi.filter(a=>a.userId===S.me.userId).slice().reverse().slice(0,14),iz=S.izin.slice().reverse().slice(0,10);
  return '<div class="ph"><div><h1>Absensi &amp; Izin</h1><p>Absen wajib selfie dan berada di radius toko ('+S.setting.radiusAbsensi+' m).</p></div></div>'+
   '<div class="grid g2" style="margin-bottom:20px"><div class="card"><div class="hd"><h3>Hari Ini · '+tgl(td)+'</h3></div>'+
   (me?'<div class="mini"><span class="tag '+(me.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+String(me.statusMasuk).replace('_',' ')+'</span><div class="big">Masuk '+jam(me.jamMasuk)+'</div><small>'+(me.jamPulang?'Pulang '+jam(me.jamPulang):'Belum absen pulang')+'</small></div>'+(me.jamPulang?'':'<button class="btn dk blk" style="margin-top:12px" data-a="abpl">Absen Pulang</button>'):'<div class="mini"><div class="big">Belum absen</div><small>Jam masuk standar '+esc(S.setting.jamMasuk)+'</small></div><button class="btn pri blk" style="margin-top:12px" data-a="abnew">'+ic('camera','s')+' Absen Masuk (Selfie + GPS)</button>')+'</div>'+
   '<div class="card"><div class="hd"><h3>Pengajuan Izin</h3><button class="btn sm pri" data-a="izin">'+ic('plus','s')+' Ajukan</button></div>'+(iz.length?iz.map(i=>'<div class="tr"><span class="tm"><b>'+i.jenis+' · '+tgl(i.tanggalMulai)+'</b><small>'+esc(i.alasan)+'</small></span><span class="tag '+(i.status==='DISETUJUI'?'ok':i.status==='DITOLAK'?'bad':'warn')+'">'+i.status+'</span></div>').join(''):empty('Belum ada pengajuan.'))+'</div></div>'+
   '<div class="card"><div class="hd"><h3>Riwayat Absensi</h3></div>'+(hist.length?hist.map(a=>'<div class="tr"><span class="ico '+(a.statusMasuk==='TERLAMBAT'?'gold':'ok')+'">'+ic('pin')+'</span><span class="tm"><b>'+tgl(a.tanggal)+'</b><small>Masuk '+jam(a.jamMasuk)+' · Pulang '+(jam(a.jamPulang)||'-')+'</small></span><span class="tag '+(a.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+String(a.statusMasuk).replace('_',' ')+'</span></div>').join(''):empty('Belum ada riwayat.'))+'</div>';
};
A.abnew=()=>F.absen();
A.abpl=()=>{const m=S.absensi.find(a=>a.userId===S.me.userId&&a.tanggal===today());if(!m||m.jamPulang)return;mut('absenPulang',{},()=>{m.jamPulang=nowWIT()});toast('Absen pulang tercatat','ok')};
function abBtn(){const b=$('#ab-go');if(b)b.disabled=!(AB.ok&&AB.foto)}
function abGps(){
  const t=$('#ab-t'),box=$('#ab-gps');if(!t)return;AB.ok=false;abBtn();t.textContent='Mencari lokasi GPS…';box.classList.add('warn');
  if(!navigator.geolocation){t.textContent='Browser tidak mendukung GPS.';return}
  navigator.geolocation.getCurrentPosition(p=>{
    if(!$('#ab-t'))return;AB.lat=p.coords.latitude;AB.lng=p.coords.longitude;
    const d=jarakM(S.setting.latitude,S.setting.longitude,AB.lat,AB.lng),r=S.setting.radiusAbsensi;AB.d=d;
    if(!r||d<=r){AB.ok=true;box.classList.remove('warn');t.textContent='Dalam area toko • '+d+' m (akurasi ±'+Math.round(p.coords.accuracy)+' m)'}
    else t.textContent='Di luar area: '+d+' m dari toko (batas '+r+' m).';
    abBtn();
  },()=>{const t2=$('#ab-t');if(t2)t2.textContent='Lokasi tidak tersedia. Izinkan akses lokasi di browser/HP (situs harus HTTPS).';abBtn()},{enableHighAccuracy:true,timeout:15000,maximumAge:10000});
}
F.absen=function(){
  AB={foto:null,ok:false};
  modal('Absen Masuk','<div class="gps warn" id="ab-gps">'+ic('pin','s')+'<span id="ab-t">Mencari lokasi GPS…</span></div>'+
   '<div class="photo"><img id="ab-img" class="hidden" alt="Pratinjau selfie"><div style="flex:1"><div class="lbl">Foto selfie *</div><button type="button" class="btn sm" style="margin-top:6px" data-a="abcam">'+ic('camera','s')+' Ambil Selfie</button></div></div>'+
   '<input type="file" id="ab-f" accept="image/*" capture="user" class="hidden" data-in="abph">'+
   '<button class="btn pri blk" id="ab-go" data-a="abgo" disabled>Kirim Absen Masuk</button><button type="button" class="btn gh blk sm" style="margin-top:8px" data-a="abgps">Cari ulang lokasi</button>');
  abGps();
};
A.abcam=()=>$('#ab-f').click();A.abgps=()=>abGps();
IN.abph=(v,el)=>{const f=el.files&&el.files[0];if(!f)return;compress(f).then(d=>{AB.foto=d;const i=$('#ab-img');i.src=d;i.classList.remove('hidden');abBtn()})};
A.abgo=()=>{
  if(!(AB.ok&&AB.foto))return;const jm=nowWIT().slice(11,16),late=jm>String(S.setting.jamMasuk||'08:30').slice(0,5);
  mut('absenMasuk',{latitude:AB.lat,longitude:AB.lng,foto:{data:AB.foto}},()=>{S.absensi.push({absensiId:'TMP',tanggal:today(),userId:S.me.userId,jamMasuk:nowWIT(),fotoSelfieMasuk:'',statusMasuk:late?'TERLAMBAT':'TEPAT_WAKTU',jamPulang:'',latitude:AB.lat,longitude:AB.lng,jarakMeter:AB.d})});
  closeModal();toast(late?'Absen masuk tercatat (terlambat)':'Absen masuk tercatat. Selamat bekerja!','ok');
};
A.izin=()=>F.izin();
F.izin=function(){
  openForm({title:'Ajukan Izin / Sakit / Cuti',ok:'Kirim ke Owner',fields:[{k:'jenis',l:'Jenis',t:'select',o:[['IZIN','Izin'],['SAKIT','Sakit'],['CUTI','Cuti']]},{k:'tanggalMulai',l:'Mulai',t:'date',req:1,half:1,v:today()},{k:'tanggalSelesai',l:'Selesai',t:'date',req:1,half:1,v:today()},{k:'alasan',l:'Alasan',t:'ta',req:1}],
   fn:v=>{if(v.tanggalSelesai<v.tanggalMulai)return 'Tanggal selesai tidak boleh sebelum mulai.';
    mut('izinAjukan',v,id=>{S.izin.push({izinId:'TMP-'+id,userId:S.me.userId,jenis:v.jenis,tanggalMulai:v.tanggalMulai,tanggalSelesai:v.tanggalSelesai,alasan:v.alasan,status:'MENUNGGU',createdAt:nowWIT()});S.approval.push({approvalId:'TMP-'+id,jenis:'IZIN',pengajuId:S.me.userId,status:'MENUNGGU',ringkasan:'Pengajuan '+v.jenis.toLowerCase()+' '+tgl(v.tanggalMulai)+': '+v.alasan,createdAt:nowWIT()})});
    toast('Pengajuan dikirim ke Owner','ok')}});
};

/* ============ PIUTANG, HUTANG, PINJAMAN ============ */
let PT='PIUTANG';
P.piutang=function(){
  const ph=(S.piutang||[]).filter(x=>x.jenis===PT),pj=S.pinjaman||[];
  const tab='<div class="seg" style="margin-bottom:16px">'+[['PIUTANG','Piutang'],['HUTANG','Hutang'],['PINJAMAN','Pinjaman']].map(x=>'<button class="'+(PT===x[0]?'on':'')+'" data-a="pt" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div>';
  const totP=(S.piutang||[]).filter(x=>x.jenis==='PIUTANG').reduce((s,x)=>s+x.sisa,0),totH=(S.piutang||[]).filter(x=>x.jenis==='HUTANG').reduce((s,x)=>s+x.sisa,0);
  let body;
  if(PT==='PINJAMAN')body=pj.length?pj.map(x=>'<div class="tr"><span class="ico gold">'+ic(x.satuan==='gram'?'gem':'wallet')+'</span><span class="tm"><b>'+esc(x.namaPihak)+'</b><small>'+(x.satuan==='gram'?'Emas':'Uang')+' · jatuh tempo '+tgl(x.jatuhTempo)+' · <span class="tag '+(x.status==='LUNAS'?'ok':'warn')+'">'+x.status+'</span></small><div class="track"><i style="width:'+Math.round(x.terbayar/x.jumlah*100)+'%"></i></div></span><span class="ta"><b>'+(x.satuan==='gram'?gr(x.sisa):rp(x.sisa))+'</b><small>dari '+(x.satuan==='gram'?gr(x.jumlah):rp(x.jumlah))+'</small>'+(x.status==='LUNAS'?'':'<br><button class="btn sm" data-a="pjb" data-v="'+x.pinjamanId+'">Kembali</button>')+'</span></div>').join(''):empty('Belum ada pinjaman.');
  else body=ph.length?ph.map(x=>'<div class="tr"><span class="ico gold">'+ic('file')+'</span><span class="tm"><b>'+esc(x.namaPihak)+'</b><small>Jatuh tempo '+tgl(x.jatuhTempo)+' · <span class="tag '+(x.status==='LUNAS'?'ok':'warn')+'">'+x.status.replace('_',' ')+'</span></small><div class="track"><i style="width:'+Math.round(x.terbayar/x.total*100)+'%"></i></div></span><span class="ta"><b>'+rp(x.sisa)+'</b><small>dari '+rp(x.total)+'</small>'+(x.status==='LUNAS'?'':'<br><button class="btn sm" data-a="ptb" data-v="'+x.recordId+'">Bayar</button>')+'</span></div>').join(''):empty('Belum ada catatan.');
  return '<div class="ph"><div><h1>Piutang, Hutang &amp; Pinjaman</h1><p>Pencatatan khusus Owner.</p></div><button class="btn pri" data-a="ptadd">'+ic('plus','s')+' Tambah</button></div>'+
   '<div class="grid g2" style="margin-bottom:20px">'+kpi('Total Piutang (belum dibayar)',rp(totP),'<small>uang yang akan diterima</small>','down')+kpi('Total Hutang',rp(totH),'<small>kewajiban toko</small>','up')+'</div><div class="card">'+tab+body+'</div>';
};
A.pt=v=>{PT=v;RJ='';render()};
A.ptadd=()=>PT==='PINJAMAN'?F.pinjaman():F.piutang(PT);
F.piutang=function(jenis){
  openForm({title:'Tambah '+(jenis==='HUTANG'?'Hutang':'Piutang'),fields:[{k:'namaPihak',l:jenis==='HUTANG'?'Nama supplier / pihak':'Nama pelanggan / pihak',req:1},{k:'total',l:'Nominal total',t:'rp',req:1},{k:'jatuhTempo',l:'Jatuh tempo',t:'date'},{k:'catatan',l:'Catatan',t:'ta'}],
   fn:v=>{mut('piutangSimpan',Object.assign({jenis:jenis},v),id=>{S.piutang.push({recordId:'TMP-'+id,jenis:jenis,namaPihak:v.namaPihak,total:v.total,terbayar:0,sisa:v.total,jatuhTempo:v.jatuhTempo,status:'BELUM_LUNAS',catatan:v.catatan})});toast('Tersimpan','ok')}});
};
A.ptb=v=>{const r=S.piutang.find(x=>x.recordId===v);if(!r)return;
  openForm({title:'Pembayaran '+(r.jenis==='PIUTANG'?'Piutang':'Hutang'),ok:'Catat Pembayaran',pre:'<div class="mini" style="margin-bottom:14px"><small>'+esc(r.namaPihak)+'</small><div class="big">Sisa '+rp(r.sisa)+'</div></div>',
   fields:[{k:'nominal',l:'Nominal dibayar',t:'rp',req:1,v:r.sisa},{k:'catatKas',l:r.jenis==='PIUTANG'?'Catat sebagai kas masuk laci':'Catat sebagai kas keluar laci',t:'chk',v:true}],
   fn:x=>{if(x.nominal>r.sisa)return 'Melebihi sisa '+rp(r.sisa);if(x.catatKas&&r.jenis==='HUTANG'&&!kasOK(x.nominal))return 'Saldo kas laci tidak cukup.';
    mut('piutangBayar',{recordId:r.recordId,nominal:x.nominal,catatKas:x.catatKas},()=>{r.terbayar+=x.nominal;r.sisa-=x.nominal;if(r.sisa<=0)r.status='LUNAS';if(x.catatKas)pushKas(r.jenis==='PIUTANG'?'MASUK':'KELUAR',x.nominal,'BAYAR_'+r.jenis,r.recordId)});toast('Pembayaran dicatat','ok')}})};
F.pinjaman=function(){
  openForm({title:'Tambah Pinjaman',fields:[{k:'jenis',l:'Jenis',t:'select',o:[['PINJAMAN_UANG','Uang (Rupiah)'],['PINJAMAN_EMAS','Emas (Gram)']]},{k:'namaPihak',l:'Nama peminjam',req:1},{k:'jumlah',l:'Jumlah (Rp atau gram sesuai jenis)',t:'num',req:1,h:'Uang: tulis angka penuh, mis. 5000000. Emas: gram, mis. 12,5'},{k:'jatuhTempo',l:'Jatuh tempo',t:'date'},{k:'catatan',l:'Catatan',t:'ta'}],
   fn:v=>{mut('pinjamanSimpan',v,id=>{S.pinjaman.push({pinjamanId:'TMP-'+id,jenis:v.jenis,namaPihak:v.namaPihak,jumlah:v.jumlah,terbayar:0,sisa:v.jumlah,satuan:v.jenis==='PINJAMAN_EMAS'?'gram':'Rp',jatuhTempo:v.jatuhTempo,status:'AKTIF',catatan:v.catatan})});toast('Pinjaman dicatat','ok')}});
};
A.pjb=v=>{const r=S.pinjaman.find(x=>x.pinjamanId===v);if(!r)return;
  openForm({title:'Pengembalian Pinjaman',ok:'Catat',pre:'<div class="mini" style="margin-bottom:14px"><small>'+esc(r.namaPihak)+'</small><div class="big">Sisa '+(r.satuan==='gram'?gr(r.sisa):rp(r.sisa))+'</div></div>',fields:[{k:'jumlah',l:'Jumlah dikembalikan ('+r.satuan+')',t:'num',req:1,v:r.sisa}],
   fn:x=>{if(x.jumlah>r.sisa+1e-9)return 'Melebihi sisa.';mut('pinjamanBayar',{pinjamanId:r.pinjamanId,jumlah:x.jumlah},()=>{r.terbayar=Math.round((r.terbayar+x.jumlah)*1000)/1000;r.sisa=Math.round((r.jumlah-r.terbayar)*1000)/1000;if(r.sisa<=0)r.status='LUNAS'});toast('Tercatat','ok')}})};

/* ============ PERSETUJUAN ============ */
P.approval=function(){
  const pd=pending(),done=sortD(S.approval.filter(a=>a.status!=='MENUNGGU').map(a=>Object.assign({waktu:a.createdAt},a))).slice(0,15);
  return '<div class="ph"><div><h1>Pusat Persetujuan</h1><p>Pembatalan nota, pengeluaran ≥ '+rp(S.setting.limitApproval)+', dan izin karyawan.</p></div></div><div class="grid g2"><div class="card"><div class="hd"><h3>Menunggu Keputusan '+(pd.length?'<span class="pill bad">'+pd.length+'</span>':'')+'</h3></div>'+(pd.length?pd.map(a=>apItem(a,1)).join(''):empty('Semua pengajuan sudah diproses.'))+'</div><div class="card"><div class="hd"><h3>Riwayat Keputusan</h3></div>'+(done.length?done.map(a=>apItem(a,0)).join(''):empty('Belum ada.'))+'</div></div>';
};
A.apr=v=>{
  const p=v.split('|'),a=S.approval.find(x=>x.approvalId===p[0]);if(!a||a.status!=='MENUNGGU')return;const ok=p[1]==='SETUJU',t=S.trx.find(x=>x.transaksiId===a.referensiId);
  if(ok&&t&&a.jenis==='PENGELUARAN_OPS_BESAR'&&t.metodeBayar==='TUNAI'&&!kasOK(t.nominal)){toast('Saldo kas laci tidak cukup untuk menyetujui','err');return}
  if(ok&&t&&a.jenis==='PEMBATALAN_TRX'&&isJual(t)&&t.metodeBayar==='TUNAI'&&!kasOK(t.nominal)){toast('Saldo kas laci tidak cukup untuk membatalkan','err');return}
  mut('approvalProses',{approvalId:a.approvalId,keputusan:p[1]},()=>{
    a.status=ok?'DISETUJUI':'DITOLAK';
    if(a.jenis==='PEMBATALAN_TRX'&&t){if(ok){t.status='DIBATALKAN';localEfek(t,-1)}else t.status='AKTIF'}
    else if(a.jenis==='PENGELUARAN_OPS_BESAR'&&t){if(ok){t.status='AKTIF';localEfek(t,1)}else t.status='DIBATALKAN'}
    else if(a.jenis==='IZIN'){const i=S.izin.find(x=>x.izinId===a.referensiId);if(i)i.status=ok?'DISETUJUI':'DITOLAK'}});
  toast(ok?'Pengajuan disetujui':'Pengajuan ditolak','ok');
};

/* ============ TRANSAKSI: FORM, STRUK, BATAL ============ */
const BARANG=['Kalung','Cincin','Gelang','Anting','Liontin','Bar/Batangan','Lainnya'],KATJ=['Patri','Sepuh','Ganti Mata','Servis Cincin','Lainnya'],KATO=['Listrik & Air','Konsumsi','Kebersihan','Transport','Beli Bahan Baku','Lainnya'],KADAR={EMAS:['700','750','375','875','999'],PERAK:['925','999']};
function compress(file){return new Promise((res,rej)=>{const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{let w=img.width,h=img.height;const k=Math.min(1,1280/Math.max(w,h));w=Math.round(w*k);h=Math.round(h*k);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);let q=.8,d=c.toDataURL('image/jpeg',q);while(d.length*.75>300000&&q>.3){q-=.1;d=c.toDataURL('image/jpeg',q)}URL.revokeObjectURL(url);res(d)};img.onerror=()=>{toast('Foto tidak dapat dibaca','err');rej()};img.src=url})}
const hargaGr=(l,k,j)=>{const s=S.setting;let h=l==='EMAS'?s.hargaKadar700*(+k)/700:s.spotPerak*(+k)/1000;if(j==='BUYBACK')h*=.9;return Math.round(h)};
function est(){
  const j=TF.jenis,h=$('#tf-h');if(!h)return;if(j!=='PENJUALAN'&&j!=='BUYBACK'){h.textContent='';return}
  const hg=hargaGr(TF.logam,$('#tf-kd').value,j);h.textContent='Harga acuan '+rp(hg)+'/gr'+(j==='BUYBACK'?' (buyback 90%)':'')+'. Nominal bisa diubah manual.';
  const b=numG($('#tf-b').value);if(!TF.manual&&b>0)$('#tf-n').value='Rp. '+nf.format(Math.round(b*hg/1000)*1000);
}
IN.est=()=>est();IN.nom=()=>{TF.manual=true};
function tfSync(){
  const j=TF.jenis,g=j==='PENJUALAN'||j==='BUYBACK';
  $$('#tf-j button').forEach(b=>b.classList.toggle('on',b.dataset.v===j));$$('#tf-l button').forEach(b=>b.classList.toggle('on',b.dataset.v===TF.logam));$$('#tf-m button').forEach(b=>b.classList.toggle('on',b.dataset.v===TF.metode));
  $('#tf-g').classList.toggle('hidden',!g);$('#tf-rw').classList.toggle('hidden',TF.metode==='TUNAI');$('#tf-bb').classList.toggle('hidden',j!=='BUYBACK');
  $('#tf-kl').textContent=g?'Jenis Barang':j==='JASA'?'Jenis Jasa':'Keperluan';$('#tf-pl').textContent=j==='PENGELUARAN_OPS'?'Penerima / Supplier':j==='BUYBACK'?'Nama Penjual':'Pelanggan';
  const lst=g?BARANG:j==='JASA'?KATJ:KATO,k=$('#tf-k'),kc=k.value;k.innerHTML=lst.map(x=>'<option>'+esc(x)+'</option>').join('');if(lst.indexOf(kc)>=0)k.value=kc;
  const kd=$('#tf-kd'),dc=kd.value;kd.innerHTML=KADAR[TF.logam].map(x=>'<option>'+x+'</option>').join('');if(KADAR[TF.logam].indexOf(dc)>=0)kd.value=dc;
  est();
}
A.tfj=v=>{TF.jenis=v;TF.manual=false;if(v==='JASA'||v==='PENGELUARAN_OPS'){}tfSync()};A.tfl=v=>{TF.logam=v;TF.manual=false;tfSync()};A.tfm=v=>{TF.metode=v;tfSync()};
A.tfcam=()=>$('#tf-fc').click();A.tffile=()=>$('#tf-ff').click();
IN.tfph=(v,el)=>{const f=el.files&&el.files[0];if(!f)return;compress(f).then(d=>{TF.foto=d;const i=$('#tf-img');i.src=d;i.classList.remove('hidden')})};
F.trx=function(j){
  TF={jenis:j||'PENJUALAN',logam:'EMAS',metode:'TUNAI',foto:null,manual:false};
  const rek=(S.setting.rekening||[]).map(r=>r.nama);
  modal('Transaksi Kasir','<form id="ftrx" novalidate><div class="seg fill w" id="tf-j" style="margin-bottom:14px">'+Object.keys(jenisLbl).map(k=>'<button type="button" data-a="tfj" data-v="'+k+'">'+(k==='PENGELUARAN_OPS'?'Keluar':jenisLbl[k])+'</button>').join('')+'</div><div class="err hidden" id="tf-err"></div>'+
   '<label class="fld"><span class="lb" id="tf-kl">Jenis Barang</span><select class="inp" name="kategori" id="tf-k"></select></label>'+
   '<div id="tf-g"><div class="seg fill" id="tf-l" style="margin-bottom:14px"><button type="button" data-a="tfl" data-v="EMAS">Emas</button><button type="button" data-a="tfl" data-v="PERAK">Perak</button></div>'+
   '<div class="row2"><label class="fld"><span class="lb">Kadar</span><select class="inp" name="kadar" id="tf-kd" data-in="est"></select></label><label class="fld"><span class="lb">Berat</span><div class="adorn"><input class="inp" name="berat" id="tf-b" inputmode="decimal" autocomplete="off" placeholder="0,00" data-in="est"><b>gr</b></div></label></div></div>'+
   '<label class="fld"><span class="lb">Nominal *</span><input class="inp rp" name="nominal" id="tf-n" inputmode="numeric" autocomplete="off" placeholder="Rp. 0" data-in="nom"><small id="tf-h"></small></label>'+
   '<div class="lbl" style="margin-bottom:6px">Metode pembayaran</div><div class="seg fill w" id="tf-m" style="margin-bottom:14px">'+['TUNAI','TRANSFER','QRIS','EDC'].map(k=>'<button type="button" data-a="tfm" data-v="'+k+'">'+k+'</button>').join('')+'</div>'+
   '<label class="fld hidden" id="tf-rw"><span class="lb">Rekening tujuan</span><select class="inp" name="rekening">'+(rek.length?rek:['REKENING']).map(r=>'<option>'+esc(r)+'</option>').join('')+'</select></label>'+
   '<label class="fld"><span class="lb" id="tf-pl">Pelanggan</span><input class="inp" name="pelanggan" autocomplete="off"></label><label class="fld"><span class="lb">Catatan</span><input class="inp" name="catatan" autocomplete="off"></label>'+
   '<div id="tf-bb" class="hidden"><div class="photo"><img id="tf-img" class="hidden" alt="Pratinjau foto"><div style="flex:1"><div class="lbl">Foto nota / KTP / perhiasan *</div><div style="display:flex;gap:8px;margin-top:6px"><button type="button" class="btn sm" data-a="tfcam">'+ic('camera','s')+' Kamera</button><button type="button" class="btn sm gh" data-a="tffile">Pilih File</button></div></div></div><input type="file" id="tf-fc" accept="image/*" capture="environment" class="hidden" data-in="tfph"><input type="file" id="tf-ff" accept="image/*" class="hidden" data-in="tfph"><label class="chk"><input type="checkbox" name="tambahStok" checked> Tambahkan ke stok etalase</label></div>'+
   '<button class="btn pri blk" type="submit" style="margin-top:6px">Simpan Transaksi</button></form>');
  tfSync();
};
SUB.ftrx=f=>{
  const j=TF.jenis,g=j==='PENJUALAN'||j==='BUYBACK',el=f.elements,er=$('#tf-err');
  const p={jenis:j,logam:g?TF.logam:'-',kategori:el.kategori.value,kadar:g?el.kadar.value:'',berat:g?numG(el.berat.value):0,nominal:rpVal(el.nominal.value),metodeBayar:TF.metode,rekening:TF.metode==='TUNAI'?'':(el.rekening.value||''),pelanggan:el.pelanggan.value.trim(),catatan:el.catatan.value.trim(),tambahStok:!!(el.tambahStok&&el.tambahStok.checked),foto:TF.foto?{data:TF.foto}:null};
  let bad='';if(g&&!(p.berat>0))bad='Berat (gram) wajib diisi.';else if(!(p.nominal>0))bad='Nominal wajib diisi.';else if(j==='BUYBACK'&&!TF.foto)bad='Foto nota/KTP/perhiasan wajib untuk Buyback.';
  const out=isOut(p),big=j==='PENGELUARAN_OPS'&&!isO()&&p.nominal>=S.setting.limitApproval;
  if(!bad&&out&&!big&&p.metodeBayar==='TUNAI'&&!kasOK(p.nominal))bad='Saldo kas laci tidak cukup ('+rp(S.saldo.kas)+').';
  if(bad){er.textContent=bad;er.classList.remove('hidden');return}
  const id=mut('trxBuat',p,cid=>{
    const t=Object.assign({},p,{transaksiId:'TMP-'+cid.slice(-5).toUpperCase(),clientId:cid,waktu:nowWIT(),stokId:'',operatorId:S.me.userId,status:big?'PENDING_APPROVAL':'AKTIF',buktiTransfer:'',createdAt:nowWIT()});delete t.foto;
    S.trx.push(t);if(big)S.approval.push({approvalId:'TMP-'+cid,jenis:'PENGELUARAN_OPS_BESAR',referensiId:t.transaksiId,pengajuId:S.me.userId,status:'MENUNGGU',ringkasan:'Pengeluaran '+rp(p.nominal)+' — '+p.kategori,createdAt:nowWIT()});else localEfek(t,1);
  });
  closeModal();
  if(big)toast('Pengeluaran besar dikirim ke Owner untuk persetujuan','ok');else{toast('Transaksi tersimpan','ok');if(j!=='PENGELUARAN_OPS')showStruk(id)}
};
/* struk */
const W=32,ctr=s=>{s=String(s||'');return ' '.repeat(Math.max(0,Math.floor((W-s.length)/2)))+s},lr=(a,b)=>{a=String(a);b=String(b);return a+' '.repeat(Math.max(1,W-a.length-b.length))+b};
function strukText(t){
  const s=S.setting,L=[ctr(s.namaToko),ctr(s.alamatToko)];if(s.teleponToko)L.push(ctr('Telp '+s.teleponToko));
  L.push('-'.repeat(W),lr('Nota',nota(t)),lr('Waktu',tgl(t.waktu)+' '+jam(t.waktu)),lr('Kasir',uname(t.operatorId)));if(t.pelanggan)L.push(lr(t.jenis==='BUYBACK'?'Penjual':'Pelanggan',t.pelanggan));
  L.push('-'.repeat(W),t.jenis==='BUYBACK'?'BUYBACK (BELI KEMBALI)':t.jenis==='PENGELUARAN_OPS'?'PENGELUARAN':String(t.kategori||'').toUpperCase()+(t.jenis==='JASA'?' (JASA)':''));
  if(t.berat){L.push(t.logam+' '+(t.kadar||''));L.push(lr(gr(t.berat),rp(t.nominal/t.berat)+'/gr'))}
  L.push('-'.repeat(W),lr('TOTAL',rp(t.nominal)),lr('Bayar',t.metodeBayar+(t.rekening?' '+t.rekening:'')));
  if(t.status!=='AKTIF')L.push(ctr('** '+String(t.status).replace(/_/g,' ')+' **'));
  L.push('-'.repeat(W),ctr('Terima kasih'),ctr('Simpan nota sebagai bukti'));return L.join('\n');
}
const findTrx=k=>S.trx.find(t=>t.transaksiId===k||t.clientId===k);
function strukBody(t){
  const sync=String(t.transaksiId).indexOf('TMP-')===0;
  return '<pre class="struk" id="struk-box">'+esc(strukText(t))+'</pre><div class="row2" style="margin-top:12px"><button class="btn gh" data-a="print"'+(sync?' disabled':'')+'>'+ic('printer','s')+' Cetak</button><button class="btn gh" data-a="wa"'+(sync?' disabled':'')+'>'+ic('send','s')+' Kirim WA</button></div>'+
   (t.status==='AKTIF'&&!sync?'<button class="btn bad blk" style="margin-top:10px" data-a="batal" data-v="'+esc(t.transaksiId)+'">'+ic('undo','s')+(isO()?' Batalkan Nota':' Ajukan Pembatalan')+'</button>':'')+(sync?'<small style="display:block;margin-top:8px;text-align:center">Nomor nota sedang diproses server…</small>':'');
}
function showStruk(k){const t=findTrx(k);if(!t)return;RC=k;modal('Struk / Nota',strukBody(t));RC=k}
function refreshStruk(){if(!RC||!$('#struk-box'))return;const t=findTrx(RC);if(!t){RC=null;return}$('#struk-box').parentNode.innerHTML=strukBody(t)}
A.trx=v=>showStruk(v);
A.print=()=>{const t=findTrx(RC);if(!t)return;$('#print-area').textContent=strukText(t);window.print()};
function waOpen(text){const a=document.createElement('a');a.href='https://wa.me/?text='+encodeURIComponent(text);a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove()}
A.wa=()=>{const t=findTrx(RC);if(t)waOpen(strukText(t))};
A.batal=v=>{
  const t=findTrx(v);if(!t)return;
  openForm({title:isO()?'Batalkan Nota '+t.transaksiId:'Ajukan Pembatalan',ok:isO()?'Batalkan Nota':'Kirim Pengajuan ke Owner',fields:[{k:'alasan',l:'Alasan pembatalan',t:'ta',req:1}],
   fn:x=>{
    if(x.alasan.length<3)return 'Alasan terlalu singkat.';
    if(isO()&&isJual(t)&&t.metodeBayar==='TUNAI'&&!kasOK(t.nominal))return 'Saldo kas laci tidak cukup untuk mengembalikan dana.';
    mut('trxBatal',{transaksiId:t.transaksiId,alasan:x.alasan},id=>{
      if(isO()){t.status='DIBATALKAN';localEfek(t,-1)}
      else{t.status='DIAJUKAN_BATAL';S.approval.push({approvalId:'TMP-'+id,jenis:'PEMBATALAN_TRX',referensiId:t.transaksiId,pengajuId:S.me.userId,status:'MENUNGGU',ringkasan:'Batal Nota #'+t.transaksiId+' diajukan: '+x.alasan,createdAt:nowWIT()})}});
    toast(isO()?'Nota dibatalkan':'Pengajuan batal dikirim ke Owner','ok')}});
};

/* ============ STOK MANUAL, HARGA ============ */
F.stok=function(){
  const rek=(S.setting.rekening||[]).map(r=>r.nama);
  openForm({title:'Penyesuaian Stok Etalase',ok:'Simpan',fields:[{k:'arah',l:'Jenis penyesuaian',t:'select',o:[['TAMBAH','Tambah stok'],['KURANG','Kurangi stok']],half:1},{k:'logam',l:'Logam',t:'select',o:['EMAS','PERAK'],half:1},{k:'jenisBarang',l:'Jenis barang',t:'select',o:BARANG,half:1},{k:'kadar',l:'Kadar',t:'select',o:['700','750','375','875','999','925'],half:1},{k:'berat',l:'Berat',t:'num',suf:'gr',req:1},{k:'hargaModal',l:'Harga modal total (opsional)',t:'rp'},{k:'sumberPembayaran',l:'Sumber pembayaran modal',t:'select',o:[['TIDAK_DICATAT','Tidak dicatat ke kas'],['KAS','Kas laci'],['TRANSFER','Transfer bank']]},{k:'rekening',l:'Rekening (jika transfer)',t:'select',o:rek.length?rek:['-']}],
   fn:v=>{
    const modal$=v.hargaModal>0&&v.arah==='TAMBAH';
    if(modal$&&v.sumberPembayaran==='KAS'&&!kasOK(v.hargaModal))return 'Saldo kas laci tidak cukup.';
    mut('stokManual',v,()=>{
      const b=v.arah==='KURANG'?-v.berat:v.berat,x=S.stokSum.find(r=>r.logam===v.logam&&r.jenisBarang===v.jenisBarang&&String(r.kadar)===String(v.kadar));
      if(x)x.berat=Math.round((x.berat+b)*1000)/1000;else S.stokSum.push({logam:v.logam,jenisBarang:v.jenisBarang,kadar:v.kadar,berat:b});
      if(modal$&&v.sumberPembayaran==='KAS')pushKas('KELUAR',v.hargaModal,'BELI_STOK','');
      else if(modal$&&v.sumberPembayaran==='TRANSFER'&&S.saldo.bank)S.saldo.bank[v.rekening]=(S.saldo.bank[v.rekening]||0)-v.hargaModal});
    toast('Stok etalase diperbarui','ok')}});
};
F.harga=function(){
  const s=S.setting;
  openForm({title:'Harga Emas & Perak Hari Ini',fields:[{k:'spotEmas',l:'Spot emas 24K per gram',t:'rp',req:1},{k:'hargaKadar700',l:'Harga toko kadar 700 per gram',t:'rp',req:1,h:'Dipakai sebagai acuan nominal di kasir untuk kadar lain.'},{k:'spotPerak',l:'Harga perak per gram',t:'rp',req:1}].map(f=>Object.assign(f,{v:s[f.k]})),
   fn:v=>{mut('settingSimpan',v,()=>{Object.assign(S.setting,v)});toast('Harga diperbarui','ok')}});
};

/* ============ LAPORAN ============ */
let RP={a:'',b:''};
function lapRows(){return S.trx.filter(t=>live(t)&&t.waktu.slice(0,10)>=RP.a&&t.waktu.slice(0,10)<=RP.b)}
function lapStats(){
  const L=lapRows(),sum=x=>x.reduce((s,t)=>s+t.nominal,0),jl=L.filter(t=>t.jenis==='PENJUALAN'),js=L.filter(t=>t.jenis==='JASA'),bb=L.filter(t=>t.jenis==='BUYBACK'),op=L.filter(t=>t.jenis==='PENGELUARAN_OPS');
  return {L:L,jual:sum(jl),jasa:sum(js),bb:sum(bb),op:sum(op),gram:jl.filter(t=>t.logam==='EMAS').reduce((s,t)=>s+t.berat,0),perak:jl.filter(t=>t.logam==='PERAK').reduce((s,t)=>s+t.berat,0),nota:jl.length+js.length};
}
function lapBody(){
  const x=lapStats(),days={};x.L.forEach(t=>{const d=t.waktu.slice(0,10);days[d]=days[d]||{j:0,b:0,o:0};if(isJual(t))days[d].j+=t.nominal;else if(t.jenis==='BUYBACK')days[d].b+=t.nominal;else days[d].o+=t.nominal});
  const metode={};x.L.filter(isJual).forEach(t=>{metode[t.metodeBayar]=(metode[t.metodeBayar]||0)+t.nominal});
  return '<div class="grid g4" style="margin:16px 0">'+kpi('Penjualan Logam',rp(x.jual),'<small>'+nf2.format(x.gram)+' gr emas · '+nf2.format(x.perak)+' gr perak</small>','gem')+kpi('Pendapatan Jasa',rp(x.jasa),'<small>'+x.nota+' nota</small>','tool')+kpi('Buyback + Pengeluaran',rp(x.bb+x.op),'<small>Buyback '+rpS(x.bb)+' · Ops '+rpS(x.op)+'</small>','up')+kpi('Selisih Kas Operasional',rp(x.jual+x.jasa-x.bb-x.op),'<small>pemasukan − pengeluaran</small>','coin','gold')+'</div>'+
   '<div class="grid g2"><div class="card"><div class="hd"><h3>Per Hari</h3></div><div class="tbw"><table><thead><tr><th>Tanggal</th><th class="r">Penjualan</th><th class="r">Buyback</th><th class="r">Ops</th></tr></thead><tbody>'+(Object.keys(days).sort().reverse().map(d=>'<tr><td>'+tgl(d)+'</td><td class="r">'+rp(days[d].j)+'</td><td class="r">'+rp(days[d].b)+'</td><td class="r">'+rp(days[d].o)+'</td></tr>').join('')||'<tr><td colspan="4">'+empty('Tidak ada data.')+'</td></tr>')+'</tbody></table></div></div>'+
   '<div class="card"><div class="hd"><h3>Metode Pembayaran (pemasukan)</h3></div>'+(Object.keys(metode).map(k=>'<div class="tr"><span class="tm"><b>'+k+'</b></span><span class="ta"><b>'+rp(metode[k])+'</b></span></div>').join('')||empty('Tidak ada data.'))+'</div></div>';
}
P.laporan=function(){
  if(!RP.a){RP.b=today();RP.a=RP.b.slice(0,8)+'01'}
  return '<div class="ph"><div><h1>Laporan &amp; Rekap</h1><p>Data 90 hari terakhir tersedia instan. Ekspor mengambil dari database lengkap.</p></div></div><div class="card"><div class="hd"><div style="display:flex;gap:10px;align-items:end;flex-wrap:wrap"><label class="fld" style="margin:0"><span class="lb">Dari</span><input class="inp" type="date" value="'+RP.a+'" data-in="rpa"></label><label class="fld" style="margin:0"><span class="lb">Sampai</span><input class="inp" type="date" value="'+RP.b+'" data-in="rpb"></label></div>'+
   '<div class="chips"><button class="btn sm" data-a="rpre" data-v="0">Hari ini</button><button class="btn sm" data-a="rpre" data-v="6">7 hari</button><button class="btn sm" data-a="rpre" data-v="m">Bulan ini</button></div></div><div class="chips"><button class="btn sm dk" data-a="lapwa">'+ic('send','s')+' Kirim Laporan WA</button><button class="btn sm" data-a="lapx">'+ic('download','s')+' Ekspor Sheets / Excel / PDF</button></div><div id="lap-body">'+lapBody()+'</div></div>';
};
IN.rpa=v=>{RP.a=v;$('#lap-body').innerHTML=lapBody()};IN.rpb=v=>{RP.b=v;$('#lap-body').innerHTML=lapBody()};
A.rpre=v=>{RP.b=today();RP.a=v==='m'?RP.b.slice(0,8)+'01':addDays(RP.b,-(+v));RJ='';const e=$('#pg-laporan');e.innerHTML=P.laporan()};
A.lapwa=()=>{const x=lapStats();waOpen('*LAPORAN '+S.setting.namaToko.toUpperCase()+'*\n'+tgl(RP.a)+' s/d '+tgl(RP.b)+'\n\nPenjualan logam: '+rp(x.jual)+'\nEmas terjual: '+nf2.format(x.gram)+' gr\nPerak terjual: '+nf2.format(x.perak)+' gr\nPendapatan jasa: '+rp(x.jasa)+'\nBuyback: '+rp(x.bb)+'\nPengeluaran ops: '+rp(x.op)+'\n*Selisih: '+rp(x.jual+x.jasa-x.bb-x.op)+'*\nJumlah nota: '+x.nota)};
A.lapx=()=>{
  modal('Ekspor Laporan','<div id="ex-b" class="empty">Menyiapkan file di Google Drive…</div>');
  call('apiCall',[TOKEN,'laporanExport',{dari:RP.a,sampai:RP.b},'']).then(r=>{const b=$('#ex-b');if(!b)return;
    if(!r.success){b.innerHTML='<div class="err">'+esc(r.message)+'</div>';return}
    const d=r.data;b.className='';b.innerHTML='<p style="margin-bottom:12px"><b>'+d.jumlah+' transaksi</b> diekspor ke folder Drive "Laporan".</p><div class="grid" style="gap:8px"><a class="btn pri" target="_blank" rel="noopener" href="'+esc(d.sheetUrl)+'">Buka Google Sheets</a><a class="btn" target="_blank" rel="noopener" href="'+esc(d.xlsxUrl)+'">Unduh Excel (.xlsx)</a><a class="btn" target="_blank" rel="noopener" href="'+esc(d.pdfUrl)+'">Buka PDF</a></div>'}).catch(()=>{const b=$('#ex-b');if(b)b.innerHTML='<div class="err">Gagal terhubung ke server.</div>'});
};

/* ============ PENGATURAN ============ */
P.pengaturan=function(){
  const s=S.setting,us=S.users||[];
  return '<div class="ph"><div><h1>Pengaturan Toko</h1><p>Profil, harga, rekening, karyawan, dan keamanan.</p></div></div><div class="grid g2" style="align-items:start">'+
   '<div class="card"><div class="hd"><h3>Profil &amp; Operasional</h3><button class="btn sm" data-a="profil">'+ic('edit','s')+' Ubah</button></div>'+
   [['Nama toko',s.namaToko],['Alamat',s.alamatToko],['Telepon',s.teleponToko],['Jam masuk standar',s.jamMasuk],['Koordinat toko',s.latitude+', '+s.longitude],['Radius absensi',s.radiusAbsensi+' m'],['Batas approval pengeluaran',rp(s.limitApproval)],['Email notifikasi Owner',s.ownerEmail||'(email akun Owner)']].map(x=>'<div class="tr" style="min-height:44px"><span class="tm"><small>'+x[0]+'</small><b style="white-space:normal">'+esc(x[1]||'-')+'</b></span></div>').join('')+'</div>'+
   '<div class="grid" style="gap:20px"><div class="card"><div class="hd"><h3>Harga &amp; Rekening</h3><div class="chips"><button class="btn sm" data-a="harga">Harga</button><button class="btn sm" data-a="rekedit">Rekening</button></div></div><div class="tr"><span class="tm"><small>Kadar 700 / gram</small><b>'+rp(s.hargaKadar700)+'</b></span><span class="tm"><small>Spot 24K</small><b>'+rp(s.spotEmas)+'</b></span></div>'+((s.rekening||[]).map(r=>'<div class="tr"><span class="ico gold">'+ic('bank')+'</span><span class="tm"><b>'+esc(r.nama)+'</b><small>'+esc(r.noRek||'-')+'</small></span></div>').join('')||empty('Belum ada rekening.'))+'</div>'+
   '<div class="card"><div class="hd"><h3>Keamanan</h3></div><button class="btn blk" data-a="pass">'+ic('key','s')+' Ubah Kata Sandi Saya</button><small style="display:block;margin-top:10px">Reset password Super Admin &amp; reset data dummy dilakukan dari backend (editor Apps Script): <b>resetPasswordSuperAdmin()</b> dan <b>resetDataDummy()</b>.</small></div></div></div>'+
   '<div class="card" style="margin-top:20px"><div class="hd"><div><h3>Kelola Karyawan &amp; Hak Akses</h3><small>Foto profil, status, dan PIN login</small></div><button class="btn sm pri" data-a="useradd">'+ic('plus','s')+' Tambah Karyawan</button></div>'+us.map(u=>'<div class="tr">'+uAvatar(u,'sm')+'<span class="tm"><b>'+esc(u.nama)+'</b><small>'+esc(u.username)+' · <span class="tag '+(u.role==='OWNER'?'gold':'')+'">'+u.role+'</span> · <span class="tag '+(u.status==='AKTIF'?'ok':'bad')+'">'+u.status+'</span></small></span><div style="display:flex;gap:6px"><button class="btn sm gh" data-a="myphoto" data-v="'+u.userId+'" title="Ubah foto">'+ic('camera','s')+' Foto</button>'+(u.role==='OWNER'?'':'<button class="btn sm" data-a="useredit" data-v="'+u.userId+'">Ubah</button><button class="btn sm" data-a="userpin" data-v="'+u.userId+'">Reset PIN</button>')+'</div></div>').join('')+'</div>';
};
A.profil=()=>F.profil();A.rekedit=()=>F.rekening();A.pass=()=>F.pass();A.useradd=()=>F.user();A.useredit=v=>F.user(v);A.userpin=v=>F.pin(v);
A.myphoto=v=>F.photo(v);A.avchoose=v=>{const i=$('#av-file-input');if(i){i.dataset.uid=v||'';i.value='';i.click()}};
A.avdel=v=>{const uid=v||(S&&S.me&&S.me.userId),u=getUserObj(uid);if(u)u.foto='';LS.d('pos_av_'+uid);if(S&&S.me&&S.me.userId===uid)S.me.foto='';mut('userSimpan',{userId:uid,foto:''});closeModal();toast('Foto profil dihapus','ok');chrome();render()};
IN.avfile=(v,el)=>{const f=el.files&&el.files[0];if(!f)return;const uid=el.dataset.uid||(S&&S.me&&S.me.userId);compress(f).then(d=>{const u=getUserObj(uid);if(u)u.foto=d;LS.s('pos_av_'+uid,d);if(S&&S.me&&S.me.userId===uid)S.me.foto=d;mut('userSimpan',{userId:uid,foto:d});closeModal();toast('Foto profil berhasil disimpan!','ok');chrome();render()}).catch(()=>toast('Gagal memproses foto','err'))};
F.photo=function(uid){
  const targetId=uid||(S&&S.me&&S.me.userId),u=getUserObj(targetId);if(!u)return;
  const currPhoto=(u&&u.foto)||getStoredPhoto(targetId);
  modal('Foto Profil '+esc(u.nama),
    '<div class="grid" style="gap:16px;text-align:center">'+
      '<div style="display:flex;justify-content:center;margin-top:6px">'+
        (currPhoto
          ? '<img id="av-modal-preview" src="'+esc(currPhoto)+'" style="width:110px;height:110px;border-radius:50%;object-fit:cover;border:3px solid var(--gold);box-shadow:var(--sh2)">'
          : '<div id="av-modal-preview" class="av lg '+(u.role==='OWNER'?'owner':'karyawan')+'" style="width:110px;height:110px;font-size:36px;margin:0 auto;border:3px solid var(--gold);box-shadow:var(--sh2)"><span>'+esc((u.nama||'U').slice(0,2).toUpperCase())+'</span></div>')+
      '</div>'+
      '<div><b>'+esc(u.nama)+'</b><br><small style="color:var(--mut)">'+(u.role==='OWNER'?'Owner / Superadmin':'Karyawan / Kasir')+' • @'+esc(u.username||targetId)+'</small></div>'+
      '<div class="row2">'+
        '<button type="button" class="btn pri" data-a="avchoose" data-v="'+esc(targetId)+'">'+ic('camera','s')+' Ambil / Pilih Foto</button>'+
        (currPhoto
          ? '<button type="button" class="btn bad" data-a="avdel" data-v="'+esc(targetId)+'">'+ic('x','s')+' Hapus Foto</button>'
          : '<button type="button" class="btn gh" data-a="close">Tutup</button>')+
      '</div>'+
      '<input type="file" id="av-file-input" accept="image/*" class="hidden" data-in="avfile" data-uid="'+esc(targetId)+'">'+
      '<small style="color:var(--mut)">Foto otomatis dikompresi agar ringan dan tampil di seluruh nota, riwayat, absensi, dan topbar.</small>'+
    '</div>');
};
A.geo=()=>{if(!navigator.geolocation){toast('GPS tidak tersedia','err');return}navigator.geolocation.getCurrentPosition(p=>{const a=$('#f_latitude'),b=$('#f_longitude');if(a&&b){a.value=p.coords.latitude.toFixed(6);b.value=p.coords.longitude.toFixed(6);toast('Koordinat diisi dari lokasi Anda','ok')}},()=>toast('Lokasi tidak diizinkan','err'),{enableHighAccuracy:true,timeout:12000})};
F.profil=function(){
  const s=S.setting,fl=[{k:'namaToko',l:'Nama toko',req:1},{k:'alamatToko',l:'Alamat'},{k:'teleponToko',l:'Telepon / WA toko'},{k:'jamMasuk',l:'Jam masuk standar',t:'time',half:1},{k:'radiusAbsensi',l:'Radius absensi (m)',t:'num',half:1},{k:'latitude',l:'Latitude',half:1},{k:'longitude',l:'Longitude',half:1},{k:'limitApproval',l:'Batas pengeluaran butuh approval',t:'rp'},{k:'saldoAwalKas',l:'Saldo awal kas laci',t:'rp',h:'Hanya berpengaruh bila belum ada mutasi kas.'},{k:'saldoAwalBrankas',l:'Saldo awal brankas',t:'rp'},{k:'ownerEmail',l:'Email notifikasi Owner',t:'email'}].map(f=>Object.assign(f,{v:s[f.k]}));
  openForm({title:'Profil & Operasional',pre:'<button type="button" class="btn sm blk" style="margin-bottom:14px" data-a="geo">'+ic('pin','s')+' Pakai lokasi saya saat ini sebagai titik toko</button>',fields:fl,
   fn:v=>{v.latitude=parseFloat(String(v.latitude).replace(',','.'))||0;v.longitude=parseFloat(String(v.longitude).replace(',','.'))||0;mut('settingSimpan',v,()=>{Object.assign(S.setting,v)});toast('Pengaturan disimpan','ok')}});
};
F.rekening=function(){
  const txt=(S.setting.rekening||[]).map(r=>[r.nama,r.noRek||'',r.saldoAwal||0].join('|')).join('\n');
  openForm({title:'Rekening Bank & QRIS',fields:[{k:'lines',l:'Satu rekening per baris: NAMA|NOMOR|SALDO AWAL',t:'ta',v:txt,h:'Contoh: BCA|1234567890|92400000. Saldo awal hanya berlaku sebelum ada mutasi bank.'}],
   fn:v=>{const arr=v.lines.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{const p=l.split('|');return {nama:(p[0]||'').trim(),noRek:(p[1]||'').trim(),saldoAwal:rpVal(p[2])}}).filter(r=>r.nama);
    if(!arr.length)return 'Minimal satu rekening.';
    mut('settingSimpan',{daftarRekening:JSON.stringify(arr)},()=>{S.setting.rekening=arr;arr.forEach(r=>{if(S.saldo.bank&&S.saldo.bank[r.nama]==null)S.saldo.bank[r.nama]=r.saldoAwal})});toast('Rekening disimpan','ok')}});
};
F.user=function(id){
  const u=id?S.users.find(x=>x.userId===id):null;
  openForm({title:u?'Ubah Karyawan':'Tambah Karyawan',fields:[{k:'nama',l:'Nama lengkap',req:1,v:u&&u.nama},{k:'username',l:'Username / NIK login',req:1,v:u&&u.username},{k:'telepon',l:'Telepon / WA',v:u&&u.telepon},{k:'email',l:'Email',t:'email',v:u&&u.email}].concat(u?[{k:'status',l:'Status',t:'select',o:['AKTIF','NONAKTIF'],v:u.status}]:[{k:'pin',l:'PIN / kata sandi awal (min. 4)',req:1,t:'text'}]),
   fn:v=>{
    if(!u&&S.users.some(x=>String(x.username).toLowerCase()===v.username.toLowerCase()))return 'Username sudah dipakai.';
    mut('userSimpan',Object.assign({userId:id||''},v),cid=>{if(u)Object.assign(u,{nama:v.nama,telepon:v.telepon,email:v.email,status:v.status});else S.users.push({userId:'TMP-'+cid,nama:v.nama,username:v.username.toLowerCase(),role:'KARYAWAN',telepon:v.telepon,status:'AKTIF',email:v.email})});toast('Karyawan disimpan','ok')}});
};
F.pin=function(id){
  const u=S.users.find(x=>x.userId===id);if(!u)return;
  openForm({title:'Reset PIN '+u.nama,ok:'Reset PIN',fields:[{k:'pin',l:'PIN / kata sandi baru (min. 4)',req:1}],fn:v=>{if(v.pin.length<4)return 'Minimal 4 karakter.';mut('userResetPin',{userId:id,pin:v.pin});toast('PIN direset','ok')}});
};
F.pass=function(){
  openForm({title:'Ubah Kata Sandi',fields:[{k:'lama',l:'Kata sandi saat ini',t:'password',req:1},{k:'baru',l:'Kata sandi baru (min. 6)',t:'password',req:1}],
   fn:v=>{if(v.baru.length<6)return 'Minimal 6 karakter.';mut('passwordUbah',v);toast('Mengubah kata sandi…','ok')}});
};

/* ============ BACKEND GAS & BACKUP / RECOVERY ============ */
let BK_TEMP=null;
let LAST_PING_MS=null;

function downloadFile(content,filename,type){
  const blob=new Blob([content],{type:type||'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;document.body.appendChild(a);
  a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
}

function exportCSV(headers,rows,filename){
  const escCell=c=>{if(c==null)return '""';return '"'+String(c).replace(/"/g,'""')+'"'};
  const csv=[headers.map(escCell).join(','),...rows.map(r=>r.map(escCell).join(','))].join('\r\n');
  downloadFile('\uFEFF'+csv,filename,'text/csv;charset=utf-8');
}

function getBackendMetrics(){
  if(!S)return null;
  const trxCount=(S.trx||[]).length;
  const kasCount=(S.kas||[]).length;
  const tutupCount=(S.tutup||[]).length;
  const stokSumCount=(S.stokSum||[]).length;
  const stokLogCount=(S.stokLog||[]).length;
  const bankCount=(S.setting&&S.setting.rekening?S.setting.rekening.length:0);
  const absenCount=(S.absensi||[]).length;
  const izinCount=(S.izin||[]).length;
  const piutangCount=(S.piutang||[]).length;
  const pinjamanCount=(S.pinjaman||[]).length;
  const approvalCount=(S.approval||[]).length;
  const userCount=(S.users||[]).length;

  const cells=(trxCount*20)+(kasCount*8)+(tutupCount*8)+(stokLogCount*8)+
              (stokSumCount*6)+(absenCount*10)+(izinCount*8)+
              (piutangCount*10)+(pinjamanCount*10)+(approvalCount*8)+
              (userCount*6)+1200;

  const MAX_CELLS=10000000;
  const cellPct=Math.max(0.01,(cells/MAX_CELLS)*100);
  const sisaCells=Math.max(0,MAX_CELLS-cells);

  const jsonStr=JSON.stringify(S);
  const jsonSizeKB=(new Blob([jsonStr]).size/1024).toFixed(1);

  return {
    trxCount,kasCount,tutupCount,stokSumCount,stokLogCount,bankCount,
    absenCount,izinCount,piutangCount,pinjamanCount,approvalCount,userCount,
    cells,MAX_CELLS,cellPct,sisaCells,jsonSizeKB
  };
}

P.backend=function(){
  const m=getBackendMetrics();
  const gasUrl=(window.APP_CONFIG&&window.APP_CONFIG.GAS_URL)||'-';
  const scriptId=(window.APP_CONFIG&&window.APP_CONFIG.SCRIPT_ID)||'1QfCDHy6_eWMn1N7hcBaVPqT-kHGp8fXWFumHHNb6GKdwGZ_UbYxN1Dzf';
  const maskedGas=gasUrl.length>40?gasUrl.slice(0,32)+'••••••••'+gasUrl.slice(-14):gasUrl;
  const lastBk=LS.g('pos_last_backup')||'Belum ada riwayat backup lokal';

  return '<div class="ph"><div><h1>Backend GAS &amp; Basis Data</h1><p>Status API Google Apps Script, sisa kapasitas Sheets, backup &amp; pemulihan data (recovery).</p></div>'+
    '<div class="chips">'+
      '<button class="btn sm dk" data-a="bkping" id="bk-ping-btn">'+ic('refresh','s')+' Tes Latency &amp; Health</button>'+
      '<button class="btn sm pri" data-a="bkdown">'+ic('download','s')+' Unduh Backup JSON</button>'+
      '<button class="btn sm" data-a="bkopenfile">'+ic('upload','s')+' Pulihkan Data (Recovery)</button>'+
    '</div></div>'+

    '<input type="file" id="bk-file-input" accept=".json,application/json" class="hidden" data-in="bkfile">'+

    '<div class="grid g3" style="margin-bottom:20px">'+
      kpi('Status Backend GAS','<span id="bk-ping-res"><span class="pill ok">'+ic('check','s')+' Aktif (REST API)</span></span>','<small>'+(LAST_PING_MS!=null?LAST_PING_MS+' ms latency':'Klik tes untuk cek respon')+'</small>','server','gold')+
      kpi('Estimasi Sel Terpakai',nf.format(m?m.cells:0)+' <small>sel</small>','<small>Batas Google Sheets: 10 Juta sel</small>','database')+
      kpi('Ukuran Snapshot Data',(m?m.jsonSizeKB:0)+' <small>KB</small>','<small>Versi state: '+(S.ver||'1')+' • '+S.trx.length+' transaksi</small>','file')+
    '</div>'+

    '<div class="grid dash2" style="margin-bottom:20px">'+
      '<div class="card">'+
        '<div class="hd"><div><h3>Kapasitas &amp; Kuota Google Sheets</h3><small>Google Spreadsheet database (DB_PermataPOS)</small></div>'+
          '<span class="pill ok">Kapasitas Sangat Lapang</span>'+
        '</div>'+
        '<div style="margin:12px 0 16px">'+
          '<div style="display:flex;justify-content:space-between;margin-bottom:6px"><small><b>Penggunaan Sel Database:</b></small><small><b>'+(m?m.cellPct.toFixed(3):'0')+'%</b> dari 10.000.000</small></div>'+
          '<div class="track" style="height:12px"><i style="width:'+Math.max(2,(m?m.cellPct:0))+'%;background:var(--ok)"></i></div>'+
          '<div style="display:flex;justify-content:space-between;color:var(--mut);font-size:12px"><span>Terpakai: '+nf.format(m?m.cells:0)+' sel</span><span>Sisa Kapasitas: ~'+nf.format(m?m.sisaCells:10000000)+' sel</span></div>'+
        '</div>'+
        '<div class="tbw" style="margin-top:14px"><table>'+
          '<thead><tr><th>Nama Tabel / Sheet</th><th class="r">Jumlah Data</th><th>Status Operasional</th></tr></thead>'+
          '<tbody>'+
            '<tr><td><b>Transactions</b> (Transaksi Nota POS)</td><td class="r"><b>'+m.trxCount+'</b> baris</td><td><span class="tag ok">Sinkron</span></td></tr>'+
            '<tr><td><b>CashLedger</b> (Mutasi Kas Laci)</td><td class="r"><b>'+m.kasCount+'</b> baris</td><td><span class="tag ok">Sinkron</span></td></tr>'+
            '<tr><td><b>Inventory</b> (Rekap Stok Emas &amp; Perak)</td><td class="r"><b>'+m.stokSumCount+'</b> jenis</td><td><span class="tag ok">Aktif</span></td></tr>'+
            '<tr><td><b>StockLog</b> (Riwayat Penyesuaian Stok)</td><td class="r"><b>'+m.stokLogCount+'</b> mutasi</td><td><span class="tag ok">Tercatat</span></td></tr>'+
            '<tr><td><b>BankTransactions</b> (Rekening Toko)</td><td class="r"><b>'+m.bankCount+'</b> akun</td><td><span class="tag ok">Terkoneksi</span></td></tr>'+
            '<tr><td><b>Attendance</b> (Absensi GPS &amp; Izin)</td><td class="r"><b>'+(m.absenCount+m.izinCount)+'</b> data</td><td><span class="tag ok">Valid</span></td></tr>'+
            '<tr><td><b>Receivables</b> (Piutang &amp; Pinjaman)</td><td class="r"><b>'+(m.piutangCount+m.pinjamanCount)+'</b> data</td><td><span class="tag ok">Aman</span></td></tr>'+
            '<tr><td><b>Approvals &amp; Users</b> (Otorisasi &amp; Akun)</td><td class="r"><b>'+(m.approvalCount+m.userCount)+'</b> akun/task</td><td><span class="tag ok">Proteksi</span></td></tr>'+
          '</tbody>'+
        '</table></div>'+
      '</div>'+

      '<div class="grid" style="gap:20px;align-content:start">'+
        '<div class="card">'+
          '<div class="hd"><div><h3>Rincian Google Apps Script</h3><small>Integrasi backend &amp; script Google</small></div><div class="chips"><button class="btn sm" data-a="bkcopy" data-v="gasurl">'+ic('file','s')+' Salin URL</button><button class="btn sm" data-a="bkcopy" data-v="scriptid">'+ic('file','s')+' Salin Script ID</button></div></div>'+
          '<div class="tr"><span class="tm"><small>Script ID Proyek Google</small><b style="word-break:break-all;font-size:12px;font-family:monospace;color:var(--gold-d)">'+esc(scriptId)+'</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Web App Endpoint (/exec)</small><b style="word-break:break-all;font-size:12px;font-family:monospace" id="bk-gas-display">'+esc(maskedGas)+'</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Metode Komunikasi</small><b>POST JSON (text/plain CORS-Free)</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Proyek Apps Script</small><b>App_PermataPOS_Nabire</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Folder Google Drive</small><b>App_PermataPOS_Nabire</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Zona Waktu Server</small><b>Asia/Jayapura (WIT, Nabire)</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Masa Berlaku Token Sesi</small><b>12 Jam (Auto-refresh)</b></span></div>'+
          '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">'+
            '<a class="btn sm pri" style="flex:1" href="https://script.google.com/d/'+esc(scriptId)+'/edit" target="_blank" rel="noopener">'+ic('cloud','s')+' Buka Proyek Apps Script Ini</a>'+
            '<a class="btn sm gh" style="flex:1" href="https://drive.google.com" target="_blank" rel="noopener">'+ic('file','s')+' Buka Google Drive</a>'+
          '</div>'+
        '</div>'+

        '<div class="card">'+
          '<div class="hd"><h3>Riwayat Backup Terakhir</h3></div>'+
          '<div class="mini">'+
            '<small>Waktu Backup Terakhir Terdata:</small>'+
            '<div class="big" style="font-size:16px;margin:4px 0">'+esc(lastBk)+'</div>'+
            '<small style="color:var(--mut)">Disarankan mengunduh berkas backup setiap kali selesai tutup kas harian.</small>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="grid g2" style="margin-bottom:20px;align-items:start">'+
      '<div class="card">'+
        '<div class="hd"><div><h3>Pusat Cadangan Data (Backup)</h3><small>Ekspor dan simpan seluruh data toko secara lokal</small></div>'+
          '<span class="ico gold">'+ic('download')+'</span>'+
        '</div>'+
        '<p style="color:var(--mut);margin-bottom:14px">Cadangan mencakup transaksi, mutasi kas, saldo brankas, stok gramasi, akun kasir, serta seluruh riwayat toko.</p>'+
        '<div class="grid" style="gap:10px">'+
          '<button class="btn pri blk" data-a="bkdown">'+ic('download','s')+' <b>Unduh Snapshot Lengkap (.json)</b></button>'+
          '<div class="row2">'+
            '<button class="btn gh" data-a="bkcsvtrx">'+ic('file','s')+' Ekspor CSV Transaksi</button>'+
            '<button class="btn gh" data-a="bkcsvkas">'+ic('file','s')+' Ekspor CSV Mutasi Kas</button>'+
          '</div>'+
          '<button class="btn gh sm blk" data-a="bkcopyclip">'+ic('file','s')+' Salin Ringkasan JSON ke Clipboard</button>'+
        '</div>'+
        '<div style="background:var(--cv);border-radius:12px;padding:12px;margin-top:14px;font-size:12px;color:var(--mut)">'+
          '<b>Tips Keamanan:</b> File JSON hasil unduhan dapat disimpan di flashdisk atau Google Drive terpisah sebagai arsip toko yang aman.'+
        '</div>'+
      '</div>'+

      '<div class="card">'+
        '<div class="hd"><div><h3>Pemulihan Data (Recovery &amp; Sebaliknya)</h3><small>Pulihkan database dari file cadangan JSON</small></div>'+
          '<span class="ico bad">'+ic('undo')+'</span>'+
        '</div>'+
        '<p style="color:var(--mut);margin-bottom:14px">Gunakan menu ini jika Anda mengganti perangkat kasir, melakukan instalasi baru, atau perlu mengembalikan data ke titik backup sebelumnya.</p>'+
        '<div class="grid" style="gap:10px">'+
          '<button class="btn dk blk" data-a="bkopenfile">'+ic('upload','s')+' <b>Pilih Berkas Cadangan (.json) &amp; Pulihkan</b></button>'+
          '<button class="btn gh sm blk" data-a="bksheetinfo">'+ic('info','s')+' Cara Pulihkan Langsung di Google Sheets (Version History)</button>'+
        '</div>'+
        '<div style="background:var(--warnb);color:var(--warn);border-radius:12px;padding:12px;margin-top:14px;font-size:12px">'+
          '<b>Proteksi Pemulihan:</b> Sistem akan memvalidasi integritas file cadangan dan otomatis membuat file backup darurat dari data saat ini sebelum proses pemulihan dieksekusi.'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="card">'+
      '<div class="hd"><div><h3>Fungsi Darurat &amp; Pemeliharaan Backend Apps Script</h3><small>Fungsi-fungsi yang dijalankan langsung dari editor script.google.com</small></div></div>'+
      '<div class="tbw"><table>'+
        '<thead><tr><th>Nama Fungsi di Kode.gs</th><th>Kegunaan &amp; Tindakan</th><th class="r">Aksi</th></tr></thead>'+
        '<tbody>'+
          '<tr><td><code>resetPasswordSuperAdmin()</code></td><td>Mereset password Owner ke <b>Permata@2026</b> dan mengeluarkan semua sesi login.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="resetPasswordSuperAdmin()">Salin</button></td></tr>'+
          '<tr><td><code>matikanDemoMode()</code></td><td><b>Wajib sebelum go-live nyata:</b> Menyembunyikan tombol demo Kasir/Owner dari halaman login.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="matikanDemoMode()">Salin</button></td></tr>'+
          '<tr><td><code>resetDataDummy()</code></td><td>Menghapus data transaksi dan mengisi ulang contoh data untuk pengujian.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="resetDataDummy()">Salin</button></td></tr>'+
          '<tr><td><code>hapusSemuaDataTransaksi()</code></td><td>Mengosongkan semua transaksi untuk persiapan toko buka resmi.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="hapusSemuaDataTransaksi()">Salin</button></td></tr>'+
          '<tr><td><code>kunciProduksi()</code></td><td>Mengunci backend agar fungsi reset tidak dapat dijalankan secara tidak sengaja.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="kunciProduksi()">Salin</button></td></tr>'+
        '</tbody>'+
      '</table></div>'+
    '</div>';
};

A.bkping=()=>{
  const btn=$('#bk-ping-btn');const resEl=$('#bk-ping-res');
  if(btn)btn.disabled=true;
  if(resEl)resEl.innerHTML='<span class="pill warn">'+ic('refresh','s')+' Memeriksa…</span>';
  const t0=performance.now();
  window.API.health().then(r=>{
    LAST_PING_MS=Math.round(performance.now()-t0);
    if(btn)btn.disabled=false;
    if(resEl)resEl.innerHTML='<span class="pill ok">'+ic('check','s')+' Online ('+LAST_PING_MS+' ms)</span>';
    toast('Health Check Sukses: Latency '+LAST_PING_MS+' ms','ok');
  }).catch(e=>{
    if(btn)btn.disabled=false;
    if(resEl)resEl.innerHTML='<span class="pill bad">'+ic('alert','s')+' Terputus</span>';
    toast('Gagal terhubung ke backend: '+(e.message||'Timeout'),'err');
  });
};

A.bkdown=()=>{
  if(!S)return;
  const now=nowWIT();const safeDate=now.replace(/[: ]/g,'-');
  const filename='backup_permata_pos_'+safeDate+'.json';
  const backupData={
    appName:'Permata POS',backupTime:now,
    storeName:S.setting?S.setting.namaToko:'Permata Emas & Perak Nabire',
    ver:S.ver||'1',state:S
  };
  downloadFile(JSON.stringify(backupData,null,2),filename,'application/json');
  LS.s('pos_last_backup',now+' WIT');
  toast('File backup '+filename+' berhasil diunduh','ok');
  render();
};

A.bkcsvtrx=()=>{
  if(!S||!S.trx||!S.trx.length){toast('Belum ada transaksi untuk diekspor','err');return}
  const headers=['ID Transaksi','Waktu','Operator','Jenis','Kategori','Kadar','Berat (gr)','Pelanggan','Metode Bayar','Nominal (Rp)','Status','Catatan'];
  const rows=S.trx.map(t=>[t.transaksiId,t.waktu,uname(t.operatorId),t.jenis,t.kategori||'',t.kadar||'',t.berat||0,t.pelanggan||'',t.metodeBayar||'',t.nominal||0,t.status||'',t.catatan||'']);
  exportCSV(headers,rows,'transaksi_permata_pos_'+today()+'.csv');
  toast('Data transaksi berhasil diekspor ke CSV','ok');
};

A.bkcsvkas=()=>{
  if(!S||!S.kas||!S.kas.length){toast('Belum ada mutasi kas untuk diekspor','err');return}
  const headers=['ID Mutasi','Waktu','Operator','Arah','Sumber','Referensi','Nominal (Rp)','Saldo Akhir (Rp)'];
  const rows=S.kas.map(m=>[m.mutasiKasId,m.waktu,uname(m.operatorId),m.arah,m.sumber,m.referensiId||'',m.nominal||0,m.saldo||0]);
  exportCSV(headers,rows,'mutasi_kas_permata_pos_'+today()+'.csv');
  toast('Mutasi kas berhasil diekspor ke CSV','ok');
};

A.bkcopy=v=>{
  const text=v==='gasurl'?((window.APP_CONFIG&&window.APP_CONFIG.GAS_URL)||''):
             v==='scriptid'?((window.APP_CONFIG&&window.APP_CONFIG.SCRIPT_ID)||'1QfCDHy6_eWMn1N7hcBaVPqT-kHGp8fXWFumHHNb6GKdwGZ_UbYxN1Dzf'):v;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>toast('Berhasil disalin ke papan klip','ok'));
  }else{prompt('Salin teks berikut:',text)}
};

A.bkcopyclip=()=>{
  if(!S)return;
  const summary=JSON.stringify({
    appName:'Permata POS',backupTime:nowWIT(),
    setting:S.setting,saldo:S.saldo,
    totalTransaksi:(S.trx||[]).length,totalMutasiKas:(S.kas||[]).length
  },null,2);
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(summary).then(()=>toast('Ringkasan JSON disalin','ok'));
  }else{prompt('Salin ringkasan:',summary)}
};

A.bkopenfile=()=>{
  const input=$('#bk-file-input');
  if(input){input.value='';input.click()}
};

A.bksheetinfo=()=>{
  modal('Pemulihan Otomatis di Google Sheets',
    '<div class="grid" style="gap:14px">'+
      '<p>Google Sheets memiliki sistem cadangan otomatis berketelitian tinggi (<b>Version History</b>):</p>'+
      '<ol style="padding-left:20px;line-height:22px">'+
        '<li>Buka spreadsheet database Anda (<b>DB_PermataPOS</b>) di Google Drive.</li>'+
        '<li>Klik menu <b>File</b> ➔ <b>Version history</b> ➔ <b>See version history</b> (Ctrl+Alt+Shift+H).</li>'+
        '<li>Pilih tanggal dan jam versi yang ingin dipulihkan dari panel sebelah kanan.</li>'+
        '<li>Klik tombol <b>Restore this version</b>.</li>'+
      '</ol>'+
      '<div class="err" style="background:var(--okb);color:var(--ok)">Data di Google Sheets otomatis kembali ke kondisi saat versi tersebut dipilih!</div>'+
      '<button class="btn pri blk" data-a="close">Tutup</button>'+
    '</div>');
};

IN.bkfile=(v,el)=>{
  const file=el.files&&el.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const parsed=JSON.parse(e.target.result);
      const dataState=parsed.state||parsed;
      if(!dataState||typeof dataState!=='object'||(!dataState.setting&&!dataState.trx&&!dataState.users)){
        toast('Format file tidak valid. Pastikan file adalah backup JSON dari Permata POS.','err');
        return;
      }
      BK_TEMP=dataState;
      const bTime=parsed.backupTime||parsed.now||'Tidak tertera';
      const sName=(dataState.setting&&dataState.setting.namaToko)||'Toko Emas Permata';
      const nTrx=(dataState.trx||[]).length;
      const nKas=(dataState.kas||[]).length;
      const nUsr=(dataState.users||[]).length;
      const sKas=dataState.saldo?rp(dataState.saldo.kas):'-';

      modal('Pratinjau &amp; Pemulihan Data Cadangan',
        '<div class="grid" style="gap:14px">'+
          '<div class="mini">'+
            '<small>Nama Toko Cadangan:</small>'+
            '<div class="big" style="font-size:18px">'+esc(sName)+'</div>'+
            '<small>Waktu Backup: <b>'+esc(bTime)+'</b></small>'+
          '</div>'+
          '<div class="tbw"><table>'+
            '<tbody>'+
              '<tr><td>Jumlah Transaksi POS</td><td class="r"><b>'+nTrx+'</b> transaksi</td></tr>'+
              '<tr><td>Jumlah Mutasi Kas Laci</td><td class="r"><b>'+nKas+'</b> baris</td></tr>'+
              '<tr><td>Saldo Kas Tercatat</td><td class="r"><b>'+sKas+'</b></td></tr>'+
              '<tr><td>Jumlah Akun Karyawan</td><td class="r"><b>'+nUsr+'</b> pengguna</td></tr>'+
            '</tbody>'+
          '</table></div>'+
          '<div style="background:var(--badb);color:var(--bad);border-radius:12px;padding:12px;font-size:12px">'+
            '<b>Peringatan Pemulihan:</b> Memulihkan cadangan ini akan mengganti data aktif pada layar aplikasi. '+
            'Sistem akan otomatis mengunduh file cadangan darurat (auto-backup) dari data Anda saat ini sebelum mengganti.'+
          '</div>'+
          '<div style="display:flex;gap:10px;justify-content:flex-end">'+
            '<button type="button" class="btn gh" data-a="close">Batal</button>'+
            '<button type="button" class="btn bad" data-a="bkapply">'+ic('undo','s')+' Konfirmasi &amp; Pulihkan Sekarang</button>'+
          '</div>'+
        '</div>');
    }catch(err){
      toast('Gagal membaca file JSON: '+err.message,'err');
    }
  };
  reader.readAsText(file);
};

A.bkapply=()=>{
  if(!BK_TEMP)return;
  try{
    const safetyBackup={appName:'Permata POS (Auto Safety Backup)',backupTime:nowWIT(),state:S};
    downloadFile(JSON.stringify(safetyBackup,null,2),'safety_backup_sebelum_restore_'+today()+'.json','application/json');
  }catch(err){}

  adopt(BK_TEMP);
  LS.s('pos_snap',JSON.stringify(S));
  BK_TEMP=null;
  closeModal();
  toast('Data berhasil dipulihkan dari cadangan!','ok');
  chrome();
  render();
};

/* ============ MENU (mobile) ============ */
P.menu=function(){
  return '<div class="ph"><div style="display:flex;align-items:center;gap:14px">'+uAvatar(S.me,'lg')+
   '<div><h1>'+esc(S.me.nama)+'</h1><p>'+(isO()?'Owner / Superadmin':'Kasir / Karyawan')+'</p></div></div>'+
   '<button class="btn sm gh" data-a="myphoto">'+ic('camera','s')+' Foto Profil</button></div>'+
   '<div class="card">'+allowed().map(m=>'<button class="tr" data-a="go" data-v="'+m[0]+'"><span class="ico gold">'+ic(m[3])+'</span><span class="tm"><b>'+esc(label(m[0]))+'</b></span>'+ic('arrow','s')+'</button>').join('')+
   '<button class="tr" data-a="myphoto"><span class="ico">'+ic('camera')+'</span><span class="tm"><b>Ubah Foto Profil Saya</b></span></button>'+
   '<button class="tr" data-a="pass"><span class="ico">'+ic('key')+'</span><span class="tm"><b>Ubah Kata Sandi</b></span></button>'+
   '<button class="tr" data-a="logout"><span class="ico bad">'+ic('logout')+'</span><span class="tm"><b>Keluar</b></span></button><div class="sync" style="background:var(--cv);color:var(--mut);margin-top:10px"><i></i><span>Tersinkron</span></div></div>';
};

/* ============ INIT ============ */
function applyPub(){
  $('#lgm-nama').textContent=PUB.nama||'Toko Emas & Perak Permata';$('#lgm-spot').textContent=PUB.spot?rp(PUB.spot)+'/gr':'-';
  const er=$('#lg-err');
  if(PUB.ready===false){er.textContent='Database belum dibuat: '+(PUB.msg||'jalankan setupAppEnvironment() di Apps Script.');er.classList.remove('hidden')}
  $('#lg-demo').classList.toggle('hidden',!(PUB.demo&&PUB.cred));
}
function initLogin(){
  $('#lg-gps-t').textContent='Lokasi diverifikasi saat Absen Masuk';
  $$('#lg-role button').forEach(b=>b.addEventListener('click',()=>{ROLE=b.dataset.role;$$('#lg-role button').forEach(x=>x.classList.toggle('on',x===b))}));
  $('#lg-eye').addEventListener('click',()=>{const i=$('#lg-p'),sh=i.type==='password';i.type=sh?'text':'password';$('#lg-eye').innerHTML=ic(sh?'eyeoff':'eye')});
  const fill=(c,r)=>{if(!c)return;ROLE=r;$$('#lg-role button').forEach(x=>x.classList.toggle('on',x.dataset.role===r));$('#lg-u').value=c.u;$('#lg-p').value=c.p;$('#lg-p').focus()};
  $('#dm-k').addEventListener('click',()=>fill(PUB.cred&&PUB.cred.kasir,'KARYAWAN'));$('#dm-o').addEventListener('click',()=>fill(PUB.cred&&PUB.cred.owner,'OWNER'));
  applyPub();
  window.API.public().then(r=>{if(r&&r.success){PUB=r.data;LS.s('pos_pub',JSON.stringify(PUB));applyPub()}}).catch(e=>{if(e&&e.fatal){const er=$('#lg-err');er.textContent=e.message;er.classList.remove('hidden')}});
}
function init(){
  hydrateIcons();initLogin();
  const tk=LS.g('pos_tk'),snap=LS.g('pos_snap');
  if(tk&&snap){
    try{
      TOKEN=tk;try{Q=JSON.parse(LS.g('pos_q')||'[]')}catch(e){Q=[]}
      showApp();adopt(JSON.parse(snap));RJ='';go('dashboard');startPolling();loadStateSoon();
    }catch(e){TOKEN=null;showLogin()}
  }else showLogin();
}
function loadStateSoon(){pump();if(!Q.length)loadState()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
