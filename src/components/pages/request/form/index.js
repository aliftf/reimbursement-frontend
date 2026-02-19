import React, { useEffect, useState } from 'react'
import { ArrowLongLeftIcon, PlusIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

const RequestForm = () => {
  const [submissionForm, setSubmissionForm] = useState({});

  const emptyItem = {
    description: "",
    amount: 0,
    expenseDate: "",
    filePath: ""
  }

  const [submissionDate] = useState(new Date())
  const [items, setItems] = useState([{ ...emptyItem }])

  const datePart = submissionDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const dayPart = submissionDate.toLocaleDateString("id-ID", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit"
  })

  const totalAmount = items.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  }

  const addItem = () => {
    setItems([...items, {...emptyItem}]);
  }

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  }

  const handleSubmit = () => {
    setSubmissionForm({
      totalAmount: totalAmount,
      submissionDate: submissionDate,
      items: items
    })

    console.log(submissionForm)
    console.log(submissionForm.items)
  }

  return (
      <div className="container px-4 mt-6 flex flex-col gap-5">
        <div className="flex gap-3 items-center font-bold text-xl">
          <Link to="/my">
            <ArrowLongLeftIcon className='w-6 h-6 cursor-pointer'/>
          </Link>
          <h3 className='text-primary'>Reimbursement request form</h3>
        </div>

        <div className="bg-white p-7 flex flex-col gap-5 rounded-md">
          <div className="grid grid-cols-[1fr_7fr]">
            <label htmlFor="amount" className="text-gray-500 font-semibold">Total Amount</label>
            <p className=''>{totalAmount}</p>
          </div>
          <div className="border border-gray-100" />
          <div className="grid grid-cols-[1fr_7fr]">
            <label htmlFor="statusName" className="text-gray-500 font-semibold">Status</label>
            <p id='statusName' name='statusName'>Draft</p>
          </div>
          <div className="border border-gray-100" />
          <div className="grid grid-cols-[1fr_7fr]">
            <label htmlFor="submissionDate" className="text-gray-500 font-semibold">Submission Date</label>
            <p id='submissionDate' name='submissionDate'>{datePart} - <span className='text-gray-500'>{dayPart}</span></p>
          </div>
        </div>
        <h4 className='text-primary font-bold text-xl'>Items</h4>
        {items.map((item, index) => (
          <div key={item.id} className='bg-white p-7 flex flex-col gap-5 rounded-md'>
            <div className="flex justify-between">
              <h5 className='font-bold text-lg'>Item {index + 1}</h5>
              {items.length > 1 && (
                <button onClick={() => removeItem(index)}>
                  <XMarkIcon className='w-6 h-6 cursor-pointer'/>
                </button>
              )}
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor="description" className="text-gray-500 font-semibold">Description</label>
              <textarea onChange={(e) => handleChange(index, "description", e.target.value)} id="description" name="description" rows="4" className="rounded-md border border-default-medium text-heading text-md p-3.5" placeholder="Item description"></textarea>
            </div>
            <div className="flex flex-wrap gap-5 w-full">
              <div className='flex flex-col gap-3'>
                <label htmlFor="amount" className="text-gray-500 font-semibold">Amount</label>
                <div className="flex gap-3 items-center">
                  <p>Rp.</p>
                  <input onChange={(e) => handleChange(index, "amount", e.target.value)} name="amount" type="number" id="amount" className="px-3 py-2.5 border border-default-medium text-md rounded-md" placeholder="0" required />
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor="expense" className="text-gray-500 font-semibold">Expense Date</label>
                <input type="date" id="expense" name="expense-date" onChange={(e) => handleChange(index, "expenseDate", e.target.value)} className="w-fit px-3 py-2.5 border border-default-medium text-md rounded-md cursor-pointer"/>
              </div>
              <div className='flex flex-col gap-3 grow'>
                <label htmlFor="file" className="text-gray-500 font-semibold">Bill</label>
                <input id="file" name="file" type="file" className="flex w-full rounded-md border border-input bg-background px-3 py-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium file:mr-5 file:cursor-pointer cursor-pointer"></input>
                <p className="mt-1 text-sm text-gray-600">JPEG, JPG, PNG or PDF</p>
              </div>
            </div>
          </div>
        ))}
        <button className='bg-white p-3 rounded-md cursor-pointer' onClick={addItem}>
          <PlusIcon className='w-6 h-6'/>
        </button>
        <div className="flex justify-end gap-3">
          <button  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
          <button onClick={() => handleSubmit()} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white border border-transparent box-border hover:text-primary hover:bg-white hover:border-primary hover:border hover:box-border">Submit</button>
        </div>
        {/* <div className="">{JSON.stringify(submissionForm)}</div> */}
      </div>
    
  )
}

export default RequestForm