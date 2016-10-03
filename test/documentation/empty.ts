import assert = require('assert');
import fs = require('fs');
import path = require('path');

import { Token, TokenType } from '../../grammar/token';
import { documentation } from '../../grammar/documentation';

console.log('documentation/empty');

const src_ = fs.readFileSync(path.join(__dirname, 'empty.txt'));

const tmp_ = documentation(src_, 0, src_.length, 0);

const ref_ : Token = {
    type : TokenType.Documentation,
    pos  : 0,
    end  : 2,
    ind  : 0,
    raw  : Buffer.from('@#'),
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
            end  : 2,
            ind  : 0,
            raw  : Buffer.from('#'),
            sub  : [
                {
                    type : TokenType.CommentStart,
                    pos  : 1,
                    end  : 2,
                    ind  : 0,
                    raw  : Buffer.from('#'),
                    sub  : []
                }
            ]
        }
    ]
};

assert.deepEqual(tmp_, ref_);
