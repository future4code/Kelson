import { readdir, readFile}  from 'fs'
const path = require("path")

const filePach: string = path.join(__dirname, "textos" )

let textosJuntos: string = ""

const promisefile = ((err: any, data: Buffer ): string => {
    if (err) {
        console.error(err)
        return
    }
    const texto: string = data.toString()
    textosJuntos += texto
    return texto
})

readdir(filePach, (err , files) => {
    if (err){
        console.error(err)
        return
    }
    const textos: Promise<string>[] = files.map( file => {
        const promise: Promise<string> = new Promise((resolve, reject) => {
            readFile(filePach + "/" + file, (err: any, data: Buffer) => {promisefile(err, data)
                                                                         resolve()})
        })
                                                                            
        
        return promise
    })
    Promise.all(textos).then((values: string[]) => {
        console.log(textosJuntos)})
})
