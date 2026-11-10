const activities = {
  prelims: [
    { id: 'prelim1', title: 'Seatwork No. 1 — Descriptive Statistics', type: 'Seatwork', attachments: [
      { name: 'Prelim SW1- Macalino.pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Prelim%20SW1-%20Macalino.pdf' },
      { name: 'Prelim Seatwork No. 1 - assignment screenshot.svg', type: 'image/svg+xml', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/prelim-seatwork-screenshot.svg' }
    ] },
    { id: 'prelim2', title: 'Activity No. 1 — Conditional Formatting & Filtering', type: 'Activity', attachments: [{ name: 'Prelim Activity No. 1 — Conditional Formatting & Filtering screenshot', type: 'image/svg+xml', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/prelim-conditional-formatting.svg' }] },
    { id: 'prelim3', title: 'Activity No. 2 — Advanced Excel Formulas', type: 'Activity', attachments: [{ name: 'Prelim Activity No. 2 — Advanced Excel Formulas screenshot', type: 'image/svg+xml', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/prelim-advanced-formulas.svg' }] },
    { id: 'prelim4', title: 'Activity No. 3 — Creating Charts', type: 'Activity', attachments: [{ name: 'Prelim Activity No. 3 — Creating Chart screenshot', type: 'image/svg+xml', screen: { title: ['PRELIM ACTIVITY NO. 3 _ CREATING CHART'], due: 'August 14, 2026 10:30 AM · Multiple submissions allowed', week: 'PRELIM WEEK 4-5', turnedIn: 'Turned in Fri Aug 14, 2026 at 9:59 AM', fileName: 'PRELIM ACTIVITY NO. 3 _ CREATING CHART-Macalino.pdf', rows: ['INSTRUCTIONS', 'Download the Excel File GroupedFrequencyDistribution Chart', 'Use this data in Creating Charts', '  -Create Four different Charts', '  -Use Lower Class Limits as X- axis data', '  -Frequency as your Y - axis data', '  -for Pie Chart - Compute the percentage of each frequency', '  -Add Chart Elements for each Chart - Title, Axis Title, Data Label, Legend', '', 'On Word Document', '  -Screenshots of your four different charts', '  -Add Header: ITC C503- PRELIM ACTIVITY CREATING CHARTS', '  -Add Footer: Prepared By: Complete Name, Section', '  -Save your File As: Prelim Activity No.3_CreatingChart_LastName', '  -Convert your file in PDF type', '  -Submit your PDF file'] } }] },
    { id: 'prelim5', title: 'Prelim Project — Data Analysis Using Excel', type: 'Project', attachments: [{ name: 'Prelim Project — Data Analysis Using Excel screenshot', type: 'image/svg+xml', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/prelim-project-data-analysis.svg' }] },
    { id: 'prelim6', title: 'Prelim Quiz No. 1', type: 'Quiz', attachments: [{ name: 'Prelim Quiz No. 1 screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503- PRELIM QUIZ NO.1'], due: 'September 1, 2026 11:59 PM · Multiple submissions allowed', week: 'PRELIM WEEK 4-5', turnedIn: 'Turned in Mon Sep 1, 2026 at 9:03 PM', fileName: 'prelim-quiz-no-1-macalino.pdf', rows: ['Instructions:', '- Answer the online quiz in Canvas.', '- Complete the quiz in one sitting.', '- Save a screenshot or proof of completion.'] } }] },
    { id: 'prelim7', title: 'Prelim Quiz No. 2', type: 'Quiz', attachments: [{ name: 'Prelim Quiz No. 2 screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 PRELIM QUIZ NO.2'], due: 'September 15, 2026 10:00 AM · Multiple submissions allowed', week: 'PRELIM WEEK 5-6', turnedIn: 'Turned in Mon Sep 15, 2026 at 9:58 AM', fileName: 'prelim-quiz-no-2-macalino.pdf', rows: ['Instructions:', '- Answer the quiz in Canvas.', '- Keep your answer sheet.', '- Submit final response screenshot.'] } }] },
    { id: 'prelim8', title: 'Prelim Examination', type: 'Exam', attachments: [{ name: 'Prelim Examination screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503- PRELIM EXAMINATION'], due: 'September 19, 2026 11:59 PM · Multiple submissions allowed', week: 'PRELIM WEEK 7-8', turnedIn: 'Turned in Sat Sep 19, 2026 at 8:42 PM', fileName: 'prelim-exam-macalino.pdf', rows: ['Instructions:', '- Prepare all notes and formulas.', '- Complete exam honestly.', '- Upload your final answer sheet.'] } }] }
  ],
  midterms: [
    { id: 'mid1', title: 'Activity No. 1 — Grouped Frequency Distribution Table', type: 'Activity', attachments: [{ name: 'Midterm Activity No. 1 — Grouped Frequency Distribution screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM ACTIVITY NO.1 - GROUPED FREQUENCY DISTRIBUTION'], due: 'September 24, 2026 10:00 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 1-2', turnedIn: 'Turned in Wed Sep 24, 2026 at 9:44 AM', fileName: 'Midterm Activity No.1 - Grouped Frequency Distribution Table- Macalino.xlsx', rows: ['Prepare a grouped frequency distribution table.', 'Use the given dataset and distribution rules.', 'Save as Excel file and submit.'] } }] },
    { id: 'mid2', title: 'Assignment No. 1 — Probability', type: 'Assignment', attachments: [{ name: 'Midterm Assignment No. 1 — Probability screenshot', type: 'image/svg+xml', screen: { title: ['Midterm Assignment No.1 - Probability'], due: 'September 11, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 7 - 8 PROBABILITY and Frequency Distribution Table', turnedIn: 'Turned in Thu Sep 10, 2026 at 2:02 PM', pointsText: '25 points possible', fileName: '1.0 Macalino.jpg', extraFiles: ['2.0 Macalino.jpg'], rows: ['Instructions:', '- On a Yellow Pad, Write your Step by Step Solution of the problems given on the attached file below.', 'TAKE NOTE:', '- It should be Hand Written', '- Write the Step by Step Solution', '- Box your Final Answer on each question', '- Answer should be in the lowest term', '- Scan or take picture of your Paper Solution then upload', 'Reference materials: Probability Midterm Assignment.pdf'] } }] },
    { id: 'mid3', title: 'Activity No. 2 — Statistical Charts', type: 'Activity', attachments: [{ name: 'Midterm Activity No. 2 — Statistical Chart screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM ACTIVITY NO.2 - STATISTICAL CHART'], due: 'October 1, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 3-4', turnedIn: 'Turned in Thu Oct 1, 2026 at 12:18 PM', fileName: 'MIDTERM ACTIVITY NO.2 - STATISTICAL CHART- Macalino.xlsx', rows: ['Create statistical charts from the provided dataset.', 'Use proper labels and titles.', 'Upload final Excel file.'] } }] },
    { id: 'mid4', title: 'Midterm Quiz — Frequency Distribution Table', type: 'Quiz', attachments: [{ name: 'Midterm Quiz — Frequency Distribution Table screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM QUIZ — FREQUENCY DISTRIBUTION TABLE'], due: 'October 5, 2026 9:15 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 5-6', turnedIn: 'Turned in Mon Oct 5, 2026 at 9:10 AM', fileName: 'midterm-quiz-frequency-distribution.pdf', rows: ['Complete the quiz using the distribution table lesson.', 'Save screenshot of the final answer.', 'Submit your result.'] } }] },
    { id: 'mid5', title: 'I.T. Organization Membership', type: 'Community', attachments: [{ name: 'I.T. Organization Membership screenshot', type: 'image/svg+xml', screen: { title: ['I.T ORGANIZATION MEMBERSHIP'], due: 'October 9, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 7-8', turnedIn: 'Turned in Fri Oct 9, 2026 at 7:10 PM', fileName: 'it-organization-membership.pdf', rows: ['Upload proof of organization membership.', 'Add your name and section.', 'Save as PDF.'] } }] },
    { id: 'mid6', title: 'Activity No. 3 — Pivot Tables & Pivot Charts', type: 'Activity', attachments: [{ name: 'Midterm Activity No. 3 — Creating Pivot Table and Pivot Chart screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND PIVOT CHART'], due: 'October 15, 2026 10:00 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 9-10', turnedIn: 'Turned in Thu Oct 15, 2026 at 9:57 AM', fileName: 'MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND PIVOT CHART- Macalino.pdf', extraFiles: ['Scenario 1- Macalino.xlsx'], rows: ['Create a pivot table and pivot chart.', 'Use the source data and produce a clean summary.', 'Submit PDF and Excel files.'] } }] },
    { id: 'mid7', title: 'Midterm Quiz No. 2', type: 'Quiz', attachments: [{ name: 'Midterm Quiz No. 2 screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 MIDTERM QUIZ NO.2'], due: 'October 20, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 11-12', turnedIn: 'Turned in Tue Oct 20, 2026 at 8:15 PM', fileName: 'midterm-quiz-no2-macalino.pdf', rows: ['Answer the quiz in Canvas.', 'Take screenshot of the final result.', 'Upload the image.'] } }] },
    { id: 'mid8', title: 'Midterm Project', type: 'Project', attachments: [{ name: 'Midterm Project screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 MIDTERM PROJECT'], due: 'October 28, 2026 11:30 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 13-14', turnedIn: 'Turned in Wed Oct 28, 2026 at 11:20 AM', fileName: 'ITC C503 MIDTERM PROJECT- Macalino..xlsx', extraFiles: ['ITC_C503_MidtermProject_Macalino (1).pdf'], rows: ['Submit the midterm project workbook and final PDF report.', 'Include the required data analysis output.', 'Rename all files with your last name.'] } }] },
    { id: 'mid9', title: 'Midterm Examination', type: 'Exam', attachments: [{ name: 'Midterm Examination screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM EXAMINATION'], due: 'November 5, 2026 1:00 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 15-16', turnedIn: 'Turned in Thu Nov 5, 2026 at 12:58 PM', fileName: 'midterm-exam-macalino.pdf', rows: ['Complete the exam and upload final answer sheet.', 'Use the provided formulas and notes.', 'Submit as PDF.'] } }] }
  ],
  finals: [
    { id: 'final1', title: 'Seatwork No. 1 — Python Lists', type: 'Seatwork', attachments: [{ name: 'Final Term Seatwork No. 1 — Python List screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM SEATWORK NO.1 - PYTHON LIST'], due: 'November 16, 2026 11:00 AM · Multiple submissions allowed', week: 'FINAL TERM WEEK 1-2', turnedIn: 'Turned in Mon Nov 16, 2026 at 10:50 AM', fileName: 'Sample_Data_Macalino.pdf', extraFiles: ['Sample_Data_Macalino.ipynb'], rows: ['Work with Python list operations.', 'Write the final code and output.', 'Submit the PDF and notebook.'] } }] },
    { id: 'final2', title: 'Activity No. 1 — Python Lists & Tuples', type: 'Activity', attachments: [{ name: 'Final Term Activity No. 1 — Python Lists & Tuples screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY NO.1 - PYTHON LISTS & TUPLES'], due: 'November 21, 2026 2:00 PM · Multiple submissions allowed', week: 'FINAL TERM WEEK 3-4', turnedIn: 'Turned in Sat Nov 21, 2026 at 1:46 PM', fileName: 'FinalActivityNo.1_PtyhonListTupples_Macalino (1).pdf', extraFiles: ['FinalActivityNo_1_PythonListTuples_Macalino (1).ipynb'], rows: ['Use Python lists and tuples to solve the exercise.', 'Submit the final notebook and PDF.', 'Keep the output visible.'] } }] },
    { id: 'final3', title: 'Activity No. 2 — Python Lists & Tuples', type: 'Activity', attachments: [{ name: 'Final Term Activity No. 2 — Python Lists & Tuples screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY NO.2 - PYTHON LISTS & TUPLES'], due: 'November 27, 2026 9:45 AM · Multiple submissions allowed', week: 'FINAL TERM WEEK 5-6', turnedIn: 'Turned in Fri Nov 27, 2026 at 9:38 AM', fileName: 'inalTermActivityNo.2_PythonListTuples_Macalino.pdf', extraFiles: ['inalTermActivityNo_2_PythonListTuples_Macalino.ipynb'], rows: ['Complete the Python list and tuple activity.', 'Attach the code and proof of output.', 'Submit your file in PDF form.'] } }] },
    { id: 'final4', title: 'Activity No. 3 — Matplotlib with Pandas', type: 'Activity', attachments: [{ name: 'Final Term Activity No. 3 — Matplotlib with Pandas screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY NO.3 - PYTHON MATPLOTLIB with', 'PANDAS'], due: 'October 30, 2026 10:30 AM · Multiple submissions allowed', week: 'FINAL TERM WEEK 15-16', turnedIn: 'Turned in Fri Oct 30, 2026 at 10:11 AM', pointsText: '25 points possible', fileName: 'FinalTermAct3_Matplotlib_Macalino..pdf', extraFiles: ['FinalTermAct3_Matplotlib_Macalino (1).ipynb', 'FinalTermAct3_Matplotlib_Macalino_.ipynb'], rows: ['Using Google Collab Notebook - Change your Notebook Title to FinalTermAct3_Matplotlib_LastName', '', 'Type and Execute the sample python program (9 charts) given in', '• MatPlotLib Lecture File', '• Python MatPlotlib with Pandas', 'Add Chart Title and XY Title on each Chart', 'Screenshot your code and output', 'Reference materials: PythonMatplotlib.pdf', 'PYTHON Matplotlib with Pandas.pdf'] } }] },
    { id: 'final5', title: 'Final Term Quiz — Python', type: 'Quiz', attachments: [{ name: 'Final Term Quiz — Python screenshot', type: 'image/svg+xml', screen: { title: ['FinalTerm Quiz_Python'], due: 'December 5, 2026 12:00 PM · Multiple submissions allowed', week: 'FINAL TERM WEEK 7-8', turnedIn: 'Turned in Fri Dec 5, 2026 at 11:50 AM', fileName: 'final-term-quiz-python.pdf', rows: ['Answer the Python quiz from the lesson.', 'Submit your screenshot or final answer sheet.', 'Keep the file readable.'] } }] },
    { id: 'final6', title: 'Activity No. 3 — Python Word Cloud', type: 'Activity', attachments: [{ name: 'Final Term Activity — Python Word Cloud screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY — PYTHON WORD CLOUD'], due: 'December 12, 2026 9:30 AM · Multiple submissions allowed', week: 'FINAL TERM WEEK 9-10', turnedIn: 'Turned in Fri Dec 12, 2026 at 9:25 AM', fileName: 'finalTermActivity_Wordcloud_Macalino.pdf', extraFiles: ['_finalTermActivity_Wordcloud_Macalino.ipynb'], rows: ['Create a word cloud project using Python.', 'Submit the notebook and final PDF output.', 'Make sure the output is clear and complete.'] } }] }
  ]
};

