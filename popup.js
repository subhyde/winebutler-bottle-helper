document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false);

    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true},
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, '', bottle_calculator);

            })


    }

});

function bottle_calculator(res) {
    let winetotal = parseFloat(res.wine);
    let bottles = document.getElementById('bottles').value;
    let price = bottles * 1.10;
    let tax = 1.13;
    let total_cost = ((winetotal + price) * tax).toFixed(2);


    document.getElementById('tax').value = (tax * price + 3.90).toFixed(2);
    document.getElementById('bottleprice').value = (tax * price).toFixed(2);
    document.getElementById('totalcost').value = total_cost;
}


