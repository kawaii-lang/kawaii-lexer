import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { documentation } from '../../grammar/documentation';

console.log('documentation/bad');

const src_ = fs.readFileSync(path.join(__dirname, 'bad.txt'));

const tmp_ = documentation(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
