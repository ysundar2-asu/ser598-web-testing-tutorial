export const TEAM_MEMEBERS_LIST = [
  {
    id: 1,
    name: "Yashwanth Sundhar Sundaramoorthy",
    asuID: "1233862554",
  },
  {
    id: 2,
    name: "Tejeshwar Moongilmada Krishnaswamy",
    asuID: "1233862554",
  },
  {
    id: 3,
    name: "Sai Krishnan",
    asuID: "1233862554",
  },
];

export const TUTORIAL_CONTENT_HEADINGS = [
  { id: 1, title: "Introduction", mapId: "introduction" },
  { id: 2, title: "Learning Outcomes", mapId: "learning_outcomes" },
  { id: 3, title: "What is Web Testing?", mapId: "web_testing_overview" },
  { id: 4, title: "Types of Web Testing", mapId: "testing_types" },
  { id: 5, title: "Tools Overview", mapId: "tools_overview" },
  { id: 6, title: "React App Setup Instructions", mapId: "react_setup" },
  { id: 7, title: "Jest Unit Testing", mapId: "jest_unit_testing" },
  {
    id: 8,
    title: "React Testing Library (RTL)",
    mapId: "rtl_component_testing",
  },
  {
    id: 9,
    title: "Playwright End-to-End Testing",
    mapId: "playwright_testing",
  },
  {
    id: 10,
    title: "Lighthouse Performance & Accessibility",
    mapId: "lighthouse_testing",
  },
  { id: 11, title: "Postman API Testing", mapId: "postman_testing" },
  { id: 12, title: "History of Web Testing", mapId: "testing_history" },
  { id: 13, title: "Analytical Component (Pros & Cons)", mapId: "analysis" },
  { id: 14, title: "References", mapId: "references" },
  { id: 15, title: "Additional Resources", mapId: "additional_resources" },
  { id: 16, title: "Demo - ECommerce Website", mapId: "demo" },
];

