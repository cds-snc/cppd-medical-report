const npm = require('npm');

module.exports = async () => {
    npm.load(async () => {
        await npm.run("db:start");
    });

}