import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { increase } from '../../../grammar/indent/increase';

console.log('indent/increase/zero');

const src_ = fs.readFileSync(path.join(__dirname, 'zero.txt'));

const tmp_ = increase(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
