import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { decrease } from '../../../grammar/indent/decrease';
import { Token, TokenType } from '../../../grammar/token';

console.log('indent/decrease/four-zero');

const src_ = fs.readFileSync(path.join(__dirname, 'four-zero.txt'));

const tmp_ = decrease(src_, 0, src_.length, 4);

const ref_ : Token = {
    type : TokenType.IndentDecrease,
    pos  : 0,
    end  : 0,
    ind  : 0,
    raw  : Buffer.from(''),
    sub  : []
};

assert.deepEqual(tmp_, ref_);
