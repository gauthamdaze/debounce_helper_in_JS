// debounce 

let counter = 0 ;
const getData = (arg)=>{
    // calls the api
console.log('fetching the data',counter++,arg);
}

const debounce = function (fn,delay,argument)  {
    let timer;
return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(()=>{
        fn.apply(context,argument);
    },delay)
}
}

const keyStroke  = debounce(getData,300,['hello']);




