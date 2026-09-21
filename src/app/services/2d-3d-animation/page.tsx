import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const animationData: ServicePageData = {
  slug: "2d-3d-animation",
  title: "Original 2D & 3D IP Animation",
  subtitle: "Full-pipeline feature films, animated series & world-class character animation",
  badge: "STUDIO SERVICE • FEATURE & SERIES",
  logline: "World-class 2D and 3D character animation, environment world-building, and cinematic feature & series production from concept to screen.",
  description: "Magic Carpet Studios specializes in full-service 2D and 3D animation production for feature films, television slates, streaming platforms, and original IPs. Featuring 4 signature projects across 2D and 3D animation slates.",
  heroBackdrop: "https://img.youtube.com/vi/epqVW8GTJTw/maxresdefault.jpg",
  reelYoutubeId: "epqVW8GTJTw",
  reelYoutubeUrl: "https://www.youtube.com/watch?v=epqVW8GTJTw",
  stats: [
    { label: "Original Slates", value: "4 Projects" },
    { label: "Animation Styles", value: "2D & 3D" },
    { label: "Pipeline Quality", value: "4K HDR" },
  ],
  capabilitiesTitle: "Featured 2D & 3D Animation Projects",
  capabilitiesSubtitle: "Explore our featured 2D and 3D animation productions created for theatrical and streaming release.",
  capabilities: [
    {
      id: "super-dad",
      title: "Super Dad (2D Animation)",
      category: "2D Original Animation",
      description: "An emotional, character-driven 2D animated film exploring fatherhood, family bonds, and heroic everyday sacrifices.",
      deliverables: ["Traditional 2D Animation", "Character Concept Design", "Emotional Storytelling", "Full Sound Score"],
      thumbnail: "https://img.youtube.com/vi/epqVW8GTJTw/maxresdefault.jpg",
      youtubeId: "epqVW8GTJTw",
      youtubeUrl: "https://www.youtube.com/watch?v=epqVW8GTJTw",
      duration: "2D Feature Short",
    },
    {
      id: "dr-majek",
      title: "Dr. Majek (2D Animation)",
      category: "2D Original Series",
      description: "An upcoming 2D animated adventure series following the eccentric journeys, magical inventions, and mystical discoveries of Dr. Majek.",
      deliverables: ["2D Character Rigging", "Visual Development", "World-Building", "In Production (Trailer Pending)"],
      thumbnail: "https://img.youtube.com/vi/wePT7aKdgPM/maxresdefault.jpg",
      youtubeId: "wePT7aKdgPM",
      youtubeUrl: "https://www.youtube.com/watch?v=wePT7aKdgPM",
      duration: "2D Series Slate",
    },
    {
      id: "sip-3d",
      title: "Sip (3D Animation)",
      category: "3D Animated Short Film",
      description: "A critically acclaimed, multi-award winning animated short film blending surrealistic 3D art direction with intimate visual storytelling.",
      deliverables: ["Award-Winning Short", "3D Art Direction", "Lighting & Dynamics", "Surreal Animation"],
      thumbnail: "https://img.youtube.com/vi/IJmiDCY_tAE/maxresdefault.jpg",
      youtubeId: "IJmiDCY_tAE",
      youtubeUrl: "https://www.youtube.com/watch?v=IJmiDCY_tAE",
      duration: "3D Short Film",
    },
    {
      id: "legends-of-bulan",
      title: "Legends of Bulan - LOB (3D Animation)",
      category: "3D Original Series",
      description: "Immersing viewers into a breathtaking 3D fantasy universe where ancient African gods, mythical beasts, and young heroes clash to protect the moonlit realms.",
      deliverables: ["3D Character Rigging", "Mythological World-Building", "VFX & Compositing", "Series Slate"],
      thumbnail: "https://img.youtube.com/vi/15Zfj4qgLB0/maxresdefault.jpg",
      youtubeId: "15Zfj4qgLB0",
      youtubeUrl: "https://www.youtube.com/watch?v=15Zfj4qgLB0",
      duration: "3D Series Slate",
    },
  ],
  processTitle: "The Animation Studio Pipeline",
  processSubtitle: "Our proven 4-phase cinematic pipeline for delivering world-class animated content.",
  processSteps: [
    {
      step: "01",
      title: "Development & Storyboarding",
      description: "Concept art, character design, script polish, storyboarding, and timed animatics with scratch audio.",
    },
    {
      step: "02",
      title: "Asset Creation & Rigging",
      description: "3D character modeling, facial rigging, texture mapping, environment creation, and 2D vector setup.",
    },
    {
      step: "03",
      title: "Character Layout & Animation",
      description: "Keyframe animation, performance capture cleanup, secondary physics, cloth/hair dynamics, and camera staging.",
    },
    {
      step: "04",
      title: "Lighting, FX & Mastering",
      description: "Volumetric rendering, visual effects particles, multi-pass compositing, cinematic scoring, and broadcast delivery.",
    },
  ],
};

export default function AnimationPage() {
  return <ServicePageTemplate data={animationData} />;
}
