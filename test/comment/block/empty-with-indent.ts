import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { block } from '../../../grammar/comment/block';

console.log('comment/block/empty-with-indent');

const src_ = fs.readFileSync(path.join(__dirname, 'empty-with-indent.txt'));

const tmp_ = block(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.CommentBlock,
    pos  : 0,
    end  : 6,
    ind  : 0,
    raw  : Buffer.from('#\n    '),
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
            type : TokenType.Newline,
            pos  : 1,
            end  : 2,
            ind  : 0,
            raw  : Buffer.from('\n'),
            sub  : []
        },
        {
            type : TokenType.IndentIncrease,
            pos  : 2,
            end  : 6,
            ind  : 4,
            raw  : Buffer.from('    '),
            sub  : []
        }
    ]
};

assert.deepEqual(tmp_, ref_);
