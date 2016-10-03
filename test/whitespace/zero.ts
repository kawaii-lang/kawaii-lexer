import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { whitespace } from '../../grammar/whitespace';

console.log('whitespace/zero');

const src_ = fs.readFileSync(path.join(__dirname, 'zero.txt'));

const tmp_ = whitespace(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
