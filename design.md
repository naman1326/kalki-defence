# Design System Specification: Kshatra Labs (`design.md`)

> **Website Reference**: [https://www.kshatralabs.in](https://www.kshatralabs.in)  
> **Ecosystem**: AI-Native Autonomous Defence Systems & Kinetic Interception  
> **Primary Platform Product**: HAWK 3-in-1 Autonomous Aerial Interceptor, APEX Autonomy Stack, Hawkeye Tracking  
> **Design Philosophy**: Mission-Critical Military Grade, Cybernetic Tactical Dark Mode, Aerospace Telemetry & HUD

---

## 1. Brand Identity & Design Philosophy

### 1.1 Brand Purpose & Mission
Kshatra Labs engineers AI-native robotic systems for national security. The brand voice represents machine-speed precision, operational sovereignty ("Built in Bharat"), and high-stakes deterrence. The interface embodies a tactical operational terminal rather than a conventional commercial website.

### 1.2 Core Visual Pillars
- **Tactical Dark Void**: The visual universe is rooted in pitch black (`#000000`) and deep defense shades (`#030303`, `#050505`), evoking nighttime military operations, aerospace radar environments, and edge computing enclosures.
- **Precision Telemetry & HUD Geometry**: Crosshair reticles, micro-coordinate readouts, technical step indexing (`[01]`, `[02]`), and angular polygon chamfers establish an authentic defense-tech instrument feel.
- **Controlled High-Stakes Accents**: High-visibility kinetic crimson (`#FF0000` / `#CC1414`) serves as the alert and active interception color, contrasted by cybernetic tactical blue (`#2563EB` / `#2F7CFF`) representing onboard AI, and emerald green (`#10B981`) denoting operational status and sensor readiness.
- **Architectural Typography**: Aggressive, geometric uppercase display typography (`Space Grotesk`) paired with razor-sharp monospace telemetry (`Rajdhani` / `Space Mono`) and high-legibility sans-serif copy (`Inter` / `Barlow`).

---

## 2. Color System & Design Tokens

### 2.1 Complete Palette Matrix

| Token Name | Hex Code | RGB / HSL | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--bg-void` | `#000000` | `rgb(0, 0, 0)` | Primary canvas, base background |
| `--bg-defense-dark` | `#030303` | `rgb(3, 3, 3)` | Secondary canvas, product hero sections |
| `--bg-surface-elevated`| `#050505` | `rgb(5, 5, 5)` | Container & section alternating fills |
| `--bg-panel` | `#0C0C0D` | `rgb(12, 12, 13)` | Card surfaces, hardware assembly blocks |
| `--bg-panel-subtle` | `rgba(255, 255, 255, 0.03)` | — | Hover state card backgrounds |
| `--bg-glass` | `rgba(255, 255, 255, 0.05)` | — | Glassmorphic 3D drone frames with `backdrop-blur-xl` |
| `--accent-red` | `#FF0000` | `rgb(255, 0, 0)` | Kinetic threat, interception highlight, hover accent |
| `--accent-red-dim` | `#CC1414` | `rgb(204, 20, 20)` | Primary tactical action buttons, alert badges |
| `--accent-red-bright` | `#FF4D4D` | `rgb(255, 77, 77)` | Small monospace alert text, subtitle tags |
| `--accent-red-glow` | `rgba(255, 0, 0, 0.5)` | — | Drop shadows on interactive and key product images |
| `--accent-blue` | `#2563EB` | `rgb(37, 99, 235)` | Brand logo hover, primary links, APEX autonomy accent |
| `--accent-blue-hud` | `#2F7CFF` | `rgb(47, 124, 255)` | Telemetry status pips, loading progress bar glow |
| `--accent-green` | `#10B981` | `rgb(16, 185, 129)` | Operational status, approach highlight, vision indicator |
| `--text-primary` | `#FFFFFF` | `rgb(255, 255, 255)` | High-contrast headings, main titles |
| `--text-heading-dim` | `rgba(255, 255, 255, 0.55)` | — | Sub-clauses in hero display headings |
| `--text-secondary` | `#E5E7EB` | `rgb(229, 231, 235)` | Primary body prose, mission statements |
| `--text-muted` | `#9CA0A8` | `rgb(156, 160, 168)` | Descriptive paragraphs, footer secondary copy |
| `--text-technical` | `#7AA096` | `rgb(122, 160, 150)` | Footer category headers, technical subtitles |
| `--border-subtle` | `rgba(255, 255, 255, 0.06)` | — | Section divider lines, ticker borders |
| `--border-default` | `rgba(255, 255, 255, 0.14)` | — | Standard card borders, grid wireframes |
| `--border-medium` | `rgba(255, 255, 255, 0.20)` | — | Interactive card edges, inputs, tabs |
| `--border-active` | `#FF0000` | — | Hover/focus borders on tactical cards and controls |

### 2.2 CSS Variables Declaration
```css
:root {
  /* Surface & Canvas */
  --color-bg-void: #000000;
  --color-bg-defense: #030303;
  --color-bg-surface: #050505;
  --color-bg-panel: #0c0c0d;
  --color-bg-glass: rgba(255, 255, 255, 0.05);

  /* Primary Alert & Kinetic Accents */
  --color-accent-red: #ff0000;
  --color-accent-red-dim: #cc1414;
  --color-accent-red-bright: #ff4d4d;
  --color-accent-red-glow: rgba(255, 0, 0, 0.4);

  /* Secondary Cyber & AI Accents */
  --color-accent-blue: #2563eb;
  --color-accent-blue-hud: #2f7cff;
  --color-accent-emerald: #10b981;

  /* Typography & Foreground */
  --color-text-primary: #ffffff;
  --color-text-heading-dim: rgba(255, 255, 255, 0.55);
  --color-text-secondary: #e5e7eb;
  --color-text-muted: #9ca0a8;
  --color-text-technical: #7aa096;

  /* Grid & Borders */
  --color-border-subtle: rgba(255, 255, 255, 0.06);
  --color-border-default: rgba(255, 255, 255, 0.14);
  --color-border-medium: rgba(255, 255, 255, 0.20);
  --color-border-tactical: #ff0000;

  /* Typography Stacks */
  --font-display: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  --font-hud: 'Rajdhani', 'JetBrains Mono', 'Space Mono', monospace;
  --font-body: 'Inter', 'Barlow', system-ui, sans-serif;

  /* Layout Boundaries */
  --container-max-width: 1400px;
  --container-narrow-width: 1280px;
}
```

---

## 3. Typography Architecture

### 3.1 Font Family Hierarchy
1. **Display & Headings (`--font-display`)**:  
   - Font: `Space Grotesk` (Google Fonts).
   - Usage: H1, H2, H3, large hero titles, section headlines.
   - Styling: Bold (`700`), ExtraBold (`800`), uppercase, tightly tracked (`letter-spacing: -0.02em` to `0.02em`), compact line-heights (`0.9` to `1.05`).
2. **Telemetry, HUD & Micro-data (`--font-hud`)**:  
   - Font: `Rajdhani` / `JetBrains Mono` / `Space Mono`.
   - Usage: Badges, step counters (`[01]`), specification labels, button text, ticker items, coordinates, speeds.
   - Styling: Monospace/technical proportions, uppercase, wide letter tracking (`0.15em` to `0.4em`), semi-bold (`600`) to bold (`700`).
3. **Body & Reading (`--font-body`)**:  
   - Font: `Inter` / `Barlow`.
   - Usage: Mission paragraphs, product descriptions, feature bullets, legal copy.
   - Styling: High contrast readability on pure black, light (`300`) to regular (`400`) weights, relaxed line height (`1.6` to `1.75`).

### 3.2 Typography Scale & Style Rules

```markdown
| Level | Font Family | Size (Desktop / Mobile) | Weight | Tracking | Line Height | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | Space Grotesk | `102px` / `51px` | `800` | `-0.02em` | `0.9` | UPPERCASE |
| **Section Header (H2)** | Space Grotesk | `51px` / `32px` | `700` | `-0.01em` | `1.05` | UPPERCASE |
| **Subsystem Title (H3)**| Space Grotesk | `38px` / `26px` | `600` | `0.00em` | `1.15` | UPPERCASE |
| **Card / Feature Title**| Space Mono / Rajdhani| `17px` / `16px` | `700` | `0.05em` | `1.25` | UPPERCASE |
| **Lead Paragraph** | Inter / Barlow | `21px` / `17px` | `300` | `0` | `1.65` | Sentence |
| **Body Paragraph** | Inter / Barlow | `15px` / `14px` | `400` | `0` | `1.6` | Sentence |
| **Telemetry Tag / Badge**| Rajdhani / Space Mono| `13px` / `11px` | `700` | `0.25em` | `1.0` | UPPERCASE |
| **Timestamp / Micro HUD**| Rajdhani / Space Mono| `10px` / `9px` | `700` | `0.30em` | `1.0` | UPPERCASE |
```

---

## 4. Geometry, Reticles & Military HUD Patterns

### 4.1 Tactical Chamfered Polygon Corners
Buttons and strategic callout panels reject conventional rounded corners in favor of 45-degree chamfers (cut corners):

- **Double-Chamfer Polygon (Buttons & CTAs)**:
  ```css
  /* Top-left and bottom-right 14px chamfers */
  clip-path: polygon(
    14px 0, 
    100% 0, 
    100% calc(100% - 14px), 
    calc(100% - 14px) 100%, 
    0 100%, 
    0 14px
  );
  ```

- **Top-Right Single Chamfer (Action Badges & Footer CTAs)**:
  ```css
  /* Top-right 16px chamfer */
  clip-path: polygon(
    0 0, 
    calc(100% - 16px) 0, 
    100% 16px, 
    100% 100%, 
    0 100%
  );
  ```

### 4.2 Corner Bracket Reticles
Feature cards and sensor inspection panels feature 4-corner targeting brackets:
```css
/* Card Container */
.tactical-card {
  position: relative;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 28px;
}

/* 4-Corner Reticles */
.tactical-card::before,
.tactical-card::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  pointer-events: none;
  transition: border-color 0.2s ease;
}

/* Top-Left / Top-Right */
.tactical-card::before {
  top: 0;
  left: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.4);
  border-left: 2px solid rgba(255, 255, 255, 0.4);
}
.tactical-card:hover::before {
  border-color: #ff0000;
}

/* Top Accent Slide Line */
.tactical-card .accent-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #ff0000;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.tactical-card:hover .accent-slide {
  transform: scaleX(1);
}
```

### 4.3 Background Grids & Vignette Masks
- **40px / 64px Wireframe Grid**:
  ```css
  .bg-tactical-grid {
    background-image: 
      linear-gradient(to right, #1f1f1f 1px, transparent 1px),
      linear-gradient(to bottom, #1f1f1f 1px, transparent 1px);
    background-size: 4rem 4rem;
    mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%);
  }
  ```

---

## 5. Motion Language & Micro-Interactions

### 5.1 Honeycomb Preloader Animation
Kshatra Labs features a 37-cell hexagonal socket loader with a pulse cycle and telemetry progress percentage:
- **Geometry**: Honeycomb hex-cluster with center gel and surrounding concentric rings.
- **Loader Bar**: 2px slim bar with glowing head (`shadow: 0 0 15px rgba(59, 130, 246, 0.5)`).
- **Data Track**: Monospace uppercase readout: `LOADING... 0%` -> `LOADING... 100%`.

### 5.2 Infinite Partner Marquee (Ticker)
```css
.partners-track-wrapper {
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
}

.partners-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: partners-ticker 30s linear infinite;
}

.partners-track-wrapper:hover .partners-track {
  animation-play-state: paused;
}

@keyframes partners-ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

### 5.3 Radar Sweep Canvas Component
- **Mode**: Canvas-rendered rotating HUD beam with fading phosphorus tail.
- **Elements**: Concentric 1km/2km range rings, compass bearing hashes, blip acquisition markers with fading decay.

---

## 6. Component Specifications

### 6.1 Header / Navbar
- **Height**: `80px` - `96px` floating desktop navbar.
- **Background**: Transparent at top; transitions to `rgba(0, 0, 0, 0.92)` with `backdrop-filter: blur(8px)` and `border-bottom: 1px solid rgba(255, 255, 255, 0.1)` on scroll.
- **Logo**: Masked vector SVG (`mask-image: url(/logo.svg)`), color transitions from pure white `#FFFFFF` to blue `#2563EB` on hover.
- **Links**: Monospace uppercase, `14px`, tracking `0.15em`, with interactive '+' indicators on sub-menus.
- **Mobile Menu**: Fullscreen slide-over drawer in `#000000`, bordered links, rapid response.

### 6.2 Hero Section
- **Media**: Background video (`/video/intercept.mp4`) looping silently under a multi-stop vignette gradient (radial + linear gradient to black).
- **Typography**: H1 with split color: "Modern warfare demands systems that are" (White) + "truly autonomous." (White with 55% opacity).
- **CTA**: High-contrast chamfered white button `REQUEST A BRIEFING` with right arrow icon.
- **Badges**: Inline telemetry indicators with glowing blue dots (`Built in Bharat`, `Advanced Autonomy`).

### 6.3 HAWK Showcase (Hardware Breakdown & Specs)
- **Airframe 3D Pod**: Rounded-3xl dark container with `rgba(255, 255, 255, 0.05)`, `backdrop-blur-xl`, border `rgba(255, 255, 255, 0.10)`, and dramatic red under-glow `shadow-[0_40px_100px_-30px_rgba(255,0,0,0.5)]`.
- **Target Lock HUD**: Target acquisition crosshair overlay (`realcross.png`) centered on the vehicle.
- **Metric Row (4-Up Display)**:
  - `300 km/h` — Top Speed
  - `3-in-1` — Interceptor / Kamikaze / Anti-Interceptor
  - `1/10th` — Cost of Traditional Missile Defense
  - `100%` — Built in India
- **Interactive Subsystem Accordion**:
  - `01. Sensor Suite`: Daylight camera fused with thermal imager (EO/IR), multi-spectral day/night tracking, radar cueing.
  - `02. Guidance Computer`: Fully onboard edge AI compute, autonomous neural trajectory solver.
  - `03. Airframe & Variants`: Carbon-composite high-G airframe, modular payload bays.
  - `04. Electric Propulsion`: High-RPM brushless electric propulsion for rapid interception burst.

### 6.4 Features Grid (6-Up Tactical Matrix)
Each card contains:
- Bracket reticle corners (`border-t-2`, `border-l-2`, etc.).
- Monospace index header (`[01]` through `[06]`).
- Title in uppercase technical font.
- Descriptive copy in light neutral text.
- 01: High-Speed Interception (300 km/h engage envelope).
- 02: Autonomous Target Lock (Machine-speed vision lock).
- 03: Fully Onboard Edge AI (No cloud latency / no link dependency).
- 04: GPS-Denied Navigation (Ground radar + inertial fusion).
- 05: Built for Drone Swarms (Multi-node swarm neutralization).
- 06: Low-Cost Scalable Defence (Asymmetric cost curve).

### 6.5 Partner Roster
Logos displayed in high-contrast inverted white containers:
- NVIDIA
- IIT Hyderabad
- GUSEC (Gujarat University Startup and Entrepreneurship Council)
- iTIC Incubator — IIT Hyderabad
- Startup India Seed Fund (DPIIT)
- Mach33 Aero
- Social Alpha
- Finvolve
- India Accelerator

### 6.6 Footer Architecture
- **Top Bar**: Massive statement: "Engineering Autonomous Defence Platforms." with `#2563EB` highlight.
- **Action**: Chamfered button "Reach out to us".
- **Navigation Columns**: Products (Hawk Interceptor, APEX Autonomy, Hawkeye Tracking), Company (About Us, Team, Contact Us), Resources (Careers, Terms of Service, Privacy Policy).
- **Headquarters Details**: Bangalore, India | Phone: `+91 97304 58528` | Email: `contact@kshatralabs.in`.

---

## 7. StitchMCP Design System Configuration

To programmatically generate or update screens using the StitchMCP server (`create_design_system` or `update_design_system`), use the following schema payload:

```json
{
  "displayName": "Kshatra Labs Tactical Autonomy",
  "theme": {
    "colorMode": "DARK",
    "headlineFont": "SPACE_GROTESK",
    "bodyFont": "INTER",
    "labelFont": "SPACE_MONO",
    "roundness": "ROUND_FOUR",
    "customColor": "#FF0000",
    "overridePrimaryColor": "#FF0000",
    "overrideSecondaryColor": "#2563EB",
    "overrideTertiaryColor": "#10B981",
    "overrideNeutralColor": "#000000",
    "colorVariant": "FIDELITY"
  }
}
```

---

## 8. Tailwind CSS Configuration Guide

For immediate use in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'defense-void': '#000000',
        'defense-dark': '#030303',
        'defense-surface': '#050505',
        'defense-panel': '#0C0C0D',
        'defense-red': {
          DEFAULT: '#FF0000',
          dim: '#CC1414',
          bright: '#FF4D4D',
        },
        'defense-blue': {
          DEFAULT: '#2563EB',
          hud: '#2F7CFF',
        },
        'defense-emerald': '#10B981',
        'defense-steel': '#9CA0A8',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        hud: ['"Rajdhani"', '"Space Mono"', 'monospace'],
        sans: ['"Inter"', '"Barlow"', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(255, 0, 0, 0.4)',
        'glow-blue': '0 0 20px rgba(47, 124, 255, 0.4)',
        'drone-red': '0 40px 100px -30px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
```

---

## 9. Implementation Checklist & Verification Matrix

- [x] Full palette extraction (Void black, defense crimson, cyber blue, telemetry steel).
- [x] Typography hierarchy mapped (`Space Grotesk`, `Rajdhani`/`Space Mono`, `Inter`/`Barlow`).
- [x] Mathematical polygon `clip-path` specifications documented for all button types.
- [x] Card bracket reticles and hover line transitions specified.
- [x] Complete hardware breakdown and interactive assembly spec documented.
- [x] Ticker marquee animation rules and timing captured.
- [x] StitchMCP JSON config format mapped for design tool integration.
- [x] Tailwind CSS extension object generated.
