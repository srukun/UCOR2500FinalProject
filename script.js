let Book = function(title, author, text, bulletPoints, url){
    this.title = title;
    this.author = author;
    this.text = text;
    this.bulletPoints = bulletPoints;
    this.url = url;
}

let lookAWhite = new Book("Look A White!", "George Yancy", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ut iure? Accusantium maiores corrupti, quae fugit nisi dignissimos natus placeat nostrum consequuntur? Voluptas mollitia ut, nesciunt fugiat necessitatibus quas quasi obcaecati vitae, minus ex dolorum qui, voluptatibus unde dolores odit placeat ab. Error voluptatum, temporibus corporis mollitia maiores placeat, consectetur iure saepe dicta, quasi sunt ipsa odit consequuntur aperiam fugit reprehenderit eos accusamus fugiat explicabo. Sit commodi expedita neque tempora ut quidem, blanditiis illum delectus amet consequuntur quos! Reiciendis dolore explicabo tempora, laborum dolor odit, culpa vitae omnis libero dolorem, quam ea maxime quisquam adipisci unde suscipit nulla repellat corrupti deleniti nostrum. Consectetur eligendi voluptates esse tempore cumque architecto deserunt ullam animi est consequatur. Dignissimos aliquam quibusdam omnis sit fugit at impedit quo. Perspiciatis similique vero numquam deleniti, ducimus odio fugit minus saepe corporis eum maiores dolor rem laboriosam ea quod ratione unde alias quaerat molestias ex commodi obcaecati dolores.", 
["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, sapiente!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, sapiente!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, sapiente!"], "./Assets/LookAWhite.jpg");

let TheForceOfNonViolence = new Book("The Force Of Non Violence", "Judith Butler", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tortor sapien. Praesent pretium, lorem a pulvinar pulvinar, libero arcu pulvinar arcu, eget tristique arcu urna nec eros. Nullam tincidunt metus metus, vel tempor libero elementum eu. Curabitur malesuada non nulla ut suscipit. Curabitur ac nunc laoreet, finibus mauris eu, luctus orci. Aenean volutpat lorem eget faucibus auctor. Mauris volutpat lorem ut neque hendrerit hendrerit. Suspendisse nec tempor lacus. Maecenas dignissim lectus et turpis tempus auctor. Curabitur ac odio vehicula, viverra nibh iaculis, lobortis nibh. Praesent lacinia, quam mattis placerat consectetur, tortor nisi commodo purus, at interdum neque dolor eget libero. Proin eleifend nunc sagittis elementum ornare. Morbi bibendum facilisis velit sit amet vulputate. Vestibulum at orci fringilla, convallis turpis in, ullamcorper diam. Morbi finibus augue finibus sem efficitur laoreet. Praesent sit amet dui suscipit, consequat augue id, suscipit mauris. Sed non vulputate velit. Quisque sed bibendum risus. Nunc placerat.", 
["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, sapiente!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, sapiente!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis."], "./Assets/TheForceOfNonViolence.jpg");

let PhenomenologyofInvisibility = new Book("Phenomenology of Invisibility", "Boram Jeong", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna metus, efficitur sed lectus ac, pharetra pretium tortor. Integer aliquam cursus pellentesque. Vestibulum varius sapien nec risus aliquam posuere. Integer congue mollis sapien, quis sollicitudin ante. Aenean ac hendrerit urna. Quisque sed velit vel lectus tempor dictum. Aenean vel mauris viverra, dapibus nibh nec, mattis ex. Ut imperdiet enim id magna pharetra lacinia. Fusce vel efficitur elit. Integer accumsan elit metus, at dignissim eros suscipit et. Nulla facilisi. Aliquam erat volutpat. Morbi aliquam sem eget iaculis congue. Nunc vitae metus sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu dui tellus. Duis lacinia varius pharetra. Donec rutrum dolor sed sollicitudin dapibus. Morbi eget massa a nisl eleifend pulvinar quis eu libero. Sed pharetra mi et aliquet ultricies. Fusce sed lacus vel justo pharetra malesuada euismod sit amet dolor. Proin accumsan.", 
["Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempor.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut."], "./Assets/PhenomenologyofInvisibility.png");

let PhenomenologyofRapMusic = new Book("Phenomenology of Rap Music", "Harry A. Nethery", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut risus sed enim tincidunt faucibus quis eu enim. Fusce mollis nunc gravida augue cursus mollis. In justo libero, molestie vitae vehicula vulputate, lacinia ut diam. Ut felis metus, hendrerit vitae lectus nec, tempus consectetur felis. Maecenas vel magna sit amet augue congue dictum eget et ligula. Etiam a dolor pellentesque, rutrum eros sed, egestas magna. Etiam nec sodales lacus. Maecenas egestas quam eget est scelerisque hendrerit. Aliquam eu justo consequat, placerat risus non, feugiat diam. Proin tempus porttitor tincidunt. Integer ac porta enim, id tristique orci. Nullam sollicitudin justo eu pulvinar euismod. Duis interdum mattis dignissim. Mauris mattis interdum dolor, quis consequat est malesuada id. Quisque gravida urna nibh, bibendum bibendum felis rhoncus eget. Curabitur tempor est vel ligula efficitur, a tincidunt massa consequat. Suspendisse sollicitudin leo sit amet ipsum facilisis feugiat. Nullam in egestas velit. Suspendisse potenti. Sed eget.", 
["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor."], "./Assets/PhenomenologyofRapMusic.png");

let listOfBooks = [lookAWhite, TheForceOfNonViolence, PhenomenologyofInvisibility, PhenomenologyofRapMusic];

let index = 0;

function loadBook() {
    let bookTitle = document.querySelector('.desc-card-title');
    let bookAuthor = document.querySelector('.desc-card-author');
    let bookText = document.querySelector('.desc-text');
    let b1 = document.querySelector('.desc-bullet-1');
    let b2 = document.querySelector('.desc-bullet-2');
    let b3 = document.querySelector('.desc-bullet-3');
    let bookImage = document.querySelector('.image-card');

    if (listOfBooks.length > 0 && index >= 0 && index < listOfBooks.length) {
        let book = listOfBooks[index];
        bookTitle.innerHTML = book.title;
        bookAuthor.innerHTML = book.author;
        bookText.innerHTML = book.text;
        
        if (book.bulletPoints && book.bulletPoints.length >= 3) {
            b1.innerHTML = book.bulletPoints[0];
            b2.innerHTML = book.bulletPoints[1];
            b3.innerHTML = book.bulletPoints[2];
        }

        // Set background image
        bookImage.style.backgroundImage = 'url(' + book.url + ')';
    } else {
        console.error('Invalid index or empty book list');
    }
}
function previousBook(){
    if((index - 1) >= 0){
        index--;
        loadBook();
    }
}
function nextBook(){
    if((index + 1) <= 3){
        index++;
        loadBook();
    }
}
loadBook();
