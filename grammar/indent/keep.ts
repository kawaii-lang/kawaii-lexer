import { Finder, TokenType, Token } from '../token';
import { whitespace } from '../whitespace';


export const keep : Finder = (src_, pos_, max_, ind_, fix_ = false) : Token => {
    max_ = fix_ ? pos_ + ind_ : max_;

    let tmp_ : Token;

    if (tmp_ = whitespace(src_, pos_, max_, ind_)) {
        if (tmp_.raw.length === ind_) {
            return {
                type : TokenType.IndentKeep,
                pos  : tmp_.pos,
                end  : tmp_.end,
                ind  : ind_,
                raw  : tmp_.raw,
                sub  : []
            };
        } else {
            return null;
        }
    } else {
        return null;
    }
};