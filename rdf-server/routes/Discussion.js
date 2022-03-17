const express = require('express');
const discussionRoute = express.Router();

let discussionModel = require('../models/Discussion');
let stack = require('../RDFGraphCreator/Stack')
const st = new stack()
const gst = new stack()

discussionRoute.route('/message').post((req, res, next) => {
    discussionModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            let finalSend = "\n "
            discussionModel.find((error, datas) => {
                for (let data of datas) {
                    console.log(data)
                    st.push(data)
                }
                for (i of datas) {
                    let m = st.pop()
                    console.log("", m)
                    let name = m.user
                    let message = m.message
                    let final = name + ":" + message + "\n"
                    finalSend = finalSend + final

                }
                res.json(finalSend)


            })
        }
    })
});



discussionRoute.route('/getmessage').get((req, res, next) => {
    let gfinalSend = "\n "
    discussionModel.find((error, datas) => {
        for (let gdata of datas) {
            console.log(gdata)
            gst.push(gdata)
        }
        for (i of datas) {
            let gm = gst.pop()
            console.log("", gm)
            let gname = gm.user
            let gmessage = gm.message
            let gfinal = gname + ":" + gmessage + "\n"
            gfinalSend = gfinalSend + gfinal

        }
        res.json(gfinalSend)


    })
 })


module.exports = discussionRoute;