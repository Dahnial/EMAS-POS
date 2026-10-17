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
upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
bluetooth:'<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
trash:'<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
sparkle:'<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2Z"/>',
tag:'<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
history:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5M12 7v5l4 2"/>',
msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
image:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
filter:'<path d="M22 3H2l8 9.46V19l4 2v-8.54Z"/>'
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
const jenisLbl={PENJUALAN:'Penjualan',BUYBACK:'Buyback',TUKAR_TAMBAH:'Tukar Tambah',JASA:'Pemasukan',PENGELUARAN_OPS:'Pengeluaran',SEDEKAH:'Sedekah'};

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
const isJual=t=>t.jenis==='PENJUALAN'||t.jenis==='JASA'||(t.jenis==='TUKAR_TAMBAH'&&t.nominal>=0);
const isOut=t=>t.jenis==='BUYBACK'||t.jenis==='PENGELUARAN_OPS'||t.jenis==='SEDEKAH'||(t.jenis==='TUKAR_TAMBAH'&&t.nominal<0);
const sortD=a=>a.slice().sort((x,y)=>String(y.waktu||y.createdAt).localeCompare(String(x.waktu||x.createdAt)));
const nota=t=>String(t.transaksiId).indexOf('TMP-')===0?'memproses…':t.transaksiId;
const pending=()=>S&&S.approval?S.approval.filter(a=>a.status==='MENUNGGU'):[];
const cleanCatatan=s=>String(s||'').replace(/\s*__TT[\s\S]*$/,'').replace(/\s*\{"refTukarTambah[\s\S]*$/,'').trim();

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
  if(st&&st.trx){
    st.trx.forEach(t=>{
      const c=t.catatan||'';
      const hasTT=c.indexOf('__TT__')!==-1||c.indexOf('TUKAR TAMBAH')!==-1||t.jenis==='TUKAR_TAMBAH';
      if(hasTT){
        t.isTukarTambah=true;
        const mRef=c.match(/\[TUKAR TAMBAH #(TT-[^\]]+)\]/)||c.match(/#(TT-[A-Za-z0-9_-]+)/);
        if(mRef)t.refTukarTambah=mRef[1];
        if(c.indexOf('BARANG_BARU')!==-1||c.indexOf('Baru:')!==-1||(t.jenis==='PENJUALAN'&&hasTT)){
          t.peranTT='BARANG_BARU';
        }else if(c.indexOf('BARANG_LAMA')!==-1||c.indexOf('Lama:')!==-1||c.indexOf('DITERIMA TOKO')!==-1||(t.jenis==='BUYBACK'&&hasTT)){
          t.peranTT='BARANG_LAMA';
        }else if(c.indexOf('SELISIH_MASUK')!==-1||c.indexOf('Tambah Bayar')!==-1||c.indexOf('Pemasukan Tukar Tambah')!==-1){
          t.peranTT='SELISIH_MASUK';
        }else if(c.indexOf('SELISIH_KELUAR')!==-1||c.indexOf('Uang Kembali')!==-1){
          t.peranTT='SELISIH_KELUAR';
        }
        if(c.indexOf('__TT__')!==-1){
          try{
            const parts=c.split('__TT__');
            if(parts[1])t.detailTT=JSON.parse(parts[1]);
          }catch(e){}
        }
      }
    });
    // Pertahankan transaksi lokal sementara yang belum selesai disinkronkan ke server
    if(S&&S.trx){
      // Salinan sementara (TMP) HANYA dipertahankan selama permintaannya masih di antrean
      // dan server belum mengembalikan nota aslinya (dicocokkan lewat clientId = ID permintaan).
      // Ini mencegah transaksi tampil dobel (TMP + nota asli).
      const pendingLocal=S.trx.filter(x=>String(x.transaksiId).indexOf('TMP-')===0&&x.clientId&&Q.some(q=>q.id===x.clientId)&&!st.trx.some(s=>s.clientId&&s.clientId===x.clientId));
      if(pendingLocal.length){
        st.trx.push(...pendingLocal);
      }
    }
  }
  S=st;OFF=new Date(st.now.replace(' ','T')+'+09:00').getTime()-Date.now();
  LS.s('pos_snap',JSON.stringify(S));
  const j=JSON.stringify(S);
  if(j!==RJ){RJ=j;chrome();render();refreshStruk()}
}
/** Ubah state SEKARANG (sinkron), kirim ke server di latar belakang. */
function mut(action,payload,local){
  GEN++;
  const id='c'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
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
/** Ambil data terbaru. Jawaban diabaikan bila sudah ada perubahan baru sejak permintaan dikirim
    (GEN berubah) atau versinya lebih lama dari data di layar — mencegah data lama menimpa data baru. */
let GEN=0;
const verN=v=>Number(v)||0;
function loadState(){
  if(!TOKEN)return Promise.resolve();
  const g=GEN;
  return call('apiCall',[TOKEN,'sync',{},'']).then(r=>{
    if(r&&r.expired){return logout(true)}
    if(r&&r.success&&!Q.length&&!busy&&g===GEN&&!(S&&verN(r.data.state.ver)<verN(S.ver)))adopt(r.data.state);
  }).catch(()=>{});
}
function startPolling(){
  if(window.__poll)return;
  window.__poll=setInterval(()=>{
    if(document.hidden||!TOKEN||busy||Q.length||!S)return;
    call('apiPing',[TOKEN,S.ver]).then(r=>{if(r.expired)return logout(true);if(r.changed)loadState()}).catch(()=>{});
  },15000);
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
  call('apiLogin',[u,p,ROLE,location.href.split('#')[0]]).then(r=>{
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
['absensi','Absensi & Izin','Absen','pin','B'],['piutang','Piutang, Hutang & Pinjaman','Piutang','file','O'],['hutangemas','Hutang Emas Toko (Supplier)','Hutang Emas','scale','O'],
['approval','Pusat Persetujuan','Persetujuan','shield','O'],['laporan','Laporan & Rekap','Laporan','chart','O'],
['notif','WhatsApp & Notifikasi','Notifikasi','send','O'],['crm','CRM Pelanggan','CRM','users','O'],
['migrasi','Migrasi Data','Migrasi','swap','O'],['pengaturan','Pengaturan Toko','Pengaturan','sliders','O'],
['backend','Backend GAS & Basis Data','Backend & DB','database','O']];
const allowed=()=>MENU.filter(m=>m[4]==='B'||(m[4]==='O')===isO());
const BN={O:['dashboard','kasir','stok','absensi','menu'],K:['dashboard','kasir','kas','absensi','menu']};
function label(id){
  if(id==='menu')return 'Menu';
  if(id==='profil_kasir')return 'Profil & Pengaturan Kasir';
  if(id==='profil')return isO()?'Pengaturan Toko':'Profil Kasir';
  const m=MENU.find(x=>x[0]===id);
  return m?(id==='absensi'&&isO()?'Absensi Karyawan':m[1]):'';
}
function getNotifCount(){
  if(!S || !S.me) return 0;
  if(isO()) return pending().length;
  const list = S.pesanKaryawan || [];
  return list.filter(p => (!p.targetUserId || p.targetUserId === 'ALL' || p.targetUserId === S.me.userId) && !(p.readBy && p.readBy.includes(S.me.userId))).length;
}

function chrome(){
  if(!S||!$('#sidebar'))return;
  const n=getNotifCount(), o=isO();
  const logoSrc=(S.setting&&S.setting.logoToko)||LS.g('pos_logo_toko');
  const logoHtml=logoSrc
    ? '<div class="logo custom-logo"><img src="'+esc(logoSrc)+'" alt="Logo Toko"></div>'
    : '<div class="logo custom-logo"><img src="img/logo-putri-bali.png" alt="Putri Bali"></div>';
  $('#sidebar').innerHTML='<div class="brand">'+logoHtml+'<div><b>'+esc(S.setting.namaToko.replace('Toko Emas & Perak ','Toko '))+'</b><small>JUAL BELI EMAS &amp; PERAK</small></div></div>'+
   '<div style="background:rgba(255,255,255,.05);border-radius:14px;padding:8px 12px;display:flex;align-items:center;gap:10px;cursor:pointer;border:1px solid rgba(255,255,255,.08)" data-a="topbar_profile" title="Buka Profil Pengguna">'+
     uAvatar(S.me,'sm')+
     '<div style="flex:1;min-width:0"><b style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px">'+esc(S.me.nama)+'</b><small style="color:#a1a1aa">'+(o?'Owner / Superadmin':'Kasir / Karyawan')+'</small></div>'+
   '</div>'+
   '<div class="inp" style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.07);border:0;color:#a1a1aa;min-height:44px;border-radius:999px">'+ic('search','s')+'<input data-in="gs" placeholder="Cari transaksi / nota…" style="background:none;border:0;color:#fff;outline:0;width:100%"></div>'+
   '<nav class="nav" aria-label="Menu utama">'+allowed().map(m=>'<button class="nv'+(m[0]===CUR?' on':'')+'" data-a="go" data-v="'+m[0]+'">'+ic(m[3])+'<span>'+esc(m[0]==='absensi'&&o?'Absensi GPS Karyawan':m[1])+'</span>'+(m[0]==='approval'&&n?'<em class="cnt" style="font-style:normal">'+n+'</em>':'')+'</button>').join('')+'</nav>'+
   '<div class="sbf"><div class="sync"><i></i><span>Tersinkron</span></div><button class="nv" data-a="logout">'+ic('logout')+'<span>Keluar</span></button></div>';
  const hr=+nowWIT().slice(11,13);
  const logoTopHtml='';
  $('#topbar').innerHTML='<div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">'+
    '<button id="sb-toggle" class="ibtn" data-a="sbtoggle" aria-label="Buka Menu" style="margin-right:2px">'+ic('menu')+'</button>'+
    logoTopHtml+
    '<div class="ttl"><b id="tt-t">'+esc(label(CUR))+'</b><small><span class="desk-inline">'+esc(S.setting.namaToko)+' • </span>'+tgl(today())+'</small></div>'+
   '</div>'+
   '<div class="topbar-actions">'+
    '<div class="chips desk"><span class="chip"><i style="width:8px;height:8px;border-radius:50%;background:var(--ok)"></i>Toko Buka • '+(hr<13?'Shift Pagi':'Shift Siang')+'</span><span class="chip gold desk-chip-extra">'+ic('up','s')+' Spot Emas '+rp(S.setting.spotEmas)+'/gr</span><span class="pill syncchip ok">Sheets Sync</span></div>'+
    '<button class="btn sm pri desk" data-a="trxnew" data-v="PENJUALAN" style="display:inline-flex;gap:6px;align-items:center;font-weight:700;box-shadow:0 4px 14px -3px rgba(201,160,74,.65)" title="Akses Cepat Transaksi Baru">'+ic('plus','s')+' <span>Transaksi Baru</span></button>'+
    '<button class="ibtn" data-a="bell" aria-label="Notifikasi">'+ic('bell')+(n?'<span class="dot">'+n+'</span>':'')+'</button>'+
    '<div class="me" data-a="topbar_profile" style="cursor:pointer" title="Buka Profil Pengguna"><div class="nm"><b>'+esc(S.me.nama)+'</b><small>'+(o?'Owner / Superadmin':'Kasir')+'</small></div>'+uAvatar(S.me)+'</div>'+
   '</div>';
  const bn=o?['dashboard','kasir','TRX_CENTER','stok','profil']:['dashboard','kasir','TRX_CENTER','absensi','profil'];
  $('#bnav').innerHTML=bn.map(id=>{
    if(id==='TRX_CENTER'){
      return '<button class="bnav-center-btn" data-a="trxnew" data-v="PENJUALAN" aria-label="Transaksi Baru"><div class="bnav-circle-gold">'+ic('plus')+'</div><span>+ Transaksi</span></button>';
    }
    const isProf=id==='profil';
    const on=isProf?(CUR==='profil'||(o&&CUR==='pengaturan')||(!o&&CUR==='profil_kasir')):(id===CUR);
    const m=MENU.find(x=>x[0]===id);
    const icoName=isProf?'user':(m?m[3]:'menu');
    const labelTxt=isProf?'Profil':(m?m[2]:'Menu');
    return '<button class="bnav-item '+(on?'on':'')+'" data-a="go" data-v="'+id+'" aria-label="'+esc(labelTxt)+'">'+ic(icoName)+'<span>'+esc(labelTxt)+'</span>'+(!isProf&&id==='menu'&&n?'<em class="cnt" style="font-style:normal">'+n+'</em>':'')+'</button>';
  }).join('');
  setSync();
  hydrateIcons();
}
function go(p){
  if(!S)return;
  if(p==='profil'){
    p=isO()?'pengaturan':'profil_kasir';
  }
  if(p!=='menu'&&p!=='profil_kasir'&&!allowed().some(m=>m[0]===p))p='dashboard';
  CUR=p;$$('.pg').forEach(e=>e.classList.toggle('on',e.id==='pg-'+p));
  const sb=$('#sidebar'), bd=$('#sidebar-backdrop');
  if(sb)sb.classList.remove('open');
  if(bd)bd.classList.remove('open');
  chrome();RJ='';render();window.scrollTo(0,0);
}
A.sbtoggle=()=>{
  const sb=$('#sidebar'), bd=$('#sidebar-backdrop');
  if(sb)sb.classList.toggle('open');
  if(bd)bd.classList.toggle('open');
};
A.sbclose=()=>{
  const sb=$('#sidebar'), bd=$('#sidebar-backdrop');
  if(sb)sb.classList.remove('open');
  if(bd)bd.classList.remove('open');
};
function render(){
  if(!S)return;
  const el=$('#pg-'+CUR),a=document.activeElement;
  if(a&&el.contains(a)&&/INPUT|TEXTAREA|SELECT/.test(a.tagName))return;
  el.innerHTML=(P[CUR]||P.dashboard)();
}
A.go=v=>go(v);A.close=()=>closeModal();A.closemodal=()=>closeModal();
A.bell=()=>{
  if(isO()) go('approval');
  else F.modalPesanKaryawan();
};

F.modalPesanKaryawan = function(){
  const list = (S && S.pesanKaryawan) || [];
  const myMsgs = list.filter(p => !p.targetUserId || p.targetUserId === 'ALL' || p.targetUserId === S.me.userId);
  modal('Pemberitahuan &amp; Pesan Khusus Karyawan',
    '<div class="grid" style="gap:12px">'+
      (myMsgs.length ? myMsgs.slice().reverse().map(p => {
        const isRead = p.readBy && p.readBy.includes(S.me.userId);
        return '<div class="card" style="padding:14px;border:1px solid ' + (isRead ? 'var(--ln)' : '#f59e0b') + ';background:' + (isRead ? '#ffffff' : '#fffbeb') + '">'+
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">'+
            '<b style="color:var(--ink);font-size:14px">' + esc(p.judul) + '</b>'+
            '<span class="tag ' + (isRead ? '' : 'gold') + '">' + (isRead ? 'Sudah Dibaca' : 'Pesan Baru') + '</span>'+
          '</div>'+
          '<p style="font-size:13px;line-height:1.5;color:var(--ink);margin:6px 0;white-space:pre-wrap">' + esc(p.isi) + '</p>'+
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:6px;border-top:1px dashed var(--ln)">'+
            '<small style="color:var(--mut)">Dari: <b>' + esc(p.pengirimNama || 'Owner') + '</b> · ' + tgl(p.waktu) + ' ' + jam(p.waktu) + ' WIT</small>'+
            (!isRead ? '<button class="btn xs pri" data-a="pesan_read" data-v="' + esc(p.pesanId) + '">Tandai Sudah Dibaca</button>' : '')+
          '</div>'+
        '</div>';
      }).join('') : empty('Belum ada pesan atau instruksi dari Owner.'))+
      '<button class="btn gh blk" data-a="close">Tutup</button>'+
    '</div>');
};

A.pesan_read = v => {
  const p = (S.pesanKaryawan || []).find(x => x.pesanId === v);
  if (p) {
    p.readBy = p.readBy || [];
    if (!p.readBy.includes(S.me.userId)) p.readBy.push(S.me.userId);
    LS.s('pos_pesan_karyawan', JSON.stringify(S.pesanKaryawan));
    mut('pesanKaryawanBaca', { pesanId: v }, () => {});
    toast('Pesan ditandai sudah dibaca', 'ok');
    chrome();
    F.modalPesanKaryawan();
  }
};
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
document.addEventListener('input',e=>{const t=e.target;if(t.classList&&t.classList.contains('rp'))maskRp(t);if(t.type!=='file'&&t.dataset&&t.dataset.in&&IN[t.dataset.in])IN[t.dataset.in](t.value,t,e)});
document.addEventListener('change',e=>{const t=e.target;if(t.dataset&&t.dataset.in&&IN[t.dataset.in])IN[t.dataset.in](t.value,t,e)});
document.addEventListener('submit',e=>{e.preventDefault();const h=SUB[e.target.id];if(h)h(e.target)});

/* ============ EFEK LOKAL (cermin logika server → UI instan) ============ */
function pushKas(arah,nom,sumber,ref,keterangan){
  S.saldo.kas+=(arah==='MASUK'?1:-1)*nom;
  S.kas.push({
    mutasiKasId:'TMP-'+Math.random().toString(36).slice(2,7),
    waktu:nowWIT(),
    arah:arah,
    nominal:nom,
    sumber:sumber,
    keterangan:keterangan||'',
    referensiId:ref,
    saldo:S.saldo.kas,
    operatorId:S.me.userId
  });
}
function localEfek(t,sign){
  // Tukar Tambah Terintegrasi (Penjualan, Buyback, Pemasukan / Pengeluaran Selisih)
  if(t.isTukarTambah){
    const dt=t.detailTT;
    const b=dt&&dt.baru, l=dt&&dt.lama;
    const refStr=t.refTukarTambah?'#'+t.refTukarTambah:'';

    // 1. Stok Etalase & Toko
    if(isO()&&S.stokSum){
      if(t.peranTT==='BARANG_BARU'&&b&&b.berat){
        const bKg=-b.berat*sign;
        const x=S.stokSum.find(r=>r.logam===b.logam&&r.jenisBarang===b.jenisBarang&&String(r.kadar)===String(b.kadar));
        if(x)x.berat=Math.round((x.berat+bKg)*1000)/1000;
        else S.stokSum.push({logam:b.logam,jenisBarang:b.jenisBarang,kadar:b.kadar,berat:bKg});
        if(S.stokLog)S.stokLog.push({stokLogId:'TMP',logam:b.logam,jenisBarang:b.jenisBarang,kadar:b.kadar,berat:bKg,referensiId:t.transaksiId,createdAt:nowWIT()});
      }else if(t.peranTT==='BARANG_LAMA'&&l&&l.berat&&t.tujuanBarang==='BRANKAS'){
        ebLocal({logam:l.logam,kadar:l.kadar,jenisBarang:l.jenisBarang,kondisi:t.kondisiBarang},l.berat*sign,'TUKAR_TAMBAH',t.transaksiId);
      }else if(t.peranTT==='BARANG_LAMA'&&l&&l.berat&&t.tujuanBarang!=='TIDAK'){
        const lKg=l.berat*sign;
        const x=S.stokSum.find(r=>r.logam===l.logam&&r.jenisBarang===l.jenisBarang&&String(r.kadar)===String(l.kadar));
        if(x)x.berat=Math.round((x.berat+lKg)*1000)/1000;
        else S.stokSum.push({logam:l.logam,jenisBarang:l.jenisBarang,kadar:l.kadar,berat:lKg});
        if(S.stokLog)S.stokLog.push({stokLogId:'TMP',logam:l.logam,jenisBarang:l.jenisBarang,kadar:l.kadar,berat:lKg,referensiId:t.transaksiId,createdAt:nowWIT()});
      }
    }

    // 2. Saldo Kas & Bank (HANYA diproses pada transaksi selisih agar tidak terjadi pencatatan ganda)
    if(t.peranTT==='SELISIH_MASUK'){
      const nom=t.nominal;
      if(t.metodeBayar==='TUNAI'){
        pushKas(sign>0?'MASUK':'KELUAR',nom,(sign<0?'BATAL_':'')+'TUKAR_TAMBAH',t.transaksiId,'Pemasukan Tukar Tambah '+refStr+' — Tambah bayar konsumen');
      }else if(S.saldo.bank){
        const r=t.rekening||'';
        S.saldo.bank[r]=(S.saldo.bank[r]||0)+sign*nom;
      }
    }else if(t.peranTT==='SELISIH_KELUAR'){
      const nom=t.nominal;
      if(t.metodeBayar==='TUNAI'){
        pushKas(sign>0?'KELUAR':'MASUK',nom,(sign<0?'BATAL_':'')+'TUKAR_TAMBAH',t.transaksiId,'Pengeluaran Tukar Tambah '+refStr+' — Uang kembali toko ke konsumen');
      }else if(S.saldo.bank){
        const r=t.rekening||'';
        S.saldo.bank[r]=(S.saldo.bank[r]||0)-sign*nom;
      }
    }
    return;
  }

  // Fallback transaksi lama jenis TUKAR_TAMBAH
  if(t.jenis==='TUKAR_TAMBAH'){
    const sisa=t.nominal;
    if(t.metodeBayar==='TUNAI'){
      if(sisa>0) pushKas(sign>0?'MASUK':'KELUAR',sisa,(sign<0?'BATAL_':'')+'TUKAR_TAMBAH',t.transaksiId);
      else if(sisa<0) pushKas(sign>0?'KELUAR':'MASUK',Math.abs(sisa),(sign<0?'BATAL_':'')+'TUKAR_TAMBAH',t.transaksiId);
    } else if(S.saldo.bank){
      const r=t.rekening||'';S.saldo.bank[r]=(S.saldo.bank[r]||0)+sign*sisa;
    }
    if(isO()&&S.stokSum&&t.detailTT){
      const bBaru=t.detailTT.baru, bLama=t.detailTT.lama;
      if(bBaru&&bBaru.berat){
        const b=-bBaru.berat*sign;
        const x=S.stokSum.find(r=>r.logam===bBaru.logam&&r.jenisBarang===bBaru.jenisBarang&&String(r.kadar)===String(bBaru.kadar));
        if(x) x.berat=Math.round((x.berat+b)*1000)/1000;
        else S.stokSum.push({logam:bBaru.logam,jenisBarang:bBaru.jenisBarang,kadar:bBaru.kadar,berat:b});
        if(S.stokLog) S.stokLog.push({stokLogId:'TMP',logam:bBaru.logam,jenisBarang:bBaru.jenisBarang,kadar:bBaru.kadar,berat:b,referensiId:t.transaksiId,createdAt:nowWIT()});
      }
      if(bLama&&bLama.berat){
        const b=bLama.berat*sign;
        const x=S.stokSum.find(r=>r.logam===bLama.logam&&r.jenisBarang===bLama.jenisBarang&&String(r.kadar)===String(bLama.kadar));
        if(x) x.berat=Math.round((x.berat+b)*1000)/1000;
        else S.stokSum.push({logam:bLama.logam,jenisBarang:bLama.jenisBarang,kadar:bLama.kadar,berat:b});
        if(S.stokLog) S.stokLog.push({stokLogId:'TMP',logam:bLama.logam,jenisBarang:bLama.jenisBarang,kadar:bLama.kadar,berat:b,referensiId:t.transaksiId,createdAt:nowWIT()});
      }
    }
    return;
  }
  const masuk=isJual(t)?1:-1,d=masuk*sign;
  if(t.metodeBayar==='TUNAI')pushKas(d>0?'MASUK':'KELUAR',t.nominal,(sign<0?'BATAL_':'')+t.jenis,t.transaksiId);
  else if(S.saldo.bank){const r=t.rekening||'';S.saldo.bank[r]=(S.saldo.bank[r]||0)+d*t.nominal}
  if(isO()&&S.stokSum){
    let b=0;if(t.jenis==='PENJUALAN')b=-t.berat;else if(t.jenis==='BUYBACK'&&(t.tujuanBarang?t.tujuanBarang==='ETALASE':t.tambahStok))b=t.berat;b*=sign;
    if(t.jenis==='BUYBACK'&&t.tujuanBarang==='BRANKAS'&&t.berat)ebLocal({logam:t.logam,kadar:t.kadar,jenisBarang:t.kategori,kondisi:t.kondisiBarang},t.berat*sign,'BUYBACK',t.transaksiId);
    if(b){const x=S.stokSum.find(r=>r.logam===t.logam&&r.jenisBarang===t.kategori&&String(r.kadar)===String(t.kadar));
      if(x)x.berat=Math.round((x.berat+b)*1000)/1000;else S.stokSum.push({logam:t.logam,jenisBarang:t.kategori,kadar:t.kadar,berat:b})}
  }
}
const kasOK=n=>n<=S.saldo.kas+0.5;

/* ============ KOMPONEN ============ */
const LIM={};
/** Batasi daftar panjang: tampilkan n pertama + tombol "Tampilkan lebih banyak". */
function batas(key,arr,n,fn){
  const k=LIM[key]||n||15;
  return arr.slice(0,k).map(fn).join('')+(arr.length>k?'<button class="btn sm gh blk more-btn" data-a="more" data-v="'+key+'">Tampilkan '+Math.min(20,arr.length-k)+' lagi · '+(arr.length-k)+' tersisa</button>':'');
}
A.more=v=>{LIM[v]=(LIM[v]||15)+20;RJ='';render()};
const kpi=(t,v,sub,icn,cls)=>'<div class="card kpi '+(cls||'')+'"><span class="ci">'+ic(icn,'s')+'</span><div class="t">'+t+'</div><div class="v">'+v+'</div><div>'+(sub||'')+'</div></div>';
const dpill=v=>v==null?'<span class="pill">baru</span>':'<span class="pill '+(v>=0?'ok':'bad')+'">'+ic(v>=0?'up':'down','s')+(v>=0?'+':'')+nf2.format(v).replace(',00','')+'%</span>';
const empty=t=>'<div class="empty">'+esc(t)+'</div>';

function getMetalTag(t){
  if(!t) return '';
  let lg = t.logam;
  if(!lg && (t.jenis==='TUKAR_TAMBAH'||t.isTukarTambah)){
    const tt = parseTT(t);
    if(tt && tt.baru && tt.baru.logam) lg = tt.baru.logam;
    else if(tt && tt.lama && tt.lama.logam) lg = tt.lama.logam;
  }
  if(!lg && t.kategori){
    if(/perak/i.test(t.kategori)) lg = 'PERAK';
    else if(/emas/i.test(t.kategori)) lg = 'EMAS';
  }
  if(lg==='EMAS') return '<span class="tag-metal gold-metal">'+ic('gem','s')+' EMAS</span>';
  if(lg==='PERAK') return '<span class="tag-metal silver-metal">'+ic('gem','s')+' PERAK</span>';
  if(t.jenis==='JASA') return '<span class="tag-metal jasa-metal">'+ic('tool','s')+' JASA</span>';
  if(t.jenis==='PENGELUARAN_OPS') return '<span class="tag-metal ops-metal">'+ic('wallet','s')+' OPS</span>';
  if(t.jenis==='SEDEKAH') return '<span class="tag-metal sedekah-metal">'+ic('heart','s')+' SEDEKAH</span>';
  return '';
}

function trxRow(t){
  const isTT=t.jenis==='TUKAR_TAMBAH'||t.isTukarTambah||(t.catatan&&t.catatan.indexOf('TUKAR TAMBAH')!==-1);
  const m={PENJUALAN:['gem',''],BUYBACK:['undo','bad'],TUKAR_TAMBAH:['swap','gold'],JASA:['tool','ok'],PENGELUARAN_OPS:['wallet','bad'],SEDEKAH:['heart','gold']}[t.jenis]||['gem',''];
  const st={DIAJUKAN_BATAL:['warn','Ajukan batal'],DIBATALKAN:['bad','Dibatalkan'],PENDING_APPROVAL:['warn','Menunggu Owner']}[t.status];
  const d=t.waktu.slice(0,10)===today()?jam(t.waktu):tgl(t.waktu).replace(/ \d{4}$/,'')+' '+jam(t.waktu);
  const nomNom=t.jenis==='TUKAR_TAMBAH'&&t.nominal===0?'Rp 0':(isOut(t)?'-':t.jenis==='JASA'?'+':'')+rp(Math.abs(t.nominal));
  const peran={BARANG_BARU:'Barang baru',BARANG_LAMA:'Barang lama',SELISIH_MASUK:'Tambah bayar',SELISIH_KELUAR:'Uang kembali'}[t.peranTT]||'';
  const kasir=(uname(t.operatorId)||'').split(' ')[0];
  const meta=[d,kasir,t.berat?gr(t.berat):'',t.metodeBayar&&t.metodeBayar!=='TUNAI'?t.metodeBayar:'',t.pelanggan||''].filter(Boolean).map(esc).join(' · ');
  const tags=(isTT?'<span class="tag gold">Tukar Tambah'+(peran?' · '+peran:'')+'</span>':'')+(st?'<span class="tag '+st[0]+'">'+st[1]+'</span>':'');
  return '<button class="tr trx-row'+(t.status==='DIBATALKAN'?' batal':'')+'" data-a="trx" data-v="'+esc(t.transaksiId)+'">'+
    '<span class="ico '+m[1]+'">'+ic(m[0])+'</span>'+
    '<span class="tm"><span class="l1"><b>'+esc(t.kategori||jenisLbl[t.jenis])+(t.kadar&&t.jenis!=='JASA'?' '+esc(t.kadar):'')+'</b>'+getMetalTag(t)+'</span>'+
      '<small class="meta">'+meta+'</small>'+(tags?'<span class="tags">'+tags+'</span>':'')+'</span>'+
    '<span class="ta '+(isOut(t)?'neg':t.jenis==='JASA'?'pos':'')+'"><b>'+nomNom+'</b><small>#'+esc(String(t.transaksiId).replace(/^TRX-\d{6}/,''))+'</small></span>'+
  '</button>';
}
function apItem(a,act){
  const lb={
    PEMBATALAN_TRX:['bad','Batal Nota','undo'],
    EDIT_TRX:['warn','Edit Nota','edit'],
    HAPUS_TRX:['bad','Hapus Nota','trash'],
    PENGELUARAN_OPS_BESAR:['warn','Otorisasi Biaya','wallet'],
    IZIN:['gold','Izin / Cuti','cal']
  }[a.jenis]||['','Pengajuan','file'];

  const stTag=a.status==='DISETUJUI'?'<span class="tag ok">Disetujui</span>':
              a.status==='DITOLAK'?'<span class="tag bad">Ditolak</span>':
              '<span class="tag warn">Menunggu Owner</span>';

  return '<div class="ap-card-item">'+
    '<div class="ap-header">'+
      '<div class="ap-meta">'+
        '<span class="tag '+lb[0]+'">'+ic(lb[2],'s')+' '+lb[1]+'</span>'+
        '<span class="ap-time">'+tgl(a.createdAt)+' · '+jam(a.createdAt)+' WIT</span>'+
      '</div>'+
      (!act?stTag:'')+
    '</div>'+
    '<div class="ap-body">'+
      '<p class="ap-desc">'+esc(a.ringkasan||a.alasan)+'</p>'+
      (a.pengajuId&&isO()?'<div class="ap-pengaju">Diajukan oleh: '+uBadge(a.pengajuId)+'</div>':'')+
    '</div>'+
    (act&&a.status==='MENUNGGU'
      ?'<div class="ap-actions">'+
          '<button class="btn sm gh" data-a="apr" data-v="'+a.approvalId+'|TOLAK">'+ic('x','s')+' Tolak</button>'+
          '<button class="btn sm pri" data-a="apr" data-v="'+a.approvalId+'|SETUJU">'+ic('check','s')+' Setujui</button>'+
        '</div>'
      :'')+
  '</div>';
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
  const o=isO(),st=stats(!o),set=S.setting,hr=+nowWIT().slice(11,13);
  let h='<div class="welcome-hero">'+
    '<div class="wh-profile">'+
      '<div class="wh-av-wrap">'+uAvatar(S.me,'lg')+'<span class="wh-dot"></span></div>'+
      '<div class="wh-info">'+
        '<div class="wh-badges">'+
          '<span class="tag gold">'+(o?'Owner / Superadmin':'Kasir Shift')+'</span>'+
          '<span class="tag ok">Toko Buka • '+(hr<13?'Shift Pagi':'Shift Siang')+'</span>'+
          '<span class="pill syncchip ok">Sheets Sync</span>'+
        '</div>'+
        '<h1><span class="desk-inline">Selamat Datang Kembali, </span>'+esc(S.me.nama)+'</h1>'+
        '<p>'+(o?'Pantau arus kas, gramasi emas, saldo brankas, dan pergerakan transaksi toko hari ini.':'Semoga shift hari ini lancar dan berkah. Pantau transaksi kasir Anda di sini.')+'</p>'+
      '</div>'+
    '</div>'+
    '<div class="wh-actions">'+
      '<button class="btn pri" data-a="trxnew" data-v="PENJUALAN">'+ic('plus','s')+' Transaksi Baru</button>'+
      (o?'<button class="btn gh" data-a="harga">'+ic('scale','s')+' Harga</button>':'')+
      (o?'<button class="btn gh" data-a="strukcfg">'+ic('printer','s')+' Struk</button>':'<button class="btn gh" data-a="go" data-v="kas">'+ic('wallet','s')+' Kas Laci</button>')+
    '</div>'+
  '</div>';
  const bankTot=o?Object.keys(S.saldo.bank||{}).reduce((s,k)=>s+S.saldo.bank[k],0):0;
  h+='<div class="grid g4 kpi-row">'+
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
    const my=sortD(S.approval.filter(a=>a.pengajuId===S.me.userId)).slice(0,5);
    h+='<div class="grid g2"><div class="card"><div class="hd"><h3>Transaksi Terbaru Saya</h3><button class="btn sm gh" data-a="go" data-v="kasir">Lihat Semua</button></div>'+(rec.length?rec.map(trxRow).join(''):empty('Belum ada transaksi.'))+'</div>'+
     '<div class="card"><div class="hd"><div><h3>Pengajuan Saya</h3><small>Status persetujuan nota &amp; izin kasir</small></div><button class="btn sm gh" data-a="izin">'+ic('plus','s')+' Ajukan Izin</button></div>'+(my.length?'<div class="ap-list">'+my.map(a=>apItem(a,0)).join('')+'</div>':empty('Belum ada pengajuan izin atau pembatalan nota.'))+'</div></div>';
  }
  return h;
};
A.harga=()=>F.harga();
A.tutup=()=>F.tutup();

/* ============ KASIR ============ */
function trxList(){
  const q=FILT.q.toLowerCase().trim(),td=today(),from=FILT.p==='7'?addDays(td,-6):FILT.p==='all'?'0000':td;
  const rows=sortD(S.trx).filter(t=>{
    if(t.waktu.slice(0,10)<from)return false;
    const isTT=t.jenis==='TUKAR_TAMBAH'||t.isTukarTambah||(t.catatan&&t.catatan.indexOf('TUKAR TAMBAH')!==-1);
    if(FILT.j==='TUKAR_TAMBAH'){
      if(!isTT)return false;
    }else if(FILT.j!=='ALL'){
      if(t.jenis!==FILT.j)return false;
    }
    if(!isO()&&t.operatorId!==S.me.userId&&false)return false;
    if(q){
      const hay=[t.transaksiId,t.kategori,t.pelanggan,cleanCatatan(t.catatan),t.metodeBayar,uname(t.operatorId),String(t.nominal)].join(' ').toLowerCase();
      if(hay.indexOf(q)<0)return false;
    }
    return true;
  });
  const ok=rows.filter(t=>live(t)&&!(t.peranTT==='BARANG_BARU'||t.peranTT==='BARANG_LAMA'));
  const mIn=ok.filter(t=>!isOut(t)).reduce((a,t)=>a+Math.abs(t.nominal||0),0),mOut=ok.filter(isOut).reduce((a,t)=>a+Math.abs(t.nominal||0),0);
  return rows.length?'<div class="riwayat-sum"><span>'+rows.length+' transaksi</span><span class="rs-io"><b class="pos">+'+rpS(mIn)+'</b><b class="neg">-'+rpS(mOut)+'</b></span></div>'+rows.slice(0,100).map(trxRow).join('')+(rows.length>100?'<small class="empty">Menampilkan 100 terbaru. Persempit pencarian.</small>':''):empty('Tidak ada transaksi pada filter ini.');
}
P.kasir=function(){
  FILT.p=FILT.p||'today';
  const tl=[['PENJUALAN','Penjualan','gem','pri'],['BUYBACK','Buyback','undo',''],['TUKAR_TAMBAH','Tukar Tambah','swap','gold'],['JASA','Pemasukan','tool',''],['PENGELUARAN_OPS','Pengeluaran','wallet',''],['SEDEKAH','Sedekah','heart','']];
  return '<div class="ph"><div><h1>Kasir Transaksi POS</h1><p>Catat penjualan, buyback, tukar tambah, pemasukan, pengeluaran, dan sedekah.</p></div></div>'+
   '<div class="tiles kasir-tiles" style="margin-bottom:20px">'+tl.map(t=>'<button class="tile '+t[3]+'" data-a="trxnew" data-v="'+t[0]+'"><span class="ico">'+ic(t[2])+'</span>'+t[1]+'</button>').join('')+'</div>'+
   '<div class="card riwayat-card"><div class="hd"><h3>Riwayat Transaksi</h3><div class="seg" id="fp">'+[['today','Hari ini'],['7','7 hari'],['all','Semua']].map(x=>'<button class="'+(FILT.p===x[0]?'on':'')+'" data-a="fp" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div></div>'+
   '<div class="riwayat-filter"><input class="inp" placeholder="Cari nota, barang, pelanggan…" value="'+esc(FILT.q)+'" data-in="q" aria-label="Cari transaksi"><div class="seg scroll-x" id="fj">'+[['ALL','Semua'],['PENJUALAN','Jual'],['BUYBACK','Buyback'],['TUKAR_TAMBAH','Tukar'],['JASA','Pemasukan'],['PENGELUARAN_OPS','Keluar'],['SEDEKAH','Sedekah']].map(x=>'<button class="'+(FILT.j===x[0]?'on':'')+'" data-a="fj" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div></div><div id="trx-list">'+trxList()+'</div></div>';
};
IN.q=v=>{FILT.q=v;const e=$('#trx-list');if(e)e.innerHTML=trxList()};
A.fj=v=>{FILT.j=v;RJ='';render()};A.fp=v=>{FILT.p=v;RJ='';render()};
A.trxnew=v=>F.trx(v);

/* ============ STOK (Owner) ============ */
let SF={logam:'ALL',kadar:'ALL',q:''};
/** Harga acuan per gram dari daftar harga kadar (Atur Harga). Cadangan: spot × kadar/1000. */
function acuanGr(logam,kadar,jenis){
  const k=getDaftarKadar().find(x=>x.logam===logam&&String(x.kadar)===String(kadar));
  if(k)return jenis==='bb'?(+k.hargaBuyback||0):(+k.hargaJual||0);
  const sp=logam==='PERAK'?(S.setting.spotPerak||0):(S.setting.spotEmas||0),f=(+kadar||0)/(+kadar>100?1000:24);
  return Math.round(sp*f*(jenis==='bb'?0.9:1));
}
P.stok=function(){
  const sum=(S.stokSum||[]).filter(x=>Math.abs(x.berat)>0.0005);
  const totG=l=>sum.filter(x=>x.logam===l).reduce((s,x)=>s+x.berat,0);
  const totV=(l,j)=>sum.filter(x=>x.logam===l).reduce((s,x)=>s+x.berat*acuanGr(x.logam,x.kadar,j),0);
  const kadars=Array.from(new Set(sum.filter(x=>SF.logam==='ALL'||x.logam===SF.logam).map(x=>x.logam+'|'+x.kadar))).sort((a,b)=>a.localeCompare(b,'id',{numeric:true}));
  if(SF.kadar!=='ALL'&&kadars.indexOf(SF.kadar)<0)SF.kadar='ALL';
  const q=SF.q.toLowerCase();
  const rows=sum.filter(x=>(SF.logam==='ALL'||x.logam===SF.logam)&&(SF.kadar==='ALL'||x.logam+'|'+x.kadar===SF.kadar)&&(!q||(x.jenisBarang+' '+x.kadar).toLowerCase().indexOf(q)>=0))
    .sort((a,b)=>(a.logam+a.jenisBarang+a.kadar).localeCompare(b.logam+b.jenisBarang+b.kadar));
  const fG=rows.reduce((s,x)=>s+x.berat,0),fV=rows.reduce((s,x)=>s+x.berat*acuanGr(x.logam,x.kadar,'jual'),0),fB=rows.reduce((s,x)=>s+x.berat*acuanGr(x.logam,x.kadar,'bb'),0);
  // rekap per kadar
  const perKadar={};rows.forEach(x=>{const k=x.logam+'|'+x.kadar;perKadar[k]=perKadar[k]||{logam:x.logam,kadar:x.kadar,g:0,v:0,n:0};perKadar[k].g+=x.berat;perKadar[k].v+=x.berat*acuanGr(x.logam,x.kadar,'jual');perKadar[k].n++});
  const log=sortD((S.stokLog||[]).map(x=>Object.assign({waktu:x.createdAt},x))).filter(x=>(SF.logam==='ALL'||x.logam===SF.logam)&&(SF.kadar==='ALL'||x.logam+'|'+x.kadar===SF.kadar));
  const kartuTotal=(l,ikon)=>'<div class="card stok-total '+(l==='EMAS'?'emas':'perak')+'"><div class="st-hd"><span class="st-ico">'+ic(ikon)+'</span><span>Total '+(l==='EMAS'?'Emas':'Perak')+' Etalase</span></div>'+
    '<div class="st-gram">'+nf3.format(totG(l))+'<small> gram</small></div>'+
    '<div class="st-val"><span>Nilai acuan jual</span><b>'+rp(totV(l,'jual'))+'</b></div><div class="st-val"><span>Nilai acuan buyback</span><b>'+rp(totV(l,'bb'))+'</b></div></div>';
  return '<div class="ph"><div><h1>Stok Etalase Emas &amp; Perak</h1><p>Penjualan otomatis mengurangi stok, buyback menambah. Nilai acuan memakai daftar harga kadar.</p></div>'+
    '<div class="chips"><button class="btn pri" data-a="stokadd">'+ic('plus','s')+' Penyesuaian Stok</button><button class="btn" data-a="harga">'+ic('scale','s')+' Atur Harga Acuan</button></div></div>'+
   '<div class="grid g2 stok-totals" style="margin-bottom:16px">'+kartuTotal('EMAS','gem')+kartuTotal('PERAK','coin')+'</div>'+
   '<div class="card"><div class="hd"><h3>Rincian Stok</h3><small>'+rows.length+' jenis · '+nf3.format(fG)+' gr</small></div>'+
    '<div class="stok-filter"><div class="seg">'+[['ALL','Semua'],['EMAS','Emas'],['PERAK','Perak']].map(x=>'<button class="'+(SF.logam===x[0]?'on':'')+'" data-a="sfl" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div>'+
    '<div class="chips scroll-x"><button class="chip'+(SF.kadar==='ALL'?' gold':'')+'" data-a="sfk" data-v="ALL">Semua kadar</button>'+kadars.map(k=>{const p=k.split('|');return '<button class="chip'+(SF.kadar===k?' gold':'')+'" data-a="sfk" data-v="'+esc(k)+'">'+(p[0]==='PERAK'?'Perak ':'')+esc(p[1])+'</button>'}).join('')+'</div>'+
    '<input class="inp" placeholder="Cari jenis barang…" value="'+esc(SF.q)+'" data-in="sfq"></div>'+
    '<div class="mini stok-sumbar"><div><small>Total terfilter</small><b>'+nf3.format(fG)+' gr</b></div><div><small>Nilai acuan jual</small><b>'+rpS(fV)+'</b></div><div><small>Nilai buyback</small><b>'+rpS(fB)+'</b></div></div>'+
    '<div id="stok-list">'+(rows.length?rows.map(x=>{const hj=acuanGr(x.logam,x.kadar,'jual');
      return '<div class="stok-item"><span class="ico '+(x.logam==='EMAS'?'gold':'')+'">'+ic('gem')+'</span><span class="tm"><b>'+esc(x.jenisBarang)+' <span class="tag '+(x.logam==='EMAS'?'gold':'silver')+'">'+(x.logam==='EMAS'?'Emas':'Perak')+' '+esc(x.kadar)+'</span></b>'+
        '<small>Acuan '+rp(hj)+'/gr</small></span><span class="ta"><b class="'+(x.berat<0?'neg':'')+'">'+gr(x.berat)+'</b><small>'+rpS(x.berat*hj)+'</small></span></div>'}).join(''):empty('Tidak ada stok pada filter ini.'))+'</div></div>'+
   (Object.keys(perKadar).length>1?'<div class="card"><div class="hd"><h3>Rekap per Kadar</h3></div>'+Object.keys(perKadar).sort((a,b)=>a.localeCompare(b,'id',{numeric:true})).map(k=>{const r=perKadar[k];
      return '<div class="stok-item"><span class="tm"><b>'+(r.logam==='EMAS'?'Emas':'Perak')+' kadar '+esc(r.kadar)+'</b><small>'+r.n+' jenis barang</small></span><span class="ta"><b>'+gr(r.g)+'</b><small>'+rpS(r.v)+'</small></span></div>'}).join('')+'</div>':'')+
   '<div class="card"><div class="hd"><h3>Mutasi Stok Terakhir</h3><small>'+log.length+' catatan</small></div>'+(log.length?batas('stoklog',log,15,x=>{
      const ref=x.referensiId&&x.referensiId!=='MANUAL'?(/^TRX-/.test(x.referensiId)?'Nota '+x.referensiId.replace(/^TRX-\d{6}/,'#'):'Manual'):'Manual';
      return '<div class="tr"><span class="ico '+(x.berat<0?'bad':'ok')+'">'+ic(x.berat<0?'down':'up')+'</span><span class="tm"><b>'+esc(x.jenisBarang)+' '+esc(x.kadar)+' · '+(x.logam==='EMAS'?'Emas':'Perak')+'</b><small>'+tgl(x.createdAt).replace(/ \d{4}$/,'')+' '+jam(x.createdAt)+' · '+esc(ref)+'</small></span><span class="ta '+(x.berat<0?'neg':'')+'"><b>'+(x.berat>0?'+':'')+gr(x.berat)+'</b></span>'+(isO()?'<button class="ibtn del" data-a="stokdel" data-v="'+esc(x.stokLogId||x.createdAt)+'" title="Hapus">'+ic('trash','s')+'</button>':'')+'</div>'}):empty('Belum ada mutasi.'))+'</div>';
};
A.sfl=v=>{SF.logam=v;SF.kadar='ALL';RJ='';render()};A.sfk=v=>{SF.kadar=v;RJ='';render()};
let sfqT=null;IN.sfq=v=>{clearTimeout(sfqT);sfqT=setTimeout(()=>{SF.q=v;const el=$('#pg-stok');if(el){el.innerHTML=P.stok();const i=el.querySelector('[data-in="sfq"]');if(i){i.focus();i.setSelectionRange(v.length,v.length)}}},250)};
A.stokadd=()=>F.stok();

/* ============ KAS LACI ============ */
P.kas=function(){
  const rows=sortD(S.kas);
  return '<div class="ph"><div><h1>Kas Laci &amp; Tutup Kas</h1><p>Saldo berjalan = saldo awal + kas masuk − kas keluar.</p></div>'+
    '<div class="chips"><button class="btn dk" data-a="tutup">'+ic('clock','s')+' Tutup Kas Harian</button><button class="btn gold" data-a="brk" data-v="SETOR">'+ic('lock','s')+' Setor ke Brankas</button><button class="btn pri" data-a="kas_setor_bank">'+ic('bank','s')+' Setor ke Bank</button></div></div>'+
    '<div class="grid g2" style="margin-bottom:20px">'+kpi('Saldo Kas Laci Sistem',rp(S.saldo.kas),'<span class="pill ok">Berjalan</span>','wallet','gold')+kpi('Tutup Kas Terakhir',S.tutup.length?rp(S.tutup[S.tutup.length-1].saldoFisik):'-',S.tutup.length?'<span class="pill '+(S.tutup[S.tutup.length-1].selisih===0?'ok':'warn')+'">Selisih '+rp(S.tutup[S.tutup.length-1].selisih)+'</span>':'<small>belum ada</small>','clock')+'</div>'+
    '<div class="grid dash2"><div class="card"><div class="hd"><h3>Mutasi Kas Laci</h3><small>'+rows.length+' mutasi</small></div>'+(rows.length?batas('kas',rows,15,m=>{
      const sTitle=m.sumber==='TUKAR_TAMBAH'?(m.arah==='MASUK'?'Tukar Tambah (Pemasukan)':'Tukar Tambah (Pengeluaran / Uang Kembali)'):String(m.sumber).replace(/_/g,' ');
      const sub=[tgl(m.waktu).replace(/ \d{4}$/,'')+' '+jam(m.waktu),(uname(m.operatorId)||'').split(' ')[0],m.keterangan||''].filter(Boolean).map(esc).join(' · ');
      return '<div class="tr"><span class="ico '+(m.arah==='MASUK'?'ok':'bad')+'">'+ic(m.arah==='MASUK'?'down':'up')+'</span><span class="tm"><b>'+esc(sTitle.charAt(0)+sTitle.slice(1).toLowerCase())+'</b><small class="meta">'+sub+'</small></span><span class="ta '+(m.arah==='KELUAR'?'neg':'')+'"><b>'+(m.arah==='KELUAR'?'-':'+')+rp(m.nominal)+'</b><small>saldo '+rpS(m.saldo)+'</small></span>'+(isO()?'<button class="ibtn del" data-a="kasdel" data-v="'+esc(m.mutasiKasId||m.waktu)+'" title="Hapus">'+ic('trash','s')+'</button>':'')+'</div>';
    }):empty('Belum ada mutasi.'))+'</div>'+
    '<div class="card"><div class="hd"><h3>Riwayat Tutup Kas</h3></div>'+(S.tutup.length?sortD(S.tutup.map(x=>Object.assign({},x))).slice(0,12).map(x=>'<div class="tr"><span class="ico '+(x.selisih===0?'ok':'gold')+'">'+ic(x.selisih===0?'check':'alert')+'</span><span class="tm"><b>'+tgl(x.tanggal)+'</b><small class="meta">Sistem '+rpS(x.saldoSistem)+' · Fisik '+rpS(x.saldoFisik)+'</small></span><span class="ta '+(x.selisih<0?'neg':'')+'"><b>'+(x.selisih>0?'+':'')+rp(x.selisih)+'</b></span>'+(isO()?'<button class="ibtn del" data-a="tutupdel" data-v="'+esc(x.tutupKasId||x.tanggal)+'" title="Hapus Riwayat Tutup Kas">'+ic('trash','s')+'</button>':'')+'</div>').join(''):empty('Belum ada.'))+'</div></div>';
};
F.tutup=function(){
  openForm({title:'Tutup Kas Harian',ok:'Simpan Tutup Kas',
    pre:'<div class="mini" style="margin-bottom:14px"><small>Saldo menurut sistem</small><div class="big">'+rp(S.saldo.kas)+'</div></div>'+
        '<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap"><button type="button" class="btn sm gold" data-a="brk" data-v="SETOR">'+ic('lock','s')+' Setor ke Brankas</button><button type="button" class="btn sm pri" data-a="kas_setor_bank">'+ic('bank','s')+' Setor ke Bank</button></div>',
    fields:[{k:'saldoFisik',l:'Saldo uang fisik di laci',t:'rp',req:1,h:'Hitung seluruh uang tunai di laci. Selisih dicatat otomatis.'},{k:'catatan',l:'Catatan selisih (opsional)',t:'ta'}],
    fn:v=>{const sis=S.saldo.kas,sel=v.saldoFisik-sis;
      mut('kasTutup',v,()=>{S.tutup.push({tutupKasId:'TMP',tanggal:today(),saldoSistem:sis,saldoFisik:v.saldoFisik,selisih:sel,catatan:v.catatan,operatorId:S.me.userId,waktu:nowWIT()})});
      toast(sel===0?'Tutup kas klop 100%':'Tutup kas dicatat. Selisih '+rp(sel),sel===0?'ok':'')}});
};
A.kas_setor_bank=()=>F.bank('SETOR');

/* ============ BRANKAS & BANK (Owner) ============ */
P.brankas=function(){
  const allR=sortD(S.brankas),rows=allR.slice(0,LIM.brk||20),moreB=allR.length>rows.length?'<button class="btn sm gh blk more-btn" data-a="more" data-v="brk">Tampilkan lebih banyak · '+(allR.length-rows.length)+' tersisa</button>':'';
  return '<div class="ph"><div><h1>Saldo Brankas (Vault)</h1><p>Transfer internal antara kas laci dan brankas.</p></div><div class="chips"><button class="btn pri" data-a="brk" data-v="SETOR">'+ic('down','s')+' Setor dari Kas</button><button class="btn" data-a="brk" data-v="TARIK">'+ic('up','s')+' Tarik ke Kas</button></div></div>'+
   '<div class="grid g2" style="margin-bottom:20px">'+kpi('Saldo Brankas Utama',rp(S.saldo.brankas),'<span class="pill ok">Terkunci</span>','lock','gold')+kpi('Saldo Kas Laci',rp(S.saldo.kas),'<small>sumber setoran</small>','wallet')+'</div>'+
   '<div class="card"><div class="hd"><h3>Mutasi Brankas</h3><small>'+allR.length+' mutasi</small></div>'+(rows.length?rows.map(m=>'<div class="tr"><span class="ico '+(m.arah==='SETOR'?'ok':'bad')+'">'+ic(m.arah==='SETOR'?'down':'up')+'</span><span class="tm"><b>'+(m.arah==='SETOR'?'Setor dari kas laci':'Tarik ke kas laci')+'</b><small class="meta">'+tgl(m.waktu).replace(/ \d{4}$/,'')+' '+jam(m.waktu)+' · '+esc((uname(m.operatorId)||'').split(' ')[0])+(m.catatan?' · '+esc(m.catatan):'')+'</small></span><span class="ta '+(m.arah==='TARIK'?'neg':'')+'"><b>'+(m.arah==='TARIK'?'-':'+')+rp(m.nominal)+'</b></span>'+(isO()?'<button class="ibtn del" data-a="brkdel" data-v="'+esc(m.mutasiBrankasId||m.waktu)+'" title="Hapus Mutasi Brankas">'+ic('trash','s')+'</button>':'')+'</div>').join(''):empty('Belum ada mutasi. Saldo awal diatur di Pengaturan.'))+moreB+'</div>';
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
  const rek=S.setting.rekening||[],allR=sortD(S.bank),rows=allR.slice(0,LIM.bnk||20),moreB=allR.length>rows.length?'<button class="btn sm gh blk more-btn" data-a="more" data-v="bnk">Tampilkan lebih banyak · '+(allR.length-rows.length)+' tersisa</button>':'';
  return '<div class="ph"><div><h1>Rekening Bank &amp; QRIS</h1><p>Pembayaran transfer/QRIS/EDC masuk ke rekening yang dipilih saat transaksi.</p></div></div>'+
   '<div class="grid g2" style="margin-bottom:20px">'+(rek.length?rek.map(r=>'<div class="card"><div class="hd"><div><b>'+esc(r.nama)+'</b><br><small>'+esc(r.noRek||'-')+'</small></div><span class="ico gold">'+ic('bank')+'</span></div><div class="kpi"><div class="v">'+rp(S.saldo.bank[r.nama]||0)+'</div></div><div style="display:flex;gap:8px;margin-top:6px"><button class="btn sm pri" data-a="bk" data-v="SETOR|'+esc(r.nama)+'">Setor dari Kas</button><button class="btn sm" data-a="bk" data-v="TARIK|'+esc(r.nama)+'">Tarik ke Kas</button></div></div>').join(''):'<div class="card">'+empty('Belum ada rekening. Tambahkan di Pengaturan.')+'</div>')+'</div>'+
   '<div class="card"><div class="hd"><h3>Mutasi Bank &amp; QRIS</h3><small>'+allR.length+' mutasi</small></div>'+(rows.length?rows.map(m=>'<div class="tr"><span class="ico '+(m.arah==='TARIK'?'bad':'ok')+'">'+ic('bank')+'</span><span class="tm"><b>'+esc(m.rekening)+' · '+esc(String(m.arah).replace('_',' '))+'</b><small class="meta">'+tgl(m.waktu).replace(/ \d{4}$/,'')+' '+jam(m.waktu)+' · '+esc(String(m.sumber).replace(/_/g,' ').toLowerCase())+' · saldo '+rpS(m.saldo)+'</small></span><span class="ta '+(m.arah==='TARIK'?'neg':'')+'"><b>'+(m.arah==='TARIK'?'-':'+')+rp(m.nominal)+'</b></span>'+(isO()?'<button class="ibtn del" data-a="bkdel" data-v="'+esc(m.mutasiBankId||m.waktu)+'" title="Hapus Mutasi Bank">'+ic('trash','s')+'</button>':'')+'</div>').join(''):empty('Belum ada mutasi.'))+moreB+'</div>';
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

/* ============ EMAS BRANKAS & HUTANG EMAS (v3.3) ============ */
const KONDISI=[['BAIK','Baik / layak jual'],['RUSAK','Rusak / perlu perbaikan'],['KEMBAR','Model kembar / kelebihan'],['LEBURAN','Leburan']];
const kondLbl=k=>({BAIK:'Baik',RUSAK:'Rusak',KEMBAR:'Kembar',LEBURAN:'Leburan'}[k]||k||'Baik');
const kondCls=k=>({BAIK:'ok',RUSAK:'bad',KEMBAR:'warn',LEBURAN:'gold'}[k]||'');
const PROSES=['Perbaikan','Sepuh ulang','Custom model','Patri','Cuci & poles','Lebur','Pemurnian','Lainnya'];
const SUMBER_EB={BUYBACK:'Buyback pelanggan',TUKAR_TAMBAH:'Barang lama tukar tambah',DARI_ETALASE:'Ditarik dari etalase',MANUAL:'Masuk manual',KEMBALIAN:'Barang kembalian',SALDO_AWAL:'Saldo awal brankas',
  KE_ETALASE:'Keluar ke etalase',LEBUR_SIMPAN:'Dilebur',HASIL_LEBUR:'Hasil leburan',JUAL:'Dijual',SETOR_SUPPLIER:'Setor ke supplier',LAINNYA:'Keluar lainnya'};
const ebLbl=s=>{s=String(s||'');const b=/^BATAL_/.test(s);s=s.replace(/^BATAL_/,'');return (b?'Batal · ':'')+(SUMBER_EB[s]||s.replace(/_/g,' ').toLowerCase())};
/** 875 → 87,5% · 18 → 75% · 99,9 → 99,9% (sama dengan persenMurni_ di server) */
const pMurni=k=>{const n=parseFloat(String(k||'').replace(',','.'));if(!n)return 0;if(n<=24)return Math.round(n/24*1000)/10;if(n<=100)return n;return Math.round(n)/10};
const g3=n=>Math.round((n||0)*1000)/1000;
const keyEB=o=>[o.logam,o.kadar,o.jenisBarang,o.kondisi||'BAIK'].join('|');
function ebSum(){return (S.emasBrankasSum||[]).filter(x=>Math.abs(x.berat)>0.0005)}
function ebSaldo(o){const x=ebSum().find(r=>keyEB(r)===keyEB(o));return x?x.berat:0}
function stkSaldo(o){const x=(S.stokSum||[]).find(r=>r.logam===o.logam&&r.jenisBarang===o.jenisBarang&&String(r.kadar)===String(o.kadar));return x?x.berat:0}
/** Efek lokal ke ringkasan brankas emas (dicerminkan dari server, ditimpa saat sinkron). */
function ebLocal(o,b,sumber,ref){
  if(!S.emasBrankasSum)S.emasBrankasSum=[];
  const it={logam:o.logam||'EMAS',kadar:String(o.kadar||''),jenisBarang:o.jenisBarang||o.kategori||'Lainnya',kondisi:o.kondisi||'BAIK'};
  let x=S.emasBrankasSum.find(r=>keyEB(r)===keyEB(it));
  if(!x){x=Object.assign({berat:0,persenMurni:pMurni(it.kadar)},it);S.emasBrankasSum.push(x)}
  x.berat=g3(x.berat+b);x.murni=g3(x.berat*(x.persenMurni||pMurni(x.kadar))/100);
  (S.emasBrankas=S.emasBrankas||[]).push(Object.assign({mutasiId:'TMP',waktu:nowWIT(),berat:g3(b),arah:b>0?'MASUK':'KELUAR',sumber:sumber||'',referensiId:ref||'TMP',operatorId:S.me.userId},it));
}
function stkLocal(o,b,ref){
  if(!S.stokSum)return;
  const x=S.stokSum.find(r=>r.logam===o.logam&&r.jenisBarang===o.jenisBarang&&String(r.kadar)===String(o.kadar));
  if(x)x.berat=g3(x.berat+b);else S.stokSum.push({logam:o.logam,jenisBarang:o.jenisBarang,kadar:String(o.kadar),berat:g3(b)});
  if(S.stokLog)S.stokLog.push({stokLogId:'TMP',logam:o.logam,jenisBarang:o.jenisBarang,kadar:String(o.kadar),berat:g3(b),referensiId:ref||'TMP',createdAt:nowWIT()});
}
function uangLocal(masuk,nom,metode,rek,sumber){
  if(!(nom>0))return;
  if(metode==='TRANSFER'||metode==='QRIS'){if(S.saldo.bank){S.saldo.bank[rek||'']=(S.saldo.bank[rek||'']||0)+(masuk?1:-1)*nom}}
  else pushKas(masuk?'MASUK':'KELUAR',nom,sumber,'');
}
const selOpt=(arr,v)=>arr.map(o=>{const a=Array.isArray(o)?o:[o,o];return '<option value="'+esc(a[0])+'"'+(String(v)===String(a[0])?' selected':'')+'>'+esc(a[1])+'</option>'}).join('');
const rekOpt=()=>selOpt((S.setting.rekening||[]).map(r=>r.nama));
const fl=(lb,inp,h,cls)=>'<label class="fld'+(cls?' '+cls:'')+'"><span class="lb">'+lb+'</span>'+inp+(h?'<small>'+h+'</small>':'')+'</label>';
const numInp=(n,v,ext)=>'<div class="adorn"><input class="inp" name="'+n+'" inputmode="decimal" autocomplete="off" placeholder="0,00" value="'+(v||'')+'"'+(ext||'')+'><b>gr</b></div>';
const rpInp=(n,v,ext)=>'<input class="inp rp" name="'+n+'" inputmode="numeric" autocomplete="off" placeholder="Rp. 0" value="'+(v?'Rp. '+nf.format(v):'')+'"'+(ext||'')+'>';
/** Tampilkan/sembunyikan blok berdasarkan atribut data-show="A B" */
function showBy(root,attr,val){$$('['+attr+']',root).forEach(e=>e.classList.toggle('hidden',e.getAttribute(attr).split(' ').indexOf(val)<0))}

/* ---------- Brankas: tab Uang | Emas ---------- */
let BT='UANG';
const P_brankasUang=P.brankas;
P.brankas=function(){
  const tab='<div class="seg fill brk-tab" style="margin-bottom:16px"><button class="'+(BT==='UANG'?'on':'')+'" data-a="bt" data-v="UANG">'+ic('wallet','s')+' Uang</button><button class="'+(BT==='EMAS'?'on':'')+'" data-a="bt" data-v="EMAS">'+ic('gem','s')+' Emas &amp; Perak</button></div>';
  if(BT!=='EMAS')return tab+P_brankasUang();
  const sum=ebSum(),em=sum.filter(x=>x.logam==='EMAS'),pk=sum.filter(x=>x.logam==='PERAK');
  const tot=a=>g3(a.reduce((s,x)=>s+x.berat,0)),totM=g3(em.reduce((s,x)=>s+(x.murni||0),0));
  const rusak=tot(em.filter(x=>x.kondisi==='RUSAK'||x.kondisi==='KEMBAR')),lebur=tot(em.filter(x=>x.kondisi==='LEBURAN'));
  const harga=S.setting.hargaMurniSupplier||0;
  const urut=sum.slice().sort((a,b)=>a.logam.localeCompare(b.logam)||['RUSAK','KEMBAR','LEBURAN','BAIK'].indexOf(a.kondisi)-['RUSAK','KEMBAR','LEBURAN','BAIK'].indexOf(b.kondisi)||b.berat-a.berat);
  const L=sortD(S.emasBrankas||[]);
  const row=m=>{const ref=String(m.referensiId||''),bisaHapus=/^EBR-/.test(ref);
    return '<div class="tr eb-log"><span class="ico '+(m.berat>0?'ok':'bad')+'">'+ic(m.berat>0?'down':'up')+'</span><span class="tm"><b>'+esc(m.jenisBarang+' '+m.kadar)+'</b><small class="meta">'+
      esc([ebLbl(m.sumber),tgl(m.waktu).replace(/ \d{4}$/,'')+' '+jam(m.waktu),kondLbl(m.kondisi),m.proses||'',m.nilai?rpS(m.nilai):'',m.catatan||''].filter(Boolean).join(' · '))+'</small></span>'+
      '<span class="ta '+(m.berat<0?'neg':'')+'"><b>'+(m.berat>0?'+':'')+gr(m.berat)+'</b></span>'+(bisaHapus?'<button class="ibtn del" data-a="ebdel" data-v="'+esc(ref)+'" title="Batalkan operasi">'+ic('trash','s')+'</button>':'')+'</div>'};
  return tab+'<div class="ph"><div><h1>Brankas Emas &amp; Perak</h1><p>Barang buyback, rusak, kembar &amp; leburan yang disimpan di luar etalase.</p></div><div class="chips"><button class="btn pri" data-a="ebm" data-v="MANUAL">'+ic('down','s')+' Masukkan</button><button class="btn" data-a="ebm" data-v="DARI_ETALASE">'+ic('swap','s')+' Tarik dari Etalase</button></div></div>'+
   '<div class="grid g4 kpi-row" style="margin-bottom:16px">'+kpi('Emas di brankas',gr(tot(em)),'<small>'+em.length+' kelompok</small>','gem','gold')+kpi('Setara emas murni',gr(totM),harga?'<small>≈ '+rpS(totM*harga)+'</small>':'','scale')+kpi('Rusak / kembar',gr(rusak),'<small>perlu diolah</small>','tool')+kpi('Leburan',gr(lebur),pk.length?'<small>perak '+gr(tot(pk))+'</small>':'<small>siap jual / setor</small>','coin')+'</div>'+
   '<div class="card" style="margin-bottom:16px"><div class="hd"><div><h3>Isi Brankas</h3><small>Ketuk “Keluarkan” untuk perbaikan, sepuh, custom, lebur, jual atau setor supplier</small></div></div>'+
   (urut.length?urut.map((x,i)=>'<div class="tr eb-item"><span class="ico '+kondCls(x.kondisi)+'">'+ic('gem')+'</span><span class="tm"><b>'+esc(x.jenisBarang)+' '+esc(x.kadar)+'</b><small class="meta">'+(x.logam==='PERAK'?'Perak':'Emas')+' · <span class="tag '+kondCls(x.kondisi)+'">'+kondLbl(x.kondisi)+'</span></small></span><span class="ta"><b>'+gr(x.berat)+'</b><small>murni '+nf3.format(x.murni||0)+'</small></span><button class="btn xs pri" data-a="ebk" data-v="'+esc(keyEB(x))+'">Keluarkan</button></div>').join(''):empty('Brankas emas masih kosong. Buyback dengan tujuan "Brankas" otomatis masuk ke sini.'))+'</div>'+
   '<div class="card"><div class="hd"><h3>Riwayat Mutasi Emas</h3><small>'+L.length+' mutasi</small></div>'+(L.length?batas('ebl',L,20,row):empty('Belum ada mutasi.'))+'</div>';
};
A.bt=v=>{BT=v;RJ='';render()};

/* Masukkan emas ke brankas (manual / dari etalase) */
let EBM=null;
F.ebMasuk=function(sumber){
  EBM={sumber:sumber,logam:'EMAS'};
  const dariE=sumber==='DARI_ETALASE';
  const st=(S.stokSum||[]).filter(x=>x.berat>0.0005).sort((a,b)=>a.logam.localeCompare(b.logam)||a.jenisBarang.localeCompare(b.jenisBarang));
  if(dariE&&!st.length)return toast('Stok etalase kosong.','err');
  let h='<form id="ebmform" novalidate><div class="err hidden" id="ebm-err"></div>';
  if(dariE)h+=fl('Barang di etalase','<select class="inp" name="itemIdx">'+st.map((x,i)=>'<option value="'+i+'">'+esc(x.jenisBarang+' '+x.kadar+' ('+(x.logam==='PERAK'?'Perak':'Emas')+') · stok '+gr(x.berat))+'</option>').join('')+'</select>','Stok etalase berkurang, brankas bertambah.');
  else h+='<div class="seg fill" style="margin-bottom:14px" id="ebm-l"><button type="button" class="on" data-a="ebml" data-v="EMAS">Emas</button><button type="button" data-a="ebml" data-v="PERAK">Perak</button></div>'+
     '<div class="row2">'+fl('Jenis barang','<select class="inp" name="jenisBarang">'+selOpt(BARANG.concat(['Leburan']))+'</select>')+fl('Kadar','<select class="inp" name="kadar" id="ebm-kd">'+selOpt(KADAR.EMAS)+'</select>')+'</div>'+
     fl('Asal barang','<select class="inp" name="asal">'+selOpt([['KEMBALIAN','Barang kembalian pelanggan'],['MANUAL','Masuk manual / lainnya'],['SALDO_AWAL','Saldo awal brankas']])+'</select>');
  h+='<div class="row2">'+fl('Kondisi','<select class="inp" name="kondisi">'+selOpt(KONDISI,dariE?'RUSAK':'BAIK')+'</select>')+fl('Berat *',numInp('berat'))+'</div>'+
     fl('Catatan','<input class="inp" name="catatan" autocomplete="off" placeholder="mis. patah kait, model dobel">')+
     '<button class="btn pri blk" type="submit">'+(dariE?'Tarik ke Brankas':'Masukkan ke Brankas')+'</button></form>';
  modal(dariE?'Tarik dari Etalase → Brankas':'Masukkan Emas ke Brankas',h);
  EBM.st=st;
};
A.ebm=v=>F.ebMasuk(v);
A.ebml=(v,el)=>{EBM.logam=v;$$('#ebm-l button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));$('#ebm-kd').innerHTML=selOpt(KADAR[v])};
SUB.ebmform=f=>{
  const e=f.elements,err=t=>{const x=$('#ebm-err');x.textContent=t;x.classList.remove('hidden')};
  let it;
  if(EBM.sumber==='DARI_ETALASE'){const s=EBM.st[+e.itemIdx.value];it={logam:s.logam,kadar:String(s.kadar),jenisBarang:s.jenisBarang}}
  else it={logam:EBM.logam,kadar:e.kadar.value,jenisBarang:e.jenisBarang.value};
  it.kondisi=e.kondisi.value;
  const berat=numG(e.berat.value);
  if(!(berat>0))return err('Berat wajib diisi.');
  if(EBM.sumber==='DARI_ETALASE'&&berat>stkSaldo(it)+0.0005)return err('Stok etalase '+it.jenisBarang+' '+it.kadar+' hanya '+gr(stkSaldo(it))+'.');
  const sumber=EBM.sumber==='DARI_ETALASE'?'DARI_ETALASE':e.asal.value;
  mut('emasBrankasMasuk',Object.assign({sumber:sumber,berat:berat,catatan:e.catatan.value.trim()},it),()=>{
    if(sumber==='DARI_ETALASE')stkLocal(it,-berat);
    ebLocal(it,berat,sumber);
  });
  closeModal();BT='EMAS';
};

/* Keluarkan emas dari brankas */
let EBK=null;
F.ebKeluar=function(key){
  const x=ebSum().find(r=>keyEB(r)===key);if(!x)return toast('Data brankas belum sinkron, coba lagi.','err');
  EBK={x:x,tujuan:x.kondisi==='LEBURAN'?'JUAL':'KE_ETALASE'};
  const T=[['KE_ETALASE','Ke etalase'],['LEBUR_SIMPAN','Lebur'],['JUAL','Jual'],['SETOR','Setor supplier'],['LAINNYA','Lainnya']];
  const kad=KADAR[x.logam]||KADAR.EMAS;
  const h='<form id="ebkform" novalidate>'+
   '<div class="mini" style="margin-bottom:14px"><small>'+(x.logam==='PERAK'?'Perak':'Emas')+' · '+kondLbl(x.kondisi)+'</small><div class="big">'+esc(x.jenisBarang+' '+x.kadar)+' · '+gr(x.berat)+'</div><small>setara '+gr(x.murni)+' murni</small></div>'+
   '<div class="err hidden" id="ebk-err"></div>'+
   '<span class="lb" style="display:block;margin-bottom:6px">Tujuan</span><div class="seg fill eb-tuj" id="ebk-t" style="margin-bottom:14px">'+T.map(t=>'<button type="button" class="'+(EBK.tujuan===t[0]?'on':'')+'" data-a="ebkt" data-v="'+t[0]+'">'+t[1]+'</button>').join('')+'</div>'+
   '<div class="hidden info-box" data-ebk="SETOR" style="margin-bottom:12px"><small>Setoran dihitung sebagai pembayaran hutang emas (gram murni). Lanjut ke form pembayaran hutang.</small></div>'+
   '<div class="row2">'+fl('Berat keluar *',numInp('berat',String(x.berat).replace('.',','),' data-in="ebkb"'))+
     '<div data-ebk="KE_ETALASE LEBUR_SIMPAN LAINNYA">'+fl('Proses','<select class="inp" name="proses">'+selOpt(PROSES,x.kondisi==='RUSAK'?'Perbaikan':x.kondisi==='KEMBAR'?'Custom model':'Sepuh ulang')+'</select>')+'</div></div>'+
   '<div data-ebk="KE_ETALASE"><div class="row2">'+fl('Jadi barang','<select class="inp" name="jenisHasil">'+selOpt(BARANG,x.jenisBarang==='Leburan'?'Lainnya':x.jenisBarang)+'</select>')+fl('Kadar hasil','<select class="inp" name="kadarHasil">'+selOpt(kad.indexOf(String(x.kadar))<0?[String(x.kadar)].concat(kad):kad,x.kadar)+'</select>')+'</div></div>'+
   '<div data-ebk="LEBUR_SIMPAN"><div class="row2">'+fl('Kadar leburan','<input class="inp" name="kadarLebur" inputmode="decimal" value="'+esc(x.kadar)+'">')+'<span></span></div></div>'+
   '<div data-ebk="KE_ETALASE LEBUR_SIMPAN">'+fl('Berat hasil (setelah susut)',numInp('beratHasil',String(x.berat).replace('.',',')),'Isi berat setelah diolah. Selisih = susut.')+'</div>'+
   '<div data-ebk="KE_ETALASE LEBUR_SIMPAN LAINNYA"><div class="row2">'+fl('Ongkos tukang',rpInp('ongkos'))+fl('Dibayar dari','<select class="inp" name="sumberOngkos">'+selOpt([['KAS','Kas laci'],['TRANSFER','Transfer bank'],['TIDAK_DICATAT','Tidak dicatat']])+'</select>')+'</div></div>'+
   '<div data-ebk="JUAL"><div class="row2">'+fl('Nilai jual *',rpInp('nilai'))+fl('Diterima via','<select class="inp" name="metodeBayar">'+selOpt([['TUNAI','Tunai (kas laci)'],['TRANSFER','Transfer bank']])+'</select>')+'</div></div>'+
   ((S.setting.rekening||[]).length?'<div data-ebk="JUAL KE_ETALASE LEBUR_SIMPAN LAINNYA">'+fl('Rekening (bila transfer)','<select class="inp" name="rekening">'+rekOpt()+'</select>')+'</div>':'')+
   '<div data-ebk="KE_ETALASE LEBUR_SIMPAN JUAL LAINNYA">'+fl('Catatan','<input class="inp" name="catatan" autocomplete="off" placeholder="mis. tukang Pak Made / pembeli">')+'</div>'+
   '<button class="btn pri blk" type="submit" id="ebk-ok">Simpan</button></form>';
  modal('Keluarkan dari Brankas',h);ebkTuj(EBK.tujuan);
};
function ebkTuj(v){
  EBK.tujuan=v;const m=$('#ebkform');if(!m)return;
  $$('#ebk-t button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));showBy(m,'data-ebk',v);
  $('#ebk-ok').textContent={KE_ETALASE:'Keluarkan ke Etalase',LEBUR_SIMPAN:'Lebur & Simpan di Brankas',JUAL:'Simpan Penjualan',SETOR:'Lanjut ke Pembayaran Hutang',LAINNYA:'Simpan'}[v];
}
A.ebk=v=>F.ebKeluar(v);A.ebkt=v=>ebkTuj(v);
IN.ebkb=(v,el)=>{const f=$('#ebkform');if(f&&f.elements.beratHasil)f.elements.beratHasil.value=v};
SUB.ebkform=f=>{
  const e=f.elements,x=EBK.x,t=EBK.tujuan,err=s=>{const q=$('#ebk-err');q.textContent=s;q.classList.remove('hidden')};
  const it={logam:x.logam,kadar:String(x.kadar),jenisBarang:x.jenisBarang,kondisi:x.kondisi};
  const berat=numG(e.berat.value);
  if(!(berat>0))return err('Berat wajib diisi.');
  if(berat>x.berat+0.0005)return err('Saldo brankas hanya '+gr(x.berat)+'.');
  if(t==='SETOR'){
    const open=(S.hutangEmas||[]).filter(h=>h.status!=='LUNAS');
    if(!open.length)return err('Tidak ada hutang emas yang belum lunas.');
    closeModal();return F.heBayar(open[0].hutangId,{metode:'EMAS',sumberEmas:'BRANKAS',key:keyEB(x),beratSetor:berat});
  }
  const p=Object.assign({tujuan:t,berat:berat,catatan:e.catatan.value.trim()},it);
  if(t!=='JUAL'){p.proses=e.proses.value;p.ongkos=rpVal(e.ongkos.value);p.sumberOngkos=e.sumberOngkos.value}
  if(t==='KE_ETALASE'){p.jenisHasil=e.jenisHasil.value;p.kadarHasil=e.kadarHasil.value;p.beratHasil=numG(e.beratHasil.value);if(!(p.beratHasil>0))return err('Berat hasil wajib diisi.')}
  if(t==='LEBUR_SIMPAN'){p.kadarHasil=String(e.kadarLebur.value||x.kadar).trim();p.jenisHasil='Leburan';p.beratHasil=numG(e.beratHasil.value);if(!(p.beratHasil>0))return err('Berat hasil wajib diisi.')}
  if(t==='JUAL'){p.nilai=rpVal(e.nilai.value);p.metodeBayar=e.metodeBayar.value;if(!(p.nilai>0))return err('Nilai jual wajib diisi.')}
  if(e.rekening)p.rekening=e.rekening.value;
  if(p.sumberOngkos==='TRANSFER')p.rekeningOngkos=p.rekening;
  if(p.ongkos>0&&p.sumberOngkos==='KAS'&&!kasOK(p.ongkos))return err('Saldo kas laci tidak cukup untuk ongkos.');
  mut('emasBrankasKeluar',p,()=>{
    ebLocal(it,-berat,t);
    if(t==='KE_ETALASE')stkLocal({logam:x.logam,kadar:p.kadarHasil,jenisBarang:p.jenisHasil},p.beratHasil);
    if(t==='LEBUR_SIMPAN')ebLocal({logam:x.logam,kadar:p.kadarHasil,jenisBarang:'Leburan',kondisi:'LEBURAN'},p.beratHasil,'HASIL_LEBUR');
    if(t==='JUAL')uangLocal(true,p.nilai,p.metodeBayar,p.rekening,'JUAL_EMAS_BRANKAS');
    if(p.ongkos>0&&p.sumberOngkos!=='TIDAK_DICATAT')uangLocal(false,p.ongkos,p.sumberOngkos==='TRANSFER'?'TRANSFER':'TUNAI',p.rekening,'ONGKOS_OLAH_EMAS');
  });
  closeModal();
};
A.ebdel=v=>{
  if(!confirm('Batalkan operasi brankas ini?\n\nEmas, stok etalase, dan uang (ongkos/penjualan) yang terkait akan dikembalikan.'))return;
  mut('emasBrankasHapus',{referensiId:v},()=>{
    (S.emasBrankas||[]).filter(m=>m.referensiId===v).forEach(m=>{const s=ebSum().find(r=>keyEB(r)===keyEB(m));if(s){s.berat=g3(s.berat-m.berat);s.murni=g3(s.berat*(s.persenMurni||pMurni(s.kadar))/100)}});
    S.emasBrankas=(S.emasBrankas||[]).filter(m=>m.referensiId!==v);
  });
};

/* ---------- Hutang Emas Toko ---------- */
let HT='AKTIF';
const heSisa=h=>Math.max(0,g3((h.beratMurni||0)-(h.terbayar||0)));
P.hutangemas=function(){
  const L=S.hutangEmas||[],harga=S.setting.hargaMurniSupplier||0;
  const aktif=L.filter(h=>h.status!=='LUNAS'),sisa=g3(aktif.reduce((s,h)=>s+heSisa(h),0)),bayar=g3(L.reduce((s,h)=>s+(h.terbayar||0),0));
  const tab='<div class="seg fill" style="margin-bottom:14px">'+[['AKTIF','Belum lunas ('+aktif.length+')'],['LUNAS','Lunas'],['RIWAYAT','Riwayat bayar']].map(x=>'<button class="'+(HT===x[0]?'on':'')+'" data-a="ht" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div>';
  const kartu=h=>{const s=heSisa(h),pct=Math.min(100,Math.round((h.terbayar||0)/(h.beratMurni||1)*100)),lunas=h.status==='LUNAS',tmp=/^TMP/.test(h.hutangId);
    return '<div class="pt-item he-item" data-a="hedet" data-v="'+esc(h.hutangId)+'"><div class="pt-top"><span class="tm"><b>'+esc(h.supplier)+'</b><small>'+esc(h.jenisBarang+' '+h.kadar)+' · '+gr(h.beratBarang)+' × '+nf2.format(h.persenMurni).replace(',00','')+'% = '+gr(h.beratMurni)+' murni</small><small>'+tgl(h.tanggal)+(h.jatuhTempo?' · jatuh tempo '+tgl(h.jatuhTempo):'')+'</small></span>'+
      '<span class="ta"><b>'+gr(s)+'</b><small>'+(lunas?'lunas':harga?'≈ '+rpS(s*harga):'sisa murni')+'</small></span></div>'+
      '<div class="track"><i style="width:'+pct+'%"></i></div><div class="pt-foot"><span class="tag '+(lunas?'ok':'warn')+'">'+(lunas?'LUNAS':'SISA '+gr(s))+'</span><small>terbayar '+gr(h.terbayar)+'</small>'+(lunas||tmp?'':'<button class="btn xs pri" data-a="heb" data-v="'+esc(h.hutangId)+'">Bayar</button>')+'</div></div>'};
  let body;
  if(HT==='RIWAYAT'){const R=sortD((S.riwayatBayar||[]).filter(b=>b.tipe==='HUTANG_EMAS'));body=R.length?batas('heb',R,20,heByrRow):empty('Belum ada pembayaran.')}
  else{const A2=L.filter(h=>HT==='LUNAS'?h.status==='LUNAS':h.status!=='LUNAS').sort((a,b)=>String(b.tanggal).localeCompare(String(a.tanggal)));body=A2.length?A2.map(kartu).join(''):empty(HT==='LUNAS'?'Belum ada hutang yang lunas.':'Tidak ada hutang emas. Catat saat mengambil barang dari supplier.')}
  return '<div class="ph"><div><h1>Hutang Emas Toko</h1><p>Dihitung dalam gram emas murni. Bayar dengan uang (dikonversi harga hari ini) atau setor emas.</p></div><button class="btn pri" data-a="headd">'+ic('plus','s')+' Ambil Barang</button></div>'+
   '<div class="card he-harga" style="margin-bottom:16px"><span class="ico gold">'+ic('coin')+'</span><span class="tm"><small>Harga emas murni supplier hari ini</small><b>'+(harga?rp(harga)+' / gr':'Belum diisi')+'</b></span><button class="btn sm" data-a="hehrg">'+ic('edit','s')+' Ubah</button></div>'+
   '<div class="grid g4 kpi-row" style="margin-bottom:16px">'+kpi('Sisa hutang',gr(sisa),'<small>emas murni</small>','scale','gold')+kpi('Setara uang',harga?rpS(sisa*harga):'-','<small>@ harga hari ini</small>','wallet')+kpi('Sudah dibayar',gr(bayar),'<small>gram murni</small>','down')+kpi('Supplier aktif',String(new Set(aktif.map(h=>h.supplier)).size),'<small>'+aktif.length+' nota</small>','users')+'</div>'+
   '<div class="card">'+tab+body+'</div>';
};
function heByrRow(b,del){
  const uang=b.metode!=='EMAS';
  const info=uang?rp(b.nominalRp)+' @ '+rpS(b.hargaPerGram)+'/gr'+(b.rekening?' · '+b.rekening:' · kas'):gr(b.beratSetor)+' kadar '+b.kadarSetor+' · '+({BRANKAS:'dari brankas',ETALASE:'dari etalase',LUAR:'emas luar / murni'}[b.sumberEmas]||'');
  return '<div class="tr"><span class="ico '+(uang?'gold':'ok')+'">'+ic(uang?'wallet':'gem')+'</span><span class="tm"><b>'+esc(b.namaPihak||'-')+' · '+(uang?'Uang':'Emas')+'</b><small class="meta">'+esc(tgl(b.waktu).replace(/ \d{4}$/,'')+' '+jam(b.waktu)+' · '+info)+'</small></span><span class="ta"><b>'+gr(b.jumlah)+'</b><small>murni</small></span>'+(del&&!/^TMP/.test(b.bayarId)?'<button class="ibtn del" data-a="hebdel" data-v="'+esc(b.bayarId)+'" title="Batalkan pembayaran">'+ic('trash','s')+'</button>':'')+'</div>';
}
A.ht=v=>{HT=v;RJ='';render()};
A.hedet=(v,el,e)=>{
  if(e&&e.target&&e.target.closest('[data-a="heb"]'))return;
  const h=(S.hutangEmas||[]).find(x=>x.hutangId===v);if(!h)return;
  const s=heSisa(h),harga=S.setting.hargaMurniSupplier||0,R=sortD((S.riwayatBayar||[]).filter(b=>b.refId===v));
  modal('Hutang Emas · '+h.supplier,
   '<div class="mini" style="margin-bottom:12px"><small>'+esc(h.jenisBarang+' '+h.kadar)+' · '+gr(h.beratBarang)+' · '+nf2.format(h.persenMurni).replace(',00','')+'% murni'+(h.telepon?' · '+esc(h.telepon):'')+'</small><div class="big">Sisa '+gr(s)+' murni</div><small>Total '+gr(h.beratMurni)+' · terbayar '+gr(h.terbayar)+(harga&&s?' · ≈ '+rp(Math.ceil(s*harga))+' hari ini':'')+'</small>'+(h.catatan?'<small style="display:block;margin-top:4px">'+esc(h.catatan)+'</small>':'')+'</div>'+
   '<div class="tr"><span class="ico gold">'+ic('file')+'</span><span class="tm"><b>Barang diambil</b><small>'+tgl(h.tanggal)+(h.masukEtalase?' · masuk etalase':'')+'</small></span><span class="ta"><b>'+gr(h.beratMurni)+'</b><small>murni</small></span></div>'+
   (R.length?R.map(b=>heByrRow(b,true)).join(''):empty('Belum ada pembayaran.'))+
   '<div class="he-act">'+(h.status==='LUNAS'||/^TMP/.test(v)?'':'<button class="btn pri" data-a="heb" data-v="'+esc(v)+'">'+ic('coin','s')+' Bayar</button>')+(/^TMP/.test(v)?'':'<button class="btn gh" data-a="hedel" data-v="'+esc(v)+'">'+ic('trash','s')+' Hapus</button>')+'</div>');
};
A.hehrg=()=>openForm({title:'Harga Emas Murni Hari Ini',ok:'Simpan Harga',fields:[{k:'harga',l:'Harga emas murni (24K) per gram dari supplier',t:'rp',req:1,v:S.setting.hargaMurniSupplier,h:'Dipakai untuk konversi bayar uang → gram murni.'}],
  fn:v=>{mut('settingSimpan',{hargaMurniSupplier:v.harga},()=>{S.setting.hargaMurniSupplier=v.harga})}});
A.headd=()=>{
  const kad=KADAR.EMAS.map(k=>[k,k+' ('+nf2.format(pMurni(k)).replace(',00','')+'%)']).concat(KADAR.PERAK.map(k=>['P'+k,'Perak '+k]));
  openForm({title:'Ambil Barang dari Supplier',ok:'Catat Hutang Emas',
   pre:'<div class="info-box" style="margin-bottom:12px"><small>Hutang dihitung = berat × kadar. Contoh 10 gr kadar 875 = 8,75 gr emas murni.</small></div>',
   fields:[{k:'supplier',l:'Nama supplier',req:1},{k:'telepon',l:'No. HP supplier',t:'tel'},
    {k:'jenisBarang',l:'Jenis barang',t:'select',o:BARANG,half:1},{k:'kadar',l:'Kadar',t:'select',o:kad,half:1},
    {k:'beratBarang',l:'Berat total',t:'num',req:1,suf:'gr',half:1},{k:'tanggal',l:'Tanggal ambil',t:'date',v:today(),half:1},
    {k:'masukEtalase',l:'Barang langsung masuk stok etalase',t:'chk',v:1},{k:'jatuhTempo',l:'Jatuh tempo (opsional)',t:'date'},{k:'catatan',l:'Catatan',t:'ta'}],
   fn:v=>{
    const perak=/^P/.test(v.kadar),kadar=v.kadar.replace(/^P/,''),logam=perak?'PERAK':'EMAS',ps=pMurni(kadar),murni=g3(v.beratBarang*ps/100);
    mut('hutangEmasSimpan',{supplier:v.supplier,telepon:v.telepon,logam:logam,kadar:kadar,jenisBarang:v.jenisBarang,beratBarang:v.beratBarang,tanggal:v.tanggal,masukEtalase:!!v.masukEtalase,jatuhTempo:v.jatuhTempo,catatan:v.catatan},()=>{
      (S.hutangEmas=S.hutangEmas||[]).push({hutangId:'TMP-'+Date.now(),supplier:v.supplier,telepon:v.telepon,tanggal:v.tanggal||today(),logam:logam,kadar:kadar,jenisBarang:v.jenisBarang,beratBarang:v.beratBarang,persenMurni:ps,beratMurni:murni,terbayar:0,sisa:murni,status:'BELUM_LUNAS',masukEtalase:!!v.masukEtalase,jatuhTempo:v.jatuhTempo,createdAt:nowWIT()});
      if(v.masukEtalase)stkLocal({logam:logam,kadar:kadar,jenisBarang:v.jenisBarang},v.beratBarang);
    });HT='AKTIF';
   }});
};
A.hedel=v=>{
  const h=(S.hutangEmas||[]).find(x=>x.hutangId===v);if(!h)return;
  if(!confirm('Hapus hutang emas '+h.supplier+'?\n\nSemua pembayaran dibatalkan (uang/emas dikembalikan) dan barang yang masuk etalase ditarik lagi.'))return;
  closeModal();
  mut('hutangEmasHapus',{hutangId:v},()=>{S.hutangEmas=S.hutangEmas.filter(x=>x.hutangId!==v);S.riwayatBayar=(S.riwayatBayar||[]).filter(b=>b.refId!==v)});
};
A.hebdel=v=>{
  const b=(S.riwayatBayar||[]).find(x=>x.bayarId===v);if(!b)return;
  if(!confirm('Batalkan pembayaran '+gr(b.jumlah)+' murni ini?\n\n'+(b.metode==='EMAS'?'Emas dikembalikan ke '+(b.sumberEmas==='BRANKAS'?'brankas':b.sumberEmas==='ETALASE'?'etalase':'catatan')+'.':'Uang dikembalikan ke kas/bank.')))return;
  closeModal();
  mut('hutangEmasHapusBayar',{bayarId:v},()=>{
    const h=(S.hutangEmas||[]).find(x=>x.hutangId===b.refId);if(h){h.terbayar=g3(Math.max(0,h.terbayar-b.jumlah));h.sisa=heSisa(h);h.status=h.sisa>0.0005?'BELUM_LUNAS':'LUNAS'}
    S.riwayatBayar=S.riwayatBayar.filter(x=>x.bayarId!==v);
  });
};

/* Form bayar hutang emas: UANG atau EMAS, pratinjau gram murni langsung */
let HEB=null;
F.heBayar=function(id,pre){
  pre=pre||{};
  const open=(S.hutangEmas||[]).filter(h=>h.status!=='LUNAS'&&!/^TMP/.test(h.hutangId));
  const h=open.find(x=>x.hutangId===id)||open[0];if(!h)return toast('Tidak ada hutang emas yang belum lunas.','err');
  HEB={id:h.hutangId,metode:pre.metode||'UANG',sumber:pre.sumberEmas||'BRANKAS'};
  const eb=ebSum().filter(x=>x.berat>0.0005),st=(S.stokSum||[]).filter(x=>x.berat>0.0005);HEB.eb=eb;HEB.st=st;
  const ebIdx=pre.key?Math.max(0,eb.findIndex(x=>keyEB(x)===pre.key)):0;
  const harga=S.setting.hargaMurniSupplier||0;
  const h2='<form id="hebform" novalidate>'+
   fl('Hutang ke','<select class="inp" name="hutangId" data-in="hebp">'+open.map(x=>'<option value="'+esc(x.hutangId)+'"'+(x.hutangId===h.hutangId?' selected':'')+'>'+esc(x.supplier+' · sisa '+gr(heSisa(x))+' murni')+'</option>').join('')+'</select>')+
   '<div class="err hidden" id="heb-err"></div>'+
   '<div class="seg fill" id="heb-m" style="margin-bottom:14px"><button type="button" data-a="hebm" data-v="UANG">'+ic('wallet','s')+' Bayar Uang</button><button type="button" data-a="hebm" data-v="EMAS">'+ic('gem','s')+' Setor Emas</button></div>'+
   '<div data-heb="UANG">'+
     '<div class="row2">'+fl('Harga murni / gr hari ini','<input class="inp rp" name="hargaPerGram" inputmode="numeric" autocomplete="off" value="'+(harga?'Rp. '+nf.format(harga):'')+'" data-in="hebp">')+fl('Uang disetor *','<input class="inp rp" name="nominal" inputmode="numeric" autocomplete="off" placeholder="Rp. 0" data-in="hebp">')+'</div>'+
     '<div class="row2">'+fl('Dibayar dari','<select class="inp" name="metodeUang">'+selOpt([['TUNAI','Kas laci'],['TRANSFER','Transfer bank']])+'</select>')+((S.setting.rekening||[]).length?fl('Rekening','<select class="inp" name="rekening">'+rekOpt()+'</select>'):'<span></span>')+'</div>'+
   '</div>'+
   '<div data-heb="EMAS">'+
     '<span class="lb" style="display:block;margin-bottom:6px">Sumber emas</span><div class="seg fill" id="heb-s" style="margin-bottom:12px"><button type="button" data-a="hebs" data-v="BRANKAS">Brankas</button><button type="button" data-a="hebs" data-v="ETALASE">Etalase</button><button type="button" data-a="hebs" data-v="LUAR">Emas murni / luar</button></div>'+
     '<div data-hes="BRANKAS">'+fl('Emas di brankas',eb.length?'<select class="inp" name="ebItem" data-in="hebp">'+eb.map((x,i)=>'<option value="'+i+'"'+(i===ebIdx?' selected':'')+'>'+esc(x.jenisBarang+' '+x.kadar+' · '+kondLbl(x.kondisi)+' · '+gr(x.berat))+'</option>').join('')+'</select>':'<div class="inp" style="display:flex;align-items:center">Brankas emas kosong</div>')+'</div>'+
     '<div data-hes="ETALASE">'+fl('Barang di etalase',st.length?'<select class="inp" name="stItem" data-in="hebp">'+st.map((x,i)=>'<option value="'+i+'">'+esc(x.jenisBarang+' '+x.kadar+' · stok '+gr(x.berat))+'</option>').join('')+'</select>':'<div class="inp" style="display:flex;align-items:center">Stok etalase kosong</div>')+'</div>'+
     '<div data-hes="LUAR">'+fl('Kadar emas disetor','<input class="inp" name="kadarLuar" inputmode="decimal" value="999" data-in="hebp">','999 = emas murni hasil pemurnian · 875 · 750 · 24 (K)')+'</div>'+
     '<div class="row2">'+fl('Berat disetor *',numInp('beratSetor',pre.beratSetor?String(pre.beratSetor).replace('.',','):'',' data-in="hebp"'))+fl('Gram murni (opsional)',numInp('gramMurni','',' data-in="hebp"'),'Isi bila supplier menimbang hasil murni sendiri')+'</div>'+
   '</div>'+
   '<div class="he-prev" id="heb-prev"></div>'+
   '<div class="he-act"><button type="button" class="btn gold" data-a="heblunas">'+ic('sparkle','s')+' Isi untuk Lunas</button><button class="btn pri" type="submit">Simpan Pembayaran</button></div></form>';
  modal('Bayar Hutang Emas',h2);hebMet(HEB.metode);hebSum(HEB.sumber);
};
function hebMet(v){HEB.metode=v;$$('#heb-m button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));showBy($('#hebform'),'data-heb',v);hebPrev()}
function hebSum(v){HEB.sumber=v;$$('#heb-s button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));showBy($('#hebform'),'data-hes',v);hebPrev()}
/** Hitung pembayaran dari isian form → {gram, item, beratSetor, persen, nominal, harga} */
function hebCalc(){
  const f=$('#hebform');if(!f)return null;const e=f.elements,h=(S.hutangEmas||[]).find(x=>x.hutangId===e.hutangId.value);
  const r={h:h,sisa:h?heSisa(h):0};
  if(HEB.metode==='UANG'){r.harga=rpVal(e.hargaPerGram.value);r.nominal=rpVal(e.nominal.value);r.gram=r.harga?g3(r.nominal/r.harga):0}
  else{
    let it=null;
    if(HEB.sumber==='BRANKAS'&&e.ebItem)it=HEB.eb[+e.ebItem.value];
    else if(HEB.sumber==='ETALASE'&&e.stItem)it=HEB.st[+e.stItem.value];
    else if(HEB.sumber==='LUAR')it={logam:'EMAS',kadar:String(e.kadarLuar.value||'').trim(),jenisBarang:'Emas murni',kondisi:'BAIK'};
    r.item=it;r.persen=it?pMurni(it.kadar):0;r.beratSetor=numG(e.beratSetor.value);r.gramManual=numG(e.gramMurni.value);
    r.gram=r.gramManual||g3(r.beratSetor*r.persen/100);r.max=it&&HEB.sumber!=='LUAR'?it.berat:Infinity;
  }
  return r;
}
function hebPrev(){
  const r=hebCalc(),p=$('#heb-prev');if(!r||!p)return;
  const sisaBaru=g3(r.sisa-r.gram),lebih=r.gram>r.sisa+0.01;
  let rumus=HEB.metode==='UANG'?(r.harga?rp(r.nominal)+' ÷ '+rp(r.harga)+'/gr':'Isi harga murni hari ini'):(r.item?(r.gramManual?'Gram murni diisi manual':gr(r.beratSetor)+' × '+nf2.format(r.persen).replace(',00','')+'% (kadar '+esc(r.item.kadar)+')'):'Pilih emas yang disetor');
  p.innerHTML='<div class="he-prev-row"><small>'+rumus+'</small><b>= '+gr(r.gram)+' murni</b></div><div class="he-prev-row"><small>Sisa hutang</small><span>'+gr(r.sisa)+' → <b class="'+(lebih?'neg':sisaBaru<=0.0005?'pos':'')+'">'+(lebih?'melebihi sisa':sisaBaru<=0.0005?'LUNAS':gr(sisaBaru))+'</b></span></div>';
}
A.hebm=v=>hebMet(v);A.hebs=v=>hebSum(v);IN.hebp=()=>hebPrev();
A.heb=v=>F.heBayar(v);
A.heblunas=()=>{
  const r=hebCalc();if(!r||!r.h)return;const f=$('#hebform').elements;
  if(HEB.metode==='UANG'){if(!r.harga)return toast('Isi harga murni hari ini dulu.','err');f.nominal.value='Rp. '+nf.format(Math.ceil(r.sisa*r.harga))}
  else{if(!r.persen)return toast('Pilih emas & kadarnya dulu.','err');f.gramMurni.value='';let b=Math.ceil(r.sisa/r.persen*100*1000)/1000;if(b>r.max){b=r.max;toast('Saldo emas yang dipilih hanya '+gr(r.max)+', belum cukup untuk lunas.','')}f.beratSetor.value=String(b).replace('.',',')}
  hebPrev();
};
SUB.hebform=()=>{
  const r=hebCalc(),err=s=>{const q=$('#heb-err');q.textContent=s;q.classList.remove('hidden')};
  if(!r||!r.h)return err('Pilih hutang.');
  if(!(r.gram>0))return err(HEB.metode==='UANG'?'Isi harga murni dan nominal uang.':'Isi berat emas yang disetor.');
  if(r.gram>r.sisa+0.01)return err('Pembayaran '+gr(r.gram)+' murni melebihi sisa '+gr(r.sisa)+'. Tekan "Isi untuk Lunas".');
  const e=$('#hebform').elements,p={hutangId:r.h.hutangId,metode:HEB.metode};
  if(HEB.metode==='UANG'){
    Object.assign(p,{nominal:r.nominal,hargaPerGram:r.harga,metodeUang:e.metodeUang.value,rekening:e.rekening?e.rekening.value:''});
    if(p.metodeUang==='TUNAI'&&!kasOK(r.nominal))return err('Saldo kas laci tidak cukup ('+rp(S.saldo.kas)+').');
  }else{
    if(!r.item||!r.persen)return err('Pilih emas yang disetor dan kadarnya.');
    if(r.beratSetor>r.max+0.0005)return err('Saldo '+(HEB.sumber==='BRANKAS'?'brankas':'etalase')+' hanya '+gr(r.max)+'.');
    Object.assign(p,{sumberEmas:HEB.sumber,logam:r.item.logam,kadar:String(r.item.kadar),jenisBarang:r.item.jenisBarang,kondisi:r.item.kondisi||'BAIK',beratSetor:r.beratSetor});
    if(r.gramManual)p.gramMurni=r.gramManual;
  }
  const gram=Math.min(r.gram,r.sisa);
  mut('hutangEmasBayar',p,()=>{
    const h=r.h;h.terbayar=g3(h.terbayar+gram);h.sisa=heSisa(h);if(h.sisa<=0.0005)h.status='LUNAS';
    if(p.metode==='UANG')uangLocal(false,p.nominal,p.metodeUang,p.rekening,'BAYAR_HUTANG_EMAS');
    else if(p.sumberEmas==='BRANKAS')ebLocal(r.item,-p.beratSetor,'SETOR_SUPPLIER');
    else if(p.sumberEmas==='ETALASE')stkLocal(r.item,-p.beratSetor);
    (S.riwayatBayar=S.riwayatBayar||[]).push({bayarId:'TMP-'+Date.now(),refId:h.hutangId,tipe:'HUTANG_EMAS',namaPihak:h.supplier,jumlah:gram,satuan:'gram',waktu:nowWIT(),metode:p.metode,nominalRp:p.nominal||0,hargaPerGram:p.hargaPerGram||0,beratSetor:p.beratSetor||0,kadarSetor:p.kadar||'',sumberEmas:p.sumberEmas||'',rekening:p.metodeUang==='TRANSFER'?p.rekening:''});
  });
  closeModal();
};

/* ============ ABSENSI & IZIN ============ */
const jarakM=(a,b,c,d)=>{const R=6371000,r=x=>x*Math.PI/180,dl=r(c-a),dn=r(d-b),h=Math.sin(dl/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(dn/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(h)))};

function cleanupExpiredAbsensiPhotos(){
  const now=Date.now(),LIMIT=48*3600*1000;
  (S&&S.absensi||[]).forEach(a=>{
    const ts=a.jamMasuk?a.jamMasuk.replace(' ','T'):a.tanggal+'T00:00:00';
    const t=new Date(ts).getTime();
    if(!isNaN(t)&&(now-t)>LIMIT){
      a.fotoSelfieMasuk='';
      LS.d('pos_selfie_'+(a.absensiId||a.userId));
    }
  });
}

P.absensi=function(){
  cleanupExpiredAbsensiPhotos();
  const o=isO(),td=today();
  if(o){
    const rows=S.absensi.slice().sort((a,b)=>String(b.jamMasuk).localeCompare(String(a.jamMasuk))).slice(0,60),iz=S.izin.slice().reverse().slice(0,15);
    return '<div class="ph"><div><h1>Absensi GPS Karyawan</h1><p>Rekap selfie kamera langsung + verifikasi GPS. Foto tersimpan dan terhapus otomatis 2 x 24 jam.</p></div></div>'+
     '<div class="card" style="margin-bottom:20px"><div class="hd"><div><h3>Rekap Absensi Karyawan</h3><small>Penyimpanan foto hemat kuota otomatis kedaluwarsa 48 jam</small></div></div><div class="tbw hp-hide"><table><thead><tr><th>Tanggal</th><th>Karyawan</th><th>Masuk</th><th>Pulang</th><th>Status</th><th class="r">Jarak</th><th>Foto Selfie</th></tr></thead><tbody>'+
     (rows.map(a=>{
       const ts=a.jamMasuk?a.jamMasuk.replace(' ','T'):a.tanggal+'T00:00:00';
       const age=Date.now()-new Date(ts).getTime();
       const sisaJam=Math.max(0,Math.round((48*3600*1000-age)/3600000));
       const photo=a.fotoSelfieMasuk||LS.g('pos_selfie_'+(a.absensiId||a.userId));
       const photoCol=(photo&&sisaJam>0)?'<button class="btn xs gh" data-a="viewselfie" data-v="'+esc(photo)+'|'+esc(uname(a.userId))+'|'+tgl(a.tanggal)+' '+jam(a.jamMasuk)+'">'+ic('camera','s')+' Lihat ('+sisaJam+'j)</button>':'<small style="color:var(--mut)">Terhapus (&gt;48j)</small>';
       return '<tr><td>'+tgl(a.tanggal)+'</td><td>'+uBadge(a.userId)+'</td><td>'+jam(a.jamMasuk)+'</td><td>'+(jam(a.jamPulang)||'-')+'</td><td><span class="tag '+(a.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+String(a.statusMasuk).replace('_',' ')+'</span></td><td class="r">'+(a.jarakMeter!==''?a.jarakMeter+' m':'-')+'</td><td>'+photoCol+'</td></tr>';
     }).join('')||'<tr><td colspan="7">'+empty('Belum ada absensi.')+'</td></tr>')+'</tbody></table></div>'+
     '<div class="hp-only">'+(rows.length?batas('absO',rows,15,a=>{const photo=a.fotoSelfieMasuk||LS.g('pos_selfie_'+(a.absensiId||a.userId)),age=Date.now()-new Date(String(a.jamMasuk).replace(' ','T')).getTime(),ok48=photo&&age<48*3600e3;
       return '<div class="tr"><span class="ico '+(a.statusMasuk==='TERLAMBAT'?'gold':'ok')+'">'+ic('pin')+'</span><span class="tm"><b>'+esc(uname(a.userId))+'</b><small class="meta">'+tgl(a.tanggal).replace(/ \d{4}$/,'')+' · masuk '+jam(a.jamMasuk)+' · pulang '+(jam(a.jamPulang)||'-')+(a.jarakMeter!==''?' · '+a.jarakMeter+' m':'')+'</small></span><span class="ta"><span class="tag '+(a.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+(a.statusMasuk==='TERLAMBAT'?'Terlambat':'Tepat')+'</span>'+(ok48?'<br><button class="btn xs gh" style="margin-top:4px" data-a="viewselfie" data-v="'+esc(photo)+'|'+esc(uname(a.userId))+'|'+tgl(a.tanggal)+' '+jam(a.jamMasuk)+'">'+ic('camera','s')+' Foto</button>':'')+'</span></div>'}):empty('Belum ada absensi.'))+'</div></div>'+
     '<div class="card"><div class="hd"><h3>Pengajuan Izin / Sakit / Cuti</h3></div>'+(iz.length?iz.map(i=>'<div class="tr"><span class="ico gold">'+ic('cal')+'</span><span class="tm"><b>'+esc(uname(i.userId))+' · '+i.jenis+'</b><small>'+tgl(i.tanggalMulai)+(i.tanggalSelesai!==i.tanggalMulai?' – '+tgl(i.tanggalSelesai):'')+' · '+esc(i.alasan)+'</small></span><span class="tag '+(i.status==='DISETUJUI'?'ok':i.status==='DITOLAK'?'bad':'warn')+'">'+i.status+'</span></div>').join(''):empty('Belum ada pengajuan.'))+'</div>';
  }
  const me=S.absensi.find(a=>a.userId===S.me.userId&&a.tanggal===td),hist=S.absensi.filter(a=>a.userId===S.me.userId).slice().reverse().slice(0,14),iz=S.izin.slice().reverse().slice(0,10);
  return '<div class="ph"><div><h1>Absensi &amp; Izin</h1><p>Absen wajib selfie kamera langsung dan berada di radius toko ('+S.setting.radiusAbsensi+' m). Foto tersimpan aman &amp; otomatis terhapus 48 jam.</p></div></div>'+
   '<div class="grid g2" style="margin-bottom:20px"><div class="card"><div class="hd"><h3>Hari Ini · '+tgl(td)+'</h3></div>'+
   (me?'<div class="mini"><span class="tag '+(me.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+String(me.statusMasuk).replace('_',' ')+'</span><div class="big">Masuk '+jam(me.jamMasuk)+'</div><small>'+(me.jamPulang?'Pulang '+jam(me.jamPulang):'Belum absen pulang')+'</small></div>'+(me.jamPulang?'':'<button class="btn dk blk" style="margin-top:12px" data-a="abpl">Absen Pulang</button>'):'<div class="mini"><div class="big">Belum absen</div><small>Jam masuk standar '+esc(S.setting.jamMasuk)+'</small></div><button class="btn pri blk" style="margin-top:12px" data-a="abnew">'+ic('camera','s')+' Absen Masuk (Kamera Langsung + GPS)</button>')+'</div>'+
   '<div class="card"><div class="hd"><h3>Pengajuan Izin</h3><button class="btn sm pri" data-a="izin">'+ic('plus','s')+' Ajukan</button></div>'+(iz.length?iz.map(i=>'<div class="tr"><span class="tm"><b>'+i.jenis+' · '+tgl(i.tanggalMulai)+'</b><small>'+esc(i.alasan)+'</small></span><span class="tag '+(i.status==='DISETUJUI'?'ok':i.status==='DITOLAK'?'bad':'warn')+'">'+i.status+'</span></div>').join(''):empty('Belum ada pengajuan.'))+'</div></div>'+
   '<div class="card"><div class="hd"><h3>Riwayat Absensi Saya</h3></div>'+(hist.length?hist.map(a=>'<div class="tr"><span class="ico '+(a.statusMasuk==='TERLAMBAT'?'gold':'ok')+'">'+ic('pin')+'</span><span class="tm"><b>'+tgl(a.tanggal)+'</b><small>Masuk '+jam(a.jamMasuk)+' · Pulang '+(jam(a.jamPulang)||'-')+'</small></span><span class="tag '+(a.statusMasuk==='TERLAMBAT'?'warn':'ok')+'">'+String(a.statusMasuk).replace('_',' ')+'</span></div>').join(''):empty('Belum ada riwayat.'))+'</div>';
};
A.abnew=()=>F.absen();
A.abpl=()=>{const m=S.absensi.find(a=>a.userId===S.me.userId&&a.tanggal===today());if(!m||m.jamPulang)return;mut('absenPulang',{},()=>{m.jamPulang=nowWIT()});toast('Absen pulang tercatat','ok')};
A.viewselfie=v=>{
  const p=v.split('|');
  modal('Foto Selfie Absensi',
    '<div style="text-align:center">'+
      '<img src="'+esc(p[0])+'" alt="Selfie" style="width:100%;max-width:320px;border-radius:16px;box-shadow:var(--sh2);margin-bottom:12px">'+
      '<div><b>'+esc(p[1]||'')+'</b><br><small style="color:var(--mut)">Waktu Absen: '+esc(p[2]||'')+' WIT</small></div>'+
      '<small style="display:block;margin-top:8px;color:var(--mut)">Foto otomatis terhapus dari server dan perangkat setelah 2 x 24 jam.</small>'+
    '</div>');
};
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
function startAbsenCam(){
  const video=$('#ab-video'),loadEl=$('#ab-cam-loading');
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    if(loadEl)loadEl.textContent='Kamera langsung tidak didukung browser ini. Gunakan tombol Pilih Berkas di bawah.';
    return;
  }
  navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:640},height:{ideal:800}}})
    .then(st=>{
      AB.stream=st;
      if(video){
        video.srcObject=st;
        video.onloadedmetadata=()=>{if(loadEl)loadEl.classList.add('hidden')};
      }
    })
    .catch(()=>{
      if(loadEl)loadEl.textContent='Izin kamera belum aktif. Klik tombol "Pilih Berkas" di bawah.';
    });
}
function stopAbsenCam(){
  if(AB.stream){
    try{AB.stream.getTracks().forEach(t=>t.stop())}catch(e){}
    AB.stream=null;
  }
}
F.absen=function(){
  AB={foto:null,ok:false,stream:null};
  modal('Absen Masuk (Kamera Langsung + GPS)',
    '<div class="gps warn" id="ab-gps">'+ic('pin','s')+'<span id="ab-t">Mencari lokasi GPS…</span></div>'+
    '<div class="card" style="padding:14px;margin-bottom:14px;background:#161618;color:#fff;border-radius:18px">'+
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'+
        '<b>Kamera Selfie Langsung</b><span class="tag gold" style="font-size:10px">Auto-Hapus 48 Jam</span>'+
      '</div>'+
      '<div id="ab-camera-box" style="position:relative;width:100%;max-width:300px;margin:0 auto;aspect-ratio:3/4;background:#000;border-radius:14px;overflow:hidden;display:grid;place-items:center">'+
        '<video id="ab-video" autoplay playsinline style="width:100%;height:100%;object-fit:cover"></video>'+
        '<img id="ab-img" class="hidden" alt="Hasil Selfie" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0">'+
        '<canvas id="ab-canvas" class="hidden"></canvas>'+
        '<div id="ab-cam-loading" style="color:#a1a1aa;font-size:12px;position:absolute;padding:14px;text-align:center">'+ic('camera')+'<br>Membuka kamera selfie…</div>'+
      '</div>'+
      '<div style="display:flex;gap:8px;margin-top:12px;justify-content:center;flex-wrap:wrap">'+
        '<button type="button" class="btn pri sm" id="ab-snap-btn" data-a="absnap">'+ic('camera','s')+' Ambil Foto Selfie</button>'+
        '<button type="button" class="btn gh sm hidden" id="ab-retake-btn" data-a="abretake" style="color:#fff;border-color:rgba(255,255,255,.3)">'+ic('refresh','s')+' Ulangi Foto</button>'+
        '<button type="button" class="btn gh sm" data-a="abcam" style="color:#a1a1aa;border-color:rgba(255,255,255,.2)">Pilih Berkas</button>'+
      '</div>'+
    '</div>'+
    '<input type="file" id="ab-f" accept="image/*" capture="user" class="hidden" data-in="abph">'+
    '<button class="btn pri blk" id="ab-go" data-a="abgo" disabled>Kirim Absen Masuk</button>'+
    '<button type="button" class="btn gh blk sm" style="margin-top:8px" data-a="abgps">Cari Ulang Lokasi GPS</button>'+
    '<small style="display:block;text-align:center;color:var(--mut);margin-top:10px">Foto selfie tersimpan ke database &amp; otomatis terhapus setelah 2 x 24 jam untuk hemat kuota penyimpanan.</small>');
  abGps();
  startAbsenCam();
};
A.absnap=()=>{
  const video=$('#ab-video'),canvas=$('#ab-canvas'),img=$('#ab-img');
  if(!video||!video.videoWidth){$('#ab-f').click();return}
  canvas.width=video.videoWidth;canvas.height=video.videoHeight;
  const ctx=canvas.getContext('2d');
  ctx.drawImage(video,0,0,canvas.width,canvas.height);
  const data=canvas.toDataURL('image/jpeg',0.72);
  AB.foto=data;
  if(img){img.src=data;img.classList.remove('hidden')}
  if(video)video.classList.add('hidden');
  const sb=$('#ab-snap-btn'),rb=$('#ab-retake-btn');
  if(sb)sb.classList.add('hidden');
  if(rb)rb.classList.remove('hidden');
  stopAbsenCam();
  abBtn();
};
A.abretake=()=>{
  AB.foto=null;
  const video=$('#ab-video'),img=$('#ab-img');
  if(img)img.classList.add('hidden');
  if(video)video.classList.remove('hidden');
  const sb=$('#ab-snap-btn'),rb=$('#ab-retake-btn');
  if(sb)sb.classList.remove('hidden');
  if(rb)rb.classList.add('hidden');
  startAbsenCam();
  abBtn();
};
A.abcam=()=>$('#ab-f').click();
A.abgps=()=>abGps();
IN.abph=(v,el)=>{
  const f=el.files&&el.files[0];if(!f)return;
  compress(f).then(d=>{
    AB.foto=d;
    const i=$('#ab-img'),v=$('#ab-video');
    if(i){i.src=d;i.classList.remove('hidden')}
    if(v)v.classList.add('hidden');
    const sb=$('#ab-snap-btn'),rb=$('#ab-retake-btn');
    if(sb)sb.classList.add('hidden');
    if(rb)rb.classList.remove('hidden');
    stopAbsenCam();
    abBtn();
  });
};
A.abgo=()=>{
  if(!(AB.ok&&AB.foto))return;
  const jm=nowWIT().slice(11,16),late=jm>String(S.setting.jamMasuk||'08:30').slice(0,5);
  const absId='AB-'+Date.now();
  LS.s('pos_selfie_'+absId,AB.foto);
  mut('absenMasuk',{latitude:AB.lat,longitude:AB.lng,foto:{data:AB.foto}},()=>{
    S.absensi.push({absensiId:absId,tanggal:today(),userId:S.me.userId,jamMasuk:nowWIT(),fotoSelfieMasuk:AB.foto,statusMasuk:late?'TERLAMBAT':'TEPAT_WAKTU',jamPulang:'',latitude:AB.lat,longitude:AB.lng,jarakMeter:AB.d});
  });
  stopAbsenCam();
  closeModal();
  toast(late?'Absen masuk tercatat (terlambat)':'Absen masuk tercatat. Selamat bekerja!','ok');
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
const tipeLbl={PIUTANG:'Piutang',HUTANG:'Hutang',PINJAMAN_UANG:'Pinjaman uang',PINJAMAN_EMAS:'Pinjaman emas',HUTANG_EMAS:'Hutang emas supplier'};
function byrList(){return sortD(S.riwayatBayar||[])}
function byrRow(b){
  const emas=b.satuan==='gram';
  const hu=b.tipe==='HUTANG'||b.tipe==='HUTANG_EMAS';
  return '<div class="tr"><span class="ico '+(hu?'bad':'ok')+'">'+ic(hu?'up':'down')+'</span><span class="tm"><b>'+esc(b.namaPihak||'-')+'</b><small class="meta">'+
    esc([tipeLbl[b.tipe]||b.tipe,tgl(b.waktu).replace(/ \d{4}$/,'')+' '+jam(b.waktu),b.catatan||'',b.catatKas?'via kas laci':''].filter(Boolean).join(' · '))+'</small></span>'+
    '<span class="ta"><b>'+(emas?gr(b.jumlah):rp(b.jumlah))+'</b>'+(b.tipe==='HUTANG_EMAS'?'<small>murni</small>':'')+'</span></div>';
}
P.piutang=function(){
  const ph=(S.piutang||[]).filter(x=>x.jenis===PT),pj=S.pinjaman||[];
  const tab='<div class="seg fill" style="margin-bottom:14px">'+[['PIUTANG','Piutang'],['HUTANG','Hutang'],['PINJAMAN','Pinjaman'],['RIWAYAT','Riwayat']].map(x=>'<button class="'+(PT===x[0]?'on':'')+'" data-a="pt" data-v="'+x[0]+'">'+x[1]+'</button>').join('')+'</div>';
  const totP=(S.piutang||[]).filter(x=>x.jenis==='PIUTANG').reduce((s,x)=>s+x.sisa,0),totH=(S.piutang||[]).filter(x=>x.jenis==='HUTANG').reduce((s,x)=>s+x.sisa,0);
  const totPjU=pj.filter(x=>x.satuan!=='gram').reduce((s,x)=>s+x.sisa,0),totPjE=pj.filter(x=>x.satuan==='gram').reduce((s,x)=>s+x.sisa,0);
  const nB=r=>(S.riwayatBayar||[]).filter(b=>b.refId===r).length;
  const kartu=(id,nama,info,sisa,total,pct,lunas,aksi,av)=>'<div class="pt-item" data-a="ptdet" data-v="'+esc(id)+'"><div class="pt-top"><span class="tm"><b>'+esc(nama)+'</b><small>'+info+'</small></span><span class="ta"><b>'+sisa+'</b><small>dari '+total+'</small></span></div>'+
    '<div class="track"><i style="width:'+pct+'%"></i></div><div class="pt-foot"><span class="tag '+(lunas?'ok':'warn')+'">'+(lunas?'LUNAS':'BELUM LUNAS')+'</span>'+(av?'<small>'+av+'</small>':'')+(lunas?'':'<button class="btn xs pri" data-a="'+aksi+'" data-v="'+esc(id)+'">'+(aksi==='pjb'?'Catat Kembali':'Catat Bayar')+'</button>')+'</div></div>';
  let body;
  if(PT==='RIWAYAT'){const L=byrList();body=L.length?batas('byr',L,20,byrRow):empty('Belum ada riwayat pembayaran.');}
  else if(PT==='PINJAMAN')body=pj.length?pj.slice().sort((a,b)=>(a.status==='LUNAS')-(b.status==='LUNAS')).map(x=>kartu(x.pinjamanId,x.namaPihak,(x.satuan==='gram'?'Emas':'Uang')+(x.jatuhTempo?' · jatuh tempo '+tgl(x.jatuhTempo):''),x.satuan==='gram'?gr(x.sisa):rp(x.sisa),x.satuan==='gram'?gr(x.jumlah):rp(x.jumlah),Math.round(x.terbayar/(x.jumlah||1)*100),x.status==='LUNAS','pjb',nB(x.pinjamanId)?nB(x.pinjamanId)+'× pengembalian':'')).join(''):empty('Belum ada pinjaman.');
  else body=ph.length?ph.slice().sort((a,b)=>(a.status==='LUNAS')-(b.status==='LUNAS')||String(a.jatuhTempo||'9').localeCompare(String(b.jatuhTempo||'9'))).map(x=>{const telat=x.status!=='LUNAS'&&x.jatuhTempo&&x.jatuhTempo<today();
      return kartu(x.recordId,x.namaPihak,(x.jatuhTempo?(telat?'<b style="color:var(--bad)">Lewat jatuh tempo '+tgl(x.jatuhTempo)+'</b>':'Jatuh tempo '+tgl(x.jatuhTempo)):'Tanpa jatuh tempo'),rp(x.sisa),rp(x.total),Math.round(x.terbayar/(x.total||1)*100),x.status==='LUNAS','ptb',nB(x.recordId)?nB(x.recordId)+'× pembayaran':'')}).join(''):empty('Belum ada catatan.');
  return '<div class="ph"><div><h1>Piutang, Hutang &amp; Pinjaman</h1><p>Ketuk catatan untuk melihat riwayat pembayarannya.</p></div>'+(PT==='RIWAYAT'?'':'<button class="btn pri" data-a="ptadd">'+ic('plus','s')+' Tambah</button>')+'</div>'+
   '<div class="grid g4 kpi-row" style="margin-bottom:16px">'+kpi('Piutang belum dibayar',rp(totP),'<small>akan diterima</small>','down')+kpi('Hutang toko',rp(totH),'<small>kewajiban</small>','up')+kpi('Pinjaman uang',rp(totPjU),'<small>sisa</small>','wallet')+kpi('Pinjaman emas',gr(totPjE),'<small>sisa</small>','gem')+'</div>'+
   '<div class="card">'+tab+body+'</div>';
};
A.pt=v=>{PT=v;RJ='';render()};
A.ptadd=()=>PT==='PINJAMAN'?F.pinjaman():F.piutang(PT==='RIWAYAT'?'PIUTANG':PT);
A.ptdet=(v,el,e)=>{
  if(e&&e.target&&e.target.closest('[data-a="ptb"],[data-a="pjb"]'))return;
  const r=(S.piutang||[]).find(x=>x.recordId===v)||(S.pinjaman||[]).find(x=>x.pinjamanId===v);if(!r)return;
  const emas=r.satuan==='gram',tot=r.total!=null?r.total:r.jumlah,f=x=>emas?gr(x):rp(x);
  const L=byrList().filter(b=>b.refId===v);
  modal('Riwayat '+(tipeLbl[r.jenis]||'Catatan'),
    '<div class="mini" style="margin-bottom:12px"><small>'+esc(r.namaPihak)+(r.telepon?' · '+esc(r.telepon):'')+'</small><div class="big">Sisa '+f(r.sisa)+'</div><small>Total '+f(tot)+' · terbayar '+f(r.terbayar)+(r.jatuhTempo?' · jatuh tempo '+tgl(r.jatuhTempo):'')+'</small>'+(r.catatan?'<small style="display:block;margin-top:4px">'+esc(r.catatan)+'</small>':'')+'</div>'+
    '<div class="tr"><span class="ico gold">'+ic('file')+'</span><span class="tm"><b>Catatan dibuat</b><small>'+tgl(r.createdAt)+' '+jam(r.createdAt)+'</small></span><span class="ta"><b>'+f(tot)+'</b></span></div>'+
    (L.length?L.slice().reverse().map(byrRow).join(''):'')+
    (L.length?'':empty('Belum ada pembayaran tercatat.'))+
    (r.status==='LUNAS'?'':'<button class="btn pri blk" style="margin-top:12px" data-a="'+(r.recordId?'ptb':'pjb')+'" data-v="'+esc(v)+'">'+(r.recordId?'Catat Pembayaran':'Catat Pengembalian')+'</button>'));
};
F.piutang=function(jenis){
  openForm({title:'Tambah '+(jenis==='HUTANG'?'Hutang':'Piutang'),fields:[{k:'namaPihak',l:jenis==='HUTANG'?'Nama supplier / pihak':'Nama pelanggan / pihak',req:1},{k:'total',l:'Nominal total',t:'rp',req:1},{k:'jatuhTempo',l:'Jatuh tempo',t:'date'},{k:'catatan',l:'Catatan',t:'ta'}],
   fn:v=>{mut('piutangSimpan',Object.assign({jenis:jenis},v),id=>{S.piutang.push({recordId:'TMP-'+id,jenis:jenis,namaPihak:v.namaPihak,total:v.total,terbayar:0,sisa:v.total,jatuhTempo:v.jatuhTempo,status:'BELUM_LUNAS',catatan:v.catatan})});toast('Tersimpan','ok')}});
};
A.ptb=v=>{const r=S.piutang.find(x=>x.recordId===v);if(!r)return;
  openForm({title:'Pembayaran '+(r.jenis==='PIUTANG'?'Piutang':'Hutang'),ok:'Catat Pembayaran',pre:'<div class="mini" style="margin-bottom:14px"><small>'+esc(r.namaPihak)+'</small><div class="big">Sisa '+rp(r.sisa)+'</div></div>',
   fields:[{k:'nominal',l:'Nominal dibayar',t:'rp',req:1,v:r.sisa},{k:'catatan',l:'Keterangan (opsional)'},{k:'catatKas',l:r.jenis==='PIUTANG'?'Catat sebagai kas masuk laci':'Catat sebagai kas keluar laci',t:'chk',v:true}],
   fn:x=>{if(x.nominal>r.sisa)return 'Melebihi sisa '+rp(r.sisa);if(x.catatKas&&r.jenis==='HUTANG'&&!kasOK(x.nominal))return 'Saldo kas laci tidak cukup.';
    mut('piutangBayar',{recordId:r.recordId,nominal:x.nominal,catatKas:x.catatKas,catatan:x.catatan},id=>{r.terbayar+=x.nominal;r.sisa-=x.nominal;if(r.sisa<=0)r.status='LUNAS';(S.riwayatBayar=S.riwayatBayar||[]).push({bayarId:'TMP-'+id,refId:r.recordId,tipe:r.jenis,namaPihak:r.namaPihak,jumlah:x.nominal,satuan:'Rp',catatKas:x.catatKas,catatan:x.catatan,waktu:nowWIT(),operatorId:S.me.userId});if(x.catatKas)pushKas(r.jenis==='PIUTANG'?'MASUK':'KELUAR',x.nominal,'BAYAR_'+r.jenis,r.recordId)});toast('Pembayaran dicatat','ok')}})};
F.pinjaman=function(){
  openForm({title:'Tambah Pinjaman',fields:[{k:'jenis',l:'Jenis',t:'select',o:[['PINJAMAN_UANG','Uang (Rupiah)'],['PINJAMAN_EMAS','Emas (Gram)']]},{k:'namaPihak',l:'Nama peminjam',req:1},{k:'jumlah',l:'Jumlah (Rp atau gram sesuai jenis)',t:'num',req:1,h:'Uang: tulis angka penuh, mis. 5000000. Emas: gram, mis. 12,5'},{k:'jatuhTempo',l:'Jatuh tempo',t:'date'},{k:'catatan',l:'Catatan',t:'ta'}],
   fn:v=>{mut('pinjamanSimpan',v,id=>{S.pinjaman.push({pinjamanId:'TMP-'+id,jenis:v.jenis,namaPihak:v.namaPihak,jumlah:v.jumlah,terbayar:0,sisa:v.jumlah,satuan:v.jenis==='PINJAMAN_EMAS'?'gram':'Rp',jatuhTempo:v.jatuhTempo,status:'AKTIF',catatan:v.catatan})});toast('Pinjaman dicatat','ok')}});
};
A.pjb=v=>{const r=S.pinjaman.find(x=>x.pinjamanId===v);if(!r)return;
  openForm({title:'Pengembalian Pinjaman',ok:'Catat',pre:'<div class="mini" style="margin-bottom:14px"><small>'+esc(r.namaPihak)+'</small><div class="big">Sisa '+(r.satuan==='gram'?gr(r.sisa):rp(r.sisa))+'</div></div>',fields:[{k:'jumlah',l:'Jumlah dikembalikan ('+r.satuan+')',t:'num',req:1,v:r.sisa},{k:'catatan',l:'Keterangan (opsional)'}],
   fn:x=>{if(x.jumlah>r.sisa+1e-9)return 'Melebihi sisa.';mut('pinjamanBayar',{pinjamanId:r.pinjamanId,jumlah:x.jumlah,catatan:x.catatan},id=>{r.terbayar=Math.round((r.terbayar+x.jumlah)*1000)/1000;r.sisa=Math.round((r.jumlah-r.terbayar)*1000)/1000;if(r.sisa<=0)r.status='LUNAS';(S.riwayatBayar=S.riwayatBayar||[]).push({bayarId:'TMP-'+id,refId:r.pinjamanId,tipe:r.jenis,namaPihak:r.namaPihak,jumlah:x.jumlah,satuan:r.satuan,catatKas:false,catatan:x.catatan,waktu:nowWIT(),operatorId:S.me.userId})});toast('Tercatat','ok')}})};

/* ============ PERSETUJUAN ============ */
P.approval=function(){
  const pd=pending(),done=sortD(S.approval.filter(a=>a.status!=='MENUNGGU').map(a=>Object.assign({waktu:a.createdAt},a))).slice(0,15);
  return '<div class="ph"><div><h1>Pusat Persetujuan</h1><p>Pembatalan, edit & hapus nota oleh karyawan, pengeluaran ≥ '+rp(S.setting.limitApproval)+', dan izin karyawan.</p></div><button class="btn pri" data-a="tugas">'+ic('msg','s')+' Kirim Tugas / Pesan</button></div><div class="grid g2"><div class="card"><div class="hd"><h3>Menunggu Keputusan '+(pd.length?'<span class="pill bad">'+pd.length+'</span>':'')+'</h3></div>'+(pd.length?pd.map(a=>apItem(a,1)).join(''):empty('Semua pengajuan sudah diproses.'))+'</div><div class="card"><div class="hd"><h3>Riwayat Keputusan</h3></div>'+(done.length?done.map(a=>apItem(a,0)).join(''):empty('Belum ada.'))+'</div></div>';
};
A.apr=v=>{
  const p=v.split('|'),a=S.approval.find(x=>x.approvalId===p[0]);if(!a||a.status!=='MENUNGGU')return;const ok=p[1]==='SETUJU',t=S.trx.find(x=>x.transaksiId===a.referensiId);
  if(ok&&t&&a.jenis==='PENGELUARAN_OPS_BESAR'&&t.metodeBayar==='TUNAI'&&!kasOK(t.nominal)){toast('Saldo kas laci tidak cukup untuk menyetujui','err');return}
  if(ok&&t&&a.jenis==='PEMBATALAN_TRX'&&isJual(t)&&t.metodeBayar==='TUNAI'&&!kasOK(t.nominal)){toast('Saldo kas laci tidak cukup untuk membatalkan','err');return}
  mut('approvalProses',{approvalId:a.approvalId,keputusan:p[1]},()=>{
    a.status=ok?'DISETUJUI':'DITOLAK';
    if(a.jenis==='PEMBATALAN_TRX'&&t){if(ok){t.status='DIBATALKAN';localEfek(t,-1)}else t.status='AKTIF'}
    else if(a.jenis==='PENGELUARAN_OPS_BESAR'&&t){if(ok){t.status='AKTIF';localEfek(t,1)}else t.status='DIBATALKAN'}
    else if(a.jenis==='IZIN'){const i=S.izin.find(x=>x.izinId===a.referensiId);if(i)i.status=ok?'DISETUJUI':'DITOLAK'}
    else if(a.jenis==='HAPUS_TRX'&&t&&ok){localEfek(t,-1);S.trx.splice(S.trx.indexOf(t),1)}
    else if(a.jenis==='EDIT_TRX'&&t&&ok&&a.data&&a.data.vals){if(live(t))localEfek(t,-1);Object.assign(t,a.data.vals);if(live(t))localEfek(t,1)}});
  toast(ok?'Pengajuan disetujui':'Pengajuan ditolak','ok');
};

/* ============ TRANSAKSI: FORM, STRUK, BATAL ============ */
const KATS=['Sedekah Jumat','Infaq Masjid','Santunan Anak Yatim','Zakat','Bantuan Sosial','Sedekah Lainnya'];
const BARANG=['Kalung','Cincin','Gelang','Anting','Liontin','Bar/Batangan','Lainnya'],KATJ=['Jasa Patri','Jasa Sepuh','Servis & Cuci Perhiasan','Ganti Mata / Pasang Batu','Pendapatan Titipan','Pemasukan Lain-lain'],KATO=['Listrik & Air','Konsumsi','Kebersihan','Transport','Beli Bahan Baku','Lainnya'],KADAR={EMAS:['875','700','750','375','999'],PERAK:['925','999']};
function compress(file){
  return new Promise((res,rej)=>{
    if(!file)return rej(new Error('File kosong'));
    const reader=new FileReader();
    reader.onerror=()=>{toast('Gagal membaca file foto','err');rej(new Error('Read error'))};
    reader.onload=()=>{
      const img=new Image();
      img.onerror=()=>{toast('Format foto tidak didukung browser','err');rej(new Error('Img error'))};
      img.onload=()=>{
        let w=img.width,h=img.height;
        const maxDim=800;
        const scale=Math.min(1,maxDim/Math.max(w,h));
        w=Math.max(1,Math.round(w*scale));
        h=Math.max(1,Math.round(h*scale));
        const c=document.createElement('canvas');
        c.width=w;c.height=h;
        const ctx=c.getContext('2d');
        ctx.fillStyle='#ffffff';
        ctx.fillRect(0,0,w,h);
        ctx.drawImage(img,0,0,w,h);
        let q=0.75;
        let d=c.toDataURL('image/jpeg',q);
        while(d.length*0.75>120000&&q>0.35){
          q-=0.1;
          d=c.toDataURL('image/jpeg',q);
        }
        res(d);
      };
      img.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}
function getDaftarKadar(){
  if(S && S.setting && S.setting.daftarKadar && Array.isArray(S.setting.daftarKadar) && S.setting.daftarKadar.length){
    return S.setting.daftarKadar;
  }
  const s = (S && S.setting) || {};
  const base700 = s.hargaKadar700 || 1200000;
  const basePerak = s.spotPerak || 16000;
  return [
    { logam:'EMAS', kadar:'375', nama:'Kadar 375 (9K)', hargaJual: Math.round(base700*375/700), hargaBuyback: Math.round(base700*375/700*0.9) },
    { logam:'EMAS', kadar:'700', nama:'Kadar 700 (16K)', hargaJual: base700, hargaBuyback: Math.round(base700*0.9) },
    { logam:'EMAS', kadar:'750', nama:'Kadar 750 (17K / 18K)', hargaJual: Math.round(base700*750/700), hargaBuyback: Math.round(base700*750/700*0.9) },
    { logam:'EMAS', kadar:'875', nama:'Kadar 875 (20K / 21K)', hargaJual: Math.round(base700*875/700), hargaBuyback: Math.round(base700*875/700*0.9) },
    { logam:'EMAS', kadar:'999', nama:'Kadar 999 (24K Murni)', hargaJual: Math.round(base700*999/700), hargaBuyback: Math.round(base700*999/700*0.9) },
    { logam:'PERAK', kadar:'925', nama:'Perak 925 (Sterling)', hargaJual: Math.round(basePerak*0.925), hargaBuyback: Math.round(basePerak*0.925*0.85) },
    { logam:'PERAK', kadar:'999', nama:'Perak Murni 999', hargaJual: basePerak, hargaBuyback: Math.round(basePerak*0.85) }
  ];
}

const hargaGr=(l,k,j)=>{
  const list = getDaftarKadar();
  const found = list.find(x => x.logam === l && String(x.kadar) === String(k));
  if(found){
    return j === 'BUYBACK' ? (found.hargaBuyback || Math.round(found.hargaJual*0.9)) : found.hargaJual;
  }
  const s = S.setting || {};
  let h = l === 'EMAS' ? (s.hargaKadar700||1200000) * (+k) / 700 : (s.spotPerak||16000) * (+k) / 1000;
  if(j === 'BUYBACK') h *= 0.9;
  return Math.round(h);
};

function est(){
  const j=TF.jenis,h=$('#tf-h');if(!h)return;if(j!=='PENJUALAN'&&j!=='BUYBACK'){h.textContent='';return}
  const hg=hargaGr(TF.logam,$('#tf-kd').value,j);h.textContent='Harga acuan '+rp(hg)+'/gr'+(j==='BUYBACK'?' (buyback 90%)':'')+'. Nominal bisa diubah manual.';
  const b=numG($('#tf-b').value);if(!TF.manual&&b>0)$('#tf-n').value='Rp. '+nf.format(Math.round(b*hg/1000)*1000);
}
IN.est=()=>est();IN.nom=()=>{TF.manual=true};

/* Multi-Photo Evidence (Maks 3 Foto Kotak Mini) */
function renderPhotoBox(){
  const box=$('#tf-photo-list');if(!box)return;
  const isReq=TF.metode==='TRANSFER'||TF.metode==='QRIS'||TF.jenis==='BUYBACK'||TF.jenis==='TUKAR_TAMBAH';
  const lbl=$('#tf-photo-lbl');
  if(lbl){
    const reqText=TF.metode==='TRANSFER'||TF.metode==='QRIS'?TF.metode:(TF.jenis==='TUKAR_TAMBAH'?'Nota, KTP & Foto Perhiasan Lama':'Nota, KTP & Perhiasan');
    lbl.innerHTML=(isReq?'<b style="color:#b91c1c">Foto Bukti '+reqText+' (Wajib) *</b>':'Foto Bukti Transaksi (Opsional)')+' <small style="color:var(--mut)">('+(TF.fotos||[]).length+'/3 Foto)</small>';
  }
  const ft=TF.fotos||[];
  let html=ft.map((d,i)=>
    '<div class="photo-thumb-item">'+
      '<img src="'+esc(d)+'" alt="Bukti '+(i+1)+'">'+
      '<button type="button" class="photo-thumb-del" data-a="delfoto" data-v="'+i+'" title="Hapus foto">&times;</button>'+
    '</div>'
  ).join('');
  if(TF.uploading){
    html+='<div class="photo-thumb-item" style="display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--cv);border:1.5px dashed var(--gold);color:var(--gold);font-size:11px;gap:4px">'+ic('loader','s')+'<span>Proses…</span></div>';
  }
  if(!TF.uploading&&ft.length<3){
    html+='<div class="photo-add-wrap">'+
      '<button type="button" class="photo-add-btn" data-a="tfcam">'+ic('camera','s')+'<span>Kamera</span></button>'+
      '<button type="button" class="photo-add-btn" data-a="tffile">'+ic('upload','s')+'<span>Pilih File</span></button>'+
    '</div>';
  }
  box.innerHTML=html;
}
A.tfcam=()=>$('#tf-fc').click();
A.tffile=()=>$('#tf-ff').click();
A.delfoto=v=>{if(TF.fotos){TF.fotos.splice(+v,1);renderPhotoBox()}};
IN.tfph=(v,el)=>{
  const f=el.files&&el.files[0];if(!f)return;
  if(!TF.fotos)TF.fotos=[];
  if(TF.fotos.length>=3){
    try{el.value=''}catch(e){}
    toast('Maksimal 3 foto bukti transaksi','warn');
    return;
  }
  TF.uploading=true;
  renderPhotoBox();
  const btnSub=$('#ftrx button[type="submit"]');
  if(btnSub){btnSub.disabled=true;btnSub.dataset.origText=btnSub.textContent;btnSub.textContent='Memproses foto…'}
  compress(f).then(d=>{
    try{el.value=''}catch(e){}
    TF.uploading=false;
    if(TF.fotos.indexOf(d)===-1&&TF.fotos.length<3){
      TF.fotos.push(d);
    }
    renderPhotoBox();
    toast('Foto berhasil diunggah ('+TF.fotos.length+'/3)','ok');
  }).catch(()=>{
    try{el.value=''}catch(e){}
    TF.uploading=false;
    renderPhotoBox();
    toast('Gagal memproses foto, silakan coba lagi','err');
  }).finally(()=>{
    if(btnSub){btnSub.disabled=false;btnSub.textContent=btnSub.dataset.origText||'Simpan Transaksi'}
  });
};

/* Tukar Tambah Logic */
function ttInit(){
  const bK=$('#tt_b_jenis'),lK=$('#tt_l_jenis');
  if(bK&&!bK.children.length){bK.innerHTML=BARANG.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join('')}
  if(lK&&!lK.children.length){lK.innerHTML=['Kalung','Cincin','Gelang','Anting','Liontin','Rongsok / Patah','Batangan','Lainnya'].map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join('')}
  ttUpdateKadar();
  ttCalc();
}
function ttUpdateKadar(){
  const bKd=$('#tt_b_kadar'),lKd=$('#tt_l_kadar');
  if(bKd){
    const pb=bKd.value;
    bKd.innerHTML=KADAR[TF.tt.b_logam].map(x=>'<option value="'+x+'">'+x+'</option>').join('');
    if(pb&&KADAR[TF.tt.b_logam].includes(pb))bKd.value=pb;
    else if(TF.tt.b_logam==='EMAS')bKd.value='875';
  }
  if(lKd){
    const pl=lKd.value;
    lKd.innerHTML=KADAR[TF.tt.l_logam].map(x=>'<option value="'+x+'">'+x+'</option>').join('');
    if(pl&&KADAR[TF.tt.l_logam].includes(pl))lKd.value=pl;
    else if(TF.tt.l_logam==='EMAS')lKd.value='875';
  }
}
function ttCalc(){
  if(TF.jenis!=='TUKAR_TAMBAH')return;
  const bLogam=TF.tt.b_logam,lLogam=TF.tt.l_logam;
  const bKadar=$('#tt_b_kadar')?$('#tt_b_kadar').value:(bLogam==='EMAS'?'875':'925');
  const lKadar=$('#tt_l_kadar')?$('#tt_l_kadar').value:(lLogam==='EMAS'?'875':'925');
  const bBerat=$('#tt_b_berat')?numG($('#tt_b_berat').value):0;
  const lBerat=$('#tt_l_berat')?numG($('#tt_l_berat').value):0;

  const hgBaru=hargaGr(bLogam,bKadar,'PENJUALAN');
  const hgLama=hargaGr(lLogam,lKadar,'BUYBACK');
  const bHargaInp=$('#tt_b_harga_gr'),lHargaInp=$('#tt_l_harga_gr');

  if(bHargaInp&&!TF.tt.b_manual)bHargaInp.value=rp(hgBaru);
  if(lHargaInp&&!TF.tt.l_manual)lHargaInp.value=rp(hgLama);

  const hBaruVal=bHargaInp?rpVal(bHargaInp.value):hgBaru;
  const hLamaVal=lHargaInp?rpVal(lHargaInp.value):hgLama;
  const bOngkos=$('#tt_b_ongkos')?rpVal($('#tt_b_ongkos').value):0;
  const lPotongan=$('#tt_l_potongan')?rpVal($('#tt_l_potongan').value):0;

  /* Hitung subtotal otomatis */
  let autoTotalBaru=Math.round(bBerat*hBaruVal)+bOngkos;
  let autoTotalLama=Math.max(0,Math.round(lBerat*hLamaVal)-lPotongan);

  /* Cek apakah total di-override manual */
  const bTotalInp=$('#tt_b_total_manual'),lTotalInp=$('#tt_l_total_manual');
  let totalBaru=autoTotalBaru,totalLama=autoTotalLama;
  if(bTotalInp&&TF.tt.b_total_manual){
    const mv=rpVal(bTotalInp.value);
    if(mv>0)totalBaru=mv;
  }else if(bTotalInp){
    bTotalInp.value=rp(autoTotalBaru);
  }
  if(lTotalInp&&TF.tt.l_total_manual){
    const mv=rpVal(lTotalInp.value);
    if(mv>0)totalLama=mv;
  }else if(lTotalInp){
    lTotalInp.value=rp(autoTotalLama);
  }

  const sisa=totalBaru-totalLama;

  if($('#tt_b_subtotal'))$('#tt_b_subtotal').textContent=rp(totalBaru);
  if($('#tt_l_subtotal'))$('#tt_l_subtotal').textContent=rp(totalLama);
  if($('#tt_sum_baru'))$('#tt_sum_baru').textContent=rp(totalBaru);
  if($('#tt_sum_lama'))$('#tt_sum_lama').textContent='- '+rp(totalLama);
  if($('#tt_sum_extra'))$('#tt_sum_extra').textContent='Ongkos +'+rpS(bOngkos)+' · Potongan -'+rpS(lPotongan);

  const valEl=$('#tt_val_sisa'),lblEl=$('#tt_lbl_sisa'),subEl=$('#tt_sub_sisa');
  if(valEl&&lblEl&&subEl){
    valEl.textContent=rp(Math.abs(sisa));
    if(sisa>0){
      lblEl.textContent='Pelanggan Membayar:';lblEl.style.color='#059669';valEl.style.color='#059669';
      subEl.textContent='Uang tunai / transfer masuk dari pelanggan';
    }else if(sisa<0){
      lblEl.textContent='Toko Membayar Pelanggan:';lblEl.style.color='#dc2626';valEl.style.color='#dc2626';
      subEl.textContent='Kelebihan nilai emas lama dikembalikan ke pelanggan';
    }else{
      lblEl.textContent='Tukar Tambah Pas (Rp 0):';lblEl.style.color='var(--ink)';valEl.style.color='var(--ink)';
      subEl.textContent='Nilai barang baru dan emas lama seimbang';
    }
  }
}
A.tt_b_logam=v=>{TF.tt.b_logam=v;TF.tt.b_manual=false;TF.tt.b_total_manual=false;ttUpdateKadar();ttCalc();$$('#tt_b_logam_seg button').forEach(b=>b.classList.toggle('on',b.dataset.v===v))};
A.tt_l_logam=v=>{TF.tt.l_logam=v;TF.tt.l_manual=false;TF.tt.l_total_manual=false;ttUpdateKadar();ttCalc();$$('#tt_l_logam_seg button').forEach(b=>b.classList.toggle('on',b.dataset.v===v))};
IN.tt_calc=()=>ttCalc();
IN.tt_b_manual=()=>{TF.tt.b_manual=true;TF.tt.b_total_manual=false;ttCalc()};
IN.tt_l_manual=()=>{TF.tt.l_manual=true;TF.tt.l_total_manual=false;ttCalc()};
IN.tt_b_total_manual=()=>{TF.tt.b_total_manual=true;ttCalc()};
IN.tt_l_total_manual=()=>{TF.tt.l_total_manual=true;ttCalc()};

function tfSync(){
  const j=TF.jenis,isTT=j==='TUKAR_TAMBAH',g=j==='PENJUALAN'||j==='BUYBACK';
  $$('#tf-j button').forEach(b=>b.classList.toggle('on',b.dataset.v===j));
  $$('#tf-l button').forEach(b=>b.classList.toggle('on',b.dataset.v===TF.logam));
  $$('#tf-m button').forEach(b=>b.classList.toggle('on',b.dataset.v===TF.metode));

  const stdWrap=$('#tf-std-wrap'),ttWrap=$('#tf-tt-wrap');
  if(stdWrap&&ttWrap){
    stdWrap.classList.toggle('hidden',isTT);
    ttWrap.classList.toggle('hidden',!isTT);
  }
  if(isTT){
    ttInit();
  }else{
    $('#tf-g').classList.toggle('hidden',!g);
    $('#tf-bb').classList.toggle('hidden',j!=='BUYBACK');
    $('#tf-kl').textContent=g?'Jenis Barang':j==='JASA'?'Kategori Pemasukan':j==='SEDEKAH'?'Jenis Sedekah':'Keperluan Pengeluaran';
    $('#tf-pl').textContent=j==='PENGELUARAN_OPS'?'Penerima / Supplier':j==='SEDEKAH'?'Penerima Sedekah (opsional)':j==='BUYBACK'?'Nama Penjual':'Pelanggan / Pembayar';
    const lst=g?BARANG:j==='JASA'?KATJ:j==='SEDEKAH'?KATS:KATO,k=$('#tf-k'),kc=k.value;
    k.innerHTML=lst.map(x=>'<option>'+esc(x)+'</option>').join('');
    if(lst.indexOf(kc)>=0)k.value=kc;
    const kd=$('#tf-kd'),dc=kd.value;
    kd.innerHTML=KADAR[TF.logam].map(x=>'<option>'+x+'</option>').join('');
    if(dc&&KADAR[TF.logam].indexOf(dc)>=0)kd.value=dc;
    else if(TF.logam==='EMAS')kd.value='875';
    est();
  }

  $('#tf-rw').classList.toggle('hidden',TF.metode==='TUNAI');

  // Photo Section: Always show for BUYBACK, TUKAR_TAMBAH, or when payment is TRANSFER / QRIS
  const photoSec=$('#tf-photo-sec');
  const showPhoto=j==='BUYBACK'||j==='TUKAR_TAMBAH'||TF.metode==='TRANSFER'||TF.metode==='QRIS';
  if(photoSec)photoSec.classList.toggle('hidden',!showPhoto);
  renderPhotoBox();
}

A.tfj=v=>{TF.jenis=v;TF.manual=false;tfSync()};
A.tfl=v=>{TF.logam=v;TF.manual=false;tfSync()};
A.tfm=v=>{TF.metode=v;tfSync()};

F.trx=function(j){
  TF={jenis:j||'PENJUALAN',logam:'EMAS',metode:'TUNAI',fotos:[],manual:false,tt:{b_logam:'EMAS',l_logam:'EMAS',b_manual:false,l_manual:false,b_total_manual:false,l_total_manual:false}};
  const rek=(S.setting.rekening||[]).map(r=>r.nama);
  modal('Transaksi Kasir',
    '<form id="ftrx" novalidate>'+
      '<div class="seg fill w" id="tf-j" style="margin-bottom:14px">'+
        ['PENJUALAN','BUYBACK','TUKAR_TAMBAH','JASA','PENGELUARAN_OPS','SEDEKAH'].map(k=>'<button type="button" data-a="tfj" data-v="'+k+'">'+(k==='PENGELUARAN_OPS'?'Keluar':k==='TUKAR_TAMBAH'?'Tukar':jenisLbl[k])+'</button>').join('')+
      '</div>'+
      '<div class="err hidden" id="tf-err"></div>'+

      /* ============ STANDARD FORM WRAPPER ============ */
      '<div id="tf-std-wrap">'+
        '<label class="fld"><span class="lb" id="tf-kl">Jenis Barang</span><select class="inp" name="kategori" id="tf-k"></select></label>'+
        '<div id="tf-g">'+
          '<div class="seg fill" id="tf-l" style="margin-bottom:14px"><button type="button" data-a="tfl" data-v="EMAS">Emas</button><button type="button" data-a="tfl" data-v="PERAK">Perak</button></div>'+
          '<div class="row2"><label class="fld"><span class="lb">Kadar</span><select class="inp" name="kadar" id="tf-kd" data-in="est"></select></label><label class="fld"><span class="lb">Berat</span><div class="adorn"><input class="inp" name="berat" id="tf-b" inputmode="decimal" autocomplete="off" placeholder="0,00" data-in="est"><b>gr</b></div></label></div>'+
        '</div>'+
        '<label class="fld"><span class="lb">Nominal *</span><input class="inp rp" name="nominal" id="tf-n" inputmode="numeric" autocomplete="off" placeholder="Rp. 0" data-in="nom"><small id="tf-h"></small></label>'+
        '<div id="tf-bb" class="hidden"><div class="row2"><label class="fld"><span class="lb">Barang disimpan ke</span><select class="inp" name="tujuanBarang"><option value="ETALASE">Stok etalase (dijual lagi)</option><option value="BRANKAS">Brankas emas (rusak/olah)</option><option value="TIDAK">Tidak dicatat stok</option></select></label>'+'<label class="fld"><span class="lb">Kondisi barang</span><select class="inp" name="kondisiBarang"><option value="BAIK">Baik</option><option value="RUSAK">Rusak</option><option value="KEMBAR">Model kembar</option></select></label></div></div>'+
      '</div>'+

      /* ============ TUKAR TAMBAH WRAPPER (BAGIAN A, B, C) ============ */
      '<div id="tf-tt-wrap" class="hidden">'+
        /* Bagian A: Barang Baru */
        '<div class="tt-section tt-sec-baru">'+
          '<div class="hd" style="margin-bottom:10px"><h3 style="color:#b45309;font-size:14px;display:flex;align-items:center;gap:6px">'+ic('gem','s')+' A. Barang Baru yang Dibeli Pelanggan</h3><span class="tag gold">Barang Baru</span></div>'+
          '<div class="row2">'+
            '<label class="fld"><span class="lb">Jenis Barang Baru</span><select class="inp" id="tt_b_jenis" data-in="tt_calc"></select></label>'+
            '<div class="fld"><span class="lb">Bahan Logam</span><div class="seg fill" id="tt_b_logam_seg" style="min-height:48px"><button type="button" data-a="tt_b_logam" data-v="EMAS" class="on">Emas</button><button type="button" data-a="tt_b_logam" data-v="PERAK">Perak</button></div></div>'+
          '</div>'+
          '<div class="row2">'+
            '<label class="fld"><span class="lb">Kadar</span><select class="inp" id="tt_b_kadar" data-in="tt_calc"></select></label>'+
            '<label class="fld"><span class="lb">Berat Barang Baru</span><div class="adorn"><input class="inp" id="tt_b_berat" inputmode="decimal" autocomplete="off" placeholder="0,00" data-in="tt_calc"><b>gr</b></div></label>'+
          '</div>'+
          '<div class="row2">'+
            '<label class="fld"><span class="lb">Harga Jual / gr</span><input class="inp rp" id="tt_b_harga_gr" inputmode="numeric" autocomplete="off" placeholder="Rp 0" data-in="tt_b_manual"></label>'+
            '<label class="fld"><span class="lb">Ongkos / Biaya Tambahan</span><input class="inp rp" id="tt_b_ongkos" inputmode="numeric" autocomplete="off" placeholder="Rp 0" data-in="tt_calc"></label>'+
          '</div>'+
          '<label class="fld" style="margin-top:6px"><span class="lb" style="color:#b45309;font-weight:700">✏️ Total Harga Barang Baru (bisa diubah manual)</span><input class="inp rp" id="tt_b_total_manual" inputmode="numeric" autocomplete="off" placeholder="Rp 0" data-in="tt_b_total_manual"></label>'+
          '<div style="background:#fff;border:1px solid var(--ln);border-radius:10px;padding:9px 12px;display:flex;justify-content:space-between;align-items:center">'+
            '<span style="font-size:12px;color:var(--mut)">Total Harga Barang Baru:</span><b id="tt_b_subtotal" style="font-size:15px;color:var(--ink)">Rp 0</b>'+
          '</div>'+
        '</div>'+

        /* Bagian B: Emas Lama */
        '<div class="tt-section tt-sec-lama">'+
          '<div class="hd" style="margin-bottom:10px"><h3 style="color:#c2410c;font-size:14px;display:flex;align-items:center;gap:6px">'+ic('undo','s')+' B. Emas / Perak Lama Milik Pelanggan</h3><span class="tag bad">Diterima Toko</span></div>'+
          '<div class="row2">'+
            '<label class="fld"><span class="lb">Jenis Barang Lama</span><select class="inp" id="tt_l_jenis" data-in="tt_calc"></select></label>'+
            '<div class="fld"><span class="lb">Bahan Logam</span><div class="seg fill" id="tt_l_logam_seg" style="min-height:48px"><button type="button" data-a="tt_l_logam" data-v="EMAS" class="on">Emas</button><button type="button" data-a="tt_l_logam" data-v="PERAK">Perak</button></div></div>'+
          '</div>'+
          '<div class="row2">'+
            '<label class="fld"><span class="lb">Kadar Pemeriksaan</span><select class="inp" id="tt_l_kadar" data-in="tt_calc"></select></label>'+
            '<label class="fld"><span class="lb">Berat Barang Lama</span><div class="adorn"><input class="inp" id="tt_l_berat" inputmode="decimal" autocomplete="off" placeholder="0,00" data-in="tt_calc"><b>gr</b></div></label>'+
          '</div>'+
          '<div class="row2">'+
            '<label class="fld"><span class="lb">Harga Buyback / gr</span><input class="inp rp" id="tt_l_harga_gr" inputmode="numeric" autocomplete="off" placeholder="Rp 0" data-in="tt_l_manual"></label>'+
            '<label class="fld"><span class="lb">Potongan / Biaya Lebur</span><input class="inp rp" id="tt_l_potongan" inputmode="numeric" autocomplete="off" placeholder="Rp 0" data-in="tt_calc"></label>'+
          '</div>'+
          '<div class="row2"><label class="fld"><span class="lb">Barang lama disimpan ke</span><select class="inp" id="tt_l_tujuan"><option value="ETALASE">Stok etalase</option><option value="BRANKAS">Brankas emas</option><option value="TIDAK">Tidak dicatat stok</option></select></label><label class="fld"><span class="lb">Kondisi</span><select class="inp" id="tt_l_kondisi"><option value="BAIK">Baik</option><option value="RUSAK">Rusak</option><option value="KEMBAR">Model kembar</option></select></label></div>'+
          '<label class="fld" style="margin-top:6px"><span class="lb" style="color:#c2410c;font-weight:700">✏️ Total Nilai Barang Lama (bisa diubah manual)</span><input class="inp rp" id="tt_l_total_manual" inputmode="numeric" autocomplete="off" placeholder="Rp 0" data-in="tt_l_total_manual"></label>'+
          '<div style="background:#fff;border:1px solid var(--ln);border-radius:10px;padding:9px 12px;display:flex;justify-content:space-between;align-items:center">'+
            '<span style="font-size:12px;color:var(--mut)">Total Nilai Barang Lama:</span><b id="tt_l_subtotal" style="font-size:15px;color:#c2410c">Rp 0</b>'+
          '</div>'+
        '</div>'+

        /* Bagian C: Ringkasan Sisa */
        '<div class="tt-section tt-sec-sum">'+
          '<div class="hd" style="margin-bottom:8px"><h3 style="font-size:14px">'+ic('calc','s')+' C. Ringkasan &amp; Sisa Transaksi</h3></div>'+
          '<div class="tt-summary-box">'+
            '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px"><span>Total Harga Barang Baru:</span><b id="tt_sum_baru">Rp 0</b></div>'+
            '<div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px"><span>Nilai Emas/Perak Lama:</span><b id="tt_sum_lama" style="color:#c2410c">- Rp 0</b></div>'+
            '<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--mut);margin-bottom:8px"><span>Rincian Penyesuaian:</span><span id="tt_sum_extra">Ongkos Rp 0 · Potongan Rp 0</span></div>'+
            '<div style="border-top:1.5px dashed var(--ln);padding-top:10px;display:flex;justify-content:space-between;align-items:center">'+
              '<div><b id="tt_lbl_sisa" style="font-size:14px">Sisa Pembayaran:</b><small id="tt_sub_sisa" style="display:block;color:var(--mut);font-size:11px">Pelanggan membayar kekurangan</small></div>'+
              '<div id="tt_val_sisa" style="font-size:20px;font-weight:800;color:var(--ink)">Rp 0</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+

      /* ============ METODE PEMBAYARAN & KELENGKAPAN ============ */
      '<div class="lbl" style="margin:10px 0 6px">Metode Pembayaran</div>'+
      '<div class="seg fill w" id="tf-m" style="margin-bottom:14px">'+['TUNAI','TRANSFER','QRIS','EDC'].map(k=>'<button type="button" data-a="tfm" data-v="'+k+'">'+k+'</button>').join('')+'</div>'+
      '<label class="fld hidden" id="tf-rw"><span class="lb">Rekening Tujuan</span><select class="inp" name="rekening">'+(rek.length?rek:['REKENING']).map(r=>'<option>'+esc(r)+'</option>').join('')+'</select></label>'+
      '<label class="fld"><span class="lb" id="tf-pl">Pelanggan</span><input class="inp" name="pelanggan" autocomplete="off" placeholder="Nama pelanggan" list="dl-pel" data-in="pelpick"></label>'+
      '<datalist id="dl-pel">'+pelangganList().map(p=>'<option value="'+esc(p.nama)+'">'+esc(p.hp)+'</option>').join('')+'</datalist>'+
      '<div class="row2" style="gap:10px"><label class="fld"><span class="lb">No. HP / WA</span><input class="inp" name="teleponPelanggan" inputmode="tel" autocomplete="off" placeholder="08…"></label>'+
      '<label class="fld"><span class="lb">Alamat</span><input class="inp" name="alamatPelanggan" autocomplete="off" placeholder="Alamat singkat"></label></div>'+
      '<label class="fld"><span class="lb">Catatan</span><input class="inp" name="catatan" autocomplete="off" placeholder="Catatan transaksi opsional"></label>'+

      /* ============ MULTI-PHOTO EVIDENCE COMPONENT ============ */
      '<div id="tf-photo-sec" class="photo-multi-wrap hidden">'+
        '<div class="photo-multi-hdr"><div id="tf-photo-lbl" style="font-size:13px;font-weight:600">Foto Bukti Transaksi</div></div>'+
        '<div id="tf-photo-list" class="photo-grid-box"></div>'+
        '<input type="file" id="tf-fc" accept="image/*" capture="environment" class="hidden" data-in="tfph">'+
        '<input type="file" id="tf-ff" accept="image/*" class="hidden" data-in="tfph">'+
      '</div>'+

      '<button class="btn pri blk" type="submit" style="margin-top:14px;min-height:48px;font-weight:700">Simpan Transaksi</button>'+
    '</form>'
  );
  tfSync();
};

SUB.ftrx=f=>{
  const j=TF.jenis,el=f.elements,er=$('#tf-err');
  let p={},bad='';
  const isReqPhoto=TF.metode==='TRANSFER'||TF.metode==='QRIS'||j==='BUYBACK';
  if(isReqPhoto&&(!TF.fotos||!TF.fotos.length)){
    bad='Foto bukti transaksi '+(TF.metode==='TRANSFER'||TF.metode==='QRIS'?TF.metode:'nota/KTP/perhiasan')+' wajib diunggah (maks. 3 foto).';
  }

  if(j==='TUKAR_TAMBAH'){
    const bJenis=$('#tt_b_jenis')?$('#tt_b_jenis').value:'Kalung';
    const bLogam=TF.tt.b_logam;
    const bKadar=$('#tt_b_kadar')?$('#tt_b_kadar').value:(bLogam==='EMAS'?'875':'925');
    const bBerat=$('#tt_b_berat')?numG($('#tt_b_berat').value):0;
    const bHargaGr=$('#tt_b_harga_gr')?rpVal($('#tt_b_harga_gr').value):0;
    const bOngkos=$('#tt_b_ongkos')?rpVal($('#tt_b_ongkos').value):0;
    let totalBaru=Math.round(bBerat*bHargaGr)+bOngkos;
    /* Cek manual override total baru */
    if(TF.tt.b_total_manual&&$('#tt_b_total_manual')){
      const mv=rpVal($('#tt_b_total_manual').value);
      if(mv>0)totalBaru=mv;
    }

    const lJenis=$('#tt_l_jenis')?$('#tt_l_jenis').value:'Kalung';
    const lLogam=TF.tt.l_logam;
    const lKadar=$('#tt_l_kadar')?$('#tt_l_kadar').value:(lLogam==='EMAS'?'875':'925');
    const lBerat=$('#tt_l_berat')?numG($('#tt_l_berat').value):0;
    const lHargaGr=$('#tt_l_harga_gr')?rpVal($('#tt_l_harga_gr').value):0;
    const lPotongan=$('#tt_l_potongan')?rpVal($('#tt_l_potongan').value):0;
    let totalLama=Math.max(0,Math.round(lBerat*lHargaGr)-lPotongan);
    /* Cek manual override total lama */
    if(TF.tt.l_total_manual&&$('#tt_l_total_manual')){
      const mv=rpVal($('#tt_l_total_manual').value);
      if(mv>0)totalLama=mv;
    }

    const sisa=totalBaru-totalLama;
    const pelanggan=(el.pelanggan?el.pelanggan.value:'').trim();
    const teleponPelanggan=(el.teleponPelanggan?el.teleponPelanggan.value:'').trim(), alamatPelanggan=(el.alamatPelanggan?el.alamatPelanggan.value:'').trim();
    const catatan=(el.catatan?el.catatan.value:'').trim();

    // Validasi alur Buyback: bukti nota, KTP, dan foto perhiasan wajib dilengkapi
    if(!TF.fotos||!TF.fotos.length){
      bad='Foto bukti nota, KTP pelanggan, atau perhiasan lama wajib diunggah (minimal 1 foto).';
    }else if(!(bBerat>0))bad='Berat barang baru wajib diisi (> 0 gram).';
    else if(!(totalBaru>0))bad='Total harga barang baru wajib diisi.';
    else if(!(lBerat>0))bad='Berat emas/perak lama wajib diisi (> 0 gram).';
    else if(!bad&&sisa<0&&TF.metode==='TUNAI'&&!kasOK(Math.abs(sisa))){
      bad='Saldo kas laci tidak cukup untuk mengembalikan kelebihan ke pelanggan ('+rp(S.saldo.kas)+').';
    }

    if(bad){
      er.textContent=bad;
      er.classList.remove('hidden');
      return;
    }

    // Nomor referensi tukar tambah bersama
    const refTT='TT-'+nowWIT().slice(2,10).replace(/-/g,'')+'-'+Math.random().toString(36).slice(2,6).toUpperCase();

    const bDesc=(bJenis||'Perhiasan')+' '+bLogam+' '+bKadar+'% '+gr(bBerat)+' ('+rp(totalBaru)+')';
    const lDesc=(lJenis||'Perhiasan')+' '+lLogam+' '+lKadar+'% '+gr(lBerat)+' ('+rp(totalLama)+')';
    const selisihDesc=sisa>0?'Tambah Bayar: '+rp(sisa):sisa<0?'Uang Kembali: '+rp(Math.abs(sisa)):'Pas (Rp 0)';

    const detailTT={
      refTukarTambah:refTT,
      baru:{jenisBarang:bJenis,logam:bLogam,kadar:bKadar,berat:bBerat,hargaPerGram:bHargaGr,ongkos:bOngkos,subtotal:totalBaru},
      lama:{jenisBarang:lJenis,logam:lLogam,kadar:lKadar,berat:lBerat,hargaPerGram:lHargaGr,potongan:lPotongan,subtotal:totalLama},
      nilaiBaru:totalBaru,
      nilaiLama:totalLama,
      sisaBayar:sisa
    };
    const ttTag='__TT__'+JSON.stringify(detailTT);
    const catatanBersama='[TUKAR TAMBAH #'+refTT+'] Baru: '+bDesc+' ⇄ Lama: '+lDesc+' | '+selisihDesc+(catatan?' | '+catatan:'')+' '+ttTag;

    const fotoObj=(TF.fotos&&TF.fotos[0])?{data:TF.fotos[0],name:'bukti_tt_'+Date.now()+'.jpg'}:null;
    const fotoRaw=(TF.fotos&&TF.fotos[0])||'';

    // ======================================================================
    // PENTING: Pada tukar tambah, HANYA sisa transaksi yang masuk ke
    // rekening bank / kas. Penjualan & Buyback dicatat sebagai TUNAI
    // agar tidak terjadi pencatatan ganda ke rekening bank.
    // Metode pembayaran asli (TRANSFER/QRIS/EDC) hanya dipakai untuk
    // transaksi selisih (pSelisih) saja.
    // ======================================================================
    const metodeAsli=TF.metode;
    const rekeningAsli=TF.metode==='TUNAI'?'':(el.rekening?el.rekening.value:'');

    // 1. Barang baru otomatis masuk ke riwayat Penjualan — selalu TUNAI (tanpa efek bank)
    const pJual={
      jenis:'PENJUALAN',
      logam:bLogam,
      kategori:bJenis,
      kadar:bKadar,
      berat:bBerat,
      nominal:totalBaru,
      metodeBayar:'TUNAI',
      rekening:'',
      pelanggan:pelanggan,teleponPelanggan:teleponPelanggan,alamatPelanggan:alamatPelanggan,
      catatan:catatanBersama,
      isTukarTambah:true,
      refTukarTambah:refTT,
      peranTT:'BARANG_BARU',
      detailTT:detailTT,
      tambahStok:false,
      buktiFoto:TF.fotos.slice(),
      foto:fotoObj,
      fotoNota:fotoObj,
      buktiNota:fotoObj,
      fotoRaw:fotoRaw
    };

    // 2. Emas/perak lama pelanggan otomatis masuk ke riwayat Buyback — selalu TUNAI
    const pBuyback={
      jenis:'BUYBACK',
      logam:lLogam,
      kategori:lJenis,
      kadar:lKadar,
      berat:lBerat,
      nominal:totalLama,
      metodeBayar:'TUNAI',
      rekening:'',
      pelanggan:pelanggan,teleponPelanggan:teleponPelanggan,alamatPelanggan:alamatPelanggan,
      catatan:catatanBersama,
      isTukarTambah:true,
      refTukarTambah:refTT,
      peranTT:'BARANG_LAMA',
      detailTT:detailTT,
      tujuanBarang:$('#tt_l_tujuan')?$('#tt_l_tujuan').value:'ETALASE',
      kondisiBarang:$('#tt_l_kondisi')?$('#tt_l_kondisi').value:'BAIK',
      tambahStok:!$('#tt_l_tujuan')||$('#tt_l_tujuan').value==='ETALASE',
      buktiFoto:TF.fotos.slice(),
      foto:fotoObj,
      fotoNota:fotoObj,
      buktiNota:fotoObj,
      fotoRaw:fotoRaw
    };

    // 3 & 4. Transaksi selisih — HANYA bagian ini yang memakai metode asli (TRANSFER/QRIS/EDC)
    // Sehingga yang masuk ke rekening bank HANYA sisa transaksi, bukan total penjualan/buyback.
    let pSelisih=null;
    if(sisa>0){
      // 3. Pelanggan menambah uang -> riwayat Pemasukan (HANYA INI yang masuk ke bank)
      pSelisih={
        jenis:'JASA',
        logam:'-',
        kategori:'Pemasukan Tukar Tambah',
        kadar:'',
        berat:0,
        nominal:sisa,
        metodeBayar:metodeAsli,
        rekening:rekeningAsli,
        pelanggan:pelanggan,teleponPelanggan:teleponPelanggan,alamatPelanggan:alamatPelanggan,
        catatan:catatanBersama,
        isTukarTambah:true,
        refTukarTambah:refTT,
        peranTT:'SELISIH_MASUK',
        detailTT:detailTT,
        tambahStok:false,
        buktiFoto:TF.fotos.slice(),
        foto:fotoObj,
        fotoNota:fotoObj,
        buktiNota:fotoObj,
        fotoRaw:fotoRaw
      };
    }else if(sisa<0){
      // 4. Toko mengembalikan uang -> riwayat Pengeluaran (HANYA INI yang masuk ke bank)
      pSelisih={
        jenis:'PENGELUARAN_OPS',
        logam:'-',
        kategori:'Uang Kembali Tukar Tambah',
        kadar:'',
        berat:0,
        nominal:Math.abs(sisa),
        metodeBayar:metodeAsli,
        rekening:rekeningAsli,
        pelanggan:pelanggan,teleponPelanggan:teleponPelanggan,alamatPelanggan:alamatPelanggan,
        catatan:catatanBersama,
        isTukarTambah:true,
        refTukarTambah:refTT,
        peranTT:'SELISIH_KELUAR',
        detailTT:detailTT,
        tambahStok:false,
        buktiFoto:TF.fotos.slice(),
        foto:fotoObj,
        fotoNota:fotoObj,
        buktiNota:fotoObj,
        fotoRaw:fotoRaw
      };
    }
    // 5. Jika sisa === 0, jangan membuat transaksi Pemasukan atau Pengeluaran.

    let idJual='';
    const idMutJual=mut('trxBuat',pJual,cid=>{
      idJual=cid;
      const t=Object.assign({},pJual,{
        transaksiId:'TMP-'+cid.slice(-5).toUpperCase(),
        clientId:cid,
        waktu:nowWIT(),
        stokId:'',
        operatorId:S.me.userId,
        status:'AKTIF',
        buktiTransfer:'',
        createdAt:nowWIT()
      });
      delete t.foto;
      delete t.fotoNota;
      delete t.buktiNota;
      delete t.fotoRaw;
      S.trx.push(t);
      localEfek(t,1);
    });

    mut('trxBuat',pBuyback,cid=>{
      const t=Object.assign({},pBuyback,{
        transaksiId:'TMP-'+cid.slice(-5).toUpperCase(),
        clientId:cid,
        waktu:nowWIT(),
        stokId:'',
        operatorId:S.me.userId,
        status:'AKTIF',
        buktiTransfer:'',
        createdAt:nowWIT()
      });
      delete t.foto;
      delete t.fotoNota;
      delete t.buktiNota;
      delete t.fotoRaw;
      S.trx.push(t);
      localEfek(t,1);
    });

    if(pSelisih){
      mut('trxBuat',pSelisih,cid=>{
        const t=Object.assign({},pSelisih,{
          transaksiId:'TMP-'+cid.slice(-5).toUpperCase(),
          clientId:cid,
          waktu:nowWIT(),
          stokId:'',
          operatorId:S.me.userId,
          status:'AKTIF',
          buktiTransfer:'',
          createdAt:nowWIT()
        });
        delete t.foto;
        delete t.fotoNota;
        delete t.buktiNota;
        delete t.fotoRaw;
        S.trx.push(t);
        localEfek(t,1);
      });
    }

    closeModal();
    const infoSisa=sisa>0?' (Pemasukan selisih '+rp(sisa)+' dicatat)':sisa<0?' (Pengeluaran uang kembali '+rp(Math.abs(sisa))+' dicatat)':' (Sisa pas Rp 0)';
    toast('Tukar Tambah #'+refTT+' tersimpan!'+infoSisa,'ok');
    showStruk(idJual||idMutJual);
    return;
  }

  const g=j==='PENJUALAN'||j==='BUYBACK';
  const fotoObjTrx=(TF.fotos&&TF.fotos[0])?{data:TF.fotos[0],name:'bukti_trx_'+Date.now()+'.jpg'}:null;
  const fotoRawTrx=(TF.fotos&&TF.fotos[0])||'';
  p={
    jenis:j,
    logam:g?TF.logam:'-',
    kategori:el.kategori.value,
    kadar:g?el.kadar.value:'',
    berat:g?numG(el.berat.value):0,
    nominal:rpVal(el.nominal.value),
    metodeBayar:TF.metode,
    rekening:TF.metode==='TUNAI'?'':(el.rekening.value||''),
    pelanggan:el.pelanggan.value.trim(),
    teleponPelanggan:(el.teleponPelanggan?el.teleponPelanggan.value:'').trim(),
    alamatPelanggan:(el.alamatPelanggan?el.alamatPelanggan.value:'').trim(),
    catatan:el.catatan.value.trim(),
    tujuanBarang:j==='BUYBACK'&&el.tujuanBarang?el.tujuanBarang.value:'',
    kondisiBarang:j==='BUYBACK'&&el.kondisiBarang?el.kondisiBarang.value:'',
    tambahStok:j==='BUYBACK'&&el.tujuanBarang?el.tujuanBarang.value==='ETALASE':false,
    buktiFoto:TF.fotos.slice(),
    foto:fotoObjTrx,
    fotoNota:fotoObjTrx,
    buktiNota:fotoObjTrx,
    fotoRaw:fotoRawTrx
  };
  if(!bad){
    if(g&&!(p.berat>0))bad='Berat (gram) wajib diisi.';
    else if(!(p.nominal>0))bad='Nominal wajib diisi.';
    const out=isOut(p),big=j==='PENGELUARAN_OPS'&&!isO()&&p.nominal>=S.setting.limitApproval;
    if(!bad&&out&&!big&&p.metodeBayar==='TUNAI'&&!kasOK(p.nominal))bad='Saldo kas laci tidak cukup ('+rp(S.saldo.kas)+').';
  }

  if(bad){
    er.textContent=bad;
    er.classList.remove('hidden');
    return;
  }

  const big=p.jenis==='PENGELUARAN_OPS'&&!isO()&&p.nominal>=S.setting.limitApproval;
  const id=mut('trxBuat',p,cid=>{
    const t=Object.assign({},p,{
      transaksiId:'TMP-'+cid.slice(-5).toUpperCase(),
      clientId:cid,
      waktu:nowWIT(),
      stokId:'',
      operatorId:S.me.userId,
      status:big?'PENDING_APPROVAL':'AKTIF',
      buktiTransfer:'',
      createdAt:nowWIT()
    });
    delete t.foto;
    delete t.fotoNota;
    delete t.buktiNota;
    delete t.fotoRaw;
    S.trx.push(t);
    if(big)S.approval.push({approvalId:'TMP-'+cid,jenis:'PENGELUARAN_OPS_BESAR',referensiId:t.transaksiId,pengajuId:S.me.userId,status:'MENUNGGU',ringkasan:'Pengeluaran '+rp(p.nominal)+' — '+p.kategori,createdAt:nowWIT()});
    else localEfek(t,1);
  });

  closeModal();
  if(big)toast('Pengeluaran besar dikirim ke Owner untuk persetujuan','ok');
  else{
    toast('Transaksi tersimpan','ok');
    if(j!=='PENGELUARAN_OPS'&&j!=='SEDEKAH')showStruk(id);
  }
};

/* ============ TERBILANG NOMINAL RUPIAH ============ */
function terbilang(n) {
  n = Math.floor(Math.abs(Number(n) || 0));
  const sat = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  if (n < 12) return sat[n];
  if (n < 20) return terbilang(n - 10) + ' belas';
  if (n < 100) return terbilang(Math.floor(n / 10)) + ' puluh' + (n % 10 ? ' ' + terbilang(n % 10) : '');
  if (n < 200) return 'seratus' + (n > 100 ? ' ' + terbilang(n - 100) : '');
  if (n < 1000) return terbilang(Math.floor(n / 100)) + ' ratus' + (n % 100 ? ' ' + terbilang(n % 100) : '');
  if (n < 2000) return 'seribu' + (n > 1000 ? ' ' + terbilang(n - 1000) : '');
  if (n < 1000000) return terbilang(Math.floor(n / 1000)) + ' ribu' + (n % 1000 ? ' ' + terbilang(n % 1000) : '');
  if (n < 1000000000) return terbilang(Math.floor(n / 1000000)) + ' juta' + (n % 1000000 ? ' ' + terbilang(n % 1000000) : '');
  if (n < 1000000000000) return terbilang(Math.floor(n / 1000000000)) + ' miliar' + (n % 1000000000 ? ' ' + terbilang(n % 1000000000) : '');
  return terbilang(Math.floor(n / 1000000000000)) + ' triliun' + (n % 1000000000000 ? ' ' + terbilang(n % 1000000000000) : '');
}
function terbilangRp(n) {
  const t = terbilang(n);
  return t ? t.charAt(0).toUpperCase() + t.slice(1) + ' Rupiah' : 'Nol Rupiah';
}

/* ============ CONFIG & PENGATURAN STRUK & NOTA ============ */
const DEFAULT_STRUK = {
  lebar: '58',
  namaToko: '',
  tagline: 'CABANG NABIRE - PAPUA TENGAH',
  alamat: '',
  telepon: '',
  showLogo: true,
  showKasir: true,
  showWaktu: true,
  showDetailBarang: true,
  showMetodeBayar: true,
  showQrNota: true,
  pesanTerimaKasih: 'Terima Kasih Atas Kunjungan Anda',
  kebijakan: 'Perhiasan yang dibeli dapat dijual kembali (buyback) sesuai ketentuan toko & harga pasar hari transaksi. Harap simpan nota resmi ini sebagai bukti sah kepemilikan.',
  sosialMedia: 'WA: 0821-2121-0694 • Kota Bali Nabire'
};

const DEFAULT_NOTA = {
  namaToko: 'TOKO EMAS PUTRI BALI',
  tagline: 'JUAL BELI EMAS & PERAK',
  alamat: 'PASAR OYEHE NABIRE',
  telepon: '0821-2121-0694 / 0821-1240-9240',
  sosmed: 'Kota Bali Nabire • www.kotabalinabire.com',
  perhatian1: 'Barang telah ditimbang, disaksikan oleh pembeli.',
  perhatian2: 'Barang yang kembali dipotong menurut pasaran.',
  perhatian3: 'Jika barang kembali rusak dibeli hancuran.',
  perhatian4: 'Barang yang dibeli dari 24 jam sudah dikenakan potongan 100%',
  pesanTerimaKasih: 'Terima Kasih Atas Kepercayaan Anda',
  penandaTangan: 'Kasir / Toko',
  showWatermark: true,
  showLogo: true,
  showStempel: true
};

function getStrukCfg(){
  let cfg = (S && S.setting && S.setting.struk) || {};
  if (typeof cfg === 'string') {
    try { cfg = JSON.parse(cfg); } catch(e){ cfg = {}; }
  }
  const loc = LS.g('pos_struk_config');
  if (loc) {
    try { Object.assign(cfg, JSON.parse(loc)); } catch(e){}
  }
  return Object.assign({}, DEFAULT_STRUK, {
    namaToko: (S && S.setting && S.setting.namaToko) || 'TOKO EMAS & PERAK PUTRI BALI',
    alamat: (S && S.setting && S.setting.alamatToko) || 'Jl. Merdeka No. 45, Oyehe, Nabire',
    telepon: (S && S.setting && S.setting.teleponToko) || '0812-4000-xxxx'
  }, cfg);
}

function getNotaCfg(){
  let cfg = (S && S.setting && S.setting.nota) || {};
  if (typeof cfg === 'string') {
    try { cfg = JSON.parse(cfg); } catch(e){ cfg = {}; }
  }
  const loc = LS.g('pos_nota_config');
  if (loc) {
    try { Object.assign(cfg, JSON.parse(loc)); } catch(e){}
  }
  return Object.assign({}, DEFAULT_NOTA, cfg);
}

/* ============ FUNGSI UNIVERSAL PARSER TUKAR TAMBAH ============ */
function parseTT(t) {
  if (!t) return null;
  const isTT = t.jenis === 'TUKAR_TAMBAH' || t.isTukarTambah || !!t.detailTT || (t.catatan && t.catatan.indexOf('TUKAR TAMBAH') !== -1);
  if (!isTT) return null;

  let dt = t.detailTT;
  const c = String(t.catatan || '');
  const ref = t.refTukarTambah || (dt && dt.refTukarTambah) || (c.match(/\[TUKAR TAMBAH #(TT-[^\]]+)\]/) || c.match(/#(TT-[A-Za-z0-9_-]+)/) || [])[1];

  // 1. Cek sibling di S.trx dengan ref yang sama
  if ((!dt || !dt.baru || !dt.lama) && ref && S && S.trx) {
    const sib = S.trx.find(x => (x.refTukarTambah === ref || (x.catatan && x.catatan.indexOf(ref) !== -1)) && x.detailTT && x.detailTT.baru);
    if (sib) dt = sib.detailTT;
  }

  // 2. Cek __TT__ di catatan transaksi ini
  if ((!dt || !dt.baru || !dt.lama) && c.indexOf('__TT__') !== -1) {
    try {
      const parts = c.split('__TT__');
      if (parts[1]) dt = JSON.parse(parts[1]);
    } catch (e) {}
  }

  // 3. Cek sibling dengan __TT__ di catatan
  if ((!dt || !dt.baru || !dt.lama) && ref && S && S.trx) {
    const sibTag = S.trx.find(x => (x.refTukarTambah === ref || (x.catatan && x.catatan.indexOf(ref) !== -1)) && x.catatan && x.catatan.indexOf('__TT__') !== -1);
    if (sibTag) {
      try {
        const parts = sibTag.catatan.split('__TT__');
        if (parts[1]) dt = JSON.parse(parts[1]);
      } catch (e) {}
    }
  }

  // Jika dt ditemukan lengkap:
  if (dt && dt.baru && dt.lama) {
    const nBaru = Number(dt.nilaiBaru != null ? dt.nilaiBaru : (dt.baru.subtotal || 0));
    const nLama = Number(dt.nilaiLama != null ? dt.nilaiLama : (dt.lama.subtotal || 0));
    const sisa = Number(dt.sisaBayar != null ? dt.sisaBayar : (nBaru - nLama));
    return {
      ref: ref || dt.refTukarTambah || 'TT',
      baru: dt.baru,
      lama: dt.lama,
      nilaiBaru: nBaru,
      nilaiLama: nLama,
      sisaBayar: sisa,
      metodeBayar: dt.metodeBayar || (t.peranTT === 'SELISIH_MASUK' || t.peranTT === 'SELISIH_KELUAR' ? t.metodeBayar : 'TUNAI'),
      rekening: dt.rekening || t.rekening || ''
    };
  }

  // 4. Fallback cerdas dari regex teks catatan
  const mBaru = c.match(/Baru:\s*([^⇄|]+)/);
  const mLama = c.match(/Lama:\s*([^|]+)/);
  const mTambah = c.match(/Tambah Bayar:\s*Rp\s*([\d.,]+)/i);
  const mKembali = c.match(/Uang Kembali:\s*Rp\s*([\d.,]+)/i);
  const isPas = /Pas\s*\(Rp\s*0\)/i.test(c);

  let sisaVal = 0;
  if (mTambah) sisaVal = rpVal(mTambah[1]);
  else if (mKembali) sisaVal = -rpVal(mKembali[1]);
  else if (isPas) sisaVal = 0;
  else if (t.peranTT === 'SELISIH_MASUK') sisaVal = t.nominal;
  else if (t.peranTT === 'SELISIH_KELUAR') sisaVal = -t.nominal;

  let nBaru = 0, nLama = 0;
  let bBerat = 0, lBerat = 0, bKadar = '', lKadar = '', bLogam = 'EMAS', lLogam = 'EMAS';

  if (ref && S && S.trx) {
    const tj = S.trx.find(x => (x.refTukarTambah === ref || (x.catatan && x.catatan.indexOf(ref) !== -1)) && (x.peranTT === 'BARANG_BARU' || x.jenis === 'PENJUALAN'));
    const tb = S.trx.find(x => (x.refTukarTambah === ref || (x.catatan && x.catatan.indexOf(ref) !== -1)) && (x.peranTT === 'BARANG_LAMA' || x.jenis === 'BUYBACK'));
    if (tj) { nBaru = tj.nominal; bBerat = tj.berat; bKadar = tj.kadar; bLogam = tj.logam || 'EMAS'; }
    if (tb) { nLama = tb.nominal; lBerat = tb.berat; lKadar = tb.kadar; lLogam = tb.logam || 'EMAS'; }
  }

  if (!nBaru && t.peranTT === 'BARANG_BARU') { nBaru = t.nominal; bBerat = t.berat; bKadar = t.kadar; bLogam = t.logam || 'EMAS'; }
  if (!nLama && t.peranTT === 'BARANG_LAMA') { nLama = t.nominal; lBerat = t.berat; lKadar = t.kadar; lLogam = t.logam || 'EMAS'; }

  if (nBaru && nLama && sisaVal === 0 && !isPas) {
    sisaVal = nBaru - nLama;
  }

  return {
    ref: ref || 'TT',
    baru: { jenisBarang: mBaru ? mBaru[1].trim() : (t.kategori || 'Barang Baru'), logam: bLogam, kadar: bKadar, berat: bBerat, subtotal: nBaru },
    lama: { jenisBarang: mLama ? mLama[1].trim() : 'Emas/Perak Lama', logam: lLogam, kadar: lKadar, berat: lBerat, subtotal: nLama },
    nilaiBaru: nBaru,
    nilaiLama: nLama,
    sisaBayar: sisaVal,
    metodeBayar: t.metodeBayar || 'TUNAI',
    rekening: t.rekening || ''
  };
}

function wrapText(text, width){
  if (!text) return [];
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = '';
  words.forEach(w => {
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= width) cur += ' ' + w;
    else { lines.push(cur); cur = w; }
  });
  if (cur) lines.push(cur);
  return lines;
}

/* ---------- Logo struk (gambar) ---------- */
function logoStrukSrc(){ return (S && S.setting && S.setting.logoToko) || 'img/logo-struk.jpg'; }
function strukHTML(t, cfg){
  cfg = cfg || getStrukCfg();
  return (cfg.showLogo ? '<img class="struk-logo" src="'+esc(logoStrukSrc())+'" alt="Logo" onerror="this.style.display=\'none\'">' : '') +
    '<div class="struk-txt">'+esc(strukText(t, cfg))+'</div>';
}
/** Ubah logo jadi gambar raster ESC/POS (GS v 0) agar ikut tercetak di printer thermal Bluetooth. */
function logoEscPos(lebarDot){
  return new Promise(res => {
    const img = new Image(); img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const w = Math.min(lebarDot, 256) & ~7, h = Math.max(8, Math.round(img.height * w / img.width));
        const c = document.createElement('canvas'); c.width = lebarDot; c.height = h;
        const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, lebarDot, h);
        g.drawImage(img, Math.round((lebarDot - w) / 2), 0, w, h);
        const px = g.getImageData(0, 0, lebarDot, h).data, bpr = lebarDot / 8;
        const out = new Uint8Array(8 + bpr * h + 1);
        out.set([0x1D, 0x76, 0x30, 0x00, bpr & 255, bpr >> 8, h & 255, h >> 8], 0);
        for (let y = 0; y < h; y++) for (let x = 0; x < lebarDot; x++) {
          const i = (y * lebarDot + x) * 4, lum = px[i] * 0.3 + px[i + 1] * 0.59 + px[i + 2] * 0.11;
          if (px[i + 3] > 40 && lum < 160) out[8 + y * bpr + (x >> 3)] |= 0x80 >> (x & 7);
        }
        out[out.length - 1] = 0x0A;
        res(out);
      } catch (e) { res(new Uint8Array(0)); }
    };
    img.onerror = () => res(new Uint8Array(0));
    img.src = logoStrukSrc();
  });
}
A.struklogo = () => {
  const cfg = getStrukCfg(), on = !cfg.showLogo;
  let loc = {}; try { loc = JSON.parse(LS.g('pos_struk_config') || '{}'); } catch (e) {}
  loc.showLogo = on; LS.s('pos_struk_config', JSON.stringify(loc));
  if (isO()) {
    let sv = (S.setting && S.setting.struk) || {}; if (typeof sv === 'string') { try { sv = JSON.parse(sv); } catch (e) { sv = {}; } }
    sv = Object.assign({}, sv, { showLogo: on }); S.setting.struk = sv;
    mut('settingSimpan', { struk: JSON.stringify(sv) });
  }
  toast(on ? 'Logo ditampilkan di struk' : 'Logo disembunyikan dari struk', 'ok');
  refreshStruk();
};
function strukText(t, customCfg){
  const cfg = customCfg || getStrukCfg();
  const W = (cfg.lebar === '80' ? 44 : 32);
  const ctr = s => { s = String(s || ''); return ' '.repeat(Math.max(0, Math.floor((W - s.length) / 2))) + s; };
  const lr = (a, b) => { a = String(a || ''); b = String(b || ''); return a + ' '.repeat(Math.max(1, W - a.length - b.length)) + b; };
  const div1 = '='.repeat(W);
  const div2 = '-'.repeat(W);

  const L = [];
  // Header
  const storeName = cfg.namaToko || (S.setting && S.setting.namaToko) || 'TOKO EMAS & PERAK PUTRI BALI';
  wrapText(storeName.toUpperCase(), W).forEach(l => L.push(ctr(l)));
  if (cfg.tagline) wrapText(cfg.tagline, W).forEach(l => L.push(ctr(l)));
  if (cfg.alamat) wrapText(cfg.alamat, W).forEach(l => L.push(ctr(l)));
  if (cfg.telepon) wrapText('Telp/WA: ' + cfg.telepon, W).forEach(l => L.push(ctr(l)));

  L.push(div1);
  L.push(lr('NO. NOTA', nota(t)));
  if (cfg.showWaktu !== false) {
    L.push(lr('WAKTU', tgl(t.waktu) + ' ' + jam(t.waktu) + ' WIT'));
  }
  if (cfg.showKasir !== false) {
    L.push(lr('KASIR / OP', uname(t.operatorId)));
  }
  if (t.pelanggan) {
    L.push(lr((t.jenis === 'BUYBACK' && !t.isTukarTambah && !t.detailTT) ? 'PENJUAL' : 'PELANGGAN', t.pelanggan));
  }

  L.push(div2);
  // Item detail
  const tt = parseTT(t);
  if (tt) {
    L.push(ctr('❖ TUKAR TAMBAH PERHIASAN ❖'));
    if (tt.ref) L.push(ctr('REF: #' + tt.ref));
    L.push(div2);

    const b = tt.baru, l = tt.lama;
    L.push('[ BARANG BARU DIBELI ]');
    L.push(' ' + (b.jenisBarang || 'Perhiasan') + ' ' + (b.logam || 'EMAS') + ' ' + (b.kadar ? 'Kadar ' + b.kadar : ''));
    L.push(lr(' ' + gr(b.berat) + (b.hargaPerGram ? ' @ ' + rpS(b.hargaPerGram) : ''), rp(b.subtotal || tt.nilaiBaru)));
    if (b.ongkos) L.push(lr(' Ongkos Bikin/Custom', rp(b.ongkos)));
    L.push(lr(' Subtotal Barang Baru', rp(tt.nilaiBaru)));

    L.push(div2);
    L.push('[ EMAS/PERAK LAMA DITERIMA ]');
    L.push(' ' + (l.jenisBarang || 'Emas Lama') + ' ' + (l.logam || 'EMAS') + ' ' + (l.kadar ? 'Kadar ' + l.kadar : ''));
    L.push(lr(' ' + gr(l.berat) + (l.hargaPerGram ? ' @ ' + rpS(l.hargaPerGram) : ''), '(' + rp(l.subtotal || tt.nilaiLama) + ')'));
    if (l.potongan) L.push(lr(' Potongan Lebur/Uji', '- ' + rp(l.potongan)));
    L.push(lr(' Total Nilai Diterima', '(' + rp(tt.nilaiLama) + ')'));

    L.push(div1);
    L.push(lr('TOTAL BARANG BARU', rp(tt.nilaiBaru)));
    L.push(lr('NILAI BARANG LAMA', '(' + rp(tt.nilaiLama) + ')'));
    L.push(div2);

    if (tt.sisaBayar > 0) {
      L.push(lr('SISA DIBAYAR KONSUMEN', rp(tt.sisaBayar)));
    } else if (tt.sisaBayar < 0) {
      L.push(lr('KEMBALIAN DARI TOKO', rp(Math.abs(tt.sisaBayar))));
    } else {
      L.push(lr('SISA PEMBAYARAN', 'PAS (Rp 0)'));
    }

    if (cfg.showMetodeBayar !== false) {
      const bayarStr = (tt.sisaBayar > 0 ? 'DIBAYAR: ' : tt.sisaBayar < 0 ? 'DIKEMBALIKAN: ' : 'STATUS: ') +
        tt.metodeBayar + (tt.rekening ? ' (' + tt.rekening + ')' : '');
      L.push(lr('METODE SISA', bayarStr));
    }

    const cleanC = cleanCatatan(t.catatan);
    const extraNote = cleanC.replace(/^\[TUKAR TAMBAH #[^\]]+\]/, '').replace(/Baru:[^⇄|]+⇄\s*Lama:[^|]+/, '').replace(/\|\s*(Tambah Bayar|Uang Kembali|Pas)[^|]*/, '').replace(/^[| ]+/, '').trim();
    if (extraNote) {
      L.push(div2);
      L.push('Catatan:');
      wrapText(' ' + extraNote, W).forEach(l => L.push(l));
    }
  } else {
    const jTitle = t.jenis === 'BUYBACK' ? 'BUYBACK (BELI KEMBALI)' :
                   t.jenis === 'PENGELUARAN_OPS' ? 'PENGELUARAN OPERASIONAL' :
                   t.jenis === 'SEDEKAH' ? 'SEDEKAH · ' + String(t.kategori || '').toUpperCase() :
                   String(t.kategori || jenisLbl[t.jenis] || 'PENJUALAN').toUpperCase() + (t.jenis === 'JASA' ? ' (PEMASUKAN)' : '');
    wrapText(jTitle, W).forEach(l => L.push(l));

    if (cfg.showDetailBarang !== false && t.berat) {
      L.push(' ' + (t.logam || 'EMAS') + ' ' + (t.kadar ? 'Kadar ' + t.kadar : ''));
      L.push(lr(' ' + gr(t.berat), rp(t.nominal / t.berat) + '/gr'));
    }

    const noteClean = cleanCatatan(t.catatan);
    if (noteClean && (!t.berat || cfg.showDetailBarang === false)) {
      wrapText(' ' + noteClean, W).forEach(l => L.push(l));
    }

    L.push(div2);
    L.push(lr('TOTAL BAYAR', rp(t.nominal)));

    if (noteClean && t.berat && cfg.showDetailBarang !== false) {
      L.push('Catatan:');
      wrapText(' ' + noteClean, W).forEach(l => L.push(l));
    }

    if (cfg.showMetodeBayar !== false) {
      L.push(lr('METODE', t.metodeBayar + (t.rekening ? ' (' + t.rekening + ')' : '')));
    }
  }

  if (t.status !== 'AKTIF') {
    L.push(ctr('** ' + String(t.status).replace(/_/g, ' ') + ' **'));
  }

  L.push(div1);
  if (cfg.pesanTerimaKasih) {
    wrapText(cfg.pesanTerimaKasih, W).forEach(l => L.push(ctr(l)));
  }
  if (cfg.kebijakan) {
    wrapText(cfg.kebijakan, W).forEach(l => L.push(l));
  }
  if (cfg.sosialMedia) {
    wrapText(cfg.sosialMedia, W).forEach(l => L.push(ctr(l)));
  }
  if (cfg.showQrNota !== false) {
    L.push(ctr('[ VERIFIKASI DIGITAL NOTA ]'));
    L.push(ctr('#' + nota(t)));
  }
  L.push(ctr('- - - - - - - - - - - - - - - -'));
  return L.join('\n');
}

const findTrx = k => S.trx.find(t => t.transaksiId === k || t.clientId === k);

function strukBody(t){
  const sync = String(t.transaksiId).indexOf('TMP-') === 0;
  const cfg = getStrukCfg();
  const ft = t.buktiFoto || (t.foto ? [t.foto] : []);
  const photoHtml = ft.length ? (
    '<div style="margin-top:12px;background:#f9fafb;border:1px solid var(--ln);border-radius:12px;padding:10px 14px">'+
      '<small style="font-weight:700;color:var(--mut);display:block;margin-bottom:6px">Foto Bukti Transaksi ('+ft.length+' foto):</small>'+
      '<div class="photo-grid-box">'+
        ft.map((f,i)=>
          '<div class="photo-thumb-item" style="cursor:pointer" data-a="viewpic" data-v="'+esc(f)+'" title="Klik untuk perbesar">'+
            '<img src="'+esc(f)+'" alt="Bukti '+(i+1)+'">'+
          '</div>'
        ).join('')+
      '</div>'+
    '</div>'
  ) : '';

  return '<div class="struk-preview-box" style="margin-bottom:14px">'+
    '<div class="struk-head" style="max-width:'+(cfg.lebar==='80'?'460px':'320px')+'">'+
      '<span class="tag gold">'+(cfg.lebar==='80'?'Lebar Kertas 80mm':'Lebar Kertas 58mm')+'</span>'+
      '<span style="display:flex;gap:6px">'+
        '<button class="btn xs gh logo-toggle" style="color:#fff;border-color:rgba(255,255,255,.25)" data-a="struklogo">'+ic('image','s')+' Logo: '+(cfg.showLogo?'Tampil':'Sembunyi')+'</button>'+
        (isO()?'<button class="btn xs gh" style="color:#fff;border-color:rgba(255,255,255,.2)" data-a="strukcfg">'+ic('sliders','s')+' Format</button>':'')+
      '</span>'+
    '</div>'+
    '<div class="struk-paper '+(cfg.lebar==='80'?'w80':'w58')+'" id="struk-box">'+strukHTML(t, cfg)+'</div>'+
  '</div>'+
  photoHtml+
  '<div class="grid" style="gap:8px;margin-top:12px">'+
    '<button class="btn gold blk" data-a="notaToko" data-v="'+esc(t.transaksiId)+'"'+(sync?' disabled':'')+' style="font-weight:700;padding:11px 16px;font-size:14px">'+ic('file','s')+' Cetak Nota Toko Resmi (Putri Bali)</button>'+
    '<div class="row2">'+
      '<button class="btn pri" data-a="printbt"'+(sync?' disabled':'')+'>'+ic('bluetooth','s')+' Cetak Bluetooth (Thermal)</button>'+
      '<button class="btn blk" data-a="print"'+(sync?' disabled':'')+'>'+ic('printer','s')+' Cetak Struk (Dialog)</button>'+
    '</div>'+
    '<button class="btn gh" data-a="wa"'+(sync?' disabled':'')+'>'+ic('send','s')+' Kirim ke WhatsApp</button>'+
  '</div>'+
  (!isO() && !sync && t.status!=='DIBATALKAN' ? (
    '<div class="card" style="margin-top:14px;padding:12px;background:#f8f6f1;border:1px solid #e7dcc3">'+
      '<div style="font-size:12px;font-weight:700;color:#7a5f2c;margin-bottom:8px;display:flex;align-items:center;gap:6px">'+ic('shield','s')+' Perubahan nota wajib disetujui Owner</div>'+
      (t.status==='DIAJUKAN_BATAL'?'<div class="pill warn" style="margin-bottom:8px">Pengajuan batal sedang menunggu Owner</div>':'')+
      '<div class="grid" style="gap:6px">'+
        '<button class="btn sm" data-a="trxedit" data-v="'+esc(t.transaksiId)+'">'+ic('edit','s')+' Ajukan Edit ke Owner</button>'+
        (t.status==='AKTIF'?'<button class="btn sm" data-a="batal" data-v="'+esc(t.transaksiId)+'">'+ic('undo','s')+' Ajukan Pembatalan Nota</button>':'')+
        '<button class="btn sm" style="color:#be123c" data-a="trxdel" data-v="'+esc(t.transaksiId)+'">'+ic('trash','s')+' Ajukan Hapus Transaksi</button>'+
      '</div>'+
    '</div>'
  ) : '')+
  (isO() && !sync ? (
    '<div class="card" style="margin-top:14px;padding:12px;background:#fefce8;border:1px solid #fef08a">'+
      '<div style="font-size:12px;font-weight:700;color:#854d0e;margin-bottom:8px;display:flex;align-items:center;gap:6px">'+
        ic('lock','s')+' Kontrol Khusus Owner / Admin Super:'+
      '</div>'+
      '<div class="grid" style="gap:6px">'+
        '<button class="btn sm pri" style="background:#0284c7" data-a="trxedit" data-v="'+esc(t.transaksiId)+'">'+ic('edit','s')+' Ubah / Edit Data Transaksi</button>'+
        (t.status==='AKTIF'?'<button class="btn sm bad" data-a="batal" data-v="'+esc(t.transaksiId)+'">'+ic('undo','s')+' Batalkan Nota Transaksi</button>':'')+
        '<button class="btn sm bad" style="background:#fff1f2;color:#be123c;border:1px solid #fecdd3" data-a="trxdel" data-v="'+esc(t.transaksiId)+'">'+ic('trash','s')+' Hapus Riwayat Transaksi</button>'+
      '</div>'+
    '</div>'
  ) : '')+
  (sync?'<small style="display:block;margin-top:8px;text-align:center">Nomor nota sedang diproses server…</small>':'');
}

/* ============ DOKUMEN NOTA TOKO RESMI PUTRI BALI ============ */
function notaTokoHTML(t, customCfg){
  if (!t) return '';
  const nCfg = customCfg || getNotaCfg();
  const tt = parseTT(t);

  let rows = [];
  let totalBayar = t.nominal;
  let labelTotal = 'TOTAL Rp.';
  let terbilangStr = '';

  if (tt) {
    const b = tt.baru, l = tt.lama;
    rows.push({
      qty: 1,
      nama: (b.jenisBarang || 'Perhiasan Emas/Perak') + ' (Barang Baru)',
      karat: (b.logam || 'EMAS') + (b.kadar ? ' ' + b.kadar + '%' : ''),
      berat: gr(b.berat),
      jumlah: rp(tt.nilaiBaru)
    });
    rows.push({
      qty: 1,
      nama: (l.jenisBarang || 'Emas/Perak Lama') + ' (Diterima Buyback)',
      karat: (l.logam || 'EMAS') + (l.kadar ? ' ' + l.kadar + '%' : ''),
      berat: gr(l.berat),
      jumlah: '(' + rp(tt.nilaiLama) + ')'
    });

    const sisa = tt.sisaBayar;
    if (sisa > 0) {
      rows.push({
        qty: '-',
        nama: 'SISA YANG HARUS DIBAYAR KONSUMEN',
        karat: '-',
        berat: '-',
        jumlah: rp(sisa)
      });
      totalBayar = sisa;
      labelTotal = 'SISA Rp.';
      terbilangStr = terbilangRp(sisa);
    } else if (sisa < 0) {
      rows.push({
        qty: '-',
        nama: 'UANG KEMBALI DARI TOKO KE KONSUMEN',
        karat: '-',
        berat: '-',
        jumlah: rp(Math.abs(sisa))
      });
      totalBayar = Math.abs(sisa);
      labelTotal = 'KEMBALI Rp.';
      terbilangStr = 'Kembali ' + terbilangRp(Math.abs(sisa));
    } else {
      rows.push({
        qty: '-',
        nama: 'SISA PEMBAYARAN (PAS / LUNAS)',
        karat: '-',
        berat: '-',
        jumlah: 'Rp 0'
      });
      totalBayar = 0;
      labelTotal = 'SISA Rp.';
      terbilangStr = 'Nol Rupiah (Pas)';
    }
  } else if (t.jenis === 'BUYBACK') {
    rows.push({
      qty: 1,
      nama: (t.kategori || 'Buyback Perhiasan') + (t.catatan && t.catatan.indexOf('[TUKAR TAMBAH') === -1 && cleanCatatan(t.catatan) ? ' - ' + cleanCatatan(t.catatan) : ''),
      karat: (t.logam || 'EMAS') + (t.kadar ? ' ' + t.kadar + '%' : ''),
      berat: gr(t.berat),
      jumlah: rp(t.nominal)
    });
    totalBayar = t.nominal;
    labelTotal = 'TOTAL Rp.';
    terbilangStr = terbilangRp(t.nominal);
  } else {
    // Penjualan atau Jasa
    const namaBrg = (t.kategori || (t.jenis === 'JASA' ? 'Ongkos Bikin / Servis' : 'Perhiasan Emas/Perak')) +
      (t.catatan && t.catatan.indexOf('[TUKAR TAMBAH') === -1 && cleanCatatan(t.catatan) ? ' (' + cleanCatatan(t.catatan) + ')' : '');
    rows.push({
      qty: 1,
      nama: namaBrg,
      karat: (t.logam || (t.jenis === 'JASA' ? '-' : 'EMAS')) + (t.kadar ? ' ' + t.kadar + '%' : ''),
      berat: t.berat ? gr(t.berat) : '-',
      jumlah: rp(t.nominal)
    });
    totalBayar = t.nominal;
    labelTotal = 'TOTAL Rp.';
    terbilangStr = terbilangRp(t.nominal);
  }

  // Lengkapi baris tabel agar minimal ada 5 baris seperti buku nota
  while (rows.length < 5) {
    rows.push({ qty: '', nama: '&nbsp;', karat: '', berat: '', jumlah: '' });
  }

  const rowsHtml = rows.map(r => 
    '<tr>'+
      '<td style="text-align:center">'+r.qty+'</td>'+
      '<td><b>'+r.nama+'</b></td>'+
      '<td style="text-align:center">'+r.karat+'</td>'+
      '<td style="text-align:center">'+r.berat+'</td>'+
      '<td style="text-align:right;font-weight:700">'+r.jumlah+'</td>'+
    '</tr>'
  ).join('');

  const noNota = nota(t);
  const tglNota = tgl(t.waktu);
  const namaCust = esc(t.pelanggan || 'Pelanggan Umum');
  const hpCust = esc(t.teleponPelanggan || t.telepon || '-');
  const almtCust = esc(t.alamatPelanggan || t.alamat || 'Nabire, Papua Tengah');
  const watermarkClass = nCfg.showWatermark !== false ? 'with-watermark' : 'no-watermark';

  return '<div class="nota-toko-doc '+watermarkClass+'">'+
    '<div class="nota-header">'+
      '<div class="nota-brand">'+
        (nCfg.showLogo !== false ? '<img src="img/logo-putri-bali.png" class="nota-logo" alt="Putri Bali Logo" onerror="this.style.display=\'none\'">' : '')+
        '<div class="nota-store-info">'+
          (function(){const nm=String(nCfg.namaToko||'TOKO EMAS PUTRI BALI').trim(),m=nm.match(/^(TOKO EMAS(?:\s*&\s*PERAK)?)\s+(.+)$/i);
            return '<div class="nota-toko-sub">'+esc(m?m[1].toUpperCase():'TOKO EMAS')+'</div>'+'<div class="nota-toko-name">'+esc(m?m[2]:nm)+'</div>';})()+
          '<div class="nota-toko-tag">'+esc(nCfg.tagline || 'JUAL BELI EMAS & PERAK')+'</div>'+
          '<div class="nota-toko-contact">'+
            (nCfg.alamat ? '<span>'+ic('pin','s')+' '+esc(nCfg.alamat)+'</span>' : '')+
            (nCfg.telepon ? '<span>'+ic('phone','s')+' '+esc(nCfg.telepon)+'</span>' : '')+
            (nCfg.sosmed ? '<span class="nota-socials">'+ic('sparkle','s')+' '+esc(nCfg.sosmed)+'</span>' : '')+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="nota-meta">'+
        '<div class="nota-meta-row"><span>Tanggal</span><span class="dots">: '+tglNota+'</span></div>'+
        '<div class="nota-meta-row"><span>Nama</span><span class="dots">: '+namaCust+'</span></div>'+
        '<div class="nota-meta-row"><span>No. HP</span><span class="dots">: '+hpCust+'</span></div>'+
        '<div class="nota-meta-row"><span>Alamat</span><span class="dots">: '+almtCust+'</span></div>'+
        '<div class="nota-meta-row nota-no-row"><span>NOTA NO</span><span class="dots">: <b>#'+noNota+'</b></span></div>'+
      '</div>'+
    '</div>'+
    '<table class="nota-table">'+
      '<thead>'+
        '<tr>'+
          '<th style="width:7%;text-align:center">QTY</th>'+
          '<th style="width:42%">NAMA BARANG</th>'+
          '<th style="width:20%;text-align:center">KARAT/EMAS</th>'+
          '<th style="width:13%;text-align:center">BERAT</th>'+
          '<th style="width:18%;text-align:right">JUMLAH</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+rowsHtml+'</tbody>'+
    '</table>'+
    '<div class="nota-calc-row">'+
      '<div class="nota-terbilang-box">'+
        '<span class="terbilang-lbl">Terbilang :</span>'+
        '<span class="terbilang-val">'+terbilangStr+'</span>'+
      '</div>'+
      '<div class="nota-total-box">'+
        '<span class="total-lbl">'+labelTotal+'</span>'+
        '<span class="total-val">'+rp(totalBayar)+'</span>'+
      '</div>'+
    '</div>'+
    '<div class="nota-footer">'+
      '<div class="nota-perhatian">'+
        '<div class="perhatian-title">PERHATIAN !!!</div>'+
        '<ol class="perhatian-list">'+
          '<li>'+esc(nCfg.perhatian1 || 'Barang telah ditimbang, disaksikan oleh pembeli.')+'</li>'+
          '<li>'+esc(nCfg.perhatian2 || 'Barang yang kembali dipotong menurut pasaran.')+'</li>'+
          '<li>'+esc(nCfg.perhatian3 || 'Jika barang kembali rusak dibeli hancuran.')+'</li>'+
          '<li>'+esc(nCfg.perhatian4 || 'Barang yang dibeli dari 24 jam sudah dikenakan potongan 100%')+'</li>'+
        '</ol>'+
        (nCfg.pesanTerimaKasih ? '<div class="nota-thanks">'+esc(nCfg.pesanTerimaKasih)+'</div>' : '')+
      '</div>'+
      '<div class="nota-signature">'+
        '<div class="sig-title">Hormat Kami,</div>'+
        '<div class="sig-stamp-box">'+
          (nCfg.showStempel !== false ? '<img src="img/stempel-putri-bali.png" class="nota-stamp-img" alt="Stempel Putri Bali" onerror="this.style.display=\'none\'">' : '')+
        '</div>'+
        '<div class="sig-name">( '+esc(nCfg.penandaTangan || uname(t.operatorId) || 'Kasir / Toko')+' )</div>'+
      '</div>'+
    '</div>'+
  '</div>';
}

function printNotaToko(t, customCfg){
  const pa = $('#print-area');
  const paN = $('#print-nota-area');
  if (pa) { pa.textContent = ''; pa.style.display = 'none'; }
  if (paN) {
    paN.innerHTML = notaTokoHTML(t, customCfg);
    paN.style.display = 'block';
  }
  window.print();
}

function previewNotaToko(t){
  if (!t) return;
  RC = t.transaksiId;
  const content = '<div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">'+
      '<span class="tag gold" style="font-size:12px">Format Nota Toko Emas &amp; Perak Putri Bali (Pasar Oyehe Nabire)</span>'+
    '</div>'+
    '<div style="overflow-x:auto;background:#e5e7eb;padding:12px;border-radius:10px;margin-bottom:12px">'+
      notaTokoHTML(t)+
    '</div>'+
    '<div class="row2">'+
      '<button class="btn pri blk" data-a="printNotaDirect" data-v="'+esc(t.transaksiId)+'">'+ic('printer','s')+' Cetak Nota / Simpan PDF</button>'+
      '<button class="btn gh" data-a="trx" data-v="'+esc(t.transaksiId)+'">Kembali ke Struk Kasir</button>'+
    '</div>';
  modal('Nota Resmi — Toko Emas & Perak Putri Bali', content);
}

A.notaToko = v => {
  const t = findTrx(v || RC);
  if (!t) return;
  previewNotaToko(t);
};

A.printNotaDirect = v => {
  const t = findTrx(v || RC);
  if (!t) return;
  printNotaToko(t);
};

A.viewpic = v => modal('Pratinjau Foto Bukti', '<div style="text-align:center"><img src="'+esc(v)+'" style="max-width:100%;max-height:80vh;border-radius:12px;box-shadow:var(--sh2);display:inline-block"></div>');

function showStruk(k){ const t = findTrx(k); if(!t) return; RC = k; modal('Struk / Nota Resmi', strukBody(t)); RC = k; }
function refreshStruk(){ const b=$('#struk-box'); if(!RC||!b) return; const t = findTrx(RC); if(!t){ RC = null; return; } const box=b.closest('.struk-preview-box'); if(box&&box.parentNode) box.parentNode.innerHTML = strukBody(t); }

A.trx = v => showStruk(v);
A.print = () => {
  const t = findTrx(RC);
  if (!t) return;
  const cfg = getStrukCfg();
  const pa = $('#print-area');
  const paN = $('#print-nota-area');
  if (paN) { paN.innerHTML = ''; paN.style.display = 'none'; }
  if (pa) {
    pa.style.display = 'block';
    pa.className = (cfg.lebar === '80' ? 'p80' : 'p58');
    pa.innerHTML = strukHTML(t, cfg);
  }
  window.print();
};

/* ============ BLUETOOTH THERMAL PRINTER ENGINE ============ */
async function printViaBluetooth(text, cfg){
  if (!navigator.bluetooth) {
    return fallbackRawBTPrint(text, false);
  }
  toast('Mencari printer Bluetooth thermal…', 'ok');
  try {
    const knownServices = [
      '000018f0-0000-1000-8000-00805f9b34fb',
      'e7810a71-73ae-499d-8c15-faa9aef0c3f2',
      '49535343-fe7d-4ae5-8fa9-9fafd205e455',
      '0000ae30-0000-1000-8000-00805f9b34fb',
      '0000af30-0000-1000-8000-00805f9b34fb',
      '0000ff00-0000-1000-8000-00805f9b34fb'
    ];

    let device;
    try {
      device = await navigator.bluetooth.requestDevice({
        filters: knownServices.map(s => ({ services: [s] })),
        optionalServices: knownServices
      });
    } catch(fe) {
      device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: knownServices
      });
    }

    if (!device) return;
    toast('Menghubungkan ke ' + (device.name || 'Printer') + '…', 'ok');
    const server = await device.gatt.connect();
    const services = await server.getPrimaryServices();
    let writeChar = null;

    for (const service of services) {
      try {
        const chars = await service.getCharacteristics();
        for (const ch of chars) {
          if (ch.properties.write || ch.properties.writeWithoutResponse) {
            writeChar = ch;
            break;
          }
        }
      } catch(e){}
      if (writeChar) break;
    }

    if (!writeChar) {
      throw new Error('Karakteristik cetak ESC/POS tidak ditemukan pada printer ini.');
    }

    const encoder = new TextEncoder();
    const initCmd = new Uint8Array([0x1B, 0x40]); // ESC @
    const feedCutCmd = new Uint8Array([0x0A, 0x0A, 0x0A, 0x0A, 0x1D, 0x56, 0x00]); // LF 4x + Cut
    const textBytes = encoder.encode(text + '\n');
    const logoBytes = (cfg && cfg.showLogo) ? await logoEscPos(cfg.lebar === '80' ? 576 : 384) : new Uint8Array(0);
    const payload = new Uint8Array(initCmd.length + logoBytes.length + textBytes.length + feedCutCmd.length);
    payload.set(initCmd, 0);
    payload.set(logoBytes, initCmd.length);
    payload.set(textBytes, initCmd.length + logoBytes.length);
    payload.set(feedCutCmd, initCmd.length + logoBytes.length + textBytes.length);

    const CHUNK_SIZE = 50;
    for (let i = 0; i < payload.length; i += CHUNK_SIZE) {
      const chunk = payload.slice(i, i + CHUNK_SIZE);
      if (writeChar.properties.writeWithoutResponse) {
        await writeChar.writeValueWithoutResponse(chunk);
      } else {
        await writeChar.writeValue(chunk);
      }
      await new Promise(r => setTimeout(r, 25));
    }

    toast('Struk berhasil dicetak ke printer Bluetooth!', 'ok');
    setTimeout(() => { try { device.gatt.disconnect(); } catch(e){} }, 1000);
  } catch(err) {
    if (err && err.name === 'NotFoundError') {
      toast('Pencarian printer Bluetooth dibatalkan', 'warn');
    } else {
      toast('Bluetooth: ' + (err.message || 'Gagal terhubung'), 'err');
      fallbackRawBTPrint(text, true);
    }
  }
}

function fallbackRawBTPrint(text, isError){
  const b64 = btoa(unescape(encodeURIComponent(text + '\n\n\n\n')));
  const rawbtUrl = 'rawbt:data:base64,' + b64;
  modal('Cetak Printer Bluetooth',
    '<div class="grid" style="gap:14px">'+
      (isError ? '<div class="err" style="margin:0">Koneksi Web Bluetooth langsung tidak berhasil atau browser membatasi akses BLE. Gunakan opsi cepat di bawah:</div>' : '')+
      '<div class="card" style="padding:14px;background:#fbfbfb">'+
        '<h3 style="margin-bottom:6px">Opsi 1: Aplikasi RawBT (Rekomendasi HP Android)</h3>'+
        '<p style="font-size:13px;color:var(--mut);margin-bottom:12px">Buka langsung aplikasi RawBT Printer yang sudah ter-pairing dengan printer bluetooth 58mm/80mm Anda.</p>'+
        '<a class="btn pri" href="'+rawbtUrl+'" target="_blank" rel="noopener">'+ic('printer','s')+' Buka di Aplikasi RawBT</a>'+
      '</div>'+
      '<div class="card" style="padding:14px;background:#fbfbfb">'+
        '<h3 style="margin-bottom:6px">Opsi 2: Web Bluetooth Langsung</h3>'+
        '<p style="font-size:13px;color:var(--mut);margin-bottom:12px">Pastikan Bluetooth HP/laptop aktif dan printer thermal dalam mode Pairing (ON).</p>'+
        '<button class="btn gold" data-a="printbt_direct">'+ic('bluetooth','s')+' Sambungkan &amp; Cetak Ulang</button>'+
      '</div>'+
      '<div class="card" style="padding:14px;background:#fbfbfb">'+
        '<h3 style="margin-bottom:6px">Opsi 3: Print Dialog Standar</h3>'+
        '<p style="font-size:13px;color:var(--mut);margin-bottom:12px">Gunakan print dialog browser jika printer sudah terinstal di sistem.</p>'+
        '<button class="btn gh" data-a="print">'+ic('printer','s')+' Cetak Dialog Standar</button>'+
      '</div>'+
    '</div>'
  );
}

A.printbt = () => { const t = findTrx(RC); if (t) printViaBluetooth(strukText(t, getStrukCfg()), getStrukCfg()); };
A.printbt_direct = () => { const t = findTrx(RC); if (t) printViaBluetooth(strukText(t, getStrukCfg()), getStrukCfg()); };
function waOpen(text){ const a = document.createElement('a'); a.href = 'https://wa.me/?text=' + encodeURIComponent(text); a.target = '_blank'; a.rel = 'noopener'; document.body.appendChild(a); a.click(); a.remove(); }
A.wa = () => { const t = findTrx(RC); if(t) waOpen(strukText(t)); };

let _cfgTab = 'nota'; // tab aktif: 'nota' atau 'thermal'

F.strukConfig = function(openTab){
  if (openTab) _cfgTab = openTab;
  const cfg = getStrukCfg();
  const nCfg = getNotaCfg();
  const demoTrx = S.trx.find(live) || {
    transaksiId: 'TRX-SAMPLE-01',
    waktu: nowWIT(),
    jenis: 'PENJUALAN',
    kategori: 'CINCIN EMAS MOTIF BALI',
    logam: 'EMAS',
    kadar: '700',
    berat: 3.25,
    nominal: 2762500,
    metodeBayar: 'TUNAI',
    pelanggan: 'Ibu Fatimah (Pelanggan)',
    operatorId: S.me ? S.me.userId : 'kasir_1',
    status: 'AKTIF'
  };

  const tabNota = _cfgTab === 'nota';

  /* --- Panel Nota Toko --- */
  const notaPanel =
    '<div class="grid g2" style="gap:20px;align-items:start">'+
      '<div>'+
        '<div class="card" style="padding:16px;margin-bottom:14px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Identitas Toko (Nota Resmi)</h3></div>'+
          '<label class="fld"><span class="lb">Nama Toko</span><input class="inp" id="nc_namaToko" value="'+esc(nCfg.namaToko)+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Tagline / Jenis Usaha</span><input class="inp" id="nc_tagline" value="'+esc(nCfg.tagline)+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Alamat Toko</span><input class="inp" id="nc_alamat" value="'+esc(nCfg.alamat)+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Telepon / WhatsApp</span><input class="inp" id="nc_telepon" value="'+esc(nCfg.telepon)+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Website / Media Sosial</span><input class="inp" id="nc_sosmed" value="'+esc(nCfg.sosmed||'')+'" data-in="notachange"></label>'+
        '</div>'+
        '<div class="card" style="padding:16px;margin-bottom:14px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Keterangan Perhatian (4 Butir)</h3></div>'+
          '<label class="fld"><span class="lb">Perhatian 1</span><input class="inp" id="nc_p1" value="'+esc(nCfg.perhatian1||'')+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Perhatian 2</span><input class="inp" id="nc_p2" value="'+esc(nCfg.perhatian2||'')+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Perhatian 3</span><input class="inp" id="nc_p3" value="'+esc(nCfg.perhatian3||'')+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Perhatian 4</span><input class="inp" id="nc_p4" value="'+esc(nCfg.perhatian4||'')+'" data-in="notachange"></label>'+
        '</div>'+
        '<div class="card" style="padding:16px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Footer Nota</h3></div>'+
          '<label class="fld"><span class="lb">Ucapan Terima Kasih</span><input class="inp" id="nc_terimakasih" value="'+esc(nCfg.pesanTerimaKasih||'')+'" data-in="notachange"></label>'+
          '<label class="fld"><span class="lb">Nama Penanda Tangan / Kasir</span><input class="inp" id="nc_penandatangan" value="'+esc(nCfg.penandaTangan||'')+'" data-in="notachange"></label>'+
          '<div style="margin-top:12px;display:flex;flex-direction:column;gap:6px">'+
            '<label class="chk"><input type="checkbox" id="nc_showWatermark" '+(nCfg.showWatermark!==false?'checked':'')+' data-in="notachange"> Tampilkan Watermark Teks Toko</label>'+
            '<label class="chk"><input type="checkbox" id="nc_showLogo" '+(nCfg.showLogo!==false?'checked':'')+' data-in="notachange"> Tampilkan Logo Toko</label>'+
            '<label class="chk"><input type="checkbox" id="nc_showStempel" '+(nCfg.showStempel!==false?'checked':'')+' data-in="notachange"> Tampilkan Stempel / Cap Toko</label>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div>'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'+
          '<b>Preview Nota Toko Resmi</b>'+
          '<button class="btn xs pri" data-a="notatestprint">'+ic('printer','s')+' Uji Cetak Nota</button>'+
        '</div>'+
        '<div style="overflow-x:auto;background:#e5e7eb;padding:10px;border-radius:10px;max-height:60vh;overflow-y:auto" id="nc-preview-wrap">'+
          notaTokoHTML(demoTrx, nCfg)+
        '</div>'+
        '<small style="display:block;margin-top:8px;color:var(--mut);text-align:center">Preview diperbarui langsung saat Anda mengetik.</small>'+
      '</div>'+
    '</div>'+
    '<div style="display:flex;gap:10px;justify-content:flex-end;margin-top:14px;flex-wrap:wrap">'+
      '<button class="btn gh" data-a="notareset">'+ic('refresh','s')+' Reset Nota ke Standar</button>'+
      '<button class="btn pri" data-a="notasave">'+ic('check','s')+' Simpan Pengaturan Nota</button>'+
    '</div>';

  /* --- Panel Struk Termal --- */
  const struktPanel =
    '<div class="grid g2" style="gap:20px;align-items:start">'+
      '<div>'+
        '<div class="card" style="padding:16px;margin-bottom:14px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Ukuran Kertas Thermal Printer</h3></div>'+
          '<label class="fld"><span class="lb">Pilihan Lebar Kertas Struk</span>'+
            '<select class="inp" id="sc_lebar" data-in="scchange">'+
              '<option value="58"'+(cfg.lebar==='58'?' selected':'')+'>58 mm — Standar Mini POS (32 Karakter)</option>'+
              '<option value="80"'+(cfg.lebar==='80'?' selected':'')+'>80 mm — Standar Kasir Besar (44 Karakter)</option>'+
            '</select>'+
            '<small>58mm untuk printer bluetooth portabel. 80mm untuk printer kasir desktop.</small>'+
          '</label>'+
        '</div>'+
        '<div class="card" style="padding:16px;margin-bottom:14px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Identitas Header Struk</h3></div>'+
          '<label class="fld"><span class="lb">Nama Toko di Struk</span><input class="inp" id="sc_namaToko" value="'+esc(cfg.namaToko)+'" data-in="scchange"></label>'+
          '<label class="fld"><span class="lb">Tagline / Cabang</span><input class="inp" id="sc_tagline" value="'+esc(cfg.tagline)+'" data-in="scchange"></label>'+
          '<label class="fld"><span class="lb">Alamat Toko Lengkap</span><textarea class="inp" id="sc_alamat" data-in="scchange" style="min-height:60px">'+esc(cfg.alamat)+'</textarea></label>'+
          '<label class="fld"><span class="lb">No. Telepon / WhatsApp Toko</span><input class="inp" id="sc_telepon" value="'+esc(cfg.telepon)+'" data-in="scchange"></label>'+
        '</div>'+
        '<div class="card" style="padding:16px;margin-bottom:14px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Elemen &amp; Informasi Transaksi</h3></div>'+
          '<label class="chk"><input type="checkbox" id="sc_showLogo" '+(cfg.showLogo?'checked':'')+' data-in="scchange"> Tampilkan Logo Toko di Struk</label>'+
          '<label class="chk"><input type="checkbox" id="sc_showKasir" '+(cfg.showKasir?'checked':'')+' data-in="scchange"> Tampilkan Nama Kasir / Operator Shift</label>'+
          '<label class="chk"><input type="checkbox" id="sc_showWaktu" '+(cfg.showWaktu?'checked':'')+' data-in="scchange"> Tampilkan Tanggal &amp; Jam WIT Transaksi</label>'+
          '<label class="chk"><input type="checkbox" id="sc_showDetailBarang" '+(cfg.showDetailBarang?'checked':'')+' data-in="scchange"> Tampilkan Rincian Gramasi &amp; Kadar Emas</label>'+
          '<label class="chk"><input type="checkbox" id="sc_showMetodeBayar" '+(cfg.showMetodeBayar?'checked':'')+' data-in="scchange"> Tampilkan Metode Pembayaran / Bank QRIS</label>'+
          '<label class="chk"><input type="checkbox" id="sc_showQrNota" '+(cfg.showQrNota?'checked':'')+' data-in="scchange"> Tampilkan Kode Verifikasi Digital Nota</label>'+
        '</div>'+
        '<div class="card" style="padding:16px">'+
          '<div class="hd" style="margin-bottom:10px"><h3>Catatan Kaki (Footer &amp; Kebijakan)</h3></div>'+
          '<label class="fld"><span class="lb">Pesan Ucapan Terima Kasih</span><input class="inp" id="sc_pesanTerimaKasih" value="'+esc(cfg.pesanTerimaKasih)+'" data-in="scchange"></label>'+
          '<label class="fld"><span class="lb">Kebijakan Garansi / Buyback Toko</span><textarea class="inp" id="sc_kebijakan" data-in="scchange" style="min-height:76px">'+esc(cfg.kebijakan)+'</textarea></label>'+
          '<label class="fld"><span class="lb">Media Sosial / Instagram Toko</span><input class="inp" id="sc_sosialMedia" value="'+esc(cfg.sosialMedia)+'" data-in="scchange"></label>'+
        '</div>'+
      '</div>'+
      '<div>'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'+
          '<b>Live Preview Struk Termal</b>'+
          '<button class="btn xs pri" data-a="struktestprint">'+ic('printer','s')+' Cetak Uji Coba</button>'+
        '</div>'+
        '<div class="struk-preview-box">'+
          '<div class="struk-paper '+(cfg.lebar==='80'?'w80':'w58')+'" id="sc-preview">'+strukHTML(demoTrx,cfg)+'</div>'+
        '</div>'+
        '<small style="display:block;margin-top:10px;color:var(--mut);text-align:center">Preview diperbarui secara langsung saat Anda mengetik atau mengubah opsi di samping.</small>'+
      '</div>'+
    '</div>'+
    '<div style="display:flex;gap:10px;justify-content:flex-end;margin-top:10px;flex-wrap:wrap">'+
      '<button class="btn gh" data-a="strukreset">'+ic('refresh','s')+' Reset ke Standar</button>'+
      '<button class="btn pri" data-a="struksave">'+ic('check','s')+' Simpan Pengaturan Struk</button>'+
    '</div>';

  modal('Pengaturan Struk Kasir & Nota Toko Resmi',
    '<div>'+
      '<div class="seg" style="margin-bottom:16px">'+
        '<button class="'+(tabNota?'on':'')+'" data-a="tabStrukNota" data-v="nota">'+ic('file','s')+' Nota Toko Resmi</button>'+
        '<button class="'+(tabNota?'':'on')+'" data-a="tabStrukNota" data-v="thermal">'+ic('printer','s')+' Struk Kasir Termal</button>'+
      '</div>'+
      '<div id="strukcfg-panel">'+
        (tabNota ? notaPanel : struktPanel)+
      '</div>'+
    '</div>');
};

A.tabStrukNota = v => {
  _cfgTab = v;
  F.strukConfig();
};

IN.notachange = () => {
  const nCfg = {
    namaToko: $('#nc_namaToko') ? $('#nc_namaToko').value : '',
    tagline: $('#nc_tagline') ? $('#nc_tagline').value : '',
    alamat: $('#nc_alamat') ? $('#nc_alamat').value : '',
    telepon: $('#nc_telepon') ? $('#nc_telepon').value : '',
    sosmed: $('#nc_sosmed') ? $('#nc_sosmed').value : '',
    perhatian1: $('#nc_p1') ? $('#nc_p1').value : '',
    perhatian2: $('#nc_p2') ? $('#nc_p2').value : '',
    perhatian3: $('#nc_p3') ? $('#nc_p3').value : '',
    perhatian4: $('#nc_p4') ? $('#nc_p4').value : '',
    pesanTerimaKasih: $('#nc_terimakasih') ? $('#nc_terimakasih').value : '',
    penandaTangan: $('#nc_penandatangan') ? $('#nc_penandatangan').value : '',
    showWatermark: $('#nc_showWatermark') ? $('#nc_showWatermark').checked : true,
    showLogo: $('#nc_showLogo') ? $('#nc_showLogo').checked : true,
    showStempel: $('#nc_showStempel') ? $('#nc_showStempel').checked : true
  };
  const demoTrx = S.trx.find(live) || {
    transaksiId: 'TRX-PREVIEW-01', waktu: nowWIT(), jenis: 'PENJUALAN',
    kategori: 'CINCIN EMAS MOTIF BALI', logam: 'EMAS', kadar: '700',
    berat: 3.25, nominal: 2762500, metodeBayar: 'TUNAI',
    pelanggan: 'Ibu Fatimah (Pelanggan)', operatorId: S.me ? S.me.userId : 'kasir_1', status: 'AKTIF'
  };
  const wrap = $('#nc-preview-wrap');
  if (wrap) wrap.innerHTML = notaTokoHTML(demoTrx, Object.assign({}, DEFAULT_NOTA, nCfg));
};

A.notasave = () => {
  const nCfg = {
    namaToko: $('#nc_namaToko') ? $('#nc_namaToko').value.trim() : '',
    tagline: $('#nc_tagline') ? $('#nc_tagline').value.trim() : '',
    alamat: $('#nc_alamat') ? $('#nc_alamat').value.trim() : '',
    telepon: $('#nc_telepon') ? $('#nc_telepon').value.trim() : '',
    sosmed: $('#nc_sosmed') ? $('#nc_sosmed').value.trim() : '',
    perhatian1: $('#nc_p1') ? $('#nc_p1').value.trim() : '',
    perhatian2: $('#nc_p2') ? $('#nc_p2').value.trim() : '',
    perhatian3: $('#nc_p3') ? $('#nc_p3').value.trim() : '',
    perhatian4: $('#nc_p4') ? $('#nc_p4').value.trim() : '',
    pesanTerimaKasih: $('#nc_terimakasih') ? $('#nc_terimakasih').value.trim() : '',
    penandaTangan: $('#nc_penandatangan') ? $('#nc_penandatangan').value.trim() : '',
    showWatermark: $('#nc_showWatermark') ? $('#nc_showWatermark').checked : true,
    showLogo: $('#nc_showLogo') ? $('#nc_showLogo').checked : true,
    showStempel: $('#nc_showStempel') ? $('#nc_showStempel').checked : true
  };
  LS.s('pos_nota_config', JSON.stringify(nCfg));
  if (!S.setting) S.setting = {};
  S.setting.nota = nCfg;
  mut('settingSimpan', { nota: JSON.stringify(nCfg) }, () => {});
  closeModal();
  toast('Pengaturan nota toko berhasil disimpan!', 'ok');
  if (CUR === 'pengaturan') render();
};

A.notareset = () => {
  LS.d('pos_nota_config');
  if (S.setting) S.setting.nota = DEFAULT_NOTA;
  mut('settingSimpan', { nota: JSON.stringify(DEFAULT_NOTA) }, () => {});
  toast('Pengaturan nota dikembalikan ke standar awal', 'ok');
  F.strukConfig('nota');
};

A.notatestprint = () => {
  const demoTrx = S.trx.find(live) || {
    transaksiId: 'TRX-PREVIEW-01', waktu: nowWIT(), jenis: 'PENJUALAN',
    kategori: 'CINCIN EMAS MOTIF BALI', logam: 'EMAS', kadar: '700',
    berat: 3.25, nominal: 2762500, metodeBayar: 'TUNAI',
    pelanggan: 'Ibu Fatimah (Pelanggan)', operatorId: S.me ? S.me.userId : 'kasir_1', status: 'AKTIF'
  };
  const pa = $('#print-area');
  const paN = $('#print-nota-area');
  if (pa) { pa.textContent = ''; pa.style.display = 'none'; }
  if (paN) { paN.innerHTML = notaTokoHTML(demoTrx); paN.style.display = 'block'; }
  window.print();
};

A.strukcfg = () => F.strukConfig();

IN.scchange = () => {
  const cfg = {
    lebar: $('#sc_lebar') ? $('#sc_lebar').value : '58',
    namaToko: $('#sc_namaToko') ? $('#sc_namaToko').value : '',
    tagline: $('#sc_tagline') ? $('#sc_tagline').value : '',
    alamat: $('#sc_alamat') ? $('#sc_alamat').value : '',
    telepon: $('#sc_telepon') ? $('#sc_telepon').value : '',
    showLogo: $('#sc_showLogo') ? $('#sc_showLogo').checked : true,
    showKasir: $('#sc_showKasir') ? $('#sc_showKasir').checked : true,
    showWaktu: $('#sc_showWaktu') ? $('#sc_showWaktu').checked : true,
    showDetailBarang: $('#sc_showDetailBarang') ? $('#sc_showDetailBarang').checked : true,
    showMetodeBayar: $('#sc_showMetodeBayar') ? $('#sc_showMetodeBayar').checked : true,
    showQrNota: $('#sc_showQrNota') ? $('#sc_showQrNota').checked : true,
    pesanTerimaKasih: $('#sc_pesanTerimaKasih') ? $('#sc_pesanTerimaKasih').value : '',
    kebijakan: $('#sc_kebijakan') ? $('#sc_kebijakan').value : '',
    sosialMedia: $('#sc_sosialMedia') ? $('#sc_sosialMedia').value : ''
  };
  const demoTrx = S.trx.find(live) || {
    transaksiId: 'TRX-SAMPLE-01', waktu: nowWIT(), jenis: 'PENJUALAN',
    kategori: 'CINCIN EMAS MOTIF BALI', logam: 'EMAS', kadar: '700',
    berat: 3.25, nominal: 2762500, metodeBayar: 'TUNAI',
    pelanggan: 'Ibu Fatimah (Pelanggan)', operatorId: S.me ? S.me.userId : 'kasir_1', status: 'AKTIF'
  };
  const prevEl = $('#sc-preview');
  if (prevEl) {
    prevEl.className = 'struk-paper ' + (cfg.lebar === '80' ? 'w80' : 'w58');
    prevEl.innerHTML = strukHTML(demoTrx, cfg);
  }
};

A.struksave = () => {
  const cfg = {
    lebar: $('#sc_lebar') ? $('#sc_lebar').value : '58',
    namaToko: $('#sc_namaToko') ? $('#sc_namaToko').value.trim() : '',
    tagline: $('#sc_tagline') ? $('#sc_tagline').value.trim() : '',
    alamat: $('#sc_alamat') ? $('#sc_alamat').value.trim() : '',
    telepon: $('#sc_telepon') ? $('#sc_telepon').value.trim() : '',
    showLogo: $('#sc_showLogo') ? $('#sc_showLogo').checked : true,
    showKasir: $('#sc_showKasir') ? $('#sc_showKasir').checked : true,
    showWaktu: $('#sc_showWaktu') ? $('#sc_showWaktu').checked : true,
    showDetailBarang: $('#sc_showDetailBarang') ? $('#sc_showDetailBarang').checked : true,
    showMetodeBayar: $('#sc_showMetodeBayar') ? $('#sc_showMetodeBayar').checked : true,
    showQrNota: $('#sc_showQrNota') ? $('#sc_showQrNota').checked : true,
    pesanTerimaKasih: $('#sc_pesanTerimaKasih') ? $('#sc_pesanTerimaKasih').value.trim() : '',
    kebijakan: $('#sc_kebijakan') ? $('#sc_kebijakan').value.trim() : '',
    sosialMedia: $('#sc_sosialMedia') ? $('#sc_sosialMedia').value.trim() : ''
  };
  LS.s('pos_struk_config', JSON.stringify(cfg));
  if (!S.setting) S.setting = {};
  S.setting.struk = cfg;
  mut('settingSimpan', { struk: JSON.stringify(cfg) }, () => {});
  closeModal();
  toast('Pengaturan format struk berhasil disimpan!', 'ok');
  if (CUR === 'pengaturan') render();
};

A.strukreset = () => {
  LS.d('pos_struk_config');
  if (S.setting) S.setting.struk = DEFAULT_STRUK;
  mut('settingSimpan', { struk: JSON.stringify(DEFAULT_STRUK) }, () => {});
  toast('Pengaturan struk dikembalikan ke standar awal', 'ok');
  F.strukConfig();
};

A.struktestprint = () => {
  const cfg = getStrukCfg();
  const demoTrx = S.trx.find(live) || {
    transaksiId: 'TRX-SAMPLE-01',
    waktu: nowWIT(),
    jenis: 'PENJUALAN',
    kategori: 'CINCIN EMAS MOTIF BALI',
    logam: 'EMAS',
    kadar: '700',
    berat: 3.25,
    nominal: 2762500,
    metodeBayar: 'TUNAI',
    pelanggan: 'Ibu Fatimah (Pelanggan)',
    operatorId: S.me ? S.me.userId : 'kasir_1',
    status: 'AKTIF'
  };
  const pa = $('#print-area');
  if (pa) {
    pa.className = (cfg.lebar === '80' ? 'p80' : 'p58');
    pa.innerHTML = strukHTML(demoTrx, cfg);
  }
  window.print();
};
A.batal = v => {
  if (!isO()) return F.ajukanTrx('BATAL', v);
  const t = findTrx(v);
  if (!t) return;
  openForm({
    title: 'Batalkan Nota ' + t.transaksiId + ' (Khusus Owner)',
    ok: 'Batalkan Nota',
    fields: [{ k: 'alasan', l: 'Alasan pembatalan transaksi', t: 'ta', req: 1 }],
    fn: x => {
      if (x.alasan.length < 3) return 'Alasan terlalu singkat.';
      if (isJual(t) && t.metodeBayar === 'TUNAI' && !kasOK(t.nominal)) {
        return 'Saldo kas laci tidak cukup untuk mengembalikan dana (' + rp(S.saldo.kas) + ').';
      }
      mut('trxBatal', { transaksiId: t.transaksiId, alasan: x.alasan }, id => {
        t.status = 'DIBATALKAN';
        localEfek(t, -1);
      });
      closeModal();
      toast('Nota #' + t.transaksiId + ' berhasil dibatalkan', 'ok');
      render();
    }
  });
};

A.trxedit = v => {
  if (!isO()) return F.ajukanTrx('EDIT', v);
  const t = findTrx(v);
  if (!t) return;
  openForm({
    title: 'Edit Data Transaksi #' + t.transaksiId + ' (Khusus Owner)',
    ok: 'Simpan Perubahan',
    fields: [
      { k: 'pelanggan', l: 'Nama Pelanggan', t: 'text', v: t.pelanggan || '', req: 1 },
      { k: 'teleponPelanggan', l: 'No. HP / WA Pelanggan', t: 'text', v: t.teleponPelanggan || '', half: 1 },
      { k: 'alamatPelanggan', l: 'Alamat Pelanggan', t: 'text', v: t.alamatPelanggan || '', half: 1 },
      { k: 'kategori', l: 'Kategori / Nama Perhiasan', t: 'text', v: t.kategori || '', req: 1 },
      { k: 'logam', l: 'Jenis Logam', t: 'select', o: ['EMAS', 'PERAK', 'LAINNYA'], v: t.logam || 'EMAS', half: 1 },
      { k: 'kadar', l: 'Kadar (%)', t: 'text', v: t.kadar || '', half: 1 },
      { k: 'berat', l: 'Berat Gramasi', t: 'num', suf: 'gr', v: t.berat || 0, half: 1 },
      { k: 'nominal', l: 'Nominal Total (Rp)', t: 'rp', v: t.nominal || 0, half: 1, req: 1 },
      { k: 'metodeBayar', l: 'Metode Pembayaran', t: 'select', o: ['TUNAI', 'TRANSFER', 'QRIS', 'EDC'], v: t.metodeBayar || 'TUNAI' },
      { k: 'catatan', l: 'Catatan Transaksi', t: 'ta', v: cleanCatatan(t.catatan || '') }
    ],
    fn: vals => {
      vals.transaksiId = t.transaksiId;
      Object.assign(t, {
        pelanggan: vals.pelanggan,
        teleponPelanggan: vals.teleponPelanggan,
        alamatPelanggan: vals.alamatPelanggan,
        kategori: vals.kategori,
        logam: vals.logam,
        kadar: vals.kadar,
        berat: vals.berat,
        nominal: vals.nominal,
        metodeBayar: vals.metodeBayar,
        catatan: vals.catatan
      });
      mut('trxEdit', vals, () => {});
      closeModal();
      toast('Data transaksi #' + t.transaksiId + ' berhasil diperbarui', 'ok');
      render();
    }
  });
};

A.trxdel = v => {
  if (!isO()) return F.ajukanTrx('HAPUS', v);
  const t = findTrx(v);
  if (!t) return;
  if (!confirm('APAKAH ANDA YAKIN INGIN MENGHAPUS TRANSAKSI #' + t.transaksiId + '?\n\nPerhatian: Transaksi ini akan dihapus permanen dari riwayat toko!')) return;
  const idx = S.trx.findIndex(x => x.transaksiId === t.transaksiId || x.clientId === t.transaksiId);
  if (idx !== -1) S.trx.splice(idx, 1);
  mut('trxHapus', { transaksiId: t.transaksiId }, () => {});
  closeModal();
  toast('Transaksi #' + t.transaksiId + ' berhasil dihapus dari riwayat toko', 'ok');
  render();
};

/* ============ HANDLER HAPUS RIWAYAT KHUSUS ADMIN ============ */
A.kasdel = v => {
  if (!isO()) { toast('Hanya Admin yang dapat menghapus mutasi kas', 'err'); return; }
  if (!confirm('Hapus baris riwayat mutasi kas ini?')) return;
  const idx = S.kas.findIndex(x => x.mutasiKasId === v || String(x.waktu) === String(v));
  if (idx !== -1) S.kas.splice(idx, 1);
  mut('kasHapus', { mutasiKasId: v }, () => {});
  toast('Mutasi kas berhasil dihapus', 'ok');
  render();
};

A.tutupdel = v => {
  if (!isO()) { toast('Hanya Admin yang dapat menghapus riwayat tutup kas', 'err'); return; }
  if (!confirm('Hapus baris riwayat tutup kas ini?')) return;
  const idx = S.tutup.findIndex(x => x.tutupKasId === v || String(x.tanggal) === String(v));
  if (idx !== -1) S.tutup.splice(idx, 1);
  mut('tutupKasHapus', { tutupKasId: v }, () => {});
  toast('Riwayat tutup kas berhasil dihapus', 'ok');
  render();
};

A.stokdel = v => {
  if (!isO()) { toast('Hanya Admin yang dapat menghapus riwayat mutasi stok', 'err'); return; }
  if (!confirm('Hapus baris riwayat mutasi stok ini?')) return;
  const idx = (S.stokLog || []).findIndex(x => x.stokLogId === v || String(x.createdAt) === String(v));
  if (idx !== -1) S.stokLog.splice(idx, 1);
  mut('stokLogHapus', { stokLogId: v }, () => {});
  toast('Riwayat mutasi stok berhasil dihapus', 'ok');
  render();
};

A.brkdel = v => {
  if (!isO()) { toast('Hanya Admin yang dapat menghapus mutasi brankas', 'err'); return; }
  if (!confirm('Hapus baris mutasi brankas ini?')) return;
  const idx = S.brankas.findIndex(x => x.mutasiBrankasId === v || String(x.waktu) === String(v));
  if (idx !== -1) S.brankas.splice(idx, 1);
  mut('brankasHapus', { mutasiBrankasId: v }, () => {});
  toast('Mutasi brankas berhasil dihapus', 'ok');
  render();
};

A.bkdel = v => {
  if (!isO()) { toast('Hanya Admin yang dapat menghapus mutasi rekening bank', 'err'); return; }
  if (!confirm('Hapus baris mutasi bank ini?')) return;
  const idx = S.bank.findIndex(x => x.mutasiBankId === v || String(x.waktu) === String(v));
  if (idx !== -1) S.bank.splice(idx, 1);
  mut('bankHapus', { mutasiBankId: v }, () => {});
  toast('Mutasi bank berhasil dihapus', 'ok');
  render();
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
F.harga = function() {
  const s = S.setting || {};
  let list = JSON.parse(JSON.stringify(getDaftarKadar()));

  function renderHargaModal() {
    modal('Harga Emas &amp; Perak Toko Hari Ini',
      '<div class="grid" style="gap:16px">'+
        '<div class="grid g2" style="gap:10px">'+
          '<label class="fld" style="margin:0"><span class="lb">Spot Emas 24K / gr</span><input class="inp" id="hm_spotEmas" type="text" value="' + rp(s.spotEmas || 1650000) + '"></label>'+
          '<label class="fld" style="margin:0"><span class="lb">Spot Perak / gr</span><input class="inp" id="hm_spotPerak" type="text" value="' + rp(s.spotPerak || 16000) + '"></label>'+
        '</div>'+
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px">'+
          '<div><b>Daftar Kadar &amp; Harga Toko</b><small style="display:block;color:var(--mut)">Harga per gram acuan kasir penjualan &amp; buyback</small></div>'+
          '<button type="button" class="btn sm pri" data-a="hargatambahkadar">' + ic('plus', 's') + ' Tambah Kadar Baru</button>'+
        '</div>'+
        '<div class="tbw" style="max-height:360px;overflow-y:auto;border:1px solid var(--ln);border-radius:12px">'+
          '<table style="width:100%;margin:0"><thead><tr><th>Logam</th><th>Kadar</th><th>Harga Jual / gr</th><th>Buyback / gr</th><th class="r" style="width:40px">Aksi</th></tr></thead>'+
          '<tbody>' +
          list.map((k, idx) =>
            '<tr>' +
              '<td><span class="tag ' + (k.logam === 'EMAS' ? 'gold' : '') + '">' + esc(k.logam) + '</span></td>' +
              '<td><b>' + esc(k.kadar) + '</b><br><small style="color:var(--mut)">' + esc(k.nama || ('Kadar ' + k.kadar)) + '</small></td>' +
              '<td><input class="inp sm" style="width:130px;font-weight:700" type="text" id="hk_jual_' + idx + '" value="' + rp(k.hargaJual) + '"></td>' +
              '<td><input class="inp sm" style="width:130px;font-weight:700" type="text" id="hk_bb_' + idx + '" value="' + rp(k.hargaBuyback) + '"></td>' +
              '<td class="r"><button type="button" class="ibtn" style="color:var(--bad)" data-a="hargahapuskadar" data-v="' + idx + '" title="Hapus Kadar">' + ic('trash', 's') + '</button></td>' +
            '</tr>'
          ).join('') +
          '</tbody></table>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px">' +
          '<button type="button" class="btn gh" data-a="closemodal">Batal</button>' +
          '<button type="button" class="btn pri" data-a="hargasave">' + ic('check', 's') + ' Simpan Semua Harga &amp; Kadar</button>' +
        '</div>' +
      '</div>');

    // Attach rupiah formatters
    const spEmas = $('#hm_spotEmas'), spPerak = $('#hm_spotPerak');
    if (spEmas) spEmas.oninput = () => { spEmas.value = rp(rpVal(spEmas.value)); };
    if (spPerak) spPerak.oninput = () => { spPerak.value = rp(rpVal(spPerak.value)); };
    list.forEach((_, idx) => {
      const jEl = $('#hk_jual_' + idx), bEl = $('#hk_bb_' + idx);
      if (jEl) jEl.oninput = () => { jEl.value = rp(rpVal(jEl.value)); };
      if (bEl) bEl.oninput = () => { bEl.value = rp(rpVal(bEl.value)); };
    });
  }

  A.hargatambahkadar = () => {
    openForm({
      title: 'Tambah Kadar Logam Baru',
      ok: 'Tambahkan ke Daftar',
      fields: [
        { k: 'logam', l: 'Jenis Logam', t: 'select', o: ['EMAS', 'PERAK'], half: 1 },
        { k: 'kadar', l: 'Nomor Kadar (misal: 420, 916)', t: 'text', req: 1, half: 1 },
        { k: 'nama', l: 'Nama / Keterangan (misal: Kadar 420 10K)', t: 'text' },
        { k: 'hargaJual', l: 'Harga Jual Toko per gram', t: 'rp', req: 1, half: 1 },
        { k: 'hargaBuyback', l: 'Harga Buyback Toko per gram', t: 'rp', req: 1, half: 1 }
      ],
      fn: v => {
        const kdClean = String(v.kadar).trim();
        if (!kdClean) return 'Nomor kadar wajib diisi.';
        list.push({
          logam: v.logam,
          kadar: kdClean,
          nama: v.nama || ('Kadar ' + kdClean),
          hargaJual: v.hargaJual,
          hargaBuyback: v.hargaBuyback
        });
        toast('Kadar ' + kdClean + ' ditambahkan ke daftar', 'ok');
        renderHargaModal();
      }
    });
  };

  A.hargahapuskadar = idx => {
    const i = +idx;
    if (list[i] && confirm('Hapus kadar ' + list[i].kadar + ' dari daftar harga toko?')) {
      list.splice(i, 1);
      toast('Kadar dihapus', 'ok');
      renderHargaModal();
    }
  };

  A.hargasave = () => {
    const spEmasVal = rpVal($('#hm_spotEmas') ? $('#hm_spotEmas').value : s.spotEmas);
    const spPerakVal = rpVal($('#hm_spotPerak') ? $('#hm_spotPerak').value : s.spotPerak);
    list.forEach((k, idx) => {
      const jEl = $('#hk_jual_' + idx), bEl = $('#hk_bb_' + idx);
      if (jEl) k.hargaJual = rpVal(jEl.value);
      if (bEl) k.hargaBuyback = rpVal(bEl.value);
    });

    const k700 = list.find(x => x.logam === 'EMAS' && String(x.kadar) === '700');
    const hg700 = k700 ? k700.hargaJual : (s.hargaKadar700 || 1200000);

    const updateData = {
      spotEmas: spEmasVal,
      spotPerak: spPerakVal,
      hargaKadar700: hg700,
      daftarKadar: list
    };

    Object.assign(S.setting, updateData);
    LS.s('pos_setting', JSON.stringify(S.setting));
    mut('settingSimpan', {
      spotEmas: spEmasVal,
      spotPerak: spPerakVal,
      hargaKadar700: hg700,
      daftarKadar: JSON.stringify(list)
    }, () => {});

    closeModal();
    toast('Harga emas, perak, dan daftar kadar berhasil disimpan!', 'ok');
    render();
  };

  renderHargaModal();
};

/* ============ LAPORAN ============ */
let RP={a:'',b:''};
let LAPX={k:'',rows:null,busy:false};
function lapRows(){
  const f=t=>live(t)&&t.waktu.slice(0,10)>=RP.a&&t.waktu.slice(0,10)<=RP.b;
  if(S.batasRiwayat&&RP.a&&RP.a<S.batasRiwayat){
    const k=RP.a+'|'+RP.b+'|'+S.ver;
    if(LAPX.k===k&&LAPX.rows)return LAPX.rows.filter(f);
    if(!LAPX.busy){LAPX.busy=true;op('trxRange',{dari:RP.a,sampai:RP.b}).then(r=>{LAPX.busy=false;if(r.success){LAPX={k:k,rows:r.data.trx,busy:false};const b=$('#lap-body');if(b)b.innerHTML=lapBody()}}).catch(()=>{LAPX.busy=false})}
  }
  return S.trx.filter(f);
}
function lapStats(){
  const L=lapRows(),sum=x=>x.reduce((s,t)=>s+t.nominal,0);
  const jl=L.filter(t=>t.jenis==='PENJUALAN'),js=L.filter(t=>t.jenis==='JASA'&&t.peranTT!=='SELISIH_MASUK'),bb=L.filter(t=>t.jenis==='BUYBACK'),op=L.filter(t=>t.jenis==='PENGELUARAN_OPS'&&t.peranTT!=='SELISIH_KELUAR'),sd=L.filter(t=>t.jenis==='SEDEKAH');
  const tt=L.filter(t=>t.jenis==='TUKAR_TAMBAH');
  const ttJual=tt.reduce((s,t)=>s+(t.detailTT?t.detailTT.nilaiBaru:(t.nominal>0?t.nominal:0)),0);
  const ttBb=tt.reduce((s,t)=>s+(t.detailTT?t.detailTT.nilaiLama:(t.nominal<0?-t.nominal:0)),0);
  const ttGramEmas=tt.filter(t=>(t.detailTT?t.detailTT.baru.logam==='EMAS':t.logam==='EMAS')).reduce((s,t)=>s+(t.detailTT?t.detailTT.baru.berat:t.berat),0);
  const ttGramPerak=tt.filter(t=>(t.detailTT?t.detailTT.baru.logam==='PERAK':t.logam==='PERAK')).reduce((s,t)=>s+(t.detailTT?t.detailTT.baru.berat:t.berat),0);

  // Rekap Rata-Rata Penjualan & Buyback Emas & Perak
  const ttJualNomEmas = tt.filter(t=>(t.detailTT?t.detailTT.baru.logam==='EMAS':t.logam==='EMAS')).reduce((s,t)=>s+(t.detailTT?t.detailTT.nilaiBaru:(t.nominal>0?t.nominal:0)),0);
  const ttJualNomPerak = tt.filter(t=>(t.detailTT?t.detailTT.baru.logam==='PERAK':t.logam==='PERAK')).reduce((s,t)=>s+(t.detailTT?t.detailTT.nilaiBaru:(t.nominal>0?t.nominal:0)),0);

  const jEmasNom = jl.filter(t=>t.logam==='EMAS').reduce((s,t)=>s+t.nominal,0) + ttJualNomEmas;
  const jEmasGram = jl.filter(t=>t.logam==='EMAS').reduce((s,t)=>s+t.berat,0) + ttGramEmas;
  const jEmasAvg = jEmasGram > 0 ? Math.round(jEmasNom / jEmasGram) : 0;

  const jPerakNom = jl.filter(t=>t.logam==='PERAK').reduce((s,t)=>s+t.nominal,0) + ttJualNomPerak;
  const jPerakGram = jl.filter(t=>t.logam==='PERAK').reduce((s,t)=>s+t.berat,0) + ttGramPerak;
  const jPerakAvg = jPerakGram > 0 ? Math.round(jPerakNom / jPerakGram) : 0;

  const ttBbGramEmas = tt.filter(t=>(t.detailTT?t.detailTT.lama.logam==='EMAS':t.logam==='EMAS')).reduce((s,t)=>s+(t.detailTT?t.detailTT.lama.berat:0),0);
  const ttBbNomEmas = tt.filter(t=>(t.detailTT?t.detailTT.lama.logam==='EMAS':t.logam==='EMAS')).reduce((s,t)=>s+(t.detailTT?t.detailTT.nilaiLama:(t.nominal<0?-t.nominal:0)),0);
  const bEmasNom = bb.filter(t=>t.logam==='EMAS').reduce((s,t)=>s+t.nominal,0) + ttBbNomEmas;
  const bEmasGram = bb.filter(t=>t.logam==='EMAS').reduce((s,t)=>s+t.berat,0) + ttBbGramEmas;
  const bEmasAvg = bEmasGram > 0 ? Math.round(bEmasNom / bEmasGram) : 0;

  const ttBbGramPerak = tt.filter(t=>(t.detailTT?t.detailTT.lama.logam==='PERAK':t.logam==='PERAK')).reduce((s,t)=>s+(t.detailTT?t.detailTT.lama.berat:0),0);
  const ttBbNomPerak = tt.filter(t=>(t.detailTT?t.detailTT.lama.logam==='PERAK':t.logam==='PERAK')).reduce((s,t)=>s+(t.detailTT?t.detailTT.nilaiLama:(t.nominal<0?-t.nominal:0)),0);
  const bPerakNom = bb.filter(t=>t.logam==='PERAK').reduce((s,t)=>s+t.nominal,0) + ttBbNomPerak;
  const bPerakGram = bb.filter(t=>t.logam==='PERAK').reduce((s,t)=>s+t.berat,0) + ttBbGramPerak;
  const bPerakAvg = bPerakGram > 0 ? Math.round(bPerakNom / bPerakGram) : 0;

  return {
    L:L,
    jual:sum(jl)+ttJual,
    jasa:sum(js),
    bb:sum(bb)+ttBb,
    op:sum(op),
    sd:sum(sd),
    lists:{bb:bb,op:op,sd:sd},
    gram:jl.filter(t=>t.logam==='EMAS').reduce((s,t)=>s+t.berat,0)+ttGramEmas,
    perak:jl.filter(t=>t.logam==='PERAK').reduce((s,t)=>s+t.berat,0)+ttGramPerak,
    nota:jl.length+js.length+tt.length,
    rekap:{
      jualEmas:{nom:jEmasNom,gram:jEmasGram,avg:jEmasAvg},
      jualPerak:{nom:jPerakNom,gram:jPerakGram,avg:jPerakAvg},
      bbEmas:{nom:bEmasNom,gram:bEmasGram,avg:bEmasAvg},
      bbPerak:{nom:bPerakNom,gram:bPerakGram,avg:bPerakAvg}
    }
  };
}
/** Kartu rekap: total, per kategori, dan daftar transaksi. */
function rekapKartu(judul,ikon,list,grupFn,key){
  const tot=list.reduce((s,t)=>s+t.nominal,0),g={};
  list.forEach(t=>{const k=grupFn(t).trim()||'Lainnya';g[k]=g[k]||{n:0,v:0,gr:0};g[k].n++;g[k].v+=t.nominal;g[k].gr+=t.berat||0});
  const keys=Object.keys(g).sort((a,b)=>g[b].v-g[a].v);
  return '<div class="card rekap-card"><div class="hd"><div><h3>'+ic(ikon,'s')+' '+judul+'</h3><small>'+list.length+' transaksi</small></div><b class="rekap-tot">'+rp(tot)+'</b></div>'+
    (keys.length?keys.map(k=>{const p=Math.round(g[k].v/(tot||1)*100);return '<div class="rk-row"><div class="rk-top"><span>'+esc(k)+'</span><b>'+rp(g[k].v)+'</b></div><div class="rk-sub"><small>'+g[k].n+'×'+(g[k].gr?' · '+gr(g[k].gr):'')+'</small><small>'+p+'%</small></div><div class="pay-bar-bg"><div class="pay-bar-fill" style="width:'+p+'%"></div></div></div>'}).join('')+
      '<details class="rk-det"><summary>Lihat '+list.length+' transaksi</summary>'+sortD(list).slice(0,60).map(trxRow).join('')+'</details>':empty('Tidak ada data pada periode ini.'))+'</div>';
}
function lapBody(){
  const x=lapStats(),days={};
  x.L.forEach(t=>{
    const d=t.waktu.slice(0,10);
    days[d]=days[d]||{j:0,b:0,o:0,s:0};
    if(t.jenis==='TUKAR_TAMBAH'){
      days[d].j+=(t.detailTT?t.detailTT.nilaiBaru:(t.nominal>0?t.nominal:0));
      days[d].b+=(t.detailTT?t.detailTT.nilaiLama:(t.nominal<0?-t.nominal:0));
    } else if(t.peranTT==='SELISIH_MASUK'||t.peranTT==='SELISIH_KELUAR'){
      // Selisih tukar tambah adalah mutasi kas; nilai barang sudah tercermin di Penjualan dan Buyback
    } else if(isJual(t)) days[d].j+=t.nominal;
    else if(t.jenis==='BUYBACK') days[d].b+=t.nominal;
    else if(t.jenis==='SEDEKAH') days[d].s+=t.nominal;
    else days[d].o+=t.nominal;
  });
  const metode={};
  x.L.filter(t=>isJual(t)||t.jenis==='TUKAR_TAMBAH').forEach(t=>{
    const val=t.jenis==='TUKAR_TAMBAH'?(t.nominal>0?t.nominal:0):t.peranTT==='BARANG_BARU'?0:t.nominal;
    if(val>0) metode[t.metodeBayar]=(metode[t.metodeBayar]||0)+val;
  });
  const totalMetode=Object.values(metode).reduce((a,b)=>a+b,0)||1;
  const sortedDays=Object.keys(days).sort().reverse();
  const tableRows=sortedDays.map(d=>'<tr><td><b>'+tgl(d)+'</b></td><td class="r" style="color:#059669;font-weight:700">'+rp(days[d].j)+'</td><td class="r" style="color:#d97706;font-weight:600">'+rp(days[d].b)+'</td><td class="r" style="color:#64748b">'+rp(days[d].o)+'</td><td class="r" style="color:#8E7240">'+rp(days[d].s)+'</td></tr>').join('')||'<tr><td colspan="5">'+empty('Tidak ada data.')+'</td></tr>';
  const mobileCards=sortedDays.map(d=>'<div class="rep-day-card"><div class="rep-day-hd"><span class="rep-day-date">'+ic('cal','s')+' <b>'+tgl(d)+'</b></span><span class="tag gold" style="font-weight:700">'+rp(days[d].j)+'</span></div><div class="rep-day-stats"><div class="rep-stat-col"><small>Penjualan</small><span class="val val-ok">'+rp(days[d].j)+'</span></div><div class="rep-stat-col"><small>Buyback</small><span class="val val-bb">'+rp(days[d].b)+'</span></div><div class="rep-stat-col"><small>Pengeluaran</small><span class="val val-op">'+rp(days[d].o)+'</span></div><div class=\"rep-stat-col\"><small>Sedekah</small><span class=\"val\">'+rp(days[d].s)+'</span></div></div></div>').join('')||empty('Tidak ada data.');
  const metodeList=Object.keys(metode).map(k=>{
    const amt=metode[k],pct=Math.round((amt/totalMetode)*100);
    return '<div class="pay-meth-item"><div class="pay-meth-row"><span style="display:inline-flex;align-items:center;gap:8px"><b>'+esc(k)+'</b><span class="tag" style="font-size:11px">'+pct+'%</span></span><span style="font-weight:700;color:var(--ink)">'+rp(amt)+'</span></div><div class="pay-bar-bg"><div class="pay-bar-fill" style="width:'+pct+'%"></div></div></div>';
  }).join('')||empty('Tidak ada data pemasukan.');

  const avgSection = '<div class="card" style="margin:16px 0">'+
    '<div class="hd"><div><h3>Rekap Nilai Rata-Rata Harga per Gram</h3><small>Perbandingan volume penjualan &amp; buyback logam mulia terhadap nilai transaksi</small></div><span class="tag gold">'+ic('gem','s')+' Emas &amp; Perak</span></div>'+
    '<div class="rep-avg-grid">'+
      '<div class="rep-avg-card emas"><div class="rep-avg-hd"><span class="rep-avg-title">Penjualan Emas</span><span class="rep-avg-badge jual">PENJUALAN</span></div><div class="rep-avg-main">'+rp(x.rekap.jualEmas.nom)+'</div><div class="rep-avg-sub">'+nf2.format(x.rekap.jualEmas.gram)+' gr terjual</div><div class="rep-avg-rate"><span class="rep-avg-rate-lbl">Rata-rata:</span><span class="rep-avg-rate-val">'+rp(x.rekap.jualEmas.avg)+'/gr</span></div></div>'+
      '<div class="rep-avg-card perak"><div class="rep-avg-hd"><span class="rep-avg-title">Penjualan Perak</span><span class="rep-avg-badge jual">PENJUALAN</span></div><div class="rep-avg-main">'+rp(x.rekap.jualPerak.nom)+'</div><div class="rep-avg-sub">'+nf2.format(x.rekap.jualPerak.gram)+' gr terjual</div><div class="rep-avg-rate"><span class="rep-avg-rate-lbl">Rata-rata:</span><span class="rep-avg-rate-val">'+rp(x.rekap.jualPerak.avg)+'/gr</span></div></div>'+
      '<div class="rep-avg-card emas"><div class="rep-avg-hd"><span class="rep-avg-title">Buyback Emas</span><span class="rep-avg-badge bb">BUYBACK</span></div><div class="rep-avg-main">'+rp(x.rekap.bbEmas.nom)+'</div><div class="rep-avg-sub">'+nf2.format(x.rekap.bbEmas.gram)+' gr dibeli</div><div class="rep-avg-rate"><span class="rep-avg-rate-lbl">Rata-rata:</span><span class="rep-avg-rate-val">'+rp(x.rekap.bbEmas.avg)+'/gr</span></div></div>'+
      '<div class="rep-avg-card perak"><div class="rep-avg-hd"><span class="rep-avg-title">Buyback Perak</span><span class="rep-avg-badge bb">BUYBACK</span></div><div class="rep-avg-main">'+rp(x.rekap.bbPerak.nom)+'</div><div class="rep-avg-sub">'+nf2.format(x.rekap.bbPerak.gram)+' gr dibeli</div><div class="rep-avg-rate"><span class="rep-avg-rate-lbl">Rata-rata:</span><span class="rep-avg-rate-val">'+rp(x.rekap.bbPerak.avg)+'/gr</span></div></div>'+
    '</div></div>';

  return '<div class="grid g3 kpi-row" style="margin:16px 0">'+kpi('Penjualan Logam',rp(x.jual),'<small>'+nf2.format(x.gram)+' gr emas · '+nf2.format(x.perak)+' gr perak</small>','gem')+kpi('Pemasukan / Jasa',rp(x.jasa),'<small>'+x.nota+' nota</small>','tool')+
     kpi('Buyback',rp(x.bb),'<small>'+x.lists.bb.length+' transaksi</small>','undo')+kpi('Pengeluaran Operasional',rp(x.op),'<small>'+x.lists.op.length+' transaksi</small>','wallet')+
     kpi('Sedekah',rp(x.sd),'<small>'+x.lists.sd.length+' kali</small>','heart')+kpi('Selisih Kas',rp(x.jual+x.jasa-x.bb-x.op-x.sd),'<small>pemasukan − pengeluaran</small>','coin','gold')+'</div>'+
   '<div class="grid g3 rekap-3">'+rekapKartu('Rekap Buyback','undo',x.lists.bb,t=>(t.logam==='PERAK'?'Perak ':'Emas ')+(t.kadar||'')+' · '+(t.kategori||''),'bb')+
     rekapKartu('Rekap Pengeluaran','wallet',x.lists.op,t=>t.kategori||'Lainnya','op')+rekapKartu('Rekap Sedekah','heart',x.lists.sd,t=>t.kategori||'Sedekah','sd')+'</div>'+
   avgSection+
   '<div class="grid g2"><div class="card"><div class="hd"><div><h3>Per Hari</h3><small>Ringkasan transaksi harian</small></div><span class="tag">'+sortedDays.length+' Hari</span></div><div class="tbw desk-only"><table><thead><tr><th>Tanggal</th><th class="r">Penjualan</th><th class="r">Buyback</th><th class="r">Pengeluaran</th><th class="r">Sedekah</th></tr></thead><tbody>'+tableRows+'</tbody></table></div><div class="rep-day-cards mobile-only">'+mobileCards+'</div></div>'+
   '<div class="card"><div class="hd"><div><h3>Metode Pembayaran (Pemasukan)</h3><small>Distribusi pembayaran kasir</small></div><span class="tag gold">'+rp(totalMetode===1&&!Object.keys(metode).length?0:totalMetode)+'</span></div><div style="padding-top:4px">'+metodeList+'</div></div></div>';
}
P.laporan=function(){
  if(!RP.a){RP.b=today();RP.a=RP.b.slice(0,8)+'01'}
  return '<div class="ph"><div><h1>Laporan &amp; Rekap</h1><p>Data 90 hari terakhir tersedia instan. Ekspor mengambil dari database lengkap.</p></div></div><div class="card"><div class="hd"><div style="display:flex;gap:10px;align-items:end;flex-wrap:wrap"><label class="fld" style="margin:0"><span class="lb">Dari</span><input class="inp" type="date" value="'+RP.a+'" data-in="rpa"></label><label class="fld" style="margin:0"><span class="lb">Sampai</span><input class="inp" type="date" value="'+RP.b+'" data-in="rpb"></label></div>'+
   '<div class="chips"><button class="btn sm" data-a="rpre" data-v="0">Hari ini</button><button class="btn sm" data-a="rpre" data-v="6">7 hari</button><button class="btn sm" data-a="rpre" data-v="m">Bulan ini</button></div></div><div class="chips"><button class="btn sm dk" data-a="lapwa">'+ic('send','s')+' Kirim Laporan WA</button><button class="btn sm" data-a="lapx">'+ic('download','s')+' Ekspor Sheets / Excel / PDF</button></div><div id="lap-body">'+lapBody()+'</div></div>';
};
IN.rpa=v=>{RP.a=v;$('#lap-body').innerHTML=lapBody()};IN.rpb=v=>{RP.b=v;$('#lap-body').innerHTML=lapBody()};
A.rpre=v=>{RP.b=today();RP.a=v==='m'?RP.b.slice(0,8)+'01':addDays(RP.b,-(+v));RJ='';const e=$('#pg-laporan');e.innerHTML=P.laporan()};
A.lapwa=()=>{
  const x=lapStats();
  waOpen('*LAPORAN '+S.setting.namaToko.toUpperCase()+'*\n'+
    tgl(RP.a)+' s/d '+tgl(RP.b)+'\n\n'+
    'Penjualan logam: '+rp(x.jual)+'\n'+
    'Emas terjual: '+nf2.format(x.gram)+' gr\n'+
    'Perak terjual: '+nf2.format(x.perak)+' gr\n'+
    'Pendapatan jasa: '+rp(x.jasa)+'\n'+
    'Buyback: '+rp(x.bb)+' ('+x.lists.bb.length+' trx)\n'+
    'Pengeluaran ops: '+rp(x.op)+' ('+x.lists.op.length+' trx)\n'+
    'Sedekah: '+rp(x.sd)+' ('+x.lists.sd.length+' kali)\n'+
    '*Selisih: '+rp(x.jual+x.jasa-x.bb-x.op-x.sd)+'*\n'+
    'Jumlah nota: '+x.nota+'\n\n'+
    '*REKAP RATA-RATA HARGA LOGAM:*\n'+
    '• Penjualan Emas: '+nf2.format(x.rekap.jualEmas.gram)+' gr = '+rp(x.rekap.jualEmas.nom)+' (rata-rata '+rp(x.rekap.jualEmas.avg)+'/gr)\n'+
    '• Penjualan Perak: '+nf2.format(x.rekap.jualPerak.gram)+' gr = '+rp(x.rekap.jualPerak.nom)+' (rata-rata '+rp(x.rekap.jualPerak.avg)+'/gr)\n'+
    '• Buyback Emas: '+nf2.format(x.rekap.bbEmas.gram)+' gr = '+rp(x.rekap.bbEmas.nom)+' (rata-rata '+rp(x.rekap.bbEmas.avg)+'/gr)\n'+
    '• Buyback Perak: '+nf2.format(x.rekap.bbPerak.gram)+' gr = '+rp(x.rekap.bbPerak.nom)+' (rata-rata '+rp(x.rekap.bbPerak.avg)+'/gr)'
  );
};
A.lapx=()=>{
  modal('Ekspor Laporan','<div id="ex-b" class="empty">Menyiapkan file di Google Drive…</div>');
  call('apiCall',[TOKEN,'laporanExport',{dari:RP.a,sampai:RP.b},'']).then(r=>{const b=$('#ex-b');if(!b)return;
    if(!r.success){b.innerHTML='<div class="err">'+esc(r.message)+'</div>';return}
    const d=r.data;b.className='';b.innerHTML='<p style="margin-bottom:12px"><b>'+d.jumlah+' transaksi</b> diekspor ke folder Drive "Laporan".</p><div class="grid" style="gap:8px"><a class="btn pri" target="_blank" rel="noopener" href="'+esc(d.sheetUrl)+'">Buka Google Sheets</a><a class="btn" target="_blank" rel="noopener" href="'+esc(d.xlsxUrl)+'">Unduh Excel (.xlsx)</a><a class="btn" target="_blank" rel="noopener" href="'+esc(d.pdfUrl)+'">Buka PDF</a></div>'}).catch(()=>{const b=$('#ex-b');if(b)b.innerHTML='<div class="err">Gagal terhubung ke server.</div>'});
};

/* ============ PENGATURAN ============ */
P.pengaturan=function(){
  const s=S.setting,us=S.users||[],sc=getStrukCfg();
  const logoSrc=(s&&s.logoToko)||LS.g('pos_logo_toko');
  return '<div class="ph"><div><h1>Pengaturan Toko &amp; Struk</h1><p>Profil, harga, rekening bank, format struk thermal, karyawan, dan keamanan.</p></div></div>'+
   '<div class="card" style="margin-bottom:20px">'+
    '<div class="hd"><div><h3>Logo Toko &amp; Identitas Visual</h3><small>Logo toko tampil di sidebar brand, header atas, dan nota kasir</small></div></div>'+
    '<div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">'+
      '<div class="logo-setting-preview">'+
        (logoSrc ? '<img id="logo-setting-img" src="'+esc(logoSrc)+'" alt="Logo Toko">' : '<div style="text-align:center;color:var(--mut)"><div style="display:grid;place-items:center">'+ic('gem')+'</div><small style="font-size:10px">Default</small></div>')+
      '</div>'+
      '<div style="flex:1;min-width:200px">'+
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">'+
          '<button type="button" class="btn sm pri" data-a="logochoose">'+ic('upload','s')+' Upload / Ganti Logo Toko</button>'+
          (logoSrc ? '<button type="button" class="btn sm bad" data-a="logodel">'+ic('x','s')+' Hapus Logo</button>' : '')+
        '</div>'+
        '<small style="color:var(--mut);display:block">Format PNG/JPG/WebP. Otomatis dikompresi agar loading cepat.</small>'+
        '<input type="file" id="logo-file-input" accept="image/*" class="hidden" data-in="logofile">'+
      '</div>'+
    '</div>'+
   '</div>'+
   '<div class="card" style="margin-bottom:20px;background:linear-gradient(135deg,#ffffff 0%,#fffdf8 55%,#fff6db 100%);border-color:rgba(201,160,74,0.35)">'+
    '<div class="hd"><div><h3>Format &amp; Pengaturan Struk &amp; Nota Resmi</h3><small>Kustomisasi nota toko resmi Putri Bali dan struk thermal kasir POS</small></div>'+
      '<div class="chips">'+
        '<button class="btn sm pri" data-a="strukcfg">'+ic('sliders','s')+' Pengaturan Struk &amp; Nota</button>'+
        '<button class="btn sm gh" data-a="notatestprint">'+ic('file','s')+' Uji Cetak Nota</button>'+
        '<button class="btn sm gh" data-a="struktestprint">'+ic('printer','s')+' Uji Cetak Struk</button>'+
      '</div>'+
    '</div>'+
    '<div class="grid g3">'+
      '<div class="mini"><small class="lbl">Nota Toko</small><div class="big" style="font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc((getNotaCfg()).namaToko)+'</div><small>'+esc((getNotaCfg()).tagline)+'</small></div>'+
      '<div class="mini"><small class="lbl">Struk Thermal</small><div class="big" style="font-size:18px">'+(sc.lebar==='80'?'80 mm (Besar)':'58 mm (Mini POS)')+'</div><small>Printer Bluetooth / Desktop</small></div>'+
      '<div class="mini"><small class="lbl">Kontak Nota</small><div class="big" style="font-size:16px">'+esc((getNotaCfg()).telepon||'-')+'</div><small>WhatsApp / Layanan Toko</small></div>'+
    '</div>'+
   '</div>'+

   '<div class="grid g2" style="align-items:start">'+
    '<div class="card"><div class="hd"><h3>Profil &amp; Operasional</h3><button class="btn sm" data-a="profil">'+ic('edit','s')+' Ubah</button></div>'+
    [['Nama toko',s.namaToko],['Alamat',s.alamatToko],['Telepon',s.teleponToko],['Jam masuk standar',s.jamMasuk],['Koordinat toko',s.latitude+', '+s.longitude],['Radius absensi',s.radiusAbsensi+' m'],['Batas approval pengeluaran',rp(s.limitApproval)],['Email notifikasi Owner',s.ownerEmail||'(email akun Owner)']].map(x=>'<div class="tr" style="min-height:44px"><span class="tm"><small>'+x[0]+'</small><b style="white-space:normal">'+esc(x[1]||'-')+'</b></span></div>').join('')+'</div>'+
    '<div class="grid" style="gap:20px"><div class="card"><div class="hd"><h3>Harga &amp; Rekening</h3><div class="chips"><button class="btn sm" data-a="harga">Harga</button><button class="btn sm" data-a="rekedit">Rekening</button></div></div><div class="tr"><span class="tm"><small>Kadar 700 / gram</small><b>'+rp(s.hargaKadar700)+'</b></span><span class="tm"><small>Spot 24K</small><b>'+rp(s.spotEmas)+'</b></span></div>'+((s.rekening||[]).map(r=>'<div class="tr"><span class="ico gold">'+ic('bank')+'</span><span class="tm"><b>'+esc(r.nama)+'</b><small>'+esc(r.noRek||'-')+'</small></span></div>').join('')||empty('Belum ada rekening.'))+'</div>'+
    '<div class="card"><div class="hd"><h3>Keamanan</h3></div><button class="btn blk" data-a="pass">'+ic('key','s')+' Ubah Kata Sandi Saya</button><small style="display:block;margin-top:10px">Reset password Super Admin &amp; reset data dummy dilakukan dari backend (editor Apps Script): <b>resetPasswordSuperAdmin()</b> dan <b>resetDataDummy()</b>.</small></div></div></div>'+
    '<div class="card" style="margin-top:20px"><div class="hd"><div><h3>Kelola Karyawan &amp; Hak Akses</h3><small>Foto profil, status, dan PIN login</small></div><button class="btn sm pri" data-a="useradd">'+ic('plus','s')+' Tambah</button></div>'+'<div class="emp-list">'+us.map(u=>'<div class="emp-card"><div class="emp-top">'+uAvatar(u,'sm')+'<span class="tm"><b>'+esc(u.nama)+'</b><small>@'+esc(u.username)+'</small></span><span class="emp-tags"><span class="tag '+(u.role==='OWNER'?'gold':'')+'">'+(u.role==='OWNER'?'Owner':'Kasir')+'</span><span class="tag '+(u.status==='AKTIF'?'ok':'bad')+'">'+(u.status==='AKTIF'?'Aktif':'Nonaktif')+'</span></span></div>'+'<div class="emp-act"><button class="btn sm gh" data-a="myphoto" data-v="'+u.userId+'">'+ic('camera','s')+' Foto</button>'+(u.role==='OWNER'?'<button class="btn sm gh" data-a="pass">'+ic('key','s')+' Kata Sandi</button>':'<button class="btn sm" data-a="useredit" data-v="'+u.userId+'">'+ic('edit','s')+' Ubah</button><button class="btn sm" data-a="userpin" data-v="'+u.userId+'">'+ic('key','s')+' Reset PIN</button>')+'</div></div>').join('')+'</div></div>';
};
A.profil=()=>F.profil();A.rekedit=()=>F.rekening();A.pass=()=>F.pass();A.useradd=()=>F.user();A.useredit=v=>F.user(v);A.userpin=v=>F.pin(v);
A.logochoose=()=>{const i=$('#logo-file-input');if(i){i.value='';i.click()}};
A.logodel=()=>{if(S.setting)S.setting.logoToko='';LS.d('pos_logo_toko');mut('settingSimpan',{logoToko:''});toast('Logo toko dihapus, kembali ke default','ok');chrome();render()};
IN.logofile=(v,el)=>{const f=el.files&&el.files[0];if(!f)return;compress(f).then(d=>{if(S.setting)S.setting.logoToko=d;LS.s('pos_logo_toko',d);mut('settingSimpan',{logoToko:d});toast('Logo toko berhasil disimpan!','ok');chrome();render()}).catch(()=>toast('Gagal memproses file logo','err'))};
F.topbarProfile=function(){
  const u=S.me, o=isO();
  const currPhoto=(u&&u.foto)||getStoredPhoto(u.userId);
  const hr=+nowWIT().slice(11,13);
  const shiftText=hr<13?'Shift Pagi':'Shift Siang';

  modal('Profil Pengguna',
    '<div class="user-popover-card">'+
      '<div class="upop-hero">'+
        '<div class="upop-avatar-box">'+
          (currPhoto
            ? '<img src="'+esc(currPhoto)+'" alt="'+esc(u.nama)+'" class="upop-img">'
            : '<div class="av lg '+(o?'owner':'karyawan')+' upop-av-fallback"><span>'+esc((u.nama||'U').slice(0,2).toUpperCase())+'</span></div>')+
          '<button type="button" class="upop-cam-badge" data-a="avchoose" data-v="'+esc(u.userId)+'" title="Ubah Foto Profil">'+ic('camera','s')+'</button>'+
        '</div>'+
        '<div class="upop-details">'+
          '<h3 class="upop-name">'+esc(u.nama)+'</h3>'+
          '<div class="upop-badges">'+
            '<span class="tag '+(o?'gold':'')+'">'+(o?'Owner / Superadmin':'Kasir / Karyawan')+'</span>'+
            '<span class="tag ok">'+shiftText+'</span>'+
          '</div>'+
          '<p class="upop-uname">@'+esc(u.username||u.userId)+(u.telepon?' · '+esc(u.telepon):'')+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="upop-actions">'+
        '<button type="button" class="btn sm gh blk upop-btn" data-a="avchoose" data-v="'+esc(u.userId)+'">'+ic('camera','s')+' Ubah Foto Profil</button>'+
        '<button type="button" class="btn sm gh blk upop-btn" data-a="pass">'+ic('key','s')+' Ubah Kata Sandi / PIN</button>'+
        (o?'<button type="button" class="btn sm gh blk upop-btn" data-a="go" data-v="pengaturan">'+ic('sliders','s')+' Pengaturan Toko</button>':'<button type="button" class="btn sm gh blk upop-btn" data-a="go" data-v="profil_kasir">'+ic('user','s')+' Halaman Profil Kasir</button>')+
      '</div>'+
      '<div class="upop-footer">'+
        '<button type="button" class="btn bad blk upop-logout-btn" data-a="logout">'+ic('logout','s')+' Keluar dari Akun</button>'+
      '</div>'+
      '<input type="file" id="av-file-input" accept="image/*" class="hidden" data-in="avfile" data-uid="'+esc(u.userId)+'">'+
    '</div>');
};
A.topbar_profile=()=>F.topbarProfile();
A.myphoto=v=>F.topbarProfile();A.avchoose=v=>{const i=$('#av-file-input');if(i){i.dataset.uid=v||'';i.value='';i.click()}};
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
  const scriptId=(window.APP_CONFIG&&window.APP_CONFIG.SCRIPT_ID)||'-';
  const maskedGas=gasUrl.length>40?gasUrl.slice(0,32)+'••••••••'+gasUrl.slice(-14):gasUrl;
  const lastBk=LS.g('pos_last_backup')||'Belum ada riwayat backup lokal';

  return '<div class="ph"><div><h1>Backend GAS &amp; Basis Data</h1><p>Status API Google Apps Script, sisa kapasitas Sheets, backup &amp; pemulihan data (recovery).</p></div>'+
    '<div class="chips">'+
      '<button class="btn sm dk" data-a="bkping" id="bk-ping-btn">'+ic('refresh','s')+' Tes Latency &amp; Health</button>'+
      '<button class="btn sm pri" data-a="bkdown">'+ic('download','s')+' Unduh Backup JSON</button>'+
      '<button class="btn sm" data-a="bkopenfile">'+ic('upload','s')+' Pulihkan Data (Recovery)</button>'+
    '</div></div>'+

    '<input type="file" id="bk-file-input" accept=".json,application/json" class="hidden" data-in="bkfile">'+
    pemeliharaanCard()+

    '<div class="grid g3" style="margin-bottom:20px">'+
      kpi('Status Backend GAS','<span id="bk-ping-res"><span class="pill ok">'+ic('check','s')+' Aktif (REST API)</span></span>','<small>'+(LAST_PING_MS!=null?LAST_PING_MS+' ms latency':'Klik tes untuk cek respon')+'</small>','server','gold')+
      kpi('Estimasi Sel Terpakai',nf.format(m?m.cells:0)+' <small>sel</small>','<small>Batas Google Sheets: 10 Juta sel</small>','database')+
      kpi('Ukuran Snapshot Data',(m?m.jsonSizeKB:0)+' <small>KB</small>','<small>Versi state: '+(S.ver||'1')+' • '+S.trx.length+' transaksi</small>','file')+
    '</div>'+

    '<div class="grid dash2" style="margin-bottom:20px">'+
      '<div class="card">'+
        '<div class="hd"><div><h3>Kapasitas &amp; Kuota Google Sheets</h3><small>Google Spreadsheet database (🗃️ Database — Putri Bali POS)</small></div>'+
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
          '<div class="tr"><span class="tm"><small>Proyek Apps Script</small><b>Putri Bali POS</b></span></div>'+
          '<div class="tr"><span class="tm"><small>Folder Google Drive</small><b>Putri Bali POS</b></span></div>'+
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
          '<tr><td><code>resetPasswordSuperAdmin()</code></td><td>Mereset sandi Owner ke <b>PutriBali@2026</b> (atau isi PASSWORD_BARU_SUPERADMIN) dan mengeluarkan semua sesi Owner.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="resetPasswordSuperAdmin()">Salin</button></td></tr>'+
          '<tr><td><code>bukaKunciProduksi()</code></td><td>Membuka kunci produksi bila benar-benar perlu reset data.</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="bukaKunciProduksi()">Salin</button></td></tr>'+
          '<tr><td><code>pasangTrigger()</code></td><td>Memasang ulang pekerja latar (antrean notifikasi tiap menit + tugas per jam).</td><td class="r"><button class="btn sm" data-a="bkcopy" data-v="pasangTrigger()">Salin</button></td></tr>'+
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
  const filename='backup_putri_bali_pos_'+safeDate+'.json';
  const backupData={
    appName:'Putri Bali POS',backupTime:now,
    storeName:S.setting?S.setting.namaToko:'Toko Emas & Perak Putri Bali',
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
  const rows=S.trx.map(t=>[t.transaksiId,t.waktu,uname(t.operatorId),t.jenis,t.kategori||'',t.kadar||'',t.berat||0,t.pelanggan||'',t.metodeBayar||'',t.nominal||0,t.status||'',cleanCatatan(t.catatan||'')]);
  exportCSV(headers,rows,'transaksi_putri_bali_'+today()+'.csv');
  toast('Data transaksi berhasil diekspor ke CSV','ok');
};

A.bkcsvkas=()=>{
  if(!S||!S.kas||!S.kas.length){toast('Belum ada mutasi kas untuk diekspor','err');return}
  const headers=['ID Mutasi','Waktu','Operator','Arah','Sumber','Referensi','Nominal (Rp)','Saldo Akhir (Rp)'];
  const rows=S.kas.map(m=>[m.mutasiKasId,m.waktu,uname(m.operatorId),m.arah,m.sumber,m.referensiId||'',m.nominal||0,m.saldo||0]);
  exportCSV(headers,rows,'mutasi_kas_putri_bali_'+today()+'.csv');
  toast('Mutasi kas berhasil diekspor ke CSV','ok');
};

A.bkcopy=v=>{
  const text=v==='gasurl'?((window.APP_CONFIG&&window.APP_CONFIG.GAS_URL)||''):
             v==='scriptid'?((window.APP_CONFIG&&window.APP_CONFIG.SCRIPT_ID)||'-'):v;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>toast('Berhasil disalin ke papan klip','ok'));
  }else{prompt('Salin teks berikut:',text)}
};

A.bkcopyclip=()=>{
  if(!S)return;
  const summary=JSON.stringify({
    appName:'Putri Bali POS',backupTime:nowWIT(),
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
        '<li>Buka spreadsheet database Anda (<b>🗃️ Database — Putri Bali POS</b>) di Google Drive.</li>'+
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
        toast('Format file tidak valid. Pastikan file adalah backup JSON dari Putri Bali POS / Permata POS.','err');
        return;
      }
      BK_TEMP=dataState;
      const bTime=parsed.backupTime||parsed.now||'Tidak tertera';
      const sName=(dataState.setting&&dataState.setting.namaToko)||'Toko Emas Putri Bali';
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
    const safetyBackup={appName:'Putri Bali POS (Auto Safety Backup)',backupTime:nowWIT(),state:S};
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

/* ============ PROFIL & PENGATURAN KASIR ============ */
P.profil_kasir=function(){
  const u=S.me, currPhoto=(u&&u.foto)||getStoredPhoto(u.userId);
  const td=today();
  const shiftTrx=S.trx.filter(t=>live(t)&&t.operatorId===u.userId&&t.waktu.slice(0,10)===td);
  const totalOmzet=shiftTrx.filter(isJual).reduce((s,t)=>s+t.nominal,0);
  const absHariIni=(S.absensi||[]).find(a=>a.userId===u.userId&&a.tanggal===td);
  const hr=+nowWIT().slice(11,13);
  const shiftName=hr<13?'Shift Pagi':'Shift Siang';

  return '<div class="profil-kasir-wrap">'+
    '<div class="pk-hero-card">'+
      '<div class="pk-avatar-box">'+
        (currPhoto
          ? '<img src="'+esc(currPhoto)+'" alt="'+esc(u.nama)+'" class="pk-av-img">'
          : '<div class="pk-av-fallback"><span>'+esc((u.nama||'U').slice(0,2).toUpperCase())+'</span></div>')+
        '<button type="button" class="upop-cam-badge" data-a="avchoose" data-v="'+esc(u.userId)+'" title="Ubah Foto Profil">'+ic('camera','s')+'</button>'+
      '</div>'+
      '<div class="pk-hero-info">'+
        '<h2>'+esc(u.nama)+'</h2>'+
        '<p style="color:#d4d4d8;font-size:13px">@'+esc(u.username||u.userId)+(u.telepon?' · '+esc(u.telepon):'')+'</p>'+
        '<div class="pk-meta-row">'+
          '<span class="tag gold">'+ic('user','s')+' Kasir POS</span>'+
          '<span class="tag ok">'+ic('clock','s')+' '+shiftName+'</span>'+
          (absHariIni?'<span class="tag ok">Absen: '+esc(absHariIni.jamMasuk)+' WIT</span>':'<span class="tag warn">Belum Absen Masuk</span>')+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="grid g2" style="margin-bottom:4px">'+
      '<div class="card" style="padding:14px">'+
        '<small style="color:var(--mut);display:block;margin-bottom:4px">Transaksi Shift Saya Hari Ini</small>'+
        '<b style="font-size:18px;color:#059669">'+rp(totalOmzet)+'</b>'+
        '<small style="display:block;color:var(--mut);margin-top:2px">'+shiftTrx.length+' nota tercatat</small>'+
      '</div>'+
      '<div class="card" style="padding:14px">'+
        '<small style="color:var(--mut);display:block;margin-bottom:4px">Saldo Kas Laci Aktif</small>'+
        '<b style="font-size:18px;color:#d97706">'+rp(S.saldo.kas)+'</b>'+
        '<small style="display:block;color:var(--mut);margin-top:2px">Siap digunakan transaksi</small>'+
      '</div>'+
    '</div>'+

    '<div class="pk-card">'+
      '<div class="hd"><h3>Pengaturan &amp; Operasional Kasir</h3><small>Akses Kasir</small></div>'+
      '<div class="pk-menu-list">'+
        '<button class="pk-menu-item" data-a="go" data-v="kas">'+
          '<span class="pk-menu-icon gold">'+ic('wallet')+'</span>'+
          '<div class="pk-menu-text"><b>Kas Laci &amp; Tutup Kas</b><small>Lihat mutasi kas masuk/keluar &amp; setoran kasir</small></div>'+
          ic('arrow','s')+
        '</button>'+
        '<button class="pk-menu-item" data-a="go" data-v="absensi">'+
          '<span class="pk-menu-icon">'+ic('pin')+'</span>'+
          '<div class="pk-menu-text"><b>Absensi GPS &amp; Selfie</b><small>Lakukan absensi masuk/pulang atau ajukan izin</small></div>'+
          ic('arrow','s')+
        '</button>'+
        '<button class="pk-menu-item" data-a="avchoose" data-v="'+esc(u.userId)+'">'+
          '<span class="pk-menu-icon">'+ic('camera')+'</span>'+
          '<div class="pk-menu-text"><b>Ubah Foto Profil</b><small>Perbarui foto profil yang tampil di sistem &amp; nota</small></div>'+
          ic('arrow','s')+
        '</button>'+
        '<button class="pk-menu-item" data-a="pass">'+
          '<span class="pk-menu-icon">'+ic('key')+'</span>'+
          '<div class="pk-menu-text"><b>Ubah PIN / Kata Sandi</b><small>Ganti PIN atau kata sandi akun kasir</small></div>'+
          ic('arrow','s')+
        '</button>'+
        '<button class="pk-menu-item" data-a="izin">'+
          '<span class="pk-menu-icon">'+ic('cal')+'</span>'+
          '<div class="pk-menu-text"><b>Pengajuan Izin / Cuti / Sakit</b><small>Kirim pengajuan izin langsung ke Owner</small></div>'+
          ic('arrow','s')+
        '</button>'+
        '<button class="pk-menu-item" data-a="logout">'+
          '<span class="pk-menu-icon" style="background:#fee2e2;color:#dc2626">'+ic('logout')+'</span>'+
          '<div class="pk-menu-text"><b style="color:#dc2626">Keluar dari Akun</b><small style="color:#ef4444">Akhiri sesi shift kasir pada perangkat ini</small></div>'+
          ic('arrow','s')+
        '</button>'+
      '</div>'+
    '</div>'+
    '<input type="file" id="av-file-input" accept="image/*" class="hidden" data-in="avfile" data-uid="'+esc(u.userId)+'">'+
  '</div>';
};

/* =====================================================================
   MODUL TAMBAHAN v3 — Putri Bali POS
   • Pengajuan Karyawan (edit / batal / hapus) → ACC Owner
   • Tugas & pesan Owner → Karyawan
   • WhatsApp & Notifikasi (Fonnte + Email): Blast, Antrean, Konfigurasi
   • CRM Pelanggan (Nama · Email · WA) + nilai belanja
   • Migrasi Data (spreadsheet lama / file cadangan) + Pemeliharaan
   Pola instan: render dari cache dulu (SWR), segarkan di latar.
   ===================================================================== */
function op(name,data){
  return call('apiCall',[TOKEN,name,data||{},'']).then(r=>{
    if(r&&r.expired){toast('Sesi berakhir, silakan masuk lagi','err');logout(true);return {success:false,message:'Sesi berakhir'}}
    return r||{success:false,message:'Tidak ada respons'};
  }).catch(e=>({success:false,message:(e&&e.message)||'Koneksi terputus'}));
}
const MC={};
function mcKey(k){return 'pb_mc_'+(S&&S.me?S.me.userId:'x')+'_'+k}
/** Stale-while-revalidate: tampilkan cache seketika, ambil server bila sudah > fresh ms. */
function swr(k,name,data,onData,fresh){
  let c=MC[k];
  if(!c){try{c=JSON.parse(LS.g(mcKey(k))||'null')}catch(e){c=null}if(c)MC[k]=c}
  if(c)onData(c.d,true);
  if(c&&Date.now()-c.t<(fresh||60000))return Promise.resolve(c.d);
  return op(name,data).then(r=>{
    if(!r.success){if(!c)onData(null,false,r.message);return null}
    const h=JSON.stringify(r.data);MC[k]={t:Date.now(),d:r.data};
    if(h.length<400000)LS.s(mcKey(k),JSON.stringify(MC[k]));
    if(!c||JSON.stringify(c.d)!==h)onData(r.data,false);
    return r.data;
  });
}
function rerender(pg){if(CUR===pg){const el=$('#pg-'+pg);if(el)el.innerHTML=P[pg]();hydrateIcons(el)}}

/* ---------- Pelanggan untuk isian cepat ---------- */
function pelangganList(){
  const m={};
  sortD(S.trx||[]).forEach(t=>{const hp=String(t.teleponPelanggan||'');if(hp&&t.pelanggan&&!m[hp])m[hp]={nama:t.pelanggan,hp:hp,alamat:t.alamatPelanggan||''}});
  return Object.keys(m).slice(0,200).map(k=>m[k]);
}
IN.pelpick=(v,el)=>{
  const f=el.form;if(!f)return;const p=pelangganList().find(x=>x.nama===v);
  if(p){if(f.teleponPelanggan&&!f.teleponPelanggan.value)f.teleponPelanggan.value=p.hp;if(f.alamatPelanggan&&!f.alamatPelanggan.value)f.alamatPelanggan.value=p.alamat}
};

/* ---------- Pengajuan Karyawan ---------- */
F.ajukanTrx=function(kind,id){
  const t=findTrx(id);if(!t)return;
  if(String(t.transaksiId).indexOf('TMP-')===0&&Q.length){toast('Tunggu sebentar, nota masih disinkronkan…','err');return}
  if(S.approval.some(a=>a.referensiId===t.transaksiId&&a.status==='MENUNGGU')){toast('Nota ini sudah punya pengajuan yang menunggu Owner.','err');return}
  const push=(jenis,ringkasan,data)=>S.approval.push({approvalId:'TMP-'+Date.now(),jenis:jenis,referensiId:t.transaksiId,pengajuId:S.me.userId,status:'MENUNGGU',ringkasan:ringkasan,data:data||null,createdAt:nowWIT()});
  if(kind==='BATAL'){
    openForm({title:'Ajukan Pembatalan Nota #'+t.transaksiId,ok:'Kirim ke Owner',pre:'<div class="mini" style="margin-bottom:12px"><small>'+esc(t.kategori||jenisLbl[t.jenis])+' · '+esc(t.pelanggan||'-')+'</small><div class="big">'+rp(t.nominal)+'</div></div>',
      fields:[{k:'alasan',l:'Alasan pembatalan',t:'ta',req:1}],
      fn:x=>{if(x.alasan.length<3)return 'Alasan terlalu singkat.';
        mut('trxAjukanBatal',{transaksiId:t.transaksiId,alasan:x.alasan},()=>{t.status='DIAJUKAN_BATAL';push('PEMBATALAN_TRX','Batal nota '+t.transaksiId+' ('+rp(t.nominal)+') — '+x.alasan)});
        closeModal();toast('Pengajuan pembatalan dikirim ke Owner','ok')}});
  }else if(kind==='HAPUS'){
    openForm({title:'Ajukan Hapus Nota #'+t.transaksiId,ok:'Kirim ke Owner',fields:[{k:'alasan',l:'Alasan penghapusan (mis. data dobel)',t:'ta',req:1}],
      fn:x=>{if(x.alasan.length<3)return 'Alasan terlalu singkat.';
        mut('trxAjukanHapus',{transaksiId:t.transaksiId,alasan:x.alasan},()=>push('HAPUS_TRX','Hapus nota '+t.transaksiId+' ('+rp(t.nominal)+') — '+x.alasan));
        closeModal();toast('Pengajuan hapus dikirim ke Owner','ok')}});
  }else{
    openForm({title:'Ajukan Edit Nota #'+t.transaksiId,ok:'Kirim ke Owner',pre:'<small style="display:block;margin-bottom:12px;color:var(--mut)">Perubahan baru berlaku setelah disetujui Owner.</small>',
      fields:[{k:'pelanggan',l:'Nama Pelanggan',v:t.pelanggan||''},{k:'teleponPelanggan',l:'No. HP / WA',v:t.teleponPelanggan||'',half:1},{k:'alamatPelanggan',l:'Alamat',v:t.alamatPelanggan||'',half:1},
        {k:'kategori',l:'Kategori / Nama Perhiasan',v:t.kategori||''},{k:'kadar',l:'Kadar',v:t.kadar||'',half:1},{k:'berat',l:'Berat',t:'num',suf:'gr',v:t.berat||0,half:1},
        {k:'nominal',l:'Nominal (Rp)',t:'rp',v:t.nominal||0,half:1},{k:'metodeBayar',l:'Metode',t:'select',o:['TUNAI','TRANSFER','QRIS','EDC'],v:t.metodeBayar||'TUNAI',half:1},
        {k:'catatan',l:'Catatan',t:'ta',v:cleanCatatan(t.catatan||'')},{k:'alasan',l:'Alasan perubahan',t:'ta',req:1}],
      fn:v=>{v.transaksiId=t.transaksiId;const beda=['pelanggan','teleponPelanggan','alamatPelanggan','kategori','kadar','berat','nominal','metodeBayar','catatan'].filter(k=>String(v[k]==null?'':v[k])!==String(t[k]==null?'':t[k]));
        if(!beda.length)return 'Belum ada data yang diubah.';
        const vals={};beda.forEach(k=>vals[k]=v[k]);
        mut('trxAjukanEdit',v,()=>push('EDIT_TRX','Edit nota '+t.transaksiId+': '+beda.map(k=>k+' → '+v[k]).join('; ')+' — '+v.alasan,{vals:vals}));
        closeModal();toast('Pengajuan edit dikirim ke Owner','ok')}});
  }
};

/* ---------- Tugas / pesan Owner ---------- */
A.tugas=()=>{
  const ks=(S.users||[]).filter(u=>u.role!=='OWNER'&&u.status==='AKTIF');
  openForm({title:'Kirim Tugas / Pesan ke Karyawan',ok:'Kirim',fields:[{k:'targetUserId',l:'Penerima',t:'select',o:[['ALL','Semua karyawan']].concat(ks.map(u=>[u.userId,u.nama]))},{k:'judul',l:'Judul',req:1},{k:'isi',l:'Isi tugas / pesan',t:'ta',req:1}],
    fn:v=>{mut('pesanKirim',v,()=>S.pesanKaryawan.push({pesanId:'TMP-'+Date.now(),judul:v.judul,isi:v.isi,targetUserId:v.targetUserId,pengirimId:S.me.userId,pengirimNama:S.me.nama,waktu:nowWIT(),readBy:[]}));
      toast('Tugas dikirim. Karyawan juga dikabari lewat WhatsApp bila notifikasi aktif.','ok')}});
};

/* =====================================================================
   WHATSAPP & NOTIFIKASI
   ===================================================================== */
const NT={tab:'blast',cfg:null,aud:null,sel:{},src:{segmen:'',statusWA:'',tag:'',manual:''},hanyaWA:false,judul:'',pesan:'Halo {nama} 🙏\nPromo spesial di {toko} minggu ini. Kunjungi kami di Pasar Oyehe, Nabire.\n\nBalas STOP untuk berhenti.',batch:20,jeda:'5',blasts:null,queue:null,qf:{status:'',kanal:''},aktif:'',auto:false,cek:''};
P.notif=function(){
  if(!NT.cfg)swr('ncfg','notifConfig',{},d=>{if(d){NT.cfg=d;if(!NT._b){NT.batch=d.batchDefault||20;NT.jeda=d.jeda||'5';NT._b=1}}rerender('notif')},30000);
  const tabs=[['blast','Blast WhatsApp','send'],['antrean','Antrean & Riwayat','history'],['konfig','Konfigurasi','sliders']];
  const c=NT.cfg;
  const head='<div class="ph"><div><h1>WhatsApp &amp; Notifikasi</h1><p>Notifikasi otomatis (WA Fonnte &amp; Email) ke Owner, karyawan, dan pelanggan, plus blast promo per batch.</p></div>'+
    (c?'<div class="chips"><span class="pill '+(c.waAktif?'ok':'bad')+'">WA '+(c.waAktif?'AKTIF':'NONAKTIF')+'</span><span class="pill '+(c.emailAktif?'ok':'bad')+'">Email '+(c.emailAktif?'AKTIF':'NONAKTIF')+'</span></div>':'')+'</div>'+
    '<div class="seg" style="margin-bottom:16px">'+tabs.map(x=>'<button class="'+(NT.tab===x[0]?'on':'')+'" data-a="ntab" data-v="'+x[0]+'">'+ic(x[2],'s')+' '+x[1]+'</button>').join('')+'</div>';
  if(!c)return head+'<div class="card">'+empty('Memuat konfigurasi…')+'</div>';
  return head+(NT.tab==='blast'?ntBlast():NT.tab==='antrean'?ntAntrean():ntKonfig());
};
A.ntab=v=>{NT.tab=v;if(v==='antrean')ntLoadQueue();if(v==='blast')ntLoadBlasts();rerender('notif')};

function waBadge(s){return s==='Terdaftar'?'<span class="tag ok">✓ WA</span>':s==='Tidak Terdaftar'?'<span class="tag bad">✕ bukan WA</span>':'<span class="tag">? belum dicek</span>'}
function ntPenerima(){
  if(!NT.aud)return [];
  return NT.aud.rows.filter(r=>r.valid&&!r.ganda&&!r.optOut&&NT.sel[r.id]!==false&&(!NT.hanyaWA||r.statusWA==='Terdaftar'));
}
function ntBlast(){
  if(!NT.blasts)ntLoadBlasts();
  const a=NT.aud,pen=ntPenerima(),seg=['','Pelanggan','Pelanggan VIP','Karyawan','Mitra / Piutang','Calon Pelanggan'];
  const r=a&&a.ringkas;
  const jedaRata=(()=>{const p=String(NT.jeda).split('-').map(Number);return p.length>1?(p[0]+p[1])/2:p[0]||5})();
  const nb=Math.ceil(pen.length/(NT.batch||20)),menit=Math.ceil(pen.length*jedaRata/60)+nb;
  const contoh=pen[0]||{nama:'Ibu Fatimah'};
  const prev=String(NT.pesan).replace(/\{nama\}/g,contoh.nama).replace(/\{toko\}/g,S.setting.namaToko).replace(/\{link\}/g,location.href.split('#')[0]);
  const aktif=(NT.blasts||[]).filter(b=>b.status==='Berjalan');
  return (aktif.length?aktif.map(b=>'<div class="card" style="margin-bottom:14px;border:1px solid var(--gold)"><div class="hd"><div><h3>'+esc(b.judul)+'</h3><small>Batch '+b.ukuranBatch+' · jeda '+esc(b.jedaDetik)+' dtk · server tetap mengirim 1 batch/menit walau halaman ditutup</small></div><span class="pill warn">Berjalan</span></div>'+
      '<div class="track" style="height:10px;margin:8px 0"><i style="width:'+b.persen+'%"></i></div><small>Terkirim <b>'+b.terkirim+'</b> · Gagal <b>'+b.gagal+'</b> · Sisa <b>'+b.sisa+'</b> dari '+b.total+'</small>'+
      '<div class="chips" style="margin-top:10px"><button class="btn sm pri" data-a="ntbproc" data-v="'+b.blastId+'">'+ic('send','s')+' Kirim Batch Berikutnya Sekarang</button>'+
      '<label class="chk"><input type="checkbox" data-in="ntauto" data-v="'+b.blastId+'" '+(NT.auto===b.blastId?'checked':'')+'> Otomatis</label>'+
      '<button class="btn sm bad" data-a="ntbstop" data-v="'+b.blastId+'">Hentikan</button></div></div>').join(''):'')+
  '<div class="grid dash2">'+
   '<div class="card"><div class="hd"><h3>1. Pilih Sasaran</h3><small>dari CRM Pelanggan</small></div>'+
    '<div class="row2" style="gap:10px"><label class="fld"><span class="lb">Segmen</span><select class="inp" data-in="ntsrc" data-v="segmen">'+seg.map(x=>'<option value="'+x+'"'+(NT.src.segmen===x?' selected':'')+'>'+(x||'Semua kontak')+'</option>').join('')+'</select></label>'+
    '<label class="fld"><span class="lb">Status WA</span><select class="inp" data-in="ntsrc" data-v="statusWA">'+[['','Semua'],['Terdaftar','Terdaftar WA'],['Belum','Belum dicek']].map(x=>'<option value="'+x[0]+'"'+(NT.src.statusWA===x[0]?' selected':'')+'>'+x[1]+'</option>').join('')+'</select></label></div>'+
    '<label class="fld"><span class="lb">Tag (opsional)</span><input class="inp" data-in="ntsrc" data-v="tag" value="'+esc(NT.src.tag)+'" placeholder="mis. Lebaran"></label>'+
    '<label class="fld"><span class="lb">Nomor tambahan manual (satu per baris: 0812…|Nama)</span><textarea class="inp" rows="2" data-in="ntsrc" data-v="manual">'+esc(NT.src.manual)+'</textarea></label>'+
    '<div class="chips"><button class="btn sm pri" data-a="ntaud">'+ic('users','s')+' Muat Penerima</button><button class="btn sm" data-a="ntcek"'+(a?'':' disabled')+'>'+ic('phone','s')+' Deteksi Nomor WA</button>'+(NT.cek?'<small>'+esc(NT.cek)+'</small>':'')+'</div>'+
    (r?'<div class="chips" style="margin:10px 0"><span class="pill">Total '+r.total+'</span><span class="pill ok">Valid '+r.valid+'</span><span class="pill bad">Tidak valid '+r.tidakValid+'</span><span class="pill warn">Ganda '+r.ganda+'</span><span class="pill">Opt-out '+r.optOut+'</span><span class="pill ok">✓ WA '+r.terdaftarWA+'</span></div>'+
      '<label class="chk"><input type="checkbox" data-in="nthanya" '+(NT.hanyaWA?'checked':'')+'> Kirim hanya ke nomor terdeteksi WhatsApp</label>'+
      '<div class="tbw" style="max-height:300px;overflow:auto;margin-top:8px"><table><thead><tr><th></th><th>Nama</th><th>Nomor</th><th>WA</th></tr></thead><tbody>'+
      a.rows.slice(0,400).map(x=>'<tr style="'+(!x.valid||x.ganda||x.optOut?'opacity:.45':'')+'"><td><input type="checkbox" data-in="ntsel" data-v="'+esc(x.id)+'" '+(x.valid&&!x.ganda&&!x.optOut&&NT.sel[x.id]!==false?'checked':'')+(x.valid&&!x.ganda&&!x.optOut?'':' disabled')+'></td><td>'+esc(x.nama)+'<br><small>'+esc(x.segmen)+(x.optOut?' · opt-out':'')+(x.ganda?' · ganda':'')+'</small></td><td class="mono">'+esc(x.hp||'-')+'</td><td>'+waBadge(x.statusWA)+'</td></tr>').join('')+
      '</tbody></table></div>':'<div class="empty">Klik "Muat Penerima". Data kontak berasal dari CRM Pelanggan (disinkron otomatis dari transaksi).</div>')+
   '</div>'+
   '<div class="card"><div class="hd"><h3>2. Tulis Pesan</h3></div>'+
    '<label class="fld"><span class="lb">Judul internal</span><input class="inp" data-in="ntj" value="'+esc(NT.judul)+'" placeholder="mis. Promo Lebaran"></label>'+
    '<div class="chips" style="margin-bottom:6px">'+['{nama}','{toko}','{link}'].map(x=>'<button type="button" class="btn xs" data-a="ntvar" data-v="'+x+'">'+x+'</button>').join('')+'</div>'+
    '<textarea class="inp" id="nt-pesan" rows="6" data-in="ntp">'+esc(NT.pesan)+'</textarea>'+
    '<div class="wa-preview"><div class="wa-bubble">'+esc(prev).replace(/\*([^*]+)\*/g,'<b>$1</b>').replace(/\n/g,'<br>')+'<small>'+nowWIT().slice(11,16)+' ✓✓</small></div></div>'+
    '<div class="hd" style="margin-top:12px"><h3>3. Ukuran Batch &amp; Jeda</h3></div>'+
    '<div class="seg" style="margin-bottom:10px">'+[10,20,50].map(n=>'<button class="'+(+NT.batch===n?'on':'')+'" data-a="ntbatch" data-v="'+n+'">'+n+' / batch</button>').join('')+'</div>'+
    '<label class="fld"><span class="lb">Jeda antarpesan (detik, boleh acak "3-8")</span><input class="inp" data-in="ntjeda" value="'+esc(NT.jeda)+'"></label>'+
    '<div class="mini" style="margin-bottom:12px"><small>'+pen.length+' penerima → '+nb+' batch · perkiraan ±'+menit+' menit</small></div>'+
    '<button class="btn pri blk" data-a="ntgo"'+(pen.length&&NT.cfg.waAktif?'':' disabled')+'>'+ic('send','s')+' Mulai Blast ('+pen.length+' nomor)</button>'+
    (!NT.cfg.waAktif?'<small style="display:block;margin-top:8px;color:var(--bad)">WhatsApp belum aktif — atur token Fonnte di tab Konfigurasi.</small>':'')+
    '<small style="display:block;margin-top:8px">Tips anti-blokir: mulai batch 10, jeda acak ≥5 detik, jangan kirim tautan sama ke ratusan orang dalam 1 jam.</small>'+
   '</div></div>'+
  '<div class="card" style="margin-top:16px"><div class="hd"><h3>Riwayat Blast</h3><button class="btn sm gh" data-a="ntblasts">'+ic('refresh','s')+'</button></div>'+
   ((NT.blasts||[]).length?(NT.blasts||[]).map(b=>'<div class="tr"><span class="ico '+(b.status==='Selesai'?'ok':b.status==='Berjalan'?'gold':'bad')+'">'+ic('send')+'</span><span class="tm"><b>'+esc(b.judul)+'</b><small>'+tgl(b.tanggal)+' · '+b.total+' penerima · batch '+b.ukuranBatch+' · '+esc(b.status)+'</small><div class="track"><i style="width:'+b.persen+'%"></i></div></span><span class="ta"><b>'+b.terkirim+'/'+b.total+'</b><small>gagal '+b.gagal+'</small></span></div>').join(''):empty('Belum ada blast.'))+'</div>';
}
IN.ntsrc=(v,el)=>{NT.src[el.dataset.v]=v};
IN.ntj=v=>{NT.judul=v};
IN.ntp=v=>{NT.pesan=v;const b=$('.wa-bubble');if(b){const c=ntPenerima()[0]||{nama:'Ibu Fatimah'};b.innerHTML=esc(v.replace(/\{nama\}/g,c.nama).replace(/\{toko\}/g,S.setting.namaToko)).replace(/\*([^*]+)\*/g,'<b>$1</b>').replace(/\n/g,'<br>')+'<small>✓✓</small>'}};
IN.ntjeda=v=>{NT.jeda=v};
IN.nthanya=(v,el)=>{NT.hanyaWA=el.checked;rerender('notif')};
IN.ntsel=(v,el)=>{NT.sel[el.dataset.v]=el.checked;rerender('notif')};
IN.ntauto=(v,el)=>{NT.auto=el.checked?el.dataset.v:false;if(NT.auto)ntAutoTick()};
A.ntvar=v=>{const t=$('#nt-pesan');if(!t)return;const p=t.selectionStart||t.value.length;t.value=t.value.slice(0,p)+v+t.value.slice(p);NT.pesan=t.value;t.focus()};
A.ntbatch=v=>{NT.batch=+v;rerender('notif')};
A.ntaud=()=>{toast('Memuat penerima…');const d=Object.assign({},NT.src);if(d.statusWA==='Belum')d.statusWA='';
  op('waAudience',d).then(r=>{if(!r.success)return toast(r.message,'err');NT.aud=r.data;NT.sel={};rerender('notif')})};
A.ntcek=()=>{
  const nomor=(NT.aud?NT.aud.rows:[]).filter(x=>x.valid&&!x.statusWA).map(x=>x.hp);
  if(!nomor.length)return toast('Semua nomor sudah dicek','ok');
  let i=0;const step=()=>{const part=nomor.slice(i,i+50);if(!part.length){NT.cek='';toast('Deteksi WA selesai','ok');return A.ntaud()}
    NT.cek='Mengecek '+Math.min(i+50,nomor.length)+'/'+nomor.length;rerender('notif');
    op('waValidate',{nomor:part}).then(r=>{if(!r.success){NT.cek='';rerender('notif');return toast(r.message,'err')}i+=50;step()})};step();
};
A.ntgo=()=>{
  const pen=ntPenerima();if(!pen.length)return;
  if(!confirm('Kirim blast ke '+pen.length+' nomor dalam batch '+NT.batch+'?'))return;
  op('waBlastCreate',{judul:NT.judul,pesan:NT.pesan,ukuranBatch:NT.batch,jeda:NT.jeda,sasaran:NT.src.segmen||'Semua',penerima:pen.map(p=>({id:p.id,nama:p.nama,hp:p.hp,info:p.info}))})
    .then(r=>{if(!r.success)return toast(r.message,'err');toast(r.message,'ok');NT.auto=r.data.blastId;ntLoadBlasts().then(()=>A.ntbproc(r.data.blastId))});
};
function ntLoadBlasts(){return op('waBlastList',{}).then(r=>{if(r.success){NT.blasts=r.data.rows;rerender('notif')}})}
A.ntblasts=()=>ntLoadBlasts();
A.ntbproc=v=>op('waBlastProcess',{blastId:v}).then(r=>{if(r.success){NT.blasts=r.data.rows;rerender('notif');if(NT.auto===v)ntAutoTick()}});
A.ntbstop=v=>{if(!confirm('Hentikan blast? Pesan yang belum terkirim dibatalkan.'))return;NT.auto=false;op('waBlastStop',{blastId:v}).then(r=>{toast(r.message,r.success?'ok':'err');ntLoadBlasts()})};
function ntAutoTick(){
  clearTimeout(NT._t);const b=(NT.blasts||[]).find(x=>x.blastId===NT.auto&&x.status==='Berjalan');if(!b){NT.auto=false;return}
  const p=String(b.jedaDetik).split('-').map(Number),rata=p.length>1?(p[0]+p[1])/2:p[0]||5;
  NT._t=setTimeout(()=>{if(NT.auto===b.blastId&&CUR==='notif'&&!document.hidden)A.ntbproc(b.blastId)},Math.max(30,b.ukuranBatch*rata)*1000);
}
function ntLoadQueue(){return op('notifQueue',NT.qf).then(r=>{if(r.success){NT.queue=r.data;rerender('notif')}})}
function ntAntrean(){
  if(!NT.queue)ntLoadQueue();
  const q=NT.queue,r=q?q.ringkas:{};
  return '<div class="grid g4" style="margin-bottom:16px">'+kpi('Menunggu',nf.format(r.Antri||0),'','clock')+kpi('Terkirim',nf.format(r.Terkirim||0),'','check','gold')+kpi('Gagal',nf.format(r.Gagal||0),'','alert')+kpi('Dibatalkan',nf.format(r.Batal||0),'','x')+'</div>'+
   '<div class="card"><div class="hd"><div class="chips"><select class="inp sm" data-in="ntqf" data-v="status">'+[['','Semua status'],['Antri','Menunggu'],['Terkirim','Terkirim'],['Gagal','Gagal'],['Batal','Batal']].map(x=>'<option value="'+x[0]+'"'+(NT.qf.status===x[0]?' selected':'')+'>'+x[1]+'</option>').join('')+'</select>'+
   '<select class="inp sm" data-in="ntqf" data-v="kanal">'+[['','Semua kanal'],['WA','WhatsApp'],['EMAIL','Email']].map(x=>'<option value="'+x[0]+'"'+(NT.qf.kanal===x[0]?' selected':'')+'>'+x[1]+'</option>').join('')+'</select></div>'+
   '<div class="chips"><button class="btn sm pri" data-a="ntproc">'+ic('send','s')+' Proses Sekarang</button><button class="btn sm" data-a="ntretry">'+ic('refresh','s')+' Ulangi yang Gagal</button></div></div>'+
   (q?(q.rows.length?'<div class="tbw"><table><thead><tr><th>Waktu</th><th>Kanal</th><th>Tujuan</th><th>Event</th><th>Pesan</th><th>Status</th></tr></thead><tbody>'+
     q.rows.map(x=>'<tr><td><small>'+esc(String(x.dikirimPada||x.dibuatPada).slice(5,16))+'</small></td><td><span class="tag '+(x.kanal==='WA'?'ok':'')+'">'+x.kanal+'</span></td><td class="mono"><small>'+esc(x.tujuan)+'</small><br><small>'+esc(x.namaPenerima)+'</small></td><td><small>'+esc(x.event)+'</small></td><td><small>'+esc(x.pesan)+'</small></td><td><span class="tag '+(x.status==='Terkirim'?'ok':x.status==='Gagal'?'bad':x.status==='Antri'?'warn':'')+'">'+x.status+'</span>'+(x.respon&&x.status!=='Terkirim'?'<br><small>'+esc(x.respon)+'</small>':'')+'</td></tr>').join('')+'</tbody></table></div>':empty('Antrean kosong.')):empty('Memuat…'))+'</div>';
}
IN.ntqf=(v,el)=>{NT.qf[el.dataset.v]=v;ntLoadQueue()};
A.ntproc=()=>{toast('Memproses antrean…');op('notifProcessNow',{}).then(r=>{toast(r.success?'Terkirim WA '+(r.data.wa||0)+', email '+(r.data.email||0)+(r.data.gagal?', gagal '+r.data.gagal:''):r.message,r.success?'ok':'err');ntLoadQueue()})};
A.ntretry=()=>op('notifRetry',{}).then(r=>{toast(r.message,r.success?'ok':'err');ntLoadQueue()});

function ntKonfig(){
  const c=NT.cfg,sw=(id,on,lbl,dis)=>'<label class="switch'+(dis?' dis':'')+'"><input type="checkbox" id="'+id+'" '+(on?'checked':'')+(dis?' disabled':'')+'><span></span>'+(lbl?'<b>'+lbl+'</b>':'')+'</label>';
  return '<div class="grid dash2">'+
   '<div class="card"><div class="hd"><h3>WhatsApp (Fonnte)</h3><span class="pill '+(c.adaToken?'ok':'warn')+'">'+(c.adaToken?'Token tersimpan':'Belum ada token')+'</span></div>'+
    sw('nc-wa',c.waAktif,'Notifikasi WhatsApp '+(c.waAktif?'AKTIF':'NONAKTIF'))+
    '<label class="fld" style="margin-top:12px"><span class="lb">Token Fonnte</span><input class="inp" id="nc-token" type="password" autocomplete="off" placeholder="'+esc(c.tokenMask||'tempel token dari fonnte.com → Device')+'"><small>Kosongkan bila tidak diubah. Token disimpan di server, tidak pernah dikirim ke browser.</small></label>'+
    '<label class="fld"><span class="lb">Nomor WA Owner (penerima notifikasi)</span><input class="inp" id="nc-waowner" value="'+esc(c.waOwner)+'" placeholder="08…"></label>'+
    '<div class="row2" style="gap:10px"><label class="fld"><span class="lb">Batch default</span><select class="inp" id="nc-batch">'+[10,20,50].map(n=>'<option'+(+c.batchDefault===n?' selected':'')+'>'+n+'</option>').join('')+'</select></label><label class="fld"><span class="lb">Jeda (detik)</span><input class="inp" id="nc-jeda" value="'+esc(c.jeda)+'"></label></div>'+
    sw('nc-deteksi',c.deteksiOtomatis,'Cek otomatis nomor baru terdaftar WA')+
    '<div class="chips" style="margin-top:12px"><button class="btn sm" data-a="ncdev">'+ic('phone','s')+' Cek Perangkat</button><button class="btn sm" data-a="ncwatest">'+ic('send','s')+' Kirim Tes WA</button></div><div id="nc-dev" style="margin-top:8px"></div>'+
   '</div>'+
   '<div class="card"><div class="hd"><h3>Email</h3><span class="pill">Sisa kuota hari ini: '+c.emailKuota+'</span></div>'+
    sw('nc-email',c.emailAktif,'Notifikasi Email '+(c.emailAktif?'AKTIF':'NONAKTIF'))+
    '<label class="fld" style="margin-top:12px"><span class="lb">Email Owner</span><input class="inp" id="nc-email-owner" type="email" value="'+esc(c.ownerEmail)+'"></label>'+
    '<label class="fld"><span class="lb">Nama pengirim</span><input class="inp" id="nc-nama" value="'+esc(c.namaPengirim)+'"></label>'+
    '<label class="fld"><span class="lb">URL aplikasi (untuk {link})</span><input class="inp" id="nc-url" value="'+esc(c.appUrl||location.href.split('#')[0])+'"></label>'+
    '<div class="chips"><button class="btn sm" data-a="ncemtest">'+ic('send','s')+' Kirim Tes Email</button><span class="pill '+(c.trigger?'ok':'bad')+'">Pekerja latar '+(c.trigger?'aktif':'belum aktif')+'</span></div>'+
   '</div></div>'+
   '<div class="card" style="margin-top:16px"><div class="hd"><div><h3>Matriks Notifikasi Otomatis</h3><small>Pilih kejadian mana yang dikirim lewat WA dan/atau Email. Klik Ubah untuk mengganti isi pesan.</small></div></div>'+
    '<div class="tbw"><table><thead><tr><th>Kejadian</th><th>Penerima</th><th style="text-align:center">WA</th><th style="text-align:center">Email</th><th></th></tr></thead><tbody>'+
    c.matriks.map((m,i)=>'<tr><td><b>'+esc(m.label)+'</b><br><small class="mono">'+m.kode+'</small></td><td><small>'+esc(m.untuk)+'</small></td><td style="text-align:center">'+sw('nm-wa-'+i,m.wa,'',!c.waAktif)+'</td><td style="text-align:center">'+sw('nm-em-'+i,m.email,'',!c.emailAktif)+'</td><td><button class="btn xs" data-a="nmedit" data-v="'+i+'">'+ic('edit','s')+' Ubah</button></td></tr>'+
      (NT.edit===i?'<tr><td colspan="5"><label class="fld"><span class="lb">Subjek (email)</span><input class="inp" id="nm-sub-'+i+'" value="'+esc(m.subjek)+'"></label><label class="fld"><span class="lb">Isi pesan</span><textarea class="inp" rows="6" id="nm-msg-'+i+'">'+esc(m.pesan)+'</textarea></label><button class="btn xs gh" data-a="nmdef" data-v="'+i+'">↺ Kembalikan bawaan</button></td></tr>':'')).join('')+
    '</tbody></table></div>'+
    '<button class="btn pri" style="margin-top:14px" data-a="ncsave">'+ic('check','s')+' Simpan Konfigurasi</button></div>';
}
A.nmedit=v=>{ntSimpanDraft();NT.edit=NT.edit===+v?null:+v;rerender('notif')};
A.nmdef=v=>{const m=NT.cfg.matriks[+v];m.pesan=m.pesanDefault;m.subjek=m.subjekDefault;rerender('notif')};
function ntSimpanDraft(){NT.cfg.matriks.forEach((m,i)=>{const a=$('#nm-wa-'+i),b=$('#nm-em-'+i),s=$('#nm-sub-'+i),t=$('#nm-msg-'+i);if(a)m.wa=a.checked;if(b)m.email=b.checked;if(s)m.subjek=s.value;if(t)m.pesan=t.value})}
A.ncsave=()=>{
  ntSimpanDraft();const v=id=>{const e=$('#'+id);return e?(e.type==='checkbox'?e.checked:e.value):undefined};
  const d={waAktif:v('nc-wa'),emailAktif:v('nc-email'),token:v('nc-token')||'',waOwner:v('nc-waowner'),batchDefault:+v('nc-batch'),jeda:v('nc-jeda'),deteksiOtomatis:v('nc-deteksi'),
    ownerEmail:v('nc-email-owner'),namaPengirim:v('nc-nama'),appUrl:v('nc-url'),matriks:NT.cfg.matriks.map(m=>({kode:m.kode,wa:m.wa,email:m.email,subjek:m.subjek,pesan:m.pesan}))};
  toast('Menyimpan…');op('notifConfigSave',d).then(r=>{if(!r.success)return toast(r.message,'err');NT.cfg=r.data;MC.ncfg={t:Date.now(),d:r.data};NT.edit=null;toast('Konfigurasi notifikasi disimpan','ok');rerender('notif')});
};
A.ncdev=()=>{const b=$('#nc-dev');if(b)b.innerHTML='<small>Memeriksa…</small>';op('waDevice',{}).then(r=>{const d=r.data||{};if(b)b.innerHTML=d.status===false||!r.success?'<div class="err">'+esc((d.reason)||r.message)+'</div>':'<div class="mini"><small>Perangkat '+esc(d.device||'-')+' · <b>'+esc(d.device_status||'-')+'</b> · paket '+esc(d.package||'-')+' · kuota '+esc(d.quota||'-')+'</small></div>'})};
A.ncwatest=()=>{const n=prompt('Kirim tes ke nomor WA:',(NT.cfg&&NT.cfg.waOwner)||'');if(!n)return;op('waTest',{nomor:n}).then(r=>toast(r.message,r.success?'ok':'err'))};
A.ncemtest=()=>{const e=prompt('Kirim tes ke email:',(NT.cfg&&NT.cfg.ownerEmail)||'');if(!e)return;op('emailTest',{email:e}).then(r=>toast(r.message,r.success?'ok':'err'))};

/* =====================================================================
   CRM PELANGGAN
   ===================================================================== */
const CR={f:{cari:'',segmen:'',statusWA:'',tag:'',optOut:false,duplikat:false,masalah:false,urut:'belanja',halaman:1},list:null,stats:null,sel:{}};
P.crm=function(){
  const key='crm_'+JSON.stringify(CR.f);
  if(!CR.stats)swr('crmstats','crmStats',{},d=>{if(d){CR.stats=d;rerender('crm')}},60000);
  if(!CR.list||CR.list._k!==key)swr(key,'crmList',CR.f,d=>{if(d){d._k=key;CR.list=d;rerender('crm')}},45000);
  const s=CR.stats||{},L=CR.list,nsel=Object.keys(CR.sel).filter(k=>CR.sel[k]).length;
  const k=(t,v,f,icn,cls)=>'<button class="card kpi '+(cls||'')+'" style="text-align:left" data-a="crmk" data-v="'+f+'"><span class="ci">'+ic(icn,'s')+'</span><div class="t">'+t+'</div><div class="v">'+nf.format(v||0)+'</div></button>';
  const segs=L?Object.keys(L.facet.segmen):[];
  return '<div class="ph"><div><h1>CRM Pelanggan</h1><p>Semua kontak pelanggan, karyawan, dan mitra — dirangkum otomatis dari transaksi. Klik kartu untuk menyaring.</p></div>'+
    '<div class="chips"><button class="btn sm" data-a="crmsync">'+ic('refresh','s')+' Sinkron Sekarang</button><button class="btn sm" data-a="crmimp">'+ic('upload','s')+' Import CSV</button><button class="btn sm" data-a="crmexp">'+ic('download','s')+' Ekspor</button></div></div>'+
    '<input type="file" id="crm-file" accept=".csv,text/csv" class="hidden" data-in="crmfile">'+
    '<div class="grid g3 crm-kpi" style="margin-bottom:14px">'+k('Total Kontak',s.total,'','users','gold')+k('Pelanggan VIP',s.vip,'vip','gem')+k('WA Terverifikasi',s.terdaftarWA,'wa','check')+
      k('Belum Dicek WA',s.belumCek,'belum','phone')+k('Opt-out',s.optOut,'optout','x')+k('Duplikat',s.duplikat,'dup','alert')+'</div>'+
    (s.totalBelanja?'<div class="mini" style="margin-bottom:14px"><small>Total belanja tercatat dari pelanggan ber-HP</small><div class="big">'+rp(s.totalBelanja)+'</div></div>':'')+
    '<div class="card">'+
     '<div class="chips" style="margin-bottom:10px"><button class="chip'+(!CR.f.segmen?' gold':'')+'" data-a="crmseg" data-v="">Semua</button>'+segs.map(g=>'<button class="chip'+(CR.f.segmen===g?' gold':'')+'" data-a="crmseg" data-v="'+esc(g)+'">'+esc(g)+' · '+L.facet.segmen[g]+'</button>').join('')+'</div>'+
     '<div class="row2" style="gap:10px"><input class="inp" placeholder="Cari nama, nomor, email, tag…" value="'+esc(CR.f.cari)+'" data-in="crmq"><select class="inp" data-in="crmurut">'+[['belanja','Urut: total belanja'],['terakhir','Urut: transaksi terakhir'],['nama','Urut: nama']].map(x=>'<option value="'+x[0]+'"'+(CR.f.urut===x[0]?' selected':'')+'>'+x[1]+'</option>').join('')+'</select></div>'+
     (nsel?'<div class="chips" style="margin:10px 0;padding:10px;background:var(--gold-s);border-radius:12px"><b>'+nsel+' dipilih</b><button class="btn xs" data-a="crmbulk" data-v="deteksiWA">Deteksi WA</button><button class="btn xs" data-a="crmbulk" data-v="tag">Beri Tag</button><button class="btn xs" data-a="crmblast">Blast ke Terpilih</button><button class="btn xs" data-a="crmbulk" data-v="optout">Opt-out</button><button class="btn xs" data-a="crmbulk" data-v="optin">Opt-in</button><button class="btn xs gh" data-a="crmclr">Batal pilih</button></div>':'')+
     (L?(L.rows.length?'<div class="tbw" style="margin-top:10px"><table><thead><tr><th><input type="checkbox" data-in="crmall"></th><th>Kontak</th><th>WhatsApp</th><th class="r">Belanja</th><th>Terakhir</th><th></th></tr></thead><tbody>'+
       L.rows.map(x=>{const i=x.info||{},bad=!x.noWA||x.duplikat;return '<tr style="'+(bad?'background:#fffbeb':'')+'"><td><input type="checkbox" data-in="crmsel" data-v="'+x.kontakId+'" '+(CR.sel[x.kontakId]?'checked':'')+'></td>'+
         '<td><div style="display:flex;gap:10px;align-items:center"><div class="av sm"><span>'+esc(String(x.nama||'?').split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase())+'</span></div><div><b>'+esc(x.nama)+'</b><br><span class="tag '+(x.segmen==='Pelanggan VIP'?'gold':'')+'">'+esc(x.segmen)+'</span>'+(x.tag?' <small>🏷 '+esc(x.tag)+'</small>':'')+(x.optOut==='YA'?' <span class="tag bad">opt-out</span>':'')+(x.duplikat?' <span class="tag warn">duplikat</span>':'')+'</div></div></td>'+
         '<td class="mono">'+(x.noWA?'<a href="https://wa.me/'+esc(x.noWA.replace(/^0/,'62'))+'" target="_blank" rel="noopener">'+esc(x.noWA)+'</a> '+waBadge(x.statusWA):'<small>-</small>')+(x.email?'<br><small>'+esc(x.email)+'</small>':'')+'</td>'+
         '<td class="r"><b>'+(i.totalBelanja?rpS(i.totalBelanja):'-')+'</b>'+(i.transaksi?'<br><small>'+i.transaksi+' trx'+(i.gram?' · '+i.gram+' gr':'')+'</small>':'')+'</td>'+
         '<td><small>'+(i.terakhir?tgl(i.terakhir):x.terakhirDihubungi?tgl(x.terakhirDihubungi):'-')+'</small></td><td><button class="btn xs" data-a="crmdet" data-v="'+x.kontakId+'">Detail</button></td></tr>'}).join('')+
       '</tbody></table></div>'+
       '<div class="chips" style="justify-content:space-between;margin-top:10px"><small>'+L.total+' kontak · halaman '+L.halaman+' dari '+Math.max(1,Math.ceil(L.total/L.per))+(L.syncTerakhir?' · sinkron '+new Date(L.syncTerakhir).toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}):'')+'</small><div class="chips">'+
       (L.halaman>1?'<button class="btn xs" data-a="crmpg" data-v="-1">‹ Sebelumnya</button>':'')+(L.halaman*L.per<L.total?'<button class="btn xs" data-a="crmpg" data-v="1">Berikutnya ›</button>':'')+'</div></div>'
     :empty('Belum ada kontak. Klik "Sinkron Sekarang" — kontak dibuat dari transaksi yang mengisi No. HP pelanggan.')):empty('Memuat kontak…'))+
    '</div>';
};
function crmReload(){CR.list=null;CR.stats=null;Object.keys(MC).filter(k=>k.indexOf('crm')===0).forEach(k=>{delete MC[k];LS.d(mcKey(k))});rerender('crm')}
let crmT=null;IN.crmq=v=>{clearTimeout(crmT);crmT=setTimeout(()=>{CR.f.cari=v;CR.f.halaman=1;rerender('crm')},350)};
IN.crmurut=v=>{CR.f.urut=v;rerender('crm')};
A.crmseg=v=>{CR.f.segmen=v;CR.f.halaman=1;rerender('crm')};
A.crmk=v=>{Object.assign(CR.f,{segmen:'',statusWA:'',optOut:false,duplikat:false,halaman:1});if(v==='vip')CR.f.segmen='Pelanggan VIP';if(v==='wa')CR.f.statusWA='Terdaftar';if(v==='belum')CR.f.statusWA='Belum';if(v==='optout')CR.f.optOut=true;if(v==='dup')CR.f.duplikat=true;rerender('crm')};
A.crmpg=v=>{CR.f.halaman=Math.max(1,CR.f.halaman+(+v));rerender('crm')};
IN.crmsel=(v,el)=>{CR.sel[el.dataset.v]=el.checked;rerender('crm')};
IN.crmall=(v,el)=>{(CR.list?CR.list.rows:[]).forEach(x=>CR.sel[x.kontakId]=el.checked);rerender('crm')};
A.crmclr=()=>{CR.sel={};rerender('crm')};
A.crmsync=()=>{toast('Menyinkronkan kontak…');op('crmSync',{}).then(r=>{toast(r.message,r.success?'ok':'err');crmReload()})};
A.crmbulk=v=>{
  const ids=Object.keys(CR.sel).filter(k=>CR.sel[k]);if(!ids.length)return;
  let nilai='';if(v==='tag'){nilai=prompt('Nama tag (mis. Lebaran, Pelanggan Setia):');if(!nilai)return}
  op('crmBulk',{ids:ids,aksi:v,nilai:nilai}).then(r=>{toast(r.message,r.success?'ok':'err');CR.sel={};crmReload()});
};
A.crmblast=()=>{const ids=Object.keys(CR.sel).filter(k=>CR.sel[k]);op('waAudience',{ids:ids}).then(r=>{if(!r.success)return toast(r.message,'err');NT.aud=r.data;NT.sel={};NT.tab='blast';go('notif')})};
A.crmdet=v=>{
  modal('Detail Kontak','<div id="crm-det" class="empty">Memuat…</div>');
  op('crmDetail',{kontakId:v}).then(r=>{const b=$('#crm-det');if(!b)return;if(!r.success){b.innerHTML='<div class="err">'+esc(r.message)+'</div>';return}
    const k=r.data.kontak,i=k.info||{};b.className='';
    b.innerHTML='<div style="display:flex;gap:12px;align-items:center;margin-bottom:12px"><div class="av lg"><span>'+esc(String(k.nama).slice(0,2).toUpperCase())+'</span></div><div><h2 style="margin:0">'+esc(k.nama)+'</h2><span class="tag gold">'+esc(k.segmen)+'</span> <small>'+esc(k.sumber)+'</small></div></div>'+
      (i.transaksi?'<div class="grid g3" style="margin-bottom:12px">'+kpi('Total Belanja',rpS(i.totalBelanja),'','wallet','gold')+kpi('Transaksi',i.transaksi,'sejak '+tgl(i.pertama),'file')+kpi('Emas Dibeli',(i.gram||0)+' gr','buyback '+rpS(i.totalBuyback||0),'gem')+'</div>':'')+
      '<div class="chips" style="margin-bottom:12px">'+(k.noWA?'<a class="btn sm pri" target="_blank" rel="noopener" href="https://wa.me/'+esc(k.noWA.replace(/^0/,'62'))+'">'+ic('send','s')+' WhatsApp</a>':'')+(k.email?'<a class="btn sm" href="mailto:'+esc(k.email)+'">Email</a>':'')+'</div>'+
      '<form id="crm-save" data-id="'+k.kontakId+'"><div class="row2" style="gap:10px"><label class="fld"><span class="lb">Nama</span><input class="inp" name="nama" value="'+esc(k.nama)+'"></label><label class="fld"><span class="lb">No. WA</span><input class="inp" name="noWA" value="'+esc(k.noWA)+'"></label></div>'+
      '<div class="row2" style="gap:10px"><label class="fld"><span class="lb">Email</span><input class="inp" name="email" value="'+esc(k.email)+'"></label><label class="fld"><span class="lb">Tag (pisah koma)</span><input class="inp" name="tag" value="'+esc(k.tag)+'"></label></div>'+
      '<label class="fld"><span class="lb">Catatan</span><textarea class="inp" name="catatan" rows="2">'+esc(k.catatan)+'</textarea></label>'+
      '<label class="chk"><input type="checkbox" name="optOut" '+(k.optOut==='YA'?'checked':'')+'> Opt-out (tidak menerima blast promo)</label>'+
      '<button class="btn pri sm" type="submit" style="margin-top:8px">Simpan</button></form>'+
      (r.data.transaksi.length?'<h3 style="margin:16px 0 8px">Riwayat Transaksi</h3>'+r.data.transaksi.map(t=>'<div class="tr"><span class="tm"><b>'+esc(jenisLbl[t.jenis]||t.jenis)+' · '+esc(t.kategori)+(t.kadar?' '+esc(t.kadar):'')+(t.berat?' · '+gr(t.berat):'')+'</b><small>'+tgl(t.waktu)+' · #'+esc(t.transaksiId)+(t.status!=='AKTIF'?' · '+esc(t.status):'')+'</small></span><span class="ta"><b>'+rp(t.nominal)+'</b></span></div>').join(''):'')+
      '<h3 style="margin:16px 0 8px">Interaksi</h3><form id="crm-int" data-id="'+k.kontakId+'" class="row2" style="gap:8px"><select class="inp" name="kanal"><option>Telepon</option><option>WA Manual</option><option>Kunjungan</option><option>Catatan</option></select><input class="inp" name="ringkasan" placeholder="Ringkasan interaksi"><button class="btn sm" type="submit">Catat</button></form>'+
      (r.data.timeline.length?r.data.timeline.map(x=>'<div class="tr"><span class="ico">'+ic(x.kanal==='EMAIL'?'msg':'send')+'</span><span class="tm"><b>'+esc(x.kanal)+'</b><small>'+esc(String(x.waktu).slice(0,16))+(x.status?' · '+esc(x.status):'')+'</small><small style="display:block">'+esc(x.ringkasan)+'</small></span></div>').join(''):empty('Belum ada interaksi.'));
  });
};
SUB['crm-save']=f=>{const e=f.elements;op('crmSave',{kontakId:f.dataset.id,nama:e.nama.value,noWA:e.noWA.value,email:e.email.value,tag:e.tag.value,catatan:e.catatan.value,optOut:e.optOut.checked}).then(r=>{toast(r.message,r.success?'ok':'err');if(r.success){closeModal();crmReload()}})};
SUB['crm-int']=f=>{const e=f.elements;if(!e.ringkasan.value.trim())return;op('crmInteraksi',{kontakId:f.dataset.id,kanal:e.kanal.value,ringkasan:e.ringkasan.value}).then(r=>{toast(r.message,r.success?'ok':'err');if(r.success)A.crmdet(f.dataset.id)})};
A.crmimp=()=>{
  modal('Import Kontak dari CSV','<p style="margin-bottom:10px">Kolom: <b>nama, wa, email, segmen, tag</b> (baris pertama = judul kolom). Cocok untuk daftar calon pelanggan, peserta acara, atau ekspor dari aplikasi lain.</p>'+
    '<div class="chips"><button class="btn sm" data-a="crmtpl">'+ic('download','s')+' Unduh Template</button><button class="btn sm pri" data-a="crmpick">'+ic('upload','s')+' Pilih File CSV</button></div>');
};
A.crmtpl=()=>downloadFile('nama,wa,email,segmen,tag\nIbu Contoh,081234567890,ibu@contoh.com,Calon Pelanggan,Pameran\n','template_kontak_putri_bali.csv','text/csv');
A.crmpick=()=>{const f=$('#crm-file');if(f)f.click()};
function parseCSV(t){const rows=[];let r=[],c='',q=false;for(let i=0;i<t.length;i++){const ch=t[i];if(q){if(ch==='"'){if(t[i+1]==='"'){c+='"';i++}else q=false}else c+=ch}else if(ch==='"')q=true;else if(ch===','||ch===';'){r.push(c);c=''}else if(ch==='\n'){r.push(c);rows.push(r);r=[];c=''}else if(ch!=='\r')c+=ch}if(c||r.length){r.push(c);rows.push(r)}return rows}
IN.crmfile=(v,el)=>{const f=el.files&&el.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{
  const rows=parseCSV(String(rd.result)),h=(rows.shift()||[]).map(x=>x.trim().toLowerCase());
  const data=rows.filter(r=>r.join('').trim()).map(r=>{const o={};h.forEach((k,i)=>o[k]=(r[i]||'').trim());return o});
  closeModal();toast('Mengimpor '+data.length+' baris…');op('crmImport',{rows:data}).then(r=>{toast(r.message,r.success?'ok':'err');crmReload()});el.value=''};rd.readAsText(f)};
A.crmexp=()=>op('crmExport',{}).then(r=>{if(!r.success)return toast(r.message,'err');const rows=r.data.rows;if(!rows.length)return toast('Tidak ada kontak','err');
  const h=Object.keys(rows[0]),q=x=>'"'+String(x==null?'':x).replace(/"/g,'""')+'"';
  downloadFile('﻿'+[h.join(',')].concat(rows.map(o=>h.map(k=>q(o[k])).join(','))).join('\n'),'kontak_putri_bali_'+today()+'.csv','text/csv');toast(rows.length+' kontak diekspor','ok')});

/* =====================================================================
   MIGRASI DATA
   ===================================================================== */
const MG={sumber:'sheet',src:'',backup:null,backupNama:'',sheets:{Users:true,Transaksi:true,MutasiKas:true,TutupKas:true,MutasiBrankas:true,MutasiBank:true,StokLog:true,Absensi:true,Izin:true,Approval:true,Piutang:true,Pinjaman:true,PesanKaryawan:true},timpa:false,hasil:null,busy:false};
const MG_LBL={Users:'Akun karyawan',Transaksi:'Transaksi / nota',MutasiKas:'Mutasi kas laci',TutupKas:'Tutup kas',MutasiBrankas:'Mutasi brankas',MutasiBank:'Mutasi bank',StokLog:'Riwayat stok',Absensi:'Absensi',Izin:'Izin / cuti',Approval:'Persetujuan',Piutang:'Piutang & hutang',Pinjaman:'Pinjaman',PesanKaryawan:'Pesan karyawan'};
P.migrasi=function(){
  const h=MG.hasil;
  return '<div class="ph"><div><h1>Migrasi Data</h1><p>Pindahkan data dari aplikasi lama tanpa menyentuh aplikasi lama. Aman diulang: data yang sama tidak akan dobel.</p></div></div>'+
   '<div class="grid dash2"><div class="card">'+
    '<div class="seg fill" style="margin-bottom:14px"><button class="'+(MG.sumber==='sheet'?'on':'')+'" data-a="mgsrc" data-v="sheet">'+ic('database','s')+' Spreadsheet lama</button><button class="'+(MG.sumber==='backup'?'on':'')+'" data-a="mgsrc" data-v="backup">'+ic('file','s')+' File cadangan JSON</button></div>'+
    (MG.sumber==='sheet'?'<label class="fld"><span class="lb">URL atau ID spreadsheet app lama</span><input class="inp" data-in="mgurl" value="'+esc(MG.src)+'" placeholder="https://docs.google.com/spreadsheets/d/…"><small>Hanya DIBACA. Harus milik akun Google yang sama dengan proyek Apps Script ini agar foto lama tetap tampil.</small></label>'
      :'<input type="file" id="mg-file" accept=".json,application/json" class="hidden" data-in="mgfile"><button class="btn blk" data-a="mgpick">'+ic('upload','s')+' '+(MG.backupNama?esc(MG.backupNama):'Pilih file cadangan (.json)')+'</button><small style="display:block;margin-top:6px">Dari menu Backend &amp; Basis Data → Unduh Backup JSON (app lama atau baru).</small>')+
    '<div class="lbl" style="margin:14px 0 6px">Data yang dipindahkan</div><div class="grid g2" style="gap:6px">'+Object.keys(MG.sheets).map(k=>'<label class="chk"><input type="checkbox" data-in="mgsh" data-v="'+k+'" '+(MG.sheets[k]?'checked':'')+'> '+MG_LBL[k]+'</label>').join('')+'</div>'+
    '<label class="chk" style="margin-top:10px"><input type="checkbox" data-in="mgtimpa" '+(MG.timpa?'checked':'')+'> Timpa data yang sudah ada di app baru (bawaan: tidak)</label>'+
    '<div class="chips" style="margin-top:14px"><button class="btn" data-a="mgrun" data-v="1"'+(MG.busy?' disabled':'')+'>'+ic('search','s')+' Pindai (tanpa menulis)</button><button class="btn pri" data-a="mgrun" data-v="0"'+(MG.busy?' disabled':'')+'>'+ic('swap','s')+' Jalankan Migrasi</button></div>'+
    (MG.busy?'<div class="pill warn" style="margin-top:10px">Memproses… jangan tutup halaman</div>':'')+
   '</div>'+
   '<div class="card"><div class="hd"><h3>Hasil '+(h?(h.dryRun?'Pindai':'Migrasi'):'')+'</h3>'+(h?'<small>'+esc(h.sumber.nama)+' · '+h.detik+' dtk</small>':'')+'</div>'+
    (h?'<div class="tbw"><table><thead><tr><th>Data</th><th class="r">Di sumber</th><th class="r">Ditambah</th><th class="r">Diperbarui</th><th class="r">Dilewati</th></tr></thead><tbody>'+
      Object.keys(h.laporan).map(k=>{const x=h.laporan[k];return '<tr><td><b>'+esc(MG_LBL[k]||k)+'</b>'+(x.sumberSheet?'<br><small>'+esc(x.sumberSheet)+'</small>':'')+(x.info?'<br><small>'+esc(x.info)+'</small>':'')+'</td><td class="r">'+x.sumber+'</td><td class="r"><b>'+x.ditambah+'</b></td><td class="r">'+x.diperbarui+'</td><td class="r">'+x.dilewati+'</td></tr>'}).join('')+'</tbody></table></div>'+
      (h.peringatan.length?'<div style="margin-top:10px">'+h.peringatan.map(p=>'<div class="gps warn" style="margin-bottom:6px">'+ic('alert','s')+' <span>'+esc(p)+'</span></div>').join('')+'</div>':'')
     :empty('Jalankan Pindai dulu untuk melihat berapa data yang akan ditambah, diperbarui, atau dilewati.'))+
    '<div class="lbl" style="margin:14px 0 6px">Langkah pindah aplikasi (cutover)</div><ol class="mg-ol"><li>Pindai → periksa angka → Jalankan Migrasi.</li><li>Cek transaksi, stok, saldo kas, dan foto. Uji login 1 akun karyawan (PIN sementara 123456).</li><li>Tepat sebelum pindah: <b>Jalankan Migrasi sekali lagi</b> untuk menangkap data terbaru (tidak dobel).</li><li>Umumkan alamat baru ke karyawan, lalu arsipkan deployment lama.</li></ol>'+
   '</div></div>';
};
A.mgsrc=v=>{MG.sumber=v;MG.hasil=null;rerender('migrasi')};
IN.mgurl=v=>{MG.src=v.trim()};
IN.mgsh=(v,el)=>{MG.sheets[el.dataset.v]=el.checked};
IN.mgtimpa=(v,el)=>{MG.timpa=el.checked};
A.mgpick=()=>{const f=$('#mg-file');if(f)f.click()};
IN.mgfile=(v,el)=>{const f=el.files&&el.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{try{MG.backup=JSON.parse(String(rd.result));MG.backupNama=f.name;rerender('migrasi')}catch(e){toast('File JSON tidak valid','err')}};rd.readAsText(f)};
A.mgrun=v=>{
  const dry=v==='1';
  if(MG.sumber==='sheet'&&!MG.src)return toast('Tempel URL spreadsheet lama dulu','err');
  if(MG.sumber==='backup'&&!MG.backup)return toast('Pilih file cadangan dulu','err');
  if(!dry&&!confirm('Jalankan migrasi sekarang? Data baru ditambahkan ke app ini (data app lama tidak diubah).'))return;
  MG.busy=true;rerender('migrasi');
  const d={sumber:MG.sumber,source:MG.src,backup:MG.sumber==='backup'?MG.backup:null,sheets:Object.keys(MG.sheets).filter(k=>MG.sheets[k]),timpa:MG.timpa};
  op(dry?'migrasiPindai':'migrasiJalankan',d).then(r=>{MG.busy=false;if(!r.success){toast(r.message,'err');rerender('migrasi');return}
    MG.hasil=r.data;toast(r.message,'ok');if(!dry&&r.data.state)adopt(r.data.state);else if(!dry)loadState();rerender('migrasi')});
};

/* =====================================================================
   PEMELIHARAAN DATA (halaman Backend)
   ===================================================================== */
function pemeliharaanCard(){
  return '<div class="card" style="margin-bottom:20px;border:1px solid #e7dcc3"><div class="hd"><div><h3>Pemeliharaan Data</h3><small>Status sistem, log audit, dan reset data contoh. Reset sandi Owner hanya dari editor Apps Script (resetPasswordSuperAdmin).</small></div></div>'+
   '<div class="chips"><button class="btn sm" data-a="mtstatus">'+ic('server','s')+' Status Sistem</button><button class="btn sm" data-a="mtaudit">'+ic('history','s')+' Log Audit</button>'+
   '<button class="btn sm" style="color:#9a6700" data-a="mtreset">'+ic('refresh','s')+' Reset ke Data Dummy</button><button class="btn sm bad" data-a="mtkosong">'+ic('trash','s')+' Kosongkan Semua Data</button></div></div>';
}
A.mtstatus=()=>{modal('Status Sistem','<div id="mt-b" class="empty">Memeriksa…</div>');op('statusSistem',{}).then(r=>{const b=$('#mt-b');if(!b)return;if(!r.success){b.innerHTML='<div class="err">'+esc(r.message)+'</div>';return}const d=r.data;b.className='';
  b.innerHTML='<div class="chips" style="margin-bottom:10px"><span class="pill">Versi '+esc(d.versi)+'</span><span class="pill '+(d.demo?'warn':'ok')+'">Demo '+(d.demo?'AKTIF':'mati')+'</span><span class="pill '+(d.terkunci?'ok':'warn')+'">'+(d.terkunci?'Terkunci (produksi)':'Belum dikunci')+'</span><span class="pill">Sisa kuota email '+d.emailKuota+'</span></div>'+
  '<div class="tbw"><table><tbody>'+Object.keys(d.sheet).map(k=>'<tr><td>'+esc(k)+'</td><td class="r"><b>'+nf.format(d.sheet[k])+'</b> baris</td></tr>').join('')+'</tbody></table></div>'+
  '<p style="margin-top:10px"><small>Pekerja latar: '+(d.trigger.length?esc(d.trigger.join(', ')):'<b style="color:var(--bad)">belum terpasang — jalankan pasangTrigger()</b>')+'</small></p>'+
  (d.spreadsheetUrl?'<div class="chips"><a class="btn sm" target="_blank" rel="noopener" href="'+esc(d.spreadsheetUrl)+'">Buka Database (Sheets)</a>'+(d.driveUrl?'<a class="btn sm" target="_blank" rel="noopener" href="'+esc(d.driveUrl)+'">Buka Folder Drive</a>':'')+'</div>':'')})};
A.mtaudit=()=>{modal('Log Audit','<div id="mt-a" class="empty">Memuat…</div>');op('auditList',{n:200}).then(r=>{const b=$('#mt-a');if(!b)return;if(!r.success){b.innerHTML='<div class="err">'+esc(r.message)+'</div>';return}b.className='';
  b.innerHTML=r.data.rows.length?r.data.rows.map(x=>'<div class="tr"><span class="tm"><b>'+esc(x.aksi)+'</b><small>'+esc(x.waktu)+' · '+esc(uname(x.userId))+'</small><small style="display:block">'+esc(x.detail)+'</small></span></div>').join(''):empty('Belum ada log.')})};
A.mtreset=()=>openForm({title:'Reset ke Data Dummy',ok:'Reset Sekarang',pre:'<div class="err" style="margin-bottom:12px">Semua transaksi, kas, stok, absensi, dan kontak akan DIHAPUS lalu diisi ulang contoh data 14 hari. Akun &amp; pengaturan tetap. Tidak bisa dibatalkan.</div>',
  fields:[{k:'konfirmasi',l:'Ketik RESET untuk konfirmasi',req:1}],fn:v=>{if(v.konfirmasi.trim().toUpperCase()!=='RESET')return 'Ketik RESET.';try{downloadFile(JSON.stringify({appName:'Putri Bali POS (cadangan sebelum reset)',backupTime:nowWIT(),state:S},null,2),'cadangan_sebelum_reset_'+today()+'.json','application/json')}catch(e){}
    mut('adminResetDummy',{konfirmasi:'RESET'});closeModal();toast('Mereset data… cadangan otomatis diunduh','ok')}});
A.mtkosong=()=>openForm({title:'Kosongkan Semua Data (Go-Live)',ok:'Kosongkan',pre:'<div class="err" style="margin-bottom:12px">Semua data transaksi dihapus untuk mulai pemakaian nyata. Akun &amp; pengaturan tetap. Setelah ini jalankan matikanDemoMode() dan kunciProduksi() dari editor.</div>',
  fields:[{k:'konfirmasi',l:'Ketik KOSONGKAN untuk konfirmasi',req:1}],fn:v=>{if(v.konfirmasi.trim().toUpperCase()!=='KOSONGKAN')return 'Ketik KOSONGKAN.';try{downloadFile(JSON.stringify({appName:'Putri Bali POS (cadangan sebelum dikosongkan)',backupTime:nowWIT(),state:S},null,2),'cadangan_sebelum_kosong_'+today()+'.json','application/json')}catch(e){}
    mut('adminKosongkan',{konfirmasi:'KOSONGKAN'});closeModal();toast('Mengosongkan data… cadangan otomatis diunduh','ok')}});

/* ============ MENU (mobile fallback) ============ */
P.menu=function(){
  return '<div class="ph"><div style="display:flex;align-items:center;gap:14px">'+uAvatar(S.me,'lg')+
   '<div><h1>'+esc(S.me.nama)+'</h1><p>'+(isO()?'Owner / Superadmin':'Kasir / Karyawan')+'</p></div></div>'+
   '<button class="btn sm gh" data-a="topbar_profile">'+ic('user','s')+' Profil Akun</button></div>'+
   '<div class="card">'+allowed().map(m=>'<button class="tr" data-a="go" data-v="'+m[0]+'"><span class="ico gold">'+ic(m[3])+'</span><span class="tm"><b>'+esc(label(m[0]))+'</b></span>'+ic('arrow','s')+'</button>').join('')+
   '<button class="tr" data-a="pass"><span class="ico">'+ic('key')+'</span><span class="tm"><b>Ubah Kata Sandi</b></span></button>'+
   '<button class="tr" data-a="logout"><span class="ico bad">'+ic('logout')+'</span><span class="tm"><b>Keluar</b></span></button><div class="sync" style="background:var(--cv);color:var(--mut);margin-top:10px"><i></i><span>Tersinkron</span></div></div>';
};

/* ============ INIT ============ */
function applyPub(){
  $('#lgm-nama').textContent=PUB.nama||'Toko Emas & Perak Putri Bali';$('#lgm-spot').textContent=PUB.spot?rp(PUB.spot)+'/gr':'-';
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
  try{
    hydrateIcons();initLogin();
    const tk=LS.g('pos_tk'),snap=LS.g('pos_snap');
    if(tk&&snap){
      try{
        TOKEN=tk;try{Q=JSON.parse(LS.g('pos_q')||'[]')}catch(e){Q=[]}
        showApp();adopt(JSON.parse(snap));RJ='';go('dashboard');startPolling();loadStateSoon();
      }catch(e){TOKEN=null;showLogin()}
    }else showLogin();
  }catch(e){
    /* fallback: pastikan boot hilang dan login tampil */
    try{$('#boot').classList.add('hidden')}catch(_){}
    try{$('#view-login').classList.remove('hidden')}catch(_){}
    console.error('Init error:',e);
  }
}
function loadStateSoon(){pump();if(!Q.length)loadState()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
