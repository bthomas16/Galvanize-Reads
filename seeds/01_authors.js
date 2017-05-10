
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(() => {
      const authors = [
      {
        fName: 'Allen',
        lName: 'Downey',
        biography: "Allen Downey is a Professor of Computer Science ",
        portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'
      },
      {
        fName: 'Bonnie',
        lName: 'Eisenman',
        biography: "Bonnie Eisenman is a software engineer at Codecademy",
        portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'
      },
      {
        fName: 'Kyle',
        lName: 'Simpson',
        biography: "Kyle Simpson is an Open Web Evangelist",
        portrait: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'
      }
    ]
      return knex('authors').insert(authors)
    });
};

//

// , with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.

// who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.
