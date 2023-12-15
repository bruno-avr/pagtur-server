import { Prisma } from "@prisma/client"

const users = [
  {
    username: 'brunocaminhoneiro',
    password: '123',
    name: 'Bruno Caminhoneiro',
    type: 'DRIVER',
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
    username: 'aliceribeiro',
    password: '123',
    name: 'Alice Ribeiro',
    type: 'PARENT',
    address: {
      create: {
        street: 'Rua das Flores',
        number: '123',
        complement: 'Casa 2',
        neighborhood: 'Centro',
        postalCode: '12345-678',
        city: 'São Paulo',
        state: 'SP'
      }
    }
  },
  {
    username: 'davidsilva',
    password: '123',
    name: 'David Silva',
    type: 'PARENT',
    address: {
      create: {
        street: 'Avenida do Bosque',
        number: '789',
        complement: 'Bloco B',
        neighborhood: 'Jardins',
        postalCode: '98765-432',
        city: 'Rio de Janeiro',
        state: 'RJ'
      }
    }
  },
  {
    username: 'mariaoliveira',
    password: '123',
    name: 'Maria Oliveira',
    type: 'PARENT',
    address: {
      create: {
        street: 'Rua da Praia',
        number: '456',
        complement: 'Casa 3',
        neighborhood: 'Marina',
        postalCode: '54321-987',
        city: 'Fortaleza',
        state: 'CE'
      }
    }
  },
  {
    username: 'ricardofaria',
    password: '123',
    name: 'Ricardo Faria',
    type: 'PARENT',
    address: {
      create: {
        street: 'Avenida das Palmeiras',
        number: '789',
        complement: 'Bloco C',
        neighborhood: 'Jardim',
        postalCode: '87654-321',
        city: 'Salvador',
        state: 'BA'
      }
    }
  },
  {
    username: 'anaalves',
    password: '123',
    name: 'Ana Alves',
    type: 'PARENT',
    address: {
      create: {
        street: 'Alameda dos Ipês',
        number: '321',
        complement: 'Apto. 10',
        neighborhood: 'Florido',
        postalCode: '76543-210',
        city: 'Brasília',
        state: 'DF'
      }
    }
  },
  {
    username: 'luizsantos',
    password: '123',
    name: 'Luiz Santos',
    type: 'PARENT',
    address: {
      create: {
        street: 'Rua das Oliveiras',
        number: '987',
        complement: 'Casa 5',
        neighborhood: 'Verdejante',
        postalCode: '34567-890',
        city: 'Curitiba',
        state: 'PR'
      }
    }
  },
  {
    username: 'patriciaborges',
    password: '123',
    name: 'Patrícia Borges',
    type: 'PARENT',
    address: {
      create: {
        street: 'Travessa das Rosas',
        number: '654',
        complement: 'Apto. 15',
        neighborhood: 'Jardim das Flores',
        postalCode: '23456-789',
        city: 'Recife',
        state: 'PE'
      }
    }
  }
] as Prisma.UserCreateInput[]

export default users