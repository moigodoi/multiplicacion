
let n=0
let result = []

function startmulti (){

    n = parseInt(prompt("ingrese un numero entre 1 y 20: "))  
    if (isNaN(n)){
        do {
          n = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
        }while ((isNaN(n)));
    }else{
        
        if(n<1 || n>20){
            do{
                n = parseInt (prompt ("Numero fuera de rango, vuelve a introducir el valor"));    
            }while(n<1 || n>20);
        }
    }
}
//    alert(n)


multi = () => {

    var canttabla = document.getElementById('list_tabla')

    for (let i = 1; i <= n; i++) {
        let result = (i + " x " + n + " = " + i * n)
        console.log(i + " x " + n + " = " + i * n)
//        document.write(i + " x " + n + " = " + i * n)
//        document.write("<br>");
        canttabla.innerHTML += `<li>${result}</li>`
//        document.getElementById('tabla').textContent=result;
//        document.getElementById('tabla').textContent=("<br>");
    }


    for (let i = 1; i <= n; i++) {

        let factorial = 1
        for (let j = 1; j <= i; j++) {
            factorial = factorial * j
        }

        let frase = "Factorial de " + i + " es: " + factorial 
        result[i] = frase
/*
        console.log(frase);
        document.write("<p>"frase"</p>")
        document.write("<br>");
*/
        console.log("Factorial de " + i + " es: " + factorial);
//        document.writeln("Factorial de " + i + " es: " + factorial);
//        document.write("<br>");

    }

    var countJuegos = result.length;
    var cantfacto = document.getElementById('list_franquicias')
    indice = 1;
    do {
        cantfacto.innerHTML += `<li>${result[indice]}</li>`
        indice++;
    } while (countJuegos !== indice)


}



startmulti()

document.getElementById('tabla1').textContent= n;
document.getElementById('factorial1').textContent= n;

multi();
