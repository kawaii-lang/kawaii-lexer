import { Token, Finder, TokenType } from '../token';
import { newline } from '../newline';

export const line : Finder = (src_, pos_, max_, ind_) : Token => {
    const first_  = pos_;

    let tmp_ : Token;

    while ((pos_ < max_) && !(tmp_ = newline(src_, pos_, max_, ind_))) {
        pos_++;
    }

    if (pos_ === first_) {
        return null;
    }

    return {
        type : TokenType.CommentLine,
        pos  : first_,
        end  : pos_,
        ind  : ind_,
        raw  : src_.slice(first_, pos_),
        sub  : []
    };
};
