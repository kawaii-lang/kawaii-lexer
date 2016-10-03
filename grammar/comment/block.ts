import { Token, Finder, TokenType } from '../token';
import { start } from './start';
import { line } from './line';
import { whitespace } from '../whitespace';
import { newline } from '../newline';
import { indent } from '../indent';

export const block : Finder = (src_, pos_, max_, ind_) : Token => {
    const first_    = pos_;
    const firstInd_ = ind_;
    let sub_        = [] as Token[];
    let fixedSub_ : Token[];
    let fixedPos_ : number;

    let tmp_ : Token;

    /* Find `CommentStart` token. */
    if (tmp_ = start(src_, pos_, max_, ind_)) {
        sub_.push(tmp_);
        pos_ = tmp_.end;

        /* Find optional `Whitespace`. */
        if (tmp_ = whitespace(src_, pos_, max_, ind_)) {
            sub_.push(tmp_);
            pos_ = tmp_.end;
        }

        /* Find optional `CommentLine`. */
        if (tmp_ = line(src_, pos_, max_, ind_)) {
            sub_.push(tmp_);
            pos_ = tmp_.end;
        }

        /* Find optional rest of comment block. */

        /* Fix current state. */
        fixedSub_ = sub_.slice();
        fixedPos_ = pos_;

        /* Find `Newline`. */
        if (tmp_ = newline(src_, pos_, max_, ind_)) {
            sub_.push(tmp_);
            pos_ = tmp_.end;

            /* Find `IndentIncrease`. */
            if (tmp_ = indent.increase(src_, pos_, max_, ind_)) {
                sub_.push(tmp_);
                pos_ = tmp_.end;
                ind_ = tmp_.ind;

                /* Find `CommentLine`. */
                if (tmp_ = line(src_, pos_, max_, ind_)) {
                    sub_.push(tmp_);
                    pos_ = tmp_.end;

                    /* Fix current state. */
                    fixedSub_ = sub_.slice();
                    fixedPos_ = pos_;

                    /* Find the rest. */
                    while (pos_ < max_) {
                        /* Find `Newline` token. */
                        if (tmp_ = newline(src_, pos_, max_, ind_)) {
                            sub_.push(tmp_);
                            pos_ = tmp_.end;

                            /* Find `IndentKeep`. */
                            if (tmp_ = indent.keep(src_, pos_, max_, ind_, true)) {
                                sub_.push(tmp_);
                                pos_ = tmp_.end;

                                /* Find `CommentLine`. */
                                if (tmp_ = line(src_, pos_, max_, ind_)) {
                                    sub_.push(tmp_);
                                    pos_ = tmp_.end;
                                }

                                /* Fix changes. */
                                fixedSub_ = sub_.slice();
                                fixedPos_ = pos_;
                            } else {
                                /* If `IndentKeep` not found, revert changes. */
                                sub_ = fixedSub_.slice();
                                pos_ = fixedPos_;
                                break;
                            }
                        } else {
                            /* If `Newline` not found, revert changes. */
                            sub_ = fixedSub_.slice();
                            pos_ = fixedPos_;
                            break;
                        }
                    }
                }
            } else {
                /* If `IndentIncrease` not found, revert changes. */
                sub_ = fixedSub_.slice();
                pos_ = fixedPos_;
            }
        }

        return {
            type : TokenType.CommentBlock,
            pos  : first_,
            end  : pos_,
            ind  : firstInd_,
            raw  : src_.slice(first_, pos_),
            sub  : sub_
        };
    } else {
        return null;
    }
};
