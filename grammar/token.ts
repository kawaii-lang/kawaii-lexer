export interface Token {
    type : TokenType;
    pos  : number;
    end  : number;
    ind  : number;
    raw  : Buffer;
    sub  : Token[];
}

export interface Finder {
    (src_ : Buffer, pos_ : number, max_ : number, ind_ : number, fix_? : boolean) : Token;
}

export enum TokenType {
    /* Terminals */
    Whitespace,
    Newline,
    Semicolon,
    Dot,
    At,

    /* Indents */
    IndentIncrease,
    IndentKeep,
    IndentDecrease,

    /* Comments */
    CommentBlock,
    CommentStart,
    CommentLine,

    /* Documentation */
    Documentation,
}


class Character {
    character : number;
    repeat : boolean;

    constructor (character_ : string, repeat_ : boolean) {
        this.character = Buffer.from(character_)[ 0 ];
        this.repeat    = repeat_;
    }
}

class Operator {
    buffer : Buffer;
    length : number;

    constructor (pattern_ : string) {
        this.buffer = Buffer.from(pattern_);
        this.length = this.buffer.length;
    }
}


export function characterFinder (string_ : string, type_ : TokenType, repeat_ = false) : Finder {
    const pattern_ = new Character(string_, repeat_);

    return (src_, pos_, max_, ind_) => {
        const first_ = pos_;

        if (src_[ pos_ ] === pattern_.character) {
            do {
                pos_++;
            } while ((pattern_.repeat) && (pos_ < max_) && (src_[ pos_ ] === pattern_.character));

            return {
                type : type_,
                pos  : first_,
                end  : pos_,
                ind  : ind_,
                raw  : src_.slice(first_, pos_),
                sub  : []
            };
        } else {
            return null;
        }
    }
}

export function operatorFinder (string_ : string, type_ : TokenType) : Finder {
    const pattern_ = new Operator(string_);

    return (src_, pos_, max_, ind_) => {
        const first_ = pos_;
        let ref_     = 0;

        while ((pos_ < max_) && (ref_ < pattern_.length) && (src_[ pos_ ] === pattern_.buffer[ ref_ ])) {
            pos_++;
            ref_++;
        }

        if (ref_ == pattern_.length) {
            return {
                type : type_,
                pos  : first_,
                end  : pos_,
                ind  : ind_,
                raw  : src_.slice(first_, pos_),
                sub  : []
            };
        } else {
            return null;
        }
    }
}
