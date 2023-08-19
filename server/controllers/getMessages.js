async function getMessagesFromDatabase(req, res, next){    
    // sort messages by date descending
    // limit to (the first) 10
    const query = await MessageModel.find()
    .sort({ date: -1})
    .limit(10)
    .exec()

    res.json(query)
}