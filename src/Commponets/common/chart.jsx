import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
			// title: {
			// 	text: "Basic Column Chart"
			// },
			animationEnabled: true,
            dataPointWidth: 10,
            theme: "dark1",
            height: 260,
            width: 1000,
            backgroundColor: "black",
            borderRadius: "25px",
            axisY: {
                lineDashType: "dash",
                gridThickness: 0,
                margin: 10,

            },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Jan",  y: 10  ,color: "#28ACEA"},
					{ label: "Feb", y: 15 ,color: "#28ACEA" },
					{ label: "Mar", y: 25 ,color: "#28ACEA" },
					{ label: "Apr",  y: 30  ,color: "#28ACEA"},
                    { label: "May",  y: 10  ,color: "#28ACEA"},
                    { label: "Jue",  y: 30  ,color: "#28ACEA"},
                    { label: "Jul",  y: 50  ,color: "#28ACEA"},
                    { label: "Aug",  y: 30  ,color: "#28ACEA"},
					{ label: "Sep",  y: 38 ,color: "#28ACEA" },
                    { label: "Oct",  y: 40  ,color: "#28ACEA"},
                    { label: "Nov",  y: 30  ,color: "#28ACEA"},
                    { label: "Dec",  y: 30  ,color: "#28ACEA"},

				]
			}
			]
		}
		
		return (
		<div>
            
			<CanvasJSChart options = {options} 
			
			/>
		</div>
		);
	}
}

export default ColumnChart;