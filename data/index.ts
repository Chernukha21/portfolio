export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I value clear communication and teamwork',
    description: 'Collaboration helps build better products and stronger connections.',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Adaptable and reliable across time zones',
    description: 'Freelance experience taught me to sync with clients globally.',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'Learning every day, growing every project',
    description: 'I constantly work on improving my skills and building new things.',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Frontend developer with real project experience',
    description: 'React, TypeScript, modern UI – and curiosity that never sleeps.',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Match App (WIP)',
    des: 'A dating-style app with Next.js 14, authentication, Prisma, and PostgreSQL. Work in progress with real backend integration.',
    img: '/p3.png',
    iconLists: ['/next.svg', '/ts.svg', '/tail.svg', '/prisma.svg'],
    link: 'https://my-tinder-1no8gbnte-chernukha21s-projects.vercel.app/',
  },
  {
    id: 2,
    title: 'Frontend Portfolio',
    des: 'This very site – built with Next.js 14, Tailwind, TypeScript and motion animations. A showcase of who I am as a developer.',
    img: '/p4.png',
    iconLists: ['/next.svg', '/ts.svg', '/tail.svg', '/fm.svg'],
    link: 'https://portfolio-blue-three-79.vercel.app/',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Junior Frontend Developer – Depoistu',
    desc: 'Built a React web app with Redux, created reusable components, and collaborated with QA to implement and refine new features in an Agile team.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Junior Frontend Developer – Data Powers',
    desc: 'Fixed UI and JavaScript bugs, ensured responsive layouts, and tested cross-browser compatibility while integrating third-party tools and APIs.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Projects',
    desc: 'Created SPAs using React and Vue, including Marvel and IMDb clones, focusing on APIs, component styling, and modern frontend workflows.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Chernukha21',
  },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/chernukha-sasha/',
  },
  {
    id: 3,
    img: '/cv.svg',
    link: '/Oleksandr_Chernukha_Frontend_Developer_CV.pdf',
  },
];
