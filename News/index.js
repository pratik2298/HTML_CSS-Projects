// News API parameters bbc-news and apiKey

//source
let source = 'bbc-news';
//console.log(source);

//API key
let apiKey = 'f0270bfa4bf547eea0faadcae06212ee';
// console.log(apiKey);


// Grabbing news Container
let newsAccordian = document.getElementById("newsAccordian");

// creating AJAX GET request
const xhr = new XMLHttpRequest(); 
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f0270bfa4bf547eea0faadcae06212ee`, true)
xhr.onload = function(){
    if(this.status === 200)
    {
        //  parsing the response text into JSON
        let json = JSON.parse(this.responseText);
        console.log(json);
    }
    else
    {
        console.log("some Error Occured");
    }
     
}
xhr.send()


let news = `<div class="card">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Collapsible Group Item #1
                      </button>
                    </h2>
                  </div>
              
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                    </div>
</div>`