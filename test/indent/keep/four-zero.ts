import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { keep } from '../../../grammar/indent/keep';

console.log('indent/keep/four-zero');

const src_ = fs.readFileSync(path.join(__dirname, 'four-zero.txt'));

const tmp_ = keep(src_, 0, src_.length, 4);

assert.deepEqual(tmp_, null);
