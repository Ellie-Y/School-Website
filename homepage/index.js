// homepage js

(function() {
    document.body.addEventListener('touchstart', function(){});

    var oNav = document.getElementById('activeNav');
    var oDropBtn = document.getElementsByClassName('dropBtn')[0];
    var studyButton = document.getElementsByClassName('studyButton')[0];
    
    oDropBtn.onclick = function() {
        if(oNav.style.display == 'none') {
            oNav.style.display = 'flex';
        }else {
            oNav.style.display = 'none'
        }
    };

    studyButton.onclick = function() {
        window.location.href='../studyPage/index.html';
    }
})()
