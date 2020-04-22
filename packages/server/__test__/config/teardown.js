const MemoryDatabaseServer = require('../../src/utils/MemoryDatabaseServer');

module.exports = async () => {
    try {
        await MemoryDatabaseServer.stop();
    } catch (err) {
        console.log('Teardown err ', err);
    }
};