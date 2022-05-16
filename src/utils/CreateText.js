export default function createText(ctx, x, y, text, textElement = null) {
  // if there is no passed in element to draw, use default
  if (textElement === null) {
    textElement = {
      font: "Comic Sans MS",
      size: "30px",
      align: "left",
      style: "black",
      text: text,
      location: {
        x: x,
        y: y
      },
      stickerType: "text"
    }
  }

  // set textbox parameters
  ctx.font = textElement.size + " " + textElement.font
  ctx.fillStyle = textElement.style
  ctx.textAlign = textElement.align

  // add selection information
  let metrics = ctx.measureText(textElement.text)
  let width = metrics.width
  let height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent // code from here: https://stackoverflow.com/a/45789011
  textElement.selectInfo = {
    width: width,
    height: height,
    x: textElement.align === "left" ? x
                                    : textElement.align === "center" ? x + width / 2
                                                                     : x + width,
    y: y
  }

  // draw textbox
  ctx.fillText(textElement.text, x, y + height)

  return textElement;
}