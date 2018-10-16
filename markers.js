const markers = {
  0: [0, 1, 1, 1, 1, 1, 0, 1, 1],
  1: [0, 1, 1, 1, 1, 1, 0, 0, 1],
  2: [0, 1, 1, 1, 1, 0, 0, 1, 1],
  3: [0, 1, 1, 1, 1, 0, 0, 0, 1],
  4: [0, 1, 1, 1, 0, 1, 0, 1, 1],
  5: [0, 1, 1, 1, 0, 1, 0, 0, 1],
  6: [0, 1, 1, 1, 0, 0, 0, 1, 1],
  7: [0, 1, 1, 1, 0, 0, 0, 0, 1],
  8: [0, 1, 1, 0, 1, 1, 0, 1, 1],
  9: [0, 1, 1, 0, 1, 1, 0, 0, 1],
  10: [0, 1, 1, 0, 1, 0, 0, 1, 1],
  11: [0, 1, 1, 0, 1, 0, 0, 0, 1],
  12: [0, 1, 1, 0, 0, 1, 0, 1, 1],
  13: [0, 1, 1, 0, 0, 1, 0, 0, 1],
  14: [0, 1, 1, 0, 0, 0, 0, 1, 1],
  15: [0, 1, 1, 0, 0, 0, 0, 0, 1],
  16: [0, 1, 0, 1, 1, 1, 0, 1, 1],
  17: [0, 1, 0, 1, 1, 1, 0, 0, 1],
  18: [0, 1, 0, 1, 1, 0, 0, 1, 1],
  19: [0, 1, 0, 1, 1, 0, 0, 0, 1],
  20: [0, 1, 0, 1, 0, 1, 0, 1, 1],
  21: [0, 1, 0, 1, 0, 1, 0, 0, 1],
  22: [0, 1, 0, 1, 0, 0, 0, 1, 1],
  23: [0, 1, 0, 1, 0, 0, 0, 0, 1],
  24: [0, 1, 0, 0, 1, 1, 0, 1, 1],
  25: [0, 1, 0, 0, 1, 1, 0, 0, 1],
  26: [0, 1, 0, 0, 1, 0, 0, 1, 1],
  27: [0, 1, 0, 0, 1, 0, 0, 0, 1],
  28: [0, 1, 0, 0, 0, 1, 0, 1, 1],
  29: [0, 1, 0, 0, 0, 1, 0, 0, 1],
  30: [0, 1, 0, 0, 0, 0, 0, 1, 1],
  31: [0, 1, 0, 0, 0, 0, 0, 0, 1],
  32: [0, 0, 1, 1, 1, 1, 0, 1, 1],
  33: [0, 0, 1, 1, 1, 1, 0, 0, 1],
  34: [0, 0, 1, 1, 1, 0, 0, 1, 1],
  35: [0, 0, 1, 1, 1, 0, 0, 0, 1],
  36: [0, 0, 1, 1, 0, 1, 0, 1, 1],
  37: [0, 0, 1, 1, 0, 1, 0, 0, 1],
  38: [0, 0, 1, 1, 0, 0, 0, 1, 1],
  39: [0, 0, 1, 1, 0, 0, 0, 0, 1],
  40: [0, 0, 1, 0, 1, 1, 0, 1, 1],
  41: [0, 0, 1, 0, 1, 1, 0, 0, 1],
  42: [0, 0, 1, 0, 1, 0, 0, 1, 1],
  43: [0, 0, 1, 0, 1, 0, 0, 0, 1],
  44: [0, 0, 1, 0, 0, 1, 0, 1, 1],
  45: [0, 0, 1, 0, 0, 1, 0, 0, 1],
  46: [0, 0, 1, 0, 0, 0, 0, 1, 1],
  47: [0, 0, 1, 0, 0, 0, 0, 0, 1],
  48: [0, 0, 0, 1, 1, 1, 0, 1, 1],
  49: [0, 0, 0, 1, 1, 1, 0, 0, 1],
  50: [0, 0, 0, 1, 1, 0, 0, 1, 1],
  51: [0, 0, 0, 1, 1, 0, 0, 0, 1],
  52: [0, 0, 0, 1, 0, 1, 0, 1, 1],
  53: [0, 0, 0, 1, 0, 1, 0, 0, 1],
  54: [0, 0, 0, 1, 0, 0, 0, 1, 1],
  55: [0, 0, 0, 1, 0, 0, 0, 0, 1],
  56: [0, 0, 0, 0, 1, 1, 0, 1, 1],
  57: [0, 0, 0, 0, 1, 1, 0, 0, 1],
  58: [0, 0, 0, 0, 1, 0, 0, 1, 1],
  59: [0, 0, 0, 0, 1, 0, 0, 0, 1],
  60: [0, 0, 0, 0, 0, 1, 0, 1, 1],
  61: [0, 0, 0, 0, 0, 1, 0, 0, 1],
  62: [0, 0, 0, 0, 0, 0, 0, 1, 1],
  63: [0, 0, 0, 0, 0, 0, 0, 0, 1]
};
const xmlns = "http://www.w3.org/2000/svg";

