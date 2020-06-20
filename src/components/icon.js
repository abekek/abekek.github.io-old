import React from 'react'
import PropTypes from 'prop-types'

import style from '../styles/icon.module.css'

const Icon = props => {
  const { d, size = '1em', label, style: styles, view} = props

  return (
    <span className={style.root} style={styles} role="figure">
      <svg
        version="1.1"
        width={size}
        height={size}
        viewBox={view}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} className={style.icon} />
      </svg>
      {label && <span className={style.label}>{label}</span>}
    </span>
  )
}

Icon.propTypes = {
  d: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
  view: PropTypes.string,
}

export default Icon
