import React from 'react';

import filterItems from '../../constants/catalogFilters';
import { CatalogWithWrapper } from '../../components/catalog/Catalog';

function CatalogContainer() {
  return <CatalogWithWrapper filterItems={filterItems} />;
}

export default CatalogContainer;
