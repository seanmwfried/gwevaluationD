'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactrequestSchema extends Schema {
  up () {
    this.create('contactrequests', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('phone')
      table.timestamps()
    })
  }

  down () {
    this.drop('contactrequests')
  }
}

module.exports = ContactrequestSchema
