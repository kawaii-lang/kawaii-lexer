import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../grammar/token';
import { newline } from '../../grammar/newline';

console.log('newline/two');

const src_ = fs.readFileSync(path.join(__dirname, 'two.txt'));

const tmp_ = newline(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.Newline,
    pos : 0,
    end : 2,
    ind : 0,
    raw : Buffer.from('\n\n'),
    sub : []
};

assert.deepEqual(tmp_, ref_);
