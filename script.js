const button = document.getElementById('generate-btn');
const label = document.getElementById('result-text');

import { szenarien } from './data.js';

function generate() {
    let num  = Math.floor(Math.random() * 100);
    label.textContent = szenarien[num];

    if(label.textContent.length === 0) {
        generate();
    }
}

button.addEventListener('click', generate);