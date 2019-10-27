//research page js
//get content data by Ajax, then use data to render page


//Expose it in order to be used
var root = window.uniPage;

function getData(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function(oData) {
            console.log(oData);
            var newContent = root.render(oData.researchPage);
            // console.log(newContent);
            $('.content').html(newContent);
        },
        error: function() {
            console.log('request failed');
        }
    });

}

getData("../source/mockData/data.json");
