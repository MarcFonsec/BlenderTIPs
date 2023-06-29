
var active_mode = 0;
    
    

function send_post_funtion() {
    
    var get_title = document.querySelector("#input_title").value;
    
    document.querySelector("#mark1").innerHTML = get_title;
       
}

function dark_theme_funtion() {
    
    var icon_theme = document.querySelector("#icon_theme_mode");
    
    active_mode += 1;
    
    if (active_mode > 1) {
    
        active_mode = 0;
    
    }
    
    
    if (active_mode == 0) {
    
        var root = document.querySelector(":root").style;
        
        icon_theme.innerHTML = "dark_mode";
        
        root.setProperty('--back_color', '#f5f6fa');
        root.setProperty('--menu_color', 'white');
        root.setProperty('--word_color', '#778ca3');
        root.setProperty('--dramatic_color', '#1cc94d');
        root.setProperty('--word_dramatic_color', 'white'); 
        root.setProperty('--dramatic_color_a', '#f5fcf2');
    }
    
    if (active_mode == 1) {
    
        var root = document.querySelector(":root").style;
        
        icon_theme.innerHTML = "light_mode";
        
        root.setProperty('--back_color', '#2f3640');
        root.setProperty('--menu_color', '#636e72');
        root.setProperty('--word_color', 'white');
        root.setProperty('--dramatic_color', '#94ff00');
        root.setProperty('--word_dramatic_color', 'black'); 
        root.setProperty('--dramatic_color_a', '#2f3640');
        root.setProperty('--shadow_slots', '0px 10px 50px rgba(0,0,0,0.2)');
    }
}
















