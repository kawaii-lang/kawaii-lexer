import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { decrease } from '../../../grammar/indent/decrease';
import { Token, TokenType } from '../../../grammar/token';

console.log('indent/decrease/eight-four');

const src_ = fs.readFileSync(path.join(__dirname, 'eight-four.txt'));

const tmp_ = decrease(src_, 0, src_.length, 8);

const ref_ : Token = {
    type : TokenType.IndentDecrease,
    pos  : 0,
    end  : 4,
    ind  : 4,
    raw  : Buffer.from('    '),
    sub  : []
};

assert.deepEqual(tmp_, ref_);
