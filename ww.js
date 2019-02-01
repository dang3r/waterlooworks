// Hacky script for downloading the full pdfs of applications on Waterloo
// Works. It assumes it takes < 1.5s for the clicks and file download to occur.
// To ensure this downloads them all, compare the number of files downloaded
// vs expected.
// To run : execute this in the console when logged into WW

let applications = Array.from(document.querySelectorAll('#na_jobApplications_employerTableID .btn-group'));
const interval = 1500;
applications.forEach((el, index) => {
    window.setTimeout(() => {
        el.children[0].click();
        el.children[1].querySelectorAll('a')[0].click();
    }, index * interval);
});
