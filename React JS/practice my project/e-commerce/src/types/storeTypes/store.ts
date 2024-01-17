import { requestType } from './request'
import { ParamsType } from './params'
import { WindowType } from './window'
import { PaginationType } from './pagination'

export type StoreType = {
  request: requestType
  params: ParamsType
  window: WindowType
  pagination: PaginationType
}