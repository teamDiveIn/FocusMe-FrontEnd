import { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { RefetchOptions } from 'axios-hooks'

interface AxiosConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data: any
}
type UseAxiosReponse = [
  { data: any; loading: boolean; error: AxiosError<any>; response: AxiosResponse<any> },
  (config?: AxiosRequestConfig, options?: RefetchOptions) => AxiosPromise<any>,
]

export declare const useAuthAxios: (url: string, { method }: AxiosConfig) => UseAxiosReponse
