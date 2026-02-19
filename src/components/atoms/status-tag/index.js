import React from 'react'

const StatusTag = ({ status }) => {
  const statusStyles = {
    PENDING: "bg-[#ebf6ff] text-[#36a3ff]",
    APPROVED: "bg-[#e7faf5] text-[#28d1aa]",
    REJECTED: "bg-[#fcebeb] text-[#e03636]"
  }
  
  return (
    <div className={`py-1 px-2 rounded font-semibold w-fit ${statusStyles[status] || "bg-gray-100 text-gray-600"}`}>
                      {status}
    </div>
  )
}

export default StatusTag