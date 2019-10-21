// study page js

var root = window.uniPage;

function getData(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function(oData) {
            var newContent = root.render(oData.studyPage);
            // console.log(newContent);
            $('.content').html(newContent);
        },
        error: function() {
            console.log('request failed');
        }
    });
};

getData('../source/mockData/data.json');
