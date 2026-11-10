// Recovered, valid portfolio script. The previous edit accidentally left this file
// as an incomplete JavaScript fragment, preventing the page from initializing.
const asset = name => `ITE%20PORTFOLIO-%20MACALINO/assets/${encodeURIComponent(name).replace(/%2F/g, '/')}`;
const activities = {
  prelims: [
    { id: 'prelim1', title: 'Seatwork No. 1 — Descriptive Statistics', type: 'Seatwork', files: [{name:'Prelim SW1- Macalino.pdf',type:'pdf'}, {name:'Prelim Seatwork No. 1 - assignment screenshot.svg',type:'image'}] },
    { id: 'prelim2', title: 'Activity No. 1 — Conditional Formatting & Filtering', type: 'Activity', files: [{name:'Practice File_Excel Act1- Macalino.xlsx'}, {name:'prelim-conditional-formatting.svg',type:'image'}] },
    { id: 'prelim3', title: 'Activity No. 2 — Advanced Excel Formulas', type: 'Activity', files: [{name:'PRELIM ACTIVITY NO.2_ADVANCED EXCEL FORMULAS-Macalino.xlsx'}, {name:'prelim-advanced-formulas.svg',type:'image'}] },
    { id: 'prelim4', title: 'Activity No. 3 — Creating Charts', type: 'Activity', files: [{name:'PRELIM ACTIVITY NO. 3 _ CREATING CHART-Macalino.pdf',type:'pdf'}] },
    { id: 'prelim5', title: 'Prelim Project — Data Analysis Using Excel', type: 'Project', files: [{name:'Macalino_PrelimProject_DataAnalysis.xlsx'}, {name:'prelim-project-data-analysis.svg',type:'image'}] },
    { id: 'prelim6', title: 'Prelim Quiz No. 1', type: 'Quiz' }, { id: 'prelim7', title: 'Prelim Quiz No. 2', type: 'Quiz' }, { id: 'prelim8', title: 'Prelim Examination', type: 'Exam' }
  ],
  midterms: [
    {id:'mid1',title:'Activity No. 1 — Grouped Frequency Distribution Table',type:'Activity',files:[{name:'Midterm Activity No.1 - Grouped Frequency Distribution Table- Macalino.xlsx'}]},
    {id:'mid2',title:'Assignment No. 1 — Probability',type:'Assignment'},
    {id:'mid3',title:'Activity No. 2 — Statistical Charts',type:'Activity',files:[{name:'MIDTERM ACTIVITY NO.2 - STATISTICAL CHART- Macalino.xlsx'}]},
    {id:'mid4',title:'Midterm Quiz — Frequency Distribution Table',type:'Quiz'},
    {id:'mid5',title:'I.T. Organization Membership',type:'Community'},
    {id:'mid6',title:'Activity No. 3 — Pivot Tables & Pivot Charts',type:'Activity',files:[{name:'MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND PIVOT CHART- Macalino.pdf',type:'pdf'},{name:'Scenario 1- Macalino.xlsx'}]},
    {id:'mid7',title:'Midterm Quiz No. 2',type:'Quiz'},
    {id:'mid8',title:'Midterm Project',type:'Project',files:[{name:'ITC C503 MIDTERM PROJECT- Macalino..xlsx'},{name:'ITC_C503_MidtermProject_Macalino (1).pdf',type:'pdf'}]},
    {id:'mid9',title:'Midterm Examination',type:'Exam'}
  ],
  finals: [
    {id:'final1',title:'Seatwork No. 1 — Python Lists',type:'Seatwork',files:[{name:'Sample_Data_Macalino.ipynb'},{name:'Sample_Data_Macalino.pdf',type:'pdf'}]},
    {id:'final2',title:'Activity No. 1 — Python Lists & Tuples',type:'Activity',files:[{name:'FinalActivityNo_1_PythonListTuples_Macalino (1).ipynb'},{name:'FinalActivityNo.1_PtyhonListTupples_Macalino (1).pdf',type:'pdf'}]},
    {id:'final3',title:'Activity No. 2 — Python Lists & Tuples',type:'Activity',files:[{name:'inalTermActivityNo_2_PythonListTuples_Macalino.ipynb'},{name:'inalTermActivityNo.2_PythonListTuples_Macalino.pdf',type:'pdf'}]},
    {id:'final4',title:'Activity No. 3 — Matplotlib with Pandas',type:'Activity',files:[{name:'FinalTermAct3_Matplotlib_Macalino (1).ipynb'},{name:'FinalTermAct3_Matplotlib_Macalino_.ipynb'},{name:'FinalTermAct3_Matplotlib_Macalino..pdf',type:'pdf'}]},
    {id:'final5',title:'Final Term Quiz — Python',type:'Quiz'},
    {id:'final6',title:'Activity No. 3 — Python Word Cloud',type:'Activity',files:[{name:'_finalTermActivity_Wordcloud_Macalino.ipynb'},{name:'finalTermActivity_Wordcloud_Macalino.pdf',type:'pdf'}]}
  ]
};

