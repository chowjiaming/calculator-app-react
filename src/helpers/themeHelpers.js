export const themeClass = (themeNumber) => {
  switch (themeNumber) {
    case 1:
      return "-theme-one";
    case 2:
      return "-theme-two";
    case 3:
      return "-theme-three";
    default:
      return "-theme-one";
  }
};
