export const formatData = (data: any) => {
  console.log(data, 'data')
    let ARRAY = []
    let finalData = {
      labels: [] as any,
      datasets: [
        {
          label: "Price",
          data: [] as any,
          backgroundColor: "rgb(255, 99, 132, 0.8)",
          borderColor: "rgba(255, 99, 132, 0.2)",
          fill: false
        }
      ],
      name: ''
    };

    let dates
    let priceArr
    for (let key in data) {
      if(data.hasOwnProperty(key)) {
        finalData.name = key
        dates = data[key].map((val: any)=> {
          const ts = val[0];
          let date = new Date(ts * 1000);
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          
          let final = `${month}-${day}-${year}`;
         
          return final
        })

        priceArr = data[key].map((val: any) => {
          return val[4]
        })
 
        priceArr.reverse()
        dates.reverse()

        
      } 
      finalData.labels = dates;
      finalData.datasets[0].data = priceArr;

     ARRAY.push(finalData)
     console.log(finalData, finalData.labels)
    
    }
    return ARRAY;
  };
  