let express = require('express')
let dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')


let app = express()

// callbacks
let rootCallback = (req, res) => {
    res.json({'hello': 'Welcome to Express'})
}
let postRootCallback = (req, res) => {
    res.json({'hello': 'welcome to handling the post method in express'})
}

let serveIndex = (req, res) => {
    let pathToFile = __dirname + '/views/index.html'
    res.sendFile(pathToFile)
}

let serveText = (req, res) => {
    res.send('Hello we are partially good with express')
}
let serveJson = (req, res) => {
    let jsonObject
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        jsonObject= {'message': 'HELLO JSON'}
    } else {
        jsonObject ={'message': 'Hello Json'}
    }
    res.json(jsonObject)
}

let staticDir = __dirname + '/public'

let loggingMiddleware = (req, res, next) => {
    console.log(req.ip, req.method, req.path, req.time, req.params, req.body)
    next()
}

let timeMiddleware = (req, res, next) => {
    req.time = new Date().toString()
    next()
}

let echoFunc = (req, res) => {
    const {word} = req.params

    res.json ({'echo': word})
}

let getQueries = (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    //or you can destructure and rename the keys
    var { first, last, age } = req.query;

    res.json({
        'name': `${firstName}${lastName}`,
        'firstName': `${first}`,
        'lastName': `${last}`,
        'age': `${age}`
    })
}

let createPerson = (req, res) => {
    const { name, age, address, favorite_foods } = req.body
    console.log(name, age, address, favorite_foods)
    res.json({
        name, age, address, favorite_foods
    })
}

// middlewares
app.use('/public', express.static(staticDir))
app.use('/public', loggingMiddleware)
app.use(timeMiddleware).use(loggingMiddleware)  //here we chain 2 middleware together
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//routes
// app.METHOD(PATH, HANDLER)
app.get('/', rootCallback)
app.post('/', postRootCallback)
app.get('/index.html', serveIndex)
app.get('/text', serveText)
app.get('/json', serveJson)

app.get('/now', (req, res) => {
    res.send({
        time: req.time,
    })
})

app.get('/:word/echo', echoFunc)  //route params func
app.get('/query', getQueries)
app.post('/create-person', createPerson)

//listen on a particular port
app.listen(8000)