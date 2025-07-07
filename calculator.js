const add = (numbers) => {
    if (numbers == "")
        return 0;

    let delimeter = ',';
    if (numbers.startsWith("//")) {
        const [delimeters, number] = numbers.split('\n');
        delimeter = delimeters.slice(2);
        numbers = number;
    }

    
    let array = numbers.replace(/\n/g, delimeter).split(delimeter).map(Number);


    if(delimeter==='!')
    {
        return array.reduce((mul,num)=>{
            return num*mul;
        },1);
    }

    let negatives = array.filter((n) => {
        return n < 0;
    });
    if (negatives.length > 0) {
        throw new Error(`Negative numbers are not allowed ${negatives.join(',')}`);
    }
    return array.reduce((sum, num) => {
        if(num<=1000){
            return sum + num
        }
        return sum;
    },0);
};
console.log(add('//!\n1!2'));

module.exports = { add };