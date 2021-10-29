export class AppError extends Error {
  statusCode: Number;
  constructor(message: string, statusCode?: Number) {
    super(message);
    this.statusCode = statusCode || 200;
  }
}
