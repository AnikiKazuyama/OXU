import React from 'react';

import filterItems from '../../constants/catalogFilters';
import { CatalogWithWrapper } from '../../view/catalog/Catalog';
import testData from './testData';

function CatalogContainer() {
  return <CatalogWithWrapper filterItems={filterItems} items={testData.result} />;
}

export default CatalogContainer;
