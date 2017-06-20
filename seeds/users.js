exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {id: 1, username: 'callSaul', email: 'saul@email.com', password: 'saul-123' },
          {id: 2, username: 'william3', email: 'will@email.com', password: 'will^42' },
          {id: 3, username: 'phoenix42', email: 'nix@email.com', password: '**nix6969' },
          {id: 4, username: 'msPiggy', email: 'piggy@email.com', password: '123pig#' },
										{id: 5, username: 'JR420', email: 'jr@email.com', password: 'j420r!!' },
										{id: 6, username: 'lazypants', email: 'lp@email.com', password: 'ptsd09876?#?' }
      ]);
    });
};
