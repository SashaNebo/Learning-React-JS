import { requestType } from './request'
import { ParamsType } from './params'
import { WindowType } from './window'
import { PaginationType } from './pagination'

export type StoreType = {
  state: PaginationType
  request: requestType
  params: ParamsType
  window: WindowType
  pagination: PaginationType
}