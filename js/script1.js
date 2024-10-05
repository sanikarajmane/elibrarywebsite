

function openBook(button){
    const pdfs=button.getAttribute('data-pdf');
    window.open(pdfs,'_blank');
}
function downloadBook(button) {
    const pdfs = button.getAttribute('data-pdf');
    
    // Create an anchor element
    const a = document.createElement('a');
    a.href = pdfs;
    a.download = ''; // Leaving this empty will use the default filename

    // Trigger the download
    a.click();
}

