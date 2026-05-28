// =============================================================================
//  Skills Data
// =============================================================================
const SKILLS = {
  gameplay: {
    label: 'Core Gameplay',
    items: [
      {
        name: 'Combat',
        desc: 'Responsive combat—timing, detection, and feedback that make hits feel weighty and encounters flow without hiccups.'
      },
      {
        name: 'Movement',
        desc: 'Fine-tuning controllers, platforming, and aerial handling so characters feel precise and never sluggish.'
      },
      {
        name: 'Gameplay Logic',
        desc: 'State-driven mechanics and shared systems that bend instead of breaking when the design shifts.'
      },
      {
        name: 'Player Experience',
        desc: 'Closing the gap between intention and action with careful input handling and constant playtesting.'
      }
    ]
  },
  ai: {
    label: 'AI & Behavior Design',
    items: [
      {
        name: 'Enemy AI',
        desc: 'Telegraphing attacks, controlling pace, and giving each enemy a personality that makes combat feel fair and reactive.'
      },
      {
        name: 'AI Tools',
        desc: 'Node-based editors that let designers sketch out enemy logic fast, keeping the code side out of the way.'
      },
      {
        name: 'Game Systems',
        desc: 'Growing systems without the tangled dependencies—adding features shouldn’t mean rewriting everything.'
      },
      {
        name: 'Debugging',
        desc: 'Real-time inspectors and visualizers that show you exactly what the AI is thinking, cutting out the guesswork.'
      }
    ]
  },
  tooling: {
    label: 'Editor & Pipeline Tools',
    items: [
      {
        name: 'Unity Editor Tools',
        desc: 'Custom inspectors, wizards, and automations that replace repetitive clicks with one button—and fewer headaches.'
      },
      {
        name: 'Production Workflows',
        desc: 'Pipelines that move fast but don’t break existing content, so the team can iterate without fear.'
      },
      {
        name: 'Code Structure',
        desc: 'Writing code that stays readable and loosely coupled, so extending it later doesn’t turn into a rebuild.'
      }
    ]
  },
  technical_art: {
    label: 'Technical Art & VFX',
    items: [
      {
        name: 'Technical VFX',
        desc: 'Gameplay-triggered effects built with shaders, particles, and procedural tricks—all tuned for clarity and style.'
      },
      {
        name: 'Shaders',
        desc: 'Shader Graph for interactive feedback, stylized looks, and visual beats that don’t tank the framerate.'
      },
      {
        name: 'Optimization',
        desc: 'Profiling, batching, and stripping out waste so the pretty stuff stays performant on real hardware.'
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
      'A 2D metroidvania with a hand-drawn look, built around swapping characters on the fly. Each one brings unique abilities, and the world’s puzzles and gates are tied to how you combine them. Progression reshapes the map and the way you think about moving through it.',
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
      'Character switching that feels instant, with shared controls and per-character states that never conflict.',
      'Exploration systems that handle gating and open new paths as abilities unlock.',
      'A puzzle framework built from reusable interactions, letting designers cook up unexpected combinations.',
      'Modular architecture so we could iterate fast and scale content without tearing the code apart.',
      'Hooks for designers to tune progression and pacing on their own, while I kept the engine clean.'
    ],
    challenge:
      'We needed character switching that felt natural, but also had to support a sprawling map, puzzle logic, and future mechanics—without turning into a tangled web of dependencies.',
    solution:
      'I built the systems around modular state ownership and interaction patterns. Each character brought something fresh while sharing a unified control scheme and a flexible puzzle layer, so adding new abilities didn’t break existing ones.',
    links: { steam: 'https://store.steampowered.com/app/2723000/RAT_TRAP/' },
  }),

  createProject({
    id: 'rat-trap-ui',
    title: 'Rat Trap — Menus & UX',
    subtitle: 'Fluid Menu Systems & Player-Focused UX',
    category: 'UI Systems & Workflow Design',
    description:
      'I shaped Rat Trap’s menus to feel immediate and unobtrusive. Players hop between screens as quickly as they explore the world, with no jarring pauses or clutter.',
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
      'Reusable menu architecture that behaves the same way on every screen, no matter how complex the data gets.',
      'UI flows that keep the player in the action—navigating menus feels just as responsive as combat.',
      'Transitions and micro-interactions that are snappy and clearly show what’s happening at all times.',
      'Structures built to absorb new features later without a full redesign.',
      'Tightly coupled UI and gameplay states so navigation is always predictable.'
    ],
    challenge:
      'Menus in a metroidvania can yank you out of the experience. The trick was making them powerful enough to handle complex data but light enough to never feel like a roadblock.',
    solution:
      'I designed modular screens with a strict navigation contract and lightweight transitions. That gave us a menu system that stays out of the way, scales without pain, and keeps the player’s attention where it belongs.',
    links: {}
  }),

  createProject({
    id: 'comp-form',
    title: 'Shiro - AI Companion Forms',
    subtitle: 'Gameplay-Driven VFX & Visual Feedback Systems',
    category: 'Technical VFX & Gameplay Systems',
    description:
      'Making gameplay and VFX work as one. This project uses timing, motion, and layered visuals to amplify every action, staying performant and easy for a team to iterate on.',
    media: [
      { type: 'gdrive', src: 'https://drive.google.com/file/d/1hHC6bvHYHPV1CZFyaQ7ytlXGNQ-AirDH/view?usp=drive_link', alt: 'Companion Form VFX — Showcase' },
      { type: 'gdrive', src: 'https://drive.google.com/file/d/1KRNPlFHRVQpOmCAnosO_CbHypjjUjigs/view?usp=drive_link', alt: 'Companion Form VFX — Showcase' }
    ],
    stack: ['Unity', 'C#', 'Shader Graph', 'Particles', 'Technical VFX', 'Gameplay Systems'],
    role: 'Technical VFX Artist • Gameplay Programmer',
    highlights: [
      'VFX that match each form’s theme and mechanics, using particles, shaders, and screen effects.',
      'A reusable state machine system that let us create multiple forms sharing core logic but feeling visually and mechanically distinct.',
      'Clear visual hierarchy so effects telegraph mechanics without drowning the screen.',
      'Stylized looks that hold up under real-time constraints—no frame drops allowed.'
    ],
    challenge:
      'How do you make effects punch hard without dumping a thousand particles? And build a multi-form AI companion where each form feels unique but shares a modular core, so the project doesn’t turn into visual spaghetti.',
    solution:
      'I used a composition-based approach: effects driven by gameplay parameters, layered with clear rules. Each companion form gets its own identity while the underlying tech stays lean.',
  }),

  createProject({
    id: 'shiro',
    title: 'Shiro - Enemies & AI Tool',
    subtitle: 'A 2D Combat Metroidvania with a Custom Node-Based AI Toolkit',
    category: 'Gameplay AI & Tool Development',
    description:
      'I built a visual, node-based AI system for enemy behaviors in a fast 2D combat metroidvania. The goal: let designers craft enemies quickly, debug them in real time, and keep performance tight—without sacrificing the snappy, readable combat the game demanded.',
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
      'A node-based AI tool designed from scratch, with a UX tuned for our rapid combat iteration loop.',
      'Behavior pipelines handling combat, movement, and encounter scripting—all configurable without touching code.',
      'Live AI debugging: peek inside the enemy’s “mind” in real time, right in the editor.',
      'Perception, memory, and decision-making broken into swappable modules.',
      'Designers iterated enemy logic entirely inside the tool—zero C# required.'
    ],
    challenge:
      'Hardcoded AI would’ve killed our speed. We needed enemies that felt smart and reactive, but designers had to be able to tweak and create new behaviors on the fly during production.',
    solution:
      'I built a custom AI framework with a node-based editor. Behaviors are composed from reusable modules, visualized at runtime, and executed in a modular stack. New enemy types went from days to hours, and combat stayed tight.',
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
      'I built a hazard framework that let level designers drop obstacles into scenes without writing code. Alongside, I crafted the VFX—stylized, readable, and optimized—using particles, shaders, and screen distortion to sell the danger.',
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
      'A single hazard architecture with shared behaviors and clean APIs—new hazards inherit common logic, no copy-paste.',
      'Level designers could assemble hazards like building blocks, zero code required.',
      'Spikes, saws, collapsing floors—several hazard types all running on the same unified system.',
      'VFX that clearly communicated danger zones and attack timing through particles and shaders.',
      'A camera-based distortion system for 2D screen effects that stayed smooth on target hardware.',
      'Balanced visual clarity and feedback across hazards with very different timing profiles.'
    ],
    challenge:
      'Hazards had to vary wildly—spikes that trigger on contact, saws that move on paths, collapsing platforms—but all of them had to share a single, designer-friendly framework.',
    solution:
      'I built a base hazard class with hooks for timing, activation, and visual feedback. Designers mixed and matched behaviors through a config system, and the VFX layer was light enough to apply everywhere without hurting performance.',
    links: { steam: 'https://store.steampowered.com/app/1589330/SHIRO/' }
  }),

  createProject({
    id: 'judgement-cut-vfx',
    title: 'Judgement Cut End — Area Slash VFX',
    subtitle: 'A Stylized Combat VFX Sequence',
    category: 'Combat VFX & Cinematic Timing',
    description:
      'An over-the-top slash attack inspired by DMC’s Judgement Cut End. I focused on building anticipation, then releasing it with precise timing—layered particles, procedural slash shapes, and smears that make the impact stick in your memory.',
    media: [
      { type: 'video', src: 'https://cdn.artstation.com/p/video_sources/002/407/511/slash-vfx.mp4' },
      { type: 'video', src: 'https://cdn.artstation.com/p/video_sources/002/407/683/combined-post-processing.mp4' },
      { type: 'image', src: 'https://cdnb.artstation.com/p/assets/covers/images/084/355/043/small_square/mayke-frankley-mayke-frankley-unity-vfx-slash.jpg?1738164897', alt: 'Judgement Cut End — Slash VFX' }
    ],
    stack: ['Unity', 'Particle Systems', 'Timeline', 'Shader Graph', 'Material Maker', 'Cascadeur', 'VFX Art'],
    role: 'Solo Technical VFX Artist / Programmer',
    highlights: [
      'Owned the entire sequence, from rough sketch to final polished effect.',
      'Procedural textures in Material Maker for slash trails and energy fragments—no static textures used.',
      'Custom shaders for impact freezes, screen distortion, and motion smearing.',
      'Character animation in Cascadeur, timed to sell the wind-up and the violent snap of the slash.',
      'Used Timeline to orchestrate camera shakes, hit pauses, and VFX beats into a rhythmic sequence.',
      'Shader and script combo for that anime-style impact frame: freeze, invert colors, shake.'
    ],
    challenge:
      'How to make a split-second slash feel earth-shattering but still readable? The effect had to hit hard without turning into visual noise.',
    solution:
      'I used animation-driven timing to build tension, then layered particles and shaders over a series of freeze frames. Even though it’s over in a blink, the player feels every cut.',
    links: { artstation: 'https://www.artstation.com/artwork/0leGnE' }
  }),

  createProject({
    id: 'smear-impact-tool',
    title: 'Smear & Impact Frames Tool',
    subtitle: 'Anime-Style Motion Amplification for Unity',
    category: 'Tooling & Visual Polish',
    description:
      'I made a tiny Unity tool that adds smears and impact frames with just a few clicks. No custom render pipelines needed—drop it in and instantly get that anime-style motion punch.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/MfKs7Bsjf58', alt: 'Smear & Impact Frames Tool — Showcase' }
    ],
    stack: ['Unity', 'C#', 'Shader Graph', 'Animation', 'Custom Editor Tooling', 'VFX'],
    role: 'Solo Tool Developer / Technical VFX',
    highlights: [
      'A clean workflow to apply smears to movement, attacks—anything that moves fast.',
      'Impact frames with that anime freeze + inversion, making big attacks feel devastating.',
      'Dead-simple integration: add a component, tweak a few settings, and it just works.',
      'Flexible controls that work for everything from a stylized brawler to a snappy platformer.',
      'Tune smears and freeze timings in play mode and see the results instantly.'
    ],
    challenge:
      'I wanted to create that flashy anime motion blur without forcing devs to learn shader programming or build custom VFX systems.',
    solution:
      'The tool automates smear generation and impact frame timing, all exposed through inspector controls. It fits into any project and dramatically cuts down the time to make actions feel weighty.',
    links: { 'Asset Store Soon': 'https://assetstore.unity.com/'}
  }),

  createProject({
    id: 'shiro-bad-touch-vfx',
    title: 'Bad Touch Respawn VFX',
    subtitle: 'Technical VFX · Shiro',
    category: 'Technical VFX',
    description:
      'A sci-fi inspired respawn and despawn effect created for Shiro. The effect dissolves the player sprite into particles using a hybrid workflow between Unity Particle System and VFX Graph.',

    role: 'Designed and implemented the full VFX pipeline, including sprite sampling, particle spawning behavior, dissolve logic, timing, and gameplay integration.',
    stack: ['Unity', 'VFX Graph', 'Shader Graph', 'Particle System', 'URP', 'C#'],
    highlights: [
      'Sprite-to-particle dissolve using the current rendered character frame',
      'Hybrid workflow combining Particle System and GPU VFX Graph',
      'Gameplay-integrated death and respawn transition effect',
      'Custom dissolve timing and particle emission control',
      'Sci-fi visual direction matching Shiro art style',
      'Built for real-time gameplay responsiveness'
    ],
    challenge:
      'Create a death and respawn effect that felt impactful and readable while keeping the game visual identity.',
    solution:
      'Used VFX Graph to sample the active Shiro sprite and dissolve it into GPU particles while combining layered particle effects for energy bursts, distortion, and respawn feedback. The final effect kept gameplay readability while giving the mechanic a stronger visual identity.',
    links: {},
    media: [
      { type: 'gdrive', src: 'https://drive.google.com/file/d/1ANJNui-9rOfduM7OmItdKVy06N2nUooJ/view?usp=drive_link' }
    ],
    section: 'showcase'
  }),

  createProject({
    id: 'shiro-water-rendering',
    title: 'Interactive Water Rendering',
    subtitle: 'Stylized 2D Water Shader for SHIRO',
    category: 'VFX & Technical Art',
    description:
      'A stylized interactive water solution created for SHIRO that matched the game’s visual language while remaining lightweight for gameplay usage. Designed to react to player movement and environmental interaction to make levels feel more alive.',
    media: [
      { type: 'gdrive', src: 'https://drive.google.com/file/d/1tI2idxfFeUlqExMpPNWKFsvHa_jcvf6h/view?usp=drive_link' }
    ],
    stack: ['Unity', 'Shader Graph', 'URP', 'Particles', 'Technical Art', '2D Rendering'],
    role: 'Technical VFX Artist / Gameplay Programmer',
    highlights: [
      'Built a stylized water shader designed to blend naturally with SHIRO’s hand drawn visual style',
      'Added interactive surface motion driven by player and gameplay interaction',
      'Combined shader animation and secondary particle effects to improve readability and motion',
      'Designed the effect to remain lightweight and scalable for multiple level scenarios'
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
      'A high-speed dash effect created using a hybrid workflow combining Unity Particle Systems and VFX Graph. The effect focuses on readability, impact framing, directional motion, and layered energy trails while remaining lightweight enough for gameplay-heavy combat scenarios.',

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
      'Combined VFX Graph volumetric particles with traditional Particle Systems for tighter gameplay timing',
      'Built directional energy trails synchronized with dash velocity and animation timing',
      'Layered additive distortion, glow streaks, and impact particles for stronger readability',
      'Used shader-driven UV distortion and dissolve masks to reinforce movement speed',
      'Optimized particle counts and spawn timing for combat-heavy gameplay scenarios',
      'Designed to preserve player silhouette readability during fast movement'
    ],

    challenge:
      'The main challenge was balancing visual intensity with gameplay readability. The dash needed to feel fast and aggressive without obscuring enemy attacks, player positioning, or combat clarity without relying on simple after images.',

    solution:
      'I used an approach that mixed VFX graph for the shape particles based on the character pixel and traditional particle systems for the directional trails and impact effects. Custom shaders added distortion and glow without overwhelming the player’s view during combat.',

    media: [
      {
        type: 'gdrive',
        src: 'https://drive.google.com/file/d/1dYoyHyfYuHJMC7htKyxUiodWZ9OCdCGG/view?usp=drive_link'
      },
    ]
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
      'I challenged myself to build a full Android game loop from scratch in minimal time. The result is a fast arcade experience with escalating enemies, weapon pickups, and decision-making that fits a mobile session.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/JRkccHQgHBY' },
      { type: 'image', src: 'https://maykerstudio.github.io/Portfolio/assets/img/portfolio/details/project-b-2.png' }
    ],
    stack: ['Unity', 'C#', 'Android', 'Gameplay Systems', 'Rapid Prototyping', 'UI', 'Enemy Behaviors'],
    role: 'Solo Gameplay Programmer',
    highlights: [
      'Had a playable build running on my phone in a short cycle—concept to validation.',
      'Survival loop where you defend a core objective against waves that get progressively nastier.',
      'Weapon pickups that temporarily change your combat style, forcing quick tactical decisions.',
      'Enemies that behave differently: some rush the core, others hunt you.',
      'Architecture left room for more enemy types, bosses, and level variations.'
    ],
    challenge:
      'I wanted to prove that a satisfying mobile arcade experience could be built fast, without cutting corners on gameplay depth.',
    solution:
      'I zeroed in on a vertical slice with a tight core loop, reusable systems, and just enough enemy variety to keep you thinking. The simplicity kept the codebase lean and the fun factor high.',
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
      'My first real Unity project, built while I was making the jump from general programming into games. I wanted to get a handle on responsive combat, streaming large worlds, and managing huge animation sets inside a Metroidvania framework.',
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/m7DtAvukxzQ' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/f9hYA0epIOI' },
      { type: 'image', src: 'assets/img/portfolio/details/project-a-1.png', alt: '2D Metroidvania Prototype' }
    ],
    stack: ['Unity', 'C#', 'Gameplay Programming', 'Animation Systems', 'Level Streaming', 'Blender', 'Photoshop'],
    role: 'Solo Developer',
    highlights: [
      'A scalable animation system for large sprite sheets—one of my earliest attempts at keeping animation pipelines manageable.',
      'Chainable attack combos with smooth transition logic, built to stay responsive at high speed.',
      'A dynamic level loader that streamed areas in and out, giving the illusion of an open world without load screens.',
      'Hand-animated characters in Blender, exported as sprite sheets and integrated directly into Unity.',
      'Created environment art and composed scenes in Photoshop to establish the game’s atmosphere.'
    ],
    challenge:
      'I was learning Unity on the fly, adapting my programming background to game dev. The real challenge was keeping systems flexible while figuring out how everything worked together.',
    solution:
      'I kept the code modular from day one—building a combat and animation foundation that wouldn’t break as I added more moves and areas. Instead of polishing content, I concentrated on architecture that could scale.',
    links: {},
    legacy: true,
    section: 'archive',
    legacyYear: '2020'
  })
];