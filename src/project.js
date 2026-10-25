(() => {
 const cfg=window.NEXCODE,root=document.querySelector('#project-content'),id=new URLSearchParams(location.search).get('id');
 const make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
 const p=(cfg.projects||[]).find(x=>x.id===id);
 if(!p){const wrap=make('section','project-not-found');wrap.append(make('p','eyebrow',(cfg.projects||[]).length?'Proyecto no disponible':'Portafolio en preparación'),make('h1','', (cfg.projects||[]).length?'No encontramos ese proyecto.':'Aún no hay proyectos publicados.'),make('p','', (cfg.projects||[]).length?'Revisa el enlace o vuelve al portafolio.':'El equipo de Nexcode está preparando los proyectos que compartirá aquí.'),Object.assign(make('a','button','Volver a proyectos →'),{href:'index.html#proyectos'}));root.append(wrap)}
 else {
  const hero=make('section','project-detail-hero');hero.append(make('a','back-link','← Todos los proyectos'));hero.querySelector('a').href='index.html#proyectos';hero.append(make('p','eyebrow',p.status||p.type||'Proyecto'),make('h1','',p.name),make('p','project-lede',p.summary||p.description||''));
  if(p.image){const img=make('img','project-main-image');img.src=p.image;img.alt=p.imageAlt||`Captura de ${p.name}`;hero.append(img)}root.append(hero);
  const content=make('div','project-detail-content');
  for(const [title,value] of [['Contexto y objetivo',p.objective],['Necesidad',p.problem],['Solución implementada',p.solution],['Funcionalidades',p.features],['Arquitectura técnica',p.architecture],['Decisiones técnicas',p.decisions]])if(value){const block=make('section','project-detail-block');block.append(make('h2','',title));if(Array.isArray(value)){const list=document.createElement('ul');value.forEach(x=>list.append(make('li','',x)));block.append(list)}else block.append(make('p','',value));content.append(block)}
  const tags=p.technologies||[];if(tags.length){const block=make('section','project-detail-block');block.append(make('h2','','Tecnologías'));const row=make('div','project-tags');tags.forEach(x=>row.append(make('span','',x)));block.append(row);content.append(block)}
  const participants=p.participants||[];if(participants.length){const block=make('section','project-detail-block');block.append(make('h2','','Equipo'));const list=document.createElement('ul');participants.forEach(x=>list.append(make('li','',x)));block.append(list);content.append(block)}
  const screenshots=p.screenshots||[];if(screenshots.length){const block=make('section','project-detail-block');block.append(make('h2','','Capturas'));const grid=make('div','project-screenshots');screenshots.forEach((src,i)=>{const img=make('img');img.src=src;img.alt=`Captura ${i+1} de ${p.name}`;img.loading='lazy';grid.append(img)});block.append(grid);content.append(block)}
  const links=make('div','project-actions');for(const [label,url] of [['Ver demostración',p.links?.demo],['Repositorio público',p.links?.repository]])if(url){const a=make('a','button',`${label} ↗`);a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.append(a)}if(links.childElementCount)content.append(links);root.append(content);
 }
 document.querySelector('#year').textContent=new Date().getFullYear();
})();
