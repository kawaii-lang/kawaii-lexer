import { TokenType, characterFinder } from './token';

export const semicolon = characterFinder(' ', TokenType.Semicolon, true);
