import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { line } from '../../../grammar/comment/line';

console.log('comment/line/empty-newline');

const src_ = fs.readFileSync(path.join(__dirname, 'empty-newline.txt'));

const tmp_ = line(src_, 0, src_.length, 0);

assert.deepEqual(tmp_, null);
