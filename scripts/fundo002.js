const ex = document.getElementById("experimento")
        var iterate = 0;
        
        ex.addEventListener("mouseover", ()=>{
            iterate += 1;

            if(iterate % 2 == 0)
                ex.style.backgroundPosition = "right center";
            
            else
                ex.style.backgroundPosition = "left center";
        })

        ex.addEventListener("mouseout", ()=>{
            ex.style.backgroundPosition = "center center";
        })

        //Mudança automatica

        const auto = document.getElementById("auto")

        const hor = document.getElementById("linha");
        const ver = document.getElementById("coluna");
        
        const btn = document.getElementById("bt");

        bt.addEventListener("click", ()=>{
            auto.style.backgroundPosition = hor.value + " " + ver.value;
        })