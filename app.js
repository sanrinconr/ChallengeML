
/**
 * @param  {} dataStrings arreglo de strings de longitud n, 
 * a su vez cada string debe tener una longitud n solo pudiendo contener las letras A,T,C,G
 * Ejemplo: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
 */
function isMutant(dataStrings){
    const n = dataStrings.length
    for(let i = 0 ; i< n;i++){
        let horizontal = ""
        let diagonalID = ""
        let vertical = ""
        let diagonalDI = ""
        let memory = {
            mutantHor : "",
            mutantVer : "",
            mutantID : "",
            mutantDI : "",
        }
        for(j= 0 ; j<n ; j++){
            //Obtencion de horizontal
            horizontal+=dataStrings[i][j]
            //Obtencion de diagonal izquierda a derecha
            if(j+i<dataStrings.length){
                diagonalID += dataStrings[j+i][j]
            }
            //Obtencion de vertical
            vertical +=dataStrings[j][i]
            //Obtencion de diagonal derecha a izquierda
            if(n-1-j+i < n){
                diagonalDI += dataStrings[j][n-1-j+i]
            }

            //Se agregan datos a los memorizadores

            //Horizontal
            //Si el memorizador esta vacio se ingresa la actual letra
            if(memory.mutantHor === ""){
                memory["mutantHor"] = dataStrings[i][j]
            }else{
                //Si la ultima letra del memorizador es igual a la actual se agrega (y luego verificar)
                if(memory.mutantHor.slice(-1)[0] === dataStrings[i][j]){
                    memory["mutantHor"] += dataStrings[i][j]
                }
                //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                else{
                    memory["mutantHor"] = dataStrings[i][j]
                }
            }
            console.log(memory.mutantHor)

        }
    }
    return false

}
let data = [
    "AAAAA",
    "12345",
    "ABCDE",
    "12345",
    "ABCDE",
]
console.log(isMutant(data))
