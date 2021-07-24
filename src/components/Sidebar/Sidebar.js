import React from "react";
import Notes from "../Notes/Notes";
import Search from "../Search/Search";
import "./Sidebar.scss";

const Sidebar = props => {
  const className = props.isCollapsed ? "sidebar collapsed" : "sidebar";

  // On top layout
  // Query the element
const ele = document.getElementById('resizeme');
console.log(ele);

// The current position of mouse
let x = 0;
let y = 0;

// The dimension of the element
let w = 0;
let h = 0;

// Handle the mousedown event
// that's triggered when user drags the resizer
const mouseDownHandler = function(e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;

    // Calculate the dimension of element
    const styles = window.getComputedStyle(ele);
    w = parseInt(styles.width, 10);
    h = parseInt(styles.height, 10);

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Adjust the dimension of element
    ele.style.width = `${w + dx}px`;
    ele.style.height = `${h + dy}px`;
};

const mouseUpHandler = function() {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
// Query all resizers
const resizer = document.querySelector('.resizer');
console.log(resizer)
window.onload=()=>{
resizer.addEventListener('mousedown', mouseDownHandler);	

}
// Loop over them
// funct(resizers, function(resizer) {
// 	resizer.addEventListener('mousedown', mouseDownHandler);	
// });

  return (
    <aside className={className} id="resizeme">
    <div className="resizer"></div>
      <div className="sidebar-header">
        <Search
          searchInput={props.searchInput}
          setSearchInput={props.setSearchInput}
        />
      </div>
      <Notes
        currentNoteId={props.currentNoteId}
        openNote={props.openNote}
        notes={props.notes}
      />
    </aside>
  );
};

export default Sidebar;
