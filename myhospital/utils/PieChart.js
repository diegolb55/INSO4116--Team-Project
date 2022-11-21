
import React from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";


 export default class PieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: [10, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Disease A', 'Disease B', 'Disease C', 'Disease D', 'Disease E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 350
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
        
            <div className={this.props.styles.pieCont}>
                {(typeof window !== 'undefined') &&
                
                <ReactApexChart 
                    options={this.state.options} 
                    series={this.state.series} 
                    type="pie" 
                    width={380}
                    />

                }
            </div>
        


        );
    }
}