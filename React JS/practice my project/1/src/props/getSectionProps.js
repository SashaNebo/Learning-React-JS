import getPropsSectionItem from './propsSections/getPropsSectionItem'
import getPropsSectionItemsList from './propsSections/getPropsSectionItemsList'

const getSectionProps = section => {
  const propsObjList = {
    itemsList: getPropsSectionItemsList,
    item: getPropsSectionItem,
  }

  return propsObjList[section]()
}

export default getSectionProps
