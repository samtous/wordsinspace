import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "gatsby" 

import FilteredList from "./FilteredList"

const Modal = ({ isShowing, hide, searchResults, searchTerm, location, loading}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper">
      <div className="modal">
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>

        {/* ---------------- SEARCH TERMS ---------------- */}
        <div 
          style={{
            padding: '1vh 0',
            textTransform: 'uppercase'
          }}>
          <div>
            Results for <strong>{searchTerm}</strong> {location.pathname !== '/work' ? `within ${location.pathname.slice(1)}`: null}
          </div>
        </div>

        {/* ---------------- LOADING MESSAGE ---------------- */}
        {loading && (
          <div 
            style={{
              padding: '1vh 0'
            }}> 
            Loading...
          </div>
        )}
        
        {/* ---------------- SEARCH RESULTS ---------------- */}
        {!loading && (
          <FilteredList items={searchResults} />
        )}
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;