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
                memory["mutantHor"] = actualHor
            }else{
                //Si la ultima letra del memorizador es igual a la actual se agrega (para luego verificar)
                if(memory.mutantHor.slice(-1)[0] === actualHor){
                    memory["mutantHor"] += actualHor
                }
                //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                else{
                    memory["mutantHor"] = actualHor
                }
            }

            if(memory.mutantHor.length === 4){
                return true
            }


            //Vertical
            //Si el memorizador esta vacio se ingresa la actual letra
            if(memory.mutantVer === ""){
                memory["mutantVer"] = actualVer
            }else{
                //Si la ultima letra del memorizador es igual a la actual se agrega (para luego verificar)
                if(memory.mutantVer.slice(-1)[0] === actualVer){
                    memory["mutantVer"] += actualVer
                }
                //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                else{
                    memory["mutantVer"] = actualVer
                }
            }

            if(memory.mutantVer.length === 4){
                return true
            }


            //Diagonal izquierda - derecha
            //Si el memorizador esta vacio se ingresa la actual letra
            if(actualID){
                if(memory.mutantID === ""){
                    memory["mutantID"] = actualID
                }else{
                    //Si la ultima letra del memorizador es igual a la actual se agrega (para luego verificar)
                    if(memory.mutantID.slice(-1)[0] === actualID){
                        memory["mutantID"] += actualID
                    }
                    //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                    else{
                        memory["mutantID"] = actualID
                    }
                }
            }

            if(memory.mutantID.length === 4){
                return true
            }


            //Diagonal derecha - izquierda
            //Si el memorizador esta vacio se ingresa la actual letra
            if(actualDI){
                if(memory.mutantDI === ""){
                    memory["mutantDI"] = actualDI
                }else{
                    //Si la ultima letra del memorizador es igual a la actual se agrega (para luego verificar)
                    if(memory.mutantDI.slice(-1)[0] === actualDI){
                        memory["mutantDI"] += actualDI
                    }
                    //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                    else{
                        memory["mutantDI"] = actualDI
                    }
                }
            }

            if(memory.mutantDI.length === 4){
                return true
            }

            

        }
    }
    return false

}
let data = [
    "ZACCB",
    "AZ3V5",
    "AAVTT",
    "BV345",
    "VBCDE",
]
console.log(isMutant(data))
