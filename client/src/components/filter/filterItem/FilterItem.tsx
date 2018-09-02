import * as React from 'react';

import IFilterItemP from './IFilterItemP';

class FilterItem extends React.Component<IFilterItemP, {}> {
  public render() {
    const { title } = this.props;

    return(
        <div className = 'filter__item'>
            <h3 className = 'filter__title'>
                { title }
            </h3>
            <ul className = 'filter__list'>
                { this.renderFields() }
            </ul>
        </div>
    );
  }

  public renderFields() {
    const { fields } = this.props;

    return fields.map(( oneField, index ) => {
        return (
            <li className="filter__field" key = { index }>
                { oneField.name }
            </li>
        );
    });
  }

}

export default FilterItem;