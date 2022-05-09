export default function createElement(generator, x1, y1, x2, y2, stickerType, stickerProps) {
  let roughElement;
  let leftX = x1 < x2 ? x1 : x2
  let topY = y1 < y2 ? y1 : y2
  let width = Math.abs(x1 - x2)
  let height = Math.abs(y1 - y2)
  let longerSide = width > height ? width : height
  let rightX = x1 < x2 ? x2 : x1
  let botY = y1 < y2 ? y2 : y1
  switch (stickerType) {
    case ('line'):
      roughElement = generator.line(x1, y1, x2, y2)
      break
    // case ('arrow'):
    //   break
    case ('circle'):
      roughElement = generator.circle(x1 + (x2 - x1) / 2, y1 + (y2 - y1) / 2, longerSide)
      break
    case ('ellipse'):
      roughElement = generator.ellipse(leftX + (x2 - x1) / 2, topY + (y2 - y1) / 2, (x2 - x1))
      break
    case ('triangle'):
      roughElement = generator.path(
        "M " + [((width / 2) + leftX), topY] + " L " + [rightX, botY] + " H " +
        leftX + " Z"
      )
      break
    case ('star'):
      let xScale = Math.abs(x1 - x2) / 45
      let yScale = Math.abs(y1 - y2) / 45
      roughElement = generator.path(
        "M " + [xScale * 24 + leftX, yScale * 0 + topY] +
        " L " + [xScale * 18 + leftX, yScale * 18 + topY] +
        " H " + leftX +
        " L " + [xScale * 15 + leftX, yScale * 28 + topY] +
        " L " + [xScale * 9 + leftX, yScale * 45 + topY] +
        " L " + [xScale * 24 + leftX, yScale * 35 + topY] +
        " L " + [xScale * 38 + leftX, yScale * 45 + topY] +
        " L " + [xScale * 33 + leftX, yScale * 28 + topY] +
        " L " + [xScale * 48 + leftX, yScale * 18 + topY] +
        " H " + (xScale * 30 + leftX) +
        " L " + [xScale * 24 + leftX, yScale * 0 + topY] + " Z"
      )
      break
    // case ('heart'):
    //   break
    case ('square'):
      if (x1 <= x2) {
        if (y1 <= y2) {
          roughElement = generator.rectangle(x1, y1, longerSide, longerSide)
        } else {
          roughElement = generator.rectangle(x1, y1 - longerSide, longerSide, longerSide)
        }
      } else {
        if (y1 <= y2) {
          roughElement = generator.rectangle(x1 - longerSide, y1, longerSide, longerSide)
        } else {
          roughElement = generator.rectangle(x1 - longerSide, y1 - longerSide, longerSide, longerSide)
        }
      }
      break
    case ('rectangle'):
      roughElement = generator.rectangle(leftX, topY, width, height)
      break
    default:
  }
  return {x1, y1, x2, y2, roughElement };
}

