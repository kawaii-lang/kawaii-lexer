import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../grammar/token';
import { documentation } from '../../grammar/documentation';

console.log('documentation/non-empty');

const src_ = fs.readFileSync(path.join(__dirname, 'non-empty.txt'));

const tmp_ = documentation(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.Documentation,
    pos  : 0,
    end  : 10,
    ind  : 0,
    raw  : Buffer.from('@#\n    Foo'),
    sub  : [
        {
            type : TokenType.At,
            pos  : 0,
            end  : 1,
            ind  : 0,
            raw  : Buffer.from('@'),
            sub  : []
        },
        {
            type : TokenType.CommentBlock,
            pos  : 1,
            end  : 10,
            ind  : 0,
            raw  : Buffer.from('#\n    Foo'),
            sub  : [
                {
                    type : TokenType.CommentStart,
                    pos  : 1,
                    end  : 2,
                    ind  : 0,
                    raw  : Buffer.from('#'),
                    sub  : []
                },
                {
                    type : TokenType.Newline,
                    pos  : 2,
                    end  : 3,
                    ind  : 0,
                    raw  : Buffer.from('\n'),
                    sub  : []
                },
                {
                    type : TokenType.IndentIncrease,
                    pos : 3,
                    end : 7,
                    ind : 4,
                    raw : Buffer.from('    '),
                    sub : []
                },
                {
                    type : TokenType.CommentLine,
                    pos : 7,
                    end : 10,
                    ind : 4,
                    raw : Buffer.from('Foo'),
                    sub : []
                }
            ]
        }
    ]
};

assert.deepEqual(tmp_, ref_);
