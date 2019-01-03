import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sortby-area">
        <div className="results">390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-th-list" aria-hidden="true"></i>
            <i className="fas fa-th" aria-hidden="true"></i>
          </div>
        </div>
      </section>

      <section className="listings-results">
        <div className="listing">
          <div className="listing-img">
            <span className="Address">Address</span>
            <div className="details">
              <div className="user-img"></div>
              <div className="user-details">
                <span className="user-name">Nina Smith</span>
                <span className="post-date">01/01/2019</span>
              </div>
              <div className="listing-details">
                <div className="floor-space">
                  <i className="far fa-square" aria-hidden="true"></i>
                  <span>2500 ft&sup2;</span>
                </div>
                <div className="bedrooms">
                  <i className="fas fa-bed" aria-hidden="true"></i>
                  <span>3 bedrooms</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span>$2000 / month </span>
            <span><i className="fas fa-map-marker-alt" aria-hidden="true"></i>Linthicum, MD</span>
          </div>
        </div>

      </section>

      <section className="pagination">
        <ul className="pagination-nums">
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>
    </section>)
  }
}
