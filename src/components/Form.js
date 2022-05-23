import React from 'react'
import { useForm } from 'react-hook-form';
import List from './List';
import {default as api} from '../store/apiSlice';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();
    const [addTransaction] = api.useAddTransactionMutation();

    const onSubmit = async (data) => {
        if(!data) return {};
        await addTransaction(data).unwrap();
        resetField('name');
        resetField('amount')
    }

  return (
    <div >
        
        <h1 >Transaction</h1>

        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div >
                <div >
                    <input type="text" {...register('name')} placeholder='Sallary, House Rend, SIP' />
                </div>
                <select {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div>
                    <input type="number" {...register('amount')} placeholder='Amount' />
                </div>
                <div >
                    <button>Make Transaction</button>
                </div>
            </div>    
        </form>

        <List></List>
    </div>
  )
}