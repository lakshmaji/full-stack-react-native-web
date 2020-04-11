const MemoryDatabaseServer = require('../../src/lib/MemoryDatabaseServer');

module.exports = async () => {
    try {
        await MemoryDatabaseServer.stop();
    } catch (err) {
        console.log('Teardown err ', err);
    }
};