const prelimMaterials = {
  prelim2: { name: 'Practice File_Excel Act1- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Practice%20File_Excel%20Act1-%20Macalino.xlsx' },
  prelim3: { name: 'PRELIM ACTIVITY NO.2_ADVANCED EXCEL FORMULAS-Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/PRELIM%20ACTIVITY%20NO.2_ADVANCED%20EXCEL%20FORMULAS-Macalino.xlsx' },
  prelim4: { name: 'PRELIM ACTIVITY NO. 3 _ CREATING CHART-Macalino.pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/PRELIM%20ACTIVITY%20NO.%203%20_%20CREATING%20CHART-Macalino.pdf' },
  prelim5: { name: 'Macalino_PrelimProject_DataAnalysis.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Macalino_PrelimProject_DataAnalysis.xlsx' }
};
const midtermMaterials = {
  mid1: { name: 'Midterm Activity No.1 - Grouped Frequency Distribution Table- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Midterm%20Activity%20No.1%20-%20Grouped%20Frequency%20Distribution%20Table-%20Macalino.xlsx' },
  mid3: { name: 'MIDTERM ACTIVITY NO.2 - STATISTICAL CHART- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/MIDTERM%20ACTIVITY%20NO.2%20-%20STATISTICAL%20CHART-%20Macalino.xlsx' },
  mid6: [
    { name: 'MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND PIVOT CHART- Macalino.pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/MIDTERM%20ACTIVITY%20NO.3%20-%20CREATING%20PIVOT%20TABLE%20AND%20PIVOT%20CHART-%20Macalino.pdf' },
    { name: 'Scenario 1- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Scenario%201-%20Macalino.xlsx' }
  ],
  mid8: [
    { name: 'ITC C503 MIDTERM PROJECT- Macalino..xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/ITC%20C503%20MIDTERM%20PROJECT-%20Macalino..xlsx' },
    { name: 'ITC_C503_MidtermProject_Macalino (1).pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/ITC_C503_MidtermProject_Macalino%20%281%29.pdf' }
  ]
};
const finalMaterials = {
  final1: [
    { name: 'Sample_Data_Macalino.ipynb', type: 'application/x-ipynb+json', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Sample_Data_Macalino.ipynb' },
    { name: 'Sample_Data_Macalino.pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/Sample_Data_Macalino.pdf' }
  ],
  final2: [
    { name: 'FinalActivityNo_1_PythonListTuples_Macalino (1).ipynb', type: 'application/x-ipynb+json', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/FinalActivityNo_1_PythonListTuples_Macalino%20%281%29.ipynb' },
    { name: 'FinalActivityNo.1_PtyhonListTupples_Macalino (1).pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/FinalActivityNo.1_PtyhonListTupples_Macalino%20%281%29.pdf' }
  ],
  final3: [
    { name: 'inalTermActivityNo_2_PythonListTuples_Macalino.ipynb', type: 'application/x-ipynb+json', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/inalTermActivityNo_2_PythonListTuples_Macalino.ipynb' },
    { name: 'inalTermActivityNo.2_PythonListTuples_Macalino.pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/inalTermActivityNo.2_PythonListTuples_Macalino.pdf' }
  ],
  final4: [
    { name: 'FinalTermAct3_Matplotlib_Macalino (1).ipynb', type: 'application/x-ipynb+json', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/FinalTermAct3_Matplotlib_Macalino%20%281%29.ipynb' },
    { name: 'FinalTermAct3_Matplotlib_Macalino_.ipynb', type: 'application/x-ipynb+json', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/FinalTermAct3_Matplotlib_Macalino_.ipynb' },
    { name: 'FinalTermAct3_Matplotlib_Macalino..pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/FinalTermAct3_Matplotlib_Macalino..pdf' }
  ],
  final6: [
    { name: '_finalTermActivity_Wordcloud_Macalino.ipynb', type: 'application/x-ipynb+json', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/_finalTermActivity_Wordcloud_Macalino.ipynb' },
    { name: 'finalTermActivity_Wordcloud_Macalino.pdf', type: 'application/pdf', src: 'ITE%20PORTFOLIO-%20MACALINO/assets/finalTermActivity_Wordcloud_Macalino.pdf' }
  ]
};
Object.values(activities).flat().forEach(activity => {
  if (prelimMaterials[activity.id]) activity.attachments = [...(activity.attachments || []), prelimMaterials[activity.id]];
  const midtermFiles = midtermMaterials[activity.id];
  if (midtermFiles) activity.attachments = [...(activity.attachments || []), ...(Array.isArray(midtermFiles) ? midtermFiles : [midtermFiles])];
  if (finalMaterials[activity.id]) activity.attachments = [...(activity.attachments || []), ...finalMaterials[activity.id]];
});

const DB_NAME = 'portfolioDB';
const STORE_NAME = 'files';
let db;
let currentActivityId = null;
let previewUrls = [];
let modalTrigger = null;

function openDB() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('This browser does not support local file storage.'));
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = event => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) database.createObjectStore(STORE_NAME, { keyPath: 'activityId' });
    };
    request.onsuccess = event => { db = event.target.result; resolve(); };
    request.onerror = () => reject(request.error);
  });
}

