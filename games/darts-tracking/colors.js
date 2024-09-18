function findRedRegionsOnDartboard(imageSrc) {
  // Read the image
  let src = cv.imread(imageSrc);
  let hsv = new cv.Mat();
  let mask = new cv.Mat();
  let redRegions = [];

  // Convert to HSV
  cv.cvtColor(src, hsv, cv.COLOR_BGR2HSV);

  // Define ranges for red color
  let lowRed1 = new cv.Scalar(0, 50, 20);
  let highRed1 = new cv.Scalar(5, 255, 255);
  let lowRed2 = new cv.Scalar(175, 50, 20);
  let highRed2 = new cv.Scalar(180, 255, 255);

  // Create masks for red regions
  let mask1 = new cv.Mat();
  let mask2 = new cv.Mat();
  cv.inRange(hsv, lowRed1, highRed1, mask1);
  cv.inRange(hsv, lowRed2, highRed2, mask2);

  // Combine masks
  cv.bitwise_or(mask1, mask2, mask);

  // Find contours
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  cv.findContours(mask, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);

  // Filter and store regions
  for (let i = 0; i < contours.size(); ++i) {
    let cnt = contours.get(i);
    let rect = cv.boundingRect(cnt);
    redRegions.push(rect);
  }

  // Clean up
  src.delete(); hsv.delete(); mask.delete();
  mask1.delete(); mask2.delete();
  contours.delete(); hierarchy.delete();

  return redRegions;
}