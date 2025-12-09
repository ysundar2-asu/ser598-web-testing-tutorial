export const TEAM_MEMEBERS_LIST = [
  {
    id: 1,
    name: "Yashwanth Sundhar Sundaramoorthy",
    asuID: "ysundar2@asu.edu",
    imgAlt: "YS"
  },
  {
    id: 2,
    name: "Tejeshwar Moongilmada Krishnaswamy",
    asuID: "tmoongil@asu.edu",
    imgAlt: "TM"
  },
  {
    id: 3,
    name: "Sai Krishnan",
    asuID: "skris179@asu.edu",
    imgAlt: "SK"
  },
];

export const TUTORIAL_CONTENT_HEADINGS = [
  { id: 1, title: "Introduction", mapId: "introduction" },
  { id: 2, title: "Learning Outcomes", mapId: "learning_outcomes" },
  { id: 3, title: "What is Web Testing?", mapId: "web_testing_overview" },
  { id: 4, title: "Types of Web Testing", mapId: "testing_types" },
  { id: 5, title: "Tools Overview", mapId: "tools_overview" },
  { id: 6, title: "React App Setup Instructions", mapId: "react_setup" },
  {
    id: 7,
    title: "Jest Unit Testing & React Testing Library (RTL)",
    mapId: "jest_unit_testing",
  },

  {
    id: 8,
    title: "Playwright End-to-End Testing",
    mapId: "playwright_testing",
  },
  {
    id: 9,
    title: "Lighthouse Performance & Accessibility",
    mapId: "lighthouse_testing",
  },
  {
    id: 10,
    title: "Server-Side & API Testing Best Practices",
    mapId: "server_side_testing",
  },
  {
    id: 11,
    title: "Best Practices for Web Testing",
    mapId: "web_testing_best_practices",
  },
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
      "Web testing is the process of evaluating a website or web application to ensure it functions correctly, securely, and performs efficiently for users. This includes checking basic features, form validation, security vulnerabilities, performance under load, and overall stability across different environments. By thoroughly testing before going live, teams prevent issues such as broken links, faulty features, or security holes from affecting real users, thereby protecting user trust and the business's reputation.",

      "Modern websites integrate multiple layers — frontend UI, backend APIs, authentication mechanisms, databases, and third-party services. The primary goal of web testing is to ensure these layers work together seamlessly. Effective testing validates functionality (correct feature behavior), security (protection from threats), and performance (fast loading and responsiveness), which are especially important for high-traffic applications such as travel applications or e-commerce systems.",

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
        subtitle: "Unit Testing (Client-Side)",
        text: "In this tutorial, unit tests focus on small, isolated behaviors of our React e-commerce UI. Using Jest together with React Testing Library, we verify that individual pieces of UI render correctly (like the header, login button, or cart count) without depending on real APIs or complex flows. These tests are fast and give quick feedback during development.",
        example:
          "Checking that the HomePage renders the main title 'ECommerce Website' when the app loads.",
        code: `// Jest + RTL Unit Test Example (HomePage header)
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders e-commerce header with title", () => {
  render(<HomePage />);
  expect(screen.getByText("ECommerce Website")).toBeInTheDocument();
});`,
      },

      {
        subtitle: "Integration / Component Testing (Client-Side)",
        text: "Integration tests verify how multiple parts of the UI work together: components, state, and services. In our e-commerce app, we mock the fetch() API and test how HomePage loads products, opens the login modal, and toggles the cart drawer. These tests still run in Jest/RTL, but they exercise real data flow inside the component instead of just one tiny function.",
        example:
          "Rendering HomePage, mocking the /products API, and asserting that products appear in the UI after the data is fetched.",
        code: `// Jest + RTL Integration Test Example (HomePage + mocked fetch)
import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    image: "https://example.com/product1.jpg",
    category: "men's clothing",
    rating: { rate: 4.0, count: 50 },
    description: "Product 1 description",
  },
];

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes("products")) {
      return Promise.resolve({
        json: () => Promise.resolve(mockProducts),
      });
    }
    return Promise.reject(new Error("Unknown API"));
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("fetches and displays products on mount", async () => {
  render(<HomePage />);

  await waitFor(() => {
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
  });
});`,
      },

      {
        subtitle: "End-to-End (E2E) Testing",
        text: "E2E testing uses a real browser to simulate a user journey through the entire system. For the e-commerce demo, a Playwright test can open the deployed site, perform a login, and verify that product cards render on the home page. This validates that frontend, backend, routing, and APIs all work together.",
        example:
          "Using Playwright to open the site, log in with valid credentials, and confirm that at least one product card is visible.",
        code: `// Playwright E2E Test Example (login + products)
test("user logs in and sees product list", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Open login modal
  await page.click("text=Login");

  // Fill credentials
  await page.fill("input[placeholder='Username']", "mor_2314");
  await page.fill("input[placeholder='Password']", "83r5^_");

  await page.click("button[type='submit']");

  // Wait for products to load
  await page.waitForSelector(".product-card");

  const items = await page.$$(".product-card");
  expect(items.length).toBeGreaterThan(0);
});`,
      },

      {
        subtitle: "Performance Testing",
        text: "Performance tests measure how fast the e-commerce page loads and how responsive it feels. We use Lighthouse to audit metrics such as Largest Contentful Paint (LCP), Total Blocking Time (TBT), and overall Performance score. This helps identify heavy images, large bundles, and render bottlenecks.",
        example:
          "Running Lighthouse against the Home page and inspecting the performance report for improvement opportunities.",
        code: `// Lighthouse CLI Example (run from terminal)
lighthouse https://your-deployed-store-url.com --view

// The report includes:
// - Performance Score
// - Largest Contentful Paint (LCP)
// - Total Blocking Time (TBT)
// - Suggestions to optimize JS, images, and caching`,
      },

      {
        subtitle: "API Testing (Server-Side with Postman / Newman)",
        text: "API tests hit the backend endpoints directly to verify status codes, response bodies, and error handling. For the e-commerce APIs (such as login, products, and cart), we create Postman requests and assertions, then run them in CI using Newman. This validates the server independently of the React UI.",
        example:
          "Using Postman to test the /auth/login endpoint returns 200 and contains a token, and running the same collection with Newman in the terminal.",
        code: `// Postman Test Script Example (inside a request)
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
          "Which testing type, as used in our e-commerce app, verifies small isolated behaviors like rendering the main header?",
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
          "Mocking fetch() and checking that HomePage loads and shows products is an example of:",
        options: [
          "Unit Testing",
          "Integration / Component Testing",
          "Performance Testing",
          "Accessibility Testing",
        ],
        answer: 1,
      },
      {
        id: 3,
        question:
          "Which testing type launches a real browser (e.g., Playwright) and simulates a full login and browsing flow?",
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
          "Which test type checks for issues like missing alt text on product images or poor color contrast?",
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
          "Running a Postman collection with Newman to verify /auth/login and /products endpoints is:",
        options: [
          "E2E Testing",
          "API Testing",
          "Integration Testing",
          "Unit Testing",
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
        text: "Jest is a powerful JavaScript testing framework used mainly for unit and integration testing in React applications. It provides a built-in test runner, mocking utilities, snapshot testing, and fast parallel execution. Jest helps verify small pieces of logic such as utility functions, validation rules, and component behavior without relying on external APIs.",
        example:
          "Used to test isolated functions like calculateTotal() or to verify that the homepage title renders correctly.",
      },

      {
        subtitle: "React Testing Library (RTL)",
        text: "React Testing Library is a lightweight testing tool that focuses on testing React components the way a real user interacts with the UI. Instead of testing internal implementation, RTL emphasizes user-centric queries (e.g., finding elements by text, role, or label). It is ideal for testing component-level integration, form validation, and UI behavior.",
        example:
          "Used to test the Login form or confirmation popups by checking that validation messages appear when fields are empty.",
      },

      {
        subtitle: "Playwright",
        text: "Playwright is a modern end-to-end testing framework that automates real browsers such as Chromium, Firefox, and WebKit. It is designed for full user-flow testing—logging in, browsing products, adding items to cart, etc. Playwright includes auto-waiting, cross-browser support, device emulation, and network interception.",
        example:
          "Used to simulate a real user logging into the e-commerce app and verifying that product listings appear.",
      },

      {
        subtitle: "Lighthouse",
        text: "Lighthouse is Google's automated auditing tool for evaluating web performance, accessibility, SEO, and best practices. It generates scores from 0–100 and suggests improvements such as reducing bundle sizes, optimizing images, and fixing accessibility issues.",
        example:
          "Used to measure homepage performance and detect issues like slow load times or missing alt text.",
      },

      {
        subtitle: "Postman",
        text: "Postman is a widely used API testing and debugging tool that allows developers to send HTTP requests, inspect responses, write automated tests, and organize endpoints into collections. Postman is ideal for validating backend APIs before integrating them into the frontend.",
        example:
          "Used to test FakeStoreAPI login and product endpoints, ensuring correct data and status codes.",
      },
    ],

    quiz: [
      {
        id: 1,
        question:
          "Which tool is primarily used for full end-to-end browser automation?",
        options: ["Jest", "React Testing Library", "Playwright", "Postman"],
        answer: 2,
      },
      {
        id: 2,
        question:
          "Which tool is best suited for testing API endpoints and backend responses?",
        options: ["Lighthouse", "Jest", "Postman", "Playwright"],
        answer: 2,
      },
      {
        id: 3,
        question: "Lighthouse is mainly used to evaluate:",
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
          "Which tool tests React UI behavior by simulating user interactions without a real browser?",
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
      "React is a JavaScript library for building fast, interactive user interfaces. It allows developers to create reusable UI components and efficiently update the UI using a virtual DOM system. Instead of updating the real browser DOM directly (which is slow), React creates a lightweight copy called the virtual DOM. When state changes, React compares the new virtual DOM with the previous one through a process called 'reconciliation' and updates only the parts of the real DOM that actually changed. This makes React extremely fast and efficient for large, dynamic web applications.",

      "To set up React locally, you first need Node.js and npm. On macOS, install Node using the installer from nodejs.org or run `brew install node` with Homebrew. On Windows, download and install Node.js from the official website. Once installed, you can verify the setup using `node -v` and `npm -v`.",

      "To create a new React application, run: `npx create-react-app webtesting-app`. This generates a fully configured React project with built-in support for Jest and React Testing Library. Move into the project directory using `cd webtesting-app` and run `npm install` if needed.",

      "Start the development server with `npm start`. This launches the app at http://localhost:3000. Any saved changes will automatically refresh in the browser. This running app will be used later for E2E tests with Playwright.",

      "React’s project structure includes key folders such as `src/` (components, pages, hooks, tests), `public/` (static files), and the `package.json` file. The `package.json` file defines your project's dependencies, development tools such as Jest and React Testing Library, and npm scripts like `start`, `test`, and `build`. It ensures consistent package versions across environments and allows tools like Playwright, ESLint, and Babel to integrate with the project seamlessly. The `src` folder is where most development and testing takes place.",
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
    title: "Jest Unit Testing & React Testing Library (RTL)",

    paragraphs: [
      "In this project, Jest and React Testing Library (RTL) are used together to test the client-side behavior of the e-commerce application. Jest provides the test runner, assertion functions, and mocking utilities, while RTL focuses on rendering React components and interacting with them the way a real user would.",
      "Jest offers core primitives like `describe()`, `test()`, and `expect()` along with matchers such as `toBe()`, `toEqual()`, and `toBeInTheDocument()`. These are used to verify that the UI renders correctly, API calls are mocked, and component logic behaves as expected. RTL provides helpers like `render()`, `screen`, `fireEvent`, and `waitFor()` to simulate user actions and wait for asynchronous UI updates.",
      "In the HomePage tests, `global.fetch` is mocked using Jest to return fake products and a fake login token. This allows the tests to run without calling real backend APIs, while still validating that the component correctly renders products, opens the login modal, and updates the cart UI based on state.",
      "By combining Jest and RTL, we achieve fast, repeatable, and realistic client-side tests that validate both the underlying logic and the actual user-facing UI of the e-commerce demo.",
    ],

    sections: [
      {
        subtitle: "Running Unit Tests",
        text: "To run the Jest unit tests and generate the test results shown below, use the following commands in your terminal. Jest provides multiple options for running tests, including watch mode for development and coverage reports for tracking test completeness.",
        example: `# Navigate to the project directory
cd webtesting-app

# Run all unit tests
npm test

# Run tests with coverage report
npm test -- --coverage

# Run tests in watch mode (auto-rerun on file changes)
npm test -- --watch

# Run a specific test file
npm test HomePage.test.js`,
      },
      {
        subtitle: "Unit Test Results",
        text: "Below are the test results from our Jest unit tests for the HomePage and ProductCard components. These tests validate component rendering, user interactions, state management, and API mocking.",
        images: [
          {
            src: require("../Images/HomePageTest.jpg"),
            alt: "HomePage component test results",
            caption:
              "HomePage Test Results - All tests passing with proper mocking",
          },
          {
            src: require("../Images/ProductCardTest.jpg"),
            alt: "ProductCard component test results",
            caption: "ProductCard Test Results - Component behavior validated",
          },
        ],
      },
    ],

    example: {
      description:
        "Combined Jest + RTL tests for the HomePage e-commerce component:",
      code: `import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

// Mock fetch API
const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    price: 19.99,
    image: 'https://example.com/product1.jpg',
    category: "men's clothing",
    rating: { rate: 4.0, count: 50 },
    description: 'Product 1 description',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 29.99,
    image: 'https://example.com/product2.jpg',
    category: 'electronics',
    rating: { rate: 4.5, count: 100 },
    description: 'Product 2 description',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 39.99,
    image: 'https://example.com/product3.jpg',
    category: "women's clothing",
    rating: { rate: 3.5, count: 75 },
    description: 'Product 3 description',
  },
];

