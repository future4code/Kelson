import { readdir, readFile, writeFile}  from 'fs'
import * as moment from "moment" 

const path = require("path")

const filePach: string = path.join(__dirname, "textos" )

type event = {
    name: string
    description : string
    date: moment.Moment

}

const getEvents = (): void =>{ 
    let textosJson: string = ""

    const promisefile = ((err: any, data: Buffer ): void => {
        if (err) {
            console.error(err)
            return
        }
        const texto: string = data.toString()
        textosJson += texto
    })

    const promise: Promise<string> = new Promise((resolve, reject) => {
        readFile(filePach + "/date.json" , (err: any, data: Buffer) => {promisefile(err, data)
                                                                        resolve()})
    })

    Promise.all([promise]).then(() => {
        console.log(textosJson)})
}

const createEvent = (event: event[] ): void => {
    if(event[0].date.unix() < moment().unix()){
        console.log("Erro. Entre com uma data valida")
        return
    }
    if (typeof event[0].name !== "string" || typeof event[0].description !== "string"){
        console.log("Erro. Entre com todos os valores.")
        return
    } 
    
    const promisefile = ((err: any, data: Buffer): void => {
        if (err) {
            console.error(err)
            return
        }
        let json = {...JSON.parse(data.toString()), ...event}

        writeFile((filePach + "/date.json"), JSON.stringify(json), () => getEvents())
    })
    
    readFile(filePach + "/date.json", (err: any, data: Buffer) => {
            promisefile(err, data)
    })
}

const date: event = {
    name: "date",
    description: "date witn Jessica",
    date: moment("13/03/2020 20:00", "DD/MM/YYYY HH:mm")
}

createEvent([date])
