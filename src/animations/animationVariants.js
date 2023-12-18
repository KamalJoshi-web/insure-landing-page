export const fadeIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: (val = 0.2) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeIn",
      duration: 0.3,
      delay: val,
    },
  }),
};
export const slideInRight = {
  initial: { x: 1000 },
  animate: (val = 0.3) => ({
    x: 0,
    transition: {
      ease: "linear",
      duration: 0.6,
      delay: val,
    },
  }),
};
export const zoomIn = {
  initial: { opacity: 0, scale: 0 },
  animate: (val = 0.3) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeIn",
      duration: 0.6,
      delay: val,
    },
  }),
};
export const zoomInStagger = {
  initial: { opacity: 0, scale: 0, x: -1000 },
  animate: (val = 0.3) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.8,
      delay: val,
    },
  }),
};