class MarkerPatternGenerator {
  constructor(
    pageWidth,
    pageHeight,
    markerSize,
    options = {
      markerCount: 24,
      markerShapes: {
        type: "individual",
        // prettier-ignore
        markers: [0, 1, 2, 3, 4, 5, 6, 7, 8,15, 14, 23, 24, 34, 32, 39, 40, 41, 42, 43, 44, 45, 46, 47]
      },
      remove: 39
    }
  ) {
    this.pageDim = { w: pageWidth, h: pageHeight };
    this.markerSize = markerSize;
    this.markers = [];
    this._setMarkers(options);
    this.markerPattern = "";
  }

  _setMarkers(options) {
    if (options.remove != null) {
      this.markerToRemove = options.remove;
    }
    switch (options.markerShapes.type) {
      case "subset":
        if (options.markerShapes.markers.length < 0)
          throw new Error(
            "markerShapes.markers for markerShapes.type='subset' needs to be an Array of 2 numbers denoting the beginning and the end of the markers subset."
          );
        if (options.markerShapes.markers.length > 2)
          console.warn(
            "markerShapes.markers for markerShapes.type='subset' only needs 2 numbers. Using the first 2 numbers and ignoring the rest. Did you mean to set markerShapes.type to 'individual'?"
          );
        if (
          options.markerShapes.markers[0] > 63 ||
          options.markerShapes.markers[0] < 0 ||
          options.markerShapes.markers[1] > 63 ||
          options.markerShapes.markers[1] < 0
        )
          throw new Error(
            "markerShapes.markers for markerShapes.type='subset' needs to be an Array of 2 numbers denoting the beginning and the end of the markers subset."
          );
        this.markers = Array.from(Array(64).keys()).slice(
          Math.min(
            options.markerShapes.markers[0],
            options.markerShapes.markers[1]
          ),
          Math.max(
            options.markerShapes.markers[0],
            options.markerShapes.markers[1]
          ) + 1
        );
        break;
      case "individual":
        this.markers = [...options.markerShapes.markers];
        break;
      default:
        console.warn(
          "markerShapes.type is set to an unrecognized value. Setting to 'individual' instead"
        );
        this.markers = [...options.markerShapes.markers];
        break;
    }

    if (options.markerCount && options.markerCount > 0) {
      this.markerCount = Math.max(Math.min(options.markerCount, 64), 4);
      if (this.markerCount % 2 > 0) {
        console.warn(
          "markerCount should be an even value. One marker will be removed."
        );
        this.markerCount--;
      }
    } else {
      this.markerCount = Math.max(Math.min(this.markers.length, 64), 4);
    }
    if (this.markers.length > this.markerCount) {
      console.warn(
        "The provided marker shapes exceed markerCount. Some markers will be removed."
      );
      this.markers.splice(this.markerCount);
    } else if (this.markers.length < this.markerCount) {
      console.warn(
        "markerCount is higher than the provided marker shapes. Some markers will be added."
      );
      let currentMarkerCount = this.markers.length;
      let availableMarkers = Array.from(Array(64).keys()).filter(v => {
        return this.markers.indexOf(v) < 0;
      });
      for (let i = currentMarkerCount; i < this.markerCount; i++) {
        this.markers.push(availableMarkers.splice(0, 1)[0]);
      }
    }
  }

