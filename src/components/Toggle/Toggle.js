import IconMoonSVG from './IconMoon'
import IconSunSVG from './IconSun'
import './Toggle.css'

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-container">
    <IconSunSVG />
    <span className="toggle-control">
      <input className="dmcheck" type="checkbox" checked={checked} onChange={onChange} id="dmcheck" />
      <label htmlFor="dmcheck" />
    </span>
    <IconMoonSVG />
  </div>
)

export default Toggle
