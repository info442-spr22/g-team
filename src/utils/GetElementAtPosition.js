function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function isWithinElement(x, y, element) {
  const {roughElement, x1, x2, y1, y2} = element
  let isWithin;
  let minX
  let maxX
  let minY
  let maxY
  let selectInfo = element.selectInfo
  switch (element.stickerType) {
    case ("rectangle"):
    case ("square"):
      minX = selectInfo.x;
      maxX = selectInfo.x + selectInfo.width;
      minY = selectInfo.y;
      maxY = selectInfo.y + selectInfo.height;
      isWithin = x >= minX && x <= maxX && y >= minY && y <= maxY;
      break
    case ("line"):
      const a = {x: x1, y: y1};
      const b = {x: x2, y: y2};
      const c = {x, y};
      const offset = distance(a, b) - (distance(a, c) + distance(b, c));
      isWithin = Math.abs(offset) < 1;
      break
    case ("arrow"):
      let points = selectInfo.points
      isWithin = false
      // last point is a duplicate for some reason, -1 to avoid
      for (let i = 1; i < points.length; i=i+2) {
        const a = {x: points[i][0], y: points[i][1]}
        const b = {x: points[i-1][0], y: points[i-1][1]}
        const c = {x, y}
        const offset = distance(a, b) - (distance(a, c) + distance(b, c));
        if (Math.abs(offset) < 1) {
          isWithin = true
        }
      }
      break
    case ("circle"):
      let xRadius = selectInfo.width / 2
      let yRadius = selectInfo.width / 2
      let xCenter = selectInfo.x + xRadius
      let yCenter = selectInfo.y + yRadius
      let isLessTopSemi = (
        y <= yCenter + yRadius *
          Math.sqrt(1 - (Math.pow(x - xCenter, 2) / Math.pow(xRadius, 2)))
      )
      let isMoreBotSemi = (
        y >= yCenter - yRadius *
          Math.sqrt(1 - (Math.pow(x - xCenter, 2) / Math.pow(xRadius, 2)))
      )
      let isLessRightSemi = (
        x <= xCenter +   xRadius *
          Math.sqrt(1 - (Math.pow(y - yCenter, 2) / Math.pow(yRadius, 2)))
      )
      let isMoreLeftSemi = (
        x >= xCenter - xRadius *
          Math.sqrt(1 - (Math.pow(y - yCenter, 2) / Math.pow(yRadius, 2)))
      )
      isWithin = isLessTopSemi && isMoreBotSemi && isLessRightSemi && isMoreLeftSemi
      break
    default:
  }
  return isWithin;
}

export default function getElementAtPosition(x, y, elements) {
  return elements.find(element => isWithinElement(x, y, element))
}