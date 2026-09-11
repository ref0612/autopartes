/* ================= Icons (simple, dependency-free) ================= */
function ic(name, size){
  size = size || 16;
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"`;
  const paths = {
    grid: `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`,
    user: `<circle cx="12" cy="8" r="3.4"/><path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"/>`,
    userCheck: `<circle cx="10" cy="8" r="3.4"/><path d="M3.5 20c1.1-3.4 3.6-5 6.5-5s5.4 1.6 6.5 5"/><path d="M16 11l2 2 3.5-3.5"/>`,
    userTag: `<circle cx="10" cy="8" r="3.4"/><path d="M3.5 20c1.1-3.4 3.6-5 6.5-5s5.4 1.6 6.5 5"/><circle cx="18" cy="7" r="1"/><path d="M15 10l3-3h4v4l-3 3z" opacity="0"/>`,
    tag: `<path d="M11 3H4v7l10 10 7-7L11 3Z"/><circle cx="8" cy="7" r="1.3" fill="currentColor" stroke="none"/>`,
    pulse: `<path d="M3 12h4l2 7 4-14 2 7h6"/>`,
    dollar: `<circle cx="12" cy="12" r="9"/><path d="M12 6v12M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3 6 1.3 6 4.4 0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5"/>`,
    list: `<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="3.5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="3.5" cy="18" r="1" fill="currentColor" stroke="none"/>`,
    star: `<path d="M12 3.5l2.6 5.4 5.9.7-4.4 4.1 1.2 5.9-5.3-3-5.3 3 1.2-5.9-4.4-4.1 5.9-.7Z"/>`,
    trend: `<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>`,
    tags: `<path d="M20 12l-8-8H4v8l8 8Z"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none"/>`,
    box: `<path d="M21 8l-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>`,
    layers: `<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5M3 8l9 5 9-5" opacity="0"/><path d="M3 12l9 5 9-5"/>`,
    settings: `<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9c.6.5 1.3.9 2 1.2L10 21h4l.6-2.6c.7-.3 1.4-.7 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z"/>`,
    cart: `<circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2.5 3h2.4l2.4 12.2a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.6L21.5 7H6"/>`,
    plus: `<path d="M12 5v14M5 12h14"/>`,
    minus: `<path d="M5 12h14"/>`,
    x: `<path d="M18 6 6 18M6 6l12 12"/>`,
    check: `<path d="M20 6 9 17l-5-5"/>`,
    chevron: `<path d="M9 6l6 6-6 6"/>`,
    search: `<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>`,
    edit: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>`,
    trash: `<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>`,
    info: `<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>`,
    tire: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.4"/><path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21M5.6 5.6l3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9"/>`,
    drop: `<path d="M12 2.5S6 10 6 14.5a6 6 0 0 0 12 0C18 10 12 2.5 12 2.5Z"/>`,
    empty: `<path d="M4 4h16v16H4z" opacity="0"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M2.5 3h2.4l2.4 12.2a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.6L21.5 7H6"/>`,
    mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>`,
    link: `<path d="M9 15 15 9"/><path d="M11 6l1.5-1.5a3.5 3.5 0 0 1 5 5L16 11"/><path d="M13 18l-1.5 1.5a3.5 3.5 0 0 1-5-5L8 13"/>`,
  };
  return `<svg ${s}>${paths[name] || ''}</svg>`;
}

/* ================= Storage helpers ================= */
const LS = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
const money = n => '$' + Math.round(n).toLocaleString('es-CL');

/* Resize/compress an uploaded photo into a small square JPEG data URL so it fits comfortably in localStorage. */
function readAndResizeImage(file, cb){
  if(!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const size = 480;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      const scale = Math.max(size/img.width, size/img.height);
      const w = img.width*scale, h = img.height*scale;
      ctx.drawImage(img, (size-w)/2, (size-h)/2, w, h);
      cb(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* Igual que readAndResizeImage, pero sin recortar (contain, no cover) y en PNG para
   conservar transparencia — pensado para logos de marca, no para fotos de producto. */
function readAndResizeLogo(file, cb){
  if(!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      // Sin canvas cuadrado ni relleno extra: solo achica si es muy grande,
      // manteniendo el ancho/alto real del logo para que se vea grande dentro
      // de la caja rectangular (si agregáramos margen, "contain" lo encogería doble).
      const maxDim = 360;
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale), h = Math.round(img.height * scale);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,w,h);
      ctx.drawImage(img, 0, 0, w, h);
      cb(canvas.toDataURL('image/png'));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ================= Seed data ================= */
function seedProviders(){
  return [
    {id:'prov1', nombre:'Bridgestone Chile S.A.', email:'pedidos@bridgestone-distribuidor.cl', telefono:''},
    {id:'prov2', nombre:'Goodyear Neumáticos Chile', email:'pedidos@goodyear-distribuidor.cl', telefono:''},
    {id:'prov3', nombre:'Comercial Jinyu Chile', email:'ventas@jinyu-chile.cl', telefono:''},
    {id:'prov4', nombre:'Kumho Tire Distribuidora', email:'pedidos@kumho-distribuidor.cl', telefono:''},
    {id:'prov5', nombre:'Toyo Tires Chile', email:'ventas@toyo-chile.cl', telefono:''},
    {id:'prov6', nombre:'Westlake South America', email:'pedidos@westlake-distribuidor.cl', telefono:''},
    {id:'prov7', nombre:'Shell Lubricantes Chile', email:'pedidos@shell-lubricantes.cl', telefono:''},
    {id:'prov8', nombre:'ExxonMobil Lubricantes', email:'pedidos@mobil-distribuidor.cl', telefono:''},
    {id:'prov9', nombre:'Petrobras Lubricantes Chile', email:'pedidos@petrobras-distribuidor.cl', telefono:''},
  ];
}
function seedProducts(){
  return [
    {id:'p1', cat:'neumatico', marca:'Bridgestone', modelo:'R269', medida:'295/80R22.5', posicion:'Dirección / Tracción', precio:320288, stock:18, destacado:true, reco:'Recomendado dirección', proveedorId:'prov1', proveedor:'Bridgestone Chile S.A.', proveedorEmail:'pedidos@bridgestone-distribuidor.cl',
      descripcion:'295/80R22.5 152/149L R269 Bridgestone 16PR Dir-On BLK JPN',
      especificaciones:[
        {label:'Diseño', value:'R269'},
        {label:'Aplicación', value:'Direccional (eje delantero)'},
        {label:'Índice de carga / velocidad', value:'152/149 L'},
        {label:'Capas (PR)', value:'16 PR'},
        {label:'Tipo', value:'TL (Sin cámara)'},
        {label:'Carga máxima (uso simple)', value:'3.550 kg'},
        {label:'Carga máxima (uso dual)', value:'3.250 kg'},
        {label:'Presión máxima de inflado', value:'830 kPa (120 psi)'},
        {label:'Profundidad de banda', value:'16 mm'},
        {label:'Ancho de sección', value:'298 mm'},
        {label:'Diámetro exterior', value:'1052 mm'},
        {label:'Ancho de llanta estándar', value:'8.25 pulgadas'},
        {label:'Aro recomendado', value:'8.25'},
        {label:'Aro permitido', value:'7.50 - 9.00'},
      ]},
    {id:'p2', cat:'neumatico', marca:'Goodyear', modelo:'KMAX S', medida:'295/80R22.5', posicion:'Dirección', precio:320000, stock:14, destacado:true, reco:'Mejor $/km dirección', proveedorId:'prov2', proveedor:'Goodyear Neumáticos Chile', proveedorEmail:'pedidos@goodyear-distribuidor.cl'},
    {id:'p3', cat:'neumatico', marca:'Jinyu', modelo:'JF568', medida:'295/80R22.5', posicion:'Tracción', precio:209860, stock:22, destacado:true, reco:'Mejor $/km tracción', proveedorId:'prov3', proveedor:'Comercial Jinyu Chile', proveedorEmail:'ventas@jinyu-chile.cl'},
    {id:'p4', cat:'neumatico', marca:'Kumho', modelo:'KRS15', medida:'295/80R22.5', posicion:'Tracción', precio:291490, stock:9, destacado:false, reco:'', proveedorId:'prov4', proveedor:'Kumho Tire Distribuidora', proveedorEmail:'pedidos@kumho-distribuidor.cl'},
    {id:'p5', cat:'neumatico', marca:'Toyo', modelo:'M144', medida:'295/80R22.5', posicion:'Dirección / Tracción', precio:335601, stock:6, destacado:false, reco:'', proveedorId:'prov5', proveedor:'Toyo Tires Chile', proveedorEmail:'ventas@toyo-chile.cl'},
    {id:'p6', cat:'neumatico', marca:'Westlake', modelo:'CM958', medida:'295/80R22.5', posicion:'Tracción', precio:209860, descuento:20, stock:11, destacado:false, reco:'', proveedorId:'prov6', proveedor:'Westlake South America', proveedorEmail:'pedidos@westlake-distribuidor.cl'},
    {id:'p7', cat:'lubricante', marca:'Shell', modelo:'Rimula R6', presentacion:'20 L', viscosidad:'5W30', tipo:'Sintético', precio:210000, stock:16, destacado:true, reco:'Recomendado motores Euro V', proveedorId:'prov7', proveedor:'Shell Lubricantes Chile', proveedorEmail:'pedidos@shell-lubricantes.cl',
      descripcion:'20L 5W30 Sintético Rimula R6 Shell Diesel EuroV/VI',
      especificaciones:[
        {label:'Viscosidad', value:'5W-30'},
        {label:'Tipo de aceite', value:'Sintético'},
        {label:'Norma / Especificación', value:'ACEA E6/E9 · API CK-4'},
      ]},
    {id:'p8', cat:'lubricante', marca:'Mobil', modelo:'Delvac 1300 Super', presentacion:'20 L', viscosidad:'15W40', tipo:'Mineral', precio:145000, descuento:15, stock:20, destacado:false, reco:'', proveedorId:'prov8', proveedor:'ExxonMobil Lubricantes', proveedorEmail:'pedidos@mobil-distribuidor.cl'},
    {id:'p9', cat:'lubricante', marca:'Petrobras', modelo:'Lubrax Top Turbo', presentacion:'20 L', viscosidad:'15W40', tipo:'Semisintético', precio:168500, stock:13, destacado:false, reco:'', proveedorId:'prov9', proveedor:'Petrobras Lubricantes Chile', proveedorEmail:'pedidos@petrobras-distribuidor.cl'},
  ].map(p => ({ estado:'publicado', ...p })); // catálogo de partida: ya publicado, listo para demostrar Inventario
}

/* Datos de la empresa que emite las órdenes de compra a los proveedores — se usan en el
   cuerpo del correo al proveedor (sección "Datos de facturación") y como destino de copia
   para que la confirmación del pedido llegue también a contabilidad. En el prototipo están
   fijos acá; el equipo de desarrollo debe traerlos desde una configuración editable. */
const EMPRESA = {
  nombrePlataforma: 'Kupos Autopartes',
  razonSocial: 'PASAJEBUS SPA',
  rut: '76.335.837-2',
  giro: 'Serv. Computacionales - Desarrollo de Software, Servicios de Internet y Exportación',
  direccion: 'Andrés Bello 2233, Of. 1001, Providencia',
  correoDTE: 'contabilidad@pasajebus.com',
  condicionesPago: '[A definir]',
};

let PRODUCTS = LS.get('ap_products', null) || seedProducts();
let PROVIDERS = LS.get('ap_providers', null) || seedProviders();
let CART = LS.get('ap_cart', []);
let REQUESTS = LS.get('ap_requests', []);
let EMAILS = LS.get('ap_emails', []);
let HISTORY = LS.get('ap_history', []);
function saveProducts(){ LS.set('ap_products', PRODUCTS); }
function saveProviders(){ LS.set('ap_providers', PROVIDERS); }
function saveCart(){ LS.set('ap_cart', CART); }
function saveRequests(){ LS.set('ap_requests', REQUESTS); }
function saveEmails(){ LS.set('ap_emails', EMAILS); }
function saveHistory(){ LS.set('ap_history', HISTORY); }

/* ================= Historial de cambios (bitácora de Backoffice) ================= */
/* Quién realiza la acción: en el mockup no hay login real, así que se simula con un
   nombre que la persona en Backoffice escribe una vez y queda guardado en el navegador.
   En la versión real esto viene del sistema de autenticación del dashboard. */
let backofficeActor = LS.get('ap_actor', '');
function saveActor(){ LS.set('ap_actor', backofficeActor); }

const HIST_ENTIDAD_LABELS = { item:'Catálogo', proveedor:'Proveedor', solicitud:'Solicitud' };
const HIST_ACCION_LABELS = {
  crear:'Creó', editar:'Editó', publicar:'Publicó', rechazar:'Rechazó', eliminar:'Eliminó',
  confirmar:'Confirmó', 'aprobacion-cliente':'Aprobación de cliente (simulada)',
};

function logHistory({ entidad, entidadId, accion, resumen, cambios, actor }){
  HISTORY.unshift({
    id: 'h'+Date.now()+Math.random().toString(36).slice(2,6),
    fecha: new Date().toISOString(),
    actor: actor || backofficeActor.trim() || 'Backoffice (sin identificar)',
    entidad, entidadId, accion, resumen,
    cambios: cambios && cambios.length ? cambios : null,
  });
  saveHistory();
}

/* Compara dos versiones de un registro campo a campo y devuelve solo lo que cambió,
   como [{campo, antes, despues}], para mostrar un detalle "antes → después" legible. */
function diffFields(before, after, fields){
  if(!before) return [];
  const out = [];
  fields.forEach(([key, label, fmt]) => {
    const a = before[key], b = after[key];
    const av = a===undefined||a===null||a===''? '—' : (fmt? fmt(a) : String(a));
    const bv = b===undefined||b===null||b===''? '—' : (fmt? fmt(b) : String(b));
    if(av !== bv) out.push({ campo: label, antes: av, despues: bv });
  });
  return out;
}

const ITEM_DIFF_FIELDS = [
  ['estado','Publicación', v=>v==='publicado'?'Publicado':'Pendiente de validación'],
  ['marca','Marca'], ['modelo','Modelo'], ['proveedor','Proveedor'],
  ['precio','Precio', v=>money(v)],
  ['descuento','Descuento', v=>v>0? v+'%' : '—'],
  ['stock','Stock'],
  ['descripcion','Descripción'],
  ['medida','Medida'], ['posicion','Posición'],
  ['presentacion','Presentación'], ['viscosidad','Viscosidad'], ['tipo','Tipo'],
  ['destacado','Destacado', v=>v? 'Sí':'No'],
];
const PROVIDER_DIFF_FIELDS = [ ['nombre','Nombre'], ['email','Correo'], ['telefono','Teléfono'] ];

/* ================= App state ================= */
let nav = { section:'autopartes-inventario', autopartesOpen:true, kupospayOpen:false };
let inv = { q:'', cat:'todos', marca:'todas', sort:'reco' };
let bo = { tab:'catalogo', editing:null, catField:'neumatico', catEstado:'todos', selectedIds:new Set(), selectedReq:null, selectedEmail:null };
let solFilters = { fechaDesde:'', fechaHasta:'', cliente:'', proveedorEmail:'' };
let histFilters = { entidad:'todas', actor:'', fechaDesde:'', fechaHasta:'', q:'' };
let histSelected = null;

/* ================= Sidebar ================= */
const NAV_ITEMS = [
  {key:'tablero', label:'Tablero', icon:'grid'},
  {key:'bpuser', label:'BP User', icon:'user'},
  {key:'rol', label:'Gestionar rol', icon:'userCheck'},
  {key:'cuenta', label:'Mi Cuenta', icon:'user'},
  {key:'descrut', label:'Descuento por Rut', icon:'tag'},
  {key:'analytics', label:'Analytics Insight', icon:'pulse'},
];
const NAV_KUPOSPAY = {key:'kupospay', label:'KuposPay', icon:'dollar', sub:[
  {key:'kp-transacciones', label:'Transacciones'},
  {key:'kp-conciliacion', label:'Conciliación'},
]};
const NAV_ITEMS2 = [
  {key:'solop', label:'Solicitud OP', icon:'list'},
  {key:'calif', label:'Calificaciones de reserva', icon:'star'},
  {key:'reportes', label:'Reportes', icon:'trend'},
  {key:'descuentos', label:'Descuentos', icon:'tags'},
];
const NAV_AUTOPARTES = {key:'autopartes', label:'Autopartes', icon:'box', sub:[
  {key:'autopartes-inventario', label:'Inventario'},
  {key:'autopartes-backoffice', label:'Backoffice'},
]};

function renderSidebar(){
  const el = document.getElementById('sidebar');
  const simpleItem = (it) => `
    <button class="nav-item ${nav.section===it.key?'active':''}" data-nav="${it.key}">
      ${ic(it.icon,16)}<span>${it.label}</span>
    </button>`;
  const kupospay = `
    <div class="nav-group">
      <button class="nav-item ${nav.kupospayOpen?'open':''}" data-toggle="kupospay">
        ${ic('dollar',16)}<span>${NAV_KUPOSPAY.label}</span>${ic('chevron',13)}
      </button>
      ${nav.kupospayOpen ? `<div class="nav-sub">${NAV_KUPOSPAY.sub.map(s=>`<button class="nav-item" data-nav="${s.key}"><span>${s.label}</span></button>`).join('')}</div>` : ''}
    </div>`;
  const autopartes = `
    <div class="nav-group">
      <button class="nav-item nav-new ${nav.autopartesOpen?'open':''} ${nav.section.startsWith('autopartes')?'active':''}" data-toggle="autopartes">
        ${ic('box',16)}<span>${NAV_AUTOPARTES.label}</span>${ic('chevron',13)}
      </button>
      ${nav.autopartesOpen ? `<div class="nav-sub">${NAV_AUTOPARTES.sub.map(s=>`
        <button class="nav-item ${nav.section===s.key?'active':''}" data-nav="${s.key}"><span>${s.label}</span></button>`).join('')}</div>` : ''}
    </div>`;

  el.innerHTML = `
    <div class="brand"><span>kupos</span><span class="dotcl">.cl</span></div>
    <div class="filter-box">Filter</div>
    <div class="menu-label">MENU</div>
    <nav class="nav">
      ${NAV_ITEMS.map(simpleItem).join('')}
      ${kupospay}
      ${NAV_ITEMS2.map(simpleItem).join('')}
      ${autopartes}
    </nav>
    <div class="sidebar-footer">Kupos Portals © 2026</div>
  `;

  el.querySelectorAll('[data-nav]').forEach(b => b.addEventListener('click', () => {
    nav.section = b.getAttribute('data-nav');
    if(nav.section.startsWith('autopartes')) nav.autopartesOpen = true;
    render();
  }));
  el.querySelectorAll('[data-toggle]').forEach(b => b.addEventListener('click', () => {
    const key = b.getAttribute('data-toggle');
    if(key==='autopartes') nav.autopartesOpen = !nav.autopartesOpen;
    if(key==='kupospay') nav.kupospayOpen = !nav.kupospayOpen;
    renderSidebar();
  }));
}

document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

/* ================= Placeholder page (unrelated menu items) ================= */
function renderPlaceholder(){
  return `<div class="placeholder-box"></div>`;
}

/* ================= Inventario (catálogo cliente) ================= */
/* Solo los ítems Publicados (validados en Backoffice) se muestran a los clientes.
   Un ítem sin campo "estado" (dato antiguo) se trata como Publicado, para no
   ocultar catálogo ya cargado antes de esta validación. */
function filteredProducts(){
  let list = PRODUCTS.filter(p => (p.estado||'publicado')==='publicado');
  if(inv.cat !== 'todos') list = list.filter(p => p.cat === inv.cat);
  if(inv.marca !== 'todas') list = list.filter(p => p.marca === inv.marca);
  if(inv.q.trim()) {
    const q = inv.q.trim().toLowerCase();
    list = list.filter(p => (p.marca+' '+p.modelo).toLowerCase().includes(q));
  }
  if(inv.sort==='precio-asc') list.sort((a,b)=>a.precio-b.precio);
  else if(inv.sort==='precio-desc') list.sort((a,b)=>b.precio-a.precio);
  else list.sort((a,b)=>(b.destacado-a.destacado));
  return list;
}

function cartQty(id){ const l = CART.find(c=>c.id===id); return l ? l.qty : 0; }
function setCartQty(id, qty){
  qty = Math.max(0, qty);
  const p = PRODUCTS.find(p=>p.id===id);
  if(p) qty = Math.min(qty, p.stock);
  const idx = CART.findIndex(c=>c.id===id);
  if(qty === 0){ if(idx>-1) CART.splice(idx,1); }
  else if(idx>-1){ CART[idx].qty = qty; }
  else{ CART.push({id, qty}); }
  saveCart();
}
function cartCount(){ return CART.reduce((s,c)=>s+c.qty,0); }
function cartTotal(){ return CART.reduce((s,c)=>{ const p=PRODUCTS.find(p=>p.id===c.id); return s + (p?finalPrice(p)*c.qty:0); },0); }

/* Precio de venta efectivo: aplica el % de descuento del ítem, si tiene. */
function finalPrice(p){
  const d = Number(p.descuento)||0;
  return d>0 ? Math.round(p.precio * (1 - d/100)) : p.precio;
}

function productCard(p){
  const qty = cartQty(p.id);
  const specs = p.cat==='neumatico'
    ? [p.medida, p.posicion]
    : [p.presentacion, p.viscosidad, p.tipo];
  const hasSpecs = (p.especificaciones||[]).some(s=>s.label && s.value);
  const hasDiscount = Number(p.descuento) > 0;
  const priceBlock = hasDiscount
    ? `<div class="promo-price">
        <span class="promo-badge">${p.descuento}% OFF</span>
        <div class="promo-old">Antes <span class="price-old mono">${money(p.precio)}</span></div>
        <div class="promo-new mono">${money(finalPrice(p))}</div>
      </div>
      <small class="stock-note">${p.stock} disp. · unidad</small>`
    : `<div class="price">${money(p.precio)}<br><small>${p.stock} disp. · unidad</small></div>`;
  return `
  <div class="card ${hasDiscount?'promo':''}">
    <div class="card-media ${p.cat==='lubricante'?'lube':''}">
      ${p.destacado ? `<span class="badge-reco">${p.reco||'Destacado'}</span>` : ''}
      ${p.imagen ? `<img src="${p.imagen}" alt="${p.marca} ${p.modelo}">` : ic(p.cat==='neumatico'?'tire':'drop', 84)}
    </div>
    <div class="card-body">
      <div class="card-cat">${p.cat==='neumatico'?'Neumático':'Lubricante'}</div>
      <div class="card-brand-row">
        <div>
          <div class="card-brand">${p.marca}</div>
          <div class="card-model">${p.modelo}</div>
        </div>
        ${p.marcaLogo ? `<img class="brand-logo" src="${p.marcaLogo}" alt="${p.marca}">` : ''}
      </div>
      <div class="spec-chips">${specs.filter(Boolean).map(s=>`<span class="spec-chip">${s}</span>`).join('')}</div>
      ${hasSpecs ? `<button class="link-btn" data-specs="${p.id}">${ic('info',13)} Ver especificaciones técnicas</button>` : ''}
      <div class="card-foot">
        ${priceBlock}
      </div>
      <div class="add-row">
        <div class="stepper">
          <button data-step="-1" data-id="${p.id}" ${qty<=0?'disabled':''}>${ic('minus',12)}</button>
          <span>${qty}</span>
          <button data-step="1" data-id="${p.id}" ${qty>=p.stock?'disabled':''}>${ic('plus',12)}</button>
        </div>
        <button class="btn ${qty>0?'':'btn-accent'}" style="flex:1;justify-content:center" data-add="${p.id}" ${p.stock<=0?'disabled':''}>
          ${qty>0? 'En el carro' : (p.stock<=0? 'Sin stock' : 'Agregar')}
        </button>
      </div>
    </div>
  </div>`;
}

function renderInventario(){
  const marcas = ['todas', ...new Set(PRODUCTS.map(p=>p.marca))];
  const list = filteredProducts();
  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">Autopartes · Inventario</p>
        <h1>Neumáticos y lubricantes disponibles</h1>
        </div>
    </div>

    <div class="toolbar">
      <div class="search">${ic('search',15)}<input id="invSearch" placeholder="Buscar por marca o modelo…" value="${inv.q}"></div>
      <select id="invMarca">${marcas.map(m=>`<option value="${m}" ${inv.marca===m?'selected':''}>${m==='todas'?'Todas las marcas':m}</option>`).join('')}</select>
      <select id="invSort">
        <option value="reco" ${inv.sort==='reco'?'selected':''}>Recomendados primero</option>
        <option value="precio-asc" ${inv.sort==='precio-asc'?'selected':''}>Precio: menor a mayor</option>
        <option value="precio-desc" ${inv.sort==='precio-desc'?'selected':''}>Precio: mayor a menor</option>
      </select>
    </div>
    <div class="chip-row" style="margin-bottom:18px">
      <button class="chip ${inv.cat==='todos'?'active':''}" data-cat="todos">Todos</button>
      <button class="chip ${inv.cat==='neumatico'?'active':''}" data-cat="neumatico">Neumáticos</button>
      <button class="chip ${inv.cat==='lubricante'?'active':''}" data-cat="lubricante">Lubricantes</button>
    </div>

    ${list.length? `<div class="grid">${list.map(productCard).join('')}</div>` : `
      <div class="empty-state">${ic('search',30)}<div>No hay resultados para ese filtro.</div></div>`}
  `;
}

function wireInventario(){
  const s = document.getElementById('invSearch');
  if(s){ s.addEventListener('input', e => { inv.q = e.target.value; renderContentOnly(); }); }
  const m = document.getElementById('invMarca');
  if(m){ m.addEventListener('change', e => { inv.marca = e.target.value; renderContentOnly(); }); }
  const so = document.getElementById('invSort');
  if(so){ so.addEventListener('change', e => { inv.sort = e.target.value; renderContentOnly(); }); }
  document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click', ()=>{ inv.cat=b.getAttribute('data-cat'); renderContentOnly(); }));
  document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click', ()=>{
    const id = b.getAttribute('data-id'); const d = parseInt(b.getAttribute('data-step'));
    setCartQty(id, cartQty(id)+d); renderContentOnly(); renderCartUI();
  }));
  document.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click', ()=>{
    const id = b.getAttribute('data-add');
    if(cartQty(id)<=0) setCartQty(id, 1);
    renderContentOnly(); renderCartUI(); openCart();
  }));
  document.querySelectorAll('[data-specs]').forEach(b=>b.addEventListener('click', ()=>{
    const p = PRODUCTS.find(p=>p.id===b.getAttribute('data-specs'));
    if(p) openSpecsModal(p);
  }));
}

