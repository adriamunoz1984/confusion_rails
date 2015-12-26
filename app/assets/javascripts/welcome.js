
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
                          $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
                        $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
 

    

        $(document).ready(function()    //Login Modal Script 
        {
            $("#loginModal").click(function()
            {
                $("#myModal").modal();
            });
        });

        $(document).ready(function()    //Reserve a Table Modal Script
        {
            $("#reserve").click(function()
            {
                $("#reserveModal").modal();
            });
        });

