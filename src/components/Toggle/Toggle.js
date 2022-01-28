import './Toggle.scss'

import IconSunSVG from './IconSun'
import IconMoonSVG from './IconMoon'

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-container">
    <IconSunSVG />
    <span className="toggle-control">
      <form>
        <input className="dmcheck" type="checkbox" checked={checked} onChange={onChange} id="dmcheck" />
        <label htmlFor="dmcheck" />
      </form>
    </span>
    <IconMoonSVG />
  </div>
)

export default Toggle
