import faker from 'faker'

export const user = [
  {
    id: 1,
    email: 'admin@example.com',
    roles: ['ROLE_ADMIN'],
    password: '$2y$10$/H2ChUxriH.0Q33g3EUEx.S2s4j/rGJH2G88jK9nCP60GbUW8mi5K'
  },
  {
    id: 2,
    email: 'foo.foo@example.com',
    roles: ['ROLE_EMPRUNTEURS'],
    password: '$2y$10$/H2ChUxriH.0Q33g3EUEx.S2s4j/rGJH2G88jK9nCP60GbUW8mi5K'
  },
  {
    id: 3,
    email: 'bar.bar@example.com',
    roles: ['ROLE_EMPRUNTEURS'],
    password: '$2y$10$/H2ChUxriH.0Q33g3EUEx.S2s4j/rGJH2G88jK9nCP60GbUW8mi5K'
  },
  {
    id: 4,
    email: 'baz.baz@example.com',
    roles: ['ROLE_EMPRUNTEURS'],
    password: '$2y$10$/H2ChUxriH.0Q33g3EUEx.S2s4j/rGJH2G88jK9nCP60GbUW8mi5K'
  },
  ...Array.from({length: 100}, (_, key) => ({
    id: key+5,
    email: faker.internet.email(),
    roles: ['ROLE_EMPRUNTEURS'],
    password: '$2y$10$/H2ChUxriH.0Q33g3EUEx.S2s4j/rGJH2G88jK9nCP60GbUW8mi5K'
  }))
]

export const author = [
  {
    id: 1,
    lastname: 'auteur inconnu',
    firstname: '',
  },
  {
    id: 2,
    lastname: 'Cartier',
    firstname: 'Hugues',
  },
  {
    id: 3,
    lastname: 'Lambert',
    firstname: 'Armand',
  },
  {
    id: 4,
    lastname: 'Moitessier',
    firstname: 'Thomas',
  },
  ...Array.from({length: 500}, (_, key) => ({
    id: key+5,
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
  }))
]

export const book = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    isbn: '9785786930024',
    authorId: 1,
    pages: 100,
    edition_year: 2010
  },
  {
    id: 2,
    title: 'Consectetur adipiscing elit',
    isbn: '9783817260935',
    authorId: 2,
    pages: 150,
    edition_year: 2011
  },
  {
    id: 3,
    title: 'Mihi quidem Antiochum',
    isbn: '9782020493727',
    authorId: 3,
    pages: 200,
    edition_year: 2012
  },
  {
    id: 4,
    title: 'Quem audis satis belle',
    isbn: 9794059561353,
    authorId: 4,
    pages: 250,
    edition_year: 2013
  },
  ...Array.from({length: 1000}, (_, key) => ({
    id: key+5,
    title: faker.lorem.words(4),
    isbn: `${faker.datatype.number()}`,
    authorId: author[faker.datatype.number(author.length-1)].id,
    pages: faker.datatype.number(2000),
    edition_year: faker.datatype.number(2021),
  }))
]

export const genre = [
  {
    id: 1,
    name: 'poésie',
    description: null,
  },
  {
    id: 2,
    name: 'nouvelle',
    description: null,
  },
  {
    id: 3,
    name: 'roman histoire',
    description: null,
  },
  {
    id: 4,
    name: 'roman d\'amour',
    description: null,
  },
  {
    id: 5,
    name: 'roman d\'avenure',
    description: null,
  },
  {
    id: 6,
    name: 'science-fiction',
    description: null,
  },
  {
    id: 7,
    name: 'fantasy',
    description: null,
  },
  {
    id: 8,
    name: 'biographie',
    description: null,
  },
  {
    id: 9,
    name: 'conte',
    description: null,
  },
  {
    id: 10,
    name: 'témoignage',
    description: null,
  },
  {
    id: 11,
    name: 'théatre',
    description: null,
  },
  {
    id: 12,
    name: 'essai',
    description: null,
  },
  {
    id: 13,
    name: 'journal intime',
    description: null,
  },
]

export const book_genre = [
  {
    bookId: 1,
    genreId: 1,
  },
  {
    bookId: 2,
    genreId: 2,
  },
  {
    bookId: 3,
    genreId: 3,
  },
  {
    bookId: 4,
    genreId: 4,
  },
  ...book.map(({id}) => id > 4 && {
    bookId: id,
    genreId: genre[faker.datatype.number(genre.length-1)].id
  } || null)
].filter((link) => link)

export const loaner = [
  {
    lastname: 'foo',
    firstname: 'foo',
    tel: '123456789',
    active: true,
    creation_date: '20200101 10:00:00',
    modification_date: null,
    user: 2,
  },
  {
    lastname: 'bar',
    firstname: 'bar',
    tel: '123456789',
    active: false,
    creation_date: '20200101 11:00:00',
    modification_date: '20200501 12:00:00',
    user: 3,
  },
  {
    lastname: 'baz',
    firstname: 'baz',
    tel: '123456789',
    active: true,
    creation_date: '20200101 12:00:00',
    modification_date: null,
    user: 4,
  },
  ...user.map(({id}) => id > 4 && {
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
    tel: faker.phone.phoneNumber(),
    active: faker.datatype.boolean(),
    creation_date: faker.date.past(),
    modification_date: faker.date.past(),
    user: id,
  } || null)
].filter((link) => link)

export const loan = [
  {
    id: 1,
    loan_date: '2020-02-01 10:00:00',
    return_date: '2020-03-01 10:00:00',
    loanerId: 1,
    bookId: 1,
  },
  {
    id: 2,
    loan_date: '2020-02-01 10:00:00',
    return_date: '2020-04-01 10:00:00',
    loanerId: 2,
    bookId: 2,
  },
  {
    id: 3,
    loan_date: '2020-02-01 10:00:00',
    return_date: null,
    loanerId: 3,
    bookId: 3,
  },
  ...Array.from({length: 100}, (_, key) => ({
    id: key+4,
    loan_date: faker.date.past(),
    return_date: faker.datatype.boolean() && faker.date.recent() || null,
    loanerId: loaner[faker.datatype.number(loaner.length-1)].id,
    bookId: book[faker.datatype.number(book.length-1)].id
  }))
]