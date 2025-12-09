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
  {
    id: 11,
    title: "Server-Side & API Testing Best Practices",
    mapId: "server_side_testing",
  },
  {
    id: 12,
    title: "UX & Usability Testing Best Practices",
    mapId: "ux_testing",
  },
  { id: 13, title: "Postman API Testing", mapId: "postman_testing" },
  {
    id: 14,
    title: "Best Practices for Web Testing",
    mapId: "web_testing_best_practices",
  },
  { id: 15, title: "History of Web Testing", mapId: "testing_history" },
  { id: 16, title: "Analytical Component (Pros & Cons)", mapId: "analysis" },
  { id: 17, title: "References", mapId: "references" },
  { id: 18, title: "Additional Resources", mapId: "additional_resources" },
  { id: 19, title: "Demo - ECommerce Website", mapId: "demo" },
];

export const CONTENT_MAPPING = {
  introduction: {
    title: "Introduction",
    paragraphs: [
      "Web testing is the process of evaluating a website or web application to ensure it functions correctly, securely, and performs efficiently for users. This includes checking basic features, form validation, security vulnerabilities, performance under load, and overall stability across different environments. By thoroughly testing before going live, teams prevent issues such as broken links, faulty features, or security holes from affecting real users, thereby protecting user trust and the business's reputation.",

      "Modern websites integrate multiple layers — frontend UI, backend APIs, authentication mechanisms, databases, and third-party services. The primary goal of web testing is to ensure these layers work together seamlessly. Effective testing validates functionality (correct feature behavior), security (protection from threats), and performance (fast loading and responsiveness), which are especially important for high-traffic applications such as travel or e-commerce systems.",

      "Comprehensive web testing spans several key aspects: Functionality ensures features behave as intended; Usability verifies that the site is intuitive and simple for users; Accessibility ensures the site is usable by people with disabilities and follows WCAG standards; Performance measures speed, responsiveness, and handling of peak traffic; Security ensures resistance to attacks such as XSS or SQL injection; and Compatibility checks whether the site works consistently across browsers, devices, and operating systems.",

      "By addressing all these dimensions, teams gain confidence that the application behaves reliably in real-world scenarios. Skipping or minimizing testing often leads to slow performance, data leaks, application crashes, usability issues, and expensive last-minute fixes after deployment. Web testing strengthens software quality, reduces production defects, and delivers a smoother end-to-end experience to users.",
    ],
    quiz: [
      {
        id: 1,
        question: "Which of the following is NOT a key aspect of web testing?",
        options: [
          "Functionality and accuracy of features",
          "Performance under different loads",
          "Security against vulnerabilities",
          "Adding colorful UI themes",
        ],
        answer: 3,
      },
      {
        id: 2,
        question: "What is the primary goal of web testing?",
        options: [
          "To ensure all layers of the application work together correctly",
          "To make development faster",
          "To add animations and effects",
          "To reduce the size of the codebase",
        ],
        answer: 0,
      },
      {
        id: 3,
        question:
          "True or False: Modern web applications can rely on manual testing alone.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        id: 4,
        question:
          "Which type of testing verifies that users with disabilities can use the application?",
        options: [
          "Functionality Testing",
          "Accessibility Testing",
          "Compatibility Testing",
          "Usability Testing",
        ],
        answer: 1,
      },
      {
        id: 5,
        question: "Performance testing helps determine:",
        options: [
          "Whether the UI uses modern fonts",
          "How the application behaves under expected and peak traffic",
          "Whether images look visually appealing",
          "If buttons have rounded corners",
        ],
        answer: 1,
      },
    ],

    type: "paragraphs",
    isQuizCompleted: false,
    isPreviousButtonDisabled: true,
  },

  learning_outcomes: {
    title: "Learning Outcomes",

    paragraphs: [
      "By the end of this tutorial, students will understand the complete lifecycle of web testing and how to apply testing practices to real-world applications. Along with theoretical knowledge, a demo e-commerce application is provided so learners can practice each testing technique hands-on. This demo project covers unit testing, component testing, E2E testing, performance audits, accessibility checks, and API validation, ensuring that every testing concept is demonstrated using practical, guided steps.",
    ],

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

    type: "multiple",
    isQuizCompleted: false,
  },
  web_testing_overview: {
    title: "What is Web Testing?",
    paragraphs: [
      "Web testing refers to the comprehensive process of evaluating a website or web application to ensure that it functions correctly, securely, and performs efficiently for users across different devices and environments. This includes validating basic functionality such as forms, navigation, and data flow, as well as identifying deeper issues such as performance slowdowns, security vulnerabilities, UI inconsistencies, and failures under user load.",

      "Modern web applications consist of multiple interconnected layers—frontend UI, backend APIs, databases, authentication services, and third-party integrations. The purpose of web testing is to verify that all these layers interact properly. Effective testing improves reliability, reduces production bugs, and ensures users receive a stable, intuitive, and trustworthy experience.",

      "Different types of web testing target different quality attributes. Unit Testing focuses on the smallest pieces of logic, such as individual functions or components, running quickly in isolation using mocks for dependencies. Integration Testing examines how multiple units or modules work together and helps catch mismatches between components. End-to-End (E2E) Testing validates full user workflows in a realistic environment, ensuring the entire stack works from the user’s perspective.",

      "Performance Testing evaluates loading speed, responsiveness, throughput, and stability under different levels of user traffic. Accessibility Testing ensures the application is usable by people with disabilities and adheres to WCAG guidelines. API Testing validates backend endpoints directly—checking for correct responses, security, error handling, and performance. Together, these tests form a balanced strategy for delivering a high-quality web application.",

      "These testing types collectively form the test pyramid: many fast and frequent unit tests at the base, a moderate number of integration tests in the middle, and fewer end-to-end tests at the top. Each level detects different types of issues, and together they provide strong, layered coverage across the application.",
    ],

    quiz: [
      {
        id: 1,
        question:
          "Which testing type validates complete real-user workflows across the full application stack?",
        options: [
          "Unit Testing",
          "Integration Testing",
          "End-to-End (E2E) Testing",
          "API Testing",
        ],
        answer: 2,
      },
      {
        id: 2,
        question: "What is the main limitation of unit tests?",
        options: [
          "They run too slowly",
          "They cannot verify interactions between multiple components",
          "They require a full browser environment",
          "They can only test backend logic",
        ],
        answer: 1,
      },
      {
        id: 3,
        question:
          "Which type of test focuses on verifying how multiple components or modules work together?",
        options: [
          "Unit Testing",
          "Integration Testing",
          "E2E Testing",
          "Accessibility Testing",
        ],
        answer: 1,
      },
      {
        id: 4,
        question:
          "Which testing type helps ensure the website is usable for people relying on screen readers and keyboard navigation?",
        options: [
          "Performance Testing",
          "Usability Testing",
          "Accessibility Testing",
          "API Testing",
        ],
        answer: 2,
      },
      {
        id: 5,
        question:
          "Which testing method is best suited for measuring how an application behaves under heavy load or traffic spikes?",
        options: [
          "Unit Testing",
          "Performance Testing",
          "Integration Testing",
          "E2E Testing",
        ],
        answer: 1,
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
        text: "Unit testing focuses on verifying small, isolated pieces of logic, such as functions or utility modules. These tests run fast and use mocks to replace dependencies.",
        example:
          "Validating a calculateTotal(cartItems) function returns the correct total.",
        code: `// Jest Unit Test Example
import { calculateTotal } from "../utils/cart";

test("calculates total correctly", () => {
  const cart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 1 }
  ];

  const total = calculateTotal(cart);
  expect(total).toBe(25);
});`,
      },

      {
        subtitle: "Integration Testing",
        text: "Integration testing checks how multiple components or modules work together. It catches issues in data flow, props, and service interactions.",
        example:
          "Testing LoginForm with a validation function + mocked API request.",
        code: `// RTL + Jest Integration Test Example
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

test("shows error for invalid login", () => {
  render(<LoginForm />);

  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "" }
  });

  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Email is required")).toBeInTheDocument();
});`,
      },

      {
        subtitle: "End-to-End (E2E) Testing",
        text: "E2E tests simulate real user interactions in a real browser using automation tools. They validate the whole system end-to-end.",
        example:
          "A Playwright test where a user logs in and views the product list.",
        code: `// Playwright E2E Test Example
test("User logs in and views products", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.fill("#email", "mor_2314");
  await page.fill("#password", "83r5^_");
  await page.click("button[type='submit']");

  await page.waitForSelector(".product-card");

  const items = await page.$$(".product-card");
  expect(items.length).toBeGreaterThan(0);
});`,
      },

      {
        subtitle: "Performance Testing",
        text: "Performance testing measures loading speed, render time, and overall responsiveness under different conditions.",
        example:
          "Running a Lighthouse audit to check LCP, TBT, and performance score.",
        code: `// Lighthouse CLI Example
// Run this in terminal:
lighthouse http://localhost:3000 --view

// Output includes:
// - Performance Score
// - Largest Contentful Paint
// - Opportunities to improve performance`,
      },

      {
        subtitle: "Accessibility Testing",
        text: "Accessibility testing ensures the application is usable by people with disabilities and meets WCAG guidelines.",
        example:
          "Using axe-core or Lighthouse to detect missing ARIA labels and bad contrast.",
        code: `// Jest + axe-core Example
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import HomePage from "../pages/HomePage";

test("homepage is accessible", async () => {
  const { container } = render(<HomePage />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});`,
      },

      {
        subtitle: "API Testing",
        text: "API testing checks backend endpoints for correctness, error handling, and security. It validates status codes, response bodies, and data structure.",
        example:
          "Testing FakeStoreAPI login endpoint with valid and invalid credentials.",
        code: `// Postman API Test Example
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response contains token", function () {
  const data = pm.response.json();
  pm.expect(data.token).to.exist;
});`,
      },
    ],

    quiz: [
      {
        id: 1,
        question:
          "Which testing type validates the smallest isolated pieces of logic?",
        options: [
          "Unit Testing",
          "Integration Testing",
          "E2E Testing",
          "API Testing",
        ],
        answer: 0,
      },
      {
        id: 2,
        question:
          "Testing how a component interacts with child components or services is:",
        options: [
          "Unit Testing",
          "Integration Testing",
          "Performance Testing",
          "Accessibility Testing",
        ],
        answer: 1,
      },
      {
        id: 3,
        question:
          "Which testing type launches a real browser and simulates user behavior?",
        options: [
          "Integration Testing",
          "End-to-End Testing",
          "API Testing",
          "Unit Testing",
        ],
        answer: 1,
      },
      {
        id: 4,
        question:
          "Which type of test detects issues such as missing alt text or poor color contrast?",
        options: [
          "Performance Testing",
          "Accessibility Testing",
          "API Testing",
          "Unit Testing",
        ],
        answer: 1,
      },
      {
        id: 5,
        question:
          "Which test verifies backend endpoints such as login, products, and orders?",
        options: [
          "E2E Testing",
          "API Testing",
          "Integration Testing",
          "Performance Testing",
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
        text: "Jest is a popular JavaScript testing framework used primarily for unit and integration testing. It provides a test runner, assertion library, mocking utilities, and snapshot testing in one package. Jest is zero-configuration with Create React App and is known for its fast parallel test execution.",
        example:
          "Example: Writing a Jest test that verifies a utility function such as formatPrice() or validateLogin().",
        code: `// Jest Example
test("adds numbers correctly", () => {
  expect(2 + 3).toBe(5);
});`,
      },

      {
        subtitle: "React Testing Library (RTL)",
        text: "React Testing Library helps test React components by simulating real user interactions and inspecting DOM output. Instead of testing implementation details, RTL encourages queries that mimic user behavior, such as find by text, label, or role. It is excellent for component-level integration tests.",
        example:
          "Example: Rendering a LoginForm component and checking if an error message appears when clicking the login button without entering credentials.",
        code: `// RTL Example
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

render(<LoginForm />);
fireEvent.click(screen.getByText("Login"));

expect(screen.getByText("Email is required")).toBeInTheDocument();`,
      },

      {
        subtitle: "Playwright",
        text: "Playwright is a modern end-to-end testing framework created by Microsoft. It controls Chromium, Firefox, and WebKit browsers with a single API, and features automatic waiting, cross-browser support, multi-tab testing, and powerful network interception. Playwright is ideal for validating real user flows.",
        example:
          "Example: Logging into the demo e-commerce application using Playwright and verifying that the products page loads correctly.",
        code: `// Playwright Example
test("user logs in successfully", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.fill("#email", "mor_2314");
  await page.fill("#password", "83r5^_");
  await page.click("button[type='submit']");
  await page.waitForSelector(".product-card");
});`,
      },

      {
        subtitle: "Lighthouse",
        text: "Lighthouse is Google's automated auditing tool for evaluating performance, accessibility, SEO, and best practices. It provides detailed reports with numeric scores (0–100) and suggestions for improvement. Lighthouse helps identify issues such as slow rendering, large bundle sizes, unused scripts, and accessibility violations.",
        example:
          "Example: Running Lighthouse in Chrome DevTools to audit the performance and accessibility of the homepage.",
        code: `// Terminal Lighthouse Example
lighthouse http://localhost:3000 --view`,
      },

      {
        subtitle: "Postman",
        text: "Postman is one of the most widely used tools for API development and testing. It allows developers to send HTTP requests, inspect responses, write assertions using JavaScript, and group endpoints into collections. Postman also supports test automation via its CLI runner (Newman).",
        example:
          "Example: Sending a POST request to https://fakestoreapi.com/auth/login and verifying that the response includes a valid JWT token.",
        code: `// Postman Test Example
pm.test("Status is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Token exists", function () {
  const data = pm.response.json();
  pm.expect(data.token).to.exist;
});`,
      },

      {
        subtitle: "Selenium (Mention)",
        text: "Selenium WebDriver is the classic browser automation tool that has been used for over a decade. It enables cross-browser testing using a standardized protocol and is still common in enterprise QA environments. Although Playwright and Cypress offer more modern developer-friendly workflows, Selenium remains important historically and in large-scale automated QA systems.",
        example:
          "Example: A Selenium WebDriver script opening Chrome and navigating to a webpage.",
        code: `// Selenium Example (JavaScript)
const { Builder } = require("selenium-webdriver");
let driver = new Builder().forBrowser("chrome").build();
await driver.get("http://google.com");`,
      },
    ],

    quiz: [
      {
        id: 1,
        question:
          "Which tool is primarily used for end-to-end browser automation?",
        options: ["Jest", "React Testing Library", "Playwright", "Postman"],
        answer: 2,
      },
      {
        id: 2,
        question:
          "Which tool focuses on testing API responses and backend validation?",
        options: ["Lighthouse", "Jest", "Postman", "Playwright"],
        answer: 2,
      },
      {
        id: 3,
        question: "Lighthouse is mainly used for evaluating:",
        options: [
          "Component Rendering",
          "API Latency",
          "Performance & Accessibility",
          "Authentication Logic",
        ],
        answer: 2,
      },
      {
        id: 4,
        question:
          "Which tool simulates real user behavior in the DOM without using a browser?",
        options: ["Playwright", "RTL", "Postman", "Selenium"],
        answer: 1,
      },
    ],

    type: "sections",
    isQuizCompleted: false,
  },

  react_setup: {
    title: "React App Setup Instructions",

    paragraphs: [
      "React is a JavaScript library for building fast, interactive user interfaces. It allows developers to create reusable UI components and manage updates efficiently using a virtual DOM. Modern web applications heavily rely on React for building scalable front-end architectures.",

      "To set up React locally, you first need Node.js and npm. On macOS, install Node using the installer from nodejs.org or run `brew install node` with Homebrew. On Windows, download and install Node.js from the official website. Once installed, you can verify the setup using `node -v` and `npm -v`.",

      "To create a new React application, run: `npx create-react-app webtesting-app`. This generates a fully configured React project with built-in support for Jest and React Testing Library. Move into the project directory using `cd webtesting-app` and run `npm install` if needed.",

      "Start the development server with `npm start`. This launches the app at http://localhost:3000. Any saved changes will automatically refresh in the browser. This running app will be used later for E2E tests with Playwright.",

      "React’s project structure includes key folders such as `src/` (components, pages, hooks, tests), `public/` (static files), and the `package.json` configuration file that lists dependencies and npm scripts. The `src` folder is where most development and testing takes place.",
    ],

    example: {
      description:
        "Basic React folder structure after running Create React App:",
      code: `webtesting-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── App.test.js
│   └── components/
├── package.json
└── README.md`,
    },

    code: {
      description: "Commands used to set up React on macOS & Windows:",
      snippet: `# Check Node & npm versions
node -v
npm -v

# Create a new React app
npx create-react-app webtesting-app

# Navigate into the project
cd webtesting-app

# Install dependencies
npm install

# Start development server
npm start`,
    },

    links: [
      {
        label: "Official React Documentation",
        url: "https://react.dev/learn",
      },
      {
        label: "Create React App Guide",
        url: "https://create-react-app.dev/docs/getting-started/",
      },
    ],

    quiz: [
      {
        question: "Which command creates a new React application?",
        options: [
          "npm create react-app myapp",
          "npx create-react-app myapp",
          "react init myapp",
          "npm start react",
        ],
        answer: 1,
      },
      {
        question: "Which folder contains components and test files?",
        options: ["public/", "src/", "config/", "node_modules/"],
        answer: 1,
      },
    ],

    type: "paragraphs",
    isQuizCompleted: false,
  },
  jest_unit_testing: {
  title: "Jest Unit Testing",

  paragraphs: [
    "Jest is the default testing framework included with most React applications. It is used to test small, isolated pieces of logic such as functions, utilities, and simple component behavior.",
    "Jest provides key functions like `test()` to define a test case and `expect()` to make assertions. Matchers such as `toBe()`, `toEqual()`, `toBeTruthy()`, and `toBeInTheDocument()` help verify behavior accurately.",
    "Unit tests should run fast and remain isolated from live APIs, databases, or external services. Jest uses mock functions (`jest.fn()`) or module mocks to simulate real dependencies.",
    "Unit testing helps identify bugs early and ensures that changes to the codebase do not break existing functionality, making development safer and more predictable."
  ],

  example: {
    description: "Simple Jest test for a function that adds two numbers:",
    code: `// sum.js
export function sum(a, b) {
  return a + b;
}

// sum.test.js
import { sum } from "./sum";

test("adds two numbers correctly", () => {
  expect(sum(2, 3)).toBe(5);
});`
  },

  code: {
    description: "Basic Jest test structure:",
    snippet: `test("description of the test", () => {
  // Arrange: setup values or mocks
  // Act: execute the function being tested
  // Assert: verify the output
  expect(actualValue).toBe(expectedValue);
});`
  },

  quiz: [
    {
      question: "What is the purpose of the `expect()` function in Jest?",
      options: [
        "To start the server",
        "To run multiple tests together",
        "To check if the output matches the expected value",
        "To mock external APIs"
      ],
      answer: 2
    },
    {
      question: "In the example provided, what should `sum(2, 3)` return?",
      options: ["4", "6", "5", "Undefined"],
      answer: 2
    },
    {
      question: "Which Jest function defines a test case?",
      options: ["define()", "run()", "test()", "mock()"],
      answer: 2
    }
  ],

  type: "paragraphs",
  isQuizCompleted: false
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
