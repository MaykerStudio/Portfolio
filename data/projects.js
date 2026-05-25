const SKILLS = {

  gameplay: {

    label: 'Gameplay',

    items: [

      {
        name: 'Combat',
        desc: 'Combat flow, hit detection, attack timing, impact feedback, and making interactions feel responsive.'
      },

      {
        name: 'Movement',
        desc: 'Character controllers, movement abilities, air control, and platforming tuned around game feel.'
      },

      {
        name: 'Gameplay Logic',
        desc: 'State-driven gameplay, reusable mechanics, and systems built to stay flexible during development.'
      },

      {
        name: 'Player Experience',
        desc: 'Input handling, responsiveness, iteration, and reducing friction between player intention and action.'
      }

    ]

  },

  ai: {

    label: 'AI & Behaviors',

    items: [

      {
        name: 'Enemy AI',
        desc: 'Enemy behaviors focused on readability, combat pacing, and creating interesting encounters.'
      },

      {
        name: 'AI Tools',
        desc: 'Node-based workflows and reusable systems to speed up enemy implementation and iteration.'
      },

      {
        name: 'Game Systems',
        desc: 'Modular gameplay systems designed to support growth without becoming difficult to maintain.'
      },

      {
        name: 'Debugging',
        desc: 'Runtime tools and visual debugging to inspect gameplay behavior and reduce iteration time.'
      }

    ]

  },

  tooling: {

    label: 'Tools',

    items: [

      {
        name: 'Unity Editor Tools',
        desc: 'Custom inspectors, workflow utilities, editor windows, and tools that reduce repetitive work.'
      },

      {
        name: 'Production Workflows',
        desc: 'Building pipelines that help teams move faster and iterate without breaking existing content.'
      },

      {
        name: 'Code Structure',
        desc: 'Keeping gameplay code readable, modular, and easy to extend over time.'
      }

    ]

  },

  technical_art: {

    label: 'Technical Art',

    items: [
      {
        name: 'Technical VFX',
        desc: 'Gameplay-driven effects built with shaders, particles, and procedural techniques.'
      },

      {
        name: 'Shaders',
        desc: 'Shader Graph workflows for gameplay feedback, stylized visuals, and interactive effects.'
      },

      {
        name: 'Optimization',
        desc: 'Profiling, reducing unnecessary overhead, and keeping visuals performant.'
      }
    ]
  }
};