const allActivities = Object.entries(activities).flatMap(([section, items]) => items.map(item => ({...item, section})));
const modal = document.getElementById('activity-modal');
const preview = document.getElementById('preview-area');
const fileList = document.getElementById('file-list');

function showActivity(item) {
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-category').textContent = `${item.section.toUpperCase()} · ${item.type.toUpperCase()}`;
  preview.replaceChildren(); fileList.replaceChildren();
  (item.files || []).forEach(file => {
    const url = asset(file.name);
    if (file.type === 'image' || /\.(png|jpe?g|gif|webp|svg)$/i.test(file.name)) {
      const card = document.createElement('article'); card.className = 'preview-card';
      const heading = document.createElement('h4'); heading.textContent = file.name;
      const image = document.createElement('img'); image.src = url; image.alt = item.title;
      card.append(heading, image); preview.append(card);
      image.addEventListener('error', () => { card.remove(); addDownload(file, url); }, {once:true});
    } else if (file.type === 'pdf' || /\.pdf$/i.test(file.name)) {
      const card = document.createElement('article'); card.className = 'preview-card';
      const heading = document.createElement('h4'); heading.textContent = file.name;
      const frame = document.createElement('iframe'); frame.src = url; frame.title = `PDF preview: ${file.name}`;
      card.append(heading, frame); preview.append(card);
    } else addDownload(file, url);
  });
  if (!item.files?.length) { const empty=document.createElement('p'); empty.className='empty-preview'; empty.textContent='No files are currently listed for this activity.'; preview.append(empty); }
  modal.classList.remove('hidden'); document.body.classList.add('modal-open'); document.getElementById('modal-close').focus();
}
function addDownload(file, url) {
  const row=document.createElement('li'); const name=document.createElement('span'); name.className='file-name-button'; name.textContent=file.name;
  const link=document.createElement('a'); link.href=url; link.download=file.name; link.textContent='Open / Download'; link.target='_blank'; link.rel='noopener';
  row.append(name,link); fileList.append(row);
}
function closeModal(){ modal.classList.add('hidden'); document.body.classList.remove('modal-open'); preview.replaceChildren(); fileList.replaceChildren(); }
document.getElementById('modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',event=>{if(event.target===modal)closeModal();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!modal.classList.contains('hidden'))closeModal();});

let total=0;
Object.entries(activities).forEach(([section,items])=>{
  const grid=document.getElementById(`${section}-grid`); if(!grid)return;
  items.forEach(item=>{
    total++;
    const card=document.createElement('button'); card.type='button'; card.className='card card-reveal in-view'; card.dataset.activityId=item.id;
    card.setAttribute('aria-label',`Open ${item.title}`);
    card.innerHTML=`<span class="card-top"><span class="card-number">${String(total).padStart(2,'0')} / 23</span><span class="card-type">${item.type}</span></span><span class="card-title"></span><span class="card-bottom"><span class="card-status ${item.files?.length?'has-files':''}">${item.files?.length?`${item.files.length} FILE${item.files.length===1?'':'S'} READY`:'NO FILES YET'}</span><span class="card-arrow" aria-hidden="true">↗</span></span>`;
    card.querySelector('.card-title').textContent=item.title; card.addEventListener('click',()=>showActivity({...item,section})); grid.append(card);
  });
  const progress=document.getElementById(`${section}-progress`); if(progress)progress.textContent=items.some(i=>i.files?.length)?'100%':'0%';
  const bar=document.getElementById(`${section}-progress-bar`); if(bar)bar.style.width=items.some(i=>i.files?.length)?'100%':'0%';
});
for(const el of document.querySelectorAll('.reveal'))el.classList.add('in-view');
document.body.classList.add('home-ready');
const search=document.getElementById('activity-search'), result=document.getElementById('search-results');
if(search)search.addEventListener('input',()=>{let visible=0;document.querySelectorAll('.card').forEach(card=>{const show=card.textContent.toLowerCase().includes(search.value.trim().toLowerCase());card.hidden=!show;if(show)visible++;});if(result)result.textContent=search.value?`${visible} matching activities`:`Showing all ${total} activities`;});
const totalEl=document.getElementById('total-activities');if(totalEl)totalEl.textContent=total;
const uploaded=allActivities.filter(item=>item.files?.length).length;
const uploadedEl=document.getElementById('uploaded-activities');if(uploadedEl)uploadedEl.textContent=uploaded;
const filesEl=document.getElementById('total-files');if(filesEl)filesEl.textContent=allActivities.reduce((n,item)=>n+(item.files?.length||0),0);
const pct=total?Math.round(uploaded/total*100):0;const pctEl=document.getElementById('overall-progress');if(pctEl)pctEl.textContent=`${pct}%`;const pctBar=document.getElementById('overall-progress-bar');if(pctBar)pctBar.style.width=`${pct}%`;
