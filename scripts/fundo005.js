const btn = document.getElementById("btn");

        const content = document.getElementById("conteudo-test");

        btn.addEventListener("click", ()=>{
            const l = document.getElementById("left").value || 0;
            const t = document.getElementById("top").value || 0;

            const tt = document.getElementById("type-top").value;
            const tl = document.getElementById("type-left").value

            content.style.left = l + tl;
            content.style.top = t + tt;
        })