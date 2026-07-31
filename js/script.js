// ===================================================================
// script.js -- โค้ด JavaScript ทั้งหมดของเว็บพอร์ตโฟลิโอ
//
// สารบัญคร่าวๆ (ค้นหาคำเหล่านี้เพื่อกระโดดไปจุดนั้น):
//   - "i18nData"              ข้อความแปลไทย/อังกฤษทั้งหมด
//   - "applyLanguage"         ฟังก์ชันสลับภาษา
//   - "switchPage"            ฟังก์ชันหลักในการเปลี่ยนหน้า (crossfade)
//   - "initScrollObserver"    เอฟเฟกต์เลื่อนแล้วเฟด/ซูมเข้ามา + แถบทักษะ
//   - "typewriteHeroName"     เอฟเฟกต์พิมพ์ชื่อทีละตัวอักษร (หน้าแรก)
//   - "updateScrollProgress"  แถบความคืบหน้าด้านบนสุด
//   - "copy-btn"              ปุ่มคัดลอกอีเมล/เบอร์โทร (หน้าเกี่ยวกับฉัน)
//   - "themeBtn"               ปุ่มสลับธีมสว่าง/มืด
// ===================================================================

      // i18n Translation Dictionary
      const i18nData = {
        th: {
          nav_home: "หน้าแรก",
          nav_project: "ผลงาน",
          nav_certificate: "ใบรับรอง",
          nav_activity: "กิจกรรม",
          nav_about: "เกี่ยวกับฉัน",
          home_eyebrow: "DEVELOPER",
          home_role: "Junior / Intermediate Developer",
          home_lede:
            "ชื่นชอบการเขียนโค้ด ถนัดใช้งาน VS Code เป็นเครื่องมือหลัก มีประสบการณ์ทำระบบอัตโนมัติด้วย n8n และเชื่อมต่อ LINE Official Account พอมีประสบการณ์ใช้งาน Figma, Docker, Supabase และ WordPress รวมถึงมีความรู้พื้นฐานด้าน Database และเคยใช้ Flowchart ประกอบการทำงาน",
          btn_view_projects: "ดูผลงาน",
          btn_about: "เกี่ยวกับฉัน",
          overview_title: "ภาพรวมข้อมูล (Overview)",
          bento_about_title: "เกี่ยวกับตัวผม",
          bento_about_p1:
            "สวัสดีครับผม Yochuwa Katedam ชื่นชอบการเขียนโค้ดและถนัดใช้งาน VS Code เป็นเครื่องมือหลักในการพัฒนา มีประสบการณ์สร้างระบบอัตโนมัติด้วย n8n และเชื่อมต่อกับ LINE Official Account",
          bento_about_p2:
            "พอมีประสบการณ์ใช้งาน Figma สำหรับออกแบบ UI, Docker, Supabase และ WordPress รวมถึงมีความรู้พื้นฐานด้าน Database เคยใช้ Flowchart วางแผนขั้นตอนการทำงาน และเคยพัฒนาแอปพลิเคชันด้วย AppSheet ครับ",
          bento_edu_title: "การศึกษา",
          edu_deg1: "ปริญญาตรี (อุดมศึกษา)",
          edu_sch1: "มหาวิทยาลัยกรุงเทพ",
          edu_deg2: "มัธยมศึกษาตอนปลาย",
          edu_sch2: "โรงเรียนภูเก็ตวิทยาลัย",
          bento_skill_title: "ความคุ้นเคยกับเครื่องมือ (Skill Levels)",
          bento_tools_title: "เทคโนโลยีที่ใช้บ่อย",
          bento_tools_desc: "Tech Stack ที่ใช้เป็นประจำ:",
          project_title: "ผลงานทั้งหมด (Projects)",
          project_desc:
            "สามารถเลื่อนลงเพื่อรับชมรายละเอียดและรูปภาพของแต่ละผลงานได้อย่างต่อเนื่อง",
          p1_desc:
            "ระบบแชทบอตอัตโนมัติด้วย n8n ร่วมกับ RAG AI Agent, Supabase Vector DB และ Google Gemini เชื่อมต่อระบบแชทกับ LINE Official Account สำหรับตอบคำถามโรงแรมแบบแม่นยำ",
          p_webportfolio_desc:
            "เว็บไซต์พอร์ตโฟลิโอส่วนตัว ออกแบบและพัฒนาด้วย HTML, CSS และ JavaScript รองรับการสลับหน้าแบบ crossfade, สลับธีมสว่าง/มืด และสลับภาษาไทย/อังกฤษ",
          p2_new_desc:
            "การออกแบบโครงสร้างระบบและการจัดการแดชบอร์ดข้อมูลเพื่อเพิ่มประสิทธิภาพในการทำงานและการประมวลผล",
          p3_new_desc:
            "ระบบบริหารจัดการเวิร์กโฟลว์และฐานข้อมูล พัฒนาขึ้นเพื่อช่วยอำนวยความสะดวกในการจัดเก็บ ค้นหา และประมวลผลข้อมูลขององค์กรอย่างเป็นระบบ",
          p4_new_desc:
            "ระบบบริหารจัดการการทำงานและโซลูชันองค์กรผ่าน AppSheet เพื่อปรับปรุงกระบวนการทำงานให้เป็นดิจิทัล ตรวจสอบข้อมูลแบบเรียลไทม์ และเพิ่มความคล่องตัวในการปฏิบัติงาน",
          p5_new_desc:
            "การออกแบบผังการทำงาน (Flowchart) และกำหนดมาตรฐานขั้นตอนการปฏิบัติงาน (SOP) เพื่อสร้างโครงสร้างกระบวนการทำงานที่ชัดเจน เป็นระบบ และเพิ่มประสิทธิภาพการทำงานร่วมกัน",
          p6_new_desc:
            "การวางโครงสร้างฐานข้อมูล (Database Schema/ERD) การออกแบบระบบแลกเปลี่ยนสื่อสารข้อมูล และการวางแผนภูมิภาพรวมสถาปัตยกรรมระบบ เพื่อรองรับการเชื่อมต่อและประมวลผลข้อมูลอย่างเป็นระบบ",
          cert_title: "ใบรับรองการอบรม",
          cert_desc: "สามารถเลื่อนลงเพื่อรับชมรายละเอียดและภาพใบรับรองได้อย่างต่อเนื่อง",
          cert_ncsa_title: "หลักสูตรด้านความมั่นคงปลอดภัยไซเบอร์ ระดับพื้นฐาน",
          cert_ncsa_desc:
            "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช. / NCSA) • ผ่านการอบรม 21 ชั่วโมง (12 เม.ย. 2569)",
          cert_speex_title: "ใบรับรอง Speex",
          cert_speex_desc: "ใบรับรองการอบรม/ทดสอบทักษะจาก Speex",
          cert_anthropic_title: "Anthropic AI Training",
          cert_anthropic_desc: "ใบรับรองการอบรมด้าน AI จาก Anthropic",
          activity_title: "กิจกรรมที่เคยเข้าร่วม",
          a1_title: "OPEN HOUSE BANGKOK UNIVERSITY",
          a1_desc: "เข้าร่วมกิจกรรมเปิดบ้านเปิดประสบการณ์ มหาวิทยาลัยกรุงเทพ",
          about_title: "เกี่ยวกับผม",
          about_subtitle: "ข้อมูลส่วนตัว ทักษะ และช่องทางติดต่อ",
          about_p1:
            "ผม Yochuwa Katedam ชื่นชอบการเขียนโค้ด และถนัดใช้งาน VS Code เป็นเครื่องมือหลักในการพัฒนาโปรแกรมและแอปพลิเคชัน",
          about_p2:
            "มีประสบการณ์ทำระบบอัตโนมัติด้วย n8n เชื่อมต่อกับ LINE Official Account พอมีประสบการณ์ใช้งาน Figma, Docker, Supabase และ WordPress มีความรู้พื้นฐานด้าน Database เคยใช้ Flowchart ประกอบการทำงาน และเคยพัฒนาแอปพลิเคชันด้วย AppSheet ครับ",
          contact_heading: "ช่องทางติดต่อ (Contact)",
          contact_direct: "ข้อมูลติดต่อ",
          lbl_email: "อีเมล (Email)",
          lbl_phone: "เบอร์โทร (Phone)",
          lbl_location: "ที่อยู่ (Location)",
          val_location: "กรุงเทพมหานคร, ประเทศไทย",
          copied_text: "คัดลอกแล้ว ✓",
          footer_text: "© 2026 Yochuwa Katedam. All rights reserved.",
        },
        en: {
          nav_home: "Home",
          nav_project: "Projects",
          nav_certificate: "Certificates",
          nav_activity: "Activities",
          nav_about: "About Me",
          home_eyebrow: "DEVELOPER",
          home_role: "Junior / Intermediate Developer",
          home_lede:
            "Passionate about coding, primarily working in VS Code. Experienced in building automation workflows with n8n and integrating LINE Official Account. Some hands-on experience with Figma, Docker, Supabase, and WordPress, plus basic knowledge of databases and flowcharting.",
          btn_view_projects: "View Projects",
          btn_about: "About Me",
          overview_title: "Overview",
          bento_about_title: "About Me",
          bento_about_p1:
            "Hello! I'm Yochuwa Katedam. I love writing code and mainly work in VS Code as my primary development tool. I have experience building automation workflows with n8n integrated with LINE Official Account.",
          bento_about_p2:
            "Some experience with Figma for UI design, Docker, Supabase, and WordPress, along with basic database knowledge, flowcharting, and building apps with AppSheet.",
          bento_edu_title: "Education",
          edu_deg1: "Bachelor's Degree",
          edu_sch1: "Bangkok University",
          edu_deg2: "High School Diploma",
          edu_sch2: "Phuketwittayalai School",
          bento_skill_title: "Technical Skill Proficiency",
          bento_tools_title: "Tech Stack & Tools",
          bento_tools_desc: "Frequently used technologies:",
          project_title: "All Projects",
          project_desc:
            "Scroll down to explore projects and detailed images continuously.",
          p1_desc:
            "Automated customer support workflow using n8n integrated with a RAG AI Agent, Supabase Vector DB, and Google Gemini connected to LINE Official Account.",
          p_webportfolio_desc:
            "Personal portfolio website designed and built with HTML, CSS, and JavaScript. Features crossfade page transitions, light/dark theme switching, and Thai/English language switching.",
          p2_new_desc:
            "System architecture design and data dashboard configuration to enhance operational workflow and processing efficiency.",
          p3_new_desc:
            "Workflow and database management application developed to streamline data collection, retrieval, and organizational processing.",
          p4_new_desc:
            "Business operations platform powered by AppSheet designed to digitize processes, monitor real-time data, and improve overall operational workflow.",
          p5_new_desc:
            "System flowchart architecture and Standard Operating Procedure (SOP) documentation designed to establish structured, clear, and scalable operational workflows.",
          p6_new_desc:
            "Database schema structuring (ERD), data communication exchange systems, and high-level system architecture design for efficient data processing and integration.",
          cert_title: "Certificates & Training",
          cert_desc: "Scroll down to view certification documents and details continuously.",
          cert_ncsa_title: "Cybersecurity Foundation Course",
          cert_ncsa_desc:
            "National Cyber Security Agency (NCSA) • Completed 21 hours of training (12 Apr 2026)",
          cert_speex_title: "Speex Certificate",
          cert_speex_desc: "Certificate of training/assessment from Speex.",
          cert_anthropic_title: "Anthropic AI Training",
          cert_anthropic_desc: "Certificate of AI training from Anthropic.",
          activity_title: "Activities & Workshops",
          a1_title: "OPEN HOUSE BANGKOK UNIVERSITY",
          a1_desc: "Participated in Bangkok University Open House event.",
          about_title: "About Me",
          about_subtitle:
            "Personal information, technical skills, and contact.",
          about_p1:
            "I'm Yochuwa Katedam. I love writing code and mainly use VS Code as my primary tool for developing programs and applications.",
          about_p2:
            "I have experience building automation workflows with n8n integrated with LINE Official Account. I also have some experience with Figma, Docker, Supabase, and WordPress, basic database knowledge, flowcharting, and building apps with AppSheet.",
          contact_heading: "Contact Information",
          contact_direct: "Direct Contacts",
          lbl_email: "Email",
          lbl_phone: "Phone",
          lbl_location: "Location",
          val_location: "Bangkok, Thailand",
          copied_text: "Copied ✓",
          footer_text: "© 2026 Yochuwa Katedam. All rights reserved.",
        },
      };

      let currentLang = "th";

      function applyLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (i18nData[lang] && i18nData[lang][key]) {
            el.textContent = i18nData[lang][key];
          }
        });

        const roleElem = document.getElementById("roleText");
        if (roleElem) roleElem.textContent = i18nData[lang].home_role;

        const activeLink = document.querySelector(".nav-links a.active");
        if (activeLink) setIndicator(activeLink);
      }

      // Language Switcher Buttons
      const langButtons = document.querySelectorAll("#langSwitch button");
      langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          langButtons.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          applyLanguage(btn.getAttribute("data-lang"));
        });
      });

      // Dynamic Nav Indicator & Seamless Page Switching
      const navLinks = document.querySelectorAll(".nav-links a");
      const pages = document.querySelectorAll(".page");
      const indicator = document.getElementById("indicator");

      function setIndicator(el) {
        if (!el) return;
        indicator.style.left = el.offsetLeft + "px";
        indicator.style.width = el.offsetWidth + "px";
      }

      // Scroll Progress Bar
      const scrollProgressBar = document.getElementById("scrollProgress");
      function updateScrollProgress() {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
        scrollProgressBar.style.transform = `scaleX(${Math.min(pct, 1)})`;
      }
      window.addEventListener("resize", updateScrollProgress);

      // Hero name typewriter
      const heroNameEl = document.querySelector(".home-hero h1");
      const heroNameText = heroNameEl ? heroNameEl.textContent.trim() : "";
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      let typeTimer = null;

      function typewriteHeroName() {
        if (!heroNameEl) return;
        clearInterval(typeTimer);
        if (prefersReducedMotion) {
          heroNameEl.textContent = heroNameText;
          return;
        }
        heroNameEl.textContent = "";
        heroNameEl.classList.add("typing-caret");
        let i = 0;
        typeTimer = setInterval(() => {
          heroNameEl.textContent = heroNameText.slice(0, i + 1);
          i++;
          if (i >= heroNameText.length) {
            clearInterval(typeTimer);
            setTimeout(() => heroNameEl.classList.remove("typing-caret"), 500);
          }
        }, 95);
      }

      function initScrollObserver() {
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");

              const skillBars = entry.target.querySelectorAll(".skill-fill-bar");
              if (skillBars.length > 0) {
                skillBars.forEach(bar => {
                  bar.style.width = bar.getAttribute("data-target");
                });
              }

              obs.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll(".page.active .scroll-reveal").forEach(el => {
          observer.observe(el);
        });
      }

      // วีดีโอพื้นหลัง — เปิดเฉพาะตอนอยู่หน้า "หน้าแรก" และ "เกี่ยวกับฉัน"
      // (โหลด/เล่นแบบ lazy เพื่อไม่ให้กินแบนด์วิดท์ตอนอยู่หน้าอื่น)
      const aboutBgVideo = document.getElementById("aboutBgVideo");
      const BG_VIDEO_PAGES = ["home", "about"];

      function setAboutBackground(pageId) {
        const showVideo = BG_VIDEO_PAGES.includes(pageId);
        document.body.classList.toggle("bg-video-page", showVideo);
        document.body.classList.toggle("page-home", pageId === "home");
        document.body.classList.toggle("page-about", pageId === "about");
        if (!aboutBgVideo) return;

        if (showVideo) {
          if (!aboutBgVideo.getAttribute("src") && !aboutBgVideo.currentSrc) {
            aboutBgVideo.load();
          }
          const playPromise = aboutBgVideo.play();
          if (playPromise && playPromise.catch) playPromise.catch(() => {});
        } else {
          aboutBgVideo.pause();
        }
      }

      function switchPage(pageId) {
        const activePage = document.querySelector(".page.active");
        const targetPage = document.getElementById(pageId);
        const targetLink = document.querySelector(
          `.nav-links a[data-page="${pageId}"]`,
        );

        if (activePage && activePage.id === pageId) return;
        if (!targetPage) return;

        setAboutBackground(pageId);

        // pin the outgoing page in place (absolute) so the incoming page
        // can crossfade over it instead of leaving a blank gap
        if (activePage) {
          activePage.classList.remove("active");
          activePage.classList.add("leaving");
        }

        // reveal the incoming page in normal flow, still invisible,
        // then force a reflow so the entrance transition actually plays
        targetPage.style.display = "block";
        void targetPage.offsetWidth;

        navLinks.forEach((l) => l.classList.remove("active"));
        if (targetLink) {
          targetLink.classList.add("active");
          setIndicator(targetLink);
        }

        // both transitions now run at the same time = real crossfade
        targetPage.classList.add("active");

        const items = targetPage.querySelectorAll(".stagger-item");
        items.forEach((item) => item.classList.remove("show"));
        items.forEach((item, idx) => {
          setTimeout(() => item.classList.add("show"), 600 + idx * 130);
        });

        if (pageId === "home") {
          setTimeout(typewriteHeroName, 750);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
        initScrollObserver();
        setTimeout(updateScrollProgress, 60);

        // clean up the outgoing page only after its exit transition has
        // actually finished, so nothing gets cut off mid-animation
        if (activePage) {
          setTimeout(() => {
            activePage.classList.remove("leaving");
            activePage.style.display = "none";
          }, 1750);
        }
      }

      document.querySelectorAll("[data-page]").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const page = link.getAttribute("data-page");
          window.location.hash = page;
          switchPage(page);
        });
      });

      // เข้าเว็บครั้งแรกให้ไปหน้าแรกเสมอ — ทำทันทีตอนสคริปต์นี้รัน (ไม่รอ
      // window "load" ซึ่งจะรอโหลดฟอนต์/รูปภาพภายนอกทั้งหมดก่อน ทำให้ล่าช้า
      // และเปิดช่องให้เห็นสถานะอื่นค้างอยู่ชั่วครู่ก่อนแก้ไข) เนื่องจากสคริปต์
      // นี้อยู่ท้ายสุดของ <body> จึงมั่นใจได้ว่า DOM ทั้งหมดพร้อมใช้งานแล้ว
      //
      // หมายเหตุ: ใช้ initHomePageOnLoad() แทน switchPage("home") เพราะ
      // #home ถูกใส่ class "active" ไว้ใน HTML อยู่แล้วตั้งแต่ต้น ทำให้
      // switchPage("home") เจอเงื่อนไข activePage.id === pageId แล้ว
      // return ทันทีโดยไม่ทำงานอะไรเลย (ไม่ขึ้น stagger-item, ไม่พิมพ์ชื่อ,
      // ไม่ตั้ง nav indicator, ไม่เปิด scroll observer) เป็นสาเหตุที่ทำให้
      // หน้าแรกดูว่างเปล่าตอนโหลดครั้งแรก จนกว่าจะสลับหน้าไปมา
      function initHomePageOnLoad() {
        const homePage = document.getElementById("home");
        if (!homePage) return;

        const homeLink = document.querySelector(
          '.nav-links a[data-page="home"]',
        );
        if (homeLink) setIndicator(homeLink);

        const items = homePage.querySelectorAll(".stagger-item");
        items.forEach((item, idx) => {
          setTimeout(() => item.classList.add("show"), 220 + idx * 130);
        });

        setTimeout(typewriteHeroName, 350);

        initScrollObserver();
        updateScrollProgress();
      }

      initHomePageOnLoad();
      setAboutBackground("home");
      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }

      // เลื่อนลงสุดหน้าแล้วเปลี่ยนไปหน้าถัดไปอัตโนมัติ — แบบไม่กระตุก
      //
      // เทคนิค: ก่อนสลับหน้า เราจะ "ล็อกความสูง" ของ <main> ไว้เท่ากับ
      // ความสูงปัจจุบัน (ที่ยังยาวอยู่) ชั่วคราว เพื่อไม่ให้เอกสารยุบตัว
      // ทันทีตอนหน้าเก่าหลุดออกจาก flow (ซึ่งเป็นสาเหตุหลักที่ทำให้เกิด
      // อาการกระตุก/เด้งตอนเปลี่ยนหน้า) แล้วค่อยปลดล็อกหลัง crossfade
      // และการเลื่อนขึ้นด้านบนเสร็จสมบูรณ์แล้ว
      const pageOrder = ["home", "project", "certificate", "activity", "about"];
      // เลื่อนสุดหน้าแล้วเปลี่ยนหน้าอัตโนมัติ เฉพาะ 3 หน้านี้เท่านั้น
      // (หน้าแรก และ เกี่ยวกับฉัน ให้เลื่อนดูเนื้อหาปกติ ไม่เปลี่ยนหน้าเอง)
      const AUTO_ADVANCE_PAGES = ["project", "certificate", "activity"];
      const mainEl = document.querySelector("main");
      let scrollCooldown = false;

      function goToNextPageSmoothly() {
        const activePageElem = document.querySelector(".page.active");
        if (!activePageElem || !mainEl) return;
        if (!AUTO_ADVANCE_PAGES.includes(activePageElem.id)) return;

        const currentIndex = pageOrder.indexOf(activePageElem.id);
        const nextPageId = pageOrder[(currentIndex + 1) % pageOrder.length];

        scrollCooldown = true;

        // ล็อกความสูงปัจจุบันไว้ก่อนสลับหน้า
        const frozenHeight = mainEl.scrollHeight;
        mainEl.style.minHeight = frozenHeight + "px";

        window.location.hash = nextPageId;
        switchPage(nextPageId); // ฟังก์ชันนี้เลื่อนขึ้นบนสุดแบบ smooth ให้อยู่แล้ว

        // ปลดล็อกความสูงหลังจาก crossfade (1.7s) + เลื่อนขึ้นเสร็จเรียบร้อย
        setTimeout(() => {
          mainEl.style.minHeight = "";
          scrollCooldown = false;
        }, 2000);
      }

      let scrollTicking = false;

      function handleScrollFrame() {
        updateScrollProgress();

        if (!scrollCooldown) {
          // ข้ามถ้าเนื้อหาสั้นกว่าจอ (ไม่มีอะไรให้เลื่อนจริงๆ)
          const scrollable =
            document.documentElement.scrollHeight - window.innerHeight;

          if (scrollable >= 150) {
            const isNearBottom =
              window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 30;

            if (isNearBottom) {
              goToNextPageSmoothly();
            }
          }
        }

        scrollTicking = false;
      }

      window.addEventListener(
        "scroll",
        () => {
          if (!scrollTicking) {
            scrollTicking = true;
            requestAnimationFrame(handleScrollFrame);
          }
        },
        { passive: true },
      );

      // Copy-to-clipboard buttons (email / phone)
      document.querySelectorAll(".copy-btn").forEach((btn) => {
        let resetTimer = null;
        btn.addEventListener("click", async () => {
          const text = btn.getAttribute("data-copy");
          try {
            if (navigator.clipboard && window.isSecureContext) {
              await navigator.clipboard.writeText(text);
            } else {
              const tmp = document.createElement("textarea");
              tmp.value = text;
              tmp.style.position = "fixed";
              tmp.style.opacity = "0";
              document.body.appendChild(tmp);
              tmp.select();
              document.execCommand("copy");
              document.body.removeChild(tmp);
            }
          } catch (err) {
            console.error("Copy failed:", err);
            return;
          }
          clearTimeout(resetTimer);
          btn.classList.add("copied");
          resetTimer = setTimeout(() => btn.classList.remove("copied"), 1600);
        });
      });

      // Theme Switcher Logic
      const themeBtn = document.getElementById("themeBtn");
      themeBtn.addEventListener("click", () => {
        const currentTheme =
          document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        themeBtn.classList.add("spin");
        setTimeout(() => themeBtn.classList.remove("spin"), 500);
      });

      // ============================================================
      // Image Gallery + Lightbox
      // ใช้ได้กับ .project-images-stack ทุกจุด (ผลงาน / ใบรับรอง / กิจกรรม)
      // คลิกรูปใดก็ได้เพื่อเปิดดูเต็มขนาด พร้อมเลื่อนซ้าย-ขวาในกลุ่มเดียวกัน
      // ============================================================
      const ZOOM_ICON_SVG = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>`;

      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImg");
      const lightboxCounter = document.getElementById("lightboxCounter");
      const lightboxClose = document.getElementById("lightboxClose");
      const lightboxPrev = document.getElementById("lightboxPrev");
      const lightboxNext = document.getElementById("lightboxNext");

      let galleryImages = [];
      let galleryIndex = 0;

      function renderLightboxImage() {
        const src = galleryImages[galleryIndex];
        if (!src) return;
        lightboxImg.src = src;
        lightboxCounter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
        const multiImage = galleryImages.length > 1;
        lightboxPrev.style.display = multiImage ? "flex" : "none";
        lightboxNext.style.display = multiImage ? "flex" : "none";
      }

      function openLightbox(images, index) {
        galleryImages = images;
        galleryIndex = index;
        renderLightboxImage();
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }

      function closeLightbox() {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }

      function showNextImage() {
        if (galleryImages.length < 2) return;
        galleryIndex = (galleryIndex + 1) % galleryImages.length;
        renderLightboxImage();
      }

      function showPrevImage() {
        if (galleryImages.length < 2) return;
        galleryIndex =
          (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
        renderLightboxImage();
      }

      document.querySelectorAll(".project-images-stack").forEach((stack) => {
        const frames = Array.from(
          stack.querySelectorAll(".project-img-frame"),
        );
        const srcs = frames
          .map((frame) => frame.querySelector("img"))
          .filter(Boolean)
          .map((img) => img.getAttribute("src"));

        frames.forEach((frame, idx) => {
          const badge = document.createElement("span");
          badge.className = "img-zoom-badge";
          badge.innerHTML = ZOOM_ICON_SVG;
          frame.appendChild(badge);

          frame.addEventListener("click", () => openLightbox(srcs, idx));
        });
      });

      lightboxClose.addEventListener("click", closeLightbox);
      lightboxNext.addEventListener("click", showNextImage);
      lightboxPrev.addEventListener("click", showPrevImage);

      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
      });
