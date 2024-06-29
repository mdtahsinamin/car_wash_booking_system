export type TErrorMessage = {
  path: string | number;
  message: string;
}[];

export type TErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TErrorMessage;
};
