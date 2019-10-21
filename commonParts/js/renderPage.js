(function($, root) {

    function renderContent(data) {
        var content = '';
        data.forEach(function(ele, index) {
            // index starts from 1
            index++;
            /* if index is odd, image render in the left side,
               otherwise，in right side */
            index % 2 != 0 ? imgLeft() : imgRight();

            function imgLeft() {
                return content += '<div class="course course'+index+' ">\
                    <div class="imgSection">\
                        <img src="'+ele.imageUrl+'" alt="'+ele.alt+'">\
                    </div>\
                    <div class="courseDesc">\
                        <p class="courseName">'+ele.title+'</p>\
                        <p class="courseDetail">'+ele.desc+'</p>\
                    </div>\
                </div>';
            };

            function imgRight() {
                return content += '<div class="course course'+index+' ">\
                    <div class="courseDesc">\
                        <p class="courseName">'+ele.title+'</p>\
                        <p class="courseDetail">'+ele.desc+'</p>\
                    </div>\
                    <div class="imgSection">\
                        <img src="'+ele.imageUrl+'" alt="'+ele.alt+'">\
                    </div>\
                </div>';
            };

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
