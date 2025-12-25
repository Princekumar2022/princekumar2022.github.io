const data = {
  skills: [
    "Node.js", "Express.js", "REST APIs", "JavaScript (ES6+)", "MongoDB", "Redis", "AWS (EC2, Lambda, S3, Amplify)", "JWT", "Bcrypt", "Role-based Access Control", "Socket.IO", "WebSockets", "Git", "GitHub", "Postman", "HTML", "CSS", "Stripe", "Razorpay", "PM2"
  ],
  projects: [
    {
      title: "Digital Benchers",
      desc: "Educational platform for courses, videos, tests, and notes",
      links: [{label: 'Website', href: 'https://digitalbenchers.com'}, {label: 'Android App', href: 'https://play.google.com/store/apps/details?id=com.digitalbencher.benchers'}]
    },
    {
      title: "Onit",
      desc: "Service booking platform (consumer & partner apps)",
      links: [{label: 'Website', href: 'https://www.onit.services'}, {label: 'Partner App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.onit.partners'}, {label: 'Consumer App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.onit.consumer'}]
    },
    {
      title: "Book My Saarthi",
      desc: "Logistics & service booking (user & driver apps)",
      links: [{label: 'User App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.bookmysaarth.bookmysaarthi'}, {label: 'Driver App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.saarthidriver.saarthi'}]
    },
    {
      title: "Dually",
      desc: "Social media application with authentication and media handling",
      links: [{label: 'Android App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.app.dually'}]
    },
    {
      title: "YourTym",
      desc: "Appointment and service booking platform (user & partner apps)",
      links: [{label: 'User App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.yourtym_user'}, {label: 'Partner App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.yourtymepartner'}]
    },
    {
      title: "Atlo",
      desc: "Service management platform (staff & user apps)",
      links: [{label: 'Staff App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.alto_staff.app'}, {label: 'User App (Play Store)', href: 'https://play.google.com/store/apps/details?id=com.alto.user'}]
    }
  ],
  experience: [
    {
      company: 'Flyweis Technology',
      title: 'Node.js Developer',
      date: 'July 2023 – Present',
      bullets: [
        'Designed and developed scalable backend APIs using Node.js and Express.js',
        'Implemented JWT-based authentication and role-based authorization',
        'Optimized MongoDB schemas, indexing, and queries for performance',
        'Integrated real-time features using Socket.IO',
        'Worked on payment gateway integrations (Stripe, Razorpay)',
        'Deployed and managed applications on AWS (EC2, Lambda, S3, Amplify)'
      ]
    },
    {
      company: 'Onit Services',
      title: 'Backend Developer Intern',
      date: 'Mar 2023 – Jul 2023',
      bullets: [
        'Developed backend APIs for consumer and partner applications',
        'Worked on booking workflows, authentication, and partner management',
        'Assisted in debugging and improving API reliability'
      ]
    }
  ],
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Maulana Mazharul Haque Arabic & Persian University',
    years: '2017 – 2021',
    gpa: '75.67%'
  }
}

function populateSkills() {
  const container = document.getElementById('skillsList')
  data.skills.forEach(s => {
    const el = document.createElement('div')
    el.className = 'chip'
    el.textContent = s
    container.appendChild(el)
  })
}

