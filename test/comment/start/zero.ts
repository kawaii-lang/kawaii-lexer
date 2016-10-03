import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { start } from '../../../grammar/comment/start';

console.log('comment/start/zero');

const src_ = fs.readFileSync(path.join(__dirname, 'zero.txt'));

const tmp_ = start(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
