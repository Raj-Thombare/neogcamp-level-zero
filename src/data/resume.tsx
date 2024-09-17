import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raj Thombare",
  initials: "RT",
  url: "https://rajthombare.xyz",
  location: "Navi Mumbai, MH",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Full Stack Engineer. I love building things and helping people. Very active on Twitter.",
  summary:
    "A dedicated full stack engineer specialized in building robust web applications using modern technologies. I'm Based in Navi Mumbai, Maharashtra, my expertise lies in designing and maintaining both frontend and backend systems that deliver exceptional user experiences. Leveraging the latest development tools and techniques, I create scalable and high-performance solutions that meet diverse business needs.",
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Redux",
    "Recoil",
    "Zustand",
    "Postgres",
    "Prisma",
    "MongoDB",
    "Firebase",
    "Docker",
    "AWS",
    "Cloudflare",
    "Nginx",
    "Kubernetes",
    "Tailwind",
    "C++",
    "Python",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blogs" },
  ],
  contact: {
    email: "rajthombare3524@gmail.com",
    tel: "+91 8468879711",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raj-thombare",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajthombare/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rajth0mbare",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Shiksha Sopan - IIT Kanpur",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/shiksha_logo.jpeg",
      start: "April 2023",
      end: "May 2023",
      description:
        "Worked as a Frontend Developer Intern at Shiksha Sopan - IIT Kanpur, contributing to the National Anveshika Experimental Skill Test (NAEST) website. NAEST is an annual competition in India that focuses on assessing and nurturing students' observational, analytical, and experimental skills in physics. Raj built the website and developed React components for the platform used to administer these tests.",
    },
  ],
  education: [
    {
      school: "Amity University, Mumbai",
      href: "https://buildspace.so",
      degree: "Master's Degree of Computer Application (MCA)",
      logoUrl: "/amity.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Chhatrapati Shivaji Maharaj University",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/csmu.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Reliance Foundation School",
      href: "https://wlu.ca",
      degree: "10th & 12th",
      logoUrl: "/rfsc.png",
      start: "2014",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Venmo Pay",
      href: "https://venmopay.rajthombare.xyz",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Pay. Get paid. Shop. Share. Venmo is a digital wallet that makes money easier for everyone from students to small businesses.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://venmopay.rajthombare.xyz",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/raj-thombare/venmopay",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Articlearc",
      href: "https://articlearc.rajthombare.xyz",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A blog posting app similar to Medium. Built using Next.js, Hono, Cloudflare Workers, Edge runtime.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://articlearc.rajthombare.xyz",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/raj-thombare/articlearc",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Sociopedia",
      href: "https://sociopediaa.vercel.app",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "A dynamic social media platform. Share photos, post updates, follow friends, and engage with a vibrant community.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://sociopediaa.vercel.app",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/Raj-Thombare/Sociopedia",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "rajthombare.com",
      href: "https://rajthombare.xyz",
      dates: "April 2023 - March 2024",
      active: true,
      description: "Developed a personal portfolio to showcase my skills.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://rajthombare.xyz",
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: "Source",
          href: "https://github.com/Raj-Thombare/rajthombare.com",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
