import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Syed Naqvi',
  subtitle: 'I am the Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'upwork.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://gofile.io/d/ToNV3l', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cloudsbay.jpg',
    title: 'Online Electronics Store',
    info:
      'Advanced E-Commerce online electronic store website, Users can Sign up using Email and Password or social like Gmail.Users shop around different categories and items will go into the cart, cart updates automatically in real-time when there is a new item added.',
    info2:
      'When the user is done shopping, hit the checkout button to proceed to the payment through Stripe Payment API.Clean and simple e-commerce website using React, Sass as a Front-End and FIrebase as a Backend. Note: This is a demo personal project. More work on the website will be added as per client requirements ',
    url: 'https://cloudsbay.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'homedecor.jpg',
    title: 'E-Commerce Online Furniture Store',
    info:
      'Made using React.js, Next.js , Node.js, Semantic UI. Clean and simple online decor website, where users can shop for different home furniture products. Users can view a single product with a proper description. Users can view their account to see the order history.',
    info2:
      'Sign in & Sign up functionality. When users have done shopping, they can click the checkout button to proceed to the payment screen. Note: This is a personal demo project. More work and details will be added as per the client requirements.',
    url: 'https://home-decor.now.sh/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crown.jpg',
    title: 'Clothing Store',
    info:
      'Simple E-Commerce online clothing website, Users can Sign up using Email and Password or social like Gmail. Users shop around different categories and items will go into the cart, cart updates automatically in real-time when there is a new item added.',
    info2:
      'When the user is done shopping, hit the checkout button to proceed to the payment through Stripe Payment API. Clean and simple e-commerce website using React, Sass as a Front-End and FIrebase as a Backend. Note: This is a demo personal project. More work on the website will be added as per client requirements.',
    url: 'https://crwn-live.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'instagramclone.jpg',
    title: 'Instagram Clone',
    info:
      'This porject is made using React as Front-End Liberary and Node.js as API BackEnd. Used beautiful material-design UI liberary ',
    info2:
      'For data storage used NoSQL MongoDB. User can Sign-up and create posts, upload pictures and follow other users just same like Real instagram features.',
    url: 'http://instaclone55.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-brain.jpg',
    title: 'Smart-Brain App',
    info:
      'Its a Face detection web app, users can sign up and upload images & than detect faces in those images',
    info2:
      'Made with React as Front-End and Node.js as Backend API. Used most popular SQL database Postgres',
    url: 'http://smart-brain.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spicekorner.jpg',
    title: 'Food Ordering App',
    info:
      'Online Food ordering website made using React as a Front-End and Firebase as a Backend. Users can browse different food items and add them to there order list. When Users have done browsing they can simply hit the checkout button to get the food delivered.',
    info2:
      'Note: This is a personal demo project. More work and details will be added as per the client requirements.',
    url: 'https://spicekorner.web.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
