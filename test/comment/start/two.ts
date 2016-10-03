import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { start } from '../../../grammar/comment/start';

console.log('comment/start/two');

const src_ = fs.readFileSync(path.join(__dirname, 'two.txt'));

const tmp_ = start(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.CommentStart,
    pos : 0,
    end : 2,
    ind : 0,
    raw : Buffer.from('##'),
    sub : []
};

assert.deepEqual(tmp_, ref_);
