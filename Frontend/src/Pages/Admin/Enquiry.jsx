import React, { useEffect, useState } from "react";
import { Toastifyerror } from "../../Component/Notification/Toastitynotificaition";
import { getcontactApi } from "../../API/Contact/contactApi";
function Enquiry() {
  const [getdata, setgetdata] = useState([]);

  const featchedData = async () => {
    try {
      const res = await getcontactApi();
      setgetdata(res.data);
    } catch (error) {
      Toastifyerror(error);
    }
  };

  useEffect(() => {
    featchedData();
  }, []);

  return (
    <>
      <div className="layout-content-container flex flex-col max-w-full flex-1">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Inquiry !</h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#ced3e9] bg-[#f8f9fc]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Name
                </th>
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Email
                </th>
                <th className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {getdata.map((item) => (
                <tr key={item.id} className="border-t border-t-[#ced3e9]">
                  <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                    {item.name}
                  </td>
                  <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                    {item.email}
                  </td>
                  <td className="table-a7b2dab7-306e-4074-9f70-a50105efc129-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                    {item.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Enquiry;