function getFiles(activityId) {
  return new Promise((resolve, reject) => {
    const request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(activityId);
    request.onsuccess = () => resolve(request.result?.files || []);
    request.onerror = () => reject(request.error);
  });
}

function renderCards() {
  let index = 0;
  const totalActivities = Object.values(activities).reduce((sum, items) => sum + items.length, 0);
  Object.entries(activities).forEach(([section, items]) => {
    const grid = document.getElementById(`${section}-grid`);
    items.forEach(item => {
      index += 1;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'card card-reveal';
      card.style.setProperty('--card-delay', `${Math.min((index - 1) % 9, 8) * 55}ms`);
      card.dataset.activityId = item.id;
      card.setAttribute('aria-label', `Open ${item.title}`);
      card.innerHTML = `<span class="card-top"><span class="card-number">${String(index).padStart(2, '0')} / ${totalActivities}</span><span class="card-type">${item.type}</span></span><span class="card-title"></span><span class="card-bottom"><span class="card-status">NO FILES YET</span><span class="card-arrow" aria-hidden="true">↗</span></span>`;
      card.querySelector('.card-title').textContent = item.title;
      card.addEventListener('click', () => openModal(section, item));
      grid.appendChild(card);
    });
  });
}

function clearPreview() {
  document.getElementById('preview-area').replaceChildren();
  document.getElementById('file-list').replaceChildren();
  previewUrls.forEach(url => URL.revokeObjectURL(url));
  previewUrls = [];
}

