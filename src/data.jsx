import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://i.ytimg.com/vi/-kgAFH7nZYs/maxresdefault.jpg',
    url: 'https://coverletter-gpt.com/',
    github: 'https://github.com/seyicole/cover-letter',
    title: 'Coverletter-gpt',
    text: 'Coverletter-gpt is a web application that uses AI to generate tailored and professional coverletter for job applications of any kind. Its built on OpenAi ChatGPT 3.   ',
  },
  {
    id: nanoid(),
    img: 'data:image/jpeg;base64,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',
    url: 'https://seyicole.github.io/getlinked/',
    github: 'https://github.com/seyicole/getlinked',
    title: 'Getlinked hackathon',
    text: 'GetLinked Tech Hackathon is a technology innovation program established by a group of organisations with the aim of showcasing young and talented individuals in the field of technology. This is a landing page created for the Hackathon',
  },
  {
    id: nanoid(),
    img: 'https://pbs.twimg.com/profile_images/1625047095701913601/aToyFoF5_400x400.jpg',
    url: 'https://awariapp.com/#/home',
    github: 'https://github.com/wariapi',
    title: 'Awariapp',
    text: 'Awari is a lifestyle app that gives users access to lifestyle businesses and events, from restaurants and cafes, beauty and spa, fashion, home and gift retailers, to supermarkets and health practitioners, to discover and experience. Awari gives users the ability to book appointments and make reservations, write reviews and get recommendations, earn loyalty points and take advantage of discounts and offers.',
  },
];
