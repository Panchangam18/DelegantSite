import { DOCS_URL} from '../../shared/constants';
import daBoiAvatar from '../static/da-boi.png';
import avatarPlaceholder from '../static/avatar-placeholder.png';
import { routes } from 'wasp/client/router';

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '/pricing' },
];
export const features = [
  {
    name: 'Scheduling',
    description: "See and optimize your team's schedule",
    icon: '📆',
    href: DOCS_URL,
  },
  {
    name: 'Progress',
    description: 'Track live progress towards your goals',
    icon: '📈',
    href: DOCS_URL,
  },
  {
    name: 'Payroll',
    description: 'Automate employee payroll based on shifts',
    icon: '💸',
    href: DOCS_URL,
  },
  {
    name: 'Organization',
    description: 'Everything you need organized in one place',
    icon: '🗂️',
    href: DOCS_URL,
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Whats the meaning of life?',
    answer: '42.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DOCS_URL },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
