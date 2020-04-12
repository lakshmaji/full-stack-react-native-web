const NodeEnvironment = require('jest-environment-node');

const MemoryDatabaseServer = require('../../src/utils/MemoryDatabaseServer');

class CustomEnvironment extends NodeEnvironment {
    async setup() {
        try {

            await super.setup();

            this.global.__DB_URL__ = await MemoryDatabaseServer.getConnectionString();
        } catch (err) {
            console.log('setup error ', err);

        }
    }

    async teardown() {
        try {

            await super.teardown();
        } catch (err) {
            console.log('Teardown err', err);

        }
    }

    runScript(script) {
        return super.runScript(script);
    }
}

module.exports = CustomEnvironment;