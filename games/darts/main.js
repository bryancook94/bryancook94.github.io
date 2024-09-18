// Set the dimensions of the canvas
const width = 500;
const height = 500;
const margin = 40;

// Create random data points
const numPoints = 100;
const data = Array.from({ length: numPoints }, (_, i) => ({
    x: i,
    y: Math.random() * (height - margin * 2)
}));

// Append the SVG object to the body of the page
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

// Create scales
const xScale = d3.scaleLinear()
    .domain([0, numPoints - 1])
    .range([0, width - margin * 2]);

const yScale = d3.scaleLinear()
    .domain([0, height - margin * 2])
    .range([height - margin * 2, 0]);

// Add X axis
svg.append("g")
    .attr("transform", `translate(0, ${height - margin * 2})`)
    .call(d3.axisBottom(xScale));

// Add Y axis
svg.append("g")
    .call(d3.axisLeft(yScale));

// Create the line generator
const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

// Add the line path
svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 1.5)
    .attr("d", line);

    // Add legend
svg.append("rect")
.attr("x", width - margin.right - 100)
.attr("y", 10)
.attr("width", 90)
.attr("height", 30)
.attr("fill", "white")
.attr("stroke", "black");

svg.append("text")
.attr("x", width - margin.right - 95)
.attr("y", 30)
.text("Random Line")
.style("fill", "blue");