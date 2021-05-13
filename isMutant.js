function letrasValidas(...args){
    let palabras = {
        "A":true,
        "T":true,
        "C":true,
        "G":true,
    }
    let valido = true
    for(palabra of args){
        if(palabra !== null && !palabras[palabra]){
            valido = false
            break
        }
    }
    return valido
}
/**
 * @param  {} dataStrings arreglo de strings de longitud n, 
 * a su vez cada string debe tener una longitud n solo pudiendo contener las letras A,T,C,G
 * Ejemplo: ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
 */
function isMutant(dataStrings){
    //Validaciones del input

    //Debe ser n*n
    if(dataStrings.length !== dataStrings[0].length) throw new Error(`La matriz es ${dataStrings.length}x${dataStrings[0].length} mas no NxN como es requerido`)

    const n = dataStrings.length
    for(let i = 0 ; i< n;i++){
        console.log(i)
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

            if(!letrasValidas(actualHor, actualVer, actualID, actualDI)) throw new Error(`Letra invalida detectada (${dataStrings[i][j]}) en la fila ${i} ${dataStrings[i]}`)


            //Horizontal
            //Si el memorizador esta vacio se ingresa la actual letra
            if(memory.mutantHor === ""){
                memory["mutantHor"] = actualHor
            }else{
                //Si la ultima letra del memorizador es igual a la actual se agrega (para luego verificar)
                if(memory.mutantHor.slice(-1)[0] === actualHor) memory["mutantHor"] += actualHor
                //Sino se descarta, pues son distintos y no existe posibilidad de adn mutante
                else memory["mutantHor"] = actualHor
            }
            //Hay 4 letras iguales asi que es mutante
            if(memory.mutantHor.length === 4) return true


            //Vertical (igual a horizontal)
            if(memory.mutantVer === ""){
                memory["mutantVer"] = actualVer
            }else{
                if(memory.mutantVer.slice(-1)[0] === actualVer) memory["mutantVer"] += actualVer
                else memory["mutantVer"] = actualVer
            }
            if(memory.mutantVer.length === 4) return true


            //Igual a horizontal, solo que se valida que actualID no sea null (por que se puede dar el caso que el punto actual de la diagonal se salga de la matriz)
            if(actualID){
                if(memory.mutantID === ""){
                    memory["mutantID"] = actualID
                }else{
                    if(memory.mutantID.slice(-1)[0] === actualID) memory["mutantID"] += actualID
                    else memory["mutantID"] = actualID
                }
            }
            if(memory.mutantID.length === 4) return true


            //Diagonal derecha - izquierda, igual que ID
            if(actualDI){
                if(memory.mutantDI === ""){
                    memory["mutantDI"] = actualDI
                }else{
                    if(memory.mutantDI.slice(-1)[0] === actualDI) memory["mutantDI"] += actualDI
                    else memory["mutantDI"] = actualDI
                }
            }
            if(memory.mutantDI.length === 4){
                return true
            }
        }
    }
    return false
}

module.exports = isMutant