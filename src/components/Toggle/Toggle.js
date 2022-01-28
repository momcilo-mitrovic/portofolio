import "./Toggle.scss";

import IconSunSVG from "./IconSun";
import IconMoonSVG from "./IconMoon";

const Toggle = ({ checked, onChange }) => (
  <div className="toggle-container">
    <IconSunSVG />
    <span className="toggle-control">
      <form>
        <label className="dmcheck-label" htmlFor="dmcheck" />
        <input
          className="dmcheck"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id="dmcheck"
          aria-labelledBy="dmcheck"
        />
      </form>
    </span>
    <IconMoonSVG />
  </div>
);

export default Toggle;
