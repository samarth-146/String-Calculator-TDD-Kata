const add = (numbers) => {
    if (numbers == "")
        return 0;

    let delimeter=',';
    if(numbers.startsWith("//"))
    {
        const [delimeters,number]=numbers.split('\n');
        delimeter=delimeters.slice(2);
        numbers=number;
    }

    return numbers
        .replace(/\n/g, delimeter)
        .split(delimeter)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
};

module.exports = { add };