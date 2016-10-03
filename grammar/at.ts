import { TokenType, characterFinder } from './token';

export const at = characterFinder('@', TokenType.At);
