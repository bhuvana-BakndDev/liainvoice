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
            width: 750,
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
					{ label: "Jan",  y: 1000  ,color: "#28ACEA"},
					{ label: "Feb", y: 1500 ,color: "#28ACEA" },
					{ label: "Mar", y: 2500 ,color: "#28ACEA" },
					{ label: "Apr",  y: 3000  ,color: "#28ACEA"},
                    { label: "May",  y: 10000  ,color: "#28ACEA"},
                    { label: "Jue",  y: 3000  ,color: "#28ACEA"},
                    { label: "Jul",  y: 5000  ,color: "#28ACEA"},
                    { label: "Aug",  y: 6000  ,color: "#28ACEA"},
					{ label: "Sep",  y: 8008 ,color: "#28ACEA" },
                    { label: "Oct",  y: 4000  ,color: "#28ACEA"},
                    { label: "Nov",  y: 2500  ,color: "#28ACEA"},
                    { label: "Dec",  y: 10000  ,color: "#28ACEA"},

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