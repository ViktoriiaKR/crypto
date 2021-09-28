import dayjs from "dayjs";

export const formatCandlestick= (data: any) => {
    let result = {
      series: [{
        name: 'candle',
        data: [
        //   {
        //     x: new Date(1624147200),
        //     y: [6629.81, 6650.5, 6623.04, 6633.33]
        //   },
        ]
      }],
      options: {
        chart: {
          height: 500,
          type: 'candlestick',
        },
        title: {
        //   text: 'CandleStick Chart - Category X-axis',
          align: 'left'
        },
        annotations: {
          xaxis: [
            {
              x: 'Oct 06 14:00',
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  fontSize: '12px',
                  color: '#fff',
                  background: '#00E396'
                },
                orientation: 'horizontal',
                offsetY: 7,
                text: 'Annotation Test'
              }
            }
          ]
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function(val: any) {
              return dayjs(val).format('MMM DD HH:mm')
            }
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
    };

    
  
    let dates = data.map((val: any) => {
        let date = new Date(val[0] * 1000);
        let resDate = result.series[0].data.push({
        //  @ts-ignore
            x: date,
        //  @ts-ignore
            y: [val[1], val[2], val[3], val[4]],
        })
        return resDate;
      });
    return result;
  };
  