import amazon from "../assets/screenshot-amazon.png";
import portfolio from "../assets/screenshot-portfolio.png";
import calculator from "../assets/screenshot-calculator.png";
import background from "../assets/screenshot-bg-color.png";
import counter from "../assets/screenshot-counter.png";
import toDo from "../assets/screenshot-to-do.png";
import birthday from "../assets/screenshot-birthday.png";
import flights from "../assets/screenshot-flights.png";
import movies from "../assets/screenshot-movies.png";
import weather from "../assets/screenshot-weather-api.png";
import guardian from "../assets/screenshot-guardian.png";
import homeexchange from "../assets/screenshot-homeexchange.png";
import country from "../assets/screenshot-country.png";
import calculatorReact from "../assets/screenshot-calculator-react.png";
import moviesReactRedux from "../assets/screenshot-movies-react.png";
import bookSearch from "../assets/screenshot-books.png";
import reactShop from "../assets/screenshot-shop.png";

const projects = [
  {
    id: 0,
    type: "Data Analysis",
    title: "The Guardian Articles Analysis",
    description:
      "An application to analyse articles from The Guardian by category, keyword, and sentiment",
    tags: ["Python", "API", "Matplotlib", "NLTK", "Streamlit"],
    site: "",
    source: "https://github.com/jimanloi/the-guardian-analysis.git",
    screenshot: guardian,
  },
  {
    id: 1,
    type: "Portfolio",
    title: "My Portfolio",
    description: "My first portfolio website",
    tags: ["HTML", "CSS", "Formspree"],
    site: "https://jimanloi.github.io/portfolio/",
    source: "https://github.com/jimanloi/portfolio",
    screenshot: portfolio,
  },
  {
    id: 2,
    type: "Web App",
    title: "Amazon Website Clone",
    description: "Cloning Amazon Website",
    tags: ["HTML", "CSS"],
    site: "https://jimanloi.github.io/amazon-clone/",
    source: "https://github.com/jimanloi/amazon-clone",
    screenshot: amazon,
  },
  {
    id: 3,
    type: "Web App",
    title: "Calculator",
    description: "Perform basic arithmetic operations",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/calculator-project/",
    source: "https://github.com/jimanloi/calculator-project",
    screenshot: calculator,
  },
  {
    id: 4,
    type: "Web App",
    title: "Random Background Color",
    description: "Click a button to change the background color randomly",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/random-background/",
    source: "https://github.com/jimanloi/random-background",
    screenshot: background,
  },
  {
    id: 5,
    type: "Web App",
    title: "Simple Counter",
    description: "Increment, decrement, and reset a counter",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/counter/",
    source: "https://github.com/jimanloi/counter",
    screenshot: counter,
  },
  {
    id: 6,
    type: "Web App",
    title: "To-do List",
    description: "A simple app to add, edit, and track tasks",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/to-do-list/",
    source: "https://github.com/jimanloi/to-do-list",
    screenshot: toDo,
  },
  {
    id: 7,
    type: "Web App",
    title: "Age Calculator",
    description: "Enter your birthdate to instantly calculate your current age",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/birthday-calculator/",
    source: "https://github.com/jimanloi/birthday-calculator",
    screenshot: birthday,
  },
  {
    id: 8,
    type: "Web App",
    title: "Flight Departures",
    description: "A sortable flight departures table",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/flight-departures/",
    source: "https://github.com/jimanloi/flight-departures",
    screenshot: flights,
  },
  {
    id: 9,
    type: "Web App",
    title: "Movie Search Application",
    description: "Search for a movie from a database instantly",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://jimanloi.github.io/movies/",
    source: "https://github.com/jimanloi/movies",
    screenshot: movies,
  },
  {
    id: 10,
    type: "Web App",
    title: "Weather Forecast",
    description:
      "10-Day weather forecast with hourly temperature from a weather API",
    tags: ["HTML", "CSS", "JavaScript", "Fetch API"],
    site: "https://jimanloi.github.io/weather-api/",
    source: "https://github.com/jimanloi/weather-api",
    screenshot: weather,
  },
  {
    id: 11,
    type: "Web App",
    title: "HomeExchange Guest Manual",
    description: "A digital welcome guide for HomeExchange guests",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Netlify",
      "Bootstrap",
    ],
    site: "https://homeexhange-ixelles-cdm.netlify.app/",
    source: "https://github.com/jimanloi/homeexhange-cdm",
    screenshot: homeexchange,
  },
  {
    id: 12,
    type: "Web App",
    title: "Country API",
    description:
      "Search for a country and instantly get its info from a public API.",
    tags: ["HTML", "CSS", "TypeScript", "Fetch API"],
    site: "https://jimanloi.github.io/country-api/",
    source: "https://github.com/jimanloi/country-api",
    screenshot: country,
  },
  {
    id: 13,
    type: "web App",
    title: "Calculator",
    description: "Perform basic arithmetic operations",
    tags: ["HTML", "CSS", "TypeScript", "React", "Vite", "Netlify"],
    site: "https://react-calculator-manloi.netlify.app/",
    source: "https://github.com/jimanloi/react-calculator",
    screenshot: calculatorReact,
  },
  {
    id: 14,
    type: "web App",
    title: "Movie Database",
    description: "Search for a movie from a database instantly",
    tags: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "API",
      "Vite",
      "Netlify",
    ],
    site: "https://react-movie-search-manloi.netlify.app/",
    source: "https://github.com/jimanloi/react-movie-search",
    screenshot: moviesReactRedux,
  },
  {
    id: 15,
    type: "web App",
    title: "Book Search",
    description: "Search for books from a database instantly",
    tags: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "API",
      "Vite",
      "Netlify",
      "Material UI",
    ],
    site: "https://books-manloi.netlify.app/",
    source: "https://github.com/jimanloi/books-search",
    screenshot: bookSearch,
  },
  {
    id: 16,
    type: "web App",
    title: "Online Shop",
    description: "Simple online shop",
    tags: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Redux Toolkit",
      "API",
      "Vite",
      "Netlify",
      "Tailwind CSS",
    ],
    site: "https://manloi-shop.netlify.app/",
    source: "https://github.com/jimanloi/manloi-shop",
    screenshot: reactShop,
  },
];

export default projects;
