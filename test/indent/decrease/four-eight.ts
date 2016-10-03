import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { decrease } from '../../../grammar/indent/decrease';

console.log('indent/decrease/four-eight');

const src_ = fs.readFileSync(path.join(__dirname, 'four-eight.txt'));

const tmp_ = decrease(src_, 0, src_.length, 4);

assert.deepEqual(tmp_, null);
