import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { line } from '../../../grammar/comment/line';

console.log('comment/line/non-empty');

const src_ = fs.readFileSync(path.join(__dirname, 'non-empty.txt'));

const tmp_ = line(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.CommentLine,
    pos : 0,
    end : 3,
    ind : 0,
    raw : Buffer.from('Foo'),
    sub : []
};

assert.deepEqual(tmp_, ref_);
