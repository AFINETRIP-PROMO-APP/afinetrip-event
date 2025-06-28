import React from "react";
import { jsPDF } from "jspdf";

const Voucher = ({ couponCode }) => {
  const downloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();

    // Title text
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor("#2e7d32");
    pdf.text("Your 10% Voucher Code", pageWidth / 2, 40, { align: "center" });

    // Draw a subtle shadow rectangle behind the coupon code
    pdf.setFillColor("#c8e6c9");
    pdf.roundedRect(pageWidth / 2 - 60, 55, 120, 30, 5, 5, "F");

    // Draw a white rectangle to simulate a card inside shadow
    pdf.setFillColor("#ffffff");
    pdf.roundedRect(pageWidth / 2 - 58, 57, 116, 26, 4, 4, "F");

    // Draw border for coupon code
    pdf.setDrawColor("#4caf50");
    pdf.setLineWidth(1.2);
    pdf.roundedRect(pageWidth / 2 - 60, 55, 120, 30, 5, 5, "S");

    // Coupon code text
    pdf.setFontSize(32);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor("#388e3c");
    pdf.text(couponCode, pageWidth / 2, 75, { align: "center" });

    // Footer small note
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor("#555555");
    pdf.text(
      "Thank you for choosing Afinetrip! Use this code at checkout.",
      pageWidth / 2,
      100,
      { align: "center" }
    );

    pdf.save("afinetrip_voucher.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      style={{
        marginTop: "30px",
        cursor: "pointer",
        backgroundColor: "#4caf50",
        border: "none",
        color: "white",
        fontWeight: "bold",
        padding: "12px 25px",
        fontSize: "1.1rem",
        borderRadius: "30px",
        boxShadow: "0 4px 6px rgba(76,175,80,0.4)",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#388e3c")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4caf50")}
    >
      Download Voucher
    </button>
  );
};

export default Voucher;
