export class ParsingError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export type TokenArg = {
  booleanToken?: string;
  numberToken?: string;
  stringToken?: string;
};
export type DefaultValues = {
  defaultBoolean: boolean;
  defaultNumber: number;
  defaultString: string;
};
export const basicTokens: TokenArg = {
  booleanToken: undefined,
  numberToken: '#',
  stringToken: '*',
};
export const basicDefaultValues: DefaultValues = {
  defaultBoolean: false,
  defaultNumber: 0,
  defaultString: '',
};
