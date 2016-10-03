import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../grammar/token';
import { whitespace } from '../../grammar/whitespace';

console.log('whitespace/two');

const src_ = fs.readFileSync(path.join(__dirname, 'two.txt'));

const tmp_ = whitespace(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.Whitespace,
    pos : 0,
    end : 2,
    ind : 0,
    raw : Buffer.from('  '),
    sub : []
};

assert.deepEqual(tmp_, ref_);
