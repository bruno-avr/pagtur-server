import { PrismaClient } from '@prisma/client'
import users from './seed-objects/users';
import schools from './seed-objects/schools';
import routes from './seed-objects/routes';
import { getContracts } from './seed-objects/contracts';
import { getPayments } from './seed-objects/payments';
const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.payment.create({ 
        data: {
            date: new Date(),
            method: 'CASH',
            referringMonth: '11/2020',
            value: 50,
            contract: {
                connect: {
                    id: '04b2142c-6677-4221-baca-bb2440cea261'
                }
            }
        }
     });
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