async function postMessage(req, res, next){
    console.log(req)
    // extract the name and message from req

    // const name =
    // const message = 





    // check if user already exists???
    // user name must be unique
    let user_instance = new UserModel(
        {
            name: name,
        }
    )
    await user_instance.save()

    let message_instance = new MessageModel(
        {
        text: message,
        user: user_instance._id,
        date: new Date(),
        }
    )
    await message_instance.save()
}