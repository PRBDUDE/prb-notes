import { TokenType } from '@core/parser/typescript/token-type';

export interface Token {
  type: TokenType;
  value: string;
  line?: number;
  column?: number;
}
