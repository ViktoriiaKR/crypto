import dayjs from "dayjs";

export const formatCandlestick= (data: any) => {
    let result = {
      series: [{
        name: 'candle',
        data: []
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

    let arrDate = [] as any
    let arrPrice = [] as any

      data.map((val: any) => {
        let date = new Date(val[0] * 1000);
        arrDate.push(date)
        arrPrice.push([val[3], val[1], val[2], val[4]])
      })
      arrPrice.reverse() 
      arrDate.reverse()
    
      arrDate.forEach((el: any) => {
        result.series[0].data.push({
          // @ts-ignore
          x: el
        })
      });

      for (let i = 0; i < arrPrice.length; i++) {
        for (let i = 0; i < result.series[0].data.length; i++) {
          // @ts-ignore
          result.series[0].data[i].y = arrPrice[i]
        }
      };
    return result;
  };
  