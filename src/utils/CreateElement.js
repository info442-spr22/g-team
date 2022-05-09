export default function createElement(generator, x1, y1, x2, y2, stickerType, stickerProps) {
  let roughElement;
  let leftX = x1 < x2 ? x1 : x2
  let topY = y1 < y2 ? y1 : y2
  let width = Math.abs(x1 - x2)
  let height = Math.abs(y1 - y2)
  let longerSide = width > height ? width : height
  switch (stickerType) {
    case ('line'):
      roughElement = generator.line(x1, y1, x2, y2)
      break
    // case ('arrow'):
    //   break
    case ('circle'):
      roughElement = generator.circle(leftX + width / 2, topY + height / 2, longerSide)
      break
    case ('ellipse'):
      roughElement = generator.ellipse(leftX + (width / 2), topY + (height / 2), width, height)
      break
    case ('triangle'):
      let rightX = x1 < x2 ? x2 : x1
      let botY = y1 < y2 ? y2 : y1
      roughElement = generator.path(
        "M " + [((width / 2) + leftX), topY] + " L " + [rightX, botY] + " H " +
        leftX + " Z"
      )
      break
    // case ('star'):
    //   break
    case ('heart'):
      let xScale = width / 32
      let yScale = height / 32
      roughElement = generator.path(`
        M ${leftX},${topY + 10 * yScale}
        A ${5 * xScale / 2},${5 * xScale / 2} 0,0,1 ${leftX + 16 * xScale},${topY + 10 * yScale}
        A ${5 * xScale / 2},${5 * xScale / 2} 0,0,1 ${leftX + width},${topY + 10 * yScale}
        Q ${leftX + width},${topY + 20 * yScale} ${leftX + 16 * xScale},${topY + 30 * yScale}
        Q ${leftX},${topY + 20 * yScale} ${leftX},${topY + 10 * yScale} z
      `)
      break
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
  }
  return {x1, y1, x2, y2, roughElement };
}

