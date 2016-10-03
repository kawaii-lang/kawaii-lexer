import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { newline } from '../../grammar/newline';

console.log('newline/zero');

const src_ = fs.readFileSync(path.join(__dirname, 'zero.txt'));

const tmp_ = newline(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
