           let zoom = 1;
           alert("Dive into ScriptFlux — code, compile, and conquer!");
window.onload = function(){
  document.getElementById("textArea").value = 
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ScriptFlux</title>
</head>
<body>
  <p>We support donations</p>
<p>bhattarya190@gmail.com</p>
</body>
</html>
`
    window.transform = function(param){
        const textArea = document.getElementById("textArea");
     if(param ==='H1'){
        textArea.style.fontSize = '2em';
        textArea.style.fontWeight = 'bold';
    }else if(param === 'I'){
        if(textArea.style.fontStyle === 'italic'){
           textArea.style.fontStyle = 'normal'
        }else{
             textArea.style.fontStyle = 'italic'
        }
    }else if(param === 'U'){
          if( textArea.style.textDecoration === 'none'){
              textArea.style.textDecoration = 'underline';
        }else{
              textArea.style.textDecoration = 'none'
        }
       
    }else {
      if( textArea.style.fontWeight === 'bold'){
            textArea.style.fontWeight = 'bold';
        }else{
             textArea.style.fontWeight = 'bold';
        }  
    }
}
    window.liveServer = function(){
        document.getElementById("compile").remove()
        window.view = function(){
document.getElementById("Compiler").innerHTML = textArea.value
document.getElementById("Compiler").style.display = 'block';

}
}
}
window.show = function(param){
        const textArea = document.getElementById("textArea");

    if(param === 'SelectAll'){
        textArea.focus()
        textArea.select()
    }
    if(param === 'date')
    {
        textArea.value+= new Date().toLocaleString()
    }
}
    window.view = function(param){
        
        if(param === 'zoomOut'){
            zoom-=0.1
            document.body.style.zoom = zoom;
        }
        if(param === 'zoomIn'){
            zoom+=0.1
            document.body.style.zoom = zoom;
        }
    }
    window.edit = function(param){
        if(param === 'New'){
            document.getElementById("textArea").value = '';
        }else if(param === 'SaveAs'){
            const fileName = prompt("Enter file name to save as:", "index.html");
            const text = document.getElementById("textArea").value;
            const blob = new Blob([text], {type : 'text/plain'})
            const url = URL.createObjectURL(blob)
            document.getElementById("saveAs").href = url;
            if(!fileName) return;
            if(!fileName.endsWith('.html')){ fileName+= '.html'; document.getElementById("saveAs").download = fileName;}
            if(fileName){
            document.getElementById("saveAs").download = fileName;
            }
        }
 
}