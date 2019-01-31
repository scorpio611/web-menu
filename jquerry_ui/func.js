$(document).ready(function () {

    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });

    $("#resizable").resizable();
    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {

        $("p").show();
    });
    $("#start").click(function () {
        var div = $("div");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '100px'}, "slow");
        div.animate({right: '50px'}, "slow");
        div.animate({fontSize: '10px'}, "slow");

    });

    $("#accordion").accordion();

    $("#selectable").selectable();

    $("#sortable").sortable();
    $("#sortable").disableSelection();

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });

    $("#datepicker").datepicker();

    $("#dialog").dialog();

    $("#slider").slider();
    $("#progressbar").progressbar({
        value: 37
    });

    var spinner = $("#spinner").spinner();

    $("#disable").on("click", function () {
        if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });
    $("#destroy").on("click", function () {
        if (spinner.spinner("instance")) {
            spinner.spinner("destroy");
        } else {
            spinner.spinner();
        }
    });
    $("#getvalue").on("click", function () {
        alert(spinner.spinner("value"));
    });
    $("#setvalue").on("click", function () {
        spinner.spinner("value", 5);
    });

    $("button").button();

    $("#tabs").tabs();

    $("#button").on("click", function () {
        $("#effect").addClass("newClass", 1000, callback);
    });

    function callback() {
        setTimeout(function () {
            $("#effect").removeClass("newClass");
        }, 1500);
    }

    $("#button").on("click", function () {
        $("#effect").removeClass("newClass", 1000, callback);
    });

    function callback() {
        setTimeout(function () {
            $("#effect").addClass("newClass");
        }, 1500);
    }

});
