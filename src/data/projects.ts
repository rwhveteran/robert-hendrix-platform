export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  status: 'live' | 'development' | 'research'
  category: 'behavioral' | 'veteran' | 'community' | 'recovery'
}

export const projects: Project[] = [
  {
    id: 'adhd-engine',
    title: 'ADHD Behavioral Cognitive Engine',
    description: 'Executive function, behavioral intelligence, attention drift tracking, momentum analysis, longitudinal behavioral pattern systems.',
    tags: ['Behavioral AI', 'Executive Function', 'Tracking'],
    status: 'live',
    category: 'behavioral',
  },
  {
    id: 'vetdirect',
    title: 'VETDirect — From Homeless to Home Base',
    description: 'Veteran housing stabilization, recovery systems, HUD-VASH support, crisis navigation, operational intelligence.',
    tags: ['Veterans', 'Housing', 'Crisis Support'],
    status: 'live',
    category: 'veteran',
  },
  {
    id: 'vetguide-la',
    title: 'VETGuide LA',
    description: 'Los Angeles veteran resource intelligence directory connecting housing, legal aid, workforce systems, and crisis resources.',
    tags: ['Directory', 'LA', 'Resources'],
    status: 'live',
    category: 'veteran',
  },
  {
    id: 'smart-thing',
    title: 'A Smart Thing',
    description: 'Universal behavioral intelligence platform focused on human thinking patterns, executive function, emotional overload, and growth trajectories.',
    tags: ['Universal', 'Intelligence', 'Growth'],
    status: 'live',
    category: 'behavioral',
  },
  {
    id: 'vetbig12',
    title: 'VETBig12 — Big Book + 12 Steps',
    description: 'Veteran-centered recovery, resilience, accountability, and behavioral stabilization system.',
    tags: ['Recovery', '12 Steps', 'Resilience'],
    status: 'live',
    category: 'recovery',
  },
  {
    id: 'still-rollin',
    title: 'Still Rollin Skateboarding',
    description: 'Recovery, mentorship, resilience, youth development, and community growth platform.',
    tags: ['Youth', 'Mentorship', 'Community'],
    status: 'live',
    category: 'community',
  },
  {
    id: 'vet-directiq',
    title: 'Veteran DirectIQ',
    description: 'Veteran operational intelligence and oversight analytics platform.',
    tags: ['Analytics', 'Intelligence', 'Oversight'],
    status: 'live',
    category: 'veteran',
  },
  {
    id: 'delacalle',
    title: 'De La Calle Al Negocio',
    description: 'Food truck and street vendor startup platform featuring permits, compliance, legal systems, and operational readiness.',
    tags: ['Business', 'Food Trucks', 'Compliance'],
    status: 'live',
    category: 'community',
  },
  {
    id: 'universal-engine',
    title: 'Universal BehavioralEngine',
    description: 'Longitudinal behavioral operating system combining assessments, marker systems, tracking algorithms, dashboards, and recommendation engines.',
    tags: ['OS', 'Algorithms', 'Recommendations'],
    status: 'research',
    category: 'behavioral',
  },
  {
    id: 'eviction-diversion',
    title: '14-Mark Eviction Diversion & Crisis Prevention',
    description: 'Early-warning behavioral and operational intervention system focused on housing stability.',
    tags: ['Prevention', 'Housing', 'Intervention'],
    status: 'live',
    category: 'community',
  },
  {
    id: 'five-x-five',
    title: 'Five x 5 Life Skills Model',
    description: 'Human growth framework focused on discipline, structure, communication, resilience, and recovery.',
    tags: ['Life Skills', 'Framework', 'Growth'],
    status: 'live',
    category: 'behavioral',
  },
  {
    id: 'monica-rodriguez',
    title: 'Monica Rodriguez District 7 Intelligence Directory',
    description: 'District-level operational intelligence and community resource system.',
    tags: ['District 7', 'LA', 'Resources'],
    status: 'live',
    category: 'community',
  },
  {
    id: 'vetfield-survival',
    title: 'VETField Survival Guide for Homeless',
    description: 'Veteran street survival and crisis-navigation platform.',
    tags: ['Survival', 'Crisis', 'Field Guide'],
    status: 'live',
    category: 'veteran',
  },
  {
    id: 'veterans-alert',
    title: 'Veterans Alert System',
    description: 'Law enforcement diversion and behavioral crisis prevention platform.',
    tags: ['Alert', 'Law Enforcement', 'Prevention'],
    status: 'development',
    category: 'veteran',
  },
  {
    id: 'veterans-emha',
    title: 'Veterans EMHA System',
    description: 'Emergency mental health alert and intervention platform notifying trusted support networks during crisis escalation.',
    tags: ['Mental Health', 'Emergency', 'Support'],
    status: 'development',
    category: 'veteran',
  },
  {
    id: 'hud-vash-workbook',
    title: 'VA HUD-VASH Housing Program Workbook',
    description: 'Behavioral recovery, housing stabilization, accountability, and veteran life-rebuilding system.',
    tags: ['HUD-VASH', 'Workbook', 'Recovery'],
    status: 'live',
    category: 'veteran',
  },
]

export const mobileApps = [
  { name: 'Vision Tracker', description: 'Goal visualization and progress tracking' },
  { name: 'Momentum Tracker', description: 'Daily momentum and energy monitoring' },
  { name: 'ADHD Marker App', description: 'Behavioral marker logging and analysis' },
  { name: 'Veteran Crisis App', description: 'Crisis support and emergency contacts' },
  { name: 'Daily Recovery Tracker', description: 'Recovery milestone tracking' },
  { name: 'Behavioral Signal Monitor', description: 'Real-time behavioral signal detection' },
  { name: 'Goal Execution Tracker', description: 'Task breakdown and execution monitoring' },
  { name: 'Executive Summary Mobile', description: 'Daily executive function summaries' },
  { name: 'Thought Capture System', description: 'Quick thought and idea capture' },
  { name: 'Recovery Pathways', description: 'Guided recovery journey tracking' },
]
