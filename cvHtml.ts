export const PORTFOLIO_CV = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thato Lesudi - CV</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.4; color: #333; background: #f0f2f5; }
        
        .cv-container {
            width: 210mm;
            min-height: 297mm;
            margin: 20px auto;
            background: white;
            display: flex;
            box-shadow: 0 0 20px rgba(0,0,0,0.2);
            position: relative;
            overflow: hidden;
        }

        /* Sidebar Style */
        .sidebar {
            width: 35%;
            background-color: #1a2b4b;
            color: white;
            padding: 40px 30px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            position: relative;
        }

        /* Top Left Purple Chevron Shape */
        .top-accent {
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 100px;
            background: #5d489b;
            clip-path: polygon(0 0, 100% 0, 0 100%);
            opacity: 0.8;
        }

        .name-header {
            margin-top: 40px;
            margin-bottom: 20px;
        }

        .name-header h1 {
            font-size: 32px;
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 1px;
        }

        .sidebar-section h2 {
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            padding-bottom: 5px;
        }

        .sidebar-item {
            margin-bottom: 12px;
        }

        .sidebar-item label {
            display: block;
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 2px;
        }

        .sidebar-item p, .sidebar-item a {
            font-size: 14px;
            color: #d1d5db;
            text-decoration: none;
        }

        .sidebar-item a:hover {
            color: white;
            text-decoration: underline;
        }

        .bullet-list {
            list-style: disc;
            margin-left: 20px;
            font-size: 14px;
            color: #d1d5db;
        }

        .bullet-list li {
            margin-bottom: 5px;
        }

        /* Main Content Style */
        .main-content {
            width: 65%;
            padding: 40px 40px 100px 40px;
            position: relative;
        }

        .capaciti-logo {
            text-align: right;
            margin-bottom: 40px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 15px;
        }
        
        .capaciti-logo span {
            font-size: 42px;
            font-weight: 300;
            letter-spacing: 10px;
            color: #1a2b4b;
        }

        .summary {
            font-size: 15px;
            color: #4b5563;
            margin-bottom: 30px;
            line-height: 1.6;
        }

        .content-section {
            margin-bottom: 30px;
        }

        .section-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 22px;
            color: #1a2b4b;
            margin-bottom: 15px;
            border-bottom: 1px solid #1a2b4b;
            padding-bottom: 5px;
        }

        .section-title::before {
            content: ">>>";
            color: #f97316;
            font-weight: bold;
            letter-spacing: -2px;
        }

        .experience-item {
            margin-bottom: 20px;
            position: relative;
            padding-left: 25px;
        }

        .experience-item::before {
            content: ">>";
            position: absolute;
            left: 0;
            top: 2px;
            color: #f97316;
            font-weight: bold;
            font-size: 18px;
        }

        .experience-item h3 {
            font-size: 16px;
            font-weight: bold;
        }

        .experience-item .company {
            font-size: 15px;
            color: #374151;
        }

        .experience-item .date {
            font-size: 14px;
            color: #6b7280;
        }

        .project-list {
            list-style: disc;
            margin-left: 20px;
        }

        .project-list li {
            margin-bottom: 5px;
            font-size: 15px;
        }

        .project-list li a {
            color: #2563eb;
            text-decoration: none;
        }

        .footer-accent {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px;
            background: #5d489b;
            clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%);
        }

        .red-triangle {
            position: absolute;
            bottom: 0;
            right: 15%;
            width: 250px;
            height: 120px;
            background: #ef4444;
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 10px;
            z-index: 10;
        }

        .red-triangle::after {
            content: "";
            width: 80%;
            height: 80%;
            background: #1a2b4b;
            clip-path: polygon(50% 15%, 90% 90%, 10% 90%);
        }

        .print-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #1a2b4b;
            color: white;
            border: none;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            z-index: 1000;
        }

        @media print {
            body { background: white; }
            .cv-container { margin: 0; box-shadow: none; width: 100%; height: 100%; }
            .no-print { display: none !important; }
            .footer-accent, .red-triangle, .top-accent { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
    </style>
</head>
<body>
    <button class="print-btn no-print" onclick="window.print()">Save as PDF</button>

    <div class="cv-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="top-accent"></div>
            
            <div class="name-header">
                <h1>Thato Lesudi</h1>
            </div>

            <div class="sidebar-section">
                <h2>Personal Details</h2>
                <div class="sidebar-item">
                    <label>Age:</label>
                    <p>23</p>
                </div>
                <div class="sidebar-item">
                    <label>Location:</label>
                    <p>Johannesburg, Gauteng</p>
                </div>
                <div class="sidebar-item">
                    <label>Languages:</label>
                    <p>English, Sepedi, Isizulu</p>
                </div>
                <div class="sidebar-item">
                    <label>Drivers Licence:</label>
                    <p>No</p>
                </div>
            </div>

            <div class="sidebar-section">
                <h2>Online Presence</h2>
                <div class="sidebar-item">
                    <p>&bull; <a href="https://www.linkedin.com/in/thato-lesudi-023070216">LinkedIn</a></p>
                    <p>&bull; <a href="https://github.com/Mthatos">GitHub</a></p>
                </div>
            </div>

            <div class="sidebar-section">
                <h2>Technical Proficiencies</h2>
                <ul class="bullet-list">
                    <li>Java Development</li>
                    <li>SQL</li>
                    <li>API Integration</li>
                    <li>AI Integration</li>
                </ul>
            </div>

            <div class="sidebar-section">
                <h2>Soft Skills</h2>
                <ul class="bullet-list">
                    <li>Adaptability</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    <li>Effective Communication</li>
                </ul>
            </div>

            <div class="sidebar-section">
                <h2>Interests</h2>
                <ul class="bullet-list">
                    <li>Software Development</li>
                    <li>System Design</li>
                </ul>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="capaciti-logo">
                <span>CΛPΛCITI</span>
            </div>

            <div class="summary">
                I am an aspiring Software developer with strong coding skills. I am proficient in several different programming languages, covering both the front-end and back-end development. I am proficient mainly in Java, Python, MySQL, HTML5/CSS3. I strive for knowledge, and I am always eager to learn.
            </div>

            <div class="content-section">
                <h2 class="section-title">Education</h2>
                <div class="experience-item">
                    <h3>Diploma in Informatics</h3>
                    <div class="company">Tshwane University of Technology</div>
                    <div class="date">February 2025</div>
                </div>
            </div>

            <div class="content-section">
                <h2 class="section-title">Work Experience</h2>
                <div class="experience-item">
                    <h3>Candidate</h3>
                    <div class="company">Capaciti</div>
                    <div class="date">October 2025 - Present</div>
                </div>
                <div class="experience-item">
                    <h3>IT Intern</h3>
                    <div class="company">The Document Warehouse</div>
                    <div class="date">May 2024 - June 2025</div>
                </div>
            </div>

            <div class="content-section">
                <h2 class="section-title">Achievements and Key Projects</h2>
                <ul class="project-list">
                    <li><a href="https://kgothatso-shrinkage-control-git-main-thato-s-projects-f68677d8.vercel.app/?_vercel_share=VZzla4k0IYKe4uY3LNCiZ4iNH48TFZGQ">Kgothatso Shrinkage Control</a></li>
                    <li><a href="https://resumeproject-five.vercel.app/">Resume Builder</a></li>
                    <li><a href="https://marketingpostgenerate.vercel.app/">Marketing copy generator</a></li>
                    <li><a href="https://areyeng.vercel.app/">https://areyeng.vercel.app/</a></li>
                </ul>
            </div>

            <div class="content-section">
                <h2 class="section-title">References</h2>
                <div class="experience-item">
                    <h3>Emile Setowski</h3>
                    <div class="company">The Document Warehouse - IT Manager</div>
                    <div class="date">EmileS@tdw.co.za</div>
                </div>
            </div>

            <div class="footer-accent"></div>
            <div class="red-triangle"></div>
        </div>
    </div>
</body>
</html>`;
