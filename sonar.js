const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: process.env.SONAR_HOST,
  token: process.env.SONAR_TOKEN,
  options : {
    'sonar.organization': process.env.SONAR_ORGANIZATION,
    'sonar.projectKey': 'net.croz:qed-bank-ui',
    'sonar.projectName': 'CROZ QED Bank - Frontend',
    'sonar.sources': '.',
    'sonar.inclusions' : 'src/**',
    'sonar.eslint.reportPaths': 'eslint-report.json'
  }
}, () => {});