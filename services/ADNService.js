function _letrasValidas(...args){
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
    //Debe ser n*n
    if(dataStrings.length !== dataStrings[0].length) throw new Error(`La matriz es ${dataStrings.length}x${dataStrings[0].length} mas no NxN como es requerido`)
    const n = dataStrings.length
    for(let i = 0 ; i< n;i++){
        let memory = {
            mutantHor : "",
            mutantVer : "",
            mutantIDsup : "",
            mutantIDinf : "",
            mutantDIsup : "",
            mutantDIinf : "",
        }
        let recta = ""
        for(j= 0 ; j<n ; j++){
        //OBTENCION ELEMENTO DE CADA RECTA
            let actualHor = dataStrings[i][j]
            let actualVer = dataStrings[j][i]
            let actualIDinf = j+i<n ? dataStrings[j+i][j] : null
            let actualIDsup = j-i>=0 ? dataStrings[j-i][j] : null
            let actualDIinf = n-1-j+i < n ? dataStrings[j][n-1-j+i] : null //n-1, se quiere empezar desde el otro extremo, -j para hacer la diagonal, +i para controlar que tan arriba o abajo va la recta
            let actualDIsup = n-1-j-i >= 0 ? dataStrings[j][n-1-j-i] : null

            if(actualIDsup) recta+=actualIDsup
            if(!_letrasValidas(actualHor, actualVer, actualIDinf, actualDIinf)) throw new Error(`Letra invalida detectada (${dataStrings[i][j]}) en la fila ${i} ${dataStrings[i]}`)

        //COMPROBACIONES MUTANTE O NO
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


            //Igual a horizontal, solo que se valida que actualIDinf no sea null (por que se puede dar el caso que el punto actual de la diagonal se salga de la matriz)
            if(actualIDinf){
                if(memory.mutantIDinf === ""){
                    memory["mutantIDinf"] = actualIDinf
                }else{
                    if(memory.mutantIDinf.slice(-1)[0] === actualIDinf) memory["mutantIDinf"] += actualIDinf
                    else memory["mutantIDinf"] = actualIDinf
                }
            }
            if(memory.mutantIDinf.length === 4) return true


            //Diagonal derecha - izquierda, igual que IDinf
            if(actualDIinf){
                if(memory.mutantDIinf === ""){
                    memory["mutantDIinf"] = actualDIinf
                }else{
                    if(memory.mutantDIinf.slice(-1)[0] === actualDIinf) memory["mutantDIinf"] += actualDIinf
                    else memory["mutantDIinf"] = actualDIinf
                }
            }
            if(memory.mutantDIinf.length === 4){
                return true
            }
        }
        console.log(recta)
    }
    return false
}

module.exports = isMutant