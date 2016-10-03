import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { block } from '../../../grammar/comment/block';

console.log('comment/block/single-line');

const src_ = fs.readFileSync(path.join(__dirname, 'single-line.txt'));

const tmp_ = block(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.CommentBlock,
    pos  : 0,
    end  : 5,
    ind  : 0,
    raw  : Buffer.from('# Foo'),
    sub  : [
        {
            type : TokenType.CommentStart,
            pos  : 0,
            end  : 1,
            ind  : 0,
            raw  : Buffer.from('#'),
            sub  : []
        },
        {
            type : TokenType.Whitespace,
            pos  : 1,
            end  : 2,
            ind  : 0,
            raw  : Buffer.from(' '),
            sub  : []
        },
        {
            type : TokenType.CommentLine,
            pos  : 2,
            end  : 5,
            ind  : 0,
            raw  : Buffer.from('Foo'),
            sub  : []
        }
    ]
};

assert.deepEqual(tmp_, ref_);
