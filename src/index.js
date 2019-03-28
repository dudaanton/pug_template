import BinPacking from './BinPacking';
import DrawContainer from './DrawContainer';
import {
  containers,
  loads1,
  loads2,
  loads3
} from './data';

const packer = new BinPacking(containers)

// #1
let start = new Date()
let result = packer.pack(loads1)
let end = new Date()

console.log('script executes by: ', end - start, ' ms');
console.log('result', result);

let draw = new DrawContainer('.container', containers[result.container], result.loads)
draw.draw()

// #2
start = new Date()
result = packer.pack(loads2)
end = new Date()

console.log('script executes by: ', end - start, ' ms');
console.log('result', result);

draw = new DrawContainer('.container', containers[result.container], result.loads)
draw.draw()

// #3
start = new Date()
result = packer.pack(loads3)
end = new Date()

console.log('script executes by: ', end - start, ' ms');
console.log('result', result);

draw = new DrawContainer('.container', containers[result.container], result.loads)
draw.draw()
