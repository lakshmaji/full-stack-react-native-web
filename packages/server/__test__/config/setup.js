const MemoryDatabaseServer = require('../../src/lib/MemoryDatabaseServer');

module.exports = async () => {
    try {
        await MemoryDatabaseServer.start();
    } catch (err) {
        console.log('Setup error', err);
    }
};