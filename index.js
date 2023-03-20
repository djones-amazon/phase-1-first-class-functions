/*function receivesAFunction (sumFunction, sumFunctionArg) { 
    return sumFunction(sumFunctionArg);
}*/

const receivesAFunction = (sumFunction, sumFunctionArg) => sumFunction(sumFunctionArg);

const returnsANamedFunction = () => {
    function functionToBeReturned () {
        console.log(`I dont do anything.`);
    }
    return functionToBeReturned;
}

function returnsAnAnonymousFunction () {
    return (function () {console.log(`Im anonymous.`)})
}