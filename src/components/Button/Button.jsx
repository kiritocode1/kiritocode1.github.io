import React from 'react'

import btn from "../../Sounds/btn.mp3"
import useSound from "use-sound"
const MainButton = ({ Color = "primary", value = "btn", theme = "lofi" }) => {
  const [cliggity]=useSound(btn)
    return (
    <button data-set-theme={theme}  data-act-class="ACTIVECLASS" className={`btn btn-accent  btn-${Color}`} onClick={cliggity}>{value}</button>

  );
}

export default MainButton;