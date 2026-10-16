/* Standalone presentation prototype. No API calls, analytics, cart writes, or AI requests. */
const iconPaths = {
 arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
 'arrow-left':'<path d="M20 12H4m6-6-6 6 6 6"/>',
 chevron:'<path d="m6 9 6 6 6-6"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 close:'<path d="m6 6 12 12M6 18 18 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 bag:'<path d="M5 7h14l1 14H4L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>',
 gift:'<rect x="4" y="9" width="16" height="12" rx="1"/><path d="M3 9h18V6H3v3Zm9-3v15"/><path d="M12 6C4 6 6 0 9 2c2 1 3 4 3 4Zm0 0c8 0 6-6 3-4-2 1-3 4-3 4Z"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 heart:'<path d="M20 5a5.5 5.5 0 0 0-8 1 5.5 5.5 0 0 0-8-1c-3 3-1 6 1 8l7 7 7-7c2-2 4-5 1-8Z"/>',
 sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4"/>',
 star:'<path d="m12 2 3 6.1 6.7 1-4.85 4.72L18 20.5l-6-3.16-6 3.16 1.15-6.68L2.3 9.1 9 8.1 12 2Z"/>',
 chat:'<path d="M21 11.5a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l1.3-4.8a9 9 0 1 1 16.7-4.7Z"/>',
 sliders:'<path d="M4 6h5m4 0h7M4 12h10m4 0h2M4 18h2m4 0h10"/><circle cx="11" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="8" cy="18" r="2"/>',
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'
};
function icon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.arrow}</svg>`; }
function renderIcons(root = document) {root.querySelectorAll('[data-icon]').forEach(el => el.outerHTML = icon(el.dataset.icon));}
const photos = {
 hero:{file:1,x:1000,y:125,w:902,h:675,W:1902,H:902},
 frame:{file:5,x:1105,y:539,w:348,h:376,W:1917,H:920},
 wallet:{file:4,x:0,y:270,w:980,h:640,W:1912,H:916},
 sign:{file:2,x:1378,y:640,w:331,h:265,W:1917,H:927},
 hamper:{file:3,x:1023,y:350,w:332,h:368,W:1917,H:921},
 scrapbook:{file:3,x:1378,y:350,w:332,h:368,W:1917,H:921},
 bib:{file:5,x:0,y:539,w:348,h:376,W:1917,H:920},
 chest:{file:5,x:368,y:539,w:348,h:376,W:1917,H:920},
 mirror:{file:5,x:737,y:539,w:348,h:376,W:1917,H:920},
 board:{file:5,x:1473,y:539,w:347,h:376,W:1917,H:920},
 birthday:{file:7,x:188,y:80,w:360,h:269,W:1912,H:907},
 wood:{file:7,x:574,y:80,w:360,h:269,W:1912,H:907},
 leather:{file:7,x:958,y:80,w:360,h:269,W:1912,H:907},
 wedding:{file:7,x:1343,y:80,w:360,h:269,W:1912,H:907},
 baby:{file:7,x:188,y:431,w:360,h:267,W:1912,H:907}
};
function photo(key,alt) {
 const p=photos[key];
 // A viewport onto the unchanged uploaded screenshot, not an AI recreation.
 return `<svg class="photo-crop" viewBox="${p.x} ${p.y} ${p.w} ${p.h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${alt}"><image href="assets/${p.file}.png" width="${p.W}" height="${p.H}"/></svg>`;
}
const products = [
 {name:'Best Teacher Photo Frame – Best Teacher Ever',photo:'frame',price:'26.25',old:'35.00',categories:['Birthdays','Custom Wood Signs']},
 {name:'Leather Wallet',photo:'wallet',price:'45.00',old:'65.00',categories:['Leather Wallets']},
 {name:'Hanging Wooden Sign',photo:'sign',price:'24.00',old:'45.00',categories:['Custom Wood Signs']},
 {name:'Baby Gift Hamper',photo:'hamper',price:'43.00',old:'66.00',categories:['Baby Showers']},
 {name:'Happy Birthday Photo Scrapbook',photo:'scrapbook',price:'57.00',old:'80.00',categories:['Birthdays']},
 {name:'Personalized Whale Bib for Baby',photo:'bib',price:'28.00',old:'45.00',categories:['Baby Showers']},
 {name:'Personalized Wooden Keepsake Chest for Baby Milestones & Memories',photo:'chest',price:'114.95',old:'150.00',categories:['Baby Showers','Custom Wood Signs']},
 {name:'Personalised Compact Mirror – Bridesmaid & Hen Party Gift',photo:'mirror',price:'3.90',old:'6.00',categories:['Weedings']},
 {name:'Tropical Beach Paradise with Palm Trees Design – Board',photo:'board',price:'31.99',old:'45.00',categories:['Weedings','Custom Wood Signs']}
];
function productCard(p) {return `<a class="product-card" href="#product" data-page="${p.name} product page" aria-label="${p.name}, $${p.price}. Open prototype destination information."><div class="product-image">${photo(p.photo,p.name)}<span class="personalizable">Customizable</span></div><div class="product-info"><h3>${p.name}</h3><p class="price">$${p.price}<s>$${p.old}</s></p><span class="card-link">View product ${icon('arrow')}</span></div></a>`;}
document.querySelector('#featured-products').innerHTML=products.slice(0,5).map(productCard).join('');
document.querySelector('.hero-photo-crop').innerHTML=photo('hero','Personalized frames and gifts displayed in a warm home interior');
document.querySelector('#personalization-image').innerHTML=photo('wood','An existing custom wooden sign with raised lettering');
document.querySelector('#wallet-photo').innerHTML=photo('wallet','A brown leather wallet on a wooden table');
const categories=[['Birthdays','birthday'],['Custom Wood Signs','wood'],['Leather Wallets','leather'],['Weedings','wedding'],['Baby Showers','baby']];
document.querySelector('#category-grid').innerHTML=categories.map(([name,key])=>`<a class="category-card" href="#catalog" data-category="${name}"><div class="category-image">${photo(key,name==='Weedings'?'Wedding celebration':name)}</div><h3>${name==='Weedings'?'Weddings':name} ${icon('arrow')}</h3></a>`).join('');
const rail=document.querySelector('#product-rail');
function renderProducts(category='All products') {
 const selected=category==='All products'?products:products.filter(p=>p.categories.includes(category));
 rail.innerHTML=selected.map(productCard).join('');rail.scrollLeft=0;
 document.querySelector('#catalog-filter').textContent=category==='Weedings'?'Weddings':category;
 document.querySelector('#clear-filter').hidden=category==='All products';
 document.querySelector('#empty-catalog').hidden=selected.length>0;
 rail.hidden=selected.length===0;
 requestAnimationFrame(updateRail);
}
function updateRail(){document.querySelector('#previous-products').disabled=rail.scrollLeft<2;document.querySelector('#next-products').disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-2;}
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function moveRail(direction){rail.scrollBy({left:direction*(rail.clientWidth*.86),behavior:reduceMotion.matches?'instant':'smooth'});}
document.querySelector('#previous-products').addEventListener('click',()=>moveRail(-1));
document.querySelector('#next-products').addEventListener('click',()=>moveRail(1));
rail.addEventListener('scroll',updateRail,{passive:true});window.addEventListener('resize',updateRail);
rail.addEventListener('keydown',e=>{if(e.target!==rail)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();moveRail(e.key==='ArrowRight'?1:-1);}});
document.querySelector('#clear-filter').addEventListener('click',()=>renderProducts());document.querySelector('#empty-reset').addEventListener('click',()=>renderProducts());
renderProducts();
const reviews=[['Olivia','Very nice'],['Andrew','Very nice'],['Aaron','Good quality !']];
document.querySelector('#reviews-grid').innerHTML=reviews.map(([author,text])=>`<div class="review"><div class="stars" role="img" aria-label="5 out of 5 stars">${icon('star').repeat(5)}</div><blockquote>“${text}”</blockquote><cite>${author}</cite></div>`).join('');
const faqs=[
 ['How can I place an order?','Browse our products, add your favorite items to your cart, and proceed to checkout. Follow the instructions to enter your shipping details and complete your order.'],
 ['Do I need an account to place an order?','No, you can shop as a guest if this option is available. Creating an account allows you to track your orders and manage your information more easily.'],
 ['Can I modify or cancel my order?','If you need to change or cancel your order, please contact our customer support as soon as possible. Changes may not be possible once your order has been shipped.'],
 ['How long does delivery take?','Delivery times depend on your location and the shipping method selected at checkout. Estimated delivery times will be provided before you complete your purchase.']
];
document.querySelector('#faq-list').innerHTML=faqs.map(([q,a])=>`<details><summary>${q}${icon('plus')}</summary><p>${a}</p></details>`).join('');
renderIcons();
const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
document.addEventListener('click',e=>{
 const category=e.target.closest('[data-category]');if(category)renderProducts(category.dataset.category);
 const destination=e.target.closest('[data-page]');if(destination){e.preventDefault();document.querySelector('#destination-title').textContent=destination.dataset.page;document.querySelector('#destination-dialog').showModal();}
 if(e.target.closest('#navigation a'))closeMenu();
 if(!e.target.closest('.nav-dropdown'))document.querySelector('.nav-dropdown').open=false;
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();document.querySelector('.nav-dropdown').open=false;document.querySelector('.prototype-tools').open=false;}});
document.querySelector('#back-to-homepage').addEventListener('click',()=>document.querySelector('#destination-dialog').close());
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}));
const originalDialog=document.querySelector('#comparison-dialog');
document.querySelector('#show-original').addEventListener('click',()=>{
 const body=document.querySelector('#comparison-body');
 if(!body.children.length)body.innerHTML=Array.from({length:12},(_,i)=>`<figure><figcaption>Original screenshot ${i+1} / 12</figcaption><img src="assets/${i+1}.png" loading="lazy" width="1917" height="920" alt="Original storefront screenshot ${i+1}"></figure>`).join('');
 originalDialog.showModal();
});
function luminance(hex){const rgb=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];}
function setBrand(color){
 // Keep text on buttons readable even with a light user-selected color.
 const lum=luminance(color.slice(1));document.documentElement.style.setProperty('--brand',color);document.documentElement.style.setProperty('--brand-ink',lum>.179?'#000000':'#ffffff');
 // Text links and small icons use a contrast-safe derivative independently of button fills.
 document.documentElement.style.setProperty('--brand-text',lum>.16?'#284d3d':color);
 document.querySelector('#brand-color').value=color;
 document.querySelectorAll('[data-theme]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.theme===color)));
 document.querySelector('meta[name="theme-color"]').content=color;
}
document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>setBrand(b.dataset.theme)));
document.querySelector('#brand-color').addEventListener('input',e=>setBrand(e.target.value));
function setMerchant(name){const value=name.trim()||'Demo-Store';document.querySelectorAll('[data-store-name]').forEach(el=>el.textContent=value);document.querySelectorAll('.brand-mark').forEach(el=>el.textContent=Array.from(value)[0].toUpperCase());document.title=`${value} — Personalized gifts`;document.querySelector('.header .brand').setAttribute('aria-label',`${value} home`);}
document.querySelector('#merchant-name').addEventListener('input',e=>setMerchant(e.target.value));
document.querySelector('#reset-brand').addEventListener('click',()=>{setBrand('#284d3d');document.querySelector('#merchant-name').value='Demo-Store';setMerchant('Demo-Store');});
