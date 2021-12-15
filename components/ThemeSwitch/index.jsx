import React from "react"

import * as S from "./styled"
import LightThemeIcon from "./assets/sun.svg"
import DarkThemeIcon from "./assets/moon.svg"

const ThemeSwitch = ({ currentTheme, onChange }) => {
  const handleChange = () => onChange()

  return (
    <S.Container currentTheme={currentTheme}>
      <label htmlFor="ThemeSwitcher">theme switcher</label>
      <input id="ThemeSwitcher" type="checkbox" onChange={handleChange} />
      <span className="circle">
        <span className="icon">
          {currentTheme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
        </span>
      </span>
    </S.Container>
  )
}

export default ThemeSwitch
