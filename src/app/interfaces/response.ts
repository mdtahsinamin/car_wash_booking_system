export interface TSendResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  token?: string;
  data: T;
}
