import { Prisma } from "@prisma/client"

const routes = [
  {
    departureTime: '07:30',
    returnTime: '11:30'
  },
  {
    departureTime: '12:30',
    returnTime: '17:30'
  },
  {
    departureTime: '18:00',
    returnTime: '22:00'
  }
] as Prisma.RouteCreateInput[]

export default routes