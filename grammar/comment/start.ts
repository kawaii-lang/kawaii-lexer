import { characterFinder, TokenType } from '../token';

export const start = characterFinder('#', TokenType.CommentStart, true);
