// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event files after a suer types in a line
const pwd = require('./pwd');
const ls = require('./ls');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newLine
    if (cmd === 'pwd') {
        pwd();
    } else if (cmd === 'ls') {
        ls();
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
});
