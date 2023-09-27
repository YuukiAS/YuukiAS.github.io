import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profile_pic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tim Baker',
  description: ``,
  ogImageUrl: ``,
  twitterCardType: 'summary_large',
  twitterSite: `@timbakerx`,
  twitterCreator: `@timbakerx`,
  twitterDomain: `reactresume.com`,
  twitterUrl: `https://reactresume.com`,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero', // not that "hero", it means myself
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Mingcheng Hu (胡铭程)`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a first year master student majored in Biostatistics, currently studying
        at <strong className='text-stone-100'>University of North Carolina, Chapel Hill</strong>.
        
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm also an alumnus of <strong className='text-stone-100'>Shanghai Jiao Tong University</strong> and <strong className='text-stone-100'>University of Michigan</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf', // todo where is assets?
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Chapel Hill, NC', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Shanghai, China', Icon: FlagIcon},
    {label: 'Interests', text: 'Swimming, Piano, Japanese', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Mandarin',
        level: 9,
      },
      {
        name: 'English',
        level: 5,
      },
      {
        name: 'Japanese',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'R',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'SAS',
        level: 6,
      },
      {
        name: 'SQL',
        level: 4,
      },
      {
        name: 'Java',
        level: 2,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    imageUrl: 'https://source.unsplash.com/random/',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Albert Camus',
      text: 'That nostalgia for unity, that appetite for the absolute illustrates the essential impulse of the human drama.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Want to have a chat?',
  items: [
    {
      type: ContactType.Email,
      text: 'yuukias@unc.edu',
      href: 'mailto:yuukias@unc.edu',
    },
    {
      type: ContactType.Location,
      text: 'Chapel Hill, NC',
      href: 'https://goo.gl/maps/mFDwRxWM5wocstqx5',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Mingcheng Hu',
      href: 'https://www.linkedin.com/in/mingcheng-hu-03375a221/',
    },
    {
      type: ContactType.Github,
      text: 'YuukiAS',
      href: 'https://github.com/YuukiAS',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YuukiAS'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mingcheng-hu-03375a221/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
  {label: 'School', Icon: AcademicCapIcon, href: 'https://sph.unc.edu/bios/biostatistics/'},
];

// todo Add things like Google analytics
// todo Add pages for posting, maybe linked with notion?
