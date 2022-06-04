import axios, { AxiosInstance } from "axios";

export class HTTPClient {
  public instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }

  get<T>(url: string) {
    return this.instance.get<T>(url);
  }
}
