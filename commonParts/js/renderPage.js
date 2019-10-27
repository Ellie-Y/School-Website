(function($, root) {

    function renderContent(data) {
        var content = '';
        data.forEach(function(ele, index) {
            // index starts from 1
            index++;
            content += '<div class="course course'+index+'">\
                <div class="imgSection">\
                    <img src="'+ele.imageUrl+'" alt="'+ele.alt+'">\
                </div>\
                <div class="title">\
                    <p class="courseName">'+ele.title+'</p>\
                </div>\
                <div class="courseDesc">\
                    <p class="courseDetail">'+ele.desc+'</p>\
                </div>\
            </div>';

        });
        //place content as a return value
        return content;
    };

    root.render = function(data) {
        return renderContent(data);
        //root.render receives the return value
    }



//Pass jquery in as a parameter instead of looking globally
//use the window.uniPage if it exists in window, otherwise create a empty obj
})(jQuery, window.uniPage || (window.uniPage = {}));
