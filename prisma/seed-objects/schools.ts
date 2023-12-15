import { Prisma } from "@prisma/client"

const schools = [
  {
    name: 'SESI',
    phone: '(31) 98765-4321',
    address: {
      create: {
        street: 'Rua Antônio Torres',
        number: '175',
        complement: 'Apto. 201',
        neighborhood: 'Ramos',
        postalCode: '36570-250',
        city: 'Viçosa',
        state: 'MG'
      }
    }
  },
  {
    name: 'Escola Primária São João',
    phone: '(31) 12345-6789',
    address: {
      create: {
      street: 'Rua das Flores',
      number: '123',
      complement: 'Sala 102',
      neighborhood: 'Centro',
      postalCode: '54321-678',
      city: 'Cidade Alegre',
      state: 'SP'
      }
    }
  },
    {
      name: 'Colégio Santa Clara',
      phone: '(31) 98765-4321',
      address: {
        create: {
          street: 'Avenida dos Estudantes',
          number: '456',
          complement: 'Bloco B',
          neighborhood: 'Jardim Educação',
          postalCode: '98765-432',
          city: 'Cidade Educada',
          state: 'RJ'
        }
      }
  },
  {
    name: 'Escola Técnica Futuro Brilhante',
    phone: '(31) 34567-8901',
    address: {
      create: {
        street: 'Travessa do Saber',
        number: '321',
        complement: 'Laboratório 201',
        neighborhood: 'Vila do Conhecimento',
        postalCode: '76543-210',
        city: 'Cidade do Futuro',
        state: 'PR'
      }
    }
  },
  {
    name: 'Centro Educacional Harmonia',
    phone: '(31) 87654-3210',
    address: {
      create: {
        street: 'Praça da Aprendizagem',
        number: '567',
        complement: 'Sala 104',
        neighborhood: 'Setor da Sabedoria',
        postalCode: '54321-098',
        city: 'Cidade Harmoniosa',
        state: 'GO'
      }
    }
  }
] as Prisma.SchoolCreateInput[]

export default schools