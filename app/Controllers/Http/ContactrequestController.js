'use strict'

const Contactrequest = use("App/Models/Contactrequest");

class ContactrequestController {
  async create({ request, response }) {
    const data = request.only(["name", "email", "phone"]);
    const contactrequest = new Contactrequest;
    
    contactrequest.name = data.name;
    contactrequest.email = data.email;
    contactrequest.phone = data.phone;

    await contactrequest.save();

    return response.redirect('/');
  }

  async receive({ view }) {
    const contactrequests = await Contactrequest.all();

    const requests = contactrequests.toJSON();

    return view.render('front-page', { requests: requests });
  }
}

module.exports = ContactrequestController
