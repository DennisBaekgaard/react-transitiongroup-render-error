import React from "react";
import Item from "./Item";
import _groupBy from "lodash.groupby";
import _map from "lodash.map";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Animation = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={600} classNames="fade">
    {children}
  </CSSTransition>
);

class List extends React.Component {

  render() {

    /**
     * 
     * Takes an array of data, and groups it by a property. In this case a simple string, "A", "B", or "C"
     * 
     * Returns an object where the key is the grouped value, and the value is the array of items.
     */
    let gl = _groupBy(this.props.data, v =>
      v.group
    );

    /**
     * 
     * Render (lodash) maps over the object. It prints out a header with the group (mainly for visibility purposes)
     * It then maps over the array of data, and renders each item individually. Pretty standard stuff.
     * 
     */
    if (this.props.transitionGroupAsReturn) {
      //Note the root component returned is the TransitionGroup
      return (
        <TransitionGroup /* key={this.props.selectedGroup} */ className="container">
          {_map(gl, (people, group) => {
            return (
              <React.Fragment key={group}>
                <div key={group}><strong>Group: {group}</strong></div>
                {people.map(person => <Animation key={person.id}><Item data={person} /></Animation>)}
              </React.Fragment>
            );
          })}
        </TransitionGroup>
      );
    } else {
      //Note the root component returned here is the fragment.
      return (
        <React.Fragment>
          {_map(gl, (people, group) => {
            return (
              <React.Fragment key={group}>
                <div key={group}><strong>Group: {group}</strong></div>
                {people.map(person => <Animation key={person.id}><Item data={person} /></Animation>)}
              </React.Fragment>
            );
          })
          }
        </React.Fragment>
      );
    }
  }
}
export default List;