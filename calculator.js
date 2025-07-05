const add=(numbers)=>{
    if(numbers=="")
        return 0;
    const replacedWithComma=numbers.replace(/\n/g,',');
    const parts=replacedWithComma.split(",");
    let sum=0;
    for(let part of parts)
    {
        sum+=Number(part);
    }
    return sum;
};

module.exports={add};