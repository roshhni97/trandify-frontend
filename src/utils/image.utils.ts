export function getElementRects(
  elementOrSelector:
    | {
        getBoundingClientRect: () => { height: number; width: number };
      }
    | string
) {
  const element =
    typeof elementOrSelector === "string"
      ? document.querySelector(elementOrSelector)
      : elementOrSelector;

  if (!element) {
    console.error("Element not found.");
    return null;
  }

  const rect = element.getBoundingClientRect();
  return {
    height: rect.height,
    width: rect.width,
  };
}

export function convertCoordinates({
  currentWidth,
  currentHeight,
  x,
  y,
}: {
  currentWidth: number;
  currentHeight: number;
  x: number;
  y: number;
}) {
  const baseWidth = 1440;
  const baseHeight = 900;

  const scaleFactorWidth = baseWidth / currentWidth;
  const scaleFactorHeight = baseHeight / currentHeight;

  const newX = x * scaleFactorWidth;
  const newY = y * scaleFactorHeight;

  return { newX, newY };
}

export function convertCoordinatesDynamicRes({
  currentWidth,
  currentHeight,
  x,
  y,
  convertWidth,
  convertHeight,
}: {
  currentWidth: number;
  currentHeight: number;
  x: number;
  y: number;
  convertWidth: number;
  convertHeight: number;
}) {
  // Calculating scaling factors
  const scaleFactorWidth = convertWidth / currentWidth;
  const scaleFactorHeight = convertHeight / currentHeight;

  // Scaling X and Y coordinates
  const newX = x * scaleFactorWidth;
  const newY = y * scaleFactorHeight;

  return { newX, newY };
}
