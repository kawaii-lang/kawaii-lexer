import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../grammar/token';
import { at } from '../../grammar/at';

console.log('at/two');

const src_ = fs.readFileSync(path.join(__dirname, 'two.txt'));

const tmp_ = at(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.At,
    pos : 0,
    end : 1,
    ind : 0,
    raw : Buffer.from('@'),
    sub : []
};

assert.deepEqual(tmp_, ref_);