function openSpecsModal(p){
  const specs = (p.especificaciones||[]).filter(s=>s.label && s.value);
  const subt = p.cat==='neumatico'
    ? [p.medida, p.posicion].filter(Boolean).join(' · ')
    : [p.presentacion, p.viscosidad, p.tipo].filter(Boolean).join(' · ');
  openModal(`
    <div class="modal-head" style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
      <div>
        <h3 style="font-size:18px">${p.marca} ${p.modelo}</h3>
        <p class="hint" style="margin-top:4px">${subt}</p>
      </div>
      <button class="icon-btn" id="closeSpecs" aria-label="Cerrar">${ic('x',15)}</button>
    </div>
    <div class="modal-body" style="padding-top:2px">
      <div class="specs-table-wrap">
        <div class="specs-table-head">Especificaciones técnicas</div>
        <table class="specs-table"><tbody>
          ${specs.map(s=>`<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}
        </tbody></table>
      </div>
    </div>
  `);
  document.getElementById('closeSpecs').addEventListener('click', closeModal);
}

/* ================= Cart drawer ================= */
function renderCartUI(){
  const drawer = document.getElementById('cartDrawer');
  const lines = CART.map(c => {
    const p = PRODUCTS.find(p=>p.id===c.id); if(!p) return '';
    return `
    <div class="cart-line">
      <div class="ci-info">
        <div class="ci-brand">${p.marca} <span style="font-weight:500;color:var(--text-muted)">${p.modelo}</span></div>
        <div class="ci-model">${p.cat==='neumatico'?p.medida:p.presentacion+' · '+p.viscosidad}</div>
        <div class="ci-price">${money(finalPrice(p))} × ${c.qty} = <b class="mono">${money(finalPrice(p)*c.qty)}</b></div>
      </div>
      <div class="stepper">
        <button data-cstep="-1" data-id="${p.id}">${ic('minus',12)}</button>
        <span>${c.qty}</span>
        <button data-cstep="1" data-id="${p.id}" ${c.qty>=p.stock?'disabled':''}>${ic('plus',12)}</button>
      </div>
    </div>`;
  }).join('');

  drawer.innerHTML = `
    <div class="drawer-head">
      <h3 style="font-size:16px">Tu carro (${cartCount()})</h3>
      <button class="icon-btn" id="closeCart">${ic('x',15)}</button>
    </div>
    <div class="drawer-body">
      ${CART.length? lines : `<div class="empty-state">${ic('empty',30)}<div>Aún no agregas ítems.<br>Explora el inventario para armar tu pedido.</div></div>`}
    </div>
    <div class="drawer-foot">
      <div class="total-row grand"><span>Total</span><span class="mono">${money(cartTotal())}</span></div>
      <button class="btn btn-accent" style="justify-content:center" id="goRequest" ${CART.length? '':'disabled'}>Generar solicitud</button>
      <p class="hint">El pago se aplica como descuento en tu próxima recaudación — sin cobro en línea.</p>
    </div>
  `;
  drawer.querySelectorAll('[data-cstep]').forEach(b=>b.addEventListener('click', ()=>{
    const id=b.getAttribute('data-id'); const d=parseInt(b.getAttribute('data-cstep'));
    setCartQty(id, cartQty(id)+d); renderCartUI(); renderContentOnly();
  }));
  document.getElementById('closeCart').addEventListener('click', closeCart);
  const goBtn = document.getElementById('goRequest');
  if(goBtn) goBtn.addEventListener('click', ()=>{ closeCart(); openSolicitudModal(); });
}
function openCart(){ document.getElementById('cartDrawer').classList.add('show'); document.getElementById('overlay').classList.add('show'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('show'); document.getElementById('overlay').classList.remove('show'); }
document.getElementById('overlay').addEventListener('click', ()=>{ closeCart(); closeModal(); });

function renderCartFab(container){
  const fab = document.createElement('button');
  fab.className = 'cart-fab'; fab.id='cartFab';
  fab.innerHTML = `${ic('cart',18)}<span>Carro</span><span class="count mono">${cartCount()}</span>`;
  fab.addEventListener('click', openCart);
  container.appendChild(fab);
}

/* ================= Modal: Solicitud + Confirmación ================= */
function openModal(html, wide){
  const card = document.getElementById('modalCard');
  card.classList.toggle('wide', !!wide);
  card.innerHTML = html;
  document.getElementById('modalRoot').classList.add('show');
}
function closeModal(){ document.getElementById('modalRoot').classList.remove('show'); }

function openSolicitudModal(){
  openModal(`
    <div class="modal-head" style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
      <div>
        <h3 style="font-size:18px">Confirmar compra</h3>
        <p class="hint" style="margin-top:4px">Completa tus datos y la dirección de despacho. Al confirmar, se genera un folio y se notifica por correo al comprador y al proveedor de cada ítem.</p>
      </div>
      <button class="icon-btn" id="closeSolicitud" aria-label="Cerrar">${ic('x',15)}</button>
    </div>
    <div class="modal-body">
      <div class="g-label">Datos del comprador</div>
      <div class="field-row">
        <div class="field"><label>Nombre completo</label><input id="fNombre" placeholder="Ej: Fernando Pérez"></div>
        <div class="field"><label>RUT</label><input id="fRut" placeholder="Ej: 12.345.678-9"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Correo electrónico</label><input id="fCorreo" type="email" placeholder="correo@empresa.cl"></div>
        <div class="field"><label>Teléfono</label><input id="fTelefono" placeholder="+56 9 1234 5678"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Empresa / Flota</label><input id="fEmpresa" placeholder="Ej: Andimar"></div>
        <div class="field"><label>N° de bus / unidad (opcional)</label><input id="fBus" placeholder="Ej: 329"></div>
      </div>

      <div class="g-label" style="margin-top:6px">Dirección de despacho</div>
      <div class="field"><label>Dirección</label><input id="fDireccion" placeholder="Calle, número"></div>
      <div class="field-row">
        <div class="field"><label>Comuna / Ciudad</label><input id="fComuna" placeholder="Ej: Curicó"></div>
        <div class="field"><label>Referencia (opcional)</label><input id="fReferencia" placeholder="Ej: Terminal de buses, bodega 3"></div>
      </div>

      <div class="g-label" style="margin-top:6px">Responsable de recepción (opcional)</div>
      <div class="field-row">
        <div class="field"><label>Nombre</label><input id="fRespNombre" placeholder="Si es distinto al comprador"></div>
        <div class="field"><label>Teléfono</label><input id="fRespTelefono" placeholder="+56 9 ..."></div>
      </div>

      <div class="field"><label>Comentario (opcional)</label><textarea id="fComentario" placeholder="Ej: requiere instalación en eje de dirección"></textarea></div>

      <div class="summary-list" style="border-top:1px solid var(--border);padding-top:10px">
        ${CART.map(c=>{ const p=PRODUCTS.find(p=>p.id===c.id); return `<div class="row"><span>${c.qty} × ${p.marca} ${p.modelo}</span><b class="mono">${money(finalPrice(p)*c.qty)}</b></div>`; }).join('')}
        <div class="row" style="border-top:1px solid var(--border);padding-top:8px"><span>Total</span><b class="mono" style="font-size:15px">${money(cartTotal())}</b></div>
      </div>
      <p class="hint">El pago se aplica como descuento en tu próxima recaudación — no se realiza cobro en línea.</p>
      <div class="modal-actions">
        <button class="btn btn-ghost" id="cancelSolicitud">Cancelar</button>
        <button class="btn btn-accent" id="submitSolicitud">Confirmar compra</button>
      </div>
    </div>
  `, true);
  document.getElementById('cancelSolicitud').addEventListener('click', closeModal);
  document.getElementById('closeSolicitud').addEventListener('click', closeModal);
  document.getElementById('submitSolicitud').addEventListener('click', submitSolicitud);
}

/* Simula el envío de un correo: no se transmite a ningún servidor, solo queda registrado
   en EMAILS para que el backoffice (pestaña Correos) pueda mostrar qué se habría enviado.
   `accion:'aprobar'` marca el correo de aprobación al cliente para poder simular el clic
   en su enlace desde la pestaña Correos. */
function queueEmail({to, cc, tipo, asunto, cuerpo, folio, accion}){
  EMAILS.unshift({ id:'em'+Date.now()+Math.random().toString(16).slice(2,6), folio, tipo, accion:accion||'', to, cc:cc||'', asunto, cuerpo, fecha:new Date().toISOString() });
}

function direccionCompletaDe(cliente){
  return `${cliente.direccion}, ${cliente.comuna}${cliente.referencia? ' ('+cliente.referencia+')' : ''}`;
}
function responsableDe(cliente){
  return cliente.respNombre ? `${cliente.respNombre}${cliente.respTelefono? ' · '+cliente.respTelefono : ''}` : `${cliente.nombre} (comprador)`;
}

function submitSolicitud(){
  const nombre = document.getElementById('fNombre').value.trim();
  const rut = document.getElementById('fRut').value.trim();
  const correo = document.getElementById('fCorreo').value.trim();
  const telefono = document.getElementById('fTelefono').value.trim();
  const direccion = document.getElementById('fDireccion').value.trim();
  const comuna = document.getElementById('fComuna').value.trim();
  if(!nombre || !rut || !correo || !telefono || !direccion || !comuna){
    alert('Completa nombre, RUT, correo, teléfono, dirección y comuna para confirmar la compra.');
    return;
  }
  const folio = 'AP-' + Date.now().toString().slice(-6);
  const cliente = {
    nombre, rut, correo, telefono,
    empresa: document.getElementById('fEmpresa').value.trim(),
    bus: document.getElementById('fBus').value.trim(),
    direccion, comuna,
    referencia: document.getElementById('fReferencia').value.trim(),
    respNombre: document.getElementById('fRespNombre').value.trim(),
    respTelefono: document.getElementById('fRespTelefono').value.trim(),
    comentario: document.getElementById('fComentario').value.trim(),
  };
  const items = CART.map(c=>{
    const p=PRODUCTS.find(p=>p.id===c.id);
    return {id:p.id, marca:p.marca, modelo:p.modelo, descripcion:p.descripcion||'', cantidad:c.qty, precio:finalPrice(p), proveedor:p.proveedor||'', proveedorEmail:p.proveedorEmail||''};
  });
  // Queda "esperando-aprobacion": el proveedor y el backoffice recién se enteran cuando
  // el cliente aprueba desde el enlace del correo (simulado más abajo).
  const req = { folio, fecha: new Date().toISOString(), cliente, items, total: cartTotal(), estado: 'esperando-aprobacion' };
  REQUESTS.unshift(req); saveRequests();

  const direccionCompleta = direccionCompletaDe(cliente);
  const responsable = responsableDe(cliente);

  // Único correo que se envía al confirmar: la aprobación al cliente. El proveedor no
  // recibe nada todavía.
  queueEmail({
    to: correo, tipo:'cliente', accion:'aprobar', folio,
    asunto: `Aprueba tu compra ${folio} — ${EMPRESA.nombrePlataforma}`,
    cuerpo: [
      `Hola, ${nombre}:`,
      `Hemos recibido tu solicitud de compra en nuestro portal. Para poder coordinar el despacho con el proveedor, necesitamos tu aprobación final de los siguientes detalles:`,
      ``,
      `🛒 Resumen de la Compra (N° ${folio})`,
      ...items.map(i=>`- Producto: ${i.cantidad} × ${i.marca} ${i.modelo} — ${money(i.precio*i.cantidad)}`),
      `- Monto Total: ${money(req.total)}`,
      `- Forma de pago: El monto total se descontará de tu próxima recaudación.`,
      ``,
      `🚚 Datos de Despacho`,
      `- Dirección: ${direccionCompleta}`,
      `- Responsable de recepción: ${responsable}`,
      ...(cliente.comentario? [`- Comentario: ${cliente.comentario}`] : []),
      ``,
      `✅ Confirma tu pedido`,
      `Para autorizar esta compra y enviar la orden al proveedor, por favor haz clic en el siguiente enlace:`,
      `👉 Aprobar Compra ${folio}: https://autopartes.kupos.cl/aprobar/${folio}`,
      `(enlace de ejemplo — en este prototipo se simula con el botón "Simular aprobación")`,
      ``,
      `Si no reconoces esta compra o necesitas modificarla, por favor contáctanos antes de aprobar.`,
      ``,
      `Saludos cordiales,`,
      `El equipo de ${EMPRESA.nombrePlataforma}`,
    ].join('\n'),
  });
  saveEmails();

  CART = []; saveCart();
  openModal(`
    <div class="modal-body" style="text-align:center">
      <div class="confirm-icon">${ic('mail',26)}</div>
      <h3 style="font-size:19px">Revisa tu correo para aprobar</h3>
      <p class="hint">Enviamos un correo de aprobación a <b>${correo}</b>. El proveedor y el backoffice se notifican recién cuando apruebes la compra desde ese enlace.</p>
      <div class="folio">${folio}</div>
      <div class="summary-list" style="text-align:left">
        ${req.items.map(i=>`<div class="row"><span>${i.cantidad} × ${i.marca} ${i.modelo}</span><b class="mono">${money(i.precio*i.cantidad)}</b></div>`).join('')}
        <div class="row" style="border-top:1px solid var(--border);padding-top:8px"><span>Total</span><b class="mono" style="font-size:15px">${money(req.total)}</b></div>
      </div>
      <div class="proto-banner" style="text-align:left;margin-top:2px">
        ${ic('info',16)}
        <div>Prototipo: no hay envío real de correo. Usa el botón de abajo para simular que hiciste clic en el enlace de aprobación.</div>
      </div>
      <div class="modal-actions" style="justify-content:center;margin-top:4px">
        <button class="btn btn-ghost" id="closeConfirm">Cerrar</button>
        <button class="btn btn-accent" id="simulateApprove">${ic('link',14)} Simular aprobación</button>
      </div>
    </div>
  `, true);
  document.getElementById('closeConfirm').addEventListener('click', ()=>{ closeModal(); renderContentOnly(); renderCartUI(); });
  document.getElementById('simulateApprove').addEventListener('click', ()=>{
    approveSolicitud(folio);
    renderApprovedModal(folio);
  });
}

