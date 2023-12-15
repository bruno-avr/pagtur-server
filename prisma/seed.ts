import { PrismaClient } from '@prisma/client'
import users from './seed-objects/users';
import schools from './seed-objects/schools';
import routes from './seed-objects/routes';
import { getContracts } from './seed-objects/contracts';
const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Seeding users...')
    const usersObjs = await Promise.all(users.map(async (data) =>
      await prisma.user.create({ data })
    ))
    const parentsObjs = usersObjs.filter(user => user.type === 'PARENT')
    
    console.log('Seeding schools...')
    const schoolsObjs = await Promise.all(schools.map(async (data) => 
      await prisma.school.create({ data })
    ))
  
    console.log('Seeding routes...')
    const routesObjs = await Promise.all(routes.map(async (data) =>
      await prisma.route.create({ data: {...data, schools: { connect: schoolsObjs }} })
    ))
  
    console.log('Seeding contracts...')
    const contracts = getContracts(parentsObjs, routesObjs, schoolsObjs)
    const contractsObjs = await Promise.all(contracts.map(async (data) =>
      await prisma.contract.create({ data })
    ))

  } catch (error) {
    console.log('Aconteceu um erro: ' + error.message)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })