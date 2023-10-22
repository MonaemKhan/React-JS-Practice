import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
const BarChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        // Define the dimensions of the chart
        const width = 400;
        const height = 300;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        // Create an SVG element and append it to the DOM
        const svg = d3.select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Create a scale for the x-axis
        const xScale = d3.scaleBand()
            .domain(data.map((d) => d.label))
            .range([0, width])
            .padding(0.1);

        // Create a scale for the y-axis
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .nice()
            .range([height, 0]);

        // Create the x-axis
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        // Create the y-axis
        svg.append("g")
            .call(d3.axisLeft(yScale));

        // Create the bars
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.label))
            .attr("y", (d) => yScale(d.value))
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => height - yScale(d.value))
            .attr("fill", "steelblue");
    }, [data]);
    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default BarChart;