window.PROJECTS = [
  {
    id: 'rat-trap',

    title: 'Rat Trap',

    subtitle: 'Hand-Drawn Character-Switching Metroidvania',

    category: 'Exploration / Gameplay Systems',

    description:
      'A hand-drawn 2D metroidvania built around exploration, character switching, and interconnected puzzle-solving. Designed to encourage experimentation through complementary character abilities and layered progression systems that reshape how players navigate and understand the world.',

    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/qYpyj4MyI8Q',
        alt: 'Rat Trap — Trailer'
      },
      {
        type: 'image',
        src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2723000/ss_ab03b1dce7b15c044a25b99ac61cd51dd90ad749.1920x1080.jpg?t=1770772434',
        alt: 'Rat Trap — Character'
      },
      {
        type: 'image',
        src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2723000/ss_28555b113f74a316925da1bad0adfe33088b22fa.1920x1080.jpg?t=1770772434',
        alt: 'Rat Trap — Character Switching'
      },
      {
        type: 'image',
        src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2723000/ss_532b0ceb52590ef05def77e2162ca2d8ea5eaeaa.1920x1080.jpg?t=1770772434',
        alt: 'Rat Trap — Puzzles'
      }
    ],

    stack: [
      'Unity',
      'C#',
      'Gameplay Architecture',
      'State Machines',
      'Puzzle Systems',
      'Custom Tooling'
    ],

    role:
      'Lead Programmer',

    highlights: [

      'Implemented seamless character switching with shared and character-specific gameplay states',

      'Built exploration systems supporting progression gating and interconnected world traversal',

      'Developed puzzle architecture designed for reusable interactions and systemic combinations',

      'Created modular gameplay systems to support rapid iteration and scalable content production',

      'Integrated designer-friendly workflows for tuning progression and encounter pacing'

    ],

    challenge:
      'Creating a character-switching system that remained intuitive for players while supporting exploration, puzzle design, and expanding gameplay interactions without creating tightly coupled systems.',

    solution:
      'Designed gameplay systems around modular state ownership and reusable interaction patterns, allowing each character to introduce unique mechanics while maintaining consistent controls, progression flow, and extensible puzzle authoring.',

    links: {
      steam: 'https://store.steampowered.com/app/2723000/RAT_TRAP/'
    }
  },
  {
    id: 'rat-trap-ui',

    title: 'Rat Trap — Menus & UX',

    subtitle: 'Menu Systems & Player Flow',

    category: 'UI Systems / Workflow',

    description:
      'Designed and implemented the menu and UI workflow systems for Rat Trap, focusing on clarity, responsiveness, and keeping player interactions fast and unobtrusive throughout exploration and gameplay.',

    media: [
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/3m1ZSweGH8k',
        alt: 'Rat Trap — Multitab Menu'
      },

      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/0oq6bbv5pY0',
        alt: 'Rat Trap — Progress Menu'
      },

      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/MNwkNvUK_EU',
        alt: 'Rat Trap — Progress Menu 2'
      },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/6wSiH8eMvAE',
        alt: 'Rat Trap — Pause Menu'
      },
      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/QnCRCNZvzBw',
        alt: 'Rat Trap — Shop Menu'
      }
    ],

    stack: [
      'Unity',
      'C#',
      'UI Systems',
      'UX Flow',
      'Animation',
      'Tooling'
    ],

    role:
      'Lead Programmer',

    highlights: [

      'Built reusable menu systems with consistent navigation behavior',

      'Designed UI flows to reduce friction between gameplay and player actions',

      'Implemented transitions and feedback focused on responsiveness and readability',

      'Structured menus to support future content expansion without redesign',

      'Integrated gameplay and UI states to keep interactions predictable'

    ],

    challenge:
      'Creating menu flows that supported a metroidvania structure without interrupting exploration or overwhelming the player with unnecessary complexity.',

    solution:
      'Built modular UI systems centered around reusable screens, predictable navigation rules, and lightweight transitions—allowing menus to remain easy to expand while preserving responsiveness and player focus.',

    links: {

    }
  },
  {
    id: 'shiro',

    title: 'Shiro',

    subtitle: '2D Combat Metroidvania & Custom AI Framework',

    category: 'Gameplay AI / Tooling',

    description:
      'Designed and developed a custom node-based 2D AI framework to drive enemy behaviors in a fast-paced combat metroidvania. Focused on rapid iteration, reusable behavior authoring, runtime debugging, and creating enemies that remain responsive, readable, and scalable throughout production.',

    media: [
      { type: 'youtube', src: "https://www.youtube.com/embed/W0GpsP0deC0?si=bGQoK19uU9NwFirx", alt: 'Shiro — Enemy AI Tool' },
      { type: 'youtube', src: "https://www.youtube.com/embed/vaWjq99quYM", alt: 'Shiro — AI Behaviors' },
      { type: 'youtube', src: "https://www.youtube.com/embed/rh-r-riVrok", alt: 'Shiro — AI Systems' },
      { type: 'youtube', src: "https://www.youtube.com/embed/-2hlO4NK7Mo", alt: 'Shiro — AI' },
      { type: 'youtube', src: "https://www.youtube.com/embed/zxLVGhI3vOI", alt: 'Shiro — AI Authoring' },
      { type: 'youtube', src: "https://www.youtube.com/embed/8Kfkm1Deu7Q", alt: 'Shiro — AI' }
    ],

    stack: [
      'Unity',
      'C#',
      '2D AI Tool',
      'Node-Based Systems',
      'Editor Tooling',
      'Gameplay Architecture'
    ],

    role:
      'Lead Gameplay Programmer & AI Tool Developer',

    highlights: [

      'Designed a custom node-based AI authoring tool tailored for fast enemy iteration',

      'Built reusable enemy behavior pipelines supporting combat, traversal, and encounter scripting',

      'Implemented runtime AI debugging and live behavior visualization',

      'Created modular perception, memory, and state-driven decision systems',

      'Enabled designers to iterate enemy logic without modifying gameplay code'

    ],

    challenge:
      'Building enemy AI for a fast-paced combat game while avoiding rigid hardcoded behavior and maintaining iteration speed during content production.',

    solution:
      'Developed an in-house 2D AI framework and editor workflow centered around reusable behavior composition, runtime visualization, and modular execution. This allowed enemy logic to evolve rapidly while preserving responsiveness, maintainability, and combat readability.',

    links: {
      steam: 'https://store.steampowered.com/app/1589330/SHIRO/?cc=eu',
      AI2DTool: 'https://assetstore.unity.com/packages/tools/behavior-ai/2d-ai-tool-pro-196102'
    }
  },
  {
    id: 'comp-form',

    title: 'Composition Form',

    subtitle: 'Reactive Gameplay VFX & Visual Mechanics',

    category: 'Technical VFX / Gameplay',

    description:
      'A technical VFX exploration focused on gameplay responsiveness, visual composition, and effect-driven mechanics. The project explored how timing, motion, and visual feedback can reinforce player actions while keeping effects lightweight and production-friendly.',

    media: [

      {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        alt: 'Composition Form — Showcase'
      },

      {
        type: 'image',
        src: 'assets/projects/comp-form/01.webp',
        alt: 'Composition Form — Effect Composition'
      },

      {
        type: 'image',
        src: 'assets/projects/comp-form/02.webp',
        alt: 'Composition Form — Gameplay Interaction'
      },

      {
        type: 'image',
        src: 'assets/projects/comp-form/03.webp',
        alt: 'Composition Form — VFX Breakdown'
      }

    ],

    stack: [
      'Unity',
      'C#',
      'Shader Graph',
      'Particles',
      'Technical VFX',
      'Gameplay Systems'
    ],

    role:
      'Technical VFX Artist • Gameplay Programmer',

    highlights: [

      'Created gameplay-reactive visual effects synchronized with player interactions',

      'Combined particle systems, shaders and scripted behaviors into reusable VFX modules',

      'Focused on readability and visual hierarchy to improve gameplay communication',

      'Designed effect workflows that supported fast tuning and iteration',

      'Balanced stylization and performance for real-time execution'

    ],

    challenge:
      'Creating visual mechanics that felt impactful and responsive without relying on excessive particles or heavy effect stacks that would reduce clarity and scalability.',

    solution:
      'Built modular effect behaviors driven through gameplay parameters and composition rules, allowing mechanics and visuals to evolve together while preserving readability and performance.',

    links: {
      demo:
        'https://maykerstudio.github.io/Portfolio/Comp-Form-VFX-Mechanics.html'
    }
  }
];
