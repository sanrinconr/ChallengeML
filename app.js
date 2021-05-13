/**
 * @param  {} string palabra a validar, ya que el memorizador se encarga de agregar o descartar
 */
function cuatroElementosRepetidos(string){
    
}
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
            //Obtencion elemento de la recta
            let actualHor = dataStrings[i][j]
            let actualVer = dataStrings[j][i]
            let actualID = j+i<n ? dataStrings[j+i][j] : null
            let actualDI = n-1-j+i < n ? dataStrings[j][n-1-j+i] : null

            //Acumulado rectas
            horizontal+=actualHor
            vertical +=actualVer
            if(actualID) diagonalID += actualID
            if(actualDI) diagonalDI += actualDI


            //Horizontal
            //Si el memorizador esta vacio se ingresa la actual letra
            if(memory.mutantHor === ""){
                memory["mutantHor"] = dataStrings[i][j]
            }else{
                //Si la ultima letra del memorizador es igual a la actual se agrega (para luego verificar)
                if(memory.mutantHor.slice(-1)[0] === dataStrings[i][j]){
                    memory["mutantHor"] += dataStrings[i][j]
                }
                //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                else{
                    memory["mutantHor"] = dataStrings[i][j]
                }
            }

            if(memory.mutantHor.length === 4){
                return true
            }
        }
    }
    return false

}
let data = [
    "AAACB",
    "12345",
    "ATTTT",
    "12345",
    "ABCDE",
]
console.log(isMutant(data))
