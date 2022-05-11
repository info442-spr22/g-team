function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function isWithinElement(x, y, element) {
  const {roughElement, x1, x2, y1, y2} = element
  let isWithin;
  switch (roughElement.shape) {
    case ("rectangle"):
    case ("square"):
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);
      isWithin = x >= minX && x <= maxX && y >= minY && y <= maxY;
      break
    case ("line"):
      const a = {x: x1, y: y1};
      const b = {x: x2, y: y2};
      const c = {x, y};
      const offset = distance(a, b) - (distance(a, c) + distance(b, c));
      isWithin = Math.abs(offset) < 1;
      break
    default:
  }
  return isWithin;
}

export default function getElementAtPosition(x, y, elements) {

  return elements.find(element => isWithinElement(x, y, element))
}