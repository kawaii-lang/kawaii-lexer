import { Token, Finder, TokenType } from './token';
import { at } from './at';
import { comment } from './comment';

export const documentation : Finder = (src_, pos_, max_, ind_) : Token => {
    const first_ = pos_;
    const sub_   = [] as Token[];
    let tmp_ : Token;

    /* Find `At` token. */
    if (tmp_ = at(src_, pos_, max_, ind_)) {
        sub_.push(tmp_);
        pos_ = tmp_.end;

        /* Find `CommentBlock`. */
        if (tmp_ = comment.block(src_, pos_, max_, ind_)) {
            sub_.push(tmp_);
            pos_ = tmp_.end;

            return {
                type : TokenType.Documentation,
                pos  : first_,
                end  : pos_,
                ind  : ind_,
                raw  : src_.slice(first_, pos_),
                sub  : sub_
            };
        } else {
            return null;
        }
    } else {
        return null;
    }
};
