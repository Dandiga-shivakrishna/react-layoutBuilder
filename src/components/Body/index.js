import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar ? (
            <div className="left-menu">
              <h3>Left Navbar Menu</h3>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="left-menu">
              <h3>Content</h3>
              <p>
                Lorem ipsum In the React rendering lifecycle, the value
                attribute on form elements will override the value in the DOM{' '}
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="left-menu">
              <h3>Right NavbarMenu</h3>
              <div>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
