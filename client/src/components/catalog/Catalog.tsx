import * as React from 'react';

import { Filter, FilterItem  } from '../filter';
import Sticky from '../sticky';

import ICatalogP from './ICatalogP';

import './style/index.scss';

class Catalog extends React.Component<ICatalogP, {}> {
  public render() {
    return(
        <div className = 'catalog'>
            <Sticky offsetBottom = { 20 } offsetTop = { 76 }>
                <Filter>
                    { this.renderFilterItems() }
                </Filter>
            </Sticky>
            
            <div className="catalog__list">
                { this.renderCatalogList(40) }
            </div>
        </div>
    );
  }

  private renderFilterItems(): JSX.Element[] {   
    const filterItems = this.props.filterItems;
    return filterItems.map((filterItem, key) => {
        return(
            <FilterItem title  = { filterItem.title }
                        fields = { filterItem.fields }
                        key    = { key }/>
        );
    })
  }

  private renderCatalogList(count: number): JSX.Element[] {
    const elems = [];

    for (let i = 0; i < count; i++) {
        elems.push(
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur 
                sunt quam distinctio expedita nulla, itaque, minima dolores aliquid ipsa 
                harum nemo magni animi quod dolore sint porro ea labore?
            </div>
        );
    }

    return elems;
  }

}

export default Catalog;