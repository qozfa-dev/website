import {Sun, Moon} from 'lucide-react';

import React from 'react'

const ThemeToggle = () => {
  return (
    <div>
        <button>{theme === 'light' ? <Moon /> : <Sun />}</button>
    </div>
  )
}

export default ThemeToggle;