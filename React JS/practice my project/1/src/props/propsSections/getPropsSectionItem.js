import { propsList } from '../propsList'

const getPropsSectionItem = () => {
  const { propsPage } = propsList()

  const propsSectionItem = {
    page: propsPage.page,
  }

  return propsSectionItem
}

export default getPropsSectionItem
