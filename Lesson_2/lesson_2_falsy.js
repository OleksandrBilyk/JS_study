{
    let x;
    x = NaN
    //x = null; x = 0; x = NaN;
    console.log(x)
    if (x === null || x === 0 || x === undefined || x === '' ||  isNaN(x) || x === false){
        x = "default"
        console.log(x)
    }
}