beforeEach(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes('products')) {
      return Promise.resolve({
        json: () => Promise.resolve(mockProducts),
      });
    }
    if (url.includes('auth/login')) {
      return Promise.resolve({
        json: () => Promise.resolve({ token: 'fake-token' }),
      });
    }
    return Promise.reject(new Error('Unknown API'));
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('HomePage Component', () => {
  test('renders e-commerce header with title', () => {
    render(<HomePage />);
    expect(screen.getByText('ECommerce Website')).toBeInTheDocument();
  });

  test('renders Login button when user is not logged in', () => {
    render(<HomePage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('renders Cart button with item count', () => {
    render(<HomePage />);
    expect(screen.getByText('Cart (0)')).toBeInTheDocument();
  });

  test('fetches and displays products on mount', async () => {
    render(<HomePage />);
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });
  });

  test('opens login modal when Login button is clicked', () => {
    render(<HomePage />);
    fireEvent.click(screen.getByText('Login'));

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('opens cart drawer when Cart button is clicked', () => {
    render(<HomePage />);

    fireEvent.click(screen.getByText('Cart (0)'));

    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  test('displays product prices correctly', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText('$19.99')).toBeInTheDocument();
    });
  });
});`,
    },

    code: {
      description: "Typical pattern for a Jest + RTL component test:",
      snippet: `import { render, screen, fireEvent } from "@testing-library/react";
import SomeComponent from "./SomeComponent";

test("renders and responds to user interaction", () => {
  // Arrange: render component
  render(<SomeComponent />);

  // Act: simulate a user click
  fireEvent.click(screen.getByText("Submit"));

  // Assert: check for expected UI change
  expect(screen.getByText("Submitted")).toBeInTheDocument();
});`,
    },

    quiz: [
      {
        question:
          "What role does React Testing Library play in the Jest + RTL setup?",
        options: [
          "It runs the Node.js server",
          "It renders React components and simulates user interactions",
          "It manages database migrations",
          "It deploys the app to production",
        ],
        answer: 1,
      },
      {
        question:
          "In the HomePage tests, why is `global.fetch` mocked with Jest?",
        options: [
          "To speed up CSS loading",
          "To avoid calling real APIs and return predictable test data",
          "To enable Playwright",
          "To disable React strict mode",
        ],
        answer: 1,
      },
      {
        question:
          "Which helper from RTL is used to find elements in the rendered DOM?",
        options: ["render()", "screen", "mock()", "describe()"],
        answer: 1,
      },
      {
        question:
          "Which Jest function is used to group related tests for a component?",
        options: ["group()", "bundle()", "describe()", "suite()"],
        answer: 2,
      },
    ],

    type: "multiple",
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
      "Playwright is a modern end-to-end (E2E) testing framework created by Microsoft. It automates real browsers such as Chromium, Firefox, and WebKit, allowing testers to simulate real-world user interactions across multiple devices and screen sizes.",
      "Unlike unit or integration tests, Playwright validates the entire application workflow from UI rendering to API communication exactly the way a real user experiences it. This makes Playwright ideal for testing login flows, navigation, form submissions, product browsing, and complete user journeys.",
      "Playwright supports features like auto-waiting (reducing flaky tests), parallel execution, screenshots, network interception, tracing, and video recordings. These capabilities make debugging easier and provide high confidence that the application works end-to-end.",
      "In this tutorial, Playwright is used to test the Demo E-Commerce Website by launching the browser, navigating to the application, verifying UI elements, and ensuring that product data loads correctly from the backend.",
    ],

    sections: [
      {
        subtitle: "Running E2E Tests",
        text: "To run the Playwright end-to-end tests and generate the test results shown below, use the following commands. Playwright offers different modes: headless mode for CI/CD pipelines, UI mode for interactive debugging, and headed mode to watch tests execute in real browsers.",
        example: `# Navigate to the project directory
cd webtesting-app

# Run E2E tests in headless mode (default, fastest)
npm run test:e2e

# Run E2E tests with UI mode (recommended for debugging)
npm run test:e2e:ui

# Run specific test file
npx playwright test e2e-tests/ecommerce.spec.js

# Run tests and generate HTML report
npx playwright test --reporter=html`,
      },
      {
        subtitle: "E2E Test Results",
        text: "Below are the Playwright end-to-end test results showing all user flows validated in Chrome browser. These tests ensure the entire application works correctly from the user's perspective.",
        image: require("../Images/E2ETest.jpg"),
        imageAlt: "Playwright E2E test results",
        imageCaption:
          "Playwright E2E Test Results - All user workflows passing",
      },
    ],

    example: {
      description:
        "Complete Playwright E2E test suite for the HomePage component, demonstrating browser automation, user interaction simulation, and comprehensive UI validation:",
      code: `const { test, expect } = require('@playwright/test');

test.describe('HomePage E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Navigate to the Demo - ECommerce Website section via sidebar
    await page.click('text=Demo - ECommerce Website');

    // Wait for products to load from API
    await page.waitForSelector('.productCard', { timeout: 15000 });
  });

  // Test 1: Page loads with header
  test('should display the eCommerce header', async ({ page }) => {
    await expect(page.locator('.eCommerceHeader .leftSection span')).toBeVisible();
  });

  // Test 2: Login button is visible when not logged in
  test('should display Login button when user is not logged in', async ({ page }) => {
    await expect(page.locator('button:has-text("Login")')).toBeVisible();
  });

  // Test 3: Cart button shows zero items initially
  test('should display Cart button with zero items', async ({ page }) => {
    await expect(page.locator('button:has-text("Cart (0)")')).toBeVisible();
  });

});`,
    },

    quiz: [
      {
        question: "What is Playwright primarily used for?",
        options: [
          "Testing individual JavaScript functions",
          "Rendering React components in a virtual DOM",
          "Automating real browsers to test full user workflows",
          "Checking API responses only",
        ],
        answer: 2,
      },
      {
        question: "Which Playwright function navigates to a webpage?",
        options: [
          "page.visit()",
          "page.open()",
          "page.goto()",
          "page.navigate()",
        ],
        answer: 2,
      },
      {
        question: "Why does Playwright wait automatically for UI elements?",
        options: [
          "To slow down the test",
          "To reduce flaky tests caused by timing issues",
          "To support only Chrome browser",
          "Because tests must always run synchronously",
        ],
        answer: 1,
      },
    ],

    type: "multiple",
    isQuizCompleted: false,
  },

  lighthouse_testing: {
    title: "Lighthouse Performance & Accessibility",

    paragraphs: [
      "Lighthouse is an automated auditing tool built into Chrome DevTools that evaluates web applications across four major categories: Performance, Accessibility, Best Practices, and SEO. It generates detailed reports with scores (0–100) and identifies opportunities to improve the overall quality of a web app.",
      "For performance testing, Lighthouse measures key metrics such as Largest Contentful Paint (LCP), Speed Index, Total Blocking Time (TBT), and Time to Interactive (TTI). These metrics help assess how quickly users can load, view, and interact with your site. Slow performance directly impacts bounce rates and user satisfaction.",
      "For accessibility testing, Lighthouse checks for missing labels, missing alt text, unusable forms, non-keyboard-friendly navigation, and more. Ensuring accessibility is essential for users with disabilities and also improves overall usability for everyone.",
      "Lighthouse audits are especially useful during development because they reveal bottlenecks such as large JavaScript bundles, unoptimized images, unused CSS, slow API responses, and layout shifts. These insights help developers continuously improve the performance and inclusiveness of their applications.",
      "In this project, Lighthouse is used to audit the Demo E-Commerce Website, ensuring that the homepage loads efficiently and meets accessibility standards before final deployment.",
    ],

    sections: [
      {
        subtitle: "Running Lighthouse Audits",
        text: "Below are the test results from our Lighthouse audits for the Tutorial Website.",
        images: [
          {
            src: require("../Images/LightHouseTest.jpg"),
            alt: "Lighthouse test results",
            caption:
              "Tutorial Website Test Results ",
          },
  
        ],
      }
    ],
    example: {
      code: `Run the Lighthouse audit from Chrome DevTools:
