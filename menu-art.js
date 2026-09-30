// Display the owner's original menu illustrations without altering the source image.
// Coordinates refer to the 1060 × 1484 supplied menu. Each viewport shows only one illustration.
export const menuArt = {
  margherita: [122, 325, 362, 168],
  marinara: [612, 330, 355, 168],
  'potato-rosemary': [126, 602, 355, 172],
  focaccia: [607, 599, 362, 179],
  pistachio: [126, 982, 360, 163],
  pumpkin: [610, 981, 356, 166],
  truffle: [126, 1245, 355, 154],
  seasonal: [610, 1244, 358, 154],
};
export function isMenuArt(value) {
  const [file, key, extra] = value.split('#');
  return file === '/assets/leone-menu.png' && Object.hasOwn(menuArt, key) && extra === undefined;
}
