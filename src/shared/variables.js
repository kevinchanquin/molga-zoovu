export const breakpoints = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 600px)',
  md: '(min-width: 960px)',
  lg: '(min-width: 1280px)',
  xl: '(min-width: 1920px)'
}

export const colors = {
  primary: '#3B0078',
  border: '#D6DCE7',
  gray: '#9EA7B9',
  dark: '#333333',
  white: '#FFFFFF'
}

export const transition = (property, time) => {
  return `
    transition: ${property} ${time} cubic-bezier(0.19, 1, 0.22, 1);
    will-change: ${property};
  `
}
