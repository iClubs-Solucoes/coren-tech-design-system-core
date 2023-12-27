export const shadow = {
  card: '0 0.8rem 1.6rem 0 #B8B8B829',
  toast: '-1.6rem 1.6rem 3.2rem 0 ##E8E8E8',
  drawer: '-1.6rem -1.6rem 8rem 0rem #B8B8B829',
};

export const colors = {
  normal: {
    black: '#1c1c1c',
    defaultBlack: '#000000',
    white: '#ffffff',
  },
  soft: {
    orange1: '#FFE7DF',
    orange2: '#FFCFC0',
    orange3: '#FFB48A',
    orange4: '#FFA14A',
    orange5: '#F58C2B',
    orange6: '#D26500',

    green1: '#EEFFE3',
    green2: '#D4FDC6',
    green3: '#A4EBA7',
    green4: '#44DF95',
    green5: '#00B57E',
    green6: '#00704E',

    red1: '#E63338',
    red2: '#b6161c',
    red3: '#DF4444',
    red4: '#FF8F8F',

    blue1: '#73C1E0',
    blue2: '#207090',
  },
  neutral: {
    white1: '#F4F4F4',

    gray1: '#E8E8E8',
    gray2: '#CDCDCD',
    gray3: '#969696',
    gray4: '#545454',
    gray5: '#323232',
    gray6: '#DCDCDC',
    gray7: '#565656',

    black1: '#161616',
    black2: '#2A2A2A',
    black3: '#1C1B1F',
  },
} as const;

export const font = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  extrabold: 700,
  black: 900,
  sizes: {
    base: '1rem',
    small: '1.2rem',
    normal: ' 1.4rem',
    large: '1.6rem',
    heading06: '1.8rem',
    heading05: '2rem',
    heading04: '2.4rem',
    heading03: '2.8rem',
    heading02: '3rem',
    heading01: '4rem',
  },
  lineHeight: {
    xxSmall: '1.6rem',
    xSmall: '1.8rem',
    small: '2.1rem',
    normal: '2.4rem',
    large: '2.7rem',
    heading06: '2.8rem',
    heading05: '2.9rem',
    heading04: '3.4rem',
    heading03: '3.8rem',
    heading02: '4.3rem',
    heading01: '5rem',
  },
  family: {
    Inter: 'Inter',
  },
  presets: {
    primaryTitles: '300 4.0rem Inter',
    secondaryTitles: '300 2.4rem Inter',
    temporaryEmphasis: '500 2rem Inter',
    enunciation: '300 1.6rem Inter',
    titlesAndLabels: '500 1.6rem Inter',
    bodyAndValue: '400 1.6rem Inter',
    smallButtons: '500 1.4rem Inter',
  },
} as const;

export const ZIndex = {
  base: 10,
  dropdown: 15,
  menu: 20,
  overlay: 30,
  modal: 40,
} as const;

export const breakpoints = {
  small: '576px',
  normal: '650px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
  xxxlarge: '1700px',
} as const;

export const media = {
  maxWidth: {
    1024: '@media (max-width: 1024px)',
    1366: '@media (max-width: 1366px)',
    1900: '@media (max-width: 1900px)',
    1920: '@media (max-width: 1920px)',
  },
} as const;
