import React from "react";
import { jsPDF } from "jspdf";
import logo from "../assets/logo.png"; // place your logo in the public/src folder


const Voucher = ({ couponCode }) => {
  const downloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();

    const voucherWidth = 160;
    const voucherHeight = 100;
    const voucherX = (pageWidth - voucherWidth) / 2;
    const voucherY = 50;

    // Create image and wait for it to load
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      // Shadow behind the voucher
      pdf.setFillColor("#b2dfdb");
      pdf.roundedRect(voucherX + 3, voucherY + 3, voucherWidth, voucherHeight, 10, 10, "F");

      // Main white voucher rectangle
      pdf.setFillColor("#ffffff");
      pdf.setDrawColor("#00796b");
      pdf.setLineWidth(1.5);
      pdf.roundedRect(voucherX, voucherY, voucherWidth, voucherHeight, 10, 10, "FD");

      // 👇 Add logo inside the voucher (top center)
      const logoWidth = 30;
      const logoHeight = 30;
      const logoX = pageWidth / 2 - logoWidth / 2;
      const logoY = voucherY + 8;
      pdf.addImage(img, "PNG", logoX, logoY, logoWidth, logoHeight);

      // Title below the logo
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor("#004d40");
      pdf.text("Your 10% Voucher", pageWidth / 2, logoY + logoHeight + 10, { align: "center" });

      // Coupon Code Box
      pdf.setFillColor("#e0f2f1");
      pdf.roundedRect(pageWidth / 2 - 50, voucherY + 50, 100, 25, 6, 6, "F");
      pdf.setDrawColor("#00796b");
      pdf.roundedRect(pageWidth / 2 - 50, voucherY + 50, 100, 25, 6, 6, "S");

      // Coupon Code Text
      pdf.setFontSize(22);
      pdf.setTextColor("#00695c");
      pdf.text(couponCode, pageWidth / 2, voucherY + 67, { align: "center" });

      // Footer note
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor("#555555");
      pdf.text(
        "Use this code at checkout on Afinetrip!",
        pageWidth / 2,
        voucherY + voucherHeight - 10,
        { align: "center" }
      );

      // Save PDF
      pdf.save("afinetrip_voucher.pdf");
    };
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