1. Open the application in Chrome.
2. Press F12 to open DevTools.
3. Navigate to the "Lighthouse" panel.
4. Select categories such as Performance and Accessibility.
5. Click "Analyze" to generate a full report.`,
    },

    quiz: [
      {
        question:
          "Which Lighthouse metric measures how quickly the main page content becomes visible?",
        options: ["CLS", "FID", "LCP", "TTI"],
        answer: 2,
      },
      {
        question:
          "Which Lighthouse category checks contrast, form labels, and ARIA attributes?",
        options: ["SEO", "Accessibility", "Performance", "Best Practices"],
        answer: 1,
      },
      {
        question: "Why is Lighthouse important for developers?",
        options: [
          "It automatically fixes all performance issues",
          "It provides insights into performance and accessibility problems",
          "It deploys the application to production",
          "It replaces Jest and Playwright tests",
        ],
        answer: 1,
      },
    ],

    type: "multiple",
    isQuizCompleted: false,
  },

  server_side_testing: {
    title: "Server-Side & API Testing Best Practices",

    paragraphs: [
      "Server-side and API testing focuses on validating the behavior, reliability, performance, and security of backend endpoints that power the web application. Instead of going through the UI, tests send HTTP requests directly to APIs (e.g., GET /products, POST /auth/login) and assert on status codes, response times, and JSON structure.",
      "Postman is used to design and validate API requests interactively. In this project, the FakeStoreAPI backend is tested using a Postman collection that checks whether endpoints return the correct HTTP status (200 OK), respond within an acceptable time (e.g., under 2000ms), and return well-structured JSON objects containing required fields like id, title, price, image, and category.",
      "Newman, the CLI runner for Postman, allows these API tests to be automated outside the Postman UI. By running Newman with a collection and environment file, we can execute all tests in a single command, generate detailed HTML reports (using the htmlextra reporter), and fail the process if any assertion fails. This makes it easy to plug API tests into CI/CD pipelines.",
      "Good server-side testing practice includes covering both happy-path and negative scenarios: valid requests that should succeed, invalid IDs or missing parameters that should return 4xx errors, and authenticated endpoints that should reject requests without tokens. Tests should validate not only the shape of the data but also business rules, error messages, and edge cases.",
      "Additional best practices: use separate environments (development/staging) instead of hitting production, use environment variables for base URLs and auth tokens,and generate test reports that summarize total requests, assertions, and failures. In this project, running Newman produces a summary of total requests, failed requests, total assertions, and failed assertions, and exits with a non-zero code if any test fails.",
      "Together with client-side tests (Jest + RTL) and E2E tests (Playwright), server-side and API testing ensures the backend is robust, predictable, and ready to handle real traffic without relying solely on manual Postman checks.",
    ],

    sections: [
      {
        subtitle: "Running API Tests",
        text: "To run the Newman API tests and generate the test results shown below, use the following commands. Newman executes Postman collections from the command line, making it perfect for automated testing pipelines. The htmlextra reporter generates detailed, professional test reports.",
        example: `# Navigate to the project directory
