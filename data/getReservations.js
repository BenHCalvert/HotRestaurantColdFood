const readFromFile = page => {
  fs.readFile(`${page}`, (err, data) => {
    if (err) console.log(chalk.inverse.yellow(`Something went wrong: ${err}`));
    return data;
  });
};

e
