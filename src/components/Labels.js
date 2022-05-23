import React from 'react';
import {default as api} from "../store/apiSlice";
import {getLabels} from "../helper/helper";

function Labels() {

const {data, isFetching, isSuccess, isError}=api.useGetLabelsQuery()
let Transactions;


if(isFetching){
    Transactions = <div>Fetching</div>
}else if(isSuccess){
    Transactions =  getLabels(data,"type").map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)
}else if(isError){
    Transactions = <div>error</div>
}

  return (
    <>
    {Transactions}
    </>
  )
}

function LabelComponent({data}){

    if(!data) return<></>

    return(
        <div className="labels">
            <div>
                <p className={data.color ?? "btn btn-secondary"}>{data.type ?? ""}</p>
            </div>
            <p>{Math.round(data.percent) ?? 0}%</p>
        </div>
    )
}

export default Labels