import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json());

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'kelson',
    password : process.env.SENHA_BANCO,
    database : 'kelson'
  }
});

app.post('/createUser', (req: Request, res: Response) => {

  try {
    const user = req.body
    const query = connection("usuarios_toDo").insert(user)
    query.then(() => res.send("200"))
  }catch(e){
    res.send("400")
  }
});

app.delete('/deleteUser', (req: Request, res: Response) => {
  try {
    const nickname = req.body.nickname
    const query = connection("usuarios_toDo").where("nickname", nickname).del()
    query.then(() => res.send("200"))
  }catch(e){
    res.send("400")
  }
});

app.put('/alterUser', (req: Request, res: Response) => {
  try {
    const nickname = req.body.nickname
    const newnickname = req.body.newnickname
    const query = connection("usuarios_toDo").where("nickname", nickname).update("nickname", newnickname)
    query.then(() => res.send("200"))
  }catch(e){
    res.send("400")
  }
});

app.get('/user', (req: Request, res: Response) => {
  const key = req.query
  if(Object.keys(key)[0] === "name"){
    const username = key.name
    let query = connection("usuarios_toDo").select("nickname").where("name", username)
    query.then((resposta) => res.send(resposta))
  }
  else if(Object.keys(key)[0] === "id"){
    const iduser = key.id
    let query = connection("usuarios_toDo").select("nickname").where("id", iduser)
    query.then((resposta) => res.send(resposta))
  }
});

app.get('/users', (req: Request, res: Response) => {

    let query = connection("usuarios_toDo").select("nickname")
    query.then((resposta) => res.send(resposta))

})

app.post('/createtoDo', (req: Request, res: Response) => {
  try {
    const toDo = req.body
    const query = connection("toDo").insert(toDo)
    query.then(() => res.send("200"))
  }catch(e){
    res.send("400")
  }
});

// app.put('/altertoDo', (req: Request, res: Response) => {
//   try {
//     const id = req.body.id
//     const describe = req.body.decribe
//     const date = req.body.date
//     let query: any
//     if (describe !== "")
//       query = connection("toDo").where("id", id).update("toDo_describe", describe)
//     if (date !== "")
//       query = connection("toDo").where("id", id).update("date_limite", date)
//     query.then(() => res.send("200"))
//   }catch(e){
//     res.send("400")
//   }
// });

app.put('/alterDoUser', (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const do_user = req.body.do_user
    const query = connection("toDo").where("id", id).update("do_user", do_user)
    query.then(() => res.send("200"))
  }catch(e){
    res.send("400")
  }
});

app.get('/todo/createUser', (req: Request, res: Response) => {
  const key = req.query
  const id = key.id
  if(Object.keys(key)[1] === "date_limite"){
    const date_limite = key.date_limite
    let query = connection("toDo").select("*").where("ask_user", id).andWhere("date_limite", "<", date_limite)
    query.then((resposta) => res.send(resposta))
    return
  }
  let query = connection("toDo").select("*").where("ask_user", id)
  query.then((resposta) => res.send(resposta))
});

app.get('/todo/doUser', (req: Request, res: Response) => {
  const key = req.query
  const id = key.id
  if(Object.keys(key)[1] === "date_limite"){
    const date_limite = key.date_limite
    let query = connection("toDo").select("*").where("do_user", id).andWhere("date_limite", "<", date_limite)
    query.then((resposta) => res.send(resposta))
    return
  }
  let query = connection("toDo").select("*").where("do_user", id)
  query.then((resposta) => res.send(resposta))
});

app.get('/todo/all', (req: Request, res: Response) => {
  const key = req.query
  const order = key.order
  if(Object.keys(key)[1] === "date_limite"){
    const date_limite = key.date_limite

    let query = connection("toDo").join("usuarios_toDo", "ask_user", "=", "usuarios_toDo.id")
                                            .select("*")
                                            .where("date_limite", "<", date_limite)
                                            .orderBy(order)
    query.then((resposta) => res.send(resposta))
    return
  }
  let query = connection("toDo").join("usuarios_toDo", "ask_user", "=", "id")
                                          .select("*")
                                          .orderBy(order)
  query.then((resposta) => res.send(resposta))
});

const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