/* Se dispara cuando el cliente "aprueba" (en la realidad: clic en el enlace del correo).
   Recién acá se notifica al proveedor y la solicitud queda accionable para el backoffice. */
function approveSolicitud(folio){
  const req = REQUESTS.find(r=>r.folio===folio);
  if(!req || req.estado!=='esperando-aprobacion') return req || null;
  req.estado = 'pendiente';
  saveRequests();
  // Esta acción representa al cliente aprobando desde el enlace de su correo —
  // se simula desde Backoffice, pero en la bitácora queda como acción del cliente.
  logHistory({ entidad:'solicitud', entidadId:folio, accion:'aprobacion-cliente', resumen:`El cliente aprobó la solicitud ${folio} (simulado)`, actor:'Cliente (simulado)' });

  const direccionCompleta = direccionCompletaDe(req.cliente);
  const responsable = responsableDe(req.cliente);

  // Un correo por proveedor, solo con los ítems que le corresponden — sin precios,
  // solo marca, modelo y la descripción cargada en el catálogo (para trackeo).
  const porProveedor = {};
  req.items.forEach(i=>{ if(i.proveedorEmail){ (porProveedor[i.proveedorEmail] ||= {proveedor:i.proveedor, items:[]}).items.push(i); } });
  // Orden de compra al proveedor: nunca lleva precios (el costo que maneja el
  // proveedor es distinto al que paga el cliente) — solo marca, modelo, descripción
  // y cantidad, más los datos de despacho y de facturación.
  const fechaEmision = new Date().toLocaleDateString('es-CL', {day:'2-digit', month:'2-digit', year:'numeric'});
  Object.entries(porProveedor).forEach(([email, grupo])=>{
    queueEmail({
      to: email, cc: EMPRESA.correoDTE, tipo:'proveedor', folio,
      asunto: `Orden de Compra ${folio} — ${EMPRESA.nombrePlataforma}`,
      cuerpo: [
        `Estimado equipo de ${grupo.proveedor},`,
        `Le notificamos que se ha confirmado un nuevo pedido a través de nuestro portal. Este correo constituye la Orden de Compra oficial para los productos detallados a continuación. Por favor, proceda con la preparación y el despacho.`,
        ``,
        `📄 Datos de la Orden de Compra`,
        `- N° de Orden de Compra: ${folio}`,
        `- Fecha de emisión: ${fechaEmision}`,
        `- Condiciones de pago: ${EMPRESA.condicionesPago}`,
        ``,
        `📦 Detalle de los Productos`,
        ...grupo.items.flatMap(i=>[
          `- Ítem: ${i.marca} ${i.modelo}${i.descripcion? ' — '+i.descripcion : ''}`,
          `  Cantidad: ${i.cantidad} unidad${i.cantidad===1?'':'es'}`,
        ]),
        ``,
        `🚚 Información de Despacho`,
        `- Cliente / Empresa: ${req.cliente.nombre}${req.cliente.empresa? ' ('+req.cliente.empresa+')' : ''}`,
        `- Dirección de Entrega: ${direccionCompleta}`,
        `- Responsable de Recepción: ${responsable}`,
        `- Teléfono de Contacto: ${req.cliente.telefono}`,
        `- Correo Electrónico: ${req.cliente.correo}`,
        ``,
        `🏢 Datos de Facturación`,
        `- Razón Social: ${EMPRESA.razonSocial}`,
        `- RUT: ${EMPRESA.rut}`,
        `- Giro: ${EMPRESA.giro}`,
        `- Dirección: ${EMPRESA.direccion}`,
        `- Correo DTE: ${EMPRESA.correoDTE}`,
        ``,
        `⚙️ Instrucciones Adicionales`,
        `Por favor, confirme la recepción de este pedido respondiendo a este correo (con copia a ${EMPRESA.correoDTE}) e indíquenos la fecha estimada de entrega. Una vez despachado, le solicitamos enviar el comprobante de entrega y la factura electrónica a nuestro correo de DTE.`,
        ``,
        `Quedamos a su disposición ante cualquier duda o comentario.`,
        ``,
        `Atentamente,`,
        `Equipo ${EMPRESA.nombrePlataforma}`,
      ].join('\n'),
    });
  });
  saveEmails();
  return req;
}

