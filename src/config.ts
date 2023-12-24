import type { ImageProps } from 'next/image'

export const socialLinks = {
  twitter: 'https://twitter.com/AjuonumaJessica',
  linkedIn: 'http://www.linkedin.com/in/jessicaajuonuma',
  substack: 'https://substack.com/@jessicaajuonuma',
  instagram: 'https://www.instagram.com/iamjessicaclair/',
  mail: 'mailto:jessicaajuonuma3@gmail.com',
}

export const socialHandles = {
  twitter: 'AjuonumaJessica',
  linkedIn: 'jessicaajuonuma',
  instagram: '@iamjessicaclair',
  mail: 'jessicaajuonuma3@gmail.com',
}

export const profileDetails = {
  name: 'Jessica Ajuonuma',
  firstName: 'Jessica',
  lastName: 'Ajuonuma',
  title: 'Digital Marketer',
  fullTitle: 'Digital Marketer, Content Writer and Storyteller Extraordinaire',
  location: 'Lagos, Nigeria',
  url: 'https://jessicaclair.me',
  newsletter: 'https://jessicaajuonuma.substack.com',
  bio: `I'm Jessica, I help brands tell their stories in a way that resonates with their audience. I also help brands create content that converts.`,
}

export const articles = [
  {
    title: 'How To Create A Vision Board- 2024 Productivity Hack',
    description:
      'A vision board can radically change your life. Here’s how to create one.',
    date: '2023-12-12',
    link: 'https://jessicaajuonuma.substack.com/p/how-to-create-a-vision-board-2024',
    author: `${profileDetails.name}`,
  },
  {
    title: 'Dear Child,',
    description: "Don't grow up too fast.",
    date: '2023-12-01',
    link: 'https://jessicaajuonuma.substack.com/p/dear-child',
    author: `${profileDetails.name}`,
  },
  {
    title: 'Married Men Rizz',
    description: 'I was tempted to date a Married Man for Money',
    date: '2023-11-12',
    link: 'https://jessicaajuonuma.substack.com/p/married-men-rizz',
    author: `${profileDetails.name}`,
  },
  {
    title: 'Stand Strong; You have Got This',
    description: 'A Little Sprinkle of Motivation',
    date: '2023-11-02',
    link: 'https://jessicaajuonuma.substack.com/p/stand-strong-you-have-got-this',
    author: `${profileDetails.name}`,
  },
  {
    title: 'My First Heartbreak',
    description: 'Storytime with Jessica Clair',
    date: '2023-10-08',
    link: 'https://jessicaajuonuma.substack.com/p/my-first-heartbreak',
    author: `${profileDetails.name}`,
  },
  {
    title: 'Help Me! This is a Strange Land',
    description:
      'This is the most vulnerable I have ever been, should I run away already?',
    date: '2023-10-02',
    link: 'https://jessicaajuonuma.substack.com/p/help-me-this-is-a-strange-land',
    author: `${profileDetails.name}`,
  },
  {
    title: '7 Things Every Female Entrepreneur Should Know About Raising Funds',
    description:
      "Raising money as a female entrepreneur can be tough. Here's what you need to know.",
    date: '2023-06-07',
    link: 'https://www.linkedin.com/pulse/7-things-every-female-entrepreneur-should-know-raising-ajuonuma/',
    author: `${profileDetails.name}`,
  },
  {
    title: 'Goal Setting vs Flexibility',
    description:
      'Why you should set goals, but also be flexible enough to change them when needed.',
    date: '2021-05-13',
    link: 'https://www.linkedin.com/pulse/goal-setting-vs-flexibility-jessica-ajuonuma/',
    author: `${profileDetails.name}`,
  },
]

export const articleSubText = `All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.`

export const appImages = {
  photos: {
    image1: {
      src: 'https://i.imgur.com/HwwppEE.png',
      alt: `${profileDetails.name} at the Meta Digital Marketing Associate program graduating ceremony`,
    },
    image2: {
      src: 'https://i.imgur.com/fdwVYCN.png',
      alt: `${profileDetails.name} at a photo shoot`,
    },
    image3: {
      src: 'https://i.imgur.com/phZv03y.png',
      alt: `${profileDetails.name} at an NYSC camp`,
    },
    image4: {
      src: 'https://i.imgur.com/OGBNUvx.png',
      alt: `${profileDetails.name} at work`,
    },
    image5: {
      src: 'https://i.imgur.com/SdXru5F.png',
      alt: `${profileDetails.name} at a work`,
    },
    avatar: {
      src: 'https://i.imgur.com/DmxImWA.png',
      alt: `${profileDetails.name}`,
    },
    potrait: {
      src: 'https://i.imgur.com/DmxImWA.png',
      alt: `${profileDetails.name}`,
    },
  },

  icons: {
    eduBridge: {
      src: 'https://i.imgur.com/SDDA97C.png',
      alt: 'EduBridge',
    },
    amxAfrica: {
      src: 'https://i.imgur.com/5pxhfWJ.png',
      alt: 'AMX Africa',
    },
    billyronks: {
      src: 'https://i.imgur.com/YndnPjf.png',
      alt: 'BillyRonks',
    },
  },
}

export const SiteCreator = {
  name: 'CNN',
  url: 'https://charlesnwankwo.com',
}

export interface IRole {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export const ResumeDetails: Array<IRole> = [
  {
    company: 'BillyRonks Global Ltd',
    title: 'Digital Marketer/Content Strategist',
    logo: appImages.icons.billyronks.src,
    start: '2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Amx Africa',
    title: 'Sales and Business Development Intern',
    logo: appImages.icons.amxAfrica.src,
    start: '2023',
    end: '2023',
  },
  {
    company: 'Edubridge Academy',
    title: 'Chief Clan',
    logo: appImages.icons.eduBridge.src,
    start: '2021',
    end: '2022',
  },
  {
    company: 'Edubridge Academy',
    title: 'Campus Ambassador',
    logo: appImages.icons.eduBridge.src,
    start: '2019',
    end: '2022',
  },
  {
    company: 'Edubridge Academy',
    title: 'Content Team Lead',
    logo: appImages.icons.eduBridge.src,
    start: '2020',
    end: '2021',
  },
]

export const ResumeLink =
  'https://drive.google.com/file/d/1EYVbbH-a073E_6OmZm24BDlrXN044Bme/view?usp=sharing'

export const ArticlePageDetails = {
  title: 'I write on some of the things I find interesting.',
  subtext:
    'All of my long-form thoughts on about life, love, career, and more, collected in chronological order.',
}
