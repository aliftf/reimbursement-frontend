import { ArrowLongLeftIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react'
import { Link, useMatch, useParams } from 'react-router-dom';
import { requestDataResult } from '../../../../services';
import StatusTag from '../../../atoms/status-tag';

const RequestDetail = () => {

  const matchInbox = useMatch("/inbox/:id");
  const isInbox = !!matchInbox;

  const formatDate = (submissionDateString) => {

    let submissionDate = new Date(submissionDateString);

    let datePart = submissionDate.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  
    let dayPart = submissionDate.toLocaleDateString("id-ID", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit"
    })

    return {
      date: datePart,
      day: dayPart
    }
  }

  const { id } = useParams();

  const [request, setRequest] = useState({});

  useEffect(() => {
    setRequest(requestDataResult.data[id]);
  }, [id]);

  return (
      <div className="container px-4 flex flex-col gap-5">
        <div className="flex gap-3 items-center font-bold text-xl">
          <Link to={`${isInbox ? '/inbox': '/my'}`}>
            <ArrowLongLeftIcon className='w-6 h-6 cursor-pointer'/>
          </Link>
          <h3 className='text-primary'>Reimbursement request form</h3>
        </div>
        <div className=""></div>

        <div className="bg-white p-7 flex flex-col gap-5 rounded-md">
          <div className="grid grid-cols-[1fr_7fr]">
            <label htmlFor="amount" className="text-gray-500 font-semibold">Total Amount</label>
            <p className=''>{request.totalAmount}</p>
          </div>
          <div className="border border-gray-100" />
          <div className="grid grid-cols-[1fr_7fr]">
            <label htmlFor="statusName" className="text-gray-500 font-semibold">Status</label>
            <StatusTag status={request.status} />
          </div>
          <div className="border border-gray-100" />
          <div className="grid grid-cols-[1fr_7fr]">
            <label htmlFor="submissionDate" className="text-gray-500 font-semibold">Submission Date</label>
            <p id='submissionDate' name='submissionDate'>{formatDate(request.submissionDate).date} - <span className='text-gray-500'>{formatDate(request.submissionDate).day}</span></p>
          </div>
        </div>
        <h4 className='text-primary font-bold text-xl'>Items</h4>
        {request.items?.map((item, index) => (
          <div key={item.id} className='bg-white p-7 flex flex-col gap-5 rounded-md'>
            <div className="flex justify-between">
              <h5 className='font-bold text-lg'>Item {index + 1}</h5>
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor="description" className="text-gray-500 font-semibold">Description</label>
              <textarea value={item.description} id="description" name="description" rows="4" className="rounded-md border border-default-medium text-heading text-md p-3.5" placeholder="Item description" disabled></textarea>
            </div>
            <div className="border border-gray-100" />
            <div className="flex flex-wrap gap-7 w-full">
              <div className='flex flex-col gap-3'>
                <label htmlFor="amount" className="text-gray-500 font-semibold">Amount</label>
                <div className="flex gap-3 items-center">
                  <p>Rp. {item.amount === 0 ? null : item.amount},00</p>
                </div>
              </div>
              <div className="border border-gray-100" />
              <div className='flex flex-col gap-3'>
                <label htmlFor="expense" className="text-gray-500 font-semibold">Expense Date</label>
                <p>{formatDate(item.expenseDate).date}</p>
              </div>
              <div className="border border-gray-100" />
              <div className='flex flex-col gap-3 grow'>
                <label htmlFor="file" className="text-gray-500 font-semibold">Bill</label>
                <button className='px-2 py-1.5 bg-gray-200 text-gray-500 w-fit rounded-md'>Download</button>
              </div>
            </div>
          </div>
        ))}
        {
          isInbox && (
            <>
              <h4 className='text-primary font-bold text-xl'>Action</h4>
              <div className='bg-white p-7 flex flex-col gap-5 rounded-md'>
                <div className='flex flex-col gap-3'>
                  <label htmlFor="note" className="text-gray-500 font-semibold">Note</label>
                  <textarea id="note" name="note" rows="4" className="rounded-md border border-default-medium text-heading text-md p-3.5" placeholder="Action note"></textarea>
                </div>
                <div className="flex justify-end gap-3">
                  <button className="rounded-lg bg-[#e03636] px-4 py-2 text-sm font-semibold text-white hover:bg-[#eb7b7b]">Reject</button>
                  <button className="rounded-lg bg-[#28d1aa] px-4 py-2 text-sm font-semibold text-white hover:bg-[#7ee3cb]">Submit</button>
                </div>
              </div>
            </>
          )
        }
        {/* <div className="">{JSON.stringify(submissionForm)}</div> */}
      </div>
    
  )
}

export default RequestDetail