cd webtesting-app

# Run API tests with HTML report (recommended)
npm run test:api

# Run API tests with CLI output only
npm run test:api:cli

# View the generated HTML report (macOS)
open api-tests/reports/api-test-report.html

# View the generated HTML report (Windows)
start api-tests/reports/api-test-report.html

# Run all tests together (unit + API + E2E)
npm run test:all`,
      },
      {
        subtitle: "API Test Results",
        text: "Below are the Newman API test results showing all backend endpoints validated. These tests ensure the FakeStoreAPI returns correct status codes, response times, and data structures.",
        image: require("../Images/APITest.jpg"),
        imageAlt: "Newman API test results",
        imageCaption:
          "Newman API Test Results - All endpoints passing with correct responses",
      },
    ],

    example: {
      description:
        "Postman test script demonstrating API validation for the GET All Products endpoint. This script validates HTTP status codes, response times, data structure, and required fields:",
      code: `// Postman test script for GET All Products (inside collection)
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

pm.test("Response is an array", function () {
    const data = pm.response.json();
    pm.expect(Array.isArray(data)).to.be.true;
});

pm.test("Products have required fields", function () {
    const data = pm.response.json();
    data.forEach(product => {
        pm.expect(product).to.have.property("id");
        pm.expect(product).to.have.property("title");
        pm.expect(product).to.have.property("price");
        pm.expect(product).to.have.property("image");
        pm.expect(product).to.have.property("category");
    });
});`,
    },

    code: {
      description:
        "Newman runner script that automates Postman collection execution from Node.js. This script configures Newman to run API tests, generate HTML reports, and provide detailed test summaries:",
      snippet: `// newman-runner.js — Automated API test runner using Newman
