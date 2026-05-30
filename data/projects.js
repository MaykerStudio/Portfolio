// =============================================================================
//  Skills Data
// =============================================================================
const SKILLS = {
  gameplay: {
    label: 'Core Gameplay',
    items: [
      {
        name: 'Combat',
        desc: 'Combat systems focusing on timing, detection, and feedback to ensure hits feel weighty and encounters flow.'
      },
      {
        name: 'Movement',
        desc: 'Controllers, platforming, and aerial handling tuned for precision.'
      },
      {
        name: 'Gameplay Logic',
        desc: 'State-driven mechanics and shared systems built to withstand design shifts.'
      },
      {
        name: 'Player Experience',
        desc: 'Input handling and iterative playtesting to align player intention with action.'
      }
    ]
  },
  ai: {
    label: 'AI & Behavior Design',
    items: [
      {
        name: 'Enemy AI',
        desc: 'Attack telegraphing and pacing that give enemies a distinct personality.'
      },
      {
        name: 'AI Tools',
        desc: 'Node-based editors for sketching enemy logic without touching code.'
      },
      {
        name: 'Game Systems',
        desc: 'Decoupled systems that allow new features without rewriting core logic.'
      },
      {
        name: 'Debugging',
        desc: 'Real-time inspectors and visualizers to monitor AI decision making.'
      }
    ]
  },
  tooling: {
    label: 'Editor & Pipeline Tools',
    items: [
      {
        name: 'Unity Editor Tools',
        desc: 'Custom inspectors, wizards, and automations to reduce repetitive manual tasks.'
      },
      {
        name: 'Production Workflows',
        desc: 'Pipelines that support rapid iteration without breaking existing content.'
      },
      {
        name: 'Code Structure',
        desc: 'Readable, loosely coupled code that simplifies future extensions.'
      }
    ]
  },
  technical_art: {
    label: 'Technical Art & VFX',
    items: [
      {
        name: 'Technical VFX',
        desc: 'Gameplay effects using shaders, particles, and procedural tricks for clarity and style.'
      },
      {
        name: 'Shaders',
        desc: 'Shader Graph for interactive feedback and stylized visuals that maintain performance.'
      },
      {
        name: 'Optimization',
        desc: 'Profiling, batching, and resource stripping for target hardware.'
      }
    ]
  }
};

// =============================================================================
//  Project factory – ensures consistent structure and simplifies adding entries
// =============================================================================
/**
 * @param {Object} opts
 * @param {string} opts.id
 * @param {string} opts.title
 * @param {string} opts.subtitle
 * @param {string} opts.category
 * @param {string} opts.description
 * @param {Array<{type:string, src:string, alt?:string}>} [opts.media=[]]
 * @param {string[]} [opts.stack=[]]
 * @param {string} [opts.role='']
 * @param {string[]} [opts.highlights=[]]
 * @param {string} [opts.challenge='']
 * @param {string} [opts.solution='']
 * @param {Object} [opts.links={}]
 * @param {boolean} [opts.legacy=false]        // true for archived/older projects
 * @param {string} [opts.section]              // defaults: 'main' for non‑legacy, 'archive' for legacy
 * @param {string} [opts.legacyYear]           // only used when legacy = true
 * @returns {Object} project object
 */
function createProject({
  id,
  title,
  subtitle,
  category,
  description,
  media = [],
  stack = [],
  role = '',
  highlights = [],
  challenge = '',
  solution = '',
  links = {},
  legacy = false,
  section = legacy ? 'archive' : 'featured',
  legacyYear
}) {
  const project = {
    id,
    title,
    subtitle,
    category,
    description,
    media,
    stack,
    role,
    highlights,
    challenge,
    solution,
    links,
    legacy,
    section
  };
  if (legacyYear) project.legacyYear = legacyYear;
  return project;
}

