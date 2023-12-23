import ItemsList from '../itemsList/ItemsList'
import Item from '../item/Item'

export const getSectionComponent = section => {
  const sectionList = {
    itemsList: ItemsList,
    item: Item,
  }

  return sectionList[section]
}
