import React from 'react';
import {default as api} from "../store/apiSlice";

function List() {

    const {data, isFetching, isSuccess, isError}=api.useGetLabelsQuery();
    const [deleteTransaction] = api.useDeleteTransactionMutation();
    let Transactions;

    const handlerClick = (e)=>{
        // console.log(e.target.dataset.id)
        if(!e.target.dataset.id) return 0;
        deleteTransaction({_id:e.target.dataset.id})
    }

    if(isFetching){
        Transactions = <div>Fetching</div>
    }else if(isSuccess){
        Transactions =  data.map((v,i)=><Transaction key={i} category={v} handler={handlerClick}></Transaction>)
    }else if(isError){
        Transactions = <div>error</div>
    }


  return (
    <div>
        <p>History</p>
        {Transactions}      
    </div>
  )
}

function Transaction({category,handler}){
    if(!category)return null;
    return(
        <div>
            <button onClick={handler} data-id={category._id}>delete</button>
            <p className={category.color}>{category.name}</p>
        </div>
    )
}

export default List