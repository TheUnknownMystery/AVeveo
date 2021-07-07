import { useMemo } from 'react';
import { normalizeSnapPoints } from '../utilities';
export const useNormalizedSnapPoints = (snapPoints, topInset, containerHeight = 0, handleHeight = 0) => useMemo(() => {
  const normalizedSnapPoints = normalizeSnapPoints(snapPoints, containerHeight, topInset);
  return normalizedSnapPoints.map(normalizedSnapPoint => {
    /**
     * we subset handleHeight from the `normalizedSnapPoint` to make
     * sure that sheets and its handle will be out of the screen.
     */
    if (normalizedSnapPoint === 0 && handleHeight !== 0) {
      normalizedSnapPoint = normalizedSnapPoint - handleHeight;
    }

    return Math.max(containerHeight - normalizedSnapPoint - handleHeight, topInset);
  });
}, [snapPoints, topInset, containerHeight, handleHeight]);
//# sourceMappingURL=useNormalizedSnapPoints.js.map