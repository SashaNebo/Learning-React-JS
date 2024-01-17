export type requestType = {
  data: DataRequestType[]
  status: string
  error: string
}

export type DataRequestType = {
  id: string
  title: string
  price: number
  category: string
  sizes: string[]
}

export type ParamsRequestType = {
  page: number
  limit: number
}

/* 

id
title
price
category
sizes

*/ 