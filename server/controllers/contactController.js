import ContactModel from "../models/Contact.js";

class ContactController{
    static saveContact = async (req,res) => {
        try{
            const{name,email,phone,subject,message} = req.body;

            const doc = new ContactModel({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            })
            const result = await doc.save();
            res.status(201).send({"status": "success", "result": result});
        }catch(e){
            console.log(e)
        }
    }
}

export default ContactController