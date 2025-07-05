const add=(numbers)=>{
    if(numbers=="")
        return 0;
    const parts=numbers.split(",");
    let sum=0;
    for(let part of parts)
    {
        sum+=Number(part);
    }
    return sum;
};

module.exports={add};