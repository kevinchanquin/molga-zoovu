import { map } from 'lodash'

export const breakpoints = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 600px)',
  md: '(min-width: 960px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1920px)'
}

export const colors = {
  primary: '#3B0078',
  secondary: '#00E5B1',
  dark: '#333333',
  white: '#FFFFFF',
  border: '#D6DCE7',
  gray: '#97A1B5',
  error: '#f44336'
}

export const transition = (property, time) => {
  if (Array.isArray(property)) {
    return `
      transition: ${map(property, (prop, index) => (
        `${prop} ${Array.isArray(time) ? time[index] : time} cubic-bezier(0.19, 1, 0.22, 1)`
      ))};
      will-change: ${map(property, (prop, index) => `${prop}`)};
    `
  }

  return `
    transition: ${property} ${time} cubic-bezier(0.19, 1, 0.22, 1);
    will-change: ${property};
  `
}
