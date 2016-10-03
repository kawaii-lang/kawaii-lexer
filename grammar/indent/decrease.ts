import { Finder, TokenType, Token } from '../token';
import { whitespace } from '../whitespace';


export const decrease : Finder = (src_, pos_, max_, ind_) : Token => {
    let tmp_ : Token;

    if (tmp_ = whitespace(src_, pos_, max_, ind_)) {
        if (tmp_.raw.length < ind_) {
            return {
                type : TokenType.IndentDecrease,
                pos  : tmp_.pos,
                end  : tmp_.end,
                ind  : tmp_.raw.length,
                raw  : tmp_.raw,
                sub  : []
            };
        } else {
            return null;
        }
    } else {
        return {
            type : TokenType.IndentDecrease,
            pos  : pos_,
            end  : pos_,
            ind  : 0,
            raw  : src_.slice(pos_, pos_),
            sub  : []
        };
    }
};