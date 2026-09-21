import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const brandStorytellingData: ServicePageData = {
  slug: "brand-storytelling",
  title: "Brand & Commercial Storytelling",
  subtitle: "Emotionally resonant animated commercial campaigns & character mascots",
  badge: "STUDIO SERVICE • BRAND & COMMERCIALS",
  logline: "Crafting emotionally resonant brand narratives, commercial campaigns, and viral animated characters for industry pioneers like Tangerine Insurance.",
  description: "Magic Carpet Studios collaborates with leading commercial brands, financial institutions, and creative agencies to produce high-octane animated TV commercials, character mascots, and multi-episode digital campaigns.",
  heroBackdrop: "https://img.youtube.com/vi/jgRo1FHd6hg/maxresdefault.jpg",
  reelYoutubeId: "jgRo1FHd6hg",
  reelYoutubeUrl: "https://www.youtube.com/watch?v=jgRo1FHd6hg",
  stats: [
    { label: "Commercial Series", value: "Tangerine Slate" },
    { label: "Audience Impressions", value: "25M+" },
    { label: "Brand Recall Boost", value: "+45%" },
  ],
  capabilitiesTitle: "Featured Commercial Campaign: Tangerine Insurance Series",
  capabilitiesSubtitle: "Explore episodes from our multi-part animated commercial series produced for Tangerine Insurance.",
  capabilities: [
    {
      id: "tangerine-ep1",
      title: "Tangerine Insurance Series — Episode 1",
      category: "Tangerine Commercial Series",
      description: "Episode 1 of the Tangerine Insurance commercial series, introducing character-driven storytelling to highlight financial protection and peace of mind.",
      deliverables: ["Tangerine Commercial Series", "Character Animation", "Financial Storytelling", "Broadcast TVC"],
      thumbnail: "https://img.youtube.com/vi/jgRo1FHd6hg/maxresdefault.jpg",
      youtubeId: "jgRo1FHd6hg",
      youtubeUrl: "https://www.youtube.com/watch?v=jgRo1FHd6hg",
      duration: "Episode 1",
    },
    {
      id: "tangerine-ep2",
      title: "Tangerine Insurance Series — Episode 2",
      category: "Tangerine Commercial Series",
      description: "Episode 2 of the Tangerine Insurance series, showcasing humorous everyday scenarios and relatable brand mascot character interactions.",
      deliverables: ["Tangerine Commercial Series", "Humorous Brand Campaign", "Animated Mascots", "Digital Ad Buy"],
      thumbnail: "https://img.youtube.com/vi/HH9s3yRcsIw/maxresdefault.jpg",
      youtubeId: "HH9s3yRcsIw",
      youtubeUrl: "https://www.youtube.com/watch?v=HH9s3yRcsIw",
      duration: "Episode 2",
    },
    {
      id: "tangerine-ep3",
      title: "Tangerine Insurance Series — Episode 3",
      category: "Tangerine Commercial Series",
      description: "Episode 3 of the Tangerine Insurance series, driving home long-term family security and financial planning through vibrant 2D/3D animation.",
      deliverables: ["Tangerine Commercial Series", "Family Financial Security", "2D/3D Character Rigging", "Social Cutdowns"],
      thumbnail: "https://img.youtube.com/vi/Oelj8AL1Hfs/hqdefault.jpg",
      youtubeId: "Oelj8AL1Hfs",
      youtubeUrl: "https://www.youtube.com/watch?v=Oelj8AL1Hfs",
      duration: "Episode 3",
    },
  ],
  processTitle: "Commercial Storytelling Workflow",
  processSubtitle: "From strategy to broadcast: A collaborative 4-step agency & brand production model.",
  processSteps: [
    {
      step: "01",
      title: "Brand Strategy & Story Arc",
      description: "Defining brand objectives, target demographic tone, core message, and creative narrative direction.",
    },
    {
      step: "02",
      title: "Visual Styling & Character Design",
      description: "Developing bespoke art direction, character mascots, color palettes, and agency-approved storyboards.",
    },
    {
      step: "03",
      title: "High-Octane Animation",
      description: "Producing fluid, high-energy animation, custom sound composition, and professional voiceover sync.",
    },
    {
      step: "04",
      title: "Multi-Channel Delivery",
      description: "Delivering broadcast-ready ProRes files, web assets, and social media formats optimized for global distribution.",
    },
  ],
};

export default function BrandStorytellingPage() {
  return <ServicePageTemplate data={brandStorytellingData} />;
}
