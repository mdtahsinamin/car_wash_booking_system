export interface TSendResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}
