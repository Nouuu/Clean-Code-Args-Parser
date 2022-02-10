export interface Parser {
  parse(input: string): void;

  getBoolean(key: string): boolean;

  getNumber(key: string): number;

  getString(key: string): string;
}
