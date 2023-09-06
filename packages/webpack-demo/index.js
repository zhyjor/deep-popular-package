
import './src/sync.js';
import('./src/async.js').then(({ default: text }) => { console.log(text) });