  _generateView() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.setAttributeNS(null, "xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttributeNS(null, "id", "main-svg");
    svg.setAttributeNS(null, "width", `${this.pageDim.w}mm`);
    svg.setAttributeNS(null, "height", `${this.pageDim.h}mm`);
    svg.setAttributeNS(
      null,
      "viewBox",
      `0 0 ${this.pageDim.w} ${this.pageDim.h}`
    );
    let padding = 10;
    let pW = this.pageDim.w - 2 * padding;
    let pH = this.pageDim.h - 2 * padding;

    let wElementCount = Math.round((this.markerCount * pW) / (pW + pH) / 2) + 1;
    let hElementCount = this.markerCount / 2 - wElementCount;
    let wDiff = (pW - wElementCount * this.markerSize) / (wElementCount - 1);
    let hDiff =
      (pH - (hElementCount + 2) * this.markerSize) / (hElementCount + 1);
    console.log("marker count: " + this.markerCount);
    console.log("marker h count: " + hElementCount);
    console.log("marker w count: " + wElementCount);

    console.log("page w: " + pW);
    console.log("page h: " + pH);

    console.log("w Diff: " + wDiff);
    console.log("h Diff: " + hDiff);

    if (hDiff < this.markerSize / 4 || hDiff < this.markerSize / 4)
      console.warn(
        "Too many markers. Consider decreasing marker count or size"
      );

    this.markerPattern += this.markerCount + "\n\n";

    //populate top row
    for (let i = 0; i < wElementCount; i++) {
      let markerNumber = this.markers.splice(0, 1)[0];
      let currentMarker = this._generateMarker(markerNumber, {
        x: parseInt(padding) + (wDiff + this.markerSize) * i,
        y: padding
      });
      if (this.markerToRemove == markerNumber) continue;
      this._addMarkerToPattern(
        markerNumber,
        parseInt(padding) + (wDiff + this.markerSize) * i - this.pageDim.w / 2,
        this.pageDim.h / 2 - padding
      );
      svg.appendChild(currentMarker);
    }

    //populate sides
    for (let i = 0; i < hElementCount; i++) {
      let markerNumber = this.markers.splice(0, 1)[0];
      console.log(this.markers);
      let currentMarker = this._generateMarker(markerNumber, {
        x: padding,
        y: parseInt(padding) + (hDiff + this.markerSize) * (i + 1)
      });
      if (this.markerToRemove != markerNumber) {
        svg.appendChild(currentMarker);
        this._addMarkerToPattern(
          markerNumber,
          padding - this.pageDim.w / 2,
          this.pageDim.h / 2 -
            (parseInt(padding) + (hDiff + this.markerSize) * (i + 1))
        );
      }

      markerNumber = this.markers.splice(0, 1)[0];
      currentMarker = this._generateMarker(markerNumber, {
        x: parseInt(padding) + (wDiff + this.markerSize) * (wElementCount - 1),
        y: parseInt(padding) + (hDiff + this.markerSize) * (i + 1)
      });
      if (this.markerToRemove != markerNumber) {
        svg.appendChild(currentMarker);
        this._addMarkerToPattern(
          markerNumber,
          parseInt(padding) +
            (wDiff + this.markerSize) * (wElementCount - 1) -
            this.pageDim.w / 2,
          this.pageDim.h / 2 -
            (parseInt(padding) + (hDiff + this.markerSize) * (i + 1))
        );
      }
    }

    //populate bottom row
    for (let i = 0; i < wElementCount; i++) {
      let markerNumber = this.markers.splice(0, 1)[0];
      let currentMarker = this._generateMarker(markerNumber, {
        x: parseInt(padding) + (wDiff + this.markerSize) * i,
        y: parseInt(padding) + (hDiff + this.markerSize) * (hElementCount + 1)
      });
      if (this.markerToRemove != markerNumber) {
        svg.appendChild(currentMarker);
        this._addMarkerToPattern(
          markerNumber,
          parseInt(padding) +
            (wDiff + this.markerSize) * i -
            this.pageDim.w / 2,
          this.pageDim.h / 2 -
            (parseInt(padding) +
              (hDiff + this.markerSize) * (hElementCount + 1))
        );
      }
    }

    return {svg, pattern: this.markerPattern};
  }

  _addMarkerToPattern(number, x, y) {
    this.markerPattern += this._pad(number, 2) + '\n'; 
    this.markerPattern += this.markerSize + '\n'; 
    this.markerPattern += `1.0 0.0 0.0 ${x+10}\n`; 
    this.markerPattern += `0.0 1.0 0.0 ${y-10}\n`; 
    this.markerPattern += `0.0 0.0 0.0 0.0\n`;
    this.markerPattern += '\n'; 
  }

  _pad(number, width) {
    let z = '0';
    number = number + '';
    return number.length >= width ? number : new Array(width - number.length + 1).join(z) + number;
  }

  _generateMarker(markerNumber, options = { x: 0, y: 0 }) {
    let markerArray = markers[markerNumber];

    let marker = document.createElementNS(xmlns, "g");
    marker.id = `mm-${markerNumber}`;
    marker.setAttributeNS(
      null,
      "transform",
      `scale(${this.markerSize / 20},${this.markerSize / 20}) translate(${
        options.x
      },${options.y})`
    );

    let mainRect = document.createElementNS(xmlns, "rect");
    mainRect.setAttributeNS(null, "id", `rect-main-${markerNumber}`);
    mainRect.setAttributeNS(null, "x", 0);
    mainRect.setAttributeNS(null, "y", 0);
    mainRect.setAttributeNS(null, "width", 20);
    mainRect.setAttributeNS(null, "height", 20);
    mainRect.setAttributeNS(
      null,
      "style",
      "color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
    );

    let whiteArea = document.createElementNS(xmlns, "g");
    whiteArea.setAttributeNS(null, "id", "white-area");

    for (let i = 0; i < markerArray.length; i++) {
      if (markerArray[i] == 0) continue;
      let x = (i % 3) * 3.333 + 5;
      let y = Math.floor(i / 3) * 3.333 + 5;
      let s = 3.345;
      let subRect = document.createElementNS(xmlns, "rect");
      subRect.setAttributeNS(null, "id", `sub-${i % 3}${Math.floor(i / 3)}`);
      subRect.setAttributeNS(
        null,
        "style",
        "color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
      );
      subRect.setAttributeNS(null, "x", x);
      subRect.setAttributeNS(null, "y", y);
      subRect.setAttributeNS(null, "width", s);
      subRect.setAttributeNS(null, "height", s);

      whiteArea.appendChild(subRect);
    }

    marker.appendChild(mainRect);
    marker.appendChild(whiteArea);

    return marker;
  }
}
