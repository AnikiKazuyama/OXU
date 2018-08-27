import * as React from 'react';

import Catalog from '../../components/catalog';
import filterItems from '../../constants/catalogFilters';

class CatalogContainer extends React.Component {
  public render() {
    return <Catalog filterItems = { filterItems }/>
  }
}

export default CatalogContainer;