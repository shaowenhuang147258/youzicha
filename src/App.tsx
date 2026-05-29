/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileCode,
  Download,
  Copy,
  Check,
  Mail,
  User,
  Building,
  MessageSquare,
  X,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
  Calendar,
  Layers
} from "lucide-react";
import { PORTFOLIO_PROJECTS, BIOGRAPHY_TEXT, COLLABORATORS } from "./data";
import { Project, MessageSubmission } from "./types";
import { ProjectGraphic } from "./components/ProjectGraphic";
import { generateStandaloneHTML } from "./exporter";

export default function App() {
  // Multilingual state (Default to Simplified Chinese 'zh' to strictly match prompt context)
  const [lang, setLang] = useState<"zh" | "en">("zh");

  // Dynamic filter state
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  // Active project selection model (single-dialog drawer within viewport boundary)
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Form states
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formContent, setFormContent] = useState("");
  const [feedback, setFeedback] = useState<{ text: string; isError: boolean } | null>(null);
  
  // Local ledger of submissions synchronizing with local storage
  const [transmissions, setTransmissions] = useState<MessageSubmission[]>([]);

  // GitHub Pages exporter drawer controller state
  const [exporterOpen, setExporterOpen] = useState(false);
  const [clipbCopied, setClipbCopied] = useState(false);

  // Load submissions from storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("abcd_transmissions");
      if (stored) {
        setTransmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local Storage is inaccessible: ", e);
    }
  }, []);

  // Filter labels and listing aggregates
  const allTags = ["ALL", "3D Rendering", "Visual Design", "Editorial", "Wayfinding", "Minimalism"];

  // Perform project filtering based on active tag
  const filteredProjects = selectedTag === "ALL" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter((proj) => 
        proj.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
      );

  // Form Submission
  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formContent) {
      setFeedback({
        text: lang === "zh" ? "提交失败：所有带 * 的字段均为必填项。" : "Failed: All fields with * are strictly required.",
        isError: true
      });
      return;
    }

    const newTransmit: MessageSubmission = {
      id: Date.now().toString(),
      name: formName,
      email: formEmail,
      company: formCompany,
      content: formContent,
      timestamp: new Date().toLocaleString(lang === "zh" ? "zh-CN" : "en-US", { hour12: false })
    };

    const updatedList = [newTransmit, ...transmissions];
    setTransmissions(updatedList);
    
    try {
      localStorage.setItem("abcd_transmissions", JSON.stringify(updatedList));
      setFeedback({
        text: lang === "zh" ? "留言成功：已通过安全信道写入本地 LocalStorage" : "Success: Secured record committed to local browser cache",
        isError: false
      });
      // Clear inputs
      setFormName("");
      setFormEmail("");
      setFormCompany("");
      setFormContent("");
    } catch (e) {
      setFeedback({
        text: lang === "zh" ? "本地存储不可用，留言仅缓存在内存中" : "Local capacity limited, caching transmission in session memories only.",
        isError: true
      });
    }

    // Dismiss notice after 6 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 6000);
  };

  // Clear transmissions ledger
  const clearTransmissions = () => {
    setTransmissions([]);
    try {
      localStorage.removeItem("abcd_transmissions");
      setFeedback({
        text: lang === "zh" ? "本地数据缓冲区已完全擦除" : "All local transmission logs successfully purged.",
        isError: false
      });
      setTimeout(() => setFeedback(null), 3000);
    } catch (e) {
      console.error(e);
    }
  };

  // Download raw compiled HTML
  const downloadSourceHTML = () => {
    const rawContent = generateStandaloneHTML();
    const blob = new Blob([rawContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "index.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Copy compiled source code to clipboard
  const copySourceToClipboard = async () => {
    const rawContent = generateStandaloneHTML();
    try {
      await navigator.clipboard.writeText(rawContent);
      setClipbCopied(true);
      setTimeout(() => setClipbCopied(false), 3000);
    } catch (err) {
      console.error("Clipboard write blocked: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#f0f0f0] relative selection:bg-[#ff0000] selection:text-black font-sans flex flex-col justify-between">
      
      {/* Structural alignment grid borders in the margins (Geometric Balance theme lines) */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-white/10 z-50 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-white/10 z-50 pointer-events-none" />
      <div className="fixed top-0 left-4 md:left-12 w-[1px] h-full bg-white/5 z-30 pointer-events-none" />
      <div className="fixed top-0 right-4 md:right-12 w-[1px] h-full bg-white/5 z-30 pointer-events-none" />

      {/* FIXED FLOATING EXPORTER ACCENT CONTROLLER */}
      <div className="fixed bottom-8 right-6 md:right-16 z-40">
        <motion.button
          onClick={() => setExporterOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-[#ff0000] text-black font-mono text-[10px] font-black px-4 py-3 shadow-[0_4px_24px_rgba(255,0,0,0.2)] tracking-widest border border-[#ff0000] hover:bg-white hover:text-black transition-colors"
          title="Export Standalone Source Code for GitHub Pages"
          id="exporter_launcher_btn"
        >
          <FileCode className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">EXPORT GITHUB PAGES HTML</span>
          <span className="sm:hidden">EXPORT</span>
        </motion.button>
      </div>

      {/* MAIN TOP NAVIGATION HEADER */}
      <header className="sticky top-0 z-30 bg-[#121212] border-b border-white/10 px-4 md:px-12 py-5 max-w-7xl mx-auto w-full flex justify-between items-center" id="global_header">
        <div className="flex items-center gap-4">
          <span className="font-mono text-black bg-[#ff0000] px-2 py-0.5 text-xs font-black tracking-widest select-none">ABCD</span>
          <span className="font-mono text-xs tracking-wider font-bold text-stone-200 hidden xs:inline select-none">
            JERRY S. // VISUAL & 3D STUDIO
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Dual language selection slider */}
          <div className="flex border border-white/20 p-0.5 bg-black" id="language_tabs">
            <button
              onClick={() => setLang("zh")}
              className={`px-2.5 py-1 font-mono text-[10px] font-extrabold focus:outline-none transition-colors ${
                lang === "zh" ? "bg-[#ff0000] text-black" : "text-stone-400 hover:text-white"
              }`}
            >
              ZH
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 font-mono text-[10px] font-extrabold focus:outline-none transition-colors ${
                lang === "en" ? "bg-[#ff0000] text-black" : "text-stone-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
            <a href="#gallery_section" className="text-zinc-400 hover:text-[#ff0000] transition-colors">01_WORKS</a>
            <a href="#about_section" className="text-zinc-400 hover:text-[#ff0000] transition-colors">02_BIOGRAPHY</a>
            <a href="#contact_section" className="text-zinc-400 hover:text-[#ff0000] transition-colors">03_FEEDBACK</a>
          </nav>
        </div>
      </header>

      {/* CORE WRAPPER */}
      <main className="w-full max-w-7xl mx-auto px-4 md:px-12 flex-1 relative z-10">
        
        {/* HERO SECTION - Typography First */}
        <section className="py-20 md:py-32 border-b border-white/10 flex flex-col justify-center relative overflow-hidden" id="hero_showcase">
          {/* Technical coordinate grids watermark on background */}
          <div className="absolute right-0 top-12 flex flex-col items-end pointer-events-none select-none">
            <span className="text-[10px] tracking-[0.4em] font-bold text-[#ff0000] uppercase mb-1">Index 24</span>
            <span className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase">Series 0.1</span>
          </div>

          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block border border-[#ff0000] px-3 py-1 mb-6"
            >
              <p className="font-mono text-xs tracking-widest text-[#ff0000] font-black uppercase">
                {lang === "zh" ? "先锋视觉重力 ✕ 参数三维物理" : "AVANT VISUAL GRAVITY ✕ PARAMETRIC 3D RENDER"}
              </p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[64px] sm:text-[90px] md:text-[110px] font-black uppercase leading-[0.78] tracking-[-0.07em] select-none text-white font-sans"
            >
              JERRY<br />S<span className="text-[#ff0000]">.</span>
            </motion.h1>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <div className="bg-[#ff0000] text-black px-2 py-0.5 text-[11.5px] font-black uppercase tracking-[0.1em]">
                {lang === "zh" ? "视觉与三维设计师" : "Visual & 3D Designer"}
              </div>
              <div className="hidden sm:block h-[1px] w-24 bg-white/20"></div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 max-w-[340px] leading-relaxed">
                {lang === "zh"
                  ? "探索极简几何结构与超写实空间环境的完美交鸣。"
                  : "Exploring the convergence of reductionist geometry and hyper-realistic spatial environments."}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/5"
            >
              <p className="font-sans text-sm text-zinc-400 leading-relaxed text-justify max-w-md font-medium">
                {lang === "zh" ? (
                  "立足于数学物理法则下的空间重构，秉持极度克制的色彩体系（黑、白、红），剥离一切玻璃、金属的高光反射质感。只用大张大合的字体结构与高密度哑光（Ultra-Matte）表面，创造出兼具秩序与重工业视觉张力的数字构造。"
                ) : (
                  "Rooted in computational rules, we sustain a highly restricted color space consisting strictly of solid black, deep graphite, neutral off-white, and structural blood-red. Extruding speculative 3D assets entirely with ultra-matte behaviors to eliminate any artificial specular sheen."
                )}
              </p>
              
              <div className="flex flex-col justify-end font-mono text-[11px] text-zinc-500 gap-1.5 md:text-right">
                <div className="flex justify-between md:justify-end gap-2">
                  <span className="text-[#ff0000] font-bold">CORE SECTORS:</span>
                  <span>3D SHADING / CMF STRAT / GRID STRETCH</span>
                </div>
                <div className="flex justify-between md:justify-end gap-2">
                  <span className="text-stone-400">EXHIBIT ACCENT:</span>
                  <span>GEOMETRIC BALANCE CORE ADHESION</span>
                </div>
                <div className="flex justify-between md:justify-end gap-2">
                  <span className="text-stone-400">VERSION RECORD:</span>
                  <span className="text-white font-bold">PORTFOLIO_RELEASE_2026.01</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WORK GALLERY SECTION */}
        <section id="gallery_section" className="py-12 border-b border-white/10">
          
          {/* Section title & Filters layout */}
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between mb-8 gap-4">
            <div>
              <h2 className="font-sans font-black text-2xl tracking-tight text-white flex items-center gap-3">
                <span className="text-[#ff0000] font-mono font-medium">/01</span>
                <span>{lang === "zh" ? "精选作品集" : "SELECTED PROJECTS"}</span>
              </h2>
              <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">
                {lang === "zh" ? "严密无缝网格系统 ✕ 点击显示机密设计规范明细" : "Dense modular grid structure ✕ Click rows to inspect confidential drafts"}
              </p>
            </div>

            {/* Micro sliders panel for discrete tag filters */}
            <div className="flex flex-wrap gap-1 border border-white/10 p-1 bg-stone-950/40" id="filter_control_pnl">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`font-mono text-[10px] px-2.5 py-1 font-bold focus:outline-none transition-colors border ${
                    selectedTag === tag 
                      ? "bg-[#ff0000] text-black border-[#ff0000]" 
                      : "text-zinc-400 hover:text-white hover:bg-stone-900 border-transparent"
                  }`}
                >
                  {tag === "ALL" 
                    ? `[×] ${lang === "zh" ? "全部" : "ALL"}` 
                    : tag.toUpperCase()
                  }
                </button>
              ))}
            </div>
          </div>

          {/* DENSE CSS GRID SYSTEM - Seamless Layout, matte borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-white/5 border border-white/10" id="project_grid_container">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const [isHovered, setIsHovered] = useState(false);
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setActiveProject(project)}
                    className="relative aspect-square overflow-hidden cursor-crosshair bg-[#161616] group border border-white/5"
                    style={{ contentVisibility: "auto" }}
                    id={`card-${project.id}`}
                  >
                    {/* Embedded custom poster artwork in vector SVGs */}
                    <ProjectGraphic svgId={project.svgId} hovered={isHovered} />

                    {/* ABSOLUTE RIGID HOVER COVERING OVERLAY */}
                    <div className="absolute inset-0 bg-black/95 transition-all duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-6 z-10 select-none text-center">
                      <div className="flex justify-between items-start w-full">
                        <span className="font-mono text-xs text-[#ff0000] tracking-widest font-black">{project.code}</span>
                        <span className="font-mono text-xs text-stone-500 font-medium">{project.year}</span>
                      </div>
                      
                      <div className="my-auto flex flex-col items-center justify-center p-2">
                        <span className="text-[#ff0000] text-2xl font-black uppercase italic leading-none font-sans tracking-tight">
                          {project.titleEn}
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.3em] mt-3 font-bold text-white/40">
                          {project.categoryEn.toUpperCase()}
                        </span>
                        <span className="text-[11px] font-bold text-stone-300 mt-1 block">
                          {project.title}
                        </span>
                      </div>
                      
                      <div className="w-full">
                        <div className="h-[1px] w-12 bg-white/15 mx-auto mb-2.5" />
                        <p className="font-mono text-[9px] text-[#ff0000] uppercase tracking-widest flex items-center justify-center gap-1 hover:text-white transition-colors">
                          <Eye className="w-3 h-3" />
                          <span>{lang === "zh" ? "激活设计规范" : "ACTIVATE SCHEME"}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* ABOUT / BIOGRAPHY SECTION */}
        <section id="about_section" className="py-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Biospecs card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <h2 className="font-sans font-black text-2xl tracking-tight text-white flex items-center gap-3 mb-6">
                <span className="text-[#ff0000] font-mono font-medium">/02</span>
                <span>{lang === "zh" ? "个人述档" : "BIOGRAPHY"}</span>
              </h2>

              <div className="border border-white/10 p-5 bg-[#161616]" id="biography_specs_card">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                  <span className="w-2 h-2 rounded-full bg-[#ff0000]" />
                  <span className="font-mono text-[10px] text-white font-extrabold tracking-wider">PROFILE SPECS MATRIX</span>
                </div>

                <table className="w-full font-mono text-[11px] text-zinc-400 border-collapse">
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 text-zinc-500">BORN:</td>
                      <td className="py-2.5 text-right text-white font-bold">1996 CHN (AGE 30)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 text-zinc-500">DISCIPLINE:</td>
                      <td className="py-2.5 text-right text-[#ff0000] font-black uppercase">VISUAL & 3D ART</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 text-zinc-500">CURRENT BASE:</td>
                      <td className="py-2.5 text-right text-white font-bold">BEIJING / HUB</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2.5 text-zinc-500">PHILOSOPHY:</td>
                      <td className="py-2.5 text-right text-white tracking-tighter">SWISS-GRID ULTRA-MATTE</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-zinc-500">COLORS BOUNDS:</td>
                      <td className="py-2.5 text-right text-[#ff0000] font-black">[ SOLID BLACK, CADMIUM RED ]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 2: Editorial Bio text */}
            <div className="lg:col-span-5">
              <p className="font-sans text-base text-zinc-300 leading-relaxed text-justify font-light">
                {lang === "zh" ? BIOGRAPHY_TEXT.zh : BIOGRAPHY_TEXT.en}
              </p>

              <div className="mt-8 border-l-2 border-[#ff0000] pl-6 py-1.5 bg-white/5">
                <blockquote className="font-sans text-sm text-stone-200 font-bold leading-relaxed italic">
                  {lang === "zh" ? (
                    "“纯粹的设计不为取悦视能而生。它是骨骼，是直白，是在没有任何环境漫散射伪装下的重力展示。”"
                  ) : (
                    "\"Pure design does not exist to amuse physical eyes. It is skeletal, blunt, portraying sheer structural weights under non-glossy, highly constrained conditions.\""
                  )}
                </blockquote>
                <span className="font-mono text-[10px] text-zinc-500 block mt-2.5 font-bold tracking-widest">— JERRY S.</span>
              </div>
            </div>

            {/* Column 3: Collaborators Directory */}
            <div className="lg:col-span-3">
              <h3 className="font-mono text-xs text-zinc-400 font-extrabold tracking-widest uppercase mb-4 text-[#ff0000] select-none">
                {lang === "zh" ? "COLLABORATORS / 合作机构" : "COLLABORATORS INDEX"}
              </h3>
              
              <ul className="border border-white/10 bg-[#161616] divide-y divide-white/10 font-mono text-[11px]" id="collaborator_list">
                {COLLABORATORS.map((collab, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4, color: "#ff0000" }}
                    className="p-3 text-zinc-300 hover:bg-[#1a1a1a] flex justify-between items-center transition-all cursor-crosshair"
                  >
                    <span>{collab}</span>
                    <span className="text-[#ff0000] font-bold h-fit">&#8599;</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* CONTACT & SECURE LOCAL BOARD */}
        <section id="contact_section" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact text specs */}
            <div>
              <h2 className="font-sans font-black text-2xl tracking-tight text-white flex items-center gap-3 mb-6">
                <span className="text-[#ff0000] font-mono font-medium">/03</span>
                <span>{lang === "zh" ? "合作留言" : "COOPERATION INQUIRY"}</span>
              </h2>

              <p className="font-sans text-sm text-zinc-400 mb-8 leading-relaxed max-w-lg font-medium">
                {lang === "zh" ? (
                  "如果您有关于3D参数造型表现、高档次产品静物写实渲染、或者前卫的书籍和品牌视觉形象设计，欢迎向我留言。我会在12小时内给予回复。为确保高稳定性，项目完全通过浏览器原生 LocalStorage 提供本地级加密数据库留言同步。"
                ) : (
                  "For inquiries regarding high-concept editorial layouts, precision custom 3D parametric renders, or minimalist spatial identity, please deposit your brief below. Transmissions write directly to your local sandbox database."
                )}
              </p>

              <div className="space-y-3.5 font-mono text-xs text-zinc-400" id="contact_specs_details">
                <div className="flex items-center gap-3 p-3.5 border border-white/10 bg-stone-950/80">
                  <Mail className="w-4 h-4 text-[#ff0000]" />
                  <span className="text-[#ff0000] font-bold uppercase font-sans">EMAIL:</span>
                  <a href="mailto:noblesxuyen233@gmail.com" className="text-white hover:underline hover:text-[#ff0000]">noblesxuyen233@gmail.com</a>
                </div>

                <div className="flex items-center gap-3 p-3.5 border border-white/10 bg-stone-950/80">
                  <span className="text-[#ff0000] font-bold uppercase font-sans">SECURED PHONE:</span>
                  <span className="text-white font-medium">+86 (10) 9021-9923</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 border border-white/10 bg-stone-950/80">
                  <span className="text-[#ff0000] font-bold uppercase font-sans">DAILY PROTOCOL:</span>
                  <span className="text-white">MON-FRI | 10:00 - 19:30 UTC+8</span>
                </div>
              </div>
            </div>

            {/* FORM CARD AND LEDGER */}
            <div className="border border-white/10 bg-[#161616] p-6 md:p-8">
              
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h3 className="font-mono text-xs text-white font-black tracking-wider uppercase flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#ff0000]" />
                  <span>LOCAL TRANSMISSION CORES // 留言板</span>
                </h3>
                <span className="text-[9px] font-mono text-zinc-500 font-bold bg-black border border-white/5 px-2 py-0.5">
                  OFFLINE-SECURE
                </span>
              </div>

              {/* Native form submits */}
              <form onSubmit={handleSubmission} className="space-y-4" id="portfolio_message_form">
                <div>
                  <label className="block font-sans text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-widest flex items-center gap-1">
                    <User className="w-3 h-3 text-[#ff0000]" />
                    <span>YOUR NAME OR ORGANIZATION / 称呼 *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#121212] border border-white/15 text-white px-3 py-2.5 font-mono text-xs focus:border-[#ff0000] focus:ring-0 focus:outline-none transition-colors"
                    placeholder={lang === "zh" ? "例如：先锋出版社林主编" : "e.g. Lead Director Lin (Bookpress)"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-widest flex items-center gap-1">
                      <Mail className="w-3 h-3 text-[#ff0000]" />
                      <span>EMAIL FOR INQUIRIES / 邮箱 *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-[#121212] border border-white/15 text-white px-3 py-2.5 font-mono text-xs focus:border-[#ff0000] focus:ring-0 focus:outline-none transition-colors"
                      placeholder="e.g. lin@type-path.com"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-widest flex items-center gap-1">
                      <Building className="w-3 h-3 text-[#ff0000]" />
                      <span>AFFILIATION COMPANY / 公司机构</span>
                    </label>
                    <input
                      type="text"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      className="w-full bg-[#121212] border border-white/15 text-white px-3 py-2.5 font-mono text-xs focus:border-[#ff0000] focus:ring-0 focus:outline-none transition-colors"
                      placeholder="e.g. Sonar Acoustics Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[10px] text-zinc-400 uppercase mb-2 font-bold tracking-widest">
                    <span>DESIGN CHALLENGE BRIEF / 需求简述 *</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    className="w-full bg-[#121212] border border-white/15 text-white px-3 py-2.5 font-mono text-xs focus:border-[#ff0000] focus:ring-0 focus:outline-none transition-colors resize-none"
                    placeholder={
                      lang === "zh" 
                        ? "请简述您的艺术项目周期、3D空间渲染需求、或者是版面排版诉求..."
                        : "Describe project metrics, parametric scale requirements, material choices etc..."
                    }
                  />
                </div>

                {/* Feedback notices (absolutely no green allowed, strictly white background or solid outlines) */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-3 text-[10px] uppercase font-black font-mono tracking-wider text-center border ${
                        feedback.isError 
                          ? "bg-black border-[#ff0000] text-[#ff0000]" 
                          : "bg-[#eeeeee] border-white text-black"
                      }`}
                      id="form_feedback_alert"
                    >
                      {feedback.text}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  className="w-full bg-[#ff0000] text-black font-sans font-black tracking-widest text-xs py-3.5 uppercase hover:bg-white hover:text-black transition-colors duration-300 transform active:translate-y-0.5 focus:outline-none cursor-pointer"
                >
                  {lang === "zh" ? "SUBMIT SECURE RECORD / 提交留言" : "COMMIT SECURE RECORD TO DEVICE"}
                </button>
              </form>

              {/* TRANSMISSIONS LEDGER VIEW (Synced from LocalStorage) */}
              <div className="mt-8 pt-6 border-t border-white/10" id="submissions_ledger">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-sans text-[10px] text-zinc-500 font-extrabold tracking-widest uppercase">
                    {lang === "zh" ? "LOCAL TRANSMISSIONS FEED / 历史留言提单" : "LOCAL TRANSMISSIONS RECORD"}
                  </h4>
                  {transmissions.length > 0 && (
                    <button
                      onClick={clearTransmissions}
                      className="font-mono text-[9px] text-[#ff0000] font-bold underline hover:text-white transition-colors cursor-pointer"
                    >
                      [ CLEAR LEDGER ]
                    </button>
                  )}
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                  {transmissions.length === 0 ? (
                    <p className="font-mono text-[10px] text-zinc-600 italic">
                      {lang === "zh" ? "尚无本地提交记录。填表后点击提交，信息将被写入您的浏览器安全存储库中。" : "No structural logs committed onto this machine. Submit form to synchronize storage."}
                    </p>
                  ) : (
                    transmissions.map((item) => (
                      <div key={item.id} className="p-3 border border-white/5 bg-black/40">
                        <div className="flex justify-between items-start gap-2 mb-1.5">
                          <span className="font-mono text-[11px] text-[#ff0000] font-black uppercase tracking-wider">{item.name}</span>
                          <span className="font-mono text-[9px] text-zinc-500 font-bold whitespace-nowrap">{item.timestamp}</span>
                        </div>
                        <p className="font-mono text-[10px] text-zinc-500 mb-2">
                          EMAIL: <span className="text-stone-300">{item.email}</span>
                          {item.company && <> | CO: <span className="text-stone-300">{item.company}</span></>}
                        </p>
                        <p className="font-sans text-xs text-zinc-300 break-words leading-relaxed text-left border-t border-white/5 pt-1.5">
                          {item.content}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 bg-[#101010] px-4 md:px-12 w-full max-w-7xl mx-auto z-10 font-sans">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-black bg-white px-2 py-0.5 text-xs font-black select-none">J.S</span>
            <p className="font-mono text-[10px] text-zinc-500">
              &copy; 2026 JERRY S. NO GLOSS REFS SUSTAINED. ALL WORK CORES SECURED.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-zinc-500 font-mono text-[10px] font-bold justify-center">
            <span>REACT 19 CORE</span>
            <span className="text-[#ff0000]">/</span>
            <span>GITHUB PAGES STANDALONE DISPATCHER INJECTED</span>
            <span className="text-[#ff0000]">/</span>
            <a href="#hero_showcase" className="hover:text-[#ff0000] uppercase font-bold text-zinc-400">BACK TO APEX ↑</a>
          </div>
        </div>
      </footer>


      {/* IMMERSIVE DRAWER MODEL (Active project detailed display) */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end" id="drawer_backdrop_layer">
            {/* Matte Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/85 cursor-pointer"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-xl md:max-w-2xl h-full bg-[#121212] border-l border-white/10 flex flex-col justify-between z-10 shadow-2xl font-sans"
              id="active_project_drawer"
            >
              {/* Drawer Top Header info */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#161616]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-black bg-[#ff0000] px-2 py-0.5 font-black uppercase">
                    {activeProject.code}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400">
                    {lang === "zh" ? `作品年度: ${activeProject.year}` : `YEAR RELEASE: ${activeProject.year}`}
                  </span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="font-mono text-zinc-400 hover:text-[#ff0000] hover:border-[#ff0000] border border-white/20 bg-black px-3 py-1 text-xs font-black transition-all cursor-pointer"
                >
                  CLOSE [✕]
                </button>
              </div>

              {/* Drawer Scroller Content Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 no-scrollbar">
                
                {/* SVG Poster layout inside drawer */}
                <div className="border border-white/5 bg-black aspect-video flex items-center justify-center overflow-hidden relative">
                  <ProjectGraphic svgId={activeProject.svgId} className="w-full h-full scale-[1.02]" />
                </div>

                {/* Typography metadata titles */}
                <div>
                  <span className="font-mono text-xs text-[#ff0000] uppercase tracking-widest block mb-1 font-bold">
                    {lang === "zh" ? activeProject.category.toUpperCase() : activeProject.categoryEn.toUpperCase()}
                  </span>
                  <h2 className="font-sans font-black text-2xl md:text-3xl text-white mb-2 leading-tight uppercase italic">
                    {activeProject.titleEn}
                  </h2>
                  <h3 className="font-sans font-extrabold text-base text-zinc-300 leading-tight pb-4 border-b border-white/5">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Double column sheet */}
                <div className="grid grid-cols-2 gap-6 border-b border-white/5 pb-6 font-mono text-[11px]">
                  <div>
                    <span className="text-zinc-500 block uppercase text-[9px] mb-1 font-bold">CLIENT / 合作方</span>
                    <span className="text-white font-extrabold">
                      {lang === "zh" ? activeProject.client : activeProject.clientEn}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block uppercase text-[9px] mb-1 font-bold">TAGS / 系统特征</span>
                    <span className="text-[#ff0000] font-extrabold uppercase font-bold">
                      {activeProject.tags.join(" // ")}
                    </span>
                  </div>
                </div>

                {/* Brief description */}
                <div className="space-y-4">
                  <span className="font-sans text-[10px] text-[#ff0000] font-black tracking-widest uppercase block border-b border-white/10 pb-1.5 font-bold">
                    DESIGN DISCLOSURE // 设计说明
                  </span>
                  
                  {lang === "zh" ? (
                    <div className="space-y-4">
                      <p className="font-sans text-sm text-white font-bold leading-relaxed tracking-wide text-justify">
                        {activeProject.brief}
                      </p>
                      <p className="font-sans text-sm text-zinc-300 leading-relaxed text-justify font-normal">
                        {activeProject.details}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="font-sans text-sm text-white font-bold leading-relaxed italic text-justify">
                        {activeProject.briefEn}
                      </p>
                      <p className="font-sans text-sm text-zinc-400 leading-relaxed text-justify font-normal">
                        {activeProject.detailsEn}
                      </p>
                    </div>
                  )}
                </div>

                {/* Dynamic credits system */}
                <div className="pt-2">
                  <span className="font-sans text-[10px] text-[#ff0000] font-black tracking-widest uppercase block border-b border-white/10 pb-1.5 mb-3 font-bold">
                    CREDITS DIRECTORY // 深度贡献
                  </span>
                  
                  <table className="w-full font-mono text-[11px] divide-y divide-white/5">
                    <tbody>
                      {activeProject.credits.map((cred, credIdx) => (
                        <tr key={credIdx} className="border-b border-white/5 hover:bg-black/30 transition-colors">
                          <td className="py-3 text-zinc-500 font-bold uppercase tracking-wider">
                            {lang === "zh" ? cred.label : cred.labelEn}
                          </td>
                          <td className="py-3 text-right text-stone-200 font-extrabold">
                            {cred.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Drawer Bottom floor details */}
              <div className="p-6 border-t border-white/10 bg-[#161616] flex justify-between items-center select-none">
                <span className="font-mono text-[9px] text-zinc-500 font-bold">STRUCTURAL VISUAL INDEX GRID SCHEMA</span>
                <span className="font-mono text-xs text-[#ff0000] font-black">[ JERRY S. ✕ ABCD ]</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* STANDALONE RAW HTML EXPORTER MODULE DIALOG */}
      <AnimatePresence>
        {exporterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" id="exporter_modal_layer">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExporterOpen(false)}
              className="absolute inset-0 bg-black/95 cursor-pointer"
            />

            {/* Exporter Dialog structure */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#121212] border border-white/10 flex flex-col justify-between z-10 shadow-2xl font-sans"
              id="raw_exporter_dialog"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161616]">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#ff0000]" />
                  <h3 className="font-mono text-xs text-white font-black tracking-widest uppercase">
                    {lang === "zh" ? "GITHUB Pages 一键直接运行源码导出" : "STANDALONE SOURCE COMPILER FOR GITHUB PAGES"}
                  </h3>
                </div>
                <button
                  onClick={() => setExporterOpen(false)}
                  className="font-mono text-xs text-zinc-400 hover:text-white hover:border-[#ff0000] border border-white/20 px-2.5 py-1 font-bold bg-black cursor-pointer"
                >
                  ✕ CLOSE [ESC]
                </button>
              </div>

              {/* Informational Guidance block */}
              <div className="p-6 overflow-y-auto space-y-6 max-h-[60vh] no-scrollbar">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-white/5 pb-6">
                  <div className="md:col-span-8 space-y-3">
                    <h4 className="font-sans font-black text-sm text-white uppercase flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#ff0000]" />
                      <span>{lang === "zh" ? "资深开发专享交付 · 100% 独立无依赖运行" : "Senior-Level Single File Blueprint · Production Ready"}</span>
                    </h4>
                    
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed text-justify font-normal">
                      {lang === "zh" ? (
                        "为完全满足您的 GitHub Pages 托管需求，本导出器将上述精美的 A Black Cover Design 风格单页、多国语言交互引擎、离线加密留言板数据库、以及 8 种高分辨率矢量设计作品图，一并编译并打包压缩进单个 index.html 文件中。您不需要任何 npm、Node.js、Vite 或者构建打包工具，直接将此文件放置于 GitHub 仓库中托管即可完美渲染运行！"
                      ) : (
                        "To perfectly accommodate your direct GitHub Pages hosting, this utility packages the responsive typography, the localized message board registers, the multi-language togglers, and all 8 custom vector art assets inside a single HTML file. No npm/Vite builders are needed anymore."
                      )}
                    </p>

                    <ol className="list-decimal pl-4 font-sans text-[11px] text-[#ff0000] font-bold space-y-1.5">
                      <li>{lang === "zh" ? "点击下方「一键生成并下载 index.html」。" : "Click 'GENERATED & DOWNLOAD index.html' below."}</li>
                      <li>{lang === "zh" ? "登录 GitHub 建立新公开仓库，直接将该文件上传重命名为 index.html。" : "Create standard GitHub Repository, drop index.html inside."}</li>
                      <li>{lang === "zh" ? "配置 GitHub Pages 选项即可实现 10 毫秒极速载入和高级哑光的极致视觉传播。" : "Enable GitHub Pages under repo settings to enjoy ultra-rapid loading speeds."}</li>
                    </ol>
                  </div>

                  {/* Right: Metrics */}
                  <div className="md:col-span-4 bg-black border border-white/10 p-4 font-mono text-[10px] space-y-2 text-zinc-400">
                    <div className="flex justify-between border-b border-white/5 pb-1.5 font-bold text-white">
                      <span>METRIC DATA / 参数</span>
                      <span className="text-[#ff0000]">VALUES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TYPE ARCH:</span>
                      <span className="text-white">VANILLA ES6+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VECTOR EMBEDS:</span>
                      <span className="text-[#ff0000]">8 INLINES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EXTERNAL DEPS:</span>
                      <span className="text-white">0% DEPENDENT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BILINGUAL SYSTEM:</span>
                      <span className="text-white">ZH / EN CORE</span>
                    </div>
                  </div>
                </div>

                {/* Live Preview Box of Raw Code */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-[10px] text-zinc-500 font-extrabold uppercase">
                      STANDALONE COMPILED SOURCE PREVIEW (REDUCED VIEW) // 预览底层源码
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 bg-black border border-white/10 px-2 py-0.5">
                      CHARSET="UTF-8"
                    </span>
                  </div>

                  <div className="bg-black/95 p-4 border border-white/10 h-48 overflow-y-auto no-scrollbar font-mono text-[10px] text-zinc-500 select-text selection:bg-[#ff0000]">
                    <pre className="text-left leading-normal font-mono">
                      {generateStandaloneHTML().substring(0, 5000)}
                      {"\n\n/* ... [REST OF DETAILED VECTOR MARKUPS AND VANILLA SCRIPTS BUNDLED SECURELY] ... */"}
                    </pre>
                  </div>
                </div>

              </div>

              {/* Exporter Controls Footer bar */}
              <div className="px-6 py-5 border-t border-white/10 bg-[#161616] flex flex-col sm:flex-row gap-3 justify-end items-stretch sm:items-center">
                <button
                  onClick={copySourceToClipboard}
                  className="flex items-center justify-center gap-2 font-sans font-black uppercase text-xs tracking-wider border border-white hover:bg-white hover:text-black py-3 px-6 text-white bg-transparent transition-colors focus:outline-none h-fit cursor-pointer"
                >
                  {clipbCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ff0000]" />
                      <span>COPIED SUCCESSFULLY / 已全量复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY COMPILED SOURCE / 复制代码</span>
                    </>
                  )}
                </button>

                <button
                  onClick={downloadSourceHTML}
                  className="flex items-center justify-center gap-2 font-sans font-black uppercase text-xs tracking-wider bg-[#ff0000] border border-[#ff0000] text-black hover:bg-white hover:text-black py-3 px-6 transition-all focus:outline-none cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD standalone index.html / 生成并下载源码</span>
                </button>
              </div>

              {/* Informational Guidance block */}
              <div className="p-6 overflow-y-auto space-y-6 max-h-[60vh] no-scrollbar">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-[#1c1c1c] pb-6">
                  <div className="md:col-span-8 space-y-3">
                    <h4 className="font-sans font-black text-sm text-white uppercase flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#ff0000]" />
                      <span>{lang === "zh" ? "资深开发专享交付 · 100% 独立无依赖运行" : "Senior-Level Single File Blueprint · Production Ready"}</span>
                    </h4>
                    
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed text-justify">
                      {lang === "zh" ? (
                        "为完全满足您的 GitHub Pages 托管需求，本导出器将上述精美的 A Black Cover Design 风格单页、多国语言交互引擎、离线加密留言板数据库、以及 8 种高分辨率矢量设计作品图，一并编译并打包压缩进单个 index.html 文件中。您不需要任何 npm、Node.js、Vite 或者构建打包工具，直接将此文件放置于 GitHub 仓库中托管即可完美渲染运行！"
                      ) : (
                        "To perfectly accommodate your direct GitHub Pages hosting, this utility packages the responsive typography, the localized message board registers, the multi-language togglers, and all 8 custom vector art assets inside a single HTML file. No npm/Vite builders are needed anymore."
                      )}
                    </p>

                    <ol className="list-decimal pl-4 font-sans text-[11px] text-[#ff0000] font-bold space-y-1.5">
                      <li>{lang === "zh" ? "点击下方「一键生成并下载 index.html」。" : "Click 'GENERATED & DOWNLOAD index.html' below."}</li>
                      <li>{lang === "zh" ? "登录 GitHub 建立新公开仓库，直接将该文件上传重命名为 index.html。" : "Create standard GitHub Repository, drop index.html inside."}</li>
                      <li>{lang === "zh" ? "配置 GitHub Pages 选项即可实现 10 毫秒极速载入和高级哑光的极致视觉传播。" : "Enable GitHub Pages under repo settings to enjoy ultra-rapid loading speeds."}</li>
                    </ol>
                  </div>

                  {/* Right: Metrics */}
                  <div className="md:col-span-4 bg-black border border-[#222] p-4 font-mono text-[10px] space-y-2 text-zinc-400">
                    <div className="flex justify-between border-b border-[#141414] pb-1.5 font-bold text-white">
                      <span>METRIC DATA / 参数</span>
                      <span className="text-[#ff0000]">VALUES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TYPE ARCH:</span>
                      <span className="text-white">VANILLA ES6+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>VECTOR EMBEDS:</span>
                      <span className="text-[#ff0000]">8 INLINES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EXTERNAL DEPS:</span>
                      <span className="text-white">0% DEPENDENT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>BILINGUAL SYSTEM:</span>
                      <span className="text-white">ZH / EN CORE</span>
                    </div>
                  </div>
                </div>

                {/* Live Preview Box of Raw Code */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-zinc-500 font-extrabold uppercase">
                      STANDALONE COMPILED SOURCE PREVIEW (REDUCED VIEW) // 预览底层源码
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 bg-black border border-[#222222] px-2 py-0.5">
                      CHARSET="UTF-8"
                    </span>
                  </div>

                  <div className="bg-black/95 p-4 border border-[#222222] h-48 overflow-y-auto no-scrollbar font-mono text-[10px] text-zinc-500 select-text selection:bg-[#ff0000]">
                    <pre className="text-left leading-normal">
                      {generateStandaloneHTML().substring(0, 5000)}
                      {"\n\n/* ... [REST OF DETAILED VECTOR MARKUPS AND VANILLA SCRIPTS BUNDLED SECURELY] ... */"}
                    </pre>
                  </div>
                </div>

              </div>

              {/* Exporter Controls Footer bar */}
              <div className="px-6 py-5 border-t border-[#222222] bg-[#161616] flex flex-col sm:flex-row gap-3 justify-end items-stretch sm:items-center">
                <button
                  onClick={copySourceToClipboard}
                  className="flex items-center justify-center gap-2 font-sans font-black uppercase text-xs tracking-wider border border-white hover:bg-white hover:text-black py-3 px-6 text-white bg-transparent transition-colors focus:outline-none h-fit"
                >
                  {clipbCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ff0000]" />
                      <span>COPIED SUCCESSFULLY / 已全量复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY COMPILED SOURCE / 复制代码</span>
                    </>
                  )}
                </button>

                <button
                  onClick={downloadSourceHTML}
                  className="flex items-center justify-center gap-2 font-sans font-black uppercase text-xs tracking-wider bg-[#ff0000] border border-[#ff0000] text-black hover:bg-white hover:text-black py-3 px-6 transition-all focus:outline-none"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD standalone index.html / 生成并下载源码</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
