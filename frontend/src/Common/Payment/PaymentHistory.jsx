
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import Lottie from "lottie-react";
// import loadingAnimation from "../../../../assets/animation/animation.json";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "./Logo1.jpg";
import { FaArrowDownLong } from "react-icons/fa6";
import { useAuth } from "../../auth/AuthContext";
// import pdfbg from "./pdfbg.jpg";

const PaymentHistory = () => {
  const { user } = useAuth();

  const fetchPaymentHistory = async () => {
    const response = await axios.get(
      `https://eventssunflower-2.onrender.com/order/${user?.email}`
    );
    if (!response.status === 200) {
      throw new Error("Failed to fetch payment history");
    }
    return response.data;
  };

  const {
    data: paymentHistory = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["paymentHistory", user.email], 
    queryFn: fetchPaymentHistory,
  });

  if (isLoading) {
    return (
      // <Lottie
      //   className="flex justify-center items-center min-h-[70%]"
      //   animationData={loadingAnimation}
      //   width={500}
      //   height={350}
      // />
      <p>loading...</p>
    );
  }

  if (error) {
    return <p>Error loading payment history: {error.message}</p>;
  }

  const handleDownloadPDF = (order) => {
    const doc = new jsPDF();

    
    // doc.addImage(
    //   pdfbg,
    //   "JPEG",
    //   0,
    //   0,
    //   doc.internal.pageSize.getWidth(),
    //   doc.internal.pageSize.getHeight()
    // );

    
    doc.setFont("Courier-Bold", "bold");

    const imgWidth = 45; // Adjust as needed
    const imgHeight = 15; // Adjust as needed
    const marginLeft = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    const marginTop = 20; // Adjust the distance from the top
    doc.addImage(logo, "jpg", marginLeft, marginTop, imgWidth, imgHeight);

    doc.setTextColor(0, 0, 0); // blue color
    doc.setFontSize(20);
    doc.text(
      "Payment Order Summary",
      doc.internal.pageSize.getWidth() / 2,
      50,
      { align: "center" }
    );

    doc.setTextColor(0, 0, 0); // Black color

    doc.setFontSize(19);

    doc.text(
      `Event Title: ${order.eventTitle}`,
      doc.internal.pageSize.getWidth() / 2,
      80,
      { align: "center" }
    );
    doc.text(
      `Event ID: ${order.event_id}`,
      doc.internal.pageSize.getWidth() / 2,
      90,
      { align: "center" }
    );

    doc.text(
      `Customer Name: ${order.cus_name}`,
      doc.internal.pageSize.getWidth() / 2,
      120,
      { align: "center" }
    );
    doc.text(
      `Customer Email: ${order.cus_email}`,
      doc.internal.pageSize.getWidth() / 2,
      130,
      { align: "center" }
    );

    doc.text(
      `Transaction ID: ${order.tran_id}`,
      doc.internal.pageSize.getWidth() / 2,
      160,
      { align: "center" }
    );

    doc.text(
      `Total Amount: $${order.total_amount}`,
      doc.internal.pageSize.getWidth() / 2,
      190,
      { align: "center" }
    );
    doc.setTextColor(0, 128, 0); // Green color for paid status
    doc.text(
      `Paid Status: ${order.paidStatus ? "Paid" : "Unpaid"}`,
      doc.internal.pageSize.getWidth() / 2,
      200,
      { align: "center" }
    );

    doc.setTextColor(206, 20, 70); // Red color
    doc.text("Event Details", doc.internal.pageSize.getWidth() / 2, 70, {
      align: "center",
    });
    doc.text("Customer Details", doc.internal.pageSize.getWidth() / 2, 110, {
      align: "center",
    });
    doc.text("Transaction Details", doc.internal.pageSize.getWidth() / 2, 150, {
      align: "center",
    });
    doc.text("Payment Details", doc.internal.pageSize.getWidth() / 2, 180, {
      align: "center",
    });

    // Add copyright text at the bottom 30% position
    // const bottomMargin = doc.internal.pageSize.getHeight() * 0.1;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black color
    doc.text(
      "(c) " +
        new Date().getFullYear() +
        " DreamCraft Events ~ Data Defenders 805.3",
      doc.internal.pageSize.getWidth() / 2,
      240,
      // doc.internal.pageSize.getHeight() - bottomMargin,
      { align: "center" }
    );

    // Save PDF
    doc.save(`Order_${order.tran_id}.pdf`);
  };

  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-semibold mb-4">
        Payment History
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Event ID</th>
              <th className="px-4 py-2">Event Title</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((order) => (
              <tr key={order._id} className="border-b text-center">
                <td className="px-4 py-2">{order.cus_name}</td>
                <td className="px-4 py-2">{order.cus_email}</td>
                <td className="px-4 py-2">{order.tran_id}</td>
                <td className="px-4 py-2">{order.event_id}</td>
                <td className="px-4 py-2">{order.eventTitle}</td>
                <td className="px-4 py-2">${order.total_amount}</td>
                <td className="px-4 py-2">
                  {order.paidStatus ? "Paid" : "Unpaid"}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDownloadPDF(order)}
                    className="px-5 flex items-center text-nowrap gap-1 py-1 text-lg font-semibold rounded bg-primary text-white"
                  ><FaArrowDownLong className="button-reciept" />
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
