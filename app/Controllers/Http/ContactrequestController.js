'use strict'

const Contactrequest = use("App/Models/Contactrequest");

class ContactrequestController {
  async create({request, response, view}) {
    const data = request.only(["name", "email", "phone"]);
    const contactrequest = new Contactrequest;
    
    contactrequest.name = data.name;
    contactrequest.email = data.email;
    contactrequest.phone = data.phone;

    await contactrequest.save();

    return response.redirect('/done');
  }
}

module.exports = ContactrequestController
