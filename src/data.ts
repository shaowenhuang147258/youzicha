/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "./types";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "project-001",
    code: "AMZN-BLW01",
    title: "无刷高速电机吹风机 C4D 主图及 A+ 视觉包装",
    titleEn: "110,000 RPM HIGH-SPEED BLOWER ULTRA-VISUALS",
    category: "亚马逊电商主图与 A+ 视觉包装",
    categoryEn: "Amazon E-Commerce Hero & A+ Design",
    year: "2026",
    client: "云速科技旗舰店",
    clientEn: "CloudVelocity Flagship (Amazon Global)",
    brief: "基于 C4D 与 Octane 的电影级高对比度光影重构，极高反差展现超流空气动力学与磨砂金属工艺细节。",
    briefEn: "Cinema 4D and Octane high-contrast cinematic raytracing sculpting aerodynamic contours and micro-texture metallic anodization.",
    details: "为了在亚马逊饱和的搜索结果中实现极高的点击率（CTR）与页面转化率（CR），本案重塑了高端吹风机的整套视觉呈现。我们拒绝平庸的多光源面光源渲染，完全采用具有强方向性的单侧逆光和微弱反光。通过 C4D 厘米级建模与 Octane 全物理材质计算，不仅复现了阳极氧化微哑光面（Grip Texture）的极高档次阻尼感，还在 A+ 页面中使用高反差的严密信息网格、极细的测绘引线与鲜明显眼的红色动作提示标识（Callout），将 11 公里强压气流和风筒内部热循环进行了无可置疑的数学图像化，使卖点更深邃、文字更清晰、产品价值一目了然。",
    detailsEn: "Engineered specifically to command high Click-Through Rates (CTR) and Conversion Rates (CR) in crowded Amazon search grids. This system replaces standard studio lighting with deep directional focus and micro-specular accents. Built in Cinema 4D and Octane with correct physical parameters, the renders capture subtle anodized micro-granules (VDI 24 tier) and geometric seams. The A+ pages leverage restricted typographies, technical measurement schematics, and sharp crimson details to map the 110k RPM cylinder airstream, establishing a high-end visual blueprint that drives commercial trust and decreases cognitive buying friction.",
    tags: ["3D Rendering", "Visual Design", "Minimalism"],
    credits: [
      { label: "色彩与光影 (C4D/Octane)", labelEn: "Lighting & Shaders", value: "Jerry S." },
      { label: "电商转化策划", labelEn: "Conversion Lead", value: "Jerry S." },
      { label: "A+ 页面排版", labelEn: "A+ Layout Grid", value: "A Black Cover Design" }
    ],
    colorTheme: {
      bg: "#1A1A1A",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "blower"
  },
  {
    id: "project-002",
    code: "AMZN-MOW02",
    title: "智能无人割草机户外光影渲染与真实质感表现",
    titleEn: "AUTONOMOUS LAWN MOWER REAL-WORLD FIELD RENDER",
    category: "亚马逊电商户外拟真 3D 渲染",
    categoryEn: "Amazon E-Commerce 3D Outdoor Rendering",
    year: "2025",
    client: "绿拓园林装备 (AMZN)",
    clientEn: "GreenTrek Robotics (Amazon US/EU)",
    brief: "户外日光的微漫反射、数万根毛发草坪质感及泥尘堆积的拟真写实渲染体系。",
    briefEn: "High-fidelity photorealistic outdoor natural sunlight simulation featuring custom blade hair systems and subtle grit.",
    details: "高端庭院设备的视觉痛点在于其质感是否厚重可靠。为了将割草机塑造为坚固、精确的户外艺术品，我们使用三维模型粒子系统（Hair Instancing）生成了富含真实漫反射和含水叶面物理层（Chlorophyll Refraction）的精细草坪。渲染专注于解决下午三点微红日光下机器底部与高牵引轮胎花纹的接地投影痕迹（Contact Shadows），并在外壳缝隙加入超细颗粒泥砂贴图进行尘迹叠加。排版采用极具统治力的粗壮无衬线字体，将机器在草坪切割定位、避障雷达扫描的技术路径一并用明锐红色激光线条指示出来，在深色画布上更显字字锋利，极大地提升了购买意向与溢价竞争力。",
    detailsEn: "Outdoor lawn equipment visual strategy relies heavily on perceived build durability and technology. To present this robot mower as an absolute heavy-duty beast, we deployed instanced hair particles representing organic grass blades with authentic solar scattering. Renders are set precisely to 3:00 PM natural sunshine, producing elongated soft shadows modeling traction treads and the bottom rotor plate. Extreme micro-grime textures were mapped into chassis joints to simulate rugged performance. Paired with bold, Swiss-structured headers detailing radar navigation paths in clean red laser graphics, this high-contrast structure is highly legible, communicating unmatched utility that drives immediate addition to cart.",
    tags: ["3D Rendering", "Visual Design", "Minimalism"],
    credits: [
      { label: "粒子与环境渲染", labelEn: "Environment Design", value: "Jerry S." },
      { label: "3D CMF 工艺设定", labelEn: "3D CMF Specialist", value: "Jerry S." },
      { label: "卖点提炼视觉化", labelEn: "Visual identity", value: "A Black Cover Design" }
    ],
    colorTheme: {
      bg: "#121212",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "mower"
  },
  {
    id: "project-003",
    code: "AMZN-TIL03",
    title: "大功率微耕机内部结构拆解爆炸图与电商卖点系统",
    titleEn: "POWER ROTOTILLER EXPLODED-VIEW ENGINE VISUALS",
    category: "亚马逊电商高转化三维爆炸图",
    categoryEn: "Amazon High-Conversion Exploded 3D Renders",
    year: "2026",
    client: "雷刚越野重工 (AMZN AP)",
    clientEn: "Raygang Heavy Industries (Amazon Global)",
    brief: "以合金传动轴齿轮与大功率油发机 100% 拆解爆炸排线，锚定核心品质说服力。",
    briefEn: "Aggressive 3D mechanical breakdown highlighting transmission gear boxes to project extreme performance and quality.",
    details: "对重型微耕设备而言，消费者决定付款的关键往往在于机器的核心内部结构及动力学系统是否可靠、不坏。本案采用透视性爆炸视图（Exploded-View），重金对212cc内燃机、双排离合齿轮副、硬化锰钢旋耕叶刀进行逐级精密排线和引出。我们在深沉深空黑背景下对金属磨砂、合金齿轮黄油质感進行高对比度渲染。排版中运用引人瞩目的红、白、灰高反差多层格栅，配以微米级极细对齐引导引线，使复杂的工程学参数和高负载卖点提炼在半秒内击中买家心弦，用无懈可击的高品质爆炸细节完成高溢价转化闭环。",
    detailsEn: "With internal-combustion farming tillers, buyers buy with their eyes on durability. To remove this cognitive conversion obstacle, we structured an uncompromised 3D exploded assembly revealing the 212cc cylinder block, hardened manganese rotary blades, and multi-stage precision gears. Renders set inside obsidian background maximize the crisp contrast of metal sheens and grease micro-films. The editorial template injects sharp vertical Swiss structures and ultra-fine alignment traces. This technical clarity addresses Amazon specifications with authoritative visual evidence, boosting sales conversion by converting dry specs into premium mechanical spectacles.",
    tags: ["3D Rendering", "Visual Design", "Minimalism"],
    credits: [
      { label: "传动模型爆炸排线", labelEn: "Exploded Tech Layout", value: "Jerry S." },
      { label: "技术插画与标注文件", labelEn: "Dimension Callouts", value: "Jerry S." },
      { label: "排版与骨架网格系统", labelEn: "Agency Coordination", value: "A Black Cover Design" }
    ],
    colorTheme: {
      bg: "#1A1A1A",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "tiller"
  },
  {
    id: "project-004",
    code: "ABCD-V04",
    title: "哑光高强度概念日用品器皿",
    titleEn: "HIGH-POLY MATTE POLYMER VESSEL",
    category: "工业器物渲染及概念造型",
    categoryEn: "Industrial Object Design & Render",
    year: "2025",
    client: "格物工业概念实验室",
    clientEn: "GE-WU Proto-Lab Labs",
    brief: "对极简切削体块、模具咬花纹理在极端非高光材质下的一次真实写实渲染。",
    briefEn: "High-fidelity digital rendering of raw geometric cutblocks and industrial matte textures under uniform studio lights.",
    details: "围绕纯实用主义几何体块展开设计，器皿在边缘处进行了非对称圆角切削。渲染重点在于模拟模具咬花（Mold Texturing）后的超细微颗粒表面（VDI 24级别）。光线在表面上均匀漫射开来，完全不产生耀斑，展现出高级哑光的质感力量。",
    detailsEn: "Formed around purely functional, asymmetric volumetric blocks, the physical container exhibits CNC-cut chamfer elements. The simulation strictly replicates raw industrial micro-stippling (VDI 24 bead-blast tier). Ambient light diffuses uniformly across the geometric planes without producing hot-spots.",
    tags: ["Product Design", "3D Shader", "Minimalism", "Prototyping"],
    credits: [
      { label: "造型设计", labelEn: "Industrial Designer", value: "Jerry S." },
      { label: "色彩与质感", labelEn: "CMF Specialist", value: "Min S. Lin" },
      { label: "质感质检", labelEn: "3D Rendering Tech", value: "Jerry S." }
    ],
    colorTheme: {
      bg: "#121212",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "vessel"
  },
  {
    id: "project-005",
    code: "ABCD-V05",
    title: "北京当代艺术节空间导视标识集",
    titleEn: "BEIJING CONTEMPORARY WAYFINDING",
    category: "大型导视与建筑空间视觉系统",
    categoryEn: "Wayfinding & Spatial Graphics",
    year: "2026",
    client: "北京当代艺术基金会",
    clientEn: "Beijing Contemporary Art Foundation",
    brief: "以标志性的粗体导向箭头、绝对的网格红线，构建高对比度的环境导视传达。",
    briefEn: "Bold directional signages, graphic arrow glyphs, and rigid alignment rules forming a high-contrast architectural navigation system.",
    details: "我们将建筑看作一张展开的平面。在展厅廊道、立柱、横梁上，采用大面积的亚光红与深石墨灰对比字块。所有的文字和指向箭头均顶格排列，通过强力的黑红粗线条和极端不均等的排版分布，使空间具有剧烈的平面压迫感与鲜明的指引性。",
    detailsEn: "We treat volumetric architecture as a folded graphic plane. Across hallways, support columns, and structural trusses, huge spans of matte red clash with deep graphite fields. All characters and functional arrows sit flush against rigid lines, creating immediate structural tension and commanding intuitive site navigation.",
    tags: ["Wayfinding", "Graphic Design", "Asymmetry", "Signage System"],
    credits: [
      { label: "视觉传达总监", labelEn: "Director", value: "Guang Yu" },
      { label: "环境导视开发", labelEn: "Wayfinding Architect", value: "Jerry S." },
      { label: "空间深化", labelEn: "Spatial Drafter", value: "Nuo Qian" }
    ],
    colorTheme: {
      bg: "#1A1A1A",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "wayfinding"
  },
  {
    id: "project-006",
    code: "ABCD-V06",
    title: "无衬线等距等宽字体排印艺术样张",
    titleEn: "MONOSPACE TYPOGRAPHIC MATRIX",
    category: "字体排印、样张及平面艺术",
    categoryEn: "Typographic Design & Specimen",
    year: "2025",
    client: "汉字新动力倡议",
    clientEn: "Hanzi Font Design Initiative",
    brief: "通过严格比例矩阵展现具有骨骼特征（Skeletal Features）的等距字体平面韵律。",
    briefEn: "Exploring the raw skeletal structure and mechanical increments of a custom monospaced sans-serif typeface in absolute grids.",
    details: "没有修饰、没有配图，我们将字符本身视为最完美的构图。在网格中，黑、灰、红三种不同粗细和大小的字符以极其紧凑的行距堆叠，形成复杂的文字墙，探索字符骨架（Stroke Skeletal Line）和墨槽（Ink Traps）的高对比度几何表达。",
    detailsEn: "Void of graphical embellishments, we celebrate letterforms as self-sufficient architectures. Through complex vertical stacking, deep crimson weights are offset by graphite counterprints. The layout analyzes skeletal letter paths and heavy ink-traps directly exposed to structural constraints.",
    tags: ["Typography", "Poster Design", "Monospace", "Swiss Style"],
    credits: [
      { label: "字形设计师", labelEn: "Type Designer", value: "Jerry S. & Wang Ru" },
      { label: "展示设计", labelEn: "Specimen Curator", value: "Nod Young" },
      { label: "排版校对", labelEn: "Typo Quality Lead", value: "Jerry S." }
    ],
    colorTheme: {
      bg: "#121212",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "matrix"
  },
  {
    id: "project-007",
    code: "ABCD-V07",
    title: "参数化折面声学扩散陶板",
    titleEn: "COMPUTATIONAL ACOUSTIC CERAMICS",
    category: "3D 参数化墙体渲染与材料计算",
    categoryEn: "3D Parametric Ceramics & Physics",
    year: "2026",
    client: "声纳材料建筑研究中心",
    clientEn: "Sonar Architectural Material Lab",
    brief: "通过三角算法生成的正弦声学折面陶板造型与漫反射阴影三维高级写实渲染。",
    briefEn: "Algorithmic triangular tessellation producing structural acoustic waves, rendered in procedural textured bisque tiles.",
    details: "应用参数化设计，声学陶板由数百片角度相异的三角形表面咬合。我们在渲染中利用了漫反射物理着色器（Lambertian Diffuse Shader）来实现绝对无反光的质感，并引入少许的表面细微颗粒和物理污垢贴图，以彰显材料的真实温度与质感本源。",
    detailsEn: "Using mathematical parametric rules, the acoustic bisques are built from interlocking triangle polygons at varying face normals. The visual output controls a diffuse Lambertian shader to sustain a non-specular output, enhanced with procedural pottery soil maps to register physical context.",
    tags: ["Computational", "3D Rendering", "Material Shader", "Ceramics"],
    credits: [
      { label: "参数化造型", labelEn: "Parametric Designer", value: "Dr. Lin (MIT)" },
      { label: "数字化表现", labelEn: "3D Digital Artist", value: "Jerry S." },
      { label: "材料监修", labelEn: "CMF Quality Assurer", value: "Guang Yu" }
    ],
    colorTheme: {
      bg: "#1A1A1A",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "parametric"
  },
  {
    id: "project-008",
    code: "ABCD-V08",
    title: "《黑色封面设计》十年作品集年报",
    titleEn: "ABCD DECADE ANTHOLOGY",
    category: "年度视觉回顾与精装本年报",
    categoryEn: "Corporate Retrospective & Editorial",
    year: "2025",
    client: "先锋设计文献馆",
    clientEn: "Avant-Garde Design Archives",
    brief: "极其节制的信息层级、绝对边缘裁剪、烫哑光黑配红丝的设计文献回顾。",
    briefEn: "An archival review combining rigid typography, raw alignment scales, and deep debossed matte graphite accents.",
    details: "这是为向 A Black Cover Design 的经典设计致敬而策划的作品集年报。全书设计贯彻“不容置疑”的结构，每一个网格、页边距都带有直尺般极端的绝对和坚韧。内页使用了粗犷的等宽黑字，红色极粗横线横穿书脊，没有任何渐变，展现黑白红三色的顶级力量感。",
    detailsEn: "An archival visual document honoring minimalist standards. Built with uncompromising strictness, margins and trim-lines conform directly to engineering principles. Inside spreads utilize bold monolithic typography divided by blood-red rules of absolute flat thickness, realizing high-class contrast.",
    tags: ["Editorial", "Branding", "Covers System", "Historical Review"],
    credits: [
      { label: "主编/艺术总监", labelEn: "Editor in Chief", value: "Guang Yu" },
      { label: "平面排版设计", labelEn: "Editorial Lead", value: "Jerry S." },
      { label: "概念工艺师", labelEn: "Print Architect", value: "Nod Young" }
    ],
    colorTheme: {
      bg: "#121212",
      fg: "#EEEEEE",
      accent: "#FF0000"
    },
    svgId: "anthology"
  }
];

export const BIOGRAPHY_TEXT = {
  zh: "Jerry S.（生于1996年）是一位工作在先锋维度的视觉传达与3D空间材质渲染设计师。在职业生涯中，他深受北京设计机构 'A Black Cover Design' 以及‘瑞士学派’（International Typographical Style）的洗礼，致力于将严密冷静的数学骨骼网格、大张大合的字体排印节奏，以及极端无高光（Ultra-Matte）的工业重力感熔于一炉。他坚持不渲染透亮反光，不使用自然柔和的绿叶色系，拒绝华而不实的玻璃与微光，只在黑、深石墨灰、高对比灰白以及刺目的深红之中，构建出沉重、直白、不可震撼的信息体积与空间。作品曾多次入选亚太前沿设计双年展与数字空间材质博览会。",
  en: "Jerry S. (b. 1996) is an avant-garde Visual Communication and 3D Spatial Rendering Artist. Heavily influenced by the design principles of Beijing-based 'A Black Cover Design' and the radical visual order of the Swiss Style, they strive to unite strict structural grids, assertive typographic pacing, and high-gravity ultra-matte industrial materiality. Selecting solid dark fields, pure off-white tones, and unyielding blood-red lines, Jerry strictly filters out specular sheen, glassware reflections, and organic greens. They curate a visual structure defined by raw weight, absolute contrast, and monolithic precision. Their interactive digital installations and industrial renders have been exhibited extensively at regional digital arts biennials."
};

export const COLLABORATORS = [
  "A Black Cover Design (ABCD)",
  "Beijing Contemporary Art Foundation",
  "Design 360° Magazine",
  "Sonar Sound-Material Lab",
  "Type-Path Press",
  "Hong-Kong Typography Biennale",
  "UCCA Center for Contemporary Art",
  "Shenzhen Design Society",
  "Poly-Material Concept Store"
];
