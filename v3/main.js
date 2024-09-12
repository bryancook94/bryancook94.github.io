function drawTheGraph(){
      const data = [
            { player: 'Player 1', score: 80 }
        ];
        
        const svg = d3.select("svg"),
              margin = { top: 20, right: 20, bottom: 30, left: 40 },
              width = +svg.attr("width") - margin.left - margin.right,
              height = +svg.attr("height") - margin.top - margin.bottom,
              g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);
        
        const x = d3.scaleBand()
                    .rangeRound([0, width])
                    .padding(0.1)
                    .domain(data.map(d => d.player));
        
        const y = d3.scaleLinear()
                    .rangeRound([height, 0])
                    .domain([0, d3.max(data, d => d.score)]);
        
        g.append("g")
         .attr("class", "axis axis--x")
         .attr("transform", `translate(0,${height})`)
         .call(d3.axisBottom(x));
        
        g.append("g")
         .attr("class", "axis axis--y")
         .call(d3.axisLeft(y).ticks(10))
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", "0.71em")
         .attr("text-anchor", "end")
         .text("Score");
        
        g.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", d => x(d.player))
         .attr("y", d => y(d.score))
         .attr("width", x.bandwidth())
         .attr("height", d => height - y(d.score))
         .attr("fill", (d, i) => i === 0 ? "steelblue" : "orange");
        
        const legend = svg.append("g")
                          .attr("class", "legend")
                          .attr("transform", `translate(${width - 100},${margin.top})`);
        
        legend.append("rect")
              .attr("x", 0)
              .attr("y", 0)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", "steelblue");
        
        legend.append("text")
              .attr("x", 24)
              .attr("y", 9)
              .attr("dy", ".35em")
              .text("Player 1");
        
        legend.append("rect")
              .attr("x", 0)
              .attr("y", 24)
              .attr("width", 18)
              .attr("height", 18)
              .style("fill", "orange");
        
        legend.append("text")
              .attr("x", 24)
              .attr("y", 33)
              .attr("dy", ".35em")
              .text("Player 2");
}