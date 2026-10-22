// K.A.L.K.I Defence Systems Configuration & Verified Fact-Checked Content

export const COMPANY_INFO = {
  legalName: 'K.A.L.K.I DEFENCE SYSTEMS',
  shortName: 'KALKI Defence Systems',
  cin: 'U72100PN2026PTC260421',
  incorporation: 'Incorporated under the Companies Act, 2013 (18 of 2013)',
  tagline: 'Indigenous Engineering. Intelligent Systems. A Safer Sky.',
  incubator: 'V-NEST, VIT Chennai',
  primaryFocus: 'Autonomous Counter-Drone (C-UAS) & Aerial Defence Swarms',
}

export const CONTACT_EMAIL = 'kalkidefencesystems@gmail.com'
export const DIRECT_PHONES = [
  { display: '+91 75584 95105', tel: '+917558495105', label: 'Operations & Briefings' },
  { display: '+91 63942 09020', tel: '+916394209020', label: 'Technical Systems' },
  { display: '+91 87974 76933', tel: '+918797476933', label: 'Tactical Deployments' },
]

export const HERO_VIDEO = '/loading.mp4'
export const HERO_POSTER = ''

export const NAV = [
  { label: 'C-UAS System', href: '#system' },
  { label: 'Differentiators', href: '#differentiators' },
  { label: 'Mission', href: '#mission' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

// Leadership & Founding Engineering Team
export const TEAM_MEMBERS = [
  {
    name: 'Omkar Abhijit Jagtap',
    mobile: '+91 75584 95105',
    tel: '+917558495105',
    role: 'Co-Founder & System Architect',
  },
  {
    name: 'Naitik Agrawal',
    mobile: '+91 88392 15503',
    tel: '+918839215503',
    role: 'Co-Founder & Hardware Engineering',
  },
  {
    name: 'Sai Amol Kadam',
    mobile: '+91 91727 53456',
    tel: '+919172753456',
    role: 'Co-Founder & Edge AI / Vision',
  },
  {
    name: 'Shailesh Chauhan',
    mobile: '+91 87974 76933',
    tel: '+918797476933',
    role: 'Co-Founder & Swarm Algorithms',
  },
  {
    name: 'Anurag Raghuvanshi',
    mobile: '+91 63942 09020',
    tel: '+916394209020',
    role: 'Co-Founder & Avionics Integration',
  },
  {
    name: 'Govind Yadav',
    mobile: '+91 90243 68874',
    tel: '+919024368874',
    role: 'Co-Founder & Flight Dynamics',
  },
]

// Flagship System: Autonomous Counter-UAS Aerial Defence Swarm
export const PRODUCT = {
  code: 'K.A.L.K.I C-UAS',
  title: 'Autonomous Counter-Drone Aerial Swarm Platform',
  tagline: "India's Indigenous Lowest-Cost-Per-Kill Air Defence Solution",
  status: 'ACTIVE DEVELOPMENT // AUTONOMOUS SWARM TESTBED VALIDATION',
  description:
    'A scalable, low-cost autonomous aerial defense platform engineered to counter rapid drone warfare and saturation threats. Operating collaboratively at low-to-medium altitudes, KALKI C-UAS combines onboard Edge-AI vision, dynamic swarm task allocation, and automated air defence command integration to detect, track, and neutralize hostile drone swarms at a fraction of legacy missile interceptor costs.',
  metrics: [
    { value: 'LOWEST COST', label: 'Cost Per Kill', detail: 'Versus $500K–$2M traditional SAM interceptors' },
    { value: 'MULTI-AGENT', label: 'Autonomous Swarm', detail: 'Decentralized peer-to-peer threat coordination' },
    { value: 'EDGE-AI', label: 'Onboard Neural Compute', detail: 'Vision-based target tracking without cloud latency' },
    { value: '100% INDIGENOUS', label: 'Make In India', detail: 'Incubated at V-NEST VIT Chennai (CIN: U72100PN2026PTC260421)' },
  ],
  subsystems: [
    {
      id: '01',
      title: 'Dynamic Swarm Task Allocation Engine',
      subtitle: 'Multi-Agent Threat Coordination',
      desc: 'Solves optimal assignment between defensive UAVs and incoming drone threats in real time. Uses a multi-variable evaluation function (Distance + Battery + Estimated Mission Time + Target Priority) to ensure minimum global interception latency and zero redundant sorties.',
      specs: [
        { key: 'Architecture', val: 'Distributed Swarm Allocation' },
        { key: 'Optimization Metric', val: 'Multi-Factor Cost Matrix' },
        { key: 'Reallocation', val: 'Dynamic Real-Time Closed Loop' },
      ],
    },
    {
      id: '02',
      title: 'Automated Air Defence C2 Integration',
      subtitle: 'Integrated Command & Control Interoperability',
      desc: 'Seamlessly interfaces with national air defence command networks and ground radar stations. Receives cueing telemetry on low-to-medium altitude airspace tracks and synchronizes defensive swarm launch formations to deliver layered sovereign airspace protection.',
      specs: [
        { key: 'C2 Network', val: 'Integrated Defence Interoperable' },
        { key: 'Airspace Tier', val: 'Low-to-Medium Altitude Coverage' },
        { key: 'Threat Vector', val: 'Hostile Recon & Kamikaze Drones' },
      ],
    },
    {
      id: '03',
      title: 'Onboard Edge AI Vision & Optical Tracking',
      subtitle: 'Distortion-Free High-Resolution Seeker',
      desc: 'Runs computer vision neural inference directly on the drone using an onboard edge compute module paired with the Sony IMX415 8MP high-resolution camera. Eliminates cloud and ground-station reliance, performing instantaneous target classification and terminal tracking even under full RF jamming.',
      specs: [
        { key: 'Compute Module', val: 'Onboard Edge-AI SBC' },
        { key: 'Sensor', val: 'Waveshare IMX415 8MP Sony Sensor' },
        { key: 'Operation', val: '100% Autonomous in Contested EW' },
      ],
    },
    {
      id: '04',
      title: 'Hybrid AI + Kinetic Interception Dynamics',
      subtitle: 'Agile High-Speed Counter-UAS Interceptor',
      desc: 'Powered by 4x Emax ECOII-2807-1300KV brushless motors, 60A BLHeli_S ESC, and 22.2V 6S 4200mAh LiPo battery pack mounted on a reinforced 7-inch carbon fiber airframe. Delivers explosive acceleration and high-G terminal interception authority to physically neutralize incoming threats.',
      specs: [
        { key: 'Flight Control', val: 'Holybro Kakute H7 V1.3' },
        { key: 'Airframe', val: '7-inch High-Modulus Carbon Fiber' },
        { key: 'Power Subsystem', val: '6S 22.2V 4200mAh 35C LiPo' },
      ],
    },
  ],
}

// 6 Core Differentiators
export const KEY_DIFFERENTIATORS = [
  {
    id: '01',
    title: 'Edge AI for Real-Time Response',
    body: 'Onboard neural processing runs vision-based detection and tracking without latency or cloud vulnerability in heavy electronic warfare.',
  },
  {
    id: '02',
    title: 'Decentralized Swarm Coordination',
    body: 'Autonomous peer-to-peer mesh protocols enable collective target distribution and swarm tracking without reliance on ground links.',
  },
  {
    id: '03',
    title: 'Hybrid AI + Kinetic Interception',
    body: 'Combines algorithmic target acquisition with high-speed physical kinetic interception to defeat incoming drone waves reliably.',
  },
  {
    id: '04',
    title: 'Modular & Scalable Deployment',
    body: 'Architecture scales rapidly from localized tactical perimeter cells to mass area defensive formations across strategic assets.',
  },
  {
    id: '05',
    title: 'Cost-Effective Indigenous Solution',
    body: 'Reverses modern warfare economics by achieving the lowest cost per kill with 100% sovereign Indian hardware and software stacks.',
  },
  {
    id: '06',
    title: 'Hardware + SaaS Model',
    body: 'Dual commercial model combining high-reliability interceptor hardware with recurring autonomous swarm orchestration software licenses.',
  },
]

// Ecosystem Collaborators & Institutional Links
export const PARTNERS = [
  { name: 'V-NEST VIT Chennai', category: 'Technology Business Incubator' },
  { name: 'Make In India / iDEX Focus', category: 'Defence Indigenisation' },
  { name: 'Ministry of Defence (MoD)', category: 'Target Procurement Mandate' },
  { name: 'Critical Infrastructure Security', category: 'Perimeter C-UAS Protection' },
  { name: 'Atmanirbhar Bharat', category: 'Sovereign Defence Technology' },
]

// Strategic Vision
export const VISION = [
  {
    title: 'Sovereign Airspace Deterrence',
    body: 'Engineering 100% indigenous Counter-UAS platforms to protect national skies and high-value strategic assets without dependency on foreign supply chains.',
  },
  {
    title: 'Inverting Modern Warfare Economics',
    body: 'Neutralizing hostile drone saturation at a fraction of legacy missile costs, delivering the lowest cost per kill through autonomous defensive swarms.',
  },
  {
    title: 'Integrated Air Defence Grid',
    body: 'Directly bridging autonomous edge robotics with national automated air defence infrastructure through native C2 interoperability.',
  },
]