async function openModal(section, item) {
  modalTrigger = document.activeElement;
  currentActivityId = item.id;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-category').textContent = `${section.toUpperCase()} · ${item.type.toUpperCase()}`;
  document.getElementById('activity-modal').classList.remove('hidden');
  document.body.classList.add('modal-open');
  clearPreview();
  await refreshFileList();
  document.getElementById('modal-close').focus();
}

function closeModal() {
  document.getElementById('activity-modal').classList.add('hidden');
  document.body.classList.remove('modal-open');
  currentActivityId = null;
  clearPreview();
  modalTrigger?.focus();
  modalTrigger = null;
}

async function refreshFileList() {
  if (!currentActivityId) return;
  try {
    const activity = Object.values(activities).flat().find(item => item.id === currentActivityId);
    const savedFiles = await getFiles(currentActivityId);
    renderFileList([...(activity?.attachments || []), ...savedFiles]);
  }
  catch (error) { console.error(error); }
}

function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);
}

function createScreenshotData(screen) {
  const fileNames = [screen.fileName, ...(screen.extraFiles || [])].filter(Boolean);
  const height = Math.max(430, 385 + screen.rows.length * 23 + (screen.showWork === false ? 0 : fileNames.length * 48));
  const heading = screen.title.map((line, index) => `<text x="24" y="${120 + index * 31}" class="title">${escapeXml(line)}</text>`).join('');
  const titleOffset = (screen.title.length - 1) * 31;
  const dueY = 145 + titleOffset;
  const weekY = 188 + titleOffset;
  const instructionsY = 228 + titleOffset;
  const rows = screen.rows.map((line, index) => {
    const isWarning = screen.warning && /DO NOT|mouse activity|deduction|^click\./i.test(line.trim());
    return `<text x="${line.startsWith('  ') ? 50 : 24}" y="${instructionsY + 25 + index * 23}" class="${isWarning ? 'warning' : 'body'}">${escapeXml(line.trimStart())}</text>`;
  }).join('');
  const workY = instructionsY + 42 + screen.rows.length * 23;
  const files = fileNames.map((fileName, index) => `<rect x="24" y="${workY + 11 + index * 48}" width="690" height="41" rx="3" fill="#3b3b3b" stroke="#888"/><text x="62" y="${workY + 37 + index * 48}" class="file">▣　${escapeXml(fileName)}</text>`).join('');
  const work = screen.showWork === false ? '' : `<text x="24" y="${workY}" class="small" font-weight="bold">My work</text>${files}<text x="36" y="${workY + 30 + fileNames.length * 48}" style="font-size:14px;fill:#747474">♢　Attach　＋　New</text>`;
  const turnLabel = screen.returned ? 'Returned Thu, Sep 10, 10:27 AM' : screen.turnedIn;
  const buttonText = screen.returned ? 'Turn in again' : 'Undo turn in';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1486" height="${height}" viewBox="0 0 1486 ${height}"><rect width="100%" height="100%" fill="#252525"/><style>text{font-family:Arial,Helvetica,sans-serif;fill:#f3f3f3}.body{font-size:14px}.title{font-size:23px;font-weight:bold}.meta{font-size:14px;fill:#b9c9e6}.small{font-size:13px}.warning{font-size:14px;font-weight:bold;fill:#e64955}.file{font-size:13px;font-weight:bold}</style><path d="M35 39l-6 6 6 6" fill="none" stroke="#f3f3f3" stroke-width="1.5"/><text x="48" y="49" style="fill:#8da5ff;font-size:14px">Back</text><text x="1128" y="49" style="font-size:12px;font-style:italic">${escapeXml(turnLabel)}</text><rect x="1345" y="28" width="108" height="32" rx="5" fill="#5654b9"/><text x="1362" y="49" class="small">${buttonText}</text>${heading}<text x="24" y="${dueY}" class="meta">Due ${escapeXml(screen.due)}</text><text x="24" y="${weekY}" class="meta">▧　${escapeXml(screen.week)}</text><text x="738" y="${dueY - 33}" class="small">Points</text><text x="738" y="${dueY - 13}" class="body">${escapeXml(screen.pointsText || '25 points possible')}</text><text x="24" y="${instructionsY}" class="small" font-weight="bold">Instructions</text>${rows}${work}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function renderFileList(files) {
  const list = document.getElementById('file-list');
  const area = document.getElementById('preview-area');
  clearPreview();
  if (!files.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-preview';
    empty.textContent = 'No PDF or image has been saved for this activity yet.';
    area.appendChild(empty);
    return;
  }
  list.replaceChildren();
  files.forEach(file => {
    const extension = file.name.split('.').pop().toLowerCase();
    const isImage = file.type?.startsWith('image/') || ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp'].includes(extension);
    const isPdf = file.type === 'application/pdf' || extension === 'pdf';
    if (isImage || isPdf) {
      const url = file.src || (file.screen ? createScreenshotData(file.screen) : URL.createObjectURL(file.blob));
      if (!file.src && !file.screen) previewUrls.push(url);
      const panel = document.createElement('article');
      panel.className = 'preview-card';
      const heading = document.createElement('h4');
      heading.textContent = file.name;
      panel.appendChild(heading);
      if (isImage) {
        const image = document.createElement('img');
        image.src = url;
        image.alt = file.name;
        panel.appendChild(image);
      } else {
        const frame = document.createElement('iframe');
        frame.src = url;
        frame.title = `PDF preview: ${file.name}`;
        panel.appendChild(frame);
      }
      area.appendChild(panel);
      return;
    }
    const row = document.createElement('li');
    const name = document.createElement('span');
    name.className = 'file-name-button';
    name.textContent = file.name;
    const download = document.createElement('button');
    download.type = 'button';
    download.textContent = 'Download';
    download.addEventListener('click', () => downloadFile(file));
    row.append(name, download);
    list.appendChild(row);
  });
  if (!area.childElementCount) {
    const empty = document.createElement('p');
    empty.className = 'empty-preview';
    empty.textContent = 'No PDF or image has been saved for this activity yet.';
    area.appendChild(empty);
  }
}

