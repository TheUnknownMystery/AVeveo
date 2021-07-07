import { validateSnapPoint } from './validateSnapPoint';
/**
 * Converts snap points with percentage to fixed numbers.
 */

export const normalizeSnapPoints = (snapPoints, containerHeight, topInset) => snapPoints.map(snapPoint => {
  validateSnapPoint(snapPoint);
  return typeof snapPoint === 'number' ? snapPoint : Number(snapPoint.split('%')[0]) * (containerHeight - topInset) / 100;
});
//# sourceMappingURL=normalizeSnapPoints.js.map