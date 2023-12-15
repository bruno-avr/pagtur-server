import { Prisma, Route, School, User } from "@prisma/client"

export const getContracts = (parents: User[], routes: Route[], schools: School[]) => {
  const students = [
    'Alice Johnson',
    'Bob Smith',
    'Catherine Davis',
    'David Thompson',
    'Eva Brown',
    'Frank White',
    'Grace Miller',
    'Henry Taylor',
    'Isabel Clark',
    'John Parker',
    'Kelly Turner',
    'Leo Harris',
    'Mia Jackson',
    'Nick Wilson',
    'Olivia Lee',
    'Peter Evans',
    'Quincy Bennett',
    'Rachel Taylor',
    'Samuel Adams',
    'Tina Robinson'
  ];

  const contracts = students.map(student => {
    const startDate = getRandomDate();
    const monthlyPayment = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    const payments = getPayments(startDate, monthlyPayment);
    return ({
      active: true,
      monthlyPayment,
      parent: {connect: {id: parents[Math.floor(Math.random() * parents.length)].id}},
      route: {connect: {id: routes[Math.floor(Math.random() * routes.length)].id}},
      school: {connect: {id: schools[Math.floor(Math.random() * schools.length)].id}},
      startDate,
      student,
      payments: {createMany: { data: payments } }
    } as Prisma.ContractCreateInput)
  })

  return contracts
}

function getRandomDate() {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const timeDiff = today.getTime() - oneYearAgo.getTime();
  const randomTime = Math.random() * timeDiff;

  const randomDate = new Date(oneYearAgo.getTime() + randomTime);

  return randomDate;
}

function getPayments(startDate: Date, value: number) {
  const monthsArray = iterateMonths(startDate);

  const payments = monthsArray.map(month => ({
    date: month.date,
    referringMonth: month.formatted,
    method: getPaymentMethod(),
    value
  } as Prisma.PaymentCreateManyContractInput))

  return payments;
}

function iterateMonths(startDate: Date) {
  const currentDate = new Date();
  let currentMonth = startDate.getMonth();
  let currentYear = startDate.getFullYear();

  const resultArray = [] as { formatted: string, date: Date}[];

  while (
    currentYear < currentDate.getFullYear() ||
    (currentYear === currentDate.getFullYear() && currentMonth <= currentDate.getMonth())
  ) {
    const monthYearString = `${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
    const dateObject = new Date(currentYear, currentMonth, 1);

    resultArray.push({ formatted: monthYearString, date: dateObject });

    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
  }

  return resultArray;
}

function getPaymentMethod() {
  const methods = ['PIX', 'CREDIT_CARD', 'CASH']
  return methods[Math.floor(Math.random() * methods.length)]
}