function renderApprovedModal(folio){
  const enviados = EMAILS.filter(e=>e.folio===folio && e.tipo==='proveedor');
  openModal(`
    <div class="modal-body" style="text-align:center">
      <div class="confirm-icon">${ic('check',26)}</div>
      <h3 style="font-size:19px">Compra aprobada</h3>
      <p class="hint">Tu pedido quedó registrado y a la espera de confirmación del backoffice.</p>
      <div class="folio">${folio}</div>
      <div class="summary-list" style="text-align:left;border-top:1px solid var(--border);padding-top:10px">
        <div class="g-label">Correos enviados a proveedores (simulado, sin precios)</div>
        ${enviados.length? enviados.map(e=>`<div class="row"><span>${e.to}</span></div>`).join('') : `<div class="row"><span class="hint">Ningún ítem tenía proveedor con correo registrado.</span></div>`}
      </div>
      <div class="modal-actions" style="justify-content:center;margin-top:14px">
        <button class="btn btn-accent" id="closeConfirm">Listo</button>
      </div>
    </div>
  `, true);
  document.getElementById('closeConfirm').addEventListener('click', ()=>{ closeModal(); renderContentOnly(); renderCartUI(); });
}

/* ================= Backoffice ================= */
function defaultSpecs(cat){
  return cat==='neumatico' ? [
    {label:'Diseño', value:''},
    {label:'Aplicación', value:''},
    {label:'Índice de carga / velocidad', value:''},
    {label:'Capas (PR)', value:''},
    {label:'Tipo', value:''},
    {label:'Carga máxima (uso simple)', value:''},
    {label:'Carga máxima (uso dual)', value:''},
    {label:'Presión máxima de inflado', value:''},
    {label:'Profundidad de banda', value:''},
    {label:'Ancho de sección', value:''},
    {label:'Diámetro exterior', value:''},
    {label:'Ancho de llanta estándar', value:''},
    {label:'Aro recomendado', value:''},
    {label:'Aro permitido', value:''},
  ] : [
    {label:'Viscosidad', value:''},
    {label:'Tipo de aceite', value:''},
    {label:'Norma / Especificación', value:''},
  ];
}
function emptyDraft(cat){
  return cat==='neumatico'
    ? {id:null, cat:'neumatico', estado:'pendiente', marca:'', modelo:'', proveedorId:'', proveedor:'', proveedorEmail:'', descripcion:'', medida:'', posicion:'Dirección', precio:'', descuento:'', stock:'', destacado:false, reco:'', imagen:'', marcaLogo:'', especificaciones:defaultSpecs('neumatico')}
    : {id:null, cat:'lubricante', estado:'pendiente', marca:'', modelo:'', proveedorId:'', proveedor:'', proveedorEmail:'', descripcion:'', presentacion:'', viscosidad:'', tipo:'Mineral', precio:'', descuento:'', stock:'', destacado:false, reco:'', imagen:'', marcaLogo:'', especificaciones:defaultSpecs('lubricante')};
}
let draft = emptyDraft('neumatico');

function emptyProviderDraft(){ return {id:null, nombre:'', email:'', telefono:''}; }
let providerDraft = emptyProviderDraft();

/* ================= Carga masiva de ítems (Excel) ================= */
/* Normaliza un encabezado de columna para compararlo de forma tolerante: sin acentos,
   sin mayúsculas, sin signos, y sin palabras de relleno ("de", "la", etc.) — así
   "Índice de carga / velocidad" y "indice_carga_velocidad" calzan igual. */
const NORM_STOPWORDS = ['de','del','la','el','los','las','para','con','y'];
function normHeader(h){
  let s = (h||'').normalize('NFD').replace(/[^\x00-\x7F]/g,'').toLowerCase();
  s = s.replace(/[^a-z0-9]+/g, ' ').trim();
  if(!s) return '';
  return s.split(' ').filter(w => w && !NORM_STOPWORDS.includes(w)).join('');
}

/* Las 14 filas de la ficha técnica (mismo orden y textos que defaultSpecs('neumatico')),
   como columnas propias del formato — así la carga masiva también completa el popup
   de especificaciones, no solo los campos básicos. */
const NEUMATICO_SPEC_COLUMNS = [
  'spec_diseno','spec_aplicacion','spec_indice_carga_velocidad','spec_capas_pr','spec_tipo',
  'spec_carga_max_simple','spec_carga_max_dual','spec_presion_max','spec_profundidad_banda',
  'spec_ancho_seccion','spec_diametro_exterior','spec_ancho_llanta','spec_aro_recomendado','spec_aro_permitido',
];
const BULK_TEMPLATE_HEADERS = ['categoria','marca','modelo','precio','stock','descuento_pct','medida','posicion','presentacion','viscosidad','tipo','descripcion','destacado','etiqueta_destacada', ...NEUMATICO_SPEC_COLUMNS];
const BULK_TEMPLATE_EXAMPLES = [
  ['neumatico','Bridgestone','R269','320288','18','0','295/80R22.5','Dirección / Tracción','','','','295/80R22.5 152/149L R269 Bridgestone 16PR Dir-On BLK JPN','si','Recomendado dirección',
    'R269','Direccional (eje delantero)','152/149 L','16 PR','TL (Sin cámara)','3.550 kg','3.250 kg','830 kPa (120 psi)','16 mm','298 mm','1052 mm','8.25 pulgadas','8.25','7.50 - 9.00'],
  ['lubricante','Shell','Rimula R6','210000','16','0','','','20 L','5W30','Sintético','20L 5W30 Sintético Rimula R6 Shell Diesel EuroV/VI','no','',
    '','','','','','','','','','','','',''],
];
let bulk = { proveedorId:'', rows:null, errors:[], unmatchedHeaders:[], fileName:'' };

const BULK_HEADER_ALIASES = {
  categoria:'categoria', category:'categoria', cat:'categoria',
  marca:'marca', brand:'marca',
  modelo:'modelo', model:'modelo',
  precio:'precio', price:'precio', preciodeventa:'precio', preciodeventaclp:'precio',
  stock:'stock', cantidad:'stock', qty:'stock',
  descuentopct:'descuento', descuento:'descuento', descuentopercent:'descuento', discount:'descuento',
  medida:'medida', size:'medida',
  posicion:'posicion', posicionrecomendada:'posicion',
  presentacion:'presentacion',
  viscosidad:'viscosidad',
  tipo:'tipo', tipoaceite:'tipo',
  descripcion:'descripcion',
  destacado:'destacado', featured:'destacado',
  etiquetadestacada:'reco', reco:'reco', etiqueta:'reco',
};
/* Alias automáticos para las columnas de especificaciones: cada spec_xxx y el TEXTO
   TAL CUAL de su etiqueta en el popup (ej. "Índice de carga / velocidad") apuntan a la
   misma clave, generados con el mismo normHeader() para que nunca se desincronicen.
   No pisan un alias ya definido arriba (así "Tipo" sigue siendo el tipo de lubricante). */
NEUMATICO_SPEC_COLUMNS.forEach((col, i) => {
  const label = defaultSpecs('neumatico')[i].label;
  [col, label].forEach(text => {
    const key = normHeader(text);
    if(key && !(key in BULK_HEADER_ALIASES)) BULK_HEADER_ALIASES[key] = col;
  });
});
/* Sinónimos cortos adicionales — por si alguien nombra la columna sin el detalle
   completo de la etiqueta (ej. "Capas" en vez de "Capas (PR)"). */
const NEUMATICO_SPEC_SHORT_ALIASES = {
  spec_capas_pr: ['capas','pr','plyrating'],
  spec_indice_carga_velocidad: ['indice','cargavelocidad','loadindex','speedindex'],
  spec_presion_max: ['presion','presionmaxima'],
  spec_diametro_exterior: ['diametro'],
  spec_profundidad_banda: ['profundidad'],
  spec_ancho_seccion: ['anchoseccion'],
  spec_ancho_llanta: ['anchollanta'],
};
Object.entries(NEUMATICO_SPEC_SHORT_ALIASES).forEach(([col, alts]) => {
  alts.forEach(alt => { const key = normHeader(alt); if(key && !(key in BULK_HEADER_ALIASES)) BULK_HEADER_ALIASES[key] = col; });
});

