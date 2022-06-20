import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="bg-container">
          <h1>Layout</h1>
          <label>
            <input
              type="checkbox"
              defaultChecked={showContent}
              onChange={onToggleShowContent}
            />
            Content
          </label>
          <label>
            <input
              type="checkbox"
              defaultChecked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
            />
            Left Navbar
          </label>

          <label>
            <input
              type="checkbox"
              defaultChecked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
            />
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
