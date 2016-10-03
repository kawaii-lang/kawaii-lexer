import { TokenType, characterFinder } from './token';

export const whitespace = characterFinder(' ', TokenType.Whitespace, true);
