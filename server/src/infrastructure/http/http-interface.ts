import { AxiosResponse } from "axios";

export interface IHttpClient {
  get<T>(url: string, token?: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<AxiosResponse<T>>;
  post<T>(url: string, data?: Record<string, any>, token?: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<AxiosResponse<T>>;
}