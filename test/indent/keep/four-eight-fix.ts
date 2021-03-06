import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { keep } from '../../../grammar/indent/keep';
import { Token, TokenType } from '../../../grammar/token';

console.log('indent/keep/four-eight-fix');

const src_ = fs.readFileSync(path.join(__dirname, 'four-eight-fix.txt'));

const tmp_ = keep(src_, 0, src_.length, 4, true);

const ref_ : Token = {
    type : TokenType.IndentKeep,
    pos  : 0,
    end  : 4,
    ind  : 4,
    raw  : Buffer.from('    '),
    sub  : []
};

assert.deepEqual(tmp_, ref_);
