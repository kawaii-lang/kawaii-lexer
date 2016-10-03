import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { at } from '../../grammar/at';

console.log('at/zero');

const src_ = fs.readFileSync(path.join(__dirname, 'zero.txt'));

const tmp_ = at(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