const newman = require('newman');
const path = require('path');

// Define paths
const collectionPath = path.join(__dirname, 'fakestoreapi.collection.json');
const environmentPath = path.join(__dirname, 'environment.json');

// Newman run configuration
const options = {
  collection: require(collectionPath),
  environment: require(environmentPath),
  reporters: ['cli', 'htmlextra'],
  reporter: {
    htmlextra: {
      export: path.join(__dirname, 'reports', 'api-test-report.html'),
      title: 'FakeStoreAPI Test Report',
      browserTitle: 'API Test Results',
      showOnlyFails: false,
      showEnvironmentData: true,
      skipEnvironmentVars: ['authToken'],
      showGlobalData: true,
      timezone: 'America/Phoenix'
    }
  },
  insecure: true,
  timeout: 30000
};

// Run Newman
console.log('Starting API Tests...\\n');

newman.run(options, function (err, summary) {
  if (err) {
    console.error('Newman run failed:', err);
    process.exit(1);
  }

  const { stats } = summary.run;

  console.log('\\nTest Results Summary:');
  console.log(\`Total Requests: \${stats.requests.total}\`);
  console.log(\`Failed Requests: \${stats.requests.failed}\`);
  console.log(\`Total Assertions: \${stats.assertions.total}\`);
  console.log(\`Failed Assertions: \${stats.assertions.failed}\`);

  if (stats.assertions.failed > 0) {
    console.log('\\nSome tests failed!');
    process.exit(1);
  } else {
    console.log('\\nAll tests passed!');
    process.exit(0);
  }
});`,
    },

    quiz: [
      {
        question: "What is the main purpose of server-side/API testing?",
        options: [
          "To verify CSS styles and animations",
          "To validate backend endpoints for correctness, reliability, and performance",
          "To automate UI clicks in the browser",
          "To deploy the application to production",
        ],
        answer: 1,
      },
      {
        question:
          "In the Postman example, which aspect of performance is being tested?",
        options: [
          "Bundle size",
          "Database schema",
          "Response time being less than a threshold",
          "Number of UI components rendered",
        ],
        answer: 2,
      },
      {
        question: "Why is Newman useful in an automated testing workflow?",
        options: [
          "It replaces React Testing Library",
          "It converts Postman collections into SQL scripts",
          "It runs Postman collections via CLI and can generate reports and CI-friendly exit codes",
          "It hosts the API on a public server",
        ],
        answer: 2,
      },
      {
        question: "Which is a good best practice for server-side/API testing?",
        options: [
          "Run tests directly against production only",
          "Avoid negative test cases to keep tests simple",
          "Use environments and variables for base URLs and tokens",
          "Never assert on response structure",
        ],
        answer: 2,
      },
    ],

    type: "multiple",
    isQuizCompleted: false,
  },

  web_testing_best_practices: {
    title: "Best Practices for Web Testing",

    sections: [
      {
        subtitle: "1. Follow the Testing Pyramid",
        text: "Structure your test suite with many fast unit tests at the base, fewer integration tests in the middle, and a small number of E2E tests at the top. This approach maximizes coverage while minimizing execution time and maintenance overhead. Unit tests catch logic errors early, integration tests verify component interactions, and E2E tests validate critical user journeys.",
      },
      {
        subtitle: "2. Write Tests Early",
        text: "Start writing tests as early as possible in the development cycle. Writing tests alongside feature development helps catch bugs before they reach production and ensures that code is designed with testability in mind. This 'shift left' approach reduces the cost of fixing defects.",
      },
      {
        subtitle: "3. Keep Tests Independent and Isolated",
        text: "Each test should be able to run independently without relying on the state from other tests. Use setup and teardown hooks (beforeEach, afterEach) to reset state. Avoid shared mutable state between tests to prevent failures and make debugging easier.",
      },
      {
        subtitle: "4. Use Meaningful Test Names",
        text: "Test names should clearly describe what is being tested and what the expected outcome is. Good naming conventions like 'should display error message when login fails' make it easy to understand test failures without reading the implementation.",
      },
      {
        subtitle: "5. Mock External Dependencies",
        text: "In unit and integration tests, mock external APIs, databases, and third-party services. This ensures tests are fast, reliable, and not dependent on external availability. Use tools like Jest's jest.fn() for mocking functions.",
      },
      {
        subtitle: "6. Avoid Testing Implementation Details",
        text: "Focus on testing behavior and user-visible outcomes rather than internal implementation. Tests that rely on implementation details break when code is refactored, even if functionality remains correct. React Testing Library encourages this by querying elements the way users would (by text, role, label).",
      },
      {
        subtitle: "7. Handle Asynchronous Operations Properly",
        text: "Use proper async utilities like waitFor, findBy queries. Avoid arbitrary delays (sleep/setTimeout) which make tests slow. Let the testing framework wait for the expected state naturally.",
      },
      {
        subtitle: "8. Run Tests in CI/CD Pipelines",
        text: "Integrate tests into your continuous integration pipeline so they run automatically on every commit or pull request. This provides immediate feedback and prevents broken code from being merged. Use parallel execution and test splitting to keep CI runs fast.",
      },
      {
        subtitle: "9. Maintain Test Coverage Metrics",
        text: "Track code coverage to identify untested areas, but don't chase 100% coverage blindly. Focus on meaningful coverage of critical paths, edge cases, and error handling. Use coverage reports as a guide, not a goal.",
      },
      {
        subtitle: "10. Review and Refactor Tests Regularly",
        text: "Treat test code with the same care as production code. Refactor tests to remove duplication, improve readability, and update them when requirements change. Delete obsolete tests that no longer provide value.",
      },
    ],

    quiz: [
      {
        question:
          "According to the testing pyramid, which type of test should you have the most of?",
        options: [
          "E2E tests",
          "Integration tests",
          "Unit tests",
          "Manual tests",
        ],
        answer: 2,
      },
      {
        question: "What does 'shift left' mean in testing?",
        options: [
          "Moving tests to a different file",
          "Writing tests earlier in the development cycle",
          "Running tests on the left monitor",
          "Testing only left-aligned UI elements",
        ],
        answer: 1,
      },
      {
        question: "Why should tests avoid testing implementation details?",
        options: [
          "It makes tests run faster",
          "It reduces code coverage",
          "Tests won't break during refactoring if behavior stays the same",
          "It's required by Jest",
        ],
        answer: 2,
      },
      {
        question:
          "What is the recommended way to handle async operations in tests?",
        options: [
          "Use setTimeout with long delays",
          "Use sleep() functions",
          "Use waitFor, findBy, or auto-waiting utilities",
          "Ignore async operations",
        ],
        answer: 2,
      },
    ],

    type: "sections",
    isQuizCompleted: false,
  },

  testing_history: {
    title: "History of Web Testing",

    paragraphs: [
      "Web testing has evolved significantly since the early days of the internet. In the late 1990s and early 2000s, most testing was entirely manual, involving teams of testers clicking through web pages and documenting issues. This approach was slow, error-prone, and difficult to scale as websites became more dynamic.",

      "The mid-2000s saw a major breakthrough with the introduction of Selenium, one of the first widely adopted browser automation frameworks. Selenium enabled automated UI interactions, reducing repetitive manual testing. Over time, Selenium grew into a full suite (IDE, RC, WebDriver) and became the industry standard for functional web testing.",

      "In 2013, the W3C WebDriver standard formalized how browsers expose automation APIs. This allowed browser vendors to build native support, improving reliability and ensuring consistent automation behavior across Chrome, Firefox, Safari, and Edge.",

      "As modern web apps became more complex, developers needed faster, more stable testing tools. This led to frameworks like Playwright (2020), which supports cross-browser automation, auto-waiting, network mocking, tracing, and parallel execution. These tools improved speed and reduced flakiness compared to older Selenium-based approaches.",

      "Today, web testing spans multiple layers: unit testing (Jest), component testing (RTL), end-to-end testing (Playwright), performance and accessibility auditing (Lighthouse), and API validation (Postman, Newman). The evolution reflects a shift from purely manual UI checking to comprehensive, automated, multi-layer testing strategies that support modern CI/CD pipelines.",

      "The future of web testing includes AI-assisted debugging, self-healing test scripts, and autonomous test generation already emerging in platforms that analyze UI structure, learn from user flows, and dynamically adapt locators when interfaces change.",
    ],

    links: [
      { label: "Official Selenium Website", url: "https://www.selenium.dev" },
      {
        label: "W3C WebDriver Specification",
        url: "https://www.w3.org/TR/webdriver/",
      },
      { label: "Playwright Documentation", url: "https://playwright.dev" },
      { label: "Cypress Documentation", url: "https://www.cypress.io" },
    ],

    quiz: [
      {
        question:
          "Which tool revolutionized automated browser testing in the mid-2000s?",
        options: ["Jest", "Selenium", "Cypress", "Lighthouse"],
        answer: 1,
      },
      {
        question: "What did the W3C WebDriver specification provide?",
        options: [
          "A standard for API testing",
          "A unified standard for browser automation APIs",
          "A UI component framework",
          "A replacement for manual testing",
        ],
        answer: 1,
      },
      {
        question:
          "Which modern testing framework introduced auto-waiting and cross-browser automation?",
        options: ["Cypress", "Playwright", "Postman", "Jest"],
        answer: 1,
      },
      {
        question: "Why did modern tools like Cypress and Playwright emerge?",
        options: [
          "To replace HTML and CSS",
          "To improve reliability and speed over older Selenium workflows",
          "To remove the need for any testing",
          "To test only APIs without UI support",
        ],
        answer: 1,
      },
    ],

    type: "paragraphs",
    isQuizCompleted: false,
  },

  analysis: {
    title: "Analytical Component (Pros & Cons)",

    sections: [
      {
        subtitle: "Strengths of Modern Web Testing",
        text: "Modern web testing provides a structured and automated approach to validating application quality across UI, API, and performance layers. Automated tests reduce human error, improve reliability, and support rapid iteration. Unit and integration tests give developers instant feedback, while E2E tests validate full user workflows. Accessibility and performance audits ensure compliance with standards and improve user experience. When integrated into CI/CD, automated testing guards against regressions and helps teams ship high-quality features faster.",
      },

      {
        subtitle: "Weaknesses & Challenges",
        text: "Automated testing introduces overhead in terms of setup, tooling, and long-term maintenance. Test flakiness—especially in E2E tests—can slow teams down and create false confidence. As applications evolve, tests must be frequently updated, increasing development cost. Complex tools require learning curves, from writing mocks in Jest to stabilizing selectors in Playwright. Additionally, not all usability issues or visual regressions can be caught via automation, so a mix of automated and manual testing is still required for complete coverage.",
      },

      {
        subtitle: "Future Directions in Web Testing",
        text: "The future of testing is increasingly AI-driven. Emerging tools generate tests automatically based on user behavior, adapt tests when UI changes occur, and detect flaky tests with machine learning. Cloud-based testing platforms are expanding test matrices to include multiple devices, browsers, and network conditions. Real-time monitoring is becoming integral to production quality, enabling teams to validate performance and reliability based on real traffic patterns. As web apps become more dynamic, AI-powered test orchestration and self-healing automation will play a critical role in reducing maintenance costs.",
      },
    ],

    links: [
      {
        label: "Google - Web Testing & Automation Best Practices",
        url: "https://web.dev/learn/testing/",
      },
      {
        label: "W3C WebDriver Standard (Browser Automation)",
        url: "https://www.w3.org/TR/webdriver/",
      },
      {
        label: "Microsoft Playwright Official Documentation",
        url: "https://playwright.dev/docs/intro",
      },
      {
        label: "Cypress Testing Best Practices",
        url: "https://docs.cypress.io/guides/references/best-practices",
      },
      {
        label: "Google Lighthouse Performance & Accessibility Docs",
        url: "https://developer.chrome.com/docs/lighthouse/overview/",
      },
      {
        label: "Postman API Testing Concepts",
        url: "https://learning.postman.com/docs/writing-scripts/test-scripts/",
      },
      {
        label: "Martin Fowler – The Testing Pyramid",
        url: "https://martinfowler.com/articles/practical-test-pyramid.html",
      },
    ],

    quiz: [
      {
        question:
          "Which is a major benefit of automated testing in modern development?",
        options: [
          "It guarantees zero bugs in production",
          "It improves reliability and enables continuous delivery workflows",
          "It removes the need for developers to understand code",
          "It eliminates all manual testing tasks",
        ],
        answer: 1,
      },
      {
        question: "Why do E2E tests often become flaky?",
        options: [
          "They run without browsers",
          "They depend on UI timing, API responses, and dynamic elements",
          "They always execute instantly",
          "They never interact with APIs",
        ],
        answer: 1,
      },
      {
        question:
          "What is a major challenge of maintaining large automated test suites?",
        options: [
          "They require no documentation",
          "They become slower and require continuous updates",
          "They remove the need for integration tests",
          "They automatically detect performance issues",
        ],
        answer: 1,
      },
      {
        question:
          "Which future trend aims to reduce test failures caused by UI changes?",
        options: [
          "Hardcoding all CSS selectors",
          "Ignoring failed tests",
          "Self-healing automated tests using AI",
          "Running fewer E2E tests",
        ],
        answer: 2,
      },
      {
        question: "Real-user monitoring (RUM) helps teams by:",
        options: [
          "Simulating fictional test scenarios",
          "Collecting performance and error data from actual users in production",
          "Replacing all unit tests",
          "Ensuring tests always pass",
        ],
        answer: 1,
      },
    ],

    type: "sections",
    isQuizCompleted: false,
  },

  references: {
    title: "References",
    paragraphs: [
      "The following references were used throughout the development of this tutorial and are cited where applicable in the content above.",
    ],
    links: [
      {
        label: "Jest Official Documentation - Getting Started",
        url: "https://jestjs.io/docs/getting-started",
      },
      {
        label: "React Testing Library - Introduction",
        url: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      {
        label: "Playwright Official Documentation",
        url: "https://playwright.dev/docs/intro",
      },
      {
        label: "Google Chrome Lighthouse Overview",
        url: "https://developer.chrome.com/docs/lighthouse/overview/",
      },
      {
        label: "Postman Learning Center - Writing Test Scripts",
        url: "https://learning.postman.com/docs/writing-scripts/test-scripts/",
      },
      {
        label: "W3C Web Content Accessibility Guidelines (WCAG) 2.1",
        url: "https://www.w3.org/WAI/WCAG21/quickref/",
      },
      {
        label: "W3C WebDriver Specification",
        url: "https://www.w3.org/TR/webdriver/",
      },
      {
        label: "Martin Fowler - The Practical Test Pyramid",
        url: "https://martinfowler.com/articles/practical-test-pyramid.html",
      },
      {
        label: "FakeStoreAPI Documentation",
        url: "https://fakestoreapi.com/docs",
      },
      {
        label: "Create React App Official Guide",
        url: "https://create-react-app.dev/docs/getting-started/",
      },
    ],
    quiz: [],
    type: "multiple",
  },

  additional_resources: {
    title: "Additional Resources",
    paragraphs: [
      "The following resources are recommended for further learning and deeper exploration of web testing concepts and tools.",
    ],
    links: [
      {
        label: "MDN Web Docs - Web Development Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web",
      },
      {
        label: "Google Web.dev - Learn Web Performance",
        url: "https://web.dev/learn/performance/",
      },
      {
        label: "Playwright YouTube Channel - Official Tutorials",
        url: "https://www.youtube.com/c/Abortnick",
      },
      {
        label: "Jest Examples Repository",
        url: "https://github.com/facebook/jest/tree/main/examples",
      },
      {
        label: "Postman Public API Network",
        url: "https://www.postman.com/explore",
      },
      {
        label: "Testing JavaScript by Kent C. Dodds",
        url: "https://testingjavascript.com/",
      },
      {
        label: "Cypress Real World App (Testing Example)",
        url: "https://github.com/cypress-io/cypress-realworld-app",
      },
      {
        label: "Google Web Fundamentals - Testing",
        url: "https://developers.google.com/web/fundamentals",
      },
      {
        label: "Accessibility Developer Guide",
        url: "https://www.accessibility-developer-guide.com/",
      },
      {
        label: "React Documentation - Testing Overview",
        url: "https://react.dev/learn/testing",
      },
    ],
    quiz: [],
    type: "multiple",
  },
  demo: {
    title: "Demo - ECommerce Website",
    type: "component",
  },
};
