module.exports = {
	verbose: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['html', 'text'],
	testMatch: [
		'**/specs/**/*.spec.js'
	],
	testEnvironment: 'node'
};
