let json_file = [
    {
        "title" : "Tesselation Mesh Add-on",
    	"data" : "19/04/2023",
    	"description" : "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos.",
    	"tags" : "UPBGE",
    	"like" : "142",
    	"comment" : "5",
    	"banner" : "https://picsum.photos/418/234",        
    },
    
    {
        "title" : "Teste from Java",
    	"data" : "08/05/2023",
    	"description" : "Apenas um teste",
    	"tags" : "JAVA",
    	"like" : "15",
    	"comment" : "2",
    	"banner" : "https://picsum.photos/418/233",     
    },
    
    {
        "title" : "Bloom effect Script",
    	"data" : "09/05/2023",
    	"description" : "Baixe aqui o add-on de bloom",
    	"tags" : "BGE",
    	"like" : "97",
    	"comment" : "7",
    	"banner" : "https://picsum.photos/418/231",    
    },
    
    {
        "title" : "Assets gratuitos CC0",
    	"data" : "09/05/2023",
    	"description" : "Baixe aqui modelos 3D gratuitamente",
    	"tags" : "Blender",
    	"like" : "12",
    	"comment" : "1",
    	"banner" : "https://picsum.photos/418/232",    
    }
]


for (var i=json_file.length-1; i >= 0; i--) {
    
    var post_form = Object.values(json_file[i]);
    
    var title_form = post_form[0];
    var data_form = post_form[1];
    var description_form = post_form[2];
    var tags_form = post_form[3];
    var like_form = post_form[4];
    var comment_form = post_form[5];
    var banner_form = post_form[6];
    
    document.querySelector("#slots").innerHTML += '<div class="slot 1"><div class="banner_slot"><img class="img_banner_slot" src=' + banner_form + ' alt="banner" width="100%"   height="100%"></img></div><div class="title_slot"><h3 id="title_form" class="title_h3">' + title_form + '</h3><h6 id="data_form">' + data_form + '</h5></div><div class="body_slot"><h4 id="description_form">' + description_form + '</h4><h7 id="tag_form" class="tag">' + tags_form + '</h7><div class="detail_like_slot"><span class="material-symbols-outlined">favorite</span><h5 id="like_form">' + like_form + '</h5></div><div class="detail_comment_share_slot"><div class="detail_comment_slot"><span class="material-symbols-outlined">chat</span><h5 id="comment_form">' + comment_form + '</h5></div><span class="material-symbols-outlined"></span></div></div></div>';
        
}




















