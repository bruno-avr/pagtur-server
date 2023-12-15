import { Prisma } from "@prisma/client"

export function getPayments(startDate: Date, value: number, contractId: string) {
  const monthsArray = iterateMonths(new Date(startDate));

  monthsArray.map(month => ({
    date: month.date,
    referringMonth: month.formatted,
    method: getPaymentMethod(),
    value,
    contract: {
        connect: {
            id: contractId
        }
    }
  } as Prisma.PaymentCreateInput))

  const payments = [] as Prisma.PaymentCreateInput[]

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