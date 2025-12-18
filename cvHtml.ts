export const MODERN_CV = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thato Lesudi - Modern CV</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f9f9f9; margin: 0; padding: 0; }
        .page { background: #fff; padding: 40px; max-width: 900px; margin: 40px auto; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { border-left: 10px solid #10b981; padding-left: 20px; margin-bottom: 30px; }
        h1 { margin: 0; font-size: 32px; text-transform: uppercase; letter-spacing: 2px; }
        .subtitle { color: #10b981; font-weight: bold; font-size: 18px; margin-bottom: 10px; }
        .contact { font-size: 14px; color: #666; }
        h2 { border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 30px; font-size: 20px; color: #111; }
        .section { margin-bottom: 20px; }
        .item { margin-bottom: 15px; }
        .item-title { font-weight: bold; display: flex; justify-content: space-between; }
        .item-subtitle { color: #10b981; font-style: italic; font-size: 14px; }
        ul { padding-left: 20px; margin-top: 5px; }
        li { margin-bottom: 5px; font-size: 14px; }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .skill-cat { font-weight: bold; font-size: 14px; }
        
        .print-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #10b981;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            font-family: inherit;
            transition: transform 0.2s;
            z-index: 1000;
        }
        .print-btn:hover { transform: scale(1.05); background: #059669; }

        @media print { 
            body { background: white; }
            .page { margin: 0; box-shadow: none; max-width: none; padding: 0; }
            .no-print { display: none !important; } 
        }
    </style>
</head>
<body>
    <button class="print-btn no-print" onclick="window.print()">Save as PDF</button>
    <div class="page">
        <div class="header">
            <h1>Thato Lesudi</h1>
            <div class="subtitle">Machine Learning Engineer & Software Developer</div>
            <div class="contact">Johannesburg, Gauteng | +27 65 800 3498 | Thatolesudi563@gmail.com</div>
        </div>
        <div class="section">
            <h2>Executive Summary</h2>
            <p>Dynamic and results-oriented Software Developer specializing in AI/ML integrations. Proficient in Python, Java, and SQL with a proven track record of building intelligent inventory systems and generative AI tools.</p>
        </div>
        <div class="section">
            <h2>Key Expertise</h2>
            <div class="skills-grid">
                <div><span class="skill-cat">Languages:</span> Python, Java, SQL, TypeScript</div>
                <div><span class="skill-cat">Frameworks:</span> React, Next.js, Node.js</div>
                <div><span class="skill-cat">AI/ML:</span> GenAI, NLP, Scikit-learn</div>
                <div><span class="skill-cat">Tools:</span> Git, Voiceflow, Vercel</div>
            </div>
        </div>
        <div class="section">
            <h2>Professional Journey</h2>
            <div class="item">
                <div class="item-title"><span>Candidate</span> <span>2025 - Present</span></div>
                <div class="item-subtitle">Capaciti</div>
                <ul>
                    <li>Specializing in full-stack development and AI solution architecture.</li>
                    <li>Collaborating on high-impact projects using Agile methodologies.</li>
                </ul>
            </div>
            <div class="item">
                <div class="item-title"><span>IT Intern</span> <span>2024 - 2025</span></div>
                <div class="item-subtitle">The Document Warehouse</div>
                <ul>
                    <li>Optimized system maintenance workflows and technical support responsiveness.</li>
                    <li>Supported infrastructure scalability and hardware diagnostics.</li>
                </ul>
            </div>
        </div>
        <div class="section">
            <h2>Academic Background</h2>
            <div class="item">
                <div class="item-title"><span>Diploma in Informatics</span> <span>Feb 2025</span></div>
                <div class="item-subtitle">Tshwane University of Technology</div>
            </div>
        </div>
    </div>
</body>
</html>`;

export const CLASSIC_CV = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thato Lesudi - Classic CV</title>
    <style>
        body { font-family: 'Times New Roman', Times, serif; background: #f0f0f0; margin: 0; padding: 0; }
        .page { background: white; padding: 50px; line-height: 1.4; color: #000; max-width: 800px; margin: 30px auto; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { text-align: center; margin-bottom: 5px; border-bottom: 1px solid #000; padding-bottom: 10px; }
        .contact { text-align: center; margin-bottom: 20px; font-size: 12px; }
        h2 { font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #000; margin-top: 20px; }
        .entry { margin-bottom: 10px; }
        .entry-header { display: flex; justify-content: space-between; font-weight: bold; }
        .entry-sub { font-style: italic; }
        ul { margin-top: 5px; }
        li { margin-bottom: 2px; font-size: 13px; }
        p { font-size: 13px; }

        .print-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #333;
            color: white;
            border: 1px solid #000;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            font-family: 'Times New Roman', serif;
            z-index: 1000;
        }
        .print-btn:hover { background: #000; }

        @media print { 
            body { background: white; }
            .page { margin: 0; box-shadow: none; max-width: none; padding: 0; }
            .no-print { display: none !important; } 
        }
    </style>
</head>
<body>
    <button class="print-btn no-print" onclick="window.print()">Print to PDF</button>
    <div class="page">
        <h1>THATO LESUDI</h1>
        <div class="contact">Johannesburg, Gauteng &bull; +27 65 800 3498 &bull; Thatolesudi563@gmail.com</div>
        
        <h2>Education</h2>
        <div class="entry">
            <div class="entry-header"><span>Tshwane University of Technology</span> <span>Feb 2025</span></div>
            <div class="entry-sub">Diploma in Informatics</div>
        </div>

        <h2>Experience</h2>
        <div class="entry">
            <div class="entry-header"><span>Capaciti</span> <span>2025 - Present</span></div>
            <div class="entry-sub">Candidate, Software Development Program</div>
            <ul>
                <li>Intensive training in modern software engineering practices.</li>
                <li>Development of production-ready web applications and AI agents.</li>
            </ul>
        </div>
        <div class="entry">
            <div class="entry-header"><span>The Document Warehouse</span> <span>2024 - 2025</span></div>
            <div class="entry-sub">IT Intern</div>
            <ul>
                <li>Maintained critical IT systems and hardware components.</li>
                <li>Assisted in networking and helpdesk operations.</li>
            </ul>
        </div>

        <h2>Technical Skills</h2>
        <p><strong>Languages:</strong> Java, Python, SQL, JavaScript</p>
        <p><strong>Technologies:</strong> React, Node.js, Git, Generative AI Integration</p>

        <h2>Projects</h2>
        <p><strong>Shrinkage Control System:</strong> Built an inventory management tool using React to mitigate retail revenue loss.</p>
        <p><strong>Resume Optimizer:</strong> Developed an NLP-based tool to enhance ATS scores for professional resumes.</p>
    </div>
</body>
</html>`;

export const TECH_CV = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thato Lesudi - Technical CV</title>
    <style>
        body { font-family: 'Courier New', Courier, monospace; background: #1a1a1a; padding: 20px; color: #1a1a1a; margin: 0; }
        .terminal-container { max-width: 850px; margin: 40px auto; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .terminal-header { background: #333; color: #10b981; padding: 15px 20px; display: flex; align-items: center; justify-content: space-between; }
        .terminal-dots { display: flex; gap: 8px; }
        .dot { width: 12px; height: 12px; rounded-radius: 50%; border-radius: 50%; }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }
        .content { background: white; padding: 40px; }
        h1 { margin: 0; font-size: 22px; }
        h2 { font-size: 18px; color: #10b981; border-bottom: 1px dashed #10b981; padding-bottom: 5px; margin-top: 30px; }
        .tag { display: inline-block; background: #eee; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-right: 5px; margin-bottom: 5px; }
        .project { margin-bottom: 20px; }
        .project-title { font-weight: bold; color: #333; }
        .date { color: #888; font-size: 12px; float: right; }
        
        .print-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #10b981;
            color: #1a1a1a;
            border: none;
            padding: 10px 20px;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
            z-index: 1000;
        }
        .print-btn:hover { background: #34d399; }

        @media print { 
            body { background: white; padding: 0; }
            .terminal-container { margin: 0; box-shadow: none; border: none; }
            .terminal-header { background: #eee; color: #000; border-bottom: 1px solid #000; }
            .dot { display: none; }
            .no-print { display: none !important; } 
        }
    </style>
</head>
<body>
    <button class="print-btn no-print" onclick="window.print()">> export_to_pdf</button>
    <div class="terminal-container">
        <div class="terminal-header">
            <div class="terminal-dots">
                <div class="dot red"></div>
                <div class="dot yellow"></div>
                <div class="dot green"></div>
            </div>
            <span>thato_lesudi_cv.sh</span>
        </div>
        <div class="content">
            <h1>> Thato_Lesudi.init()</h1>
            <p>// Software Developer & AI Enthusiast</p>

            <h2>[0] Technical_Stack</h2>
            <div class="tag">Python</div> <div class="tag">Java</div> <div class="tag">SQL</div> 
            <div class="tag">React.js</div> <div class="tag">Node.js</div> <div class="tag">Generative_AI</div>
            <div class="tag">Git</div> <div class="tag">Vercel</div> <div class="tag">NLP</div>

            <h2>[1] Core_Projects</h2>
            <div class="project">
                <span class="date">2024</span>
                <div class="project-title">Shrinkage_Control_System</div>
                <p>React-based inventory analytics platform for retail loss prevention.</p>
            </div>
            <div class="project">
                <span class="date">2024</span>
                <div class="project-title">Areyeng_Logistics</div>
                <p>Route optimization system using Node.js and Maps APIs.</p>
            </div>
            <div class="project">
                <span class="date">2024</span>
                <div class="project-title">AI_Marketing_Generator</div>
                <p>GenAI tool for automated social media copy generation.</p>
            </div>

            <h2>[2] Experience</h2>
            <p><strong>Capaciti</strong> // Software Dev Candidate <span class="date">Present</span></p>
            <p><strong>The Document Warehouse</strong> // IT_Intern <span class="date">2024-2025</span></p>

            <h2>[3] Education</h2>
            <p>Diploma in Informatics @ Tshwane_University_of_Technology</p>
        </div>
    </div>
</body>
</html>`;
