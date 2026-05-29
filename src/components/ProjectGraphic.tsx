/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface ProjectGraphicProps {
  svgId: string;
  className?: string;
  hovered?: boolean;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ svgId, className = "", hovered = false }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#161616] select-none transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"} ${className}`}>
      {/* Matte noise / texture overlay for organic analog feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%2523noise)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Structural alignment grid (fine lines responsive to ABCD style) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 grid-rows-6 opacity-20">
        <div className="col-span-6 border-b border-[#333333]"></div>
        <div className="col-span-6 border-b border-[#333333]"></div>
        <div className="col-span-6 border-b border-[#333333]"></div>
        <div className="col-span-6 border-b border-[#333333]"></div>
        <div className="col-span-6 border-b border-[#333333]"></div>
        <div className="col-span-1 border-r border-[#333333] h-full"></div>
        <div className="col-span-1 border-r border-[#333333] h-full"></div>
        <div className="col-span-1 border-r border-[#333333] h-full"></div>
        <div className="col-span-1 border-r border-[#333333] h-full"></div>
        <div className="col-span-1 border-r border-[#333333] h-full"></div>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        {svgId === "blower" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V01 - High Speed Blower / Hair Dryer */}
            <rect width="400" height="400" fill="#131313"/>
            {/* Fine structural isometric lines & curves representing stream */}
            <circle cx="200" cy="180" r="70" stroke="#333" strokeWidth="1" />
            <circle cx="200" cy="180" r="50" stroke="#ff0000" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="180" r="20" fill="#ff0000" />
            
            {/* Core motor blades */}
            <path d="M 200,180 L 200,110 M 200,180 L 200,250 M 200,180 L 130,180 M 200,180 L 270,180" stroke="#444" strokeWidth="2" />
            <path d="M 200,180 L 150,130 M 200,180 L 250,230 M 200,180 L 150,230 M 200,180 L 250,130" stroke="#333" strokeWidth="1.5" />
            
            {/* Aerodynamic flow layout vectors */}
            <path d="M 40,200 C 100,140 300,140 360,200" stroke="#ff0000" strokeWidth="1.5" opacity="0.8"/>
            <path d="M 40,220 C 100,160 300,160 360,220" stroke="#eee" strokeWidth="1" opacity="0.4"/>
            <path d="M 40,180 C 100,120 300,120 360,180" stroke="#eee" strokeWidth="1" opacity="0.4"/>
            
            {/* Engineering metrics box */}
            <rect x="50" y="275" width="300" height="70" fill="#1A1A1A" stroke="#333" strokeWidth="1"/>
            <line x1="200" y1="275" x2="200" y2="345" stroke="#333" strokeWidth="1"/>
            
            <text x="65" y="295" fill="#aaa" fontFamily="var(--font-mono)" fontSize="9">RPM CORE VALUE:</text>
            <text x="65" y="315" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="16" fontWeight="950">110,000 / MIN</text>
            <text x="65" y="332" fill="#555" fontFamily="var(--font-mono)" fontSize="8">OCTANE RAYTRACE: C4D ENGINE</text>
            
            <text x="215" y="295" fill="#aaa" fontFamily="var(--font-mono)" fontSize="9">CHASSIS PROCESS:</text>
            <text x="215" y="315" fill="#eee" fontFamily="var(--font-sans)" fontSize="13" fontWeight="bold">ANODIZED MATTE</text>
            <text x="215" y="332" fill="#555" fontFamily="var(--font-mono)" fontSize="8">GLOSS RATIO: 0.00% SPECULAR</text>
            
            {/* Typography elements embedded in design */}
            <text x="30" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2">AMZN: CODE_BLW01</text>
            <text x="30" y="70" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="20" fontWeight="800" letterSpacing="-0.5">HIGH-SPEED BLOWER</text>
            <text x="340" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">01/08</text>
          </svg>
        )}

        {svgId === "mower" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V02 - Intelligent Lawn Mower Robot */}
            <rect width="400" height="400" fill="#1A1A1A"/>
            {/* Grid Lawn layout */}
            <path d="M 50,220 L 350,220" stroke="#333" strokeWidth="1" />
            
            {/* Lawn blades pattern */}
            <line x1="80" y1="220" x2="70" y2="200" stroke="#555" strokeWidth="1.5" />
            <line x1="120" y1="220" x2="110" y2="195" stroke="#ff0000" strokeWidth="1.5" />
            <line x1="160" y1="220" x2="155" y2="200" stroke="#555" strokeWidth="1.5" />
            <line x1="200" y1="220" x2="190" y2="190" stroke="#ff0000" strokeWidth="2" />
            <line x1="240" y1="220" x2="235" y2="205" stroke="#555" strokeWidth="1.5" />
            <line x1="280" y1="220" x2="270" y2="200" stroke="#555" strokeWidth="1.5" />
            <line x1="320" y1="220" x2="315" y2="198" stroke="#ff0000" strokeWidth="1.5" />
            
            {/* Chassis of robotic mower */}
            <rect x="110" y="90" width="180" height="90" rx="12" fill="#151515" stroke="#444" strokeWidth="1.5" />
            {/* Dynamic cutting wheels overlay */}
            <circle cx="160" cy="135" r="22" stroke="#ff0000" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="240" cy="135" r="22" stroke="#eee" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Satellite alignment pointer */}
            <line x1="200" y1="90" x2="200" y2="40" stroke="#ff0000" strokeWidth="0.75" />
            <circle cx="200" cy="40" r="3" fill="#ff0000" />
            
            <text x="210" y="55" fill="#ff0000" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold">GNSS.ALIGN // 100%</text>
            
            {/* Header titles */}
            <text x="50" y="300" fill="#eee" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="3">GRID_LM02 / LAWN_ROBOT</text>
            <text x="50" y="340" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="16" fontWeight="bold" letterSpacing="1">OUTDOOR NATURAL LUX SCENE</text>
            <text x="330" y="300" fill="#555" fontFamily="var(--font-mono)" fontSize="11">02/08</text>
          </svg>
        )}

        {svgId === "tiller" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V03 - High Power Tiller Exploded engine view */}
            <rect width="400" height="400" fill="#121212"/>
            
            {/* Exploded parts alignment blueprint */}
            <line x1="200" y1="40" x2="200" y2="360" stroke="#333" strokeWidth="0.5" strokeDasharray="4 4" />
            
            {/* Engine block (exploded upper tier) */}
            <rect x="140" y="60" width="120" height="60" fill="#1E1E1E" stroke="#ff0000" strokeWidth="1.5" />
            <text x="200" y="95" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="11" fontWeight="bold" textAnchor="middle">212CC MOTOR CORE</text>
            
            {/* Gears spacer (middle tier) */}
            <line x1="140" y1="160" x2="260" y2="160" stroke="#444" strokeWidth="2" />
            <circle cx="160" cy="160" r="14" fill="#1A1A1A" stroke="#eee" strokeWidth="1" />
            <circle cx="240" cy="160" r="14" fill="#1A1A1A" stroke="#eee" strokeWidth="1" />
            <circle cx="200" cy="160" r="18" fill="#151515" stroke="#ff0000" strokeWidth="1.5" />
            
            {/* Directional Torque flow indicator */}
            <path d="M 130,220 Q 200,190 270,220" stroke="#ff0000" strokeWidth="1.5" />
            <path d="M 265,213 L 275,221 L 265,227" fill="#ff0000" stroke="#ff0000" strokeWidth="1" />
            <text x="200" y="240" fill="#aaa" fontFamily="var(--font-mono)" fontSize="9" textAnchor="middle">HIGH-TORQUE CLUTCH SHAFT</text>
            
            {/* Blades (exploded lower tier) */}
            <g stroke="#ff0000" strokeWidth="2">
              <path d="M 150,270 L 170,310 M 250,270 L 230,310" />
              <path d="M 170,310 L 200,290 L 230,310" strokeLinecap="square" />
            </g>
            <circle cx="200" cy="290" r="6" fill="#111" stroke="#eee" strokeWidth="1" />
            
            {/* Dimension Callouts */}
            <line x1="80" y1="60" x2="140" y2="60" stroke="#333" strokeWidth="0.75" />
            <line x1="80" y1="310" x2="170" y2="310" stroke="#333" strokeWidth="0.75" />
            <path d="M 80,60 L 80,310" stroke="#ff0000" strokeWidth="1" />
            <text x="65" y="185" fill="#ff0000" fontFamily="var(--font-mono)" fontSize="9" transform="rotate(-90 65 185)" textAnchor="middle">EXP.SPAN: 740MM</text>
            
            {/* Typographical indicators */}
            <text x="40" y="355" fill="#555" fontFamily="var(--font-mono)" fontSize="9">HIGH CONVERSION TECHNICAL BREAKDOWN</text>
            <text x="330" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">03/08</text>
          </svg>
        )}

        {svgId === "vessel" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V04 - Matte Polymer Vessel */}
            <rect width="400" height="400" fill="#171717"/>
            
            {/* Orthographic draft style of geometric object */}
            {/* Center object */}
            <rect x="130" y="110" width="140" height="180" rx="6" fill="#1E1E1E" stroke="#555" strokeWidth="1.5" />
            {/* Isometric cut line */}
            <path d="M 130,220 L 270,180" stroke="#ff0000" strokeWidth="1.5" />
            
            {/* Inner technical measurements */}
            <line x1="100" y1="110" x2="300" y2="110" stroke="#333" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="100" y1="290" x2="300" y2="290" stroke="#333" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Dimension brackets and text */}
            <path d="M100 110 L100 290" stroke="#ff0000" strokeWidth="1" />
            <line x1="95" y1="110" x2="105" y2="110" stroke="#ff0000" strokeWidth="1" />
            <line x1="95" y1="290" x2="105" y2="290" stroke="#ff0000" strokeWidth="1" />
            
            {/* Text details */}
            <text x="75" y="205" fill="#ff0000" fontFamily="var(--font-mono)" fontSize="9" transform="rotate(-90 75 205)" textAnchor="middle">DIM: 180MM</text>
            
            <text x="145" y="145" fill="#aaa" fontFamily="var(--font-mono)" fontSize="9">POM POLYMER V24</text>
            <text x="145" y="160" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="11" fontWeight="bold">MATTE RECTIFIED</text>
            
            <text x="30" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2">ABCD: CODE_3D4</text>
            <text x="310" y="360" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">04/08</text>
            <text x="30" y="360" fill="#555" fontFamily="var(--font-mono)" fontSize="9">NON-SPECULAR SHADING EMULATION</text>
          </svg>
        )}

        {svgId === "wayfinding" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V05 - Wayfinding */}
            <rect width="400" height="400" fill="#131313"/>
            
            {/* Massive aggressive arrows / navigation block style of ABCD */}
            {/* Giant Graphic Arrow */}
            <path d="M 80,180 H 260 L 210,130 M 260,180 L 210,230" stroke="#ff0000" strokeWidth="14" strokeLinecap="square" />
            
            <rect x="80" y="270" width="240" height="30" fill="#ff0000" />
            <text x="90" y="291" fill="#121212" fontFamily="var(--font-sans)" fontSize="18" fontWeight="900" letterSpacing="1">WALL PANEL C</text>
            
            {/* Auxiliary graphic navigation labels */}
            <text x="80" y="90" fill="#eee" fontFamily="var(--font-sans)" fontSize="36" fontWeight="900" letterSpacing="-2">↑ EXH.HALL 02</text>
            
            <text x="80" y="350" fill="#555" fontFamily="var(--font-mono)" fontSize="10">BEIJING CONTEMP WAYFINDING SYSTEM</text>
            <text x="330" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">05/08</text>
          </svg>
        )}

        {svgId === "matrix" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V06 - Typography Specimen Matrix */}
            <rect width="400" height="400" fill="#1A1A1A"/>
            
            {/* Structured rows of grotesque glyph specimen sheets */}
            <text x="30" y="70" fill="#ff0000" fontFamily="var(--font-mono)" fontSize="20" fontWeight="900">A B C D E F G</text>
            <text x="30" y="105" fill="#444" fontFamily="var(--font-mono)" fontSize="20" fontWeight="400">H I J K L M N</text>
            <text x="30" y="140" fill="#eee" fontFamily="var(--font-mono)" fontSize="20" fontWeight="700">O P Q R S T U</text>
            <text x="30" y="175" fill="#ff0000" fontFamily="var(--font-mono)" fontSize="20" fontWeight="300" letterSpacing="6">V W X Y Z</text>
            
            <line x1="30" y1="205" x2="370" y2="205" stroke="#ff0000" strokeWidth="2" />
            
            {/* Scaled-up focal letter overlays */}
            <text x="210" y="340" fill="#252525" fontFamily="var(--font-sans)" fontSize="150" fontWeight="850">X</text>
            <text x="290" y="340" fill="#ff0000" fontFamily="var(--font-mono)" fontSize="150" fontWeight="300" opacity="0.8">T</text>
            
            <text x="30" y="235" fill="#888" fontFamily="var(--font-mono)" fontSize="10">KERNING WEIGHTS: 300 / 500 / 900</text>
            <text x="30" y="250" fill="#aaa" fontFamily="var(--font-sans)" fontSize="14" fontWeight="bold" letterSpacing="0.5">MONOSPACING STRETCH SYSTEM</text>
            
            <text x="30" y="360" fill="#555" fontFamily="var(--font-mono)" fontSize="9">TEST FILE: MONO_SKELETAL_SPEC.TTF</text>
            <text x="335" y="70" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">06/08</text>
          </svg>
        )}

        {svgId === "parametric" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V07 - Acoustic Ceramics */}
            <rect width="400" height="400" fill="#121212"/>
            
            {/* Triangle mesh parametric matrix */}
            <g stroke="#333" strokeWidth="1">
              {/* Row 1 */}
              <polygon points="50,150 150,150 100,80" fill="#1E1E1E"/>
              <polygon points="150,150 250,150 200,80" fill="#ff0000" opacity="0.85"/>
              <polygon points="250,150 350,150 300,80" fill="#1E1E1E"/>
              
              {/* Row 2 */}
              <polygon points="50,150 150,150 100,220" fill="#1E1E1E"/>
              <polygon points="150,150 250,150 200,220" fill="#111111"/>
              <polygon points="250,150 350,150 300,220" fill="#1E1E1E"/>
              
              {/* Row 3 */}
              <polygon points="100,220 200,220 150,290" fill="#222"/>
              <polygon points="200,220 300,220 250,290" fill="#ff0000"/>
            </g>
            
            {/* Computational lines */}
            <line x1="100" y1="80" x2="300" y2="290" stroke="#ff0000" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="200" cy="150" r="4" fill="#eee" />
            
            <text x="50" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1">ABCD: CODE_P37</text>
            <text x="50" y="340" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="15" fontWeight="bold">PARAMETRIC CERAMIC PANEL</text>
            <text x="50" y="360" fill="#555" fontFamily="var(--font-mono)" fontSize="9">COMPUTED COORD: [N_4329_P3_LAMBERT_DIFFUSE]</text>
            <text x="330" y="50" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">07/08</text>
          </svg>
        )}

        {svgId === "anthology" && (
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Project V08 - ABCD Decade Book */}
            <rect width="400" height="400" fill="#171717"/>
            
            {/* Heavy-weight bold typographical design */}
            <text x="30" y="110" fill="#eee" fontFamily="var(--font-sans)" fontSize="52" fontWeight="950" letterSpacing="-2">A BLACK</text>
            <text x="30" y="160" fill="#eee" fontFamily="var(--font-sans)" fontSize="52" fontWeight="950" letterSpacing="-2">COVER</text>
            <text x="30" y="210" fill="#ff0000" fontFamily="var(--font-sans)" fontSize="52" fontWeight="950" letterSpacing="-2">DESIGN.</text>
            
            {/* Multi-tier horizontal accent bands */}
            <rect x="30" y="240" width="340" height="18" fill="#ff0000" />
            <rect x="30" y="265" width="220" height="4" fill="#EEEEEE" />
            
            <text x="35" y="254" fill="#121212" fontFamily="var(--font-mono)" fontSize="9" fontWeight="bold" letterSpacing="0.5">DECADE DIRECTORY 2016 - 2026</text>
            
            <text x="30" y="315" fill="#888" fontFamily="var(--font-mono)" fontSize="10">RETROSPECTIVE CODES DEBOSSED</text>
            <text x="30" y="355" fill="#eee" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">08 / ARCHIVE</text>
            <text x="325" y="355" fill="#555" fontFamily="var(--font-mono)" fontSize="11" fontWeight="bold">08/08</text>
          </svg>
        )}
      </div>
    </div>
  );
};
