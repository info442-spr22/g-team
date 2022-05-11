export default function createElement(generator, x1, y1, x2, y2, stickerType, stickerProps) {
  let roughElement;
  let leftX = x1 < x2 ? x1 : x2
  let topY = y1 < y2 ? y1 : y2
  let width = Math.abs(x1 - x2)
  let height = Math.abs(y1 - y2)
  let longerSide = width > height ? width : height
  let rightX = x1 < x2 ? x2 : x1
  let botY = y1 < y2 ? y2 : y1
  let xScale
  let yScale
  switch (stickerType) {
    case ('line'):
      roughElement = generator.line(x1, y1, x2, y2, {fill: 'black'})
      break
    case ('arrow'):
      let armLength = 0.3 * Math.sqrt(width * width + height * height)
      let angle = Math.atan(height / width)
      let arrowheadAngle = Math.PI / 4
      if (x1 <= x2) {
        if (y1 <= y2) {
          // angle = angle
        } else {
          angle = angle * -1
        }
      } else {
        angle = angle + Math.PI
        if (y1 <= y2) {
          angle = angle * -1
        } else {
          // angle = angle
        }
      }
      let points = [ [x1, y1], [x2, y2],
        [ x2 - Math.cos(angle + arrowheadAngle) * armLength, y2 - Math.sin(angle + arrowheadAngle) * armLength ],
        [ x2, y2 ],
        [ x2 - Math.cos(angle - arrowheadAngle) * armLength, y2 - Math.sin(angle - arrowheadAngle) * armLength ],
        [ x2, y2 ],
      ]
      roughElement = generator.linearPath(points, {fill: 'black'})
      break
    case ('circle'):
      roughElement = generator.circle(leftX + width / 2, topY + height / 2, longerSide, {fill: 'black'})
      break
    case ('ellipse'):
      roughElement = generator.ellipse(leftX + (width / 2), topY + (height / 2), width, height, {fill: 'black'})
      break
    case ('triangle'):
      roughElement = generator.path(
        "M " + [((width / 2) + leftX), topY] + " L " + [rightX, botY] + " H " +
        leftX + " Z", {fill: 'black'}
      )
      break
    case ('star'):
      xScale = Math.abs(x1 - x2) / 45
      yScale = Math.abs(y1 - y2) / 45
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
        " L " + [xScale * 24 + leftX, yScale * 0 + topY] + " Z", {fill: 'black'}
      )
      break
    case ('heart'):
      xScale = width / 32
      yScale = height / 32
      roughElement = generator.path(`
        M ${leftX},${topY + 10 * yScale}
        A ${5 * xScale / 2},${5 * xScale / 2} 0,0,1 ${leftX + 16 * xScale},${topY + 10 * yScale}
        A ${5 * xScale / 2},${5 * xScale / 2} 0,0,1 ${leftX + width},${topY + 10 * yScale}
        Q ${leftX + width},${topY + 20 * yScale} ${leftX + 16 * xScale},${topY + 30 * yScale}
        Q ${leftX},${topY + 20 * yScale} ${leftX},${topY + 10 * yScale} z
      `, {fill: 'black'})
      break
    case ('square'):
      if (x1 <= x2) {
        if (y1 <= y2) {
          roughElement = generator.rectangle(x1, y1, longerSide, longerSide, {fill: 'black'})
        } else {
          roughElement = generator.rectangle(x1, y1 - longerSide, longerSide, longerSide, {fill: 'black'})
        }
      } else {
        if (y1 <= y2) {
          roughElement = generator.rectangle(x1 - longerSide, y1, longerSide, longerSide, {fill: 'black'})
        } else {
          roughElement = generator.rectangle(x1 - longerSide, y1 - longerSide, longerSide, longerSide, {fill: 'black'})
        }
      }
      break
    case ('rectangle'):
      roughElement = generator.rectangle(leftX, topY, width, height, {fill: 'black'})
      break
    default:
  }
  return {x1, y1, x2, y2, roughElement };
}

