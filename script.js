const activities = {
  prelims: [
    { id: 'prelim1', title: 'Seatwork No. 1 — Descriptive Statistics', type: 'Seatwork', attachments: [
      { name: 'Prelim SW1- Macalino.pdf', type: 'application/pdf', src: 'assets/Prelim%20SW1-%20Macalino.pdf' },
      { name: 'Prelim Seatwork No. 1 - assignment screenshot.svg', type: 'image/svg+xml', src: 'assets/prelim-seatwork-screenshot.svg' }
    ] },
    { id: 'prelim2', title: 'Activity No. 1 — Conditional Formatting & Filtering', type: 'Activity', attachments: [{ name: 'Prelim Activity No. 1 — Conditional Formatting & Filtering screenshot', type: 'image/svg+xml', screen: { title: ['PRELIM ACTIVITY NO.1_ CONDITIONAL FORMATTING', 'FILTERING'], due: 'July 24, 2026 10:30 AM · Multiple submissions allowed', week: 'PRELIM WEEK 1-3 INTRODUCTION TO DATA SCIENCE', turnedIn: 'Turned in Fri Jul 24, 2026 at 10:09 AM', fileName: 'Practice File_Excel Act1- Macalino.xlsx', rows: ['Save your Excel File As PrelimActivityNo.1_FormattingCells_LastName', 'Make it sure that you applied the following', '- Conditional Formatting', '  ○ Highlight Cells Rules', '  ○ top / Bottom Rules', '  ○ Data Bars', '  ○ Color Scales', '  ○ Duplicate Values', '- Insert and Copy New Columns', '- Create New Sheet Tabs', '- Filter Records by Building', '  ○ copy the filtered record in new sheet tab then rename and change color of the sheet tab', '- Sorting Records', '  ○ LastName in Ascending order', '  ○ Listing Price in Descending order', '- Formatting the Cells', '  ○ Alignment - Left Aligned (Names)', '  ○ Currency Format - Peso sign with two decimal Places - Listing Price', '- Upload your Excel File'] } }] },
    { id: 'prelim3', title: 'Activity No. 2 — Advanced Excel Formulas', type: 'Activity', attachments: [{ name: 'Prelim Activity No. 2 — Advanced Excel Formulas screenshot', type: 'image/svg+xml', screen: { title: ['PRELIM ACTIVITY NO.2_ADVANCED EXCEL FORMULAS'], due: 'July 31, 2026 10:30 AM · Multiple submissions allowed', week: 'PRELIM WEEK 1-3 INTRODUCTION TO DATA SCIENCE', turnedIn: 'Turned in late Fri Jul 31, 2026 at 10:31 AM', fileName: 'PRELIM ACTIVITY NO.2_ADVANCED EXCEL FORMULAS-Macalino.xlsx', rows: ['SUBMIT YOUR EXCEL FILE'] } }] },
    { id: 'prelim4', title: 'Activity No. 3 — Creating Charts', type: 'Activity', attachments: [{ name: 'Prelim Activity No. 3 — Creating Chart screenshot', type: 'image/svg+xml', screen: { title: ['PRELIM ACTIVITY NO. 3 _ CREATING CHART'], due: 'August 14, 2026 10:30 AM · Multiple submissions allowed', week: 'PRELIM WEEK 4-5', turnedIn: 'Turned in Fri Aug 14, 2026 at 9:59 AM', fileName: 'PRELIM ACTIVITY NO. 3 _ CREATING CHART-Macalino.pdf', rows: ['INSTRUCTIONS', 'Download the Excel File GroupedFrequencyDistribution Chart', 'Use this data in Creating Charts', '  -Create Four different Charts', '  -Use Lower Class Limits as X- axis data', '  -Frequency as your Y - axis data', '  -for Pie Chart - Compute the percentage of each frequency', '  -Add Chart Elements for each Chart - Title, Axis Title, Data Label, Legend', '', 'On Word Document', '  -Screenshots of your four different charts', '  -Add Header: ITC C503- PRELIM ACTIVITY CREATING CHARTS', '  -Add Footer: Prepared By: Complete Name, Section', '  -Save your File As: Prelim Activity No.3_CreatingChart_LastName', '  -Convert your file in PDF type', '  -Submit your PDF file'] } }] },
    { id: 'prelim5', title: 'Prelim Project — Data Analysis Using Excel', type: 'Project', attachments: [{ name: 'Prelim Project — Data Analysis Using Excel screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 PRELIM PROJECT- DATA ANALYSIS USING EXCEL'], due: 'August 24, 2026 11:59 PM · Multiple submissions allowed', week: 'PRELIM WEEK 6 - PRELIM PROJECT AND PRELIM EXAMINATION', turnedIn: 'Returned Thu, Sep 10, 10:27 AM', fileName: 'Macalino_PrelimProject_DataAnalysis.xlsx', rows: ['›　Instructions', '›　Reference materials'], returned: true } }] },
    { id: 'prelim6', title: 'Prelim Quiz No. 1', type: 'Quiz', attachments: [{ name: 'Prelim Quiz No. 1 screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503- PRELIM QUIZ NO.1'], due: 'September 1, 2026 11:59 PM · 1 submission allowed', week: 'PRELIM WEEK 6 - PRELIM PROJECT AND PRELIM EXAMINATION', turnedIn: 'Turned in Tue Sep 1, 2026 at 8:55 AM', fileName: 'ITC C503- PRELIM QUIZ NO.1 (2627_1S_COL_ITC C503-303 | ITE ELECTIVE 2)', rows: ['INSTRUCTIONS:', '', 'DO NOT PRESS ALT+TAB OR CLICK ON ANY OTHER WINDOW. Doing so will be detected, and all mouse', 'actions performed during the assessment will be tracked and recorded.', '', '- Any mouse activity outside the assessment window will result in a deduction of 5 points for every', 'click.'], warning: true } }] },
    { id: 'prelim7', title: 'Prelim Quiz No. 2', type: 'Quiz', attachments: [{ name: 'Prelim Quiz No. 2 screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 PRELIM QUIZ NO.2'], due: 'September 2, 2026 11:59 PM · 1 submission allowed', week: 'PRELIM WEEK 6 - PRELIM PROJECT AND PRELIM EXAMINATION', turnedIn: 'Turned in Tue Sep 1, 2026 at 9:05 AM', fileName: 'ITC C503 PRELIM QUIZ NO.2 (2627_1S_COL_ITC C503-303 | ITE ELECTIVE 2)', rows: ['Instructions', 'None'] } }] },
    { id: 'prelim8', title: 'Prelim Examination', type: 'Exam', attachments: [{ name: 'Prelim Examination screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503- PRELIM EXAMINATION'], due: 'September 2, 2026 11:59 PM · 1 submission allowed', week: 'PRELIM WEEK 6 - PRELIM PROJECT AND PRELIM EXAMINATION', turnedIn: 'Turned in Tue Sep 1, 2026 at 9:35 AM', fileName: 'ITC C503- PRELIM EXAMINATION (2627_1S_COL_ITC C503-303 | ITE ELECTIVE 2)', rows: ['INSTRUCTIONS:', '', 'DO NOT PRESS ALT+TAB OR CLICK ON ANY OTHER WINDOW. Doing so will be detected, and all mouse', 'actions performed during the assessment will be tracked and recorded.', '', '- Any mouse activity outside the assessment window will result in a deduction of 5 points for every', 'click.'], warning: true } }] }
  ],
  midterms: [
    { id: 'mid1', title: 'Activity No. 1 — Grouped Frequency Distribution Table', type: 'Activity', attachments: [{ name: 'Midterm Activity No. 1 — Grouped Frequency Distribution screenshot', type: 'image/svg+xml', screen: { title: ['Midterm Activity No.1 - Grouped Frequency Distribution Table'], due: 'September 11, 2026 10:30 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 7 - 8 PROBABILITY and Frequency Distribution Table', turnedIn: 'Turned in late Fri Sep 11, 2026 at 10:30 AM', pointsText: '25 points possible', fileName: 'Midterm Activity No.1 - Grouped Frequency Distribution Table- Macalino.xlsx', rows: ['Save your Excel File As: MidActivityNo.1_Lastname', '- Make it sure to type the correct formulas on each sheet tab (Categorical, Grouped, Prob2)', '- Format your table with', '  ○ Merged Cells', '  ○ Wraptext', '  ○ Border lines', '  ○ Alignment - Center', '  ○ Change Font size and Font style', '- Upload your Excel File'] } }] },
    { id: 'mid2', title: 'Assignment No. 1 — Probability', type: 'Assignment', attachments: [{ name: 'Midterm Assignment No. 1 — Probability screenshot', type: 'image/svg+xml', screen: { title: ['Midterm Assignment No.1 - Probability'], due: 'September 11, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 7 - 8 PROBABILITY and Frequency Distribution Table', turnedIn: 'Turned in Thu Sep 10, 2026 at 2:02 PM', pointsText: '25 points possible', fileName: '1.0 Macalino.jpg', extraFiles: ['2.0 Macalino.jpg'], rows: ['Instructions:', '- On a Yellow Pad, Write your Step by Step Solution of the problems given on the attached file below.', 'TAKE NOTE:', '- It should be Hand Written', '- Write the Step by Step Solution', '- Box your Final Answer on each question', '- Answer should be in the lowest term', '- Scan or take picture of your Paper Solution then upload', 'Reference materials: Probability Midterm Assignment.pdf'] } }] },
    { id: 'mid3', title: 'Activity No. 2 — Statistical Charts', type: 'Activity', attachments: [{ name: 'Midterm Activity No. 2 — Statistical Chart screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM ACTIVITY NO.2 - STATISTICAL CHART'], due: 'September 18, 2026 10:30 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 9 - STATISTICAL GRAPH', turnedIn: 'Turned in Fri Sep 18, 2026 at 9:25 AM', pointsText: '25 points possible', fileName: 'MIDTERM ACTIVITY NO.2 - STATISTICAL CHART- Macalino.xlsx', rows: ['INSTRUCTIONS:', '• Open your Midterm Activity No.1 - Grouped Frequency Distribution Table', '• use your table to construct the following statistical chart', '  ○ Histogram - Y axis - Frequency, X axis - Class Boundaries', '  ○ Frequency Polygon - Y axis - Frequency, X - axis Class Midpoints', '  ○ Ogive - Y-axis Cumulative Frequency, X - Axis Class Boundaries', '  ○ ADD Data Labels on each chart', '  ○ ADD Chart Titles, Axis Titles (X,Y), Series Name', '• On New Sheet Tab Move your 3 Charts Created', '• Rename the New Sheet Tab to StatisticalCharts', '• Save your Excel File As MidActivity2_StatisticalCharts_LastName', '• Upload your Excel file'] } }] },
    { id: 'mid4', title: 'Midterm Quiz — Frequency Distribution Table', type: 'Quiz', attachments: [{ name: 'Midterm Quiz — Frequency Distribution Table screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 - Midterm Quiz Frequency Distribution Table'], due: 'September 18, 2026 10:30 AM · 1 submission allowed', week: 'MIDTERM WEEK 9 - STATISTICAL GRAPH', turnedIn: 'Returned Fri, Oct 2, 12:37 PM', returned: true, pointsText: '29 / 35', fileName: 'ITC C503 - Midterm Quiz Frequency Distribution Table (2627_1S_COL_ITC C503-303 | ITE ELECTIVE 2)', rows: ['Instructions'] } }] },
    { id: 'mid5', title: 'I.T. Organization Membership', type: 'Community', attachments: [{ name: 'I.T. Organization Membership screenshot', type: 'image/svg+xml', screen: { title: ['I.T ORGANIZATION MEMBERSHIP'], due: 'September 18, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 9 - STATISTICAL GRAPH', turnedIn: 'Turned in Thu Sep 17, 2026 at 6:53 PM', pointsText: '25 points possible', fileName: 'Screenshot 2026-09-16 212055.png', extraFiles: ['org- macalino.jpg'], rows: ['Please fill up the registrations forms below:', 'JPCS - JRU OFFICERS 2ND BATCH APPLICATION', 'JBEC Membership Recruitment Form AY 26-27', 'ENC-JRU Recruitment Form', '', 'Also please follow their respective FB Page to keep you Updated', 'https://www.facebook.com/JPCSRJ JPCS', '(19) Facebook - JBEC', '(19) Facebook - ENC JRU CAMPUS', '', 'Also Please Visit their Booth on the Quadrangle Area for gimmicks and give aways.', 'For Submission:', '• Screenshots of Membership registration', '• and photo taken at the booth'] } }] },
    { id: 'mid6', title: 'Activity No. 3 — Pivot Tables & Pivot Charts', type: 'Activity', attachments: [{ name: 'Midterm Activity No. 3 — Creating Pivot Table and Pivot Chart screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND', 'PIVOT CHART'], due: 'September 25, 2026 10:30 AM · Multiple submissions allowed', week: 'MIDTERM WEEK 10-11 PIVOT TABLE, PIVOT CHART & EXCEL SLICER', turnedIn: 'Turned in Fri Sep 25, 2026 at 9:52 AM', pointsText: '25 points possible', fileName: 'MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND PIVOT CHART- Macalino.pdf', extraFiles: ['Scenario 1- Macalino.xlsx'], rows: ['INSTRUCTIONS', '- Read and Do the Instructions Given on the attached file', '- On One Document Have a print screen of the following', '  ○ Pivot Table', '  ○ Pivot Chart', '    ▪ Display all', '    ▪ Display at least two options from filter list', '  ○ Screenshots to be submitted', '    ▪ 5 Pivot Tables 10 Charts', '  ○ Save your File As MidActivity_PivotTableChart_LastName', '  ○ Convert your file in PDF type then Upload', 'Reference materials: CREATING PIVOT TABLE AND CHARTS INSTRUCTIONS.pdf'] } }] },
    { id: 'mid7', title: 'Midterm Quiz No. 2', type: 'Quiz', attachments: [{ name: 'Midterm Quiz No. 2 screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 MIDTERM QUIZ NO.2'], due: 'September 25, 2026 11:59 PM · 1 submission allowed', week: 'MIDTERM WEEK 10-11 PIVOT TABLE, PIVOT CHART & EXCEL SLICER', turnedIn: 'Turned in Fri Sep 25, 2026 at 10:17 AM', pointsText: '20 points possible', fileName: 'ITC C503 MIDTERM QUIZ NO.2 (2627_1S_COL_ITC C503-303 | ITE ELECTIVE 2)', rows: ['Instructions', 'None'] } }] },
    { id: 'mid8', title: 'Midterm Project', type: 'Project', attachments: [{ name: 'Midterm Project screenshot', type: 'image/svg+xml', screen: { title: ['ITC C503 MIDTERM PROJECT'], due: 'October 4, 2026 11:59 PM · Multiple submissions allowed · Closes October 14, 2026 5:00 PM', week: 'MIDTERM WEEK 12 - MIDTERM PROJECT AND MIDTERM EXAM', turnedIn: 'Turned in Wed Sep 30, 2026 at 8:15 PM', pointsText: '0 points possible', fileName: 'ITC_C503_MidtermProject_Macalino.pdf', extraFiles: ['ITC C503 MIDTERM PROJECT- Macalino..xlsx'], rows: ['INSTRUCTIONS:', '- Read and Follow the Instructions Given on the attach File', 'TAKE NOTE:', '- submit the complete Midterm Project Solutions and Answer for each problem', '- INCOMPLETE ANSWERS WILL RECEIVE A FAILED GRADE', 'Reference materials: ITC C503 MIDTERM PROJECT INSTRUCTIONS.pdf', 'Excel_PivotTable_Dashboard.xlsx'] } }] },
    { id: 'mid9', title: 'Midterm Examination', type: 'Exam', attachments: [{ name: 'Midterm Examination screenshot', type: 'image/svg+xml', screen: { title: ['MIDTERM EXAMINATION'], due: 'October 3, 2026 11:59 PM · Multiple submissions allowed', week: 'MIDTERM WEEK 12 - MIDTERM PROJECT AND MIDTERM EXAM', turnedIn: 'Turned in late Sun Oct 4, 2026 at 9:46 AM', pointsText: '40 points possible', fileName: '', rows: ['FACE TO FACE WRITTEN MIDTERM EXAM'], showWork: false } }] }
  ],
  finals: [
    { id: 'final1', title: 'Seatwork No. 1 — Python Lists', type: 'Seatwork', attachments: [{ name: 'Final Term Seatwork No. 1 — Python List screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM SEATWORK NO.1 - PYTHON LIST'], due: 'October 16, 2026 10:00 AM · Multiple submissions allowed · Closes October 16, 2026 10:30 AM', week: 'FINAL TERM WEEK 14- PYTHON AND GOOGLE COLAB', turnedIn: 'Turned in Fri Oct 16, 2026 at 9:43 AM', pointsText: 'No points', fileName: 'Sample_Data_Macalino.ipynb', extraFiles: ['Sample_Data_Macalino.pdf'], rows: ['Save your file As: FinalSWNo1_PythonList_LastName', 'Convert and Upload PDF file'] } }] },
    { id: 'final2', title: 'Activity No. 1 — Python Lists & Tuples', type: 'Activity', attachments: [{ name: 'Final Term Activity No. 1 — Python Lists & Tuples screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY NO.1_PythonListTuples'], due: 'October 23, 2026 10:30 AM · Multiple submissions allowed', week: 'FINAL TERM WEEK 14- PYTHON AND GOOGLE COLAB', turnedIn: 'Turned in Wed Oct 21, 2026 at 1:06 PM', pointsText: '25 points possible', fileName: 'FinalActivityNo.1_PythonListTuples_Macalino.pdf', extraFiles: ['FinalActivityNo.1_PythonListTuples_Macalino.ipynb'], rows: ['FINAL TERM ACTIVITY NO.1 - PYTHON LIST & TUPLES', 'Expected learning outcome: After completing these exercises, students should be able to create, access,', 'modify, search, sort, and process Python lists and tuples, and apply these data structures to solve basic', 'programming problems.', 'General Instructions', '• Use Google Colab Notebook to encode all the 20 Sample Python codes given on the attached file', '• Rename your Google Colab Notebook to FinalActivityNo.1_PythonListTuples_LastName', '• Encode each code given then display the required output', '• Take a screenshot of your source code and program output for each exercise include your Google Colab', '  Notebook Name in your print screen', '• On one document copy and paste your 20 print screen for codes and outputs', '• Save your File As: FinalActivityNo.1_PythonListTuples_LastName', '• Convert your File in PDF type', '• Submit your completed Laboratory exercises in PDF format', 'Reference materials: Laboratory Activity PythonListTuples Sample Codes.pdf'] } }] },
    { id: 'final3', title: 'Activity No. 2 — Python Lists & Tuples', type: 'Activity', attachments: [{ name: 'Final Term Activity No. 2 — Python Lists & Tuples screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY NO.2_PythonListTuples'], due: 'October 27, 2026 11:59 PM · Multiple submissions allowed', week: 'FINAL TERM WEEK 15-16', turnedIn: 'Turned in Fri Oct 23, 2026 at 10:32 AM', pointsText: '25 points possible', fileName: 'FinalTermActivityNo.2_PythonListTuples_Macalino.pdf', extraFiles: ['FinalTermActivityNo_2_PythonListTuples_Macalino.ipynb'], rows: ['Use Google Colab Notebook to code and run your output', 'Rename your Google Colab Notebook to FinalTermActivityNo.2_PythonListTuples_lastName', 'Have a PrintScreen of your code and output', 'Submit the document with your Print screen of code and output', 'Submit your Google Colab Notebook file', 'Reference materials: PythonListTuples_FinalTermActivityNo.2.pdf'] } }] },
    { id: 'final4', title: 'Activity No. 3 — Matplotlib with Pandas', type: 'Activity', attachments: [{ name: 'Final Term Activity No. 3 — Matplotlib with Pandas screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY NO.3 - PYTHON MATPLOTLIB with', 'PANDAS'], due: 'October 30, 2026 10:30 AM · Multiple submissions allowed', week: 'FINAL TERM WEEK 15-16', turnedIn: 'Turned in Fri Oct 30, 2026 at 10:11 AM', pointsText: '25 points possible', fileName: 'FinalTermAct3_Matplotlib_Macalino.pdf', extraFiles: ['FinalTermAct3_Matplotlib_Macalino_.ipynb', 'FinalTermAct3_Matplotlib_Macalino (1).ipynb'], rows: ['Using Google Collab Notebook - Change your Notebook Title to FinalTermAct3_Matplotlib_LastName', '', 'Type and Execute the sample python program (9 charts) given in', '• MatPlotLib Lecture File', '• Python MatPlotlib with Pandas', 'Add Chart Title and XY Title on each Chart', 'Screenshot your code and output', 'Reference materials: PythonMatplotlib.pdf', 'PYTHON Matplotlib with Pandas.pdf'] } }] },
    { id: 'final5', title: 'Final Term Quiz — Python', type: 'Quiz', attachments: [{ name: 'Final Term Quiz — Python screenshot', type: 'image/svg+xml', screen: { title: ['FinalTerm Quiz_Python'], due: 'November 6, 2026 10:30 AM · 1 submission allowed', week: 'FINAL TERM WEEK 18 - PROJECT AND FINAL EXAM', turnedIn: 'Turned in Fri Nov 6, 2026 at 10:23 AM', pointsText: '20 points possible', fileName: 'FinalTerm Quiz_Python (2627_1S_COL_ITC C503-303 | ITE ELECTIVE 2)', rows: ['Instructions', 'None'] } }] },
    { id: 'final6', title: 'Activity No. 3 — Python Word Cloud', type: 'Activity', attachments: [{ name: 'Final Term Activity — Python Word Cloud screenshot', type: 'image/svg+xml', screen: { title: ['FINAL TERM ACTIVITY 3_PYTHON WORD CLOUD'], due: 'Due yesterday at 11:59 PM · Multiple submissions allowed', week: 'FINAL TERM WEEK 17- PYTHON WORD CLOUD', turnedIn: 'Turned in Mon Nov 9, 2026 at 9:54 PM', pointsText: '25 points possible', fileName: 'finalTermActivity_Wordcloud_Macalino.pdf', extraFiles: ['_finalTermActivity_Wordcloud_Macalino.ipynb'], rows: ['INSTRUCTIONS:', '- Use Google colab notebook', '- Change the Notebook Name as: finalTermActivity_Wordcloud_LastName', '- Encode the Run the following slides', '  ○ WordCloud_Exercise', '  ○ Add Mask Figure (WordCloud exercise)', '  ○ WordCloudSlides (Slides 34 to 36)', '- Expected output (4 outputs)'] } }] },
  ]
};