// =============================================================================
//  Project Data
// =============================================================================
window.PROJECTS = [

  // ---------------------------------------------------------------------------
  //  Main & Showcase Projects
  // ---------------------------------------------------------------------------

  createProject({
    id: 'rat-trap',
    title: 'Rat Trap',
    subtitle: 'Hand-Drawn Character-Switching Metroidvania',
    category: 'Exploration & Gameplay Systems',
    description:
      'A 2D metroidvania centered on swapping characters. Each character provides unique abilities that open new paths and solve puzzles. Progression changes how you navigate the map.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/qYpyj4MyI8Q', alt: 'Rat Trap — Trailer' },
      { type: 'image', src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2723000/ss_ab03b1dce7b15c044a25b99ac61cd51dd90ad749.1920x1080.jpg?t=1770772434', alt: 'Rat Trap — Character Art' },
      { type: 'image', src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2723000/ss_28555b113f74a316925da1bad0adfe33088b22fa.1920x1080.jpg?t=1770772434', alt: 'Rat Trap — Switching Between Characters' },
      { type: 'image', src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2723000/ss_532b0ceb52590ef05def77e2162ca2d8ea5eaeaa.1920x1080.jpg?t=1770772434', alt: 'Rat Trap — Puzzle Room' }
    ],
    stack: [
      'Unity', 'C#', 'Gameplay Architecture', 'State Machines', 'Puzzle Systems', 'Custom Tooling'
    ],
    role: 'Lead Programmer',
    highlights: [
      'Instant character switching with shared controls and isolated state management.',
      'Exploration systems that handle gating and ability-based progression.',
      'A puzzle framework based on reusable interactions for varied combinations.',
      'Modular architecture to support rapid content scaling.',
      'Designer-facing hooks for progression tuning.'
    ],
    challenge:
      'I needed to implement character switching that felt natural while supporting a large map and complex puzzle logic without creating a mess of dependencies.',
    solution:
      'I used modular state ownership and interaction patterns. This allowed characters to share a control scheme while keeping their abilities and puzzle interactions independent.',
    links: { steam: 'https://store.steampowered.com/app/2723000/RAT_TRAP/' },
  }),

  createProject({
    id: 'rat-trap-ui',
    title: 'Rat Trap — Menus & UX',
    subtitle: 'Fluid Menu Systems & Player-Focused UX',
    category: 'UI Systems & Workflow Design',
    description:
      'I developed the menu systems for Rat Trap to minimize friction. Players navigate screens quickly without jarring pauses or visual clutter.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/3m1ZSweGH8k', alt: 'Rat Trap — Multitab Menu' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/0oq6bbv5pY0', alt: 'Rat Trap — Progress Screen' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/MNwkNvUK_EU', alt: 'Rat Trap — Progress Screen 2' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/6wSiH8eMvAE', alt: 'Rat Trap — Pause Menu' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/QnCRCNZvzBw', alt: 'Rat Trap — Shop Menu' }
    ],
    stack: ['Unity', 'C#', 'UI Systems', 'UX Design', 'Animation', 'Tooling'],
    role: 'Lead Programmer',
    highlights: [
      'Reusable menu architecture that handles complex data consistently across screens.',
      'Responsive UI flows that maintain game momentum.',
      'Snappy transitions and micro-interactions for clear feedback.',
      'Extensible structures that support new features without redesigns.',
      'Tightly coupled UI and gameplay states for predictable navigation.'
    ],
    challenge:
      'Metroidvania menus often disrupt the experience. I wanted them to handle complex data without becoming a roadblock to the player.',
    solution:
      'I designed modular screens with a strict navigation contract and lightweight transitions. The resulting system is scalable and stays out of the way.',
    links: { steam: 'https://store.steampowered.com/app/2723000/RAT_TRAP/' },
  }),

  createProject({
    id: 'comp-form',
    title: 'Shiro - AI Companion Forms',
    subtitle: 'Gameplay-Driven VFX & Visual Feedback Systems',
    category: 'Technical VFX & Gameplay Systems',
    description:
      'This project integrates gameplay and VFX using timing and layered visuals to amplify actions while remaining performant for team iteration.',
    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/Xg-b5SFwTtc',
        alt: 'Companion Form VFX — Showcase'
      },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/YzNoD3PgBWE',
        alt: 'Companion Form VFX — Showcase'
      }
    ],
    stack: ['Unity', 'C#', 'Shader Graph', 'Particles', 'Technical VFX', 'Gameplay Systems'],
    role: 'Technical VFX Artist • Gameplay Programmer',
    highlights: [
      'Form-specific VFX using particles, shaders, and screen effects.',
      'A state machine system allowing multiple forms to share core logic with distinct visuals.',
      'Visual hierarchy that telegraphs mechanics without cluttering the screen.',
      'Stylized visuals optimized for real-time performance.'
    ],
    challenge:
      'I needed high-impact effects without excessive particle counts and a way to manage multiple AI forms that shared a core but felt visually distinct.',
    solution:
      'I used composition, driving effects via gameplay parameters and clear layering rules. Each form maintains its identity on a lean technical base.',
    links: { Breakdown: '/Companion-Forms.html' }
  }),

  createProject({
    id: 'shiro',
    title: 'Shiro - Enemies & AI Tool',
    subtitle: 'A 2D Combat Metroidvania with a Custom Node-Based AI Toolkit',
    category: 'Gameplay AI & Tool Development',
    description:
      'I built a visual, node-based AI system for enemy behaviors. This allows designers to create enemies quickly and debug them in real time without compromising combat performance.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/W0GpsP0deC0?si=bGQoK19uU9NwFirx', alt: 'Shiro — Enemy AI Tool' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/vaWjq99quYM', alt: 'Shiro — AI Behaviors' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/rh-r-riVrok', alt: 'Shiro — AI Systems' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/-2hlO4NK7Mo', alt: 'Shiro — AI' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/zxLVGhI3vOI', alt: 'Shiro — AI Authoring' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/8Kfkm1Deu7Q', alt: 'Shiro — AI' }
    ],
    stack: [
      'Unity', 'C#', 'Custom AI Framework', 'Node-Based Systems', 'Editor Tooling', 'Gameplay Architecture'
    ],
    role: 'Lead Gameplay Programmer & AI Tool Developer',
    highlights: [
      'Custom node-based AI tool built for rapid combat iteration.',
      'Behavior pipelines for combat, movement, and scripting, configurable without code.',
      'Real-time AI debugging to inspect enemy decision making in the editor.',
      'Modular perception, memory, and decision components.',
      'Full behavior authoring for designers within the tool.'
    ],
    challenge:
      'Hardcoded AI was too slow for our iteration speed. We needed a way for designers to tweak and create behaviors on the fly during production.',
    solution:
      'I developed a custom AI framework with a node-based editor. Behaviors are composed from reusable modules and executed in a modular stack, reducing enemy creation time from days to hours.',
    links: {
      steam: 'https://store.steampowered.com/app/1589330/SHIRO/?cc=eu',
      AI2DTool: 'https://assetstore.unity.com/packages/tools/behavior-ai/2d-ai-tool-pro-196102'
    }
  }),

  createProject({
    id: 'shiro-environmental-hazards',
    title: 'SHIRO — Environmental Hazards & VFX',
    subtitle: 'Modular Hazard Systems & Combat-Focused VFX',
    category: 'Gameplay Architecture & VFX',
    description:
      'I created a hazard framework that lets level designers place obstacles without code. I also developed the stylized VFX using particles and shaders to clearly signal danger.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/TXeDlqbZBiA' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/swXFGoIoi3A' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/rNwW72rvH8M' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/05aFlNGHqfA' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/A-L_EXQBc-4' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/NIJuzEdpNEU' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/e9ubi3NAzQk' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/IJL8a6G_FNA' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/PH7DyfbWbEY' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/KHzJVNutOKg' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/1NjaGJjJWzM' }
    ],
    stack: [
      'Unity', 'C#', 'Gameplay Architecture', 'Particle Systems', 'Shader Graph', 'Editor Tools', 'Screen Distortion', 'Reusable Systems'
    ],
    role: 'Gameplay Programmer / Technical VFX Artist',
    highlights: [
      'Unified hazard architecture with shared behaviors and clean APIs.',
      'Block-based hazard assembly for level designers.',
      'Multiple hazard types including spikes and saws running on one system.',
      'VFX that communicate danger zones and attack timing.',
      'Camera-based distortion system for 2D screen effects.',
      'Consistent visual feedback across hazards with different timing profiles.'
    ],
    challenge:
      'Hazards varied from simple contact triggers to moving saws, but they all needed to work within a single designer-friendly framework.',
    solution:
      'I built a base hazard class with hooks for timing and visual feedback. Designers use a config system to mix behaviors, while the VFX layer remains lightweight.',
    links: { steam: 'https://store.steampowered.com/app/1589330/SHIRO/' }
  }),

  createProject({
    id: 'judgement-cut-vfx',
    title: 'Judgement Cut End — Area Slash VFX',
    subtitle: 'A Stylized Combat VFX Sequence',
    category: 'Combat VFX & Cinematic Timing',
    description:
      'A slash attack inspired by DMC. I focused on anticipation and release using layered particles, procedural slash shapes, and smears to create a strong impact.',
    media: [
      { type: 'video', src: 'https://cdn.artstation.com/p/video_sources/002/407/511/slash-vfx.mp4' },
      { type: 'video', src: 'https://cdn.artstation.com/p/video_sources/002/407/683/combined-post-processing.mp4' },
      { type: 'image', src: 'https://cdnb.artstation.com/p/assets/covers/images/084/355/043/small_square/mayke-frankley-mayke-frankley-unity-vfx-slash.jpg?1738164897', alt: 'Judgement Cut End — Slash VFX' }
    ],
    stack: ['Unity', 'Particle Systems', 'Timeline', 'Shader Graph', 'Material Maker', 'Cascadeur', 'VFX Art'],
    role: 'Solo Technical VFX Artist / Programmer',
    highlights: [
      'Full sequence ownership from sketch to final polish.',
      'Procedural textures for slash trails and energy fragments using Material Maker.',
      'Custom shaders for impact freezes, distortion, and motion smearing.',
      'Cascadeur animation timed for the wind-up and snap of the slash.',
      'Timeline orchestration of camera shakes, hit pauses, and VFX beats.',
      'Anime-style impact frames combining freeze, color inversion, and shake.'
    ],
    challenge:
      'I needed the slash to feel powerful and readable without creating visual noise during a split-second action.',
    solution:
      'I used animation-driven timing to build tension and layered particles over freeze frames to ensure the impact was felt.',
    links: { artstation: 'https://www.artstation.com/artwork/0leGnE' }
  }),

  createProject({
    id: 'smear-impact-tool',
    title: 'Smear & Impact Frames Tool',
    subtitle: 'Anime-Style Motion Amplification for Unity',
    category: 'Tooling & Visual Polish',
    description:
      'A Unity tool that adds smears and impact frames. It works without custom render pipelines to provide immediate anime-style motion punch.',
    media: [
      { type: 'image', src: 'assets/img/portfolio/details/impact-frames-tool-1.png', alt: 'Smear & Impact Frames Tool — Demo' },
      { type: 'image', src: 'assets/img/portfolio/details/impact-frames-tool-2.png', alt: 'Smear & Impact Frames Tool — Demo 2' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/MfKs7Bsjf58', alt: 'Smear & Impact Frames Tool — Showcase' },
    ],
    stack: ['Unity', 'C#', 'Shader Graph', 'Animation', 'Custom Editor Tooling', 'VFX'],
    role: 'Solo Tool Developer / Technical VFX',
    highlights: [
      'Workflow for applying smears to movement and attacks.',
      'Anime-style freeze and inversion for impactful frames.',
      'Simple component-based integration.',
      'Controls compatible with both brawlers and platformers.',
      'Real-time tuning of smears and freeze timings in play mode.'
    ],
    challenge:
      'I wanted to provide a way to create flashy anime motion without requiring developers to write shaders or build complex VFX systems.',
    solution:
      'I automated smear generation and impact frame timing through inspector controls, making it easy to add weight to actions in any project.',
    links: { 'Asset Store Soon': 'https://assetstore.unity.com/' }
  }),

  createProject({
    id: 'shiro-bad-touch-vfx',
    title: 'Bad Touch Respawn VFX',
    subtitle: 'Technical VFX · Shiro',
    category: 'Technical VFX',
    description:
      'A sci-fi respawn and despawn effect for Shiro. The effect dissolves the player sprite into particles using a mix of Unity Particle System and VFX Graph.',

    role: 'Designed and implemented the VFX pipeline, including sprite sampling, particle behavior, dissolve logic, and gameplay integration.',
    stack: ['Unity', 'VFX Graph', 'Shader Graph', 'Particle System', 'URP', 'C#'],
    highlights: [
      'Sprite-to-particle dissolve using the current character frame',
      'Hybrid Particle System and GPU VFX Graph workflow',
      'Integrated death and respawn transition effects',
      'Custom dissolve timing and particle emission control',
      'Sci-fi visuals matching the Shiro art style',
      'Responsive real-time gameplay integration'
    ],
    challenge:
      'I needed a death and respawn effect that felt impactful and readable while staying true to the game\'s visual identity.',
    solution:
      'I used VFX Graph to sample the sprite and dissolve it into GPU particles, adding layered energy bursts and distortion for better feedback.',
    links: {},
    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/zGV2u-SOAoQ'
      }
    ],
    section: 'showcase'
  }),

  createProject({
    id: 'shiro-water-rendering',
    title: 'Interactive Water Rendering',
    subtitle: 'Stylized 2D Water Shader for SHIRO',
    category: 'VFX & Technical Art',
    description:
      'A stylized interactive water solution for SHIRO. It reacts to player movement and environmental interaction to make levels feel more alive while remaining lightweight.',
    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/soqNu4WyOj8'
      }
    ],
    stack: ['Unity', 'Shader Graph', 'URP', 'Particles', 'Technical Art', '2D Rendering'],
    role: 'Technical VFX Artist / Gameplay Programmer',
    highlights: [
      'Water shader that blends with SHIRO’s hand drawn style',
      'Surface motion driven by player and gameplay interaction',
      'Combined shader animation and secondary particles for better motion',
      'Scalable design for various level scenarios'
    ],
    links: {},
    section: 'showcase'
  }),

  createProject({
    id: 'shiro-dash-vfx',
    section: 'showcase',

    title: 'Shiro Dash VFX',
    subtitle: 'Hybrid Particle Systems + VFX Graph Dash Effect',
    category: 'Technical VFX',

    description:
      'A high-speed dash effect using a hybrid of Particle Systems and VFX Graph. It focuses on readability and directional motion while staying lightweight for combat.',

    role:
      'Technical VFX Artist · Gameplay Programmer',

    stack: [
      'Unity',
      'VFX Graph',
      'Particle System',
      'Shader Graph',
      'URP',
      'Custom Shaders'
    ],

    highlights: [
      'Combined volumetric particles with traditional systems for tighter timing',
      'Directional energy trails synchronized with velocity and animation',
      'Layered additive distortion and glow for better readability',
      'Shader-driven UV distortion and dissolve masks to emphasize speed',
      'Optimized particle counts for combat-heavy scenes',
      'Preserves player silhouette during fast movement'
    ],

    challenge:
      'I had to balance visual intensity with readability. The dash needed to feel aggressive without obscuring enemies or player positioning.',

    solution:
      'I used VFX Graph for shape particles based on character pixels and traditional systems for trails. Custom shaders added distortion and glow without blocking the view.',

    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/Y3AOkVdCMlg'
      }
    ],
  }),

  // ---------------------------------------------------------------------------
  //  Legacy / Archive Projects
  // ---------------------------------------------------------------------------

  createProject({
    id: 'android-arcade-prototype',
    title: 'Project Blue Shield',
    subtitle: 'Quick Mobile Arcade Prototype',
    category: 'Mobile Prototyping & Gameplay',
    description:
      'A fast arcade experience for Android with escalating enemies and weapon pickups, built to test a tight mobile game loop.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/JRkccHQgHBY' },
      { type: 'image', src: 'assets/img/portfolio/details/project-b-2.png' }
    ],
    stack: ['Unity', 'C#', 'Android', 'Gameplay Systems', 'Rapid Prototyping', 'UI', 'Enemy Behaviors'],
    role: 'Solo Gameplay Programmer',
    highlights: [
      'Rapid cycle from concept to playable Android build.',
      'Survival loop focused on defending a core objective.',
      'Tactical weapon pickups that change combat style.',
      'Varied enemy behaviors, including rushers and hunters.',
      'Scalable architecture for new enemy types and bosses.'
    ],
    challenge:
      'I wanted to build a satisfying mobile arcade experience quickly without sacrificing gameplay depth.',
    solution:
      'I focused on a vertical slice with a tight core loop and reusable systems. This kept the codebase lean and the gameplay focused.',
    links: { demo: 'https://drive.google.com/file/d/103-AoxCmm7IZyPH23FmAKAv7R07FwIx3/view' },
    legacy: true,
    section: 'archive',
    legacyYear: '2020'
  }),

  createProject({
    id: 'legacy-metroidvania-prototype',
    title: '2D Metroidvania Prototype',
    subtitle: 'Early Combat Systems & Open World Experimentation',
    category: 'Archive · Gameplay Programming',
    description:
      'An early Unity project used to explore responsive combat, world streaming, and large animation sets within a Metroidvania framework.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/m7DtAvukxzQ' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/f9hYA0epIOI' },
      { type: 'image', src: 'assets/img/portfolio/details/project-a-1.png', alt: '2D Metroidvania Prototype' }
    ],
    stack: ['Unity', 'C#', 'Gameplay Programming', 'Animation Systems', 'Level Streaming', 'Blender', 'Photoshop'],
    role: 'Solo Developer',
    highlights: [
      'Scalable animation system for large sprite sheets.',
      'Responsive chainable attack combos with smooth transitions.',
      'Dynamic level loader that streams areas to simulate an open world.',
      'Hand-animated characters created in Blender and exported to Unity.',
      'Environmental art and scene composition in Photoshop.'
    ],
    challenge:
      'I was learning Unity while applying my programming background. The main goal was keeping systems flexible while figuring out the engine.',
    solution:
      'I prioritized modular code for combat and animation from the start. This ensured the foundation wouldn\'t break as I added more moves and areas.',
    links: {},
    legacy: true,
    section: 'archive',
    legacyYear: '2020'
  }),
  createProject({
    id: 'ai-editor',

    category: 'Unity Tools',

    title: 'Node-Based AI Editor',
    section: 'tools',

    subtitle:
      'Visual behavior authoring and runtime debugging framework.',

    description:
      'A custom node-based behavior editor for scaling enemy AI, reusable logic flows, and complex states in 2D games.',

    role:
      'Gameplay Programmer · Tools Programmer',

    stack: [
      'Unity',
      'C#',
      'Editor Scripting',
      'Open Source Node Framework',
      'AI Architecture'
    ],

    highlights: [
      'Reusable node architecture',
      'Transition debugging',
      'Complex base states for movement and combat',
      'Designer-friendly editing',
      'Custom editor tooling'
    ],

    challenge:
      'Hardcoded state logic made enemy behaviors difficult to scale and debug.',

    solution:
      'I built a visual node-based workflow with modular behaviors, reusable transitions, and runtime inspection tools.',

    media: [
      {
        type: 'image',
        src: 'assets/img/portfolio/details/2D-ai-tool.jpg'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/details/2D-ai-tool-1.png'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/details/2D-ai-tool-2.png'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/details/2D-ai-tool-3.png'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/details/2D-ai-tool-4.png'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/details/2D-ai-tool-5.png'
      },
    ],

    links: {
      AssetStore: 'https://assetstore.unity.com/packages/tools/behavior-ai/2d-ai-tool-pro-196102',
      Framework: 'https://github.com/Siccity/xNode'
    }
  }),
  createProject({
    id: 'rattrap-hitbox-synchronizer',

    section: 'tools',

    category: 'Unity Tools',

    title: 'Rat Trap Character Synchronizer',

    subtitle:
      'Prefab synchronization tool for shared combat and gameplay components.',

    description:
      'A custom editor tool for Rat Trap that synchronizes hitboxes and shared components across 16 playable character prefabs. It allows combat tuning from a single source prefab and propagates changes safely.',

    role:
      'Gameplay Programmer · Tools Programmer',

    stack: [
      'Unity',
      'C#',
      'Editor Scripting',
      'SerializedObject',
      'PrefabUtility',
      'Custom Inspectors',
      'Production Pipelines'
    ],

    highlights: [
      'Multi-prefab hitbox synchronization',
      'Shared gameplay component propagation',
      'Runtime-safe serialized property copying',
      'Custom split-view editor interface',
      'Batch prefab editing workflows',
      'Undo support and propagation logs',
      'Searchable component inspector',
      'Production iteration optimization'
    ],

    challenge:
      'Editing values manually across 16 characters sharing combat logic was slow and prone to errors during balancing passes.',

    solution:
      'I built a synchronization tool using SerializedObject pipelines and PrefabUtility. This propagates data from a master prefab while preserving object references and providing undo support.',

    media: [
      {
        type: 'image',
        src: 'assets/img/portfolio/Rat-Trap-Character-Synchronizer.png'
      },

      {
        type: 'image',
        src: 'assets/img/portfolio/Rat-Trap-Character-Synchronizer-2.png'
      }
    ],

    links: {}
  }),
  createProject({
    id: 'rattrap-room-loader',

    section: 'tools',

    title: 'Room Loader & Scene Streaming Tools',

    subtitle:
      'Unity editor pipeline for room-based level streaming, minimap generation, and rapid scene editing workflows.',

    category: 'Pipeline / Tools Engineering',

    description:
      'A room-based workflow for Rat Trap that automates trigger generation, additive scene setup, and async room loading for large 2D maps. The tools also generate minimap snapshots and allow designers to jump to room scenes via the minimap.',

    role:
      'Designed and implemented the editor tooling pipeline, trigger generation, scene loading workflow, minimap renderer, and navigation utilities.',

    stack: [
      'Unity',
      'C#',
      'Custom Editor Tools',
      'SceneManagement',
      'Async Loading',
      'Additive Scenes',
      'Level Streaming',
      'Pipeline Engineering'
    ],

    highlights: [
      'Automatic room trigger generation from collider geometry',
      'Async additive scene loading pipeline',
      'Editor-generated minimap screenshots from loaded scenes',
      'Clickable minimap navigation for room editing',
      'Grid-based room blocker generation',
      'Custom Unity editor windows and scene utilities'
    ],

    challenge:
      'Managing dozens of interconnected room scenes manually was slow. Designers needed to generate streaming triggers and navigate large maps without opening scenes one by one.',

    solution:
      'I created a room-streaming pipeline that automatically generates trigger zones, validates scene connections, and provides minimap-based navigation to speed up the editing workflow.',

    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/MB67DCHRm30',
        alt: 'Room Loader editor overview'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/room-loader-screen1.png',
        alt: 'Room Loader'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/room-loader-screen2.png',
        alt: 'Room Loader'
      }
    ],
  }),
  createProject({
    id: 'shiro-animation-search',

    section: 'tools',

    title: 'Animation Search & Preview Tool',

    subtitle:
      'Custom Unity editor for instantly finding, previewing, and navigating animation libraries across large projects.',

    category: 'Pipeline / Tools Engineering',

    description:
      'A searchable animation workflow for Shiro that allows developers to locate Animator Controllers, filter clips, preview animations, and jump to associated prefabs.',

    role:
      'Designed and implemented the editor tool, including controller indexing, search, prefab navigation, and editor playback controls.',

    stack: [
      'Unity',
      'C#',
      'Custom Editor Tools',
      'Animator Controllers',
      'Animation Window',
      'AssetDatabase',
      'Prefab Mode',
      'Pipeline Engineering'
    ],

    highlights: [
      'Project-wide Animator Controller scanning',
      'Direct Animation Window integration',
      'Built-in animation playback controls',
      'Controller sorting by animation count',
      'Prefab Mode workflow support',
      'Rapid animation discovery pipeline'
    ],

    challenge:
      'Shiro has many Animator Controllers spread across characters and enemies. Unity lacks a global search for animations, making it slow to find and preview specific clips.',

    solution:
      'I built an animation browser that indexes all controllers, provides instant filtering, and opens animations directly in the Animation Window, significantly reducing discovery time.',

    media: [
      {
        type: 'image',
        src: 'assets/img/portfolio/animation-selector-editor-1.png',
        alt: 'Animation Search Tool overview'
      },
      {
        type: 'image',
        src: 'assets/img/portfolio/animation-selector-editor-2.png',
        alt: 'Animator Controller search and filtering'
      },
    ],

    links: {
      github: 'https://github.com/MaykerStudio/UnityCustomAnimationSelector',
      demo: ''
    }
  })
];