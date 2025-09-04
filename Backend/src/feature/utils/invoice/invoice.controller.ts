import { Request, Response } from "express";
import PDFDocument from "pdfkit";
import axios from "axios";
import logger from "../../../utils/Logger";
export const downloadInvoice = async (req: Request, res: Response) => {
  try {
    // Call your API
    const apiRes = await axios.get(
      "http://localhost:8080/base/client/getclientorder"
    );
    const data = apiRes.data.data; // response has { data: { ... } }

    const doc = new PDFDocument({ margin: 0 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");

    doc.pipe(res);

    // === Top Header Background ===
    doc.rect(0, 0, doc.page.width, 120).fill("#4F46E5");

    // Company Info
    doc.fillColor("#fff").fontSize(22).text("Digital Den", 40, 40);
    doc.fontSize(10).text("Your Trusted E-Commerce Store", 40, 70);

    const orderDate = new Date(data.created_at);
    const formattedDate = orderDate.toLocaleDateString("en-GB");

    // Invoice info (top right)
    const rightX = doc.page.width - 200;
    doc.fontSize(12).text("Invoice", rightX, 40);
    doc
      .fontSize(10)
      .text(`Invoice No: #${data.order_id}`, rightX, 60)
      .text(`Date: ${formattedDate}`, rightX, 75);

    // === Bill To Section ===
    doc.moveDown(3);
    doc.fillColor("#000").fontSize(12).text("BILL TO:", 40, 150);
    doc.fontSize(11).text(`Name: ${data.customer_name}`, 40, 170);
    doc.text(`Address: ${data.full_address}`, 40, 185, { width: 250 });
    doc.text(`Phone: ${data.phonenumber}`, 40, 210);
    doc.text(`Email: ${data.email}`, 40, 225);

    // === Items Table ===
    let tableTop = 270;
    const colX = { desc: 50, qty: 280, price: 360, amount: 460 };

    // Table header background
    doc.rect(40, tableTop, 520, 25).fill("#f1f1fb");
    doc.fillColor("#000").fontSize(11);

    doc.text("Description", colX.desc, tableTop + 7);
    doc.text("Qty", colX.qty, tableTop + 7, { width: 60, align: "center" });
    doc.text("Price", colX.price, tableTop + 7, { width: 80, align: "center" });
    doc.text("Amount", colX.amount, tableTop + 7, {
      width: 100,
      align: "right",
    });

    let y = tableTop + 30;

    // Render products dynamically
    data.products.forEach((item: any) => {
      doc
        .fontSize(10)
        .fillColor("#000")
        .text(item.product_name, colX.desc, y + 7, { width: 220 });

      doc.text(item.quantity.toString(), colX.qty, y + 7, {
        width: 60,
        align: "center",
      });

      doc.text(`$${item.price}`, colX.price, y + 7, {
        width: 80,
        align: "center",
      });

      doc.text(`$${item.sub_total}`, colX.amount, y + 7, {
        width: 100,
        align: "right",
      });

      y += 25;
    });

    // === Summary Box ===
    y += 20;
    const boxX = 300;
    const boxWidth = 260;
    doc.rect(boxX, y, boxWidth, 80).fill("#f9f9f9");
    doc.fillColor("#000").fontSize(11);

    const labelX = boxX + 20;
    const valueX = boxX + boxWidth - 80;

    doc.text("Subtotal:", labelX, y + 10);
    doc.text(`$${parseFloat(data.subtotal).toFixed(2)}`, valueX, y + 10, {
      width: 70,
      align: "right",
    });

    doc.text("Discount:", labelX, y + 30);
    doc.text(`-$${parseFloat(data.discount).toFixed(2)}`, valueX, y + 30, {
      width: 70,
      align: "right",
    });

    doc.font("Helvetica-Bold").text("Total:", labelX, y + 55);
    doc.text(`$${parseFloat(data.total).toFixed(2)}`, valueX, y + 55, {
      width: 70,
      align: "right",
    });

    // === Notes Section ===
    doc.font("Helvetica").fontSize(10).fillColor("#666");
    doc.text("NOTES:", 40, y + 120);
    doc.text("Thank you for shopping with Digital Den!", 40, y + 135);

    // Footer
    doc.fontSize(9).fillColor("#999");
    doc.text("This is a system-generated invoice.", 40, doc.page.height - 50, {
      align: "center",
      width: doc.page.width - 80,
    });

    doc.end();
  } catch (error) {
    logger.error("Invoice Generate Error", error);
    return res.status(500).send("Error generating invoice");
  }
};
