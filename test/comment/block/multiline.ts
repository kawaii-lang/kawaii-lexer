import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../../grammar/token';
import { block } from '../../../grammar/comment/block';

console.log('comment/block/multiline');

const src_ = fs.readFileSync(path.join(__dirname, 'multiline.txt'));

const tmp_ = block(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.CommentBlock,
    pos  : 0,
    end  : 31,
    ind  : 0,
    raw  : Buffer.from('# Foo\n\n    Bar\n        Baz\n    '),
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
        },
        {
            type : TokenType.Newline,
            pos  : 5,
            end  : 7,
            ind  : 0,
            raw  : Buffer.from('\n\n'),
            sub  : []
        },
        {
            type : TokenType.IndentIncrease,
            pos  : 7,
            end  : 11,
            ind  : 4,
            raw  : Buffer.from('    '),
            sub  : []
        },
        {
            type : TokenType.CommentLine,
            pos  : 11,
            end  : 14,
            ind  : 4,
            raw  : Buffer.from('Bar'),
            sub  : []
        },
        {
            type : TokenType.Newline,
            pos  : 14,
            end  : 15,
            ind  : 4,
            raw  : Buffer.from('\n'),
            sub  : []
        },
        {
            type : TokenType.IndentKeep,
            pos  : 15,
            end  : 19,
            ind  : 4,
            raw  : Buffer.from('    '),
            sub  : []
        },
        {
            type : TokenType.CommentLine,
            pos  : 19,
            end  : 26,
            ind  : 4,
            raw  : Buffer.from('    Baz'),
            sub  : []
        },
        {
            type : TokenType.Newline,
            pos  : 26,
            end  : 27,
            ind  : 4,
            raw  : Buffer.from('\n'),
            sub  : []
        },
        {
            type : TokenType.IndentKeep,
            pos  : 27,
            end  : 31,
            ind  : 4,
            raw  : Buffer.from('    '),
            sub  : []
        }
    ]
};

assert.deepEqual(tmp_, ref_);
