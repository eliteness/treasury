
//    import { f1 from './index.js' } ;





async function main() {
  const f1 = await import("./index.js");
  // use myModule
    console.log("hi from i2",f1.f1())
}

main();