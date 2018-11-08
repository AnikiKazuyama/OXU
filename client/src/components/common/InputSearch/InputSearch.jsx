import * as React from "react";

import './style/index.scss';

class InputSearch extends React.Component {
  render() {
    return (
      <div className={ `input-search ${ this.props.className }` }>
        <input className="input-search__field" type="text"/>
      </div>
    );
  }
}

export default InputSearch;
