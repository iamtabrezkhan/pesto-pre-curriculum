const chalk = require('chalk');

const describe = (desc, fn) => {
    console.log(chalk.white.bgBlue.bold(desc));
    fn();
}

const it = (msg, fn) => describe('  ' + msg, fn);

const matchers = (exp) => ({
    toBe: (assertion) => {
        if(exp === assertion) {
            console.log(chalk.green.bgBlack('----- Pass -----'))
            return true;
        } else {
            console.log(chalk.red.bgBlack('----- Fail -----'))
            return false;
        }
    }
})

const expect = (exp) => matchers(exp)

module.exports = {
    describe,
    it,
    expect
}