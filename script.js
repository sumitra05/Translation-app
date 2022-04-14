let url_translate = `https://libretranslate.de/translate`;

    async function translateText(){
        try{
            let input = document.getElementById("input-text").value;

            let res = await fetch(url_translate, {
                method : "POST",
                body: JSON.stringify({
                    q: input,
                    source: "en",
                    target: "hi",
                    format: "text"
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            let data = await res.json();

            console.log("data: " , data);

            let translatedtextP = document.getElementById("translated-text");

            displayData(data, translatedtextP);
        }catch(err){
            console.log(err);
        }
    }

    function displayData(data, parent){
        parent.textContent = data.translatedText;
    }