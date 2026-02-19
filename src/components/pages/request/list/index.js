import { useEffect, useState } from "react";
import Button from "../../../atoms/button";
import { requestDataResult } from "../../../../services";
import StatusTag from "../../../atoms/status-tag";
import { useMatch } from "react-router-dom";

const RequestList = () => {

  const [requests, setRequests] = useState([]);
  const matchInbox = useMatch("/inbox");
  const isInbox = !!matchInbox;

  useEffect(() => {
    setRequests(requestDataResult.data);
  }, []);

  const formatDate = (dateString) => {
    let date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }


  return (
    <div className="container flex flex-col gap-5">
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-2xl text-primary">{isInbox ? "Reimbursement Request Inbox" : "My Reimbursement Request"}</h1>
        {
          !isInbox && (
            <Button as="a" href="/new">Submit Request</Button>
          )
        }
      </div>

      <table className="w-full bg-white rounded-md text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body border-b rounded-base">
          <tr>
            <th style={{ width: 70 }} className="px-6 py-3 font-medium">ID</th>
            <th className="px-6 py-3 font-medium">Total Amount</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">Submission Date</th>
            <th style={{ width: 200 }} className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>

        <tbody>
            {
              requests.map(data => {
                let detailPath = !isInbox ? `/my/${data.id}` : `/inbox/${data.id}`;
                
                return (
                  <tr key={data.id} className="bg-neutral-primary border-b">
                    <td className="px-6 py-3">{data.id + 1}</td>
                    <td className="px-6 py-3">Rp. {data.totalAmount}</td>
                    <td className="px-6 py-3">
                      <StatusTag status={data.status} />
                    </td>
                    <td className="px-6 py-3">{formatDate(data.submissionDate)}</td>
                    <td className="flex gap-2 px-6 py-3">
                      <Button as="a" href={detailPath}>{isInbox? "Approve/Reject" : "Detail"}</Button>
                      
                    </td>
                  </tr>
              
                )
              })
            }
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
