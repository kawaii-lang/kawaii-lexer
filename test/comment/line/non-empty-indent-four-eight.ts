import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { line } from '../../../grammar/comment/line';

console.log('comment/line/non-empty-indent-four-eight');

const src_ = fs.readFileSync(path.join(__dirname, 'non-empty-indent-four-eight.txt'));

const tmp_ = line(src_, 4, src_.length, 4);

const ref_ : Token = {
    type : TokenType.CommentLine,
    pos : 4,
    end : 11,
    ind : 4,
    raw : Buffer.from('    Foo'),
    sub : []
};

assert.deepEqual(tmp_, ref_);
