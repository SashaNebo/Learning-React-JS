import { propsList } from '../propsList'

const getPropsSectionItemsList = () => {
  const { propsPage, propsStore } = propsList()

  const propsSectionItem = {
    store: propsStore.store,
    setPage: propsPage.setPage,
  }

  return propsSectionItem
}

export default getPropsSectionItemsList