const prelimMaterials = {
  prelim2: { name: 'Practice File_Excel Act1- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/Practice%20File_Excel%20Act1-%20Macalino.xlsx' },
  prelim3: { name: 'PRELIM ACTIVITY NO.2_ADVANCED EXCEL FORMULAS-Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/PRELIM%20ACTIVITY%20NO.2_ADVANCED%20EXCEL%20FORMULAS-Macalino.xlsx' },
  prelim4: { name: 'PRELIM ACTIVITY NO. 3 _ CREATING CHART-Macalino.pdf', type: 'application/pdf', src: 'assets/PRELIM%20ACTIVITY%20NO.%203%20_%20CREATING%20CHART-Macalino.pdf' },
  prelim5: { name: 'Macalino_PrelimProject_DataAnalysis.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/Macalino_PrelimProject_DataAnalysis.xlsx' }
};
const midtermMaterials = {
  mid1: { name: 'Midterm Activity No.1 - Grouped Frequency Distribution Table- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/Midterm%20Activity%20No.1%20-%20Grouped%20Frequency%20Distribution%20Table-%20Macalino.xlsx' },
  mid3: { name: 'MIDTERM ACTIVITY NO.2 - STATISTICAL CHART- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/MIDTERM%20ACTIVITY%20NO.2%20-%20STATISTICAL%20CHART-%20Macalino.xlsx' },
  mid6: [
    { name: 'MIDTERM ACTIVITY NO.3 - CREATING PIVOT TABLE AND PIVOT CHART- Macalino.pdf', type: 'application/pdf', src: 'assets/MIDTERM%20ACTIVITY%20NO.3%20-%20CREATING%20PIVOT%20TABLE%20AND%20PIVOT%20CHART-%20Macalino.pdf' },
    { name: 'Scenario 1- Macalino.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/Scenario%201-%20Macalino.xlsx' }
  ],
  mid8: [
    { name: 'ITC C503 MIDTERM PROJECT- Macalino..xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', src: 'assets/ITC%20C503%20MIDTERM%20PROJECT-%20Macalino..xlsx' },
    { name: 'ITC_C503_MidtermProject_Macalino (1).pdf', type: 'application/pdf', src: 'assets/ITC_C503_MidtermProject_Macalino%20%281%29.pdf' }
  ]
};
const finalMaterials = {
  final1: [
    { name: 'Sample_Data_Macalino.ipynb', type: 'application/x-ipynb+json', src: 'assets/Sample_Data_Macalino.ipynb' },
    { name: 'Sample_Data_Macalino.pdf', type: 'application/pdf', src: 'assets/Sample_Data_Macalino.pdf' }
  ],
  final2: [
    { name: 'FinalActivityNo_1_PythonListTuples_Macalino (1).ipynb', type: 'application/x-ipynb+json', src: 'assets/FinalActivityNo_1_PythonListTuples_Macalino%20%281%29.ipynb' },
    { name: 'FinalActivityNo.1_PtyhonListTupples_Macalino (1).pdf', type: 'application/pdf', src: 'assets/FinalActivityNo.1_PtyhonListTupples_Macalino%20%281%29.pdf' }
  ],
  final3: [
    { name: 'inalTermActivityNo_2_PythonListTuples_Macalino.ipynb', type: 'application/x-ipynb+json', src: 'assets/inalTermActivityNo_2_PythonListTuples_Macalino.ipynb' },
    { name: 'inalTermActivityNo.2_PythonListTuples_Macalino.pdf', type: 'application/pdf', src: 'assets/inalTermActivityNo.2_PythonListTuples_Macalino.pdf' }
  ],
  final4: [
    { name: 'FinalTermAct3_Matplotlib_Macalino (1).ipynb', type: 'application/x-ipynb+json', src: 'assets/FinalTermAct3_Matplotlib_Macalino%20%281%29.ipynb' },
    { name: 'FinalTermAct3_Matplotlib_Macalino_.ipynb', type: 'application/x-ipynb+json', src: 'assets/FinalTermAct3_Matplotlib_Macalino_.ipynb' },
    { name: 'FinalTermAct3_Matplotlib_Macalino..pdf', type: 'application/pdf', src: 'assets/FinalTermAct3_Matplotlib_Macalino..pdf' }
  ],
  final6: [
    { name: '_finalTermActivity_Wordcloud_Macalino.ipynb', type: 'application/x-ipynb+json', src: 'assets/_finalTermActivity_Wordcloud_Macalino.ipynb' },
    { name: 'finalTermActivity_Wordcloud_Macalino.pdf', type: 'application/pdf', src: 'assets/finalTermActivity_Wordcloud_Macalino.pdf' }
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
