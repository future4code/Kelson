const fn = require('fs')
const list = process.argv[2]
const task = process.argv[3]

try {
    fn.appendFileSync(list, `\n${task}`)
    console.log("Tarefa adicionada com sucesso!")
} catch (error) {
    console.error(err)
}
