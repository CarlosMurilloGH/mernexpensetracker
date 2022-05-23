import React from 'react';
import {Doughnut} from "react-chartjs-2";
import {Chart,ArcElement} from "chart.js";
import Labels from './Labels';
import {chart_Data,getTotal} from "../helper/helper";
import {default as api} from "../store/apiSlice";


Chart.register(ArcElement);

function Graph() {
  
  const {data, isFetching, isSuccess, isError}=api.useGetLabelsQuery()
  let graphData;
  
  
  if(isFetching){
    graphData = <div>Fetching</div>
  }else if(isSuccess){
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;

  }else if(isError){
    graphData = <div>error</div>
  }

  
  return (
    <div>
        <div>
            {graphData}
            <p>Total</p>
            <p>${(getTotal(data)) ?? 0}</p>
        </div>
        <div>
            <Labels>

            </Labels>
        </div>
    </div>
  )
}

export default Graph