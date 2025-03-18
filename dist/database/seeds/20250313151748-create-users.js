"use strict";const bcryptjs = require('bcryptjs')

module.exports = {
  async up (queryInterface) {
      await queryInterface.bulkInsert(
        'users', [
          {
            name: 'John Doe',
            email: 'johndoe@mail.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'John Doe',
            email: 'johndoe2@mail.com',
            password_hash: await bcryptjs.hash('654321', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'John Doe',
            email: 'johndoe3@mail.com',
            password_hash: await bcryptjs.hash('123456789', 8),
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );
  },

  async down () {}
};
