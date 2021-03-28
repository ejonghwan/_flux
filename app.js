const express = require('express')
const app = express()
const cors = require('cors')
const uuidkey = require('uuid-apikey')


// console.log(uuidkey.create())
const key = {
    apiKey: 'QJETHXM-1KTMFBQ-M6RKEEW-3RMHGDA',
    uuid: 'bc9da8f6-0cf5-47ae-a1b1-373b1e291835'
}

app.use(cors({
    origin: ['http://localhost:3000','http://127.0.0.1:5500']

}))

app.listen(3002, () => {
    console.log('server listen')
})


app.get('/api/users/:apiKey/:type', async (req, res) => {
    
    let { apiKey, type } = req.params
    let data;

    // if( !uuidkey.isAPIkey() || !uuidkey.check(apiKey, key.uuid)) {
    //     res.send('키가 다름')
    // }
    if( !uuidkey.check(apiKey, key.uuid)) {
        res.send('키가 다름')
    }

    // console.log(type)
    if(type === 'jj') {
        data = [
            {
                name: 'jonghwan1', 
                age: 30 
            },
            {
                name: 'jonghwan2', 
                age: 30 
            },
            {
                name: 'jonghwan3', 
                age: 30 
            },
            {
                name: 'jonghwan4', 
                age: 30 
            },
            {
                name: 'jonghwan5', 
                age: 30 
            },

        ]
    } else if(type === 'hh') {
        data = [
            {
                name: 'hwanhwan1', 
                age: 30 
            },
            {
                name: 'hwanhwan2', 
                age: 30 
            },
            {
                name: 'hwanhwan3', 
                age: 30 
            },
            {
                name: 'hwanhwan4', 
                age: 30 
            },
            {
                name: 'hwanhwan5', 
                age: 30 
            },
        ]
    }

    res.send(data)
})