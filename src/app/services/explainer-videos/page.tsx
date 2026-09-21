import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";

const explainerData: ServicePageData = {
  slug: "explainer-videos",
  title: "Explainer Videos & Motion Graphics",
  subtitle: "Visualizing complex concepts into captivating animated stories",
  badge: "STUDIO SERVICE • MOTION GRAPHICS",
  logline: "Turning complex banking workflows, corporate vision, and tech platforms into engaging, high-converting 2D and 3D animated explainers.",
  description: "Our motion graphics and explainer video team combines narrative clarity with high-end graphic design and kinetic animation. From financial institutions like Access Bank to energy conglomerates like NNPC, we deliver animations that resonate globally.",
  heroBackdrop: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.jpg",
  reelVideoUrl: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.mp4",
  stats: [
    { label: "Completed Projects", value: "85+" },
    { label: "Client Conversion Lift", value: "3.5x" },
    { label: "Avg Turnaround", value: "2-4 Wks" },
  ],
  capabilitiesTitle: "Featured Explainer Projects & Offerings",
  capabilitiesSubtitle: "High-impact animation projects created for industry leaders including Access Bank and NNPC.",
  capabilities: [
    {
      id: "access-bank-voucher",
      title: "Access Bank Digital Voucher Explainer",
      category: "Fintech & Banking Explainer",
      description: "A high-converting 2D animated explainer detailing Access Bank's digital voucher platform, user redemption journey, and seamless mobile banking integration.",
      deliverables: ["Fintech Motion Graphics", "2D Vector Rigging", "Voiceover & Audio Mix", "Payment Workflow"],
      thumbnail: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.jpg",
      videoUrl: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789994418/Voucher2_r4epe5.mp4",
      duration: "Full Showcase",
    },
    {
      id: "nnpc-explainer",
      title: "NNPC Corporate Motion Campaign",
      category: "Corporate & Energy Explainer",
      description: "A comprehensive corporate motion graphics campaign for NNPC, communicating strategic energy initiatives, operational milestones, and sustainability goals.",
      deliverables: ["Corporate Motion Graphics", "3D & 2D Visual Design", "Infographic Visualization", "Broadcast Render"],
      thumbnail: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789995052/Nnpc_khjcu6.jpg",
      videoUrl: "https://res.cloudinary.com/dt2vu9jje/video/upload/v1789995052/Nnpc_khjcu6.mp4",
      duration: "Full Showcase",
    },
  ],
  processTitle: "Our Explainer Video Process",
  processSubtitle: "A streamlined 4-step pipeline designed for clarity, speed, and creative excellence.",
  processSteps: [
    {
      step: "01",
      title: "Scripting & Message Framing",
      description: "We distill your value proposition into a sharp, narrative-driven script with clear call-to-actions.",
    },
    {
      step: "02",
      title: "Styleframes & Storyboarding",
      description: "Creating custom visual styleframes, character sketches, and scene-by-scene board layouts.",
    },
    {
      step: "03",
      title: "Animation & Sound Scoring",
      description: "Fluid 2D/3D animation, kinetic typography, licensed sound design, and professional voiceover sync.",
    },
    {
      step: "04",
      title: "Delivery & Multi-Format Render",
      description: "Delivering 4K master files and optimized aspect ratios for web, broadcast, and social media platforms.",
    },
  ],
};

export default function ExplainerVideosPage() {
  return <ServicePageTemplate data={explainerData} />;
}
