const { defaults } = require('jest-config');

module.exports = {
    verbose: true,
    testTimeout: 60000,
    setupFilesAfterEnv: ["./setup.jest.js"]
    // setupFilesAfterEnv: ['./defaultTimeout.jest.js']
}