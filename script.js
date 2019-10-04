window.addEventListener('DOMContentLoaded',function(){

        var introduction = document.getElementById('introduction');
        var html = document.getElementById('html');
        var css = document.getElementById('css');
        var javascript = document.getElementById('javascript');
        var jquery = document.getElementById('jquery');
        var mysql = document.getElementById('mysql');
        var php = document.getElementById('php');
        var connectIntroduction = document.getElementById('connectIntroduction');
        var connectHTML = document.getElementById('connectHTML');
        var connectCSS = document.getElementById('connectCSS');
        var connectJAVASCRIPT = document.getElementById('connectJAVASCRIPT');
        var connectJQUERY = document.getElementById('connectJQUERY');
        var connectMYSQL = document.getElementById('connectMYSQL');
        var connectPHP = document.getElementById('connectPHP');

        function allnone(){
       	    connectIntroduction.style.display='none';
       	    connectHTML.style.display='none';
       	    connectCSS.style.display='none';
       	    connectJAVASCRIPT.style.display='none';
       	    connectJQUERY.style.display='none';
       	    connectMYSQL.style.display='none';
       	    connectPHP.style.display='none';
            introduction.style.backgroundColor="transparent";
            html.style.backgroundColor="transparent";
            css.style.backgroundColor="transparent";
            javascript.style.backgroundColor="transparent";
            jquery.style.backgroundColor="transparent";
            mysql.style.backgroundColor="transparent";
            php.style.backgroundColor="transparent";

        }

        introduction.addEventListener('click', function(){
            allnone();
       	    connectIntroduction.style.display='block';
            introduction.style.backgroundColor = "rgba(0,0,0,0.7)";
        });
        html.addEventListener('click', function(){
       	    allnone();
       	    connectHTML.style.display='block';
            html.style.backgroundColor="rgba(0,0,0,0.7)";

        });
        css.addEventListener('click', function(){
       	    allnone();
       	    connectCSS.style.display='block';
            css.style.backgroundColor="rgba(0,0,0,0.7)";
        });
        javascript.addEventListener('click', function(){
       	    allnone();
       	    connectJAVASCRIPT.style.display='block';
            javascript.style.backgroundColor="rgba(0,0,0,0.7)";
        });
        jquery.addEventListener('click', function(){
       	    allnone();
       	    connectJQUERY.style.display='block';
             jquery.style.backgroundColor="rgba(0,0,0,0.7)";
        });
        mysql.addEventListener('click', function(){
       	    allnone();
       	    connectMYSQL.style.display='block';
            mysql.style.backgroundColor="rgba(0,0,0,0.7)";
        });
        php.addEventListener('click', function(){
       	    allnone();
       	    connectPHP.style.display='block';
            php.style.backgroundColor="rgba(0,0,0,0.7)";
        });
        




});