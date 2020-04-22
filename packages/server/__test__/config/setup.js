const MemoryDatabaseServer = require('../../src/utils/MemoryDatabaseServer');

module.exports = async () => {
    try {
        await MemoryDatabaseServer.start();
    } catch (err) {
        console.log('Setup error', err);
    }
};