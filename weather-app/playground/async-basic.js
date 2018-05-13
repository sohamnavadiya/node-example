console.log("Strting app...");

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(()=>{
    console.log("50 ms");
}, 0);

console.log("Finishing app");