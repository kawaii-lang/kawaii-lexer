import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { increase } from '../../../grammar/indent/increase';

console.log('indent/increase/one');

const src_ = fs.readFileSync(path.join(__dirname, 'one.txt'));

const tmp_ = increase(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.IndentIncrease,
    pos  : 0,
    end  : 1,
    ind  : 1,
    raw  : Buffer.from(' '),
    sub  : []
};

assert.deepEqual(tmp_, ref_);
