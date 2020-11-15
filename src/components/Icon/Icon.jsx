import React from 'react'
import classnames from 'classnames'

const Icon = ({ className, ...props }) => {
  return (
    <i className={classnames('material-icons', className)} {...props} />
  )
}

export default Icon
