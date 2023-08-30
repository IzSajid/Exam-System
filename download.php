<?php
require_once('TCPDF-main/tcpdf.php');

if (isset($_POST['main_content'])) {
    $content = $_POST['main_content'];

    // Create new PDF instance
    $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

    // Add a page
    $pdf->AddPage();

    // Set font
    $pdf->SetFont('times', '', 12);

    // Add content from the received HTML
    $pdf->writeHTML($content, true, false, true, false, '');

    // Output the PDF as a response
    $pdf->Output('generated_pdf.pdf', 'I');
}
?>
