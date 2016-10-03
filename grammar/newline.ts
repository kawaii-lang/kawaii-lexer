import { TokenType, characterFinder } from './token';

export const newline = characterFinder('\n', TokenType.Newline, true);
