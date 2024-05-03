console.log('Ronan Soriano | 3 BSCS - 2');

let viz;

//Add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/AwesomeChocolateDashboardReport_17147448327130/Dashboard1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

const RonanSoriano = document.getElementById('RonanSoriano');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
    }
};

function openTableau() {
    viz = new tableau.Viz(RonanSoriano, url, options);
}

document.addEventListener("DOMContentLoaded", openTableau);
