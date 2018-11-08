import * as React from 'react';

import filterItems from '../../constants/catalogFilters';
import { CatalogWithWrapper } from '../../components/catalog/Catalog';

class CatalogContainer extends React.Component {
  render() {
    return <CatalogWithWrapper filterItems = { filterItems }/>
  }
}

export default CatalogContainer;