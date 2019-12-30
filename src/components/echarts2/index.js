import React, { Component } from 'react';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
class Test2 extends Component {
  getOption(){
    return {
      title: { text: '某地区蒸发量和降水量' },
      tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {
              show: true,
              type: 'jpg'
            }
        }
    },
      xAxis : [
        {
            type : 'category',
            data : this.props.data.xdata
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
      series : [
        {
            name:'蒸发量',
            type:'bar',
            data: this.props.data.ydata.ydata1,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'降水量',
            type:'bar',
            data: this.props.data.ydata.ydata2,
            markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
    ]
  }
  }
  render() {
    return (
      <div>
        <ReactEcharts
          option={this.getOption()}
          style={{height: '500px'}}
          opts={{renderer: 'canvas'}}
        />
      </div>
    );
  }
}

export default Test2;