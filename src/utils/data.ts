import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSend,
  AiOutlineDatabase,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

export const links = [
  {
    id: 1,
    link: "Home",
    to: "/",
    icon: AiOutlineHome,
    offSet: -80,
  },
  {
    id: 2,
    link: "About",
    to: "about",
    icon: AiOutlineUser,
    offSet: -80,
  },
  {
    id: 3,
    link: "Skills",
    to: "skills",
    icon: GiSkills,
    offSet: -80,
  },
  {
    id: 4,
    link: "Portfolio",
    to: "portfolio",
    icon: AiOutlineDatabase,
    offSet: -80,
  },
  {
    id: 5,
    link: "Contact Me",
    to: "contact",
    icon: AiOutlineSend,
    offSet: -80,
  },
];

export const socials = [
  {
    id: 1,
    icon: AiOutlineWhatsApp,
    link: "https://wa.link/f93b5l",
  },
  {
    id: 2,
    icon: AiOutlineTwitter,
    link: "https://x.com/dontjeffit",
  },
  {
    id: 3,
    icon: AiOutlineGithub,
    link: "https://github.com/dontjeffit",
  },
  {
    id: 4,
    icon: AiOutlineLinkedin,
    link: "https://www.linkedin.com/in/jefferson-anu-john-912235293/",
  },
];

export const frontEnd = [
  {
    id: 1,
    tech: "Business Development",
  },
  {
    id: 2,
    tech: "B2B Sales",
  },
  {
    id: 3,
    tech: "Lead Generation & Prospecting",
  },
  {
    id: 4,
    tech: "Client Acquisition",
  },
  {
    id: 5,
    tech: "Sales Strategy & Execution",
  },
  {
    id: 6,
    tech: "Negotiation & Communication",
  },
  {
    id: 7,
    tech: "Account Management",
  },
];

export const backend = [
  {
    id: 1,
    tech: "Business Intelligence",
  },
  {
    id: 2,
    tech: "Sales Analytics",
  },
  {
    id: 3,
    tech: "Data Analysis",
  },
  {
    id: 4,
    tech: "Microsoft Excel",
  },
  {
    id: 5,
    tech: "Power BI",
  },
  {
    id: 6,
    tech: "MySQL",
  },
];

export const portfolio = [
  {
    id: 3,
    image: "/images/bakyaad.png",
    name: "Bakyaad",
    about: "An on-demand platform for buying inspected and verified cars",
    info: "Secured partnerships with Request Car, Adrenaline Lounge, and Papiees Meatro to host automotive community events and grow brand engagement.",
    demoLink: "https://www.bakyaad.com/",
  },
  {
    id: 2,
    image: "/images/stocksense.png",
    name: "Stocksense",
    about: "A multi-tenant inventory and business management system.",
    info: "Researched and repositioned StockSense for the Nigerian SME market, pitched directly to business owners, converted early adopters, and acquired its first 100 users.",
    demoLink: "https://www.stocksense.one/",
  },
  {
    id: 1,
    image: "/images/chowdeck.png",
    name: "ChowDeck",
    about: "An on-demand food delivery platform and super app.",
    info: "Prospected and onboarded Lagos vendors onto the Chowdeck platform, bringing on businesses that generated approximately ₦1M in revenue.",
    demoLink: "https://www.chowdeck.com/",
  },
];
