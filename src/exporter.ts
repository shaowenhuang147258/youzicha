/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PORTFOLIO_PROJECTS, BIOGRAPHY_TEXT, COLLABORATORS } from "./data";

export function generateStandaloneHTML(): string {
  // Translate SVGs to literal string markup
  const svgDatabase: Record<string, string> = {
    blower: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#131313"/>
        <circle cx="200" cy="180" r="70" stroke="#333" stroke-width="1" />
        <circle cx="200" cy="180" r="50" stroke="#ff0000" stroke-width="1" stroke-dasharray="4 4" />
        <circle cx="200" cy="180" r="20" fill="#ff0000" />
        <path d="M 200,180 L 200,110 M 200,180 L 200,250 M 200,180 L 130,180 M 200,180 L 270,180" stroke="#444" stroke-width="2" />
        <path d="M 200,180 L 150,130 M 200,180 L 250,230 M 200,180 L 150,230 M 200,180 L 250,130" stroke="#333" stroke-width="1.5" />
        <path d="M 40,200 C 100,140 300,140 360,200" stroke="#ff0000" stroke-width="1.5" opacity="0.8"/>
        <path d="M 40,220 C 100,160 300,160 360,220" stroke="#eee" stroke-width="1" opacity="0.4"/>
        <path d="M 40,180 C 100,120 300,120 360,180" stroke="#eee" stroke-width="1" opacity="0.4"/>
        <rect x="50" y="275" width="300" height="70" fill="#1A1A1A" stroke="#333" stroke-width="1"/>
        <line x1="200" y1="275" x2="200" y2="345" stroke="#333" stroke-width="1"/>
        <text x="65" y="295" fill="#aaa" font-family="'JetBrains Mono', monospace" font-size="9">RPM CORE VALUE:</text>
        <text x="65" y="315" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900">110,000 / MIN</text>
        <text x="65" y="332" fill="#555" font-family="'JetBrains Mono', monospace" font-size="8">OCTANE RAYTRACE: C4D ENGINE</text>
        <text x="215" y="295" fill="#aaa" font-family="'JetBrains Mono', monospace" font-size="9">CHASSIS PROCESS:</text>
        <text x="215" y="315" fill="#eee" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="bold">ANODIZED MATTE</text>
        <text x="215" y="332" fill="#555" font-family="'JetBrains Mono', monospace" font-size="8">GLOSS RATIO: 0.00% SPECULAR</text>
        <text x="30" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="2">AMZN: CODE_BLW01</text>
        <text x="30" y="70" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" letter-spacing="-0.5">HIGH-SPEED BLOWER</text>
        <text x="340" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">01/08</text>
      </svg>
    `,
    mower: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#1A1A1A"/>
        <path d="M 50,220 L 350,220" stroke="#333" stroke-width="1" />
        <line x1="80" y1="220" x2="70" y2="200" stroke="#555" stroke-width="1.5" />
        <line x1="120" y1="220" x2="110" y2="195" stroke="#ff0000" stroke-width="1.5" />
        <line x1="160" y1="220" x2="155" y2="200" stroke="#555" stroke-width="1.5" />
        <line x1="200" y1="220" x2="190" y2="190" stroke="#ff0000" stroke-width="2" />
        <line x1="240" y1="220" x2="235" y2="205" stroke="#555" stroke-width="1.5" />
        <line x1="280" y1="220" x2="270" y2="200" stroke="#555" stroke-width="1.5" />
        <line x1="320" y1="220" x2="315" y2="198" stroke="#ff0000" stroke-width="1.5" />
        <rect x="110" y="90" width="180" height="90" rx="12" fill="#151515" stroke="#444" stroke-width="1.5" />
        <circle cx="160" cy="135" r="22" stroke="#ff0000" stroke-width="1.5" stroke-dasharray="3 3" />
        <circle cx="240" cy="135" r="22" stroke="#eee" stroke-width="1" stroke-dasharray="3 3" />
        <line x1="200" y1="90" x2="200" y2="40" stroke="#ff0000" stroke-width="0.75" />
        <circle cx="200" cy="40" r="3" fill="#ff0000" />
        <text x="210" y="55" fill="#ff0000" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold">GNSS.ALIGN // 100%</text>
        <text x="50" y="300" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="12" letter-spacing="3">GRID_LM02 / LAWN_ROBOT</text>
        <text x="50" y="340" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold" letter-spacing="1">OUTDOOR NATURAL LUX SCENE</text>
        <text x="330" y="300" fill="#555" font-family="'JetBrains Mono', monospace" font-size="11">02/08</text>
      </svg>
    `,
    tiller: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#121212"/>
        <line x1="200" y1="40" x2="200" y2="360" stroke="#333" stroke-width="0.5" stroke-dasharray="4 4" />
        <rect x="140" y="60" width="120" height="60" fill="#1E1E1E" stroke="#ff0000" stroke-width="1.5" />
        <text x="200" y="95" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold" text-anchor="middle">212CC MOTOR CORE</text>
        <line x1="140" y1="160" x2="260" y2="160" stroke="#444" stroke-width="2" />
        <circle cx="160" cy="160" r="14" fill="#1A1A1A" stroke="#eee" stroke-width="1" />
        <circle cx="240" cy="160" r="14" fill="#1A1A1A" stroke="#eee" stroke-width="1" />
        <circle cx="200" cy="160" r="18" fill="#151515" stroke="#ff0000" stroke-width="1.5" />
        <path d="M 130,220 Q 200,190 270,220" stroke="#ff0000" stroke-width="1.5" />
        <path d="M 265,213 L 275,221 L 265,227" fill="#ff0000" stroke="#ff0000" stroke-width="1" />
        <text x="200" y="240" fill="#aaa" font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">HIGH-TORQUE CLUTCH SHAFT</text>
        <g stroke="#ff0000" stroke-width="2">
          <path d="M 150,270 L 170,310 M 250,270 L 230,310" />
          <path d="M 170,310 L 200,290 L 230,310" stroke-linecap="square" />
        </g>
        <circle cx="200" cy="290" r="6" fill="#111" stroke="#eee" stroke-width="1" />
        <line x1="80" y1="60" x2="140" y2="60" stroke="#333" stroke-width="0.75" />
        <line x1="80" y1="310" x2="170" y2="310" stroke="#333" stroke-width="0.75" />
        <path d="M 80,60 L 80,310" stroke="#ff0000" stroke-width="1" />
        <text x="65" y="185" fill="#ff0000" font-family="'JetBrains Mono', monospace" font-size="9" transform="rotate(-90 65 185)" text-anchor="middle">EXP.SPAN: 740MM</text>
        <text x="40" y="355" fill="#555" font-family="'JetBrains Mono', monospace" font-size="9">HIGH CONVERSION TECHNICAL BREAKDOWN</text>
        <text x="330" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">03/08</text>
      </svg>
    `,
    vessel: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#171717"/>
        <rect x="130" y="110" width="140" height="180" rx="6" fill="#1E1E1E" stroke="#555" stroke-width="1.5" />
        <path d="M 130,220 L 270,180" stroke="#ff0000" stroke-width="1.5" />
        <line x1="100" y1="110" x2="300" y2="110" stroke="#333" stroke-width="1" stroke-dasharray="3 3" />
        <line x1="100" y1="290" x2="300" y2="290" stroke="#333" stroke-width="1" stroke-dasharray="3 3" />
        <path d="M100 110 L100 290" stroke="#ff0000" stroke-width="1" />
        <line x1="95" y1="110" x2="105" y2="110" stroke="#ff0000" stroke-width="1" />
        <line x1="95" y1="290" x2="105" y2="290" stroke="#ff0000" stroke-width="1" />
        <text x="75" y="205" fill="#ff0000" font-family="'JetBrains Mono', monospace" font-size="9" transform="rotate(-90 75 205)" text-anchor="middle">DIM: 180MM</text>
        <text x="145" y="145" fill="#aaa" font-family="'JetBrains Mono', monospace" font-size="9">POM POLYMER V24</text>
        <text x="145" y="160" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold">MATTE RECTIFIED</text>
        <text x="30" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="2">ABCD: CODE_3D4</text>
        <text x="310" y="360" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">04/08</text>
        <text x="30" y="360" fill="#555" font-family="'JetBrains Mono', monospace" font-size="9">NON-SPECULAR SHADING EMULATION</text>
      </svg>
    `,
    wayfinding: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#131313"/>
        <path d="M 80,180 H 260 L 210,130 M 260,180 L 210,230" stroke="#ff0000" stroke-width="14" stroke-linecap="square" />
        <rect x="80" y="270" width="240" height="30" fill="#ff0000" />
        <text x="90" y="291" fill="#121212" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" letter-spacing="1">WALL PANEL C</text>
        <text x="80" y="90" fill="#eee" font-family="'Plus Jakarta Sans', sans-serif" font-size="36" font-weight="900" letter-spacing="-2">↑ EXH.HALL 02</text>
        <text x="80" y="350" fill="#555" font-family="'JetBrains Mono', monospace" font-size="10">BEIJING CONTEMP WAYFINDING SYSTEM</text>
        <text x="330" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">05/08</text>
      </svg>
    `,
    matrix: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#1A1A1A"/>
        <text x="30" y="70" fill="#ff0000" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="900">A B C D E F G</text>
        <text x="30" y="105" fill="#444" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="400">H I J K L M N</text>
        <text x="30" y="140" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700">O P Q R S T U</text>
        <text x="30" y="175" fill="#ff0000" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="300" letter-spacing="6">V W X Y Z</text>
        <line x1="30" y1="205" x2="370" y2="205" stroke="#ff0000" stroke-width="2" />
        <text x="210" y="340" fill="#252525" font-family="'Plus Jakarta Sans', sans-serif" font-size="150" font-weight="850">X</text>
        <text x="290" y="340" fill="#ff0000" font-family="'JetBrains Mono', monospace" font-size="150" font-weight="300" opacity="0.8">T</text>
        <text x="30" y="235" fill="#888" font-family="'JetBrains Mono', monospace" font-size="10">KERNING WEIGHTS: 300 / 500 / 900</text>
        <text x="30" y="250" fill="#aaa" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="bold" letter-spacing="0.5">MONOSPACING STRETCH SYSTEM</text>
        <text x="30" y="360" fill="#555" font-family="'JetBrains Mono', monospace" font-size="9">TEST FILE: MONO_SKELETAL_SPEC.TTF</text>
        <text x="335" y="70" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">06/08</text>
      </svg>
    `,
    parametric: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#121212"/>
        <g stroke="#333" stroke-width="1">
          <polygon points="50,150 150,150 100,80" fill="#1E1E1E"/>
          <polygon points="150,150 250,150 200,80" fill="#ff0000" opacity="0.85"/>
          <polygon points="250,150 350,150 300,80" fill="#1E1E1E"/>
          <polygon points="50,150 150,150 100,220" fill="#1E1E1E"/>
          <polygon points="150,150 250,150 200,220" fill="#111111"/>
          <polygon points="250,150 350,150 300,220" fill="#1E1E1E"/>
          <polygon points="100,220 200,220 150,290" fill="#222"/>
          <polygon points="200,220 300,220 250,290" fill="#ff0000"/>
        </g>
        <line x1="100" y1="80" x2="300" y2="290" stroke="#ff0000" stroke-width="1" stroke-dasharray="3 3" />
        <circle cx="200" cy="150" r="4" fill="#eee" />
        <text x="50" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" letter-spacing="1">ABCD: CODE_P37</text>
        <text x="50" y="340" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="bold">PARAMETRIC CERAMIC PANEL</text>
        <text x="50" y="360" fill="#555" font-family="'JetBrains Mono', monospace" font-size="9">COMPUTED COORD: [N_4329_P3_LAMBERT_DIFFUSE]</text>
        <text x="330" y="50" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">07/08</text>
      </svg>
    `,
    anthology: `
      <svg class="w-full h-full aspect-square" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#171717"/>
        <text x="30" y="110" fill="#eee" font-family="'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="950" letter-spacing="-2">A BLACK</text>
        <text x="30" y="160" fill="#eee" font-family="'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="950" letter-spacing="-2">COVER</text>
        <text x="30" y="210" fill="#ff0000" font-family="'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="950" letter-spacing="-2">DESIGN.</text>
        <rect x="30" y="240" width="340" height="18" fill="#ff0000" />
        <rect x="30" y="265" width="220" height="4" fill="#EEEEEE" />
        <text x="35" y="254" fill="#121212" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold" letter-spacing="0.5">DECADE DIRECTORY 2016 - 2026</text>
        <text x="30" y="315" fill="#888" font-family="'JetBrains Mono', monospace" font-size="10">RETROSPECTIVE CODES DEBOSSED</text>
        <text x="30" y="355" fill="#eee" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">08 / ARCHIVE</text>
        <text x="325" y="355" fill="#555" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="bold">08/08</text>
      </svg>
    `
  };

  // Construct projects rendering collection
  const projectsHtml = PORTFOLIO_PROJECTS.map((project) => {
    const inlineSvg = svgDatabase[project.svgId] || "";
    return `
      <div class="project-card relative group aspect-square bg-[#161616] overflow-hidden cursor-pointer border border-[#222222]" 
           data-id="${project.id}">
        <!-- Inline Scalable High-contrast Vector Specimen -->
        <div class="w-full h-full transform transition-transform duration-700 group-hover:scale-105">
          ${inlineSvg}
        </div>
        
        <!-- Absolute Rigid Shadow Overlay with High contrast typography -->
        <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-95 transition-all duration-300 flex flex-col justify-between p-6 opacity-0 hover:opacity-100 z-10 select-none">
          <div class="flex justify-between items-start">
            <span class="font-mono text-xs text-[#ff0000] tracking-wider font-bold">${project.code}</span>
            <span class="font-mono text-xs text-stone-500">${project.year}</span>
          </div>
          <div class="mt-auto">
            <p class="font-mono text-[10px] text-zinc-400 mb-1 tracking-wider uppercase">${project.categoryEn}</p>
            <h3 class="font-sans font-black text-xl text-[#ff0000] leading-tight tracking-tight">${project.titleEn}</h3>
            <p class="font-sans font-bold text-base text-white mt-1 lang-zh">${project.title}</p>
            <div class="h-[2px] w-8 bg-[#ff0000] mt-3"></div>
          </div>
        </div>
      </div>
    `;
  }).join("\n");

  // Construct structured JSON database to seed script block
  const projectsJson = JSON.stringify(PORTFOLIO_PROJECTS, null, 2);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jerry S. | Visual & 3D Design Portfolio</title>
  
  <!-- Premium Minimalist Typefaces (Swiss & Grotesque influence) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CDN for standard single-file deployment style -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>

  <style type="text/css">
    /* High contrast, raw matte typography layout in style of A Black Cover Design */
    body {
      background-color: #121212;
      color: #eeeeee;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Core Selection Colors - Absolute Red/Black constraint */
    ::selection {
      background-color: #ff0000;
      color: #000000;
    }

    button:focus, input:focus, textarea:focus {
      outline: 2px solid #ff0000;
      outline-offset: -2px;
    }

    /* Matte textures */
    .matte-grid-line {
      background-color: #222222;
    }

    /* Transition curves */
    .custom-transition {
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    /* Utility transitions */
    .drawer-overlay {
      background-color: rgba(10, 10, 10, 0.85);
      backdrop-filter: none; /* Forced matte, no glossy backdrop blur */
    }

    .lang-en { display: none; }
    body.lang-mode-en .lang-en { display: block; }
    body.lang-mode-en .lang-zh { display: none; }
    body.lang-mode-zh .lang-zh { display: block; }
    body.lang-mode-zh .lang-en { display: none; }
  </style>
</head>
<body class="lang-mode-zh min-h-screen relative font-sans flex flex-col justify-between antialiased selection:bg-red-600 selection:text-black">

  <!-- TOP DECORATIVE GRID LINES -->
  <div class="fixed top-0 left-0 w-full h-[1px] bg-[#222] z-50"></div>
  <div class="fixed bottom-0 left-0 w-full h-[1px] bg-[#222] z-50"></div>
  <div class="fixed top-0 left-4 md:left-12 w-[1px] h-full bg-[#1e1e1e] z-40 pointer-events-none"></div>
  <div class="fixed top-0 right-4 md:right-12 w-[1px] h-full bg-[#1e1e1e] z-40 pointer-events-none"></div>

  <!-- MAIN NAVIGATION BAR -->
  <header class="sticky top-0 z-30 bg-[#121212] border-b border-[#222] px-4 md:px-12 py-5 max-w-7xl mx-auto w-full flex justify-between items-center transition-all duration-300">
    <div class="flex items-center gap-4">
      <span class="font-mono text-zinc-950 bg-[#ff0000] px-2 py-0.5 text-xs font-black tracking-widest">ABCD</span>
      <a href="#" class="font-mono text-xs tracking-wider font-bold hover:text-[#ff0000] transition-colors">JERRY S. // ARCHIVE</a>
    </div>
    
    <div class="flex items-center gap-6">
      <!-- Dual Language Toggle -->
      <div class="flex border border-[#333] p-0.5 bg-black">
        <button id="langToggleZH" class="px-2 py-1 font-mono text-[10px] bg-[#ff0000] text-black font-extrabold focus:outline-none transition-all duration-200">ZH</button>
        <button id="langToggleEN" class="px-2 py-1 font-mono text-[10px] text-zinc-400 font-medium focus:outline-none hover:text-white transition-all duration-200">EN</button>
      </div>

      <nav class="hidden sm:flex gap-6">
        <a href="#gallery" class="font-mono text-xs hover:text-[#ff0000] transition-colors tracking-wide">01_WORKS</a>
        <a href="#about" class="font-mono text-xs hover:text-[#ff0000] transition-colors tracking-wide">02_BIO</a>
        <a href="#contact" class="font-mono text-xs hover:text-[#ff0000] transition-colors tracking-wide">03_FEEDBACK</a>
      </nav>
    </div>
  </header>

  <!-- CONTAINER -->
  <main class="w-full max-w-7xl mx-auto px-4 md:px-12 flex-1 relative">

    <!-- HERO SECTION - Extreme big Typographic Layout -->
    <section class="py-16 md:py-28 border-b border-[#222222] flex flex-col justify-center relative overflow-hidden">
      <!-- Structural coordinate watermark -->
      <div class="absolute right-0 top-1/4 opacity-10 font-mono text-right text-[10px] text-[#ff0000] hidden lg:block leading-relaxed">
        LAT_COORDS: 39.9042° N, 116.4074° E<br>
        MATTE SHADING ENGINE EMULATION_ON<br>
        DESIGN STYLE: A BLACK COVER homage<br>
        SYS_STATUS: ACTIVE // UTC_2026
      </div>

      <div class="max-w-4xl">
        <div class="inline-block border border-[#ff0000] px-3 py-1 mb-6">
          <p class="font-mono text-xs tracking-widest text-[#ff0000] font-black uppercase">
            <span class="lang-zh">先锋视觉重力 ✕ 参数三维物理</span>
            <span class="lang-en">AVANT VISUAL GRAVITY ✕ PARAMETRIC 3D RENDER</span>
          </p>
        </div>
        
        <!-- Massive visual text block -->
        <h1 class="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tighter leading-[0.85] text-white">
          JERRY S.
        </h1>
        <h2 class="text-3xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter leading-[0.9] mt-3 break-keep text-zinc-400">
          <span class="lang-zh text-[#ff0000]">视觉传达与</span>
          <span class="lang-en text-[#ff0000]">VISUAL &</span>
          <br>
          <span class="lang-zh text-white">3D 渲染设计师。</span>
          <span class="lang-en text-white">3D SPACE RENDERS.</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-[#1f1f1f]">
          <p class="font-sans text-sm text-zinc-400 leading-relaxed max-w-md">
            <span class="lang-zh">
              立足于数学物理法则下的空间重构，秉持极度克制的色彩体系（黑、白、红），剥离一切玻璃、金属的高光反射质感。只用大张大合的字体结构与高密度哑光（Ultra-Matte）表面，创造出兼具秩序与重工业视觉张力的数字构造。
            </span>
            <span class="lang-en">
              Rooted in computational rules, we sustain a highly restricted color space consisting strictly of solid black, deep graphite, neutral off-white, and structural blood-red. Extruding speculative 3D assets entirely with ultra-matte behaviors.
            </span>
          </p>
          <div class="flex flex-col justify-end font-mono text-xs text-zinc-500 gap-1 md:text-right">
            <div>CORE SERVICE: 3D SHADING / CMF RESEARCH / BRAND IDENTITY</div>
            <div>HOMAGE TO: A BLACK COVER DESIGN (廣煜 / NOD YOUNG)</div>
            <div>PORTFOLIO REVISION: ARCHIVE_2026_V1</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WORK GALLERY SECTON - SEAMLESS DENSE GRID -->
    <section id="gallery" class="py-12 border-b border-[#222222]">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
        <h2 class="font-sans font-black text-2xl tracking-tight text-white flex items-center gap-3">
          <span class="text-[#ff0000] font-mono font-medium">/01</span> 
          <span class="lang-zh">精选作品集</span>
          <span class="lang-en">SELECTED PROJECTS</span>
        </h2>
        <span class="font-mono text-xs text-zinc-500 mt-1 sm:mt-0">
          GRID MATRIX: 8 MODULE CORES // CLASSIFIED INDEX
        </span>
      </div>

      <!-- SEAMLESS TIGHT GRID SYSTEM -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-[#222] border border-[#222]">
        ${projectsHtml}
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-20 border-b border-[#222222]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Column 1: Header / Quick list -->
        <div class="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <h2 class="font-sans font-black text-2xl tracking-tight text-white flex items-center gap-3 mb-6">
            <span class="text-[#ff0000] font-mono font-medium">/02</span>
            <span class="lang-zh">个人述档</span>
            <span class="lang-en">BIOGRAPHY</span>
          </h2>
          
          <div class="border border-[#222] p-5 bg-black">
            <div class="flex items-center gap-2 mb-4">
              <span class="w-2 h-2 rounded-full bg-[#ff0000]"></span>
              <span class="font-mono text-xs text-white font-bold">PROFILE DATASHEET</span>
            </div>
            
            <table class="w-full font-mono text-[11px] text-zinc-400 leading-relaxed border-collapse">
              <tr class="border-b border-[#1A1A1A]">
                <td class="py-2 text-zinc-500">BORN:</td>
                <td class="py-2 text-right text-white">1996, SHANDONG CHN</td>
              </tr>
              <tr class="border-b border-[#1A1A1A]">
                <td class="py-2 text-zinc-500">DISCIPLINE:</td>
                <td class="py-2 text-right text-white text-[#ff0000] font-bold">3D ART & VISUAL COM.</td>
              </tr>
              <tr class="border-b border-[#1A1A1A]">
                <td class="py-2 text-zinc-500">CURRENT BASE:</td>
                <td class="py-2 text-right text-white">BEIJING / REMOTE</td>
              </tr>
              <tr>
                <td class="py-2 text-zinc-500">PRINCIPLE:</td>
                <td class="py-2 text-right text-white tracking-tighter">ULTRA-MATTE / SWISS-GRID</td>
              </tr>
            </table>
          </div>
        </div>
        
        <!-- Column 2: Biography Text -->
        <div class="lg:col-span-5">
          <p class="font-sans text-lg text-stone-200 leading-relaxed text-justify">
            <span class="lang-zh font-light">${BIOGRAPHY_TEXT.zh}</span>
            <span class="lang-en font-light">${BIOGRAPHY_TEXT.en}</span>
          </p>
          
          <div class="mt-8 border-l-2 border-[#ff0000] pl-6 py-1">
            <p class="font-sans font-bold text-white text-sm lang-zh">
              “纯粹的设计不为取悦视能而生。它是骨骼，是直白，是在没有任何环境漫散射伪装下的重力展示。”
            </p>
            <p class="font-sans font-medium text-white text-sm italic lang-en">
              \"Pure typography is architectural, not illustrative. It represents the structural skeleton of content exposed to extreme matte fields.\"
            </p>
            <span class="font-mono text-xs text-zinc-500 block mt-2">— JERRY S.</span>
          </div>
        </div>

        <!-- Column 3: Collaborators Directory -->
        <div class="lg:col-span-3">
          <h3 class="font-mono text-xs text-zinc-400 font-extrabold tracking-widest uppercase mb-4 text-[#ff0000]">
            COLLABORATORS / 合作机构
          </h3>
          <ul class="border border-[#222] bg-[#161616] divide-y divide-[#222]">
            ${COLLABORATORS.map((collab) => `
              <li class="p-3 font-mono text-[11px] text-zinc-300 hover:bg-black hover:text-[#ff0000] flex justify-between items-center transition-colors">
                <span>${collab}</span>
                <span class="text-[#ff0000]/40 font-bold">&#8599;</span>
              </li>
            `).join("")}
          </ul>
        </div>

      </div>
    </section>

    <!-- CONTACT & LOCAL BOARD -->
    <section id="contact" class="py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="font-sans font-black text-2xl tracking-tight text-white flex items-center gap-3 mb-6">
            <span class="text-[#ff0000] font-mono font-medium">/03</span>
            <span class="lang-zh">立即合作</span>
            <span class="lang-en">CONTACT PROJECT</span>
          </h2>
          <p class="font-sans text-sm text-zinc-400 mb-8 max-w-md leading-relaxed">
            <span class="lang-zh">
              如果您有关于3D参数造型表现、高档次产品静物写实渲染、或者前卫的书籍和品牌视觉形象设计，欢迎向我留言。我会在12小时内给予回复。本项目使用本地存储记录留言。
            </span>
            <span class="lang-en">
              If you seek avant-garde 3D visual expressions, precision CMF material calculations, or monumental editorial layouts, submit your brief below. Your messages are safely cached in localStorage.
            </span>
          </p>

          <div class="space-y-4 font-mono text-xs text-zinc-400">
            <div class="flex items-center gap-3 p-3 border border-[#222] bg-stone-950">
              <span class="text-[#ff0000] font-bold">EMAIL:</span>
              <a href="mailto:noblesxuyen233@gmail.com" class="text-white hover:underline hover:text-[#ff0000]">noblesxuyen233@gmail.com</a>
            </div>
            <div class="flex items-center gap-3 p-3 border border-[#222] bg-stone-950">
              <span class="text-[#ff0000] font-bold">TELEPHONE:</span>
              <span class="text-white">+86 (10) 9021-9923</span>
            </div>
            <div class="flex items-center gap-3 p-3 border border-[#222] bg-stone-950">
              <span class="text-[#ff0000] font-bold">WORKING SPEC:</span>
              <span class="text-white">MON - FRI // 10:00 - 19:30 UTC+8</span>
            </div>
          </div>
        </div>

        <!-- MESSAGE BOARD FORM -->
        <div class="border border-[#222] bg-[#161616] p-6 md:p-8">
          <div class="flex justify-between items-center mb-6 border-b border-[#222] pb-4">
            <h3 class="font-mono text-xs text-white font-black tracking-wider uppercase">LOCAL SYSTEM BOARD // 留言板</h3>
            <span class="text-[10px] font-mono text-zinc-500 font-bold bg-black px-2 py-0.5 border border-[#333]">OFFLINE-SECURE</span>
          </div>

          <form id="contactForm" class="space-y-4">
            <div>
              <label class="block font-mono text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-wider">YOUR NAME / 称呼 *</label>
              <input type="text" id="formName" required class="w-full bg-black border border-[#333] text-white px-3 py-2 font-mono text-xs focus:ring-0 focus:border-[#ff0000] focus:outline-none transition-colors" placeholder="e.g. Director Lin">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block font-mono text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-wider">EMAIL ADDRESS / 邮箱 *</label>
                <input type="email" id="formEmail" required class="w-full bg-black border border-[#333] text-white px-3 py-2 font-mono text-xs focus:ring-0 focus:border-[#ff0000] focus:outline-none transition-colors" placeholder="e.g. lin@sonar.com">
              </div>
              <div>
                <label class="block font-mono text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-wider">COMPANY / 机构</label>
                <input type="text" id="formCompany" class="w-full bg-black border border-[#333] text-white px-3 py-2 font-mono text-xs focus:ring-0 focus:border-[#ff0000] focus:outline-none transition-colors" placeholder="e.g. Sonar Lab">
              </div>
            </div>
            <div>
              <label class="block font-mono text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-wider">BRIEF DESCRIPTION / 需求简述 *</label>
              <textarea id="formContent" required rows="4" class="w-full bg-black border border-[#333] text-white px-3 py-2 font-mono text-xs focus:ring-0 focus:border-[#ff0000] focus:outline-none transition-colors resize-none" placeholder="Details of visual assignment..."></textarea>
            </div>

            <!-- Negative feedback alert box (strictly no green) -->
            <div id="formStatus" class="hidden font-mono text-[10px] p-3 uppercase font-bold tracking-wider text-center"></div>

            <button type="submit" class="w-full bg-[#ff0000] text-black font-sans font-black tracking-widest text-xs py-3 uppercase hover:bg-white hover:text-black transition-colors duration-300 transform active:translate-y-0.5">
              SUBMIT RECORD / 提交留言
            </button>
          </form>

          <!-- SUBMITTED LIST (Localhost Storage mirror) -->
          <div class="mt-8 pt-6 border-t border-[#222]">
            <h4 class="font-mono text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-3 flex justify-between items-center">
              <span>LOCAL TRANSMISSIONS FEED / 历史提交列表</span>
              <button id="clearTransmissions" class="text-[#ff0000] font-bold hover:underline">CLEAR ALL</button>
            </h4>
            <div id="submissionsFeed" class="space-y-3 max-h-48 overflow-y-auto pr-2 no-scrollbar">
              <!-- Dynamically populated via JS -->
              <p class="font-mono text-[10px] text-zinc-600 italic">No local transmissions captured yet. Fill form to commit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- IMMERSIVE STANDALONE MODAL DRAWER FOR DETAILED WORK VIEW -->
  <div id="projectModal" class="fixed inset-0 z-50 hidden drawer-overlay flex items-center justify-end">
    <!-- Close area -->
    <div class="absolute inset-0 cursor-pointer" id="projectModalCloseArea"></div>
    
    <!-- Drawer Panel -->
    <div class="relative w-full max-w-xl md:max-w-2xl h-full bg-[#121212] border-l border-[#222] shadow-2xl flex flex-col justify-between z-10 transition-transform duration-500 transform translate-x-full" id="projectModalPanel">
      
      <!-- Drawer Header -->
      <div class="flex items-center justify-between px-6 py-5 border-b border-[#222] bg-[#161616]">
        <div class="flex items-center gap-3">
          <span class="font-mono text-[10px] text-black bg-[#ff0000] px-2 py-0.5 font-black uppercase" id="mCode">ABCD-001</span>
          <span class="font-mono text-[10px] text-zinc-400" id="mYear">2026</span>
        </div>
        <button id="projectModalCloseBtn" class="font-mono text-xs text-zinc-400 hover:text-[#ff0000] border border-[#333] hover:border-[#ff0000] bg-black px-3 py-1 font-bold transition-all">
          CLOSE [✕]
        </button>
      </div>

      <!-- Drawer Body -->
      <div class="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 no-scrollbar">
        <!-- SVG Graphic Cover Container inside detail view -->
        <div class="border border-[#222] bg-black aspect-video flex items-center justify-center overflow-hidden relative" id="mVisualCover">
          <!-- Dynamic vector elements load here -->
        </div>

        <div>
          <span class="font-mono text-xs text-[#ff0000] uppercase tracking-wider block mb-1" id="mCategory">3D RENDER</span>
          <h2 class="font-sans font-black text-2xl md:text-3xl text-white mb-2 leading-tight" id="mTitleEn">BRUTALIST PAVILION</h2>
          <h3 class="font-sans font-extrabold text-lg text-zinc-300 leading-tight pb-4 border-b border-[#1A1A1A]" id="mTitleZh">混凝土空间异质展馆</h3>
        </div>

        <!-- Overview details block -->
        <div class="grid grid-cols-2 gap-4 border-b border-[#1A1A1A] pb-6 font-mono text-xs">
          <div>
            <span class="text-zinc-500 block uppercase text-[10px] mb-1">CLIENT / 合作方</span>
            <span class="text-white font-bold" id="mClient">Biennale Comm.</span>
          </div>
          <div>
            <span class="text-zinc-500 block uppercase text-[10px] mb-1">SYSTEM KEYWORDS</span>
            <span class="text-white font-bold" id="mTags">3D Render, Brutalist</span>
          </div>
        </div>

        <!-- Description Paragraphs -->
        <div class="space-y-4">
          <h4 class="font-mono text-[10px] text-zinc-400 font-black tracking-widest uppercase text-[#ff0000]">
            DESIGN DISCLOSURE / 设计说明
          </h4>
          <p class="font-sans text-sm text-zinc-300 leading-relaxed text-justify lang-zh" id="mDetailsZh">设计详情。</p>
          <p class="font-sans text-sm text-zinc-400 leading-relaxed text-justify italic lang-en" id="mDetailsEn">Design details English.</p>
        </div>

        <!-- Credits system -->
        <div>
          <h4 class="font-mono text-[10px] text-zinc-400 font-black tracking-widest uppercase text-[#ff0000] mb-3">
            ASSY CREDITS / 职员表与贡献
          </h4>
          <table class="w-full font-mono text-xs text-zinc-400 divide-y divide-[#1F1F1F]">
            <tbody id="mCreditsList">
              <!-- Populated via Javascript -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Drawer Footer -->
      <div class="p-6 border-t border-[#222] bg-[#161616] flex justify-between items-center">
        <span class="font-mono text-[10px] text-zinc-500 font-bold">A BLACK COVER DESIGN HIERARCHICAL CORES</span>
        <span class="font-mono text-xs text-[#ff0000] font-black">[ JERRY S. ✕ ABCD ]</span>
      </div>
    </div>
  </div>

  <!-- STANDALONE SOLEMN FOOTER -->
  <footer class="border-t border-[#222] py-8 bg-[#101010] px-4 md:px-12 w-full max-w-7xl mx-auto mt-16">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-3">
        <span class="font-mono text-zinc-950 bg-white px-2 py-0.5 text-xs font-black">J.S</span>
        <p class="font-mono text-[10px] text-zinc-500">&copy; 2026 JERRY S. ALL HUMAN RIGHTS COMMITTED. HONOURING MINIMALISM.</p>
      </div>

      <div class="flex gap-4 text-zinc-500 font-mono text-[10px] font-bold">
        <span>POWERED BY RAW HTML/CSS/JS</span>
        <span class="text-[#ff0000]">/</span>
        <span>GITHUB PAGES READY</span>
        <span class="text-[#ff0000]">/</span>
        <a href="#" class="hover:text-[#ff0000] uppercase">BACK TO APEX ↑</a>
      </div>
    </div>
  </footer>

  <!-- SEED JSON DATA AND INTERACTIVE SPA DRIVER -->
  <script type="text/javascript">
    const SEED_PROJECTS = ${projectsJson};
    
    // Core multilingual state manager
    let currentLang = 'zh';

    function setLanguage(lang) {
      currentLang = lang;
      if(lang === 'zh') {
        document.body.classList.add('lang-mode-zh');
        document.body.classList.remove('lang-mode-en');
        document.getElementById('langToggleZH').className = "px-2 py-1 font-mono text-[10px] bg-[#ff0000] text-black font-extrabold focus:outline-none transition-all duration-200";
        document.getElementById('langToggleEN').className = "px-2 py-1 font-mono text-[10px] text-zinc-400 font-medium focus:outline-none hover:text-white transition-all duration-200";
      } else {
        document.body.classList.add('lang-mode-en');
        document.body.classList.remove('lang-mode-zh');
        document.getElementById('langToggleEN').className = "px-2 py-1 font-mono text-[10px] bg-[#ff0000] text-black font-extrabold focus:outline-none transition-all duration-200";
        document.getElementById('langToggleZH').className = "px-2 py-1 font-mono text-[10px] text-zinc-400 font-medium focus:outline-none hover:text-white transition-all duration-200";
      }
    }

    document.getElementById('langToggleZH').addEventListener('click', () => setLanguage('zh'));
    document.getElementById('langToggleEN').addEventListener('click', () => setLanguage('en'));

    // SVG graphics mapping specifically for vanilla JS modal dialog
    const svgCatalog = {
      blower: \`${svgDatabase.blower}\`,
      mower: \`${svgDatabase.mower}\`,
      tiller: \`${svgDatabase.tiller}\`,
      vessel: \`${svgDatabase.vessel}\`,
      wayfinding: \`${svgDatabase.wayfinding}\`,
      matrix: \`${svgDatabase.matrix}\`,
      parametric: \`${svgDatabase.parametric}\`,
      anthology: \`${svgDatabase.anthology}\`
    };

    // Modal Drawer logic
    const modal = document.getElementById('projectModal');
    const modalPanel = document.getElementById('projectModalPanel');
    const modalCloseBtn = document.getElementById('projectModalCloseBtn');
    const modalCloseArea = document.getElementById('projectModalCloseArea');

    function openModalForProject(projectId) {
      const project = SEED_PROJECTS.find(p => p.id === projectId);
      if(!project) return;

      // Unpack values to views
      document.getElementById('mCode').textContent = project.code;
      document.getElementById('mYear').textContent = project.year;
      document.getElementById('mCategory').textContent = currentLang === 'zh' ? project.category.toUpperCase() : project.categoryEn.toUpperCase();
      document.getElementById('mTitleEn').textContent = project.titleEn;
      document.getElementById('mTitleZh').textContent = project.title;
      document.getElementById('mClient').textContent = currentLang === 'zh' ? project.client : project.clientEn;
      document.getElementById('mTags').textContent = project.tags.join(', ');
      document.getElementById('mDetailsZh').textContent = project.details;
      document.getElementById('mDetailsEn').textContent = project.detailsEn;

      // Render vector inside view
      const coverContainer = document.getElementById('mVisualCover');
      coverContainer.innerHTML = svgCatalog[project.svgId] || '';

      // Populate credits table
      const listContainer = document.getElementById('mCreditsList');
      listContainer.innerHTML = project.credits.map(cred => \`
        <tr class="border-b border-[#1A1A1A]">
          <td class="py-3 text-zinc-500 uppercase text-[10px] tracking-wider">\${currentLang === 'zh' ? cred.label : cred.labelEn}</td>
          <td class="py-3 text-right text-stone-200 text-xs font-bold">\${cred.value}</td>
        </tr>
      \`).join('');

      // Open drawer animations
      modal.classList.remove('hidden');
      setTimeout(() => {
        modalPanel.classList.remove('translate-x-full');
      }, 50);
    }

    function closeModal() {
      modalPanel.classList.add('translate-x-full');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 400);
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalCloseArea.addEventListener('click', closeModal);

    // Apply click listeners to project cards after render completes
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const pId = card.getAttribute('data-id');
        openModalForProject(pId);
      });
    });

    // Contact Form storage mechanics
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submissionsFeed = document.getElementById('submissionsFeed');
    const clearBtn = document.getElementById('clearTransmissions');

    function loadSubmissions() {
      try {
        const stored = localStorage.getItem('abcd_transmissions');
        const list = stored ? JSON.parse(stored) : [];
        
        if (list.length === 0) {
          submissionsFeed.innerHTML = \`<p class="font-mono text-[10px] text-zinc-600 italic">No local transmissions captured yet. Fill form to commit.</p>\`;
          return;
        }

        submissionsFeed.innerHTML = list.map(item => \`
          <div class="p-3 border border-[#222] bg-black">
            <div class="flex justify-between items-start mb-1">
              <span class="font-mono text-[11px] text-[#ff0000] font-black uppercase">\${item.name}</span>
              <span class="font-mono text-[9px] text-zinc-500">\${item.timestamp}</span>
            </div>
            <p class="font-mono text-[10px] text-zinc-500 mb-1">EMAIL: \${item.email} \${item.company ? ' | CO: ' + item.company : ''}</p>
            <p class="font-sans text-xs text-zinc-300 mt-1 pb-1">\${item.content}</p>
          </div>
        \`).join('');
      } catch (e) {
        console.error(e);
      }
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const company = document.getElementById('formCompany').value.trim();
      const content = document.getElementById('formContent').value.trim();

      if(!name || !email || !content) {
        showStatus('MISSING FIELDS / 必填信息缺失', true);
        return;
      }

      const timestamp = new Date().toLocaleString('zh-CN', { hour12: false });
      const newMsg = { id: Date.now().toString(), name, email, company, content, timestamp };

      try {
        const stored = localStorage.getItem('abcd_transmissions');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(newMsg);
        localStorage.setItem('abcd_transmissions', JSON.stringify(list));

        // Form success feedback (absolutely NO GREEN allowed, strictly high contrast red/black)
        showStatus('SUCCEEDED / 留言数据已成功存入浏览器 LocalStorage', false);
        contactForm.reset();
        loadSubmissions();
      } catch (err) {
        showStatus('FAILED / 浏览器本地存储已满或限制访问', true);
      }
    });

    function showStatus(text, isError) {
      formStatus.textContent = text;
      formStatus.className = isError 
        ? "font-mono text-[10px] p-3 uppercase font-bold tracking-wider text-center bg-black border border-[#ff0000] text-[#ff0000]"
        : "font-mono text-[10px] p-3 uppercase font-bold tracking-wider text-center bg-zinc-900 border border-white text-white";
      formStatus.style.display = "block";
      
      setTimeout(() => {
        formStatus.style.display = "none";
      }, 5000);
    }

    clearBtn.addEventListener('click', () => {
      localStorage.removeItem('abcd_transmissions');
      loadSubmissions();
      showStatus('STORAGE PURGED / 本地存储留言已清空', false);
    });

    // Initial load call
    loadSubmissions();
  </script>
</body>
</html>`;
}
