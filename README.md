Generates markers and places them evenly around a specified page size. Exports to SVG and outputs pattern data that can be used with ARToolKit.

## Example

Example implementation is in `index.html`, which you can use to generate a marker layout. However, this does not implement all supported options and won't let you specify which marker shapes to include in the generated layout.

## Usage

Initialize a `MarkerPatternGenerator`.

```javascript
let markerGenerator = new MarkerPatternGenerator(
  pageWidth,
  pageHeight,
  markerSize,
  [options]
);
```

where `options` include

```javascript
  {
    markerCount: 24, //number of markers to use
    markerShapes: {
      type: "individual", // can be either "subset" or "individual". "subset" expands markers array to include all markers between the first and second element, "individual" uses all the markers specified in the markers array without expanding a range.
      markers: [0, 1, 2, 3, 4, 5, 6, 7, 8,15, 14, 23, 24, 34, 32, 39, 40, 41, 42, 43, 44, 45, 46, 47], // an array of marker shape IDs, if using type="subset" the array needs to have two elements: [startMarkerId, endMarkerId]. If using "individual", it can include as many elements as needed.
    },
    remove: 39 //the marker ID to exclude from the layout. This removes one marker from the layout leaving empty space in its place.
  }
```

Then use the `markerGenerator` to `generateView`.

```javascript
let marker = markerGenerator.generateView();
```

This returns an object with the generated svg and the data pattern: 
```javascript
marker = {
    svg, //svg element
    pattern //data pattern
}
```