function downloadFile(file) {
  const url = file.src || URL.createObjectURL(file.blob);
  const link = document.createElement('a'); link.href = url; link.download = file.name; link.click();
  if (!file.src) setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function updateDashboard() {
  const all = Object.entries(activities);
  const counts = { uploaded: 0, files: 0, sections: {} };
  for (const [section, items] of all) {
    let uploaded = 0;
    for (const item of items) {
      const files = await getFiles(item.id);
      const fileCount = files.length + (item.attachments?.length || 0);
      if (fileCount) uploaded += 1;
      counts.files += fileCount;
      const card = document.querySelector(`[data-activity-id="${item.id}"]`);
      if (card) {
        const status = card.querySelector('.card-status');
        status.textContent = fileCount ? `${fileCount} FILE${fileCount === 1 ? '' : 'S'} READY` : 'NO FILES YET';
        status.classList.toggle('has-files', fileCount > 0);
      }
    }
    counts.uploaded += uploaded;
    counts.sections[section] = Math.round(uploaded / items.length * 100);
    const progress = counts.sections[section];
    document.getElementById(`${section}-progress`).textContent = `${progress}%`;
    document.getElementById(`${section}-progress-bar`).style.width = `${progress}%`;
  }
  const total = Object.values(activities).reduce((sum, items) => sum + items.length, 0);
  const percentage = Math.round(counts.uploaded / total * 100);
  document.getElementById('total-activities').textContent = total;
  document.getElementById('uploaded-activities').textContent = counts.uploaded;
  document.getElementById('total-files').textContent = counts.files;
  document.getElementById('overall-progress').textContent = `${percentage}%`;
  document.getElementById('overall-progress-bar').style.width = `${percentage}%`;
}

function initNavigation() {
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -58% 0px' });
  sections.forEach(section => observer.observe(section));
  document.getElementById('explore-btn')?.addEventListener('click', () => document.getElementById('prelims').scrollIntoView({ behavior: 'smooth' }));
}

function initSearch() {
  const input = document.getElementById('activity-search');
  const result = document.getElementById('search-results');
  const cards = [...document.querySelectorAll('.card')];
  const total = cards.length;
  result.textContent = `Showing all ${total} activities`;
  const emptyStates = [...document.querySelectorAll('.card-grid')].map(grid => {
    const message = document.createElement('p');
    message.className = 'no-results';
    message.textContent = 'No matching activities in this term.';
    message.hidden = true;
    grid.appendChild(message);
    return { grid, message };
  });
  input.addEventListener('input', () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const section = card.closest('.work-section')?.id || '';
      const searchable = `${card.querySelector('.card-title').textContent} ${card.querySelector('.card-type').textContent} ${section}`.toLocaleLowerCase();
      const matches = !query || searchable.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    emptyStates.forEach(({ grid, message }) => {
      message.hidden = grid.querySelectorAll('.card:not([hidden])').length > 0 || !query;
    });
    result.textContent = query ? `${visible} of ${total} ${visible === 1 ? 'activity' : 'activities'} found` : `Showing all ${total} activities`;
  });
  document.addEventListener('keydown', event => {
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      input.focus();
    }
  });
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { elements.forEach(el => el.classList.add('in-view')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  elements.forEach(element => observer.observe(element));
}

function initCardReveal() {
  const cards = [...document.querySelectorAll('.card-reveal')];
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach(card => card.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
  cards.forEach(card => observer.observe(card));
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  let framePending = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    framePending = false;
  };
  const requestUpdate = () => {
    if (!framePending) { window.requestAnimationFrame(update); framePending = true; }
  };
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  update();
}

function initModal() {
  const modal = document.getElementById('activity-modal');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', event => {
    if (modal.classList.contains('hidden')) return;
    if (event.key === 'Escape') { closeModal(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll('button:not(:disabled), input:not(:disabled), label[tabindex="0"], [tabindex]:not([tabindex="-1"])')].filter(element => !element.hidden);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
}

async function init() {
  renderCards();
  initNavigation(); initReveal(); initCardReveal(); initScrollProgress(); initModal(); initSearch();
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => document.body.classList.add('home-ready')));
  try { await openDB(); await updateDashboard(); }
  catch (error) { console.error('Portfolio storage could not be opened.', error); }
}

document.addEventListener('DOMContentLoaded', init);
