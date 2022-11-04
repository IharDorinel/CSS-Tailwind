export const chartSettings = {
    options: {
        colors: ['#e5e7eb', '#0270e0'],
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
            width: 3
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        legend: {
            show: false
        },
        states: {
            normal: {
                filter: {
                    type: 'lighten',
                    value: 0.15
                }
            },
            active: {
                allowMultipleDataPointsSelection: true,
                filter: {
                    type: 'darken',
                    value: 0.35
                }
            }
        },
        xaxis: {
            type: 'numeric',
            labels: {
                show: false
            },
            crosshairs: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            type: 'numeric',
            labels: {
                show: false
            },
            crosshairs: {
                show: false
            },
            tooltip: {
                enabled: false
            },
        },
        tooltip: {
            shared: false,
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                return '<div>' +
                    '<span style="padding: 8px; display: block">'+ '$' + series[seriesIndex][dataPointIndex] + '</span>' + '</div>'
            }
        }
    }
}