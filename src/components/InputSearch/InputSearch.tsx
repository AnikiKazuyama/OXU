import * as React from "react";

import IInputSearch from './IInputSearch';

import './style/index.scss';

class InputSearch extends React.Component<IInputSearch> {
  public render() {
    return (
      <div className={ `input-search ${ this.props.className }` }>
        <input className="input-search__field" type="text"/>
      </div>
    );
  }
}

export default InputSearch;
