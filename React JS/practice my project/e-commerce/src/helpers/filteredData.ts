import { DataRequestType } from "../types/storeTypes/request";

type DATA = DataRequestType

export default function getFilteredData(data: DATA[], category: string, search: string) {
  const sortedData = getSortedData(data, category)

  return sortedData.filter(obj => {
     return obj.title.toLowerCase().includes(search.toLowerCase())
  })
}

function getSortedData(data: DATA[], category: string) {
  const casePrice: DATA[] = [...data].sort((a: DATA, b: DATA): number => a.price - b.price)
  const caseRaiting: DATA[] = [...data].sort((a: DATA, b: DATA): number => a.category < b.category && -1)
  const caseDefault: DATA[] = data


   type sortedListType = {
     [price: string]: DATA[]  
     raiting: DATA[] 
     default: DATA[] 
   }

  const sortedList: sortedListType = {
    price: casePrice,
    raiting: caseRaiting,
    default: caseDefault
  }

  return sortedList[category]
}