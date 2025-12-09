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
      noSyntaxHighlighting: false,
      showEnvironmentData: true,
      skipEnvironmentVars: ['authToken'],
      showGlobalData: true,
      skipGlobalVars: [],
      omitRequestBodies: false,
      omitResponseBodies: false,
      hideRequestBody: [],
      hideResponseBody: [],
      showMarkdownLinks: true,
      showFolderDescription: true,
      timezone: 'America/Phoenix'
    }
  },
  insecure: true,
  timeout: 30000
};

// Run Newman
console.log('Starting API Tests...\n');

newman.run(options, function (err, summary) {
  if (err) {
    console.error('Newman run environment failed:', err); // error message
    process.exit(1);
  }

  const { stats } = summary.run;
  
  console.log('\n Test Results Summary:');
  console.log(`Total Requests: ${stats.requests.total}`);
  console.log(`Failed Requests: ${stats.requests.failed}`);
  console.log(`Total Assertions: ${stats.assertions.total}`);
  console.log(`Failed Assertions: ${stats.assertions.failed}`);
  
  if (stats.assertions.failed > 0) {
    console.log('\n Some tests cases failed!');
    process.exit(1);
  } else {
    console.log('\n All tests passed successfully!');
    process.exit(0);
  }
});

