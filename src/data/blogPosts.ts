export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: "News" | "Events" | "Awards" | "Behind The Scenes" | "Insights";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image: string;
  imageCaption?: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading?: string;
      body: string[];
      quote?: {
        text: string;
        author?: string;
      };
      callout?: {
        title: string;
        text: string;
      };
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "mpc-mill-unify",
    slug: "mpc-mill-unify",
    title: "MPC and The Mill Join Forces Under One Brand in New Era of Creative Production",
    subtitle: "Combining award-winning VFX artistry and production scale to deliver unprecedented visual craftsmanship globally.",
    category: "News",
    date: "August 24, 2026",
    readTime: "5 min read",
    author: {
      name: "Magic Carpet Editorial",
      role: "Studio Newsroom",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Visualizing the future of global collaborative VFX pipelines.",
    excerpt: "Combining award-winning VFX artistry and production scale to deliver unprecedented visual craftsmanship globally.",
    tags: ["Production", "VFX", "Industry", "Creative Studio"],
    featured: true,
    content: {
      intro: "In a groundbreaking consolidation within the global VFX and animation industry, Technicolor Creative Studios has announced the unification of MPC and The Mill under a single unified production framework. This monumental shift expands creative capabilities, real-time virtual production tools, and character animation expertise across international hubs.",
      sections: [
        {
          heading: "A Unified Vision for High-End Storytelling",
          body: [
            "By merging the long-standing cinematic pedigree of MPC with the high-octane commercial innovation of The Mill, directors and studios worldwide now gain seamless access to a global network of over 4,000 artists and technologists.",
            "The strategic alignment promises to streamline multi-studio co-productions, allowing complex IP developments—from feature-length animation to high-concept brand films—to leverage unified asset libraries, shared USD (Universal Scene Description) pipelines, and real-time Unreal Engine workflows."
          ],
          quote: {
            text: "This convergence isn't just about scale; it's about breaking down creative silos so original IP creators can push visual boundaries faster than ever before.",
            author: "Global Head of Production"
          }
        },
        {
          heading: "Impact on African Animation Hubs & Co-Productions",
          body: [
            "For emerging studios in Africa and the global South, unified global networks open unprecedented co-production channels. Magic Carpet Studios continues to collaborate with global partners to bring authentic African narratives to international streaming platforms.",
            "With shared cloud rendering infrastructure and remote real-time pre-visualization, studio teams across Lagos, London, Paris, and Los Angeles can now collaborate in real time on shared shots and character rigs."
          ],
          callout: {
            title: "Key Industry Takeaway",
            text: "Interoperable asset pipelines and remote real-time review are becoming the baseline standard for tier-1 animated features."
          }
        }
      ]
    }
  },
  {
    id: "cannes-lions-2026",
    slug: "cannes-lions-2026",
    title: "Cannes Lions 2026: Three Words — Endless Creative Inspiration",
    subtitle: "Insights and takeaways from our global creative directors on the future of real-time rendering and brand experience.",
    category: "Events",
    date: "July 15, 2026",
    readTime: "4 min read",
    author: {
      name: "Ferdinand Adimefe",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Celebrating groundbreaking creative campaigns on the Boulevard de la Croisette.",
    excerpt: "Insights and takeaways from our global creative directors on the future of real-time rendering and brand experience.",
    tags: ["Cannes Lions", "Animation", "Creativity", "Events"],
    content: {
      intro: "Reflecting on this year's Cannes Lions Festival of Creativity, the intersection between narrative animation and brand experience has reached an inflection point. Audiences no longer just watch stories—they expect immersive, emotionally resonant worlds.",
      sections: [
        {
          heading: "Animation as the Premier Brand Language",
          body: [
            "Across the Film Craft and Digital Craft categories, character-driven animation dominated gold trophy wins. Brands are realizing that animated IPs cultivate deeper emotional resonance and longevity than traditional live-action commercials.",
            "Our team participated in several panels discussing how African mythology and folklore provide a untapped goldmine of rich visual metaphors for global brand campaigns."
          ]
        },
        {
          heading: "The Shift Toward Procedural & AI-Assisted Artistry",
          body: [
            "Key discussions at the Palais highlighted how ethical AI tools and procedural generation are empowering small, agile creative teams to achieve visual fidelity once reserved for mega-budget Hollywood productions.",
            "At Magic Carpet Studios, we continue to prioritize human-led artistic vision while harnessing generative tools for rapid concepting and background environmental layout."
          ]
        }
      ]
    }
  },
  {
    id: "cannes-film-festival",
    slug: "cannes-film-festival",
    title: "Two Magic Carpet Collaborations Honoured at the 2026 Cannes Film Festival",
    subtitle: "Recognizing exceptional creature design and seamless environment integration across international feature film selections.",
    category: "Awards",
    date: "June 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Creative Director Team",
      role: "Studio Leadership",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Red carpet honors for breakthrough visual storytelling at Palais des Festivals.",
    excerpt: "Recognizing exceptional creature design and seamless environment integration across international feature film selections.",
    tags: ["Film Festival", "Awards", "Feature Animation", "VFX"],
    content: {
      intro: "We are thrilled to celebrate two major co-productions honored at the prestigious 79th Cannes Film Festival. Both projects showcased Magic Carpet Studios' specialized 3D character animation and intricate environment design.",
      sections: [
        {
          heading: "Honoring Craft and Cultural Authenticity",
          body: [
            "The festival jury praised the seamless fusion of traditional African aesthetic motifs with cutting-edge lighting and cloth simulation.",
            "Receiving recognition at Cannes validates our multi-year commitment to elevating African narrative talent onto the world stage."
          ],
          quote: {
            text: "When African stories are told with uncompromised technical perfection, they touch universal emotional chords across every continent.",
            author: "Lead Animation Supervisor"
          }
        }
      ]
    }
  },
  {
    id: "tiff-2026",
    slug: "tiff-2026",
    title: "Virtual Production & Digital Double Breakthroughs at TIFF 2026",
    subtitle: "Premiering high-impact virtual production and digital doubles at Toronto International Film Festival.",
    category: "Awards",
    date: "May 29, 2026",
    readTime: "4 min read",
    author: {
      name: "Production Team",
      role: "VFX & Virtual Production",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "TIFF audience screening of groundbreaking hybrid live-action/animated feature.",
    excerpt: "Premiering high-impact virtual production and digital doubles at Toronto International Film Festival.",
    tags: ["TIFF", "Virtual Production", "Digital Doubles", "Innovation"],
    content: {
      intro: "Toronto International Film Festival 2026 witnessed a landmark demonstration of real-time LED wall virtual production and hyper-realistic digital double integration created in part by Magic Carpet's technical division.",
      sections: [
        {
          heading: "Bridging Real-Time Engine & Cinematic VFX",
          body: [
            "By utilizing in-camera visual effects (ICVFX) powered by Unreal Engine 5, directors were able to capture complex African fantasy landscapes live on set with zero green-screen spill.",
            "This methodology reduced post-production cleanup by 40% while giving actors real-world lighting cues to react to during filming."
          ]
        }
      ]
    }
  },
  {
    id: "future-of-african-animation",
    slug: "future-of-african-animation",
    title: "The Renaissance of African Animation: Bridging Folklore and Next-Gen 3D Tech",
    subtitle: "How Magic Carpet Studios is pioneering a brand new visual dialect for African animated cinema.",
    category: "Behind The Scenes",
    date: "April 18, 2026",
    readTime: "7 min read",
    author: {
      name: "Lead Art Director",
      role: "Visual Development",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Concept art exploration blending traditional Yoruba textile patterns with sci-fi architecture.",
    excerpt: "Discover how we fuse ancient mythology with state-of-the-art 3D character pipelines to build global franchise IPs.",
    tags: ["African Animation", "3D Tech", "Folklore", "Behind The Scenes"],
    content: {
      intro: "For decades, global animation was dominated by Western and East Asian storytelling paradigms. Today, a powerful wave of African animators is redefining the medium by infusing indigenous mythology, vibrant color theory, and rhythmic movement into 3D cinema.",
      sections: [
        {
          heading: "Defining a Distinctive African Visual Aesthetic",
          body: [
            "At Magic Carpet Studios, our art directors don't merely replicate Western cartoon conventions. We draw directly from West African bronze sculpture, Adinkra symbolism, woven Kente textures, and vibrant urban street culture.",
            "In character sculpting, this translates to stylized proportions, expressive eye animation, and rich skin shading models calibrated for diverse melanin tones under dynamic lighting."
          ],
          quote: {
            text: "Animation is the ultimate carpet that carries our oral traditions into the digital age.",
            author: "Head of Story & Development"
          }
        },
        {
          heading: "Building IP Infrastructure in Lagos",
          body: [
            "Beyond artistic innovation, building a sustainable animation studio in Lagos requires investing in local talent academies, high-performance GPU render farms, and pipeline automation.",
            "Our Magic Carpet Academy has trained hundreds of young animators, riggers, and compositors who are now working on feature films destined for global audiences."
          ]
        }
      ]
    }
  },
  {
    id: "mill-liege-reel",
    slug: "mill-liege-reel",
    title: "Magic Carpet & Partner Studios Showcase 2026 Film & Series Reel",
    subtitle: "Showcasing our studio's expertise in high-end color grading, matte painting, and episodic VFX.",
    category: "News",
    date: "March 12, 2026",
    readTime: "4 min read",
    author: {
      name: "VFX Team",
      role: "Post-Production",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Behind-the-scenes breakdown of episodic visual effects and matte paintings.",
    excerpt: "Showcasing our Belgium & Lagos studio expertise in high-end color grading, matte painting, and episodic VFX.",
    tags: ["Reel", "Color Grading", "Matte Painting", "Episodic"],
    content: {
      intro: "We are excited to unveil our latest 2026 Film & Series Reel highlighting recent breakthroughs in environments, creature simulation, and stylized motion graphics for international television series.",
      sections: [
        {
          heading: "Pushing Episodic Production Value",
          body: [
            "Modern streaming audiences demand feature-film quality visual effects within tight television broadcast schedules.",
            "Through modular environment kits and procedural crowd simulation, our post-production pipeline delivers movie-grade visuals for episodic drama and fantasy series."
          ]
        }
      ]
    }
  },
  {
    id: "cesar-vfx-award",
    slug: "cesar-vfx-award",
    title: "César Awards 2026: Celebrating Visual Innovation and Artistic Craft",
    subtitle: "Celebrating top honors for artistic excellence and visual innovation in French cinema.",
    category: "Awards",
    date: "February 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Magic Carpet Editorial",
      role: "Studio Newsroom",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Celebrating top honors at the 51st César Award ceremony.",
    excerpt: "Celebrating top honors for artistic excellence and visual innovation in French cinema.",
    tags: ["César Awards", "Visual Effects", "French Cinema"],
    content: {
      intro: "At the 51st César Awards ceremony in Paris, visual effects co-creators were recognized for their outstanding contribution to contemporary cinema.",
      sections: [
        {
          heading: "Excellence in Environmental Compositing",
          body: [
            "The winning entry showcased seamless digital matte painting, realistic atmospheric smoke effects, and period-accurate architectural reconstructions.",
            "This achievement underscores the global nature of modern cinematic artistry, where artists across continents work collaboratively on single scenes."
          ]
        }
      ]
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug || post.id === slug);
}

export function getRelatedBlogPosts(currentSlug: string, count: number = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug && post.id !== currentSlug).slice(0, count);
}