export const CONTENT_MAPPING = {
  introduction: {
    title: "Introduction",
    paragraphs: [
      "Modern web applications are complex, dynamic, and built with multiple layers of technology, including client-side JavaScript, backend APIs, authentication flows, and browser rendering pipelines.",
      "Web testing ensures that these applications behave correctly, remain reliable under different conditions, perform efficiently, and offer a usable experience to all kinds of users.",
      "In the context of SER598, web testing reinforces core concepts such as HTTP communication, state management, rendering behavior, accessibility, and performance optimization.",
    ],
    quiz: [
      {
        question: "Why do we test web applications?",
        options: [
          "To verify functionality, performance, and reliability",
          "To make the UI colorful",
          "To reduce developer effort",
          "To avoid writing comments",
        ],
        answer: 0,
        id: 1,
      },
      {
        question:
          "True or False: Manual testing alone is enough for modern applications.",
        options: ["True", "False"],
        answer: 1,
        id: 2,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
    isPreviousButtonDisabled: true,
  },

  learning_outcomes: {
    title: "Learning Outcomes",
    bullets: [
      "Explain the purpose and importance of web testing.",
      "Differentiate between unit, integration, E2E, performance, accessibility, and API testing.",
      "Set up and configure a React project for testing.",
      "Write unit tests using Jest.",
      "Test React components using React Testing Library.",
      "Run end-to-end tests using Playwright.",
      "Perform performance & accessibility audits with Lighthouse.",
      "Validate backend APIs using Postman.",
      "Analyze strengths and limitations of modern testing tools.",
    ],
    quiz: [
      {
        question:
          "Which of the following is a learning outcome of this tutorial?",
        options: [
          "Understand how to deploy Kubernetes clusters",
          "Write and execute tests using Jest and Playwright",
          "Build a game using Unity",
          "Design a backend using Java",
        ],
        answer: 1,
      },
    ],
    type: "bullets",
  },

  web_testing_overview: {
    title: "What is Web Testing?",
    paragraphs: [
      "Web testing is the process of verifying that a web application works as intended across functionality, performance, security, usability, and accessibility dimensions.",
      "Testing ensures correctness, stability, and user satisfaction by detecting errors early and preventing regressions.",
      "Modern web testing covers several layers — from individual functions to full user flows across browsers.",
    ],
    quiz: [
      {
        question: "Web testing helps ensure:",
        options: [
          "Correctness and stability",
          "Better color themes",
          "More animations",
          "The website always uses dark mode",
        ],
        answer: 0,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  testing_types: {
    title: "Types of Web Testing",
    sections: [
      {
        subtitle: "Unit Testing",
        text: "Tests small, isolated pieces of logic such as functions or simple UI behavior using tools like Jest.",
      },
      {
        subtitle: "Component Testing",
        text: "Tests behavior of UI components using React Testing Library, simulating user actions.",
      },
      {
        subtitle: "End-to-End (E2E) Testing",
        text: "Simulates real user flows in a real browser using Playwright.",
      },
      {
        subtitle: "Performance Testing",
        text: "Measures loading speed and runtime performance using Lighthouse.",
      },
      {
        subtitle: "Accessibility Testing",
        text: "Ensures content is accessible to users with disabilities, checked using Lighthouse or axe-core.",
      },
      {
        subtitle: "API Testing",
        text: "Checks API response correctness and error handling using Postman.",
      },
    ],
    quiz: [
      {
        question:
          "Which type of testing simulates a real user in a real browser?",
        options: [
          "Unit Testing",
          "Component Testing",
          "End-to-End Testing",
          "API Testing",
        ],
        answer: 2,
      },
      {
        question: "Which testing type focuses on checking API responses?",
        options: [
          "Performance Testing",
          "API Testing",
          "Accessibility Testing",
          "Visual Testing",
        ],
        answer: 1,
      },
    ],
    type: "sections",
    isQuizCompleted: false,
  },

  tools_overview: {
    title: "Tools Overview",
    sections: [
      {
        subtitle: "Jest",
        text: "Jest is a fast JavaScript test runner used for unit and integration testing.",
      },
      {
        subtitle: "React Testing Library",
        text: "RTL helps test components from the user's perspective without focusing on implementation details.",
      },
      {
        subtitle: "Playwright",
        text: "Playwright runs end-to-end tests in Chromium, Firefox, and WebKit with auto-waiting features.",
      },
      {
        subtitle: "Lighthouse",
        text: "Lighthouse measures performance, accessibility, SEO, and best practices from within Chrome DevTools.",
      },
      {
        subtitle: "Postman",
        text: "Postman helps send API requests and write assertions to verify backend behavior.",
      },
    ],
    quiz: [
      {
        question: "Which tool do we use for E2E browser automation?",
        options: ["Jest", "React Testing Library", "Playwright", "Postman"],
        answer: 2,
      },
    ],
    type: "sections",
    isQuizCompleted: false,
  },

  react_setup: {
    title: "React App Setup Instructions",
    paragraphs: [
      "Clone the repository and navigate to the `webtesting-app` directory.",
      "Run `npm install` to install dependencies.",
      "Start the application using `npm start`.",
      "Understand the folder structure: components, pages, tests, and utilities.",
    ],
    quiz: [
      {
        question: "Which command installs dependencies in a React project?",
        options: ["npm build", "npm install", "npm compile", "npm create"],
        answer: 1,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  jest_unit_testing: {
    title: "Jest Unit Testing",
    paragraphs: [
      "Jest provides functions such as `test()`, `expect()`, and matchers to validate logic.",
      "Unit tests should run fast and independently of external APIs.",
      "Snapshots and mock functions help isolate logic and test behavior.",
    ],
    quiz: [
      {
        question: "Which Jest function is used for making assertions?",
        options: ["assert()", "expect()", "verify()", "check()"],
        answer: 1,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  rtl_component_testing: {
    title: "React Testing Library (RTL)",
    paragraphs: [
      "RTL focuses on testing components the way users interact with them.",
      "Queries such as `getByText`, `getByRole`, and `getByLabelText` simulate accessibility-based selection.",
      "RTL avoids testing implementation details and ensures future-proof tests.",
    ],
    quiz: [
      {
        question: "Which RTL function is used to render a component?",
        options: ["mount()", "display()", "render()", "inject()"],
        answer: 2,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  playwright_testing: {
    title: "Playwright End-to-End Testing",
    paragraphs: [
      "Playwright automates browsers to simulate real user flows such as login, navigation, and form submission.",
      "`page.goto()`, `page.click()`, and `page.fill()` are commonly used APIs.",
      "Playwright supports auto-waiting, screenshots, videos, and parallel test execution.",
    ],
    quiz: [
      {
        question: "Which command opens a URL in Playwright?",
        options: ["page.open()", "page.visit()", "page.goto()", "page.load()"],
        answer: 2,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  lighthouse_testing: {
    title: "Lighthouse Performance & Accessibility",
    paragraphs: [
      "Lighthouse provides metrics such as Largest Contentful Paint (LCP), Total Blocking Time (TBT), and First Input Delay (FID).",
      "It also scores accessibility by checking labels, contrast, ARIA attributes, and keyboard usability.",
      "Performance and accessibility directly impact user satisfaction.",
    ],
    quiz: [
      {
        question:
          "Which Lighthouse metric measures loading speed of main content?",
        options: ["FID", "CLS", "LCP", "TBT"],
        answer: 2,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  postman_testing: {
    title: "Postman API Testing",
    paragraphs: [
      "Postman allows you to send GET, POST, PUT, and DELETE requests to APIs.",
      "You can write JavaScript tests using `pm.test()` to validate status codes and responses.",
      "Collections organize API calls into reusable groups.",
    ],
    quiz: [
      {
        question: "Which HTTP method retrieves data?",
        options: ["POST", "GET", "DELETE", "PATCH"],
        answer: 1,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  testing_history: {
    title: "History of Web Testing",
    paragraphs: [
      "Early web testing was manual and time-consuming.",
      "Selenium revolutionized automated browser testing in the mid-2000s.",
      "W3C WebDriver standardized browser automation.",
      "Modern frameworks like Playwright and Cypress improve reliability and developer experience.",
    ],
    quiz: [
      {
        question:
          "Which tool was one of the earliest browser automation frameworks?",
        options: ["Jest", "Lighthouse", "Selenium", "Postman"],
        answer: 2,
      },
    ],
    type: "paragraphs",
    isQuizCompleted: false,
  },

  analysis: {
    title: "Analytical Component (Pros & Cons)",
    sections: [
      {
        subtitle: "Strengths",
        text: "Automated tests improve reliability, speed up development, ensure accessibility, and support CI/CD pipelines.",
      },
      {
        subtitle: "Weaknesses",
        text: "Tests can be flaky, expensive to maintain, and require learning multiple tools.",
      },
      {
        subtitle: "Future Directions",
        text: "AI-powered test generation, self-healing selectors, and real-user monitoring.",
      },
    ],
    quiz: [
      {
        question: "Which is a disadvantage of E2E tests?",
        options: [
          "They are extremely fast",
          "They need no setup",
          "They can be flaky",
          "They replace all unit tests",
        ],
        answer: 2,
      },
    ],
    type: "sections",
    isQuizCompleted: false,
  },

  references: {
    title: "References",
    bullets: [
      "Jest Official Documentation",
      "React Testing Library Documentation",
      "Playwright Official Docs",
      "Chrome DevTools Lighthouse Guide",
      "Postman Learning Center",
      "WCAG Accessibility Standards",
    ],
    quiz: [],
    type: "bullets",
  },

  additional_resources: {
    title: "Additional Resources",
    bullets: [
      "MDN Web Docs",
      "Google Web.dev Performance Articles",
      "Playwright Video Tutorials",
      "Jest Testing Examples",
      "Public Postman API Collections",
    ],
    quiz: [],
    type: "bullets",
  },
  demo: {
    title: "Demo - ECommerce Website",
    type: "component",
  },
};

export const GET_PRODUCTS_API = "https://fakestoreapi.com/products";
export const GET_SINGLE_PRODUCT_API = `https://fakestoreapi.com/products/{productId}`;
export const AUTH_USER_API = "https://fakestoreapi.com/auth/login";
export const ADD_TO_CART_API = "https://fakestoreapi.com/carts";
export const GET_CART_API = "https://fakestoreapi.com/carts/{cartId}";

export const PRODUCT_CATEGORIES = [
  { id: 0, label: "All", value: "all" },
  { id: 1, label: "Men's Clothing", value: "men's clothing" },
  { id: 2, label: "Women's Clothing", value: "women's clothing" },
  { id: 3, label: "Jewelery", value: "jewelery" },
  { id: 4, label: "Electronics", value: "electronics" },
];
