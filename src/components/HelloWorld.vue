<template>
  <div>
    <p>Testing chart</p>
    <div>
      <VueApexCharts
        :options="chartOptions"
        :series="chartSeries"
        height="500px"
        type="rangeBar"
      />
    </div>
  </div>
</template>

<script>
import { getTime, differenceInDays } from 'date-fns';
import VueApexCharts from 'vue-apexcharts';

export default {
    name: "home-page",
    components: { VueApexCharts },
    data() {
      return {
        currentTime: getTime(new Date()),
      }
    },
    computed: {
      chartOptions() {
        return {
          chart: {
            height: '350px',
            offsetY: 20,
            toolbar: {
              autoSelected: 'pan',
              tools: {
                reset: false,
              },
            },
            type: 'rangeBar',
          },
          dataLabels: {
            enabled: true,
            fill: {
              type: 'solid',
              color: ['red'],
            },
            formatter: (val, { dataPointIndex }) => {
              const { name } = this.chartSeries[0].data[dataPointIndex]
              var diff = differenceInDays(val[1], val[0])
              return name + ' ' + diff + (diff > 1 ? ' days' : ' day')
            }
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          fill: {
            colors: [({ dataPointIndex }) => {
              const { name } = this.chartSeries[0].data[dataPointIndex]

              switch (name) {
                case 'Ross':
                  return '#7E36AF'
                case 'Phoebe':
                  return '#164666'
                case 'Monica':
                  return '#D9534F'
                case 'Chandler':
                  return '#49be25'
                default:
                  return '#B32824'
              }
            }],
            type: 'solid',
          },
          plotOptions: {
            bar: {
              barHeight: '100%',
              horizontal: true,
              distributed: true,
              rangeBarGroupRows: true,
              rangeBarOverlap: false,
              borderRadiusWhenStacked: 'all'
            },
          },
          stroke: {
            colors: ['#fff'],
            width: 1,
          },
          tooltip: {
            enabled: false,
          },
          xaxis: {
            position: 'top',
            type: 'datetime',
          },
          yaxis: {
            labels: {
              align: 'center',
              minWidth: 85,
            }
          },
        }
      },

      chartSeries() {
        return [
          {
            data: [
              {
                name: 'Ross',
                x: 'Design',
                y: [
                  new Date('2019-03-09').getTime(),
                  new Date('2019-03-10').getTime()
                ]
              },
              {
                name: 'Ross',
                x: 'Code',
                y: [
                  new Date('2019-03-04').getTime(),
                  new Date('2019-03-05').getTime()
                ]
              },
              {
                name: 'Ross',
                x: 'Test',
                y: [
                  new Date('2019-03-06').getTime(),
                  new Date('2019-03-09').getTime()
                ]
              },
              {
                name: 'Chandler',
                x: 'Design',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-03').getTime()
                ]
              },
              {
                name: 'Chandler',
                x: 'Code',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-11').getTime()
                ]
              },
              {
                name: 'Chandler',
                x: 'Test',
                y: [
                  new Date('2019-03-11').getTime(),
                  new Date('2019-03-16').getTime()
                ]
              },
              {
                name: 'Joey',
                x: 'Design',
                y: [
                  new Date('2019-03-05').getTime(),
                  new Date('2019-03-08').getTime()
                ]
              },
              {
                name: 'Joey',
                x: 'Code',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-11').getTime()
                ]
              },
              {
                name: 'Joey',
                x: 'Test',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-03').getTime()
                ]
              },
              {
                name: 'Monica',
                x: 'Design',
                y: [
                  new Date('2019-03-05').getTime(),
                  new Date('2019-03-08').getTime()
                ]
              },
              {
                name: 'Monica',
                x: 'Code',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-11').getTime()
                ]
              },
              {
                name: 'Monica',
                x: 'Test',
                y: [
                  new Date('2019-03-11').getTime(),
                  new Date('2019-03-16').getTime()
                ]
              },
              {
                name: 'Phoebe',
                x: 'Design',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-04').getTime()
                ]
              },
              {
                name: 'Phoebe',
                x: 'Code',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-06').getTime()
                ]
              },
              {
                name: 'Phoebe',
                x: 'Test',
                y: [
                  new Date('2019-03-10').getTime(),
                  new Date('2019-03-19').getTime()
                ]
              }
            ]
          },
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