function populateProjects(){
  const grid = document.getElementById('projectsGrid')
  data.projects.forEach(p => {
    const card = document.createElement('article')
    card.className = 'card'
    const h = document.createElement('h3')
    h.textContent = p.title
    const d = document.createElement('p')
    d.textContent = p.desc
    card.appendChild(h)
    card.appendChild(d)
    if(p.links && p.links.length){
      const links = document.createElement('div')
      links.className = 'links'
      p.links.forEach(l => {
        const a = document.createElement('a')
        a.href = l.href
        a.target = '_blank'
        a.rel = 'noopener'

        // If this is a Play Store link, prepend a small Play icon badge and add a short label for small screens
        if(l.href.includes('play.google.com')){
          const badge = document.createElement('span')
          badge.className = 'play-badge'
          badge.setAttribute('aria-hidden', 'true')
          badge.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
              <path fill="#34A853" d="M3 2v20a1 1 0 0 0 1.52.85l15.47-9.85A1 1 0 0 0 20.5 12L4.52 2.15A1 1 0 0 0 3 2z"/>
              <path fill="#FBBC05" d="M3 2v20a1 1 0 0 0 1.52.85L20 12 4.52 2.15A1 1 0 0 0 3 2z" opacity="0.0"/>
            </svg>
          `
          a.appendChild(badge)

          const shortLabel = document.createElement('span')
          shortLabel.className = 'play-text'
          shortLabel.setAttribute('aria-hidden', 'true')
          shortLabel.textContent = 'Play Store'
          a.appendChild(shortLabel)

          // Accessibility & tooltip
          a.setAttribute('title', 'Open in Play Store')
          a.setAttribute('data-tooltip', 'Open in Play Store')
        }

        const text = document.createElement('span')
        text.className = 'link-label'
        text.textContent = l.label
        a.appendChild(text)

        links.appendChild(a)
      })
      card.appendChild(links)
    }
    grid.appendChild(card)
  })
}

function populateExperience(){
  const list = document.getElementById('experienceList')
  if(!list) return
  list.innerHTML = ''
  data.experience.forEach(e => {
    const box = document.createElement('div')
    box.className = 'card'
    const h = document.createElement('h3')
    h.textContent = `${e.title} — ${e.company}`
    const d = document.createElement('div')
    d.className = 'muted'
    d.textContent = e.date
    const ul = document.createElement('ul')
    e.bullets.forEach(b => {
      const li = document.createElement('li')
      li.textContent = b
      ul.appendChild(li)
    })
    box.appendChild(h)
    box.appendChild(d)
    box.appendChild(ul)
    list.appendChild(box)
  })
}

function populateEducation(){
  const container = document.getElementById('educationList')
  if(!container) return
  container.innerHTML = ''
  const box = document.createElement('div')
  box.className = 'card'
  const h = document.createElement('h3')
  h.textContent = data.education.degree
  const d = document.createElement('div')
  d.className = 'muted'
  d.textContent = `${data.education.school} — ${data.education.years}`
  const p = document.createElement('p')
  p.textContent = `GPA: ${data.education.gpa}`
  box.appendChild(h)
  box.appendChild(d)
  box.appendChild(p)
  container.appendChild(box)
}

function setYear(){
  const y = new Date().getFullYear()
  document.getElementById('year').textContent = `${y}`
}

function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme')
  const next = cur === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
  document.getElementById('themeToggle').setAttribute('aria-pressed', next === 'dark')
}

function initTheme(){
  const saved = localStorage.getItem('theme')
  if(saved){
    document.documentElement.setAttribute('data-theme', saved)
    document.getElementById('themeToggle').setAttribute('aria-pressed', saved === 'dark')
  } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.documentElement.setAttribute('data-theme', 'dark')
    document.getElementById('themeToggle').setAttribute('aria-pressed', 'true')
  }
}

function showToast(msg, ms = 3000){
  const t = document.getElementById('toast')
  if(!t) return
  t.textContent = msg
  t.hidden = false
  t.classList.add('show')
  clearTimeout(t._timeout)
  t._timeout = setTimeout(()=>{
    t.classList.remove('show')
    t._timeout = setTimeout(()=> t.hidden = true, 220)
  }, ms)
}

function generatePDF(){
  const element = document.getElementById('main')
  const opt = {
    margin:       10,
    filename:     'Prince_Kumar_Portfolio.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, useTaint: false },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  const btns = document.querySelectorAll('#downloadBtn, #downloadBtnInline')
  btns.forEach(b => b.disabled = true)

  if(typeof window.html2pdf !== 'function'){
    showToast('PDF tool not loaded — opening print dialog')
    console.warn('html2pdf not available, falling back to print')
    btns.forEach(b => b.disabled = false)
    return window.print()
  }

  try{
    showToast('Generating PDF — please wait...')
    html2pdf().set(opt).from(element).save().then(()=>{
      btns.forEach(b => b.disabled = false)
      showToast('PDF generated')
    }).catch(err =>{
      console.warn('PDF generation failed, falling back to print', err)
      showToast('PDF failed, opening print dialog')
      btns.forEach(b => b.disabled = false)
      window.print()
    })
  }catch(err){
    console.error('PDF error', err)
    showToast('Something went wrong, opening print dialog')
    btns.forEach(b => b.disabled = false)
    window.print()
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  populateSkills()
  populateExperience()
  populateEducation()
  populateProjects()
  setYear()
  initTheme()

  // quick download links show toast
  document.querySelectorAll('.inline-actions a[download], .resume-inline').forEach(a => a.addEventListener('click', ()=> showToast('Download starting...')))

  document.getElementById('themeToggle').addEventListener('click', toggleTheme)
  document.getElementById('downloadBtn').addEventListener('click', generatePDF)
  document.getElementById('downloadBtnInline').addEventListener('click', generatePDF)

  // keyboard accessibility for theme button
  document.getElementById('themeToggle').addEventListener('keydown',(e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault(); toggleTheme()
    }
  })

  // Resume dropdown (choose PDF or Word)
  const resumeToggle = document.getElementById('resumeToggle')
  const resumeMenu = document.getElementById('resumeMenu')
  if(resumeToggle && resumeMenu){
    resumeToggle.addEventListener('click', ()=>{
      const expanded = resumeToggle.getAttribute('aria-expanded') === 'true'
      resumeToggle.setAttribute('aria-expanded', String(!expanded))
      resumeMenu.hidden = expanded
      if(!expanded){
        const first = resumeMenu.querySelector('a')
        if(first) first.focus()
      }
    })

    // Close on outside click
    document.addEventListener('click', (e)=>{
      if(!resumeToggle.contains(e.target) && !resumeMenu.contains(e.target)){
        resumeMenu.hidden = true
        resumeToggle.setAttribute('aria-expanded', 'false')
      }
    })

    // Close when a menu link is clicked and show download toast
    resumeMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      resumeMenu.hidden = true
      resumeToggle.setAttribute('aria-expanded', 'false')
      showToast('Download starting...')
    }))

    // Close with Escape key
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        resumeMenu.hidden = true
        resumeToggle.setAttribute('aria-expanded', 'false')
        resumeToggle.focus()
      }
    })
  }
})