function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function findSlope(point1, point2) {
  return (point1[1] - point2[1]) / (point1[0] - point2[0])
}

function findYInter(point, slope) {
  return point[1] - slope * point[0]
}

function checkXToLine(x, y, slope, yInter, checkGreater = true) {
  return checkGreater ?
    x >= (y - yInter) / slope :
    x <= (y - yInter) / slope
}

function checkYToLine(x, y, slope, yInter, checkGreater = true) {
  return checkGreater ?
    y >= slope * x + yInter :
    y <= slope * x + yInter
}

function checkCorrectSideLine(x, y, point1, point2, xGreater, yGreater, isHorizontal = false) {
  let slope = findSlope(point1, point2)
  let yInter = findYInter(point1, slope)
  let check
  if (isHorizontal) {
    check = checkYToLine(x, y, 0, yInter, yGreater)
  } else {
    check = (
      checkXToLine(x, y, slope, yInter, xGreater) &&
      checkYToLine(x, y, slope, yInter, yGreater)
    )
  }

  return check
}

function isWithinElement(x, y, element) {
  const {x1, x2, y1, y2} = element
  let isWithin;
  let minX
  let maxX
  let minY
  let maxY
  let points
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
      points = selectInfo.points
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
    case ("ellipse"):
      let xRadius = selectInfo.width / 2
      let yRadius = selectInfo.height / 2
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
    case("triangle"):
      points = selectInfo.points
      // left diag line
      let isLeftLine = checkCorrectSideLine(x, y, points[0], points[2], true, true)
      // right diag line

      let isRightLine = checkCorrectSideLine(x, y, points[0], points[1], false, true)

      // bottom line
      let isBotLine = checkCorrectSideLine(x, y, points[1], points[2], true, false, true)

      isWithin = isLeftLine && isRightLine && isBotLine
      break
    case("star"):
      points = selectInfo.points

      // check top triangle

      let isTopTriangle = (
        checkCorrectSideLine(x, y, points[0], points[1], true, true) && // left line
        checkCorrectSideLine(x, y, points[0], points[9], false, true) && // right line
        checkCorrectSideLine(x, y, points[1], points[9], true, false, true) // bottom line
      )


      // check lefttop triangle
      let isLeftTopTriangle = (
        checkCorrectSideLine(x, y, points[1], points[2], true, true, true) && // top line
        checkCorrectSideLine(x, y, points[2], points[3], true, false) && // left line
        checkCorrectSideLine(x, y, points[1], points[3], false, false) // right line
      )

      // check leftbot triangle

      let isLeftBotTriangle = (
        checkCorrectSideLine(x, y, points[3], points[4], true, true) && // left line
        checkCorrectSideLine(x, y, points[4], points[5], false, false) && // right line
        checkCorrectSideLine(x, y, points[3], points[5], false, true) // top line
      )

      // check rightbot triangle

      let isRightBotTriangle = (
        checkCorrectSideLine(x, y, points[5], points[6], true, false) && // left line
        checkCorrectSideLine(x, y, points[6], points[7], false, true) && // right line
        checkCorrectSideLine(x, y, points[5], points[7], true, true) // top line
      )

      // check righttop triangle

      let isRightTopTriangle = (
        checkCorrectSideLine(x, y, points[7], points[9], true, false) && // left line
        checkCorrectSideLine(x, y, points[7], points[8], false, false) && // right line
        checkCorrectSideLine(x, y, points[8], points[9], true, true, true) // top line
      )

      // check inside pentagon

      let isInsidePenta = (
        checkCorrectSideLine(x, y, points[1], points[9], true, true, true) && // top line
        checkCorrectSideLine(x, y, points[1], points[3], true, true) && // topleft line
        checkCorrectSideLine(x, y, points[3], points[5], true, false) && // botleft line
        checkCorrectSideLine(x, y, points[5], points[7], false, false) && // botright line
        checkCorrectSideLine(x, y, points[7], points[9], false, true) // topright line
      )


      isWithin = (
        isTopTriangle || isLeftTopTriangle || isLeftBotTriangle ||
        isRightBotTriangle || isRightTopTriangle || isInsidePenta
      )

      break
    case ("heart"):
      let circ1 = selectInfo.circle1
      let isYLessTopCirc1 = (
        y <= circ1.k + circ1.ry *
          Math.sqrt(1 - (Math.pow(x - circ1.h, 2) / Math.pow(circ1.rx, 2)))
      )

      let isYMoreBotCirc1 = (
        y >= circ1.k - circ1.ry *
          Math.sqrt(1 - (Math.pow(x - circ1.h, 2) / Math.pow(circ1.rx, 2)))
      )
      let isXLessRightCirc1 = (
        x <= circ1.h + circ1.rx *
          Math.sqrt(1 - (Math.pow(y - circ1.k, 2) / Math.pow(circ1.ry, 2)))
      )
      let isXMoreLeftCirc1 = (
        x >= circ1.h - circ1.rx *
          Math.sqrt(1 - (Math.pow(y - circ1.k, 2) / Math.pow(circ1.ry, 2)))
      )

      let isInCirc1 = isYLessTopCirc1 && isYMoreBotCirc1 && isXLessRightCirc1 && isXMoreLeftCirc1

      let circ2 = selectInfo.circle2
      let isYLessTopCirc2 = (
        y <= circ2.k + circ2.ry *
          Math.sqrt(1 - (Math.pow(x - circ2.h, 2) / Math.pow(circ2.rx, 2)))
      )

      let isYMoreBotCirc2 = (
        y >= circ2.k - circ2.ry *
          Math.sqrt(1 - (Math.pow(x - circ2.h, 2) / Math.pow(circ2.rx, 2)))
      )
      let isXLessRightCirc2 = (
        x <= circ2.h + circ2.rx *
          Math.sqrt(1 - (Math.pow(y - circ2.k, 2) / Math.pow(circ2.ry, 2)))
      )
      let isXMoreLeftCirc2 = (
        x >= circ2.h - circ2.rx *
          Math.sqrt(1 - (Math.pow(y - circ2.k, 2) / Math.pow(circ2.ry, 2)))
      )

      let isInCirc2 = isYLessTopCirc2 && isYMoreBotCirc2 && isXLessRightCirc2 && isXMoreLeftCirc2

      let topBez = selectInfo.topBez
      minX = topBez.x
      maxX = minX + topBez.width
      minY = topBez.y
      maxY = minY + topBez.height
      let isInTopBez =  x >= minX && x <= maxX && y >= minY && y <= maxY;

      let botBez = selectInfo.botBez
      minX = botBez.x
      maxX = minX + botBez.width
      minY = botBez.y
      maxY = minY + botBez.height
      let isInBotBez =  x >= minX && x <= maxX && y >= minY && y <= maxY;


      isWithin = isInCirc1 || isInCirc2 || isInTopBez || isInBotBez



      break
    default:
  }
  return isWithin;
}

export default function getElementAtPosition(x, y, elements) {
  // find all elements at position, store into a queue
  // if queue already exists, compare the two
  // if there are new elements select the first new one
  // if there are the same elements
  //    pop from queue, put at the bottom of the queue, select the popped element
  // if there are old elements that are not in the new queue, they should be deleted
  // change to elements.filter() to get all elements that fit isWithinElement
  return elements.find(element => isWithinElement(x, y, element))
}