/* Arma el libro de Excel del formato (una hoja con encabezados + 2 filas de ejemplo). */
function buildTemplateWorkbook(){
  const rows = [BULK_TEMPLATE_HEADERS, ...BULK_TEMPLATE_EXAMPLES];
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws['!cols'] = BULK_TEMPLATE_HEADERS.map(h => ({ wch: Math.max(14, h.length + 4) }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Formato');
  return wb;
}
/* Versión separada por tabs del mismo formato: al pegarla dentro de una celda de
   Excel o Google Sheets, se reparte sola en columnas — sirve como respaldo del botón "Copiar". */
function buildTemplateTSV(){
  const rows = [BULK_TEMPLATE_HEADERS, ...BULK_TEMPLATE_EXAMPLES];
  return rows.map(r => r.join('\t')).join('\n');
}

/* Lee cualquier archivo que SheetJS entienda (.xlsx, .xls, .csv) y devuelve
   {items, errors} ya validados contra nuestro modelo de producto. */
function rowsFromWorkbookData(arrayBuffer){
  if(typeof XLSX === 'undefined'){
    return {items:[], errors:['No se pudo cargar el lector de Excel (sin conexión). Recarga la página e intenta de nuevo.']};
  }
  let json;
  try{
    const wb = XLSX.read(arrayBuffer, {type:'array'});
    const sheet = wb.Sheets[wb.SheetNames[0]];
    json = XLSX.utils.sheet_to_json(sheet, {defval:'', raw:false});
  }catch(err){
    return {items:[], errors:['No se pudo leer el archivo. Verifica que sea un Excel (.xlsx) o CSV válido.']};
  }
  if(!json.length) return {items:[], errors:['El archivo no tiene filas de datos.']};

  // Encabezados detectados en el archivo que no calzan con ninguna columna conocida
  // (typos, nombres distintos, etc.) — se muestran en la vista previa para diagnosticar.
  const unmatchedHeaders = new Set();
  const allHeaders = new Set();
  json.forEach(obj => Object.keys(obj).forEach(k => allHeaders.add(k)));
  allHeaders.forEach(k => { if(!BULK_HEADER_ALIASES[normHeader(k)]) unmatchedHeaders.add(k); });

  const items = []; const errors = [];
  json.forEach((obj, idx) => {
    const rowNum = idx + 2; // fila 1 = encabezados
    const raw = {};
    Object.keys(obj).forEach(k => {
      const key = BULK_HEADER_ALIASES[normHeader(k)];
      if(key) raw[key] = String(obj[k]==null? '' : obj[k]).trim();
    });
    if(!raw.marca && !raw.modelo) return;
    if(!raw.marca){ errors.push(`Fila ${rowNum}: falta la marca.`); return; }
    if(!raw.modelo){ errors.push(`Fila ${rowNum}: falta el modelo.`); return; }
    const precio = parseFloat((raw.precio||'').replace(/[^0-9.,-]/g,'').replace(',','.'));
    if(!precio){ errors.push(`Fila ${rowNum}: precio inválido o vacío.`); return; }
    const cat = normHeader(raw.categoria||'neumatico').startsWith('lub') ? 'lubricante' : 'neumatico';
    const stock = parseInt(raw.stock)||0;
    const descuento = Math.min(95, Math.max(0, parseFloat(raw.descuento)||0));
    const destacado = /^(si|sí|true|1|x|yes)$/i.test((raw.destacado||'').trim());
    const item = {
      cat, marca:raw.marca, modelo:raw.modelo, precio, stock, descuento,
      descripcion: raw.descripcion||'', reco: raw.reco||'', destacado,
    };
    if(cat==='neumatico'){
      item.medida = raw.medida||''; item.posicion = raw.posicion || 'Dirección';
      item.especificaciones = defaultSpecs('neumatico').map((s,i) => {
        const col = NEUMATICO_SPEC_COLUMNS[i];
        // "Tipo" a secas (TL/TT) también es válido para neumáticos si no hay una
        // columna spec_tipo dedicada — comparte la columna genérica con lubricantes.
        const value = raw[col] || (col==='spec_tipo' ? (raw.tipo||'') : '');
        return { label: s.label, value };
      });
    } else {
      item.presentacion = raw.presentacion||''; item.viscosidad = raw.viscosidad||''; item.tipo = raw.tipo || 'Mineral';
      item.especificaciones = defaultSpecs('lubricante').map(s=>({...s}));
    }
    items.push({rowNum, item});
  });
  return {items, errors, unmatchedHeaders: [...unmatchedHeaders]};
}

/* Ofrece un archivo generado en el momento para guardar. Dentro del artifact publicado,
   un <a download> normal no funciona (el visor lo bloquea): usa la capacidad "downloads"
   cuando está disponible y, si no, recurre al método clásico de blob + <a download>. */
async function offerFileDownload(filename, blob, failMsg){
  if(window.claude && window.claude.use){
    try{
      const downloads = await window.claude.use('downloads');
      if(downloads){
        try{
          await downloads.save({filename, data:blob});
          return;
        }catch(err){
          if(err && err.code==='declined') return;
          // Cualquier otro error: sigue al método clásico de abajo.
        }
      }
    }catch(err){ /* capacidad no disponible en esta vista, sigue abajo */ }
  }
  try{
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }catch(err){ alert(failMsg || 'No se pudo descargar automáticamente.'); }
}

async function downloadTemplateXLSX(){
  if(typeof XLSX === 'undefined'){ alert('No se pudo cargar el lector de Excel (sin conexión). Recarga la página e intenta de nuevo.'); return; }
  const wb = buildTemplateWorkbook();
  const arrayBuf = XLSX.write(wb, {bookType:'xlsx', type:'array'});
  const blob = new Blob([arrayBuf], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  await offerFileDownload('formato_carga_autopartes.xlsx', blob, 'No se pudo descargar automáticamente. Usa "Ver columnas del formato" para copiar los datos manualmente.');
}
function copyTemplateTSV(){
  const text = buildTemplateTSV();
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text)
      .then(()=> alert('Formato copiado. Pégalo en la celda A1 de una planilla nueva (Excel o Google Sheets) — se reparte solo en columnas.'))
      .catch(()=> alert('No se pudo copiar automáticamente. Usa "Ver columnas del formato" para copiar manualmente.'));
  } else {
    alert('No se pudo copiar automáticamente. Usa "Ver columnas del formato" para copiar manualmente.');
  }
}

function bulkUploadModalHTML(){
  return `
    <div class="modal-head" style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
      <div>
        <h3 style="font-size:18px">Carga masiva de ítems</h3>
        <p class="hint" style="margin-top:4px">Selecciona el proveedor, descarga el formato, complétalo y súbelo para crear varios ítems a la vez.</p>
      </div>
      <button class="icon-btn" id="closeBulk" aria-label="Cerrar">${ic('x',15)}</button>
    </div>
    <div class="modal-body">
      <div class="field">
        <label>Proveedor para todos los ítems de este archivo</label>
        <select id="bulkProveedorId">
          <option value="">— Selecciona un proveedor —</option>
          ${PROVIDERS.map(pr=>`<option value="${pr.id}" ${bulk.proveedorId===pr.id?'selected':''}>${pr.nombre}</option>`).join('')}
        </select>
        <p class="hint" style="margin-top:2px">El formato no incluye columna de proveedor: todos los ítems del archivo quedan asignados a este.</p>
      </div>

      <div class="bulk-format-box">
        <div>
          <b>Formato de carga (.xlsx)</b>
          <p class="hint" style="margin-top:2px">Incluye la ficha técnica completa (diseño, índice de carga/velocidad, capas, cargas máximas, aros, etc.) y 2 filas de ejemplo — bórralas antes de subir tu archivo.</p>
        </div>
        <div style="display:flex;gap:8px;flex:none">
          <button type="button" class="btn btn-sm" id="downloadTemplate">${ic('box',13)} Descargar formato Excel</button>
          <button type="button" class="btn btn-ghost btn-sm" id="copyTemplate">Copiar</button>
        </div>
      </div>
      <details>
        <summary class="hint" style="cursor:pointer">Ver columnas del formato</summary>
        <div class="table-wrap" style="margin-top:8px">
          <table>
            <thead><tr>${BULK_TEMPLATE_HEADERS.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${BULK_TEMPLATE_EXAMPLES.map(r=>`<tr>${r.map(c=>`<td>${c || '<span class="hint">—</span>'}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        </div>
      </details>

      <div class="field">
        <label>Archivo Excel completado</label>
        <label class="file-btn" style="width:fit-content">${ic('box',13)} <span>${bulk.fileName || 'Elegir archivo'}</span><input type="file" id="bulkFile" accept=".xlsx,.xls,.csv"></label>
        <p class="hint" style="margin-top:4px">Acepta .xlsx, .xls o .csv.</p>
      </div>

      ${bulk.rows ? renderBulkPreview() : ''}

      <div class="modal-actions">
        <button class="btn btn-ghost" id="cancelBulk">Cancelar</button>
        <button class="btn btn-accent" id="confirmBulk" ${(!bulk.proveedorId || !bulk.rows || !bulk.rows.length) ? 'disabled' : ''}>Importar ${bulk.rows? bulk.rows.length : ''} ítem${bulk.rows && bulk.rows.length===1?'':'s'}</button>
      </div>
    </div>
  `;
}

function renderBulkPreview(){
  const rows = bulk.rows, errors = bulk.errors, unmatched = bulk.unmatchedHeaders||[];
  const firstSpecs = rows[0] ? rows[0].item.especificaciones||[] : [];
  const specsFilled = firstSpecs.filter(s=>s.value).length;
  return `
    <div class="g-label" style="margin-top:2px">Vista previa (${rows.length} ítem${rows.length===1?'':'s'} listo${rows.length===1?'':'s'} para importar)</div>
    <div class="table-wrap" style="max-height:220px;overflow-y:auto">
      <table>
        <thead><tr><th>Marca</th><th>Modelo</th><th>Categoría</th><th>Precio</th><th>Stock</th></tr></thead>
        <tbody>${rows.length? rows.map(({item})=>`<tr><td>${item.marca}</td><td>${item.modelo}</td><td>${item.cat==='neumatico'?'Neumático':'Lubricante'}</td><td class="cell-num">${money(item.precio)}</td><td class="cell-num">${item.stock}</td></tr>`).join('') : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:18px">Ninguna fila válida para importar.</td></tr>`}</tbody>
      </table>
    </div>
    ${rows.length && rows[0].item.cat==='neumatico' ? `<p class="hint">Ficha técnica detectada en "${rows[0].item.marca} ${rows[0].item.modelo}": ${specsFilled} de ${firstSpecs.length} campos con valor.</p>` : ''}
    ${unmatched.length? `
      <div class="proto-banner" style="background:var(--warn-bg);border-color:var(--warn);color:var(--warn)">
        ${ic('info',16)}
        <div><b>${unmatched.length} columna${unmatched.length===1?'':'s'} de tu archivo no se reconoció${unmatched.length===1?'':'aron'} (revisa el nombre exacto o bórralas):</b><br>${unmatched.map(h=>`"${h}"`).join(', ')}</div>
      </div>` : ''}
    ${errors.length? `
      <div class="proto-banner" style="background:var(--danger-bg);border-color:var(--danger);color:var(--danger)">
        ${ic('info',16)}
        <div><b>${errors.length} fila${errors.length===1?'':'s'} con problemas (no se importarán):</b><br>${errors.join('<br>')}</div>
      </div>` : ''}
  `;
}

function wireBulkModal(){
  document.getElementById('closeBulk').addEventListener('click', closeModal);
  document.getElementById('cancelBulk').addEventListener('click', closeModal);
  document.getElementById('bulkProveedorId').addEventListener('change', (e)=>{ bulk.proveedorId = e.target.value; refreshBulkModal(); });
  document.getElementById('downloadTemplate').addEventListener('click', downloadTemplateXLSX);
  document.getElementById('copyTemplate').addEventListener('click', copyTemplateTSV);
  const fileInput = document.getElementById('bulkFile');
  if(fileInput) fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    bulk.fileName = file.name;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const { items, errors, unmatchedHeaders } = rowsFromWorkbookData(ev.target.result);
      bulk.rows = items; bulk.errors = errors; bulk.unmatchedHeaders = unmatchedHeaders||[];
      refreshBulkModal();
    };
    reader.readAsArrayBuffer(file);
  });
  const confirmBtn = document.getElementById('confirmBulk');
  if(confirmBtn) confirmBtn.addEventListener('click', () => {
    if(!bulk.proveedorId || !bulk.rows || !bulk.rows.length) return;
    const pr = PROVIDERS.find(p=>p.id===bulk.proveedorId);
    bulk.rows.forEach(({item}, i) => {
      PRODUCTS.push({
        id: 'p'+Date.now()+i,
        estado: 'pendiente',
        ...item,
        proveedorId: pr.id, proveedor: pr.nombre, proveedorEmail: pr.email,
        imagen:'', marcaLogo:'',
      });
    });
    saveProducts();
    const count = bulk.rows.length;
    bulk = { proveedorId:'', rows:null, errors:[], unmatchedHeaders:[], fileName:'' };
    closeModal();
    bo.catEstado = 'pendiente';
    renderContentOnly();
    alert(`Se importaron ${count} ítem${count===1?'':'s'} como Pendientes de validación, asignados a ${pr.nombre}. Revísalos y publícalos desde el catálogo antes de que aparezcan en Inventario.`);
  });
}

function refreshBulkModal(){
  document.getElementById('modalCard').innerHTML = bulkUploadModalHTML();
  wireBulkModal();
}

function openBulkModal(){
  bulk = { proveedorId:'', rows:null, errors:[], unmatchedHeaders:[], fileName:'' };
  openModal(bulkUploadModalHTML(), true);
  wireBulkModal();
}

/* Un ítem sin campo "estado" (dato antiguo) se trata como Publicado. */
function itemEstado(p){ return p.estado||'publicado'; }

function catalogFiltered(){
  if(bo.catEstado==='todos') return PRODUCTS.slice();
  return PRODUCTS.filter(p => itemEstado(p)===bo.catEstado);
}

function renderBackofficeCatalogo(){
  const pendCount = PRODUCTS.filter(p=>itemEstado(p)==='pendiente').length;
  const pubCount = PRODUCTS.filter(p=>itemEstado(p)==='publicado').length;
  const list = catalogFiltered();

  const rows = list.map(p => {
    const pend = itemEstado(p)==='pendiente';
    return `
    <tr>
      <td><input type="checkbox" class="row-check" data-check="${p.id}" ${!pend?'disabled':''} ${bo.selectedIds.has(p.id)?'checked':''}></td>
      <td><div class="item-cell"><div class="thumb-cell">${p.imagen? `<img src="${p.imagen}" alt="">` : ic(p.cat==='neumatico'?'tire':'drop',15)}</div><div><b>${p.marca}${p.destacado?` ${ic('star',11)}`:''}</b><div class="hint">${p.modelo}</div></div></div></td>
      <td>${p.cat==='neumatico'?'Neumático':'Lubricante'}</td>
      <td>${p.proveedor? `${p.proveedor}${p.proveedorEmail? `<div class="hint">${p.proveedorEmail}</div>`:''}` : `<span class="hint">Sin definir</span>`}</td>
      <td>${p.cat==='neumatico' ? p.medida+' · '+p.posicion : p.presentacion+' · '+p.viscosidad+' · '+p.tipo}</td>
      <td class="cell-num">${Number(p.descuento)>0
        ? `<span class="price-old mono" style="font-size:11.5px">${money(p.precio)}</span><br><b class="mono">${money(finalPrice(p))}</b> <span class="pill pill-danger" style="padding:1px 6px;font-size:10px">-${p.descuento}%</span>`
        : money(p.precio)}</td>
      <td class="cell-num">${p.stock}</td>
      <td>${pend?`<span class="pill pill-warn">${ic('info',11)} Pendiente</span>`:`<span class="pill pill-ok">${ic('check',11)} Publicado</span>`}</td>
      <td><div class="row-actions">
        <button class="icon-mini" data-edit="${p.id}" title="Editar">${ic('edit',13)}</button>
        ${pend? `<button class="icon-mini" data-publish="${p.id}" title="Confirmar y publicar">${ic('check',13)}</button>` : ''}
        <button class="icon-mini danger" data-del="${p.id}" title="${pend?'Rechazar (elimina el ítem)':'Eliminar'}">${ic('trash',13)}</button>
      </div></td>
    </tr>`;
  }).join('');

  return `
    <div class="toolbar-row">
      <div>
        <h3 style="font-size:15.5px;font-weight:700">${PRODUCTS.length} ítem${PRODUCTS.length===1?'':'s'} en el catálogo</h3>
        <p class="hint">Marca, modelo, proveedor, especificaciones, precio y stock de cada producto.</p>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn" id="openBulkUpload">${ic('box',14)} Carga masiva</button>
        <button class="btn btn-accent" id="openNewItem">${ic('plus',15)} Agregar nuevo ítem</button>
      </div>
    </div>
    <div class="toolbar-row" style="margin-bottom:14px">
      <div class="seg">
        <button class="${bo.catEstado==='todos'?'active':''}" data-catestado="todos">Todos (${PRODUCTS.length})</button>
        <button class="${bo.catEstado==='pendiente'?'active':''}" data-catestado="pendiente">Pendientes de validación (${pendCount})</button>
        <button class="${bo.catEstado==='publicado'?'active':''}" data-catestado="publicado">Publicados (${pubCount})</button>
      </div>
      ${bo.selectedIds.size ? `
      <div style="display:flex;align-items:center;gap:10px">
        <span class="hint">${bo.selectedIds.size} seleccionado${bo.selectedIds.size===1?'':'s'}</span>
        <button class="btn btn-accent btn-sm" id="publishSelected">${ic('check',13)} Publicar seleccionados</button>
      </div>` : ''}
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th></th><th>Ítem</th><th>Categoría</th><th>Proveedor</th><th>Especificaciones</th><th>Precio</th><th>Stock</th><th>Publicación</th><th>Acciones</th></tr></thead>
        <tbody>${list.length? rows : `<tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:34px">${PRODUCTS.length? 'Ningún ítem calza con este filtro.' : 'Aún no hay ítems. Usa "Agregar nuevo ítem" para cargar el primero.'}</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

/* ---- Modal: formulario de producto (alta / edición) ---- */
function productFormHTML(){
  const isTire = draft.cat==='neumatico';
  return `
    <div class="modal-head" style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
      <div>
        <h3 style="font-size:18px">${draft.id? 'Editar ítem' : 'Nuevo ítem de catálogo'}</h3>
        <p class="hint" style="margin-top:4px">Define marca, modelo, especificaciones técnicas y precio de venta.</p>
      </div>
      <button class="icon-btn" id="closeProductModal" aria-label="Cerrar">${ic('x',15)}</button>
    </div>
    <div class="modal-body">
      <div class="seg">
        <button class="${isTire?'active':''}" data-setcat="neumatico">Neumático</button>
        <button class="${!isTire?'active':''}" data-setcat="lubricante">Lubricante</button>
      </div>
      <div class="field-row">
        <div class="field"><label>Marca</label><input id="dMarca" value="${draft.marca}" placeholder="Ej: Bridgestone"></div>
        <div class="field"><label>Modelo</label><input id="dModelo" value="${draft.modelo}" placeholder="Ej: R269"></div>
      </div>
      <div class="field">
        <label>Proveedor</label>
        <select id="dProveedorId">
          <option value="">— Selecciona un proveedor —</option>
          ${PROVIDERS.map(pr=>`<option value="${pr.id}" ${draft.proveedorId===pr.id?'selected':''}>${pr.nombre}</option>`).join('')}
        </select>
        <p class="hint" style="margin-top:2px">
          ${draft.proveedorEmail? `Correo de pedidos: ${draft.proveedorEmail}` : '¿No está en la lista? Créalo en Backoffice → Proveedores.'}
        </p>
      </div>
      <div class="field">
        <label>Foto del ítem</label>
        <div class="photo-field">
          <div class="photo-preview" id="photoPreview">${draft.imagen? `<img src="${draft.imagen}" alt="">` : ic(isTire?'tire':'drop', 24)}</div>
          <div class="photo-actions">
            <label class="file-btn">${ic('box',13)} <span>${draft.imagen? 'Cambiar foto' : 'Subir foto'}</span><input type="file" id="dFoto" accept="image/*"></label>
            ${draft.imagen? `<button class="btn btn-ghost btn-sm" id="removeFoto" style="width:fit-content">Quitar foto</button>` : `<span class="hint">JPG o PNG. Se optimiza automáticamente.</span>`}
          </div>
        </div>
      </div>
      <div class="field">
        <label>Logo de marca (opcional)</label>
        <div class="photo-field">
          <div class="photo-preview" id="logoPreview" style="width:96px;height:52px;border-radius:7px">${draft.marcaLogo? `<img src="${draft.marcaLogo}" alt="" style="width:100%;height:100%;object-fit:contain;padding:4px">` : ic('tag', 20)}</div>
          <div class="photo-actions">
            <label class="file-btn">${ic('box',13)} <span>${draft.marcaLogo? 'Cambiar logo' : 'Subir logo'}</span><input type="file" id="dMarcaLogo" accept="image/*"></label>
            ${draft.marcaLogo? `<button class="btn btn-ghost btn-sm" id="removeMarcaLogo" style="width:fit-content">Quitar logo</button>` : `<span class="hint">Se muestra junto al nombre de la marca en la tarjeta.</span>`}
          </div>
        </div>
      </div>
      ${isTire ? `
        <div class="field-row">
          <div class="field"><label>Medida</label><input id="dMedida" value="${draft.medida||''}" placeholder="295/80R22.5"></div>
          <div class="field"><label>Posición recomendada</label>
            <select id="dPosicion">
              ${['Dirección','Tracción','Dirección / Tracción','Libre / Puente de apoyo'].map(o=>`<option ${draft.posicion===o?'selected':''}>${o}</option>`).join('')}
            </select>
          </div>
        </div>` : `
        <div class="field-row">
          <div class="field"><label>Presentación</label><input id="dPresentacion" value="${draft.presentacion||''}" placeholder="20 L"></div>
          <div class="field"><label>Viscosidad</label><input id="dViscosidad" value="${draft.viscosidad||''}" placeholder="15W40"></div>
        </div>
        <div class="field"><label>Tipo</label>
          <select id="dTipo">${['Mineral','Semisintético','Sintético'].map(o=>`<option ${draft.tipo===o?'selected':''}>${o}</option>`).join('')}</select>
        </div>`}
      <div class="field">
        <label>Descripción (línea de detalle para el proveedor)</label>
        <input id="dDescripcion" value="${draft.descripcion||''}" placeholder="Ej: 295/80R22.5 152/149L R269 Bridgestone 16PR Dir-On BLK JPN">
        <p class="hint" style="margin-top:2px">Línea corta de trackeo: medida, índice de carga/velocidad, código de modelo, marca, capas, posición, color, origen. Es lo que se le envía al proveedor en el detalle del pedido (no el precio).</p>
      </div>
      <div class="field">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
          <label style="margin:0">Especificaciones técnicas (opcional)</label>
          <button type="button" class="btn btn-ghost btn-sm" id="addSpecRow">${ic('plus',12)} Agregar fila</button>
        </div>
        <div id="specRows" style="display:flex;flex-direction:column;gap:6px;margin-top:8px">
          ${(draft.especificaciones||[]).map((s,i)=>`
            <div class="spec-row" data-idx="${i}">
              <input class="spec-label" value="${s.label}" placeholder="Ej: Diseño">
              <input class="spec-value" value="${s.value}" placeholder="Ej: TR601H">
              <button type="button" class="icon-mini danger" data-del-spec="${i}" title="Quitar">${ic('trash',13)}</button>
            </div>
          `).join('')}
        </div>
        <p class="hint" style="margin-top:6px">Se muestran en un popup al hacer clic en "Ver especificaciones" dentro de Inventario.</p>
      </div>
      <div class="field-row">
        <div class="field"><label>Precio de venta (CLP)</label><input id="dPrecio" type="number" value="${draft.precio}" placeholder="320288"></div>
        <div class="field"><label>Stock disponible</label><input id="dStock" type="number" value="${draft.stock}" placeholder="12"></div>
      </div>
      <div class="field-row">
        <div class="field">
          <label>Descuento (opcional)</label>
          <input id="dDescuento" type="number" min="0" max="95" value="${draft.descuento||''}" placeholder="Ej: 20">
        </div>
        <div class="field">
          <label>Precio con descuento</label>
          <input id="dPrecioFinal" value="${draft.precio && draft.descuento ? money(Math.round(draft.precio*(1-draft.descuento/100))) : '—'}" disabled style="opacity:.7">
        </div>
      </div>
      <div class="field"><label>Etiqueta destacada (opcional)</label><input id="dReco" value="${draft.reco||''}" placeholder="Ej: Recomendado dirección"></div>
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:500;">
        <input type="checkbox" id="dDestacado" ${draft.destacado?'checked':''}> Mostrar como destacado en el inventario
      </label>
      <p class="hint" style="margin:0">${ic('info',12)} ${draft.id? 'Al guardar, este ítem queda Pendiente de validación y se retira de Inventario hasta que lo confirmes de nuevo en el catálogo.' : 'El ítem se crea como Pendiente de validación — no aparece en Inventario hasta que lo confirmes desde el catálogo.'}</p>
      <div class="modal-actions" style="margin-top:2px">
        <button class="btn btn-ghost" id="cancelEdit">Cancelar</button>
        <button class="btn btn-accent" id="saveDraft">${draft.id? 'Guardar cambios' : 'Agregar al catálogo'}</button>
      </div>
    </div>
  `;
}

function refreshProductModal(){
  document.getElementById('modalCard').innerHTML = productFormHTML();
  wireProductForm();
}

function syncSpecsFromDOM(){
  const rows = document.querySelectorAll('#specRows .spec-row');
  draft.especificaciones = [...rows].map(row => ({
    label: row.querySelector('.spec-label').value,
    value: row.querySelector('.spec-value').value,
  }));
}

function wireProductForm(){
  document.querySelectorAll('[data-setcat]').forEach(b=>b.addEventListener('click', ()=>{
    if(!draft.id) draft = emptyDraft(b.getAttribute('data-setcat'));
    refreshProductModal();
  }));
  const proveedorSelect = document.getElementById('dProveedorId');
  if(proveedorSelect) proveedorSelect.addEventListener('change', () => {
    const pr = PROVIDERS.find(p=>p.id===proveedorSelect.value);
    draft.proveedorId = proveedorSelect.value;
    draft.proveedor = pr? pr.nombre : '';
    draft.proveedorEmail = pr? pr.email : '';
    refreshProductModal();
  });
  const addSpec = document.getElementById('addSpecRow');
  if(addSpec) addSpec.addEventListener('click', () => {
    syncSpecsFromDOM();
    draft.especificaciones.push({label:'', value:''});
    refreshProductModal();
  });
  document.querySelectorAll('[data-del-spec]').forEach(b=>b.addEventListener('click', () => {
    syncSpecsFromDOM();
    draft.especificaciones.splice(parseInt(b.getAttribute('data-del-spec')), 1);
    refreshProductModal();
  }));
  const save = document.getElementById('saveDraft');
  if(save) save.addEventListener('click', () => {
    const marca = document.getElementById('dMarca').value.trim();
    const modelo = document.getElementById('dModelo').value.trim();
    const precio = parseFloat(document.getElementById('dPrecio').value)||0;
    const stock = parseInt(document.getElementById('dStock').value)||0;
    const descuento = Math.min(95, Math.max(0, parseFloat(document.getElementById('dDescuento').value)||0));
    if(!marca || !modelo || !precio){ alert('Completa al menos marca, modelo y precio.'); return; }
    const isTire = draft.cat==='neumatico';
    const proveedorId = document.getElementById('dProveedorId').value;
    const proveedorSel = PROVIDERS.find(pr=>pr.id===proveedorId);
    syncSpecsFromDOM();
    const payload = {
      id: draft.id || ('p'+Date.now()),
      // Toda alta o edición vuelve a quedar Pendiente de validación — incluso si el
      // ítem ya estaba Publicado, guardar cambios lo baja de Inventario hasta
      // que alguien lo confirme de nuevo desde el catálogo.
      estado: 'pendiente',
      cat: draft.cat, marca, modelo, precio, descuento, stock,
      proveedorId: proveedorId || '',
      proveedor: proveedorSel? proveedorSel.nombre : '',
      proveedorEmail: proveedorSel? proveedorSel.email : '',
      descripcion: document.getElementById('dDescripcion').value.trim(),
      especificaciones: draft.especificaciones.filter(s=>s.label.trim() || s.value.trim()),
      destacado: document.getElementById('dDestacado').checked,
      reco: document.getElementById('dReco').value.trim(),
      imagen: draft.imagen || '',
      marcaLogo: draft.marcaLogo || '',
    };
    if(isTire){ payload.medida = document.getElementById('dMedida').value.trim(); payload.posicion = document.getElementById('dPosicion').value; }
    else { payload.presentacion = document.getElementById('dPresentacion').value.trim(); payload.viscosidad = document.getElementById('dViscosidad').value.trim(); payload.tipo = document.getElementById('dTipo').value; }

    if(draft.id){
      const prev = draft._prevSnapshot || PRODUCTS.find(p=>p.id===draft.id);
      PRODUCTS = PRODUCTS.map(p=>p.id===draft.id? payload : p);
      const cambios = diffFields(prev, payload, ITEM_DIFF_FIELDS);
      logHistory({ entidad:'item', entidadId:payload.id, accion:'editar', resumen:`Editó "${payload.marca} ${payload.modelo}"`, cambios });
    } else {
      PRODUCTS.push(payload);
      logHistory({ entidad:'item', entidadId:payload.id, accion:'crear', resumen:`Creó "${payload.marca} ${payload.modelo}" (Pendiente de validación)` });
    }
    saveProducts();
    draft = emptyDraft(draft.cat);
    closeModal();
    renderContentOnly();
  });
  const updatePricePreview = () => {
    const precioVal = parseFloat(document.getElementById('dPrecio').value)||0;
    const descVal = parseFloat(document.getElementById('dDescuento').value)||0;
    const out = document.getElementById('dPrecioFinal');
    if(out) out.value = (precioVal && descVal>0) ? money(Math.round(precioVal*(1-descVal/100))) : '—';
  };
  const dPrecioEl = document.getElementById('dPrecio');
  const dDescuentoEl = document.getElementById('dDescuento');
  if(dPrecioEl) dPrecioEl.addEventListener('input', updatePricePreview);
  if(dDescuentoEl) dDescuentoEl.addEventListener('input', updatePricePreview);
  const foto = document.getElementById('dFoto');
  if(foto) foto.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    readAndResizeImage(file, (dataUrl) => { draft.imagen = dataUrl; refreshProductModal(); });
  });
  const removeFoto = document.getElementById('removeFoto');
  if(removeFoto) removeFoto.addEventListener('click', () => { draft.imagen = ''; refreshProductModal(); });
  const logo = document.getElementById('dMarcaLogo');
  if(logo) logo.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;
    readAndResizeLogo(file, (dataUrl) => { draft.marcaLogo = dataUrl; refreshProductModal(); });
  });
  const removeLogo = document.getElementById('removeMarcaLogo');
  if(removeLogo) removeLogo.addEventListener('click', () => { draft.marcaLogo = ''; refreshProductModal(); });
  const cancel = document.getElementById('cancelEdit');
  if(cancel) cancel.addEventListener('click', closeModal);
  const closeBtn = document.getElementById('closeProductModal');
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
}

function openProductModal(existing, prevSnapshot){
  draft = existing ? JSON.parse(JSON.stringify(existing)) : emptyDraft(draft.cat || 'neumatico');
  // Si venimos de despublicar un ítem para editarlo, guardamos cómo estaba ANTES de
  // eso, para que el historial muestre el cambio real (incluye "Publicado → Pendiente").
  draft._prevSnapshot = prevSnapshot || null;
  openModal(productFormHTML(), true);
  wireProductForm();
}

const ESTADO_LABELS = {
  'esperando-aprobacion': 'Esperando aprobación',
  'pendiente': 'Pendiente',
  'confirmada': 'Confirmada',
  'rechazada': 'Rechazada',
};

function filteredRequests(){
  let list = REQUESTS.slice();
  if(solFilters.fechaDesde){
    const d = new Date(solFilters.fechaDesde+'T00:00:00');
    list = list.filter(r => new Date(r.fecha) >= d);
  }
  if(solFilters.fechaHasta){
    const d = new Date(solFilters.fechaHasta+'T23:59:59');
    list = list.filter(r => new Date(r.fecha) <= d);
  }
  if(solFilters.cliente.trim()){
    const q = solFilters.cliente.trim().toLowerCase();
    list = list.filter(r => [r.cliente.nombre, r.cliente.rut, r.cliente.empresa].some(v => (v||'').toLowerCase().includes(q)));
  }
  if(solFilters.proveedorEmail){
    list = list.filter(r => r.items.some(i => i.proveedorEmail === solFilters.proveedorEmail));
  }
  return list;
}

/* Genera y ofrece para descargar un Excel con las solicitudes actualmente filtradas. */
async function exportSolicitudesXLSX(){
  if(typeof XLSX === 'undefined'){ alert('No se pudo cargar el lector de Excel (sin conexión). Recarga la página e intenta de nuevo.'); return; }
  const list = filteredRequests();
  const headers = ['Folio','Fecha','Cliente','RUT','Empresa','Correo','Teléfono','Dirección','Comuna','Ítems','Proveedores','Total','Estado'];
  const rows = list.map(r => [
    r.folio,
    new Date(r.fecha).toLocaleString('es-CL'),
    r.cliente.nombre, r.cliente.rut||'', r.cliente.empresa||'',
    r.cliente.correo||'', r.cliente.telefono||'',
    r.cliente.direccion||'', r.cliente.comuna||'',
    r.items.map(i=>`${i.cantidad}x ${i.marca} ${i.modelo}`).join('; '),
    [...new Set(r.items.map(i=>i.proveedor).filter(Boolean))].join('; '),
    r.total,
    ESTADO_LABELS[r.estado] || r.estado,
  ]);
  const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  ws['!cols'] = headers.map(h => ({ wch: Math.max(12, h.length + 4) }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Solicitudes');
  const arrayBuf = XLSX.write(wb, {bookType:'xlsx', type:'array'});
  const blob = new Blob([arrayBuf], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  const fecha = new Date().toISOString().slice(0,10);
  await offerFileDownload(`reporte_solicitudes_${fecha}.xlsx`, blob, 'No se pudo descargar el reporte automáticamente.');
}

function renderBackofficeSolicitudes(){
  const est = e => e==='confirmada' ? `<span class="pill pill-ok">${ic('check',11)} Confirmada</span>`
    : e==='rechazada' ? `<span class="pill pill-danger">${ic('x',11)} Rechazada</span>`
    : e==='esperando-aprobacion' ? `<span class="pill pill-warn">${ic('mail',11)} Esperando aprobación</span>`
    : `<span class="pill pill-warn">${ic('info',11)} Pendiente</span>`;

  const list = filteredRequests();
  const esperando = list.filter(r=>r.estado==='esperando-aprobacion').length;
  const pend = list.filter(r=>r.estado==='pendiente').length;
  const conf = list.filter(r=>r.estado==='confirmada').length;
  const totalMonto = list.reduce((s,r)=>s+r.total,0);
  const hayFiltros = solFilters.fechaDesde || solFilters.fechaHasta || solFilters.cliente.trim() || solFilters.proveedorEmail;

  const rows = list.map(r => `
    <tr data-open="${r.folio}" style="cursor:pointer">
      <td class="cell-num">${r.folio}</td>
      <td>${new Date(r.fecha).toLocaleDateString('es-CL')}</td>
      <td><b>${r.cliente.nombre}</b><div class="hint">${r.cliente.empresa||'—'}</div></td>
      <td class="cell-num">${r.items.reduce((s,i)=>s+i.cantidad,0)} ítems</td>
      <td class="cell-num">${money(r.total)}</td>
      <td>${est(r.estado)}</td>
    </tr>
    ${bo.selectedReq===r.folio ? `
    <tr><td colspan="6" style="padding:0;border-bottom:1px solid var(--border)">
      <div class="detail-panel show">
        <div class="detail-grid">
          <div>
            <div class="g-label">Comprador</div>
            <div>${r.cliente.nombre} · ${r.cliente.rut||'—'}</div>
            <div class="hint">${r.cliente.correo||''}${r.cliente.telefono? ' · '+r.cliente.telefono : ''}</div>
            ${r.cliente.bus? `<div class="hint">Unidad: ${r.cliente.bus}</div>` : ''}
            <div class="g-label" style="margin-top:10px">Despacho</div>
            <div>${r.cliente.direccion||'—'}${r.cliente.comuna? ', '+r.cliente.comuna : ''}</div>
            ${r.cliente.referencia? `<div class="hint">${r.cliente.referencia}</div>` : ''}
            <div class="hint">Responsable: ${r.cliente.respNombre? r.cliente.respNombre+(r.cliente.respTelefono? ' · '+r.cliente.respTelefono:'') : r.cliente.nombre+' (comprador)'}</div>
            ${r.cliente.comentario ? `<div class="g-label" style="margin-top:10px">Comentario</div><div>${r.cliente.comentario}</div>` : ''}
          </div>
          <div>
            <div class="g-label">Ítems solicitados</div>
            <div class="summary-list">${r.items.map(i=>`<div class="row"><span>${i.cantidad} × ${i.marca} ${i.modelo}</span><b class="mono">${money(i.precio*i.cantidad)}</b></div>`).join('')}</div>
            <div class="g-label" style="margin-top:10px">Correos enviados</div>
            <div class="summary-list">${EMAILS.filter(e=>e.folio===r.folio).map(e=>`<div class="row"><span>${e.tipo==='cliente'?'Comprador':'Proveedor'} · ${e.to}</span></div>`).join('') || `<div class="row"><span class="hint">Sin registros</span></div>`}</div>
          </div>
        </div>
        <div class="modal-actions">
          ${r.estado==='esperando-aprobacion' ? `
            <span class="hint" style="flex:1">Esperando que el cliente apruebe la compra desde el enlace de su correo.</span>
            <button class="btn btn-accent" data-approve="${r.folio}">${ic('link',14)} Simular aprobación del cliente</button>
          ` : `
            ${r.estado!=='rechazada' ? `<button class="btn btn-ghost" data-reject="${r.folio}">Rechazar</button>` : ''}
            ${r.estado!=='confirmada' ? `<button class="btn btn-accent" data-confirm="${r.folio}">Confirmar y aplicar descuento</button>` : `<span class="hint">Se descuenta en la próxima recaudación del cliente.</span>`}
          `}
        </div>
      </div>
    </td></tr>` : ''}
  `).join('');

  return `
    <div class="toolbar">
      <div class="search">${ic('search',15)}<input id="solFiltroCliente" placeholder="Buscar por cliente, RUT o empresa..." value="${solFilters.cliente}"></div>
      <input type="date" id="solFiltroDesde" value="${solFilters.fechaDesde}" title="Desde">
      <input type="date" id="solFiltroHasta" value="${solFilters.fechaHasta}" title="Hasta">
      <select id="solFiltroProveedor">
        <option value="">Todos los proveedores</option>
        ${PROVIDERS.map(pr=>`<option value="${pr.email}" ${solFilters.proveedorEmail===pr.email?'selected':''}>${pr.nombre}</option>`).join('')}
      </select>
      ${hayFiltros? `<button class="btn btn-ghost btn-sm" id="clearSolFiltros">${ic('x',13)} Limpiar</button>` : ''}
      <button class="btn btn-accent" id="exportSolicitudes" style="margin-left:auto">${ic('box',14)} Exportar reporte</button>
    </div>
    <div class="stat-row">
      <div class="stat"><div class="k">Esperando aprobación</div><div class="v">${esperando}</div></div>
      <div class="stat"><div class="k">Pendientes</div><div class="v">${pend}</div></div>
      <div class="stat"><div class="k">Confirmadas</div><div class="v">${conf}</div></div>
      <div class="stat"><div class="k">Monto total ${hayFiltros?'filtrado':'solicitado'}</div><div class="v" style="font-size:19px">${money(totalMonto)}</div></div>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Folio</th><th>Fecha</th><th>Cliente</th><th>Ítems</th><th>Total</th><th>Estado</th></tr></thead>
        <tbody>${list.length? rows : `<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:34px">${REQUESTS.length? 'Ninguna solicitud calza con los filtros aplicados.' : 'Aún no hay solicitudes generadas desde Inventario.'}</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

/* Muestra, dentro del detalle de un correo de aprobación, el botón que simula el clic
   del cliente en el enlace — o un aviso si ese folio ya fue aprobado o rechazado. */
function renderApprovalAction(email){
  if(email.accion!=='aprobar') return '';
  const req = REQUESTS.find(r=>r.folio===email.folio);
  if(!req) return '';
  if(req.estado==='esperando-aprobacion'){
    return `<div class="modal-actions" style="margin-top:12px;justify-content:flex-start">
      <button class="btn btn-accent" data-approve-email="${email.folio}">${ic('link',14)} Simular clic en "Aprobar compra"</button>
    </div>`;
  }
  return `<p class="hint" style="margin-top:12px">Esta compra ya fue aprobada — el correo al proveedor se envió al momento de aprobarla.</p>`;
}

function renderBackofficeCorreos(){
  const tipoPill = t => t==='cliente'
    ? `<span class="pill pill-ok">${ic('user',11)} Comprador</span>`
    : `<span class="pill pill-warn">${ic('box',11)} Proveedor</span>`;

  const rows = EMAILS.map(e => `
    <tr data-open-email="${e.id}" style="cursor:pointer">
      <td class="cell-num">${e.folio}</td>
      <td>${new Date(e.fecha).toLocaleString('es-CL')}</td>
      <td>${tipoPill(e.tipo)}</td>
      <td>${e.to}${e.cc? `<div class="hint">Cc: ${e.cc}</div>` : ''}</td>
      <td>${e.asunto}</td>
    </tr>
    ${bo.selectedEmail===e.id ? `
    <tr><td colspan="5" style="padding:0;border-bottom:1px solid var(--border)">
      <div class="detail-panel show">
        ${e.cc? `<div class="g-label">Con copia a</div><div style="margin-bottom:10px">${e.cc}</div>` : ''}
        <div class="g-label">Cuerpo del correo (simulado)</div>
        <pre style="white-space:pre-wrap;font-family:var(--font-mono);font-size:12.5px;margin:8px 0 0;line-height:1.6">${e.cuerpo}</pre>
        ${renderApprovalAction(e)}
      </div>
    </td></tr>` : ''}
  `).join('');

  return `
    <div class="proto-banner">
      ${ic('info',17)}
      <div>Estos correos <b>no se envían de verdad</b>: quedan registrados aquí para mostrar exactamente qué debería salir (destinatario, asunto y cuerpo) cuando el backend real integre un servicio de email al confirmar una compra.</div>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Folio</th><th>Fecha</th><th>Destinatario</th><th>Correo</th><th>Asunto</th></tr></thead>
        <tbody>${EMAILS.length? rows : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:34px">Aún no se ha simulado ningún envío. Se generan al confirmar una compra desde Inventario.</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

/* ---- Historial de cambios (bitácora de todo lo que se modifica en Backoffice) ---- */
function filteredHistory(){
  let list = HISTORY.slice();
  if(histFilters.entidad!=='todas') list = list.filter(h => h.entidad===histFilters.entidad);
  if(histFilters.actor) list = list.filter(h => h.actor===histFilters.actor);
  if(histFilters.fechaDesde){
    const d = new Date(histFilters.fechaDesde+'T00:00:00');
    list = list.filter(h => new Date(h.fecha) >= d);
  }
  if(histFilters.fechaHasta){
    const d = new Date(histFilters.fechaHasta+'T23:59:59');
    list = list.filter(h => new Date(h.fecha) <= d);
  }
  if(histFilters.q.trim()){
    const q = histFilters.q.trim().toLowerCase();
    list = list.filter(h => h.resumen.toLowerCase().includes(q) || h.actor.toLowerCase().includes(q) || (h.entidadId||'').toLowerCase().includes(q));
  }
  return list;
}

function renderBackofficeHistorial(){
  const accionPill = accion => {
    if(accion==='crear') return `<span class="pill pill-ok">${ic('plus',11)} Creó</span>`;
    if(accion==='editar') return `<span class="pill pill-warn">${ic('edit',11)} Editó</span>`;
    if(accion==='publicar') return `<span class="pill pill-ok">${ic('check',11)} Publicó</span>`;
    if(accion==='confirmar') return `<span class="pill pill-ok">${ic('check',11)} Confirmó</span>`;
    if(accion==='rechazar') return `<span class="pill pill-danger">${ic('x',11)} Rechazó</span>`;
    if(accion==='eliminar') return `<span class="pill pill-danger">${ic('trash',11)} Eliminó</span>`;
    if(accion==='aprobacion-cliente') return `<span class="pill pill-neutral">${ic('link',11)} Aprobación cliente</span>`;
    return `<span class="pill pill-neutral">${accion}</span>`;
  };

  const list = filteredHistory();
  const actors = [...new Set(HISTORY.map(h=>h.actor))].sort();
  const hayFiltros = histFilters.entidad!=='todas' || histFilters.actor || histFilters.fechaDesde || histFilters.fechaHasta || histFilters.q.trim();

  const rows = list.map(h => `
    <tr data-hist-open="${h.id}" style="cursor:pointer">
      <td>${new Date(h.fecha).toLocaleString('es-CL')}</td>
      <td><b>${h.actor}</b></td>
      <td><span class="pill pill-neutral">${HIST_ENTIDAD_LABELS[h.entidad]||h.entidad}</span></td>
      <td>${accionPill(h.accion)}</td>
      <td>${h.resumen}</td>
    </tr>
    ${histSelected===h.id && h.cambios ? `
    <tr><td colspan="5" style="padding:0;border-bottom:1px solid var(--border)">
      <div class="detail-panel show">
        <div class="g-label">Qué cambió</div>
        <table class="specs-table" style="margin-top:8px">
          <thead><tr><th style="padding:6px 14px;font-size:11.5px;color:var(--text-muted);text-transform:uppercase">Campo</th><th style="padding:6px 14px;font-size:11.5px;color:var(--text-muted);text-transform:uppercase">Antes</th><th style="padding:6px 14px;font-size:11.5px;color:var(--text-muted);text-transform:uppercase">Después</th></tr></thead>
          <tbody>${h.cambios.map(c=>`<tr><td><b>${c.campo}</b></td><td class="hint">${c.antes}</td><td>${c.despues}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </td></tr>` : ''}
  `).join('');

  return `
    <div class="proto-banner">
      ${ic('info',17)}
      <div>Bitácora de todo lo que se crea, edita, publica, confirma o elimina desde Backoffice. Cada acción queda asociada al nombre escrito arriba en "Sesión de Backoffice" — en la versión real vendría del sistema de autenticación del dashboard.</div>
    </div>
    <div class="toolbar">
      <div class="search">${ic('search',15)}<input id="histFiltroQ" placeholder="Buscar por resumen, autor o folio/ID..." value="${histFilters.q}"></div>
      <select id="histFiltroEntidad">
        <option value="todas" ${histFilters.entidad==='todas'?'selected':''}>Todo tipo de registro</option>
        <option value="item" ${histFilters.entidad==='item'?'selected':''}>Catálogo</option>
        <option value="proveedor" ${histFilters.entidad==='proveedor'?'selected':''}>Proveedores</option>
        <option value="solicitud" ${histFilters.entidad==='solicitud'?'selected':''}>Solicitudes</option>
      </select>
      <select id="histFiltroActor">
        <option value="">Todos los usuarios</option>
        ${actors.map(a=>`<option value="${a}" ${histFilters.actor===a?'selected':''}>${a}</option>`).join('')}
      </select>
      <input type="date" id="histFiltroDesde" value="${histFilters.fechaDesde}" title="Desde">
      <input type="date" id="histFiltroHasta" value="${histFilters.fechaHasta}" title="Hasta">
      ${hayFiltros? `<button class="btn btn-ghost btn-sm" id="clearHistFiltros">${ic('x',13)} Limpiar</button>` : ''}
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Fecha</th><th>Usuario</th><th>Registro</th><th>Acción</th><th>Detalle</th></tr></thead>
        <tbody>${list.length? rows : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:34px">${HISTORY.length? 'Ningún evento calza con estos filtros.' : 'Aún no hay movimientos registrados. Se generan al crear, editar, publicar o eliminar algo en Backoffice.'}</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

/* ---- Proveedores ---- */
function renderBackofficeProveedores(){
  const rows = PROVIDERS.map(pr => {
    const count = PRODUCTS.filter(p=>p.proveedorId===pr.id).length;
    return `
    <tr>
      <td><b>${pr.nombre}</b></td>
      <td>${pr.email}</td>
      <td>${pr.telefono || '<span class="hint">—</span>'}</td>
      <td class="cell-num">${count}</td>
      <td><div class="row-actions">
        <button class="icon-mini" data-edit-provider="${pr.id}" title="Editar">${ic('edit',13)}</button>
        <button class="icon-mini danger" data-del-provider="${pr.id}" title="Eliminar">${ic('trash',13)}</button>
      </div></td>
    </tr>`;
  }).join('');

  return `
    <div class="proto-banner">
      ${ic('info',17)}
      <div>Registra aquí cada proveedor una sola vez; al cargar un ítem del catálogo solo tienes que seleccionarlo de la lista y su correo de pedidos se completa automáticamente.</div>
    </div>
    <div class="toolbar-row">
      <div>
        <h3 style="font-size:15.5px;font-weight:700">${PROVIDERS.length} proveedor${PROVIDERS.length===1?'':'es'} registrado${PROVIDERS.length===1?'':'s'}</h3>
        <p class="hint">Nombre, correo de pedidos y cuántos ítems del catálogo lo usan.</p>
      </div>
      <button class="btn btn-accent" id="openNewProvider">${ic('plus',15)} Agregar proveedor</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Nombre</th><th>Correo de pedidos</th><th>Teléfono</th><th>Ítems</th><th>Acciones</th></tr></thead>
        <tbody>${PROVIDERS.length? rows : `<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:34px">Aún no hay proveedores. Usa "Agregar proveedor" para cargar el primero.</td></tr>`}</tbody>
      </table>
    </div>
  `;
}

function providerFormHTML(){
  return `
    <div class="modal-head" style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
      <div>
        <h3 style="font-size:18px">${providerDraft.id? 'Editar proveedor' : 'Nuevo proveedor'}</h3>
        <p class="hint" style="margin-top:4px">Quedará disponible para seleccionar desde el formulario de cada ítem.</p>
      </div>
      <button class="icon-btn" id="closeProviderModal" aria-label="Cerrar">${ic('x',15)}</button>
    </div>
    <div class="modal-body">
      <div class="field"><label>Nombre del proveedor</label><input id="pvNombre" value="${providerDraft.nombre}" placeholder="Ej: Bridgestone Chile S.A."></div>
      <div class="field-row">
        <div class="field"><label>Correo de pedidos</label><input id="pvEmail" type="email" value="${providerDraft.email}" placeholder="pedidos@proveedor.cl"></div>
        <div class="field"><label>Teléfono (opcional)</label><input id="pvTelefono" value="${providerDraft.telefono||''}" placeholder="+56 9 ..."></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-ghost" id="cancelProvider">Cancelar</button>
        <button class="btn btn-accent" id="saveProvider">${providerDraft.id? 'Guardar cambios' : 'Agregar proveedor'}</button>
      </div>
    </div>
  `;
}

function wireProviderForm(){
  const save = document.getElementById('saveProvider');
  if(save) save.addEventListener('click', () => {
    const nombre = document.getElementById('pvNombre').value.trim();
    const email = document.getElementById('pvEmail').value.trim();
    const telefono = document.getElementById('pvTelefono').value.trim();
    if(!nombre || !email){ alert('Completa al menos nombre y correo del proveedor.'); return; }
    const payload = { id: providerDraft.id || ('prov'+Date.now()), nombre, email, telefono };
    if(providerDraft.id){
      const prev = PROVIDERS.find(pr=>pr.id===providerDraft.id);
      PROVIDERS = PROVIDERS.map(pr=>pr.id===providerDraft.id? payload : pr);
      // Refleja el cambio en los ítems que ya tenían este proveedor seleccionado.
      PRODUCTS = PRODUCTS.map(p=>p.proveedorId===payload.id? {...p, proveedor:payload.nombre, proveedorEmail:payload.email} : p);
      saveProducts();
      const cambios = diffFields(prev, payload, PROVIDER_DIFF_FIELDS);
      logHistory({ entidad:'proveedor', entidadId:payload.id, accion:'editar', resumen:`Editó el proveedor "${payload.nombre}"`, cambios });
    } else {
      PROVIDERS.push(payload);
      logHistory({ entidad:'proveedor', entidadId:payload.id, accion:'crear', resumen:`Creó el proveedor "${payload.nombre}"` });
    }
    saveProviders();
    providerDraft = emptyProviderDraft();
    closeModal();
    renderContentOnly();
  });
  const cancel = document.getElementById('cancelProvider');
  if(cancel) cancel.addEventListener('click', closeModal);
  const closeBtn = document.getElementById('closeProviderModal');
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
}

function openProviderModal(existing){
  providerDraft = existing ? {...existing} : emptyProviderDraft();
  openModal(providerFormHTML());
  wireProviderForm();
}

function renderBackoffice(){
  return `
    <div class="page-head">
      <div>
        <p class="eyebrow">Autopartes · Backoffice</p>
        <h1>Configuración de catálogo y solicitudes</h1>
        <p>Registra proveedores, carga marca, modelo, especificaciones y precio de cada ítem; confirma las solicitudes y revisa los correos que se habrían enviado a cliente y proveedor.</p>
      </div>
    </div>
    <div class="actor-bar">
      ${ic('user',14)}
      <span>Sesión de Backoffice:</span>
      <input id="actorInput" value="${backofficeActor}" placeholder="Escribe tu nombre para identificarte en el historial">
      <span class="hint">Se guarda en este navegador y queda como autor de tus acciones.</span>
    </div>
    <div class="tabs">
      <button class="tab ${bo.tab==='catalogo'?'active':''}" data-tab="catalogo">Catálogo${(()=>{ const n=PRODUCTS.filter(p=>itemEstado(p)==='pendiente').length; return n? ` (${n})` : ''; })()}</button>
      <button class="tab ${bo.tab==='proveedores'?'active':''}" data-tab="proveedores">Proveedores${PROVIDERS.length? ` (${PROVIDERS.length})`:''}</button>
      <button class="tab ${bo.tab==='solicitudes'?'active':''}" data-tab="solicitudes">Solicitudes${(()=>{ const n=REQUESTS.filter(r=>r.estado==='pendiente'||r.estado==='esperando-aprobacion').length; return n? ` (${n})` : ''; })()}</button>
      <button class="tab ${bo.tab==='correos'?'active':''}" data-tab="correos">Correos${EMAILS.length? ` (${EMAILS.length})`:''}</button>
      <button class="tab ${bo.tab==='historial'?'active':''}" data-tab="historial">Historial de cambios${HISTORY.length? ` (${HISTORY.length})`:''}</button>
    </div>
    <div id="boBody">${
      bo.tab==='catalogo' ? renderBackofficeCatalogo()
      : bo.tab==='proveedores' ? renderBackofficeProveedores()
      : bo.tab==='solicitudes' ? renderBackofficeSolicitudes()
      : bo.tab==='correos' ? renderBackofficeCorreos()
      : renderBackofficeHistorial()
    }</div>
  `;
}

function wireBackoffice(){
  document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click', ()=>{ bo.tab=b.getAttribute('data-tab'); bo.selectedReq=null; bo.selectedEmail=null; bo.selectedIds=new Set(); histSelected=null; renderContentOnly(); }));
  const actorInput = document.getElementById('actorInput');
  if(actorInput){
    actorInput.addEventListener('change', (e) => { backofficeActor = e.target.value; saveActor(); });
    actorInput.addEventListener('blur', (e) => { backofficeActor = e.target.value; saveActor(); });
  }

  if(bo.tab==='catalogo'){
    const openNew = document.getElementById('openNewItem');
    if(openNew) openNew.addEventListener('click', ()=> openProductModal(null));
    const openBulk = document.getElementById('openBulkUpload');
    if(openBulk) openBulk.addEventListener('click', openBulkModal);
    document.querySelectorAll('[data-catestado]').forEach(b=>b.addEventListener('click', ()=>{
      bo.catEstado = b.getAttribute('data-catestado');
      renderContentOnly();
    }));
    document.querySelectorAll('[data-check]').forEach(cb=>cb.addEventListener('change', (e)=>{
      const id = cb.getAttribute('data-check');
      if(e.target.checked) bo.selectedIds.add(id); else bo.selectedIds.delete(id);
      renderContentOnly();
    }));
    const publishSelected = document.getElementById('publishSelected');
    if(publishSelected) publishSelected.addEventListener('click', ()=>{
      const published = PRODUCTS.filter(p => bo.selectedIds.has(p.id));
      PRODUCTS = PRODUCTS.map(p => bo.selectedIds.has(p.id) ? {...p, estado:'publicado'} : p);
      saveProducts();
      published.forEach(p => logHistory({ entidad:'item', entidadId:p.id, accion:'publicar', resumen:`Publicó "${p.marca} ${p.modelo}" (lote de ${published.length})` }));
      bo.selectedIds = new Set();
      renderContentOnly();
    });
    document.querySelectorAll('[data-publish]').forEach(b=>b.addEventListener('click', ()=>{
      const id = b.getAttribute('data-publish');
      const p = PRODUCTS.find(p=>p.id===id);
      PRODUCTS = PRODUCTS.map(p => p.id===id ? {...p, estado:'publicado'} : p);
      saveProducts();
      if(p) logHistory({ entidad:'item', entidadId:id, accion:'publicar', resumen:`Publicó "${p.marca} ${p.modelo}"` });
      renderContentOnly();
    }));
    document.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click', ()=>{
      const id = b.getAttribute('data-edit');
      let p = PRODUCTS.find(p=>p.id===id);
      const original = p ? JSON.parse(JSON.stringify(p)) : null;
      // Editar un ítem ya Publicado lo baja de Inventario de inmediato: queda
      // Pendiente hasta que la edición se revise y se confirme de nuevo.
      if(p && itemEstado(p)==='publicado'){
        PRODUCTS = PRODUCTS.map(x => x.id===id ? {...x, estado:'pendiente'} : x);
        saveProducts();
        p = PRODUCTS.find(x=>x.id===id);
      }
      openProductModal(p, original);
    }));
    document.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click', ()=>{
      const id = b.getAttribute('data-del');
      const p = PRODUCTS.find(p=>p.id===id);
      const wasPend = p && itemEstado(p)==='pendiente';
      const msg = wasPend ? '¿Rechazar este ítem? Se eliminará del catálogo.' : '¿Eliminar este ítem del catálogo?';
      if(confirm(msg)){
        PRODUCTS = PRODUCTS.filter(p=>p.id!==id);
        saveProducts();
        bo.selectedIds.delete(id);
        if(p) logHistory({ entidad:'item', entidadId:id, accion: wasPend?'rechazar':'eliminar', resumen: wasPend? `Rechazó "${p.marca} ${p.modelo}" (pendiente)` : `Eliminó "${p.marca} ${p.modelo}" del catálogo` });
        renderContentOnly();
      }
    }));
  } else if(bo.tab==='proveedores'){
    const openNew = document.getElementById('openNewProvider');
    if(openNew) openNew.addEventListener('click', ()=> openProviderModal(null));
    document.querySelectorAll('[data-edit-provider]').forEach(b=>b.addEventListener('click', ()=>{
      const pr = PROVIDERS.find(pr=>pr.id===b.getAttribute('data-edit-provider'));
      openProviderModal(pr);
    }));
    document.querySelectorAll('[data-del-provider]').forEach(b=>b.addEventListener('click', ()=>{
      const id = b.getAttribute('data-del-provider');
      const pr = PROVIDERS.find(pr=>pr.id===id);
      const count = PRODUCTS.filter(p=>p.proveedorId===id).length;
      const msg = count>0
        ? `Este proveedor está asociado a ${count} ítem(s) del catálogo. Esos ítems conservarán el nombre y correo actuales, pero dejarán de estar vinculados al registro. ¿Eliminar de todas formas?`
        : '¿Eliminar este proveedor?';
      if(confirm(msg)){
        PROVIDERS = PROVIDERS.filter(pr=>pr.id!==id);
        saveProviders();
        if(pr) logHistory({ entidad:'proveedor', entidadId:id, accion:'eliminar', resumen:`Eliminó el proveedor "${pr.nombre}"` });
        renderContentOnly();
      }
    }));
  } else if(bo.tab==='solicitudes'){
    const fCliente = document.getElementById('solFiltroCliente');
    if(fCliente) fCliente.addEventListener('input', (e)=>{ solFilters.cliente = e.target.value; renderContentOnly(); });
    const fDesde = document.getElementById('solFiltroDesde');
    if(fDesde) fDesde.addEventListener('change', (e)=>{ solFilters.fechaDesde = e.target.value; renderContentOnly(); });
    const fHasta = document.getElementById('solFiltroHasta');
    if(fHasta) fHasta.addEventListener('change', (e)=>{ solFilters.fechaHasta = e.target.value; renderContentOnly(); });
    const fProveedor = document.getElementById('solFiltroProveedor');
    if(fProveedor) fProveedor.addEventListener('change', (e)=>{ solFilters.proveedorEmail = e.target.value; renderContentOnly(); });
    const clearBtn = document.getElementById('clearSolFiltros');
    if(clearBtn) clearBtn.addEventListener('click', ()=>{ solFilters = { fechaDesde:'', fechaHasta:'', cliente:'', proveedorEmail:'' }; renderContentOnly(); });
    const exportBtn = document.getElementById('exportSolicitudes');
    if(exportBtn) exportBtn.addEventListener('click', exportSolicitudesXLSX);
    document.querySelectorAll('[data-open]').forEach(tr=>tr.addEventListener('click', (e)=>{
      if(e.target.closest('[data-confirm]') || e.target.closest('[data-reject]')) return;
      const f = tr.getAttribute('data-open');
      bo.selectedReq = bo.selectedReq===f ? null : f;
      renderContentOnly();
    }));
    document.querySelectorAll('[data-confirm]').forEach(b=>b.addEventListener('click', (e)=>{
      e.stopPropagation();
      const f = b.getAttribute('data-confirm');
      REQUESTS = REQUESTS.map(r=>r.folio===f? {...r, estado:'confirmada'} : r);
      saveRequests();
      logHistory({ entidad:'solicitud', entidadId:f, accion:'confirmar', resumen:`Confirmó la solicitud ${f} y aplicó el descuento en recaudación` });
      renderContentOnly();
    }));
    document.querySelectorAll('[data-reject]').forEach(b=>b.addEventListener('click', (e)=>{
      e.stopPropagation();
      const f = b.getAttribute('data-reject');
      REQUESTS = REQUESTS.map(r=>r.folio===f? {...r, estado:'rechazada'} : r);
      saveRequests();
      logHistory({ entidad:'solicitud', entidadId:f, accion:'rechazar', resumen:`Rechazó la solicitud ${f}` });
      renderContentOnly();
    }));
    document.querySelectorAll('[data-approve]').forEach(b=>b.addEventListener('click', (e)=>{
      e.stopPropagation();
      approveSolicitud(b.getAttribute('data-approve'));
      renderContentOnly();
    }));
  } else if(bo.tab==='correos'){
    document.querySelectorAll('[data-open-email]').forEach(tr=>tr.addEventListener('click', ()=>{
      const id = tr.getAttribute('data-open-email');
      bo.selectedEmail = bo.selectedEmail===id ? null : id;
      renderContentOnly();
    }));
    document.querySelectorAll('[data-approve-email]').forEach(b=>b.addEventListener('click', (e)=>{
      e.stopPropagation();
      approveSolicitud(b.getAttribute('data-approve-email'));
      renderContentOnly();
    }));
  } else {
    const fEntidad = document.getElementById('histFiltroEntidad');
    if(fEntidad) fEntidad.addEventListener('change', (e)=>{ histFilters.entidad = e.target.value; renderContentOnly(); });
    const fActor = document.getElementById('histFiltroActor');
    if(fActor) fActor.addEventListener('change', (e)=>{ histFilters.actor = e.target.value; renderContentOnly(); });
    const fQ = document.getElementById('histFiltroQ');
    if(fQ) fQ.addEventListener('input', (e)=>{ histFilters.q = e.target.value; renderContentOnly(); });
    const fDesde = document.getElementById('histFiltroDesde');
    if(fDesde) fDesde.addEventListener('change', (e)=>{ histFilters.fechaDesde = e.target.value; renderContentOnly(); });
    const fHasta = document.getElementById('histFiltroHasta');
    if(fHasta) fHasta.addEventListener('change', (e)=>{ histFilters.fechaHasta = e.target.value; renderContentOnly(); });
    const clearBtn = document.getElementById('clearHistFiltros');
    if(clearBtn) clearBtn.addEventListener('click', ()=>{ histFilters = { entidad:'todas', actor:'', fechaDesde:'', fechaHasta:'', q:'' }; renderContentOnly(); });
    document.querySelectorAll('[data-hist-open]').forEach(tr=>tr.addEventListener('click', ()=>{
      const id = tr.getAttribute('data-hist-open');
      histSelected = histSelected===id ? null : id;
      renderContentOnly();
    }));
  }
}

/* ================= Router / render ================= */
function renderContentOnly(){
  const c = document.getElementById('content');
  document.querySelectorAll('#cartFab').forEach(n=>n.remove());
  if(nav.section === 'autopartes-inventario'){
    c.innerHTML = renderInventario();
    wireInventario();
    renderCartFab(document.body);
  } else if(nav.section === 'autopartes-backoffice'){
    c.innerHTML = renderBackoffice();
    wireBackoffice();
  } else {
    c.innerHTML = renderPlaceholder();
  }
}

function render(){
  renderSidebar();
  renderContentOnly();
  renderCartUI();
}
render();
