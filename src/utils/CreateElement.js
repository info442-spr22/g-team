export default function createElement(generator, x1, y1, x2, y2, stickerType, stickerProps) {
  let roughElement;
  let leftX = x1 < x2 ? x1 : x2
  let topY = y1 < y2 ? y1 : y2
  let width = Math.abs(x1 - x2)
  let height = Math.abs(y1 - y2)
  let longerSide = width > height ? width : height
  let xScale
  let yScale
  let points = null
  let selectInfo = {x: leftX, y: topY, width: width, height: height}
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
      points = [ [x1, y1], [x2, y2],
        [ x2 - Math.cos(angle + arrowheadAngle) * armLength, y2 - Math.sin(angle + arrowheadAngle) * armLength ],
        [ x2, y2 ],
        [ x2 - Math.cos(angle - arrowheadAngle) * armLength, y2 - Math.sin(angle - arrowheadAngle) * armLength ],
        [ x2, y2 ],
      ]
      roughElement = generator.linearPath(points, {fill: 'black'})


      let minX = Math.min.apply(Math, points.map(row => row[0]));
      let minY = Math.min.apply(Math, points.map(row => row[1]))
      selectInfo = {
        points: points,
        x: minX,
        y: minY,
        width: Math.max.apply(Math, points.map(row => row[0])) - minX,
        height: Math.max.apply(Math, points.map(row => row[1])) - minY
      }

      break
    case ('circle'):
      roughElement = generator.circle(leftX + width / 2, topY + height / 2, longerSide, {fill: 'black'})

      selectInfo.x = leftX + width / 2 - longerSide / 2
      selectInfo.y = topY + height / 2 - longerSide / 2
      selectInfo.width = longerSide
      selectInfo.height = longerSide
      break
    case ('ellipse'):
      roughElement = generator.ellipse(leftX + (width / 2), topY + (height / 2), width, height, {fill: 'black'})
      selectInfo.x = leftX
      selectInfo.y = topY
      break
    case ('triangle'):
      let rightX = x1 < x2 ? x2 : x1
      let botY = y1 < y2 ? y2 : y1
      roughElement = generator.path(
        "M " + [((width / 2) + leftX), topY] + " L " + [rightX, botY] + " H " +
        leftX + " Z", {fill: 'black'}
      )

      selectInfo.points = [
        [(width / 2 + leftX), topY],
        [rightX, botY],
        [leftX, botY]
      ]
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
      selectInfo.points = [
        [xScale * 24 + leftX, yScale * 0 + topY],
        [xScale * 18 + leftX, yScale * 18 + topY],
        [leftX, yScale * 18 + topY],
        [xScale * 15 + leftX, yScale * 28 + topY],
        [xScale * 9 + leftX, yScale * 45 + topY],
        [xScale * 24 + leftX, yScale * 35 + topY],
        [xScale * 38 + leftX, yScale * 45 + topY],
        [xScale * 33 + leftX, yScale * 28 + topY],
        [xScale * 48 + leftX, yScale * 18 + topY],
        [xScale * 30 + leftX, yScale * 18 + topY]
      ]

      selectInfo.width = xScale * 48
      selectInfo.height = yScale * 45

      break
    case ('heart'):
      xScale = width / 32
      yScale = height / 32
      roughElement = generator.path(`
        M ${leftX},${topY + 10 * yScale}
        A ${xScale},${yScale} 0,0,1 ${leftX + 16 * xScale},${topY + 10 * yScale}
        A ${xScale},${yScale} 0,0,1 ${leftX + width},${topY + 10 * yScale}
        Q ${leftX + width},${topY + 20 * yScale} ${leftX + 16 * xScale},${topY + 30 * yScale}
        Q ${leftX},${topY + 20 * yScale} ${leftX},${topY + 10 * yScale} z
      `, {fill: 'black'})

      selectInfo.moved = {x: leftX, y: topY + 10 * yScale}
      selectInfo.circle1 = {rx: 8 * xScale, ry: 10 * yScale, h: leftX + 8 * xScale, k: topY + 10 * yScale}
      selectInfo.circle2 = {rx: 8 * xScale, ry: 10 * yScale, h: leftX + width * (3/4), k: topY + 10 * yScale}
      selectInfo.topBez = {
        x: leftX,
        y: topY + 10 * yScale,
        width: width,
        height: 15 * yScale
      }
      selectInfo.botBez = {
        x: leftX + 8 * xScale,
        y: topY + 25 * yScale,
        width: (leftX + width * (3/4)) - (leftX + 8 * xScale),
        height: 5 * yScale
      }

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

      selectInfo.x = (x1 < x2 ? x1 : x1 - longerSide)
      selectInfo.y = (y1 < y2 ? y1 : y1 - longerSide)
      selectInfo.width = longerSide
      selectInfo.height = longerSide
      break
    case ('rectangle'):
      roughElement = generator.rectangle(leftX, topY, width, height, {fill: 'black'})
      break
    default:
  }
  return {x1, y1, x2, y2, selectInfo, stickerType, roughElement };
}

