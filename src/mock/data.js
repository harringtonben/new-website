import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ben Harrington', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ben Harrington',
  subtitle: 'I am a crocs enthusiast...and a software engineer',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne: 'Hi! I am a software engineer currently living in Nashville, TN. I love python, data, and integrating software. I currently work at Built Technologies, working on the platform API team.',
  paragraphTwo: 'Whenever I am not working, I love cooking, hanging out with my family, riding my bike and occasionally picking up a guitar and playing some music.',
  paragraphThree: 'And of course...Crocs. They are hands down the most comfortable shoe out there and they have a pair for any occasion.',
  resume: '', // if no resume, the button will not show up
};


// CONTACT DATA
export const contactData = {
  cta: 'Wanna talk crocs?',
  btn: 'uh, duh',
  email: 'ben@harringtonben.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/benfromnormal',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ben-harrington-813b123b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/harringtonben',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
