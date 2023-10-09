import axios, { AxiosResponse } from 'axios';
import { IHttpClient } from './http-interface';

export class HttpClient implements IHttpClient {
  async get<T>(
    url: string,
    token?: string,
    params?: Record<string, any>,
    headers?: Record<string, any>
  ): Promise<AxiosResponse<T>> {

    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : undefined,
      ...headers
    };

    const response = await axios.get<T>(url, {
      headers: defaultHeaders,
      params: params
    });
    return response;
  }

  async post<T>(url: string, data?: Record<string, any>, token?: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<AxiosResponse<T>> {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : undefined,
      ...headers
    };

    const response = await axios.post<T>(url, data, {
      headers: defaultHeaders,
      params: params,
      timeout: 5000 // 5 seconds timeout
    });

    return response;
  }
}