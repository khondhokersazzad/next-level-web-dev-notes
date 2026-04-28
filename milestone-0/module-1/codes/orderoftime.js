const startTime = performance.now();
for ( let i = 0; i < 500; i++ ){
  console.log(i);
}

const endTime = performance.now();

console.log(`Total time taken by the programmer is ${endTime - startTime}ms`);
