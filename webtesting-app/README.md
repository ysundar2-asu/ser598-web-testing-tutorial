# SER598 - Web Testing Tutorial

An interactive, comprehensive web testing tutorial platform built with React, designed to teach modern web testing practices through hands-on examples, quizzes, and a fully functional demo application.

## Course Information

**Course**: SER598 - Web Based Application  
**Institution**: Arizona State University  
**Project Type**: Educational Tutorial Platform on Web Application Testing

## Team Members

- **Yashwanth Sundhar Sundaramoorthy** - ysundar2@asu.edu
- **Tharun Moongil Rajan** - tmoongil@asu.edu
- **Sai Kiran Reddy Koppula** - skris179@asu.edu

## Project Overview

This project is an interactive learning platform that teaches web testing fundamentals and best practices. It features:

- **15 Interactive Tutorial Modules** covering all aspects of web testing
- **Demo E-Commerce Application** for hands-on practice
- **Real-world Testing Examples** using Jest, Playwright, and Newman
- **Interactive Quiz System** to reinforce learning
- **Progress Tracking** to monitor completion
- **Comprehensive Test Suite** demonstrating best practices

## Quick Start

```bash
# Navigate to the application directory
cd webtesting-app

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Tutorial Content

### Core Modules (15 Completable Topics)

1. **Introduction** - Overview of web testing
2. **Learning Outcomes** - What you'll learn
3. **What is Web Testing?** - Fundamentals and concepts
4. **Types of Web Testing** - Unit, Integration, E2E, etc.
5. **Tools Overview** - Jest, Playwright, Newman, Lighthouse
6. **React App Setup** - Environment setup
7. **Jest Unit Testing & RTL** - Component testing
8. **Playwright E2E Testing** - Browser automation
9. **Lighthouse Audits** - Performance & accessibility
10. **Server-Side & API Testing** - API validation
11. **Best Practices** - Industry standards
12. **History of Web Testing** - Evolution of testing
13. **Analytical Component** - Pros & cons analysis
14. **References** - Additional reading
15. **Additional Resources** - Tools & documentation

### Bonus Module

- **Demo - E-Commerce Website** - Interactive hands-on practice

## Testing Features

### Unit Testing (Jest + React Testing Library)
- Component rendering tests
- User interaction simulation
- State management validation
- API mocking

### End-to-End Testing (Playwright)
- Full user workflow validation
- Cross-browser testing
- Visual regression testing
- Network interception

### API Testing (Newman)
- Endpoint validation
- Response time checks
- Data structure verification
- Automated test reports

### Performance & Accessibility (Lighthouse)
- Performance metrics (LCP, FID, CLS)
- Accessibility compliance
- SEO optimization
- Best practices validation

## Technologies

- **Frontend**: React, Ant Design, SCSS
- **Testing**: Jest, React Testing Library, Playwright, Newman, Lighthouse
- **API**: FakeStoreAPI
- **Build Tool**: Create React App

## 📂 Project Structure

```
ser598-web-testing-tutorial/
└── webtesting-app/
    ├── src/
    │   ├── Components/      # Reusable UI components
    │   ├── Demo/           # Demo e-commerce app
    │   ├── Tutorial/       # Tutorial content & logic
    │   └── Images/         # Screenshots & images
    ├── e2e-tests/          # Playwright tests
    ├── api-tests/          # Newman API tests
    └── public/             # Static assets
```

## Running Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# API tests
npm run test:api

# All tests
npm run test:all
```

## Learning Objectives

Students will learn to:

- Write effective unit tests for React components
- Implement end-to-end testing workflows
- Validate APIs with automated tests
- Conduct performance and accessibility audits
- Apply testing best practices
- Build comprehensive testing strategies

## Key Features

Interactive step-by-step tutorials  
Real-world code examples  
Hands-on demo application  
Interactive quizzes with feedback  
Progress tracking system  
Comprehensive test coverage  
Professional test reports  
Modern testing tools & frameworks  


