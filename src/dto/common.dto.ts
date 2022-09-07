export interface CommonResponse<T> {
    status: boolean;
    message: string;
    data: T;
}
