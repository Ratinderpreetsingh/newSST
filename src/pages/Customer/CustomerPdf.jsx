import jsPDF from "jspdf";

export const generatePDF = (productData) => {
    const doc = new jsPDF();
    
    // Define y-coordinate for the text
    let y = 10;
    
    // Add fields to the PDF
    doc.text(`Customer Name: ${productData?.OwnerFName} ${productData?.OwnerLName}`, 10, y += 10);
    doc.text(`Address: ${productData?.OwnerAddress1}, ${productData?.OwnerCity}, ${productData?.OwnerStateProvince} ${productData?.OwnerPostalZip}`, 10, y += 10);
    doc.text(`Email: ${productData?.OwnerEmail}`, 10, y += 10);
    doc.text(`Phone: ${productData?.OwnerNightPhone || productData?.OwnerDayPhone}`, 10, y += 10);
    doc.text(`Claim Type: ${productData?.ClaimType}`, 10, y += 10);
    doc.text(`Insurance Company: ${productData?.InsuranceCompany}`, 10, y += 10);
    doc.text(`Estimator: ${productData?.EstimatorName}`, 10, y += 10);
    doc.text(`Gross Amount: $${productData?.GrossAmount}`, 10, y += 10);
    doc.text(`Vehicle: ${productData?.VehicleYear} ${productData?.VehicleMake} ${productData?.VehicleModel}`, 10, y += 10);
    doc.text(`RONumber: ${productData?.RONumber}`, 10, y += 10);
    doc.text(`Repair Started: ${productData?.RepairStartedDate}`, 10, y += 10);
    doc.text(`Delivered Date: ${productData?.DeliveredDate}`, 10, y += 10);
    doc.text(`Total Labor Hours: ${productData?.TotalLaborHrs}`, 10, y += 10);
    
    // Save the PDF with the owner's name
    doc.save(`${productData.OwnerFName}.pdf`);
};
