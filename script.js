const prompts = [
 {title:"Cinematic Night Portrait",cat:"Cinematic",icon:"🎬",text:"Transform the uploaded photo into a cinematic night portrait while preserving the person's identity, facial features, hairstyle, body proportions and clothing. Add a realistic urban night environment with soft ambient lights, subtle bokeh, cinematic depth of field, natural skin texture and realistic shadows. Professional photography, realistic lighting, high detail, 4K, vertical 9:16 composition."},
 {title:"Romantic Sunset Couple",cat:"Couple",icon:"❤️",text:"Turn the uploaded couple photo into a romantic golden-hour portrait. Preserve both identities, facial features, hairstyles, body proportions and clothing. Add warm sunset light, soft background bokeh, natural skin texture, realistic shadows and a subtle cinematic atmosphere. Photorealistic, elegant, high detail, 4K, vertical 9:16."},
 {title:"Luxury Outfit Transformation",cat:"Outfit",icon:"👕",text:"Change the outfit in the uploaded photo to a premium modern luxury outfit while preserving the person's identity, face, hairstyle, body proportions, pose and background. Make fabric texture, folds, shadows and lighting physically realistic. Editorial fashion photography, natural skin texture, photorealistic, high detail, 4K."},
 {title:"Aesthetic City Background",cat:"Background",icon:"🌆",text:"Replace the background with a stylish modern city street at blue hour while preserving the subject exactly. Match perspective, lighting, reflections, shadows and depth of field to the original subject. Add realistic city lights and subtle bokeh. Photorealistic smartphone photography, natural colors, high detail, 4K, 9:16."},
 {title:"Luxury Car Photoshoot",cat:"Car & Bike",icon:"🚗",text:"Create a premium cinematic car photoshoot using the uploaded person and preserve identity, face, pose and clothing. Place them naturally beside a luxury performance car in a modern city at night. Match scale, perspective, reflections and lighting. Realistic shadows, cinematic depth of field, photorealistic, 4K, vertical 9:16."},
 {title:"Mountain Travel Portrait",cat:"Travel",icon:"✈️",text:"Transform the uploaded portrait into a realistic mountain travel photograph. Preserve identity, facial features, hairstyle and body proportions. Add dramatic but natural mountain scenery, soft daylight, atmospheric depth and realistic environmental shadows. Professional travel photography, photorealistic, detailed, 4K, vertical 9:16."},
 {title:"Luxury Hotel Portrait",cat:"Luxury",icon:"💎",text:"Place the uploaded subject inside an elegant luxury hotel lobby while preserving identity, clothing, pose and proportions. Use warm premium interior lighting, realistic reflections, natural shadows and shallow depth of field. High-end editorial photography, photorealistic materials, natural skin texture, 4K."},
 {title:"Aesthetic Mirror Selfie",cat:"Instagram",icon:"📸",text:"Enhance the uploaded mirror selfie into a clean premium Instagram aesthetic while preserving the person's identity, face, clothing, phone and pose. Improve lighting naturally, add subtle depth, realistic reflections and a stylish minimal interior. Do not over-smooth skin. Photorealistic smartphone photography, high detail, 4K, 9:16."},
 {title:"Professional Portrait",cat:"Portrait",icon:"👤",text:"Turn the uploaded image into a professional studio portrait while preserving the person's exact identity and facial features. Add soft studio lighting, realistic skin texture, subtle background separation and natural shadows. Clean professional photography, realistic colors, sharp subject, high detail, 4K."},
 {title:"Dark Moody Portrait",cat:"Moody",icon:"🌙",text:"Transform the uploaded portrait into a dark moody cinematic photograph while preserving identity, facial structure, hairstyle, clothing and pose. Use controlled low-key lighting, deep natural shadows, subtle rim light and atmospheric background separation. Photorealistic, natural skin texture, cinematic photography, 4K, 9:16."}
];

const grid=document.getElementById("grid"), count=document.getElementById("count"), search=document.getElementById("search");

function render(list=prompts){
 count.textContent=list.length+" prompts";
 grid.innerHTML=list.length?list.map((p,i)=>`
  <article class="card">
   <div class="thumb">${p.icon}</div>
   <div class="card-body">
    <div class="tag">${p.cat}</div>
    <h3>${p.title}</h3>
    <p>${p.text.slice(0,145)}…</p>
    <button class="copy" data-index="${prompts.indexOf(p)}">📋 Copy Prompt</button>
   </div>
  </article>`).join(""):`<div class="empty">No prompts found. Try another search.</div>`;
 document.querySelectorAll(".copy").forEach(btn=>btn.addEventListener("click",()=>{
   const p=prompts[Number(btn.dataset.index)];
   navigator.clipboard.writeText(p.text).then(()=>{
     const old=btn.textContent; btn.textContent="✓ Copied!";
     btn.classList.add("copied");
     setTimeout(()=>{btn.textContent=old;btn.classList.remove("copied")},1400);
   });
 });
}
search.addEventListener("input",()=>{
 const q=search.value.toLowerCase().trim();
 render(prompts.filter(p=>(p.title+" "+p.cat+" "+p.text).toLowerCase().includes(q)));
});
document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>{
 search.value=b.dataset.category; search.dispatchEvent(new Event("input"));
 document.getElementById("prompts").scrollIntoView({behavior:"smooth"});
}));
render();
