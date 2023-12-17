import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { JwtService } from '@nestjs/jwt';

type MonthlySummary = {
  month: string;
  totalValue: number;
  numMonthlyPayments: number;
}

@Injectable()
export class PaymentService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
    ) {}

  async create(data: Prisma.PaymentCreateInput) {
    const payment = await this.prisma.payment.create({
      data
    })
    return payment;
  }

  private formatData(payments: any, type = 'referingMonth') {
    function formatMonth(date) {
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
      const year = date.getFullYear();
      return `${month}/${year}`;
    }
    const monthlySummariesMap: Record<string, MonthlySummary> = {};
    payments.forEach((payment) => {
      const { referringMonth, value, date } = payment;

      const month = (type === 'referingMonth') ? referringMonth : formatMonth(date)
  
      if (!monthlySummariesMap[month]) {
        monthlySummariesMap[month] = {
          month: month,
          totalValue: 0,
          numMonthlyPayments: 0,
        };
      }
      
      monthlySummariesMap[month].totalValue += value;
      monthlySummariesMap[month].numMonthlyPayments++;
    });

    const monthlySummaries: MonthlySummary[] = Object.values(monthlySummariesMap);

    function compareDates(a: MonthlySummary, b: MonthlySummary): number {
      const dateA = new Date(a.month.replace(/(\d{2})\/(\d{4})/, "$2-$1"));
      const dateB = new Date(b.month.replace(/(\d{2})\/(\d{4})/, "$2-$1"));
    
      return dateA.getTime() - dateB.getTime();
    }
    monthlySummaries.sort(compareDates)

    return monthlySummaries
  }
  
  async getData() {
    const payments = await this.prisma.payment.findMany({ include: { contract: true }});

    const res = {
      referingMonth: this.formatData(payments, 'referingMonth'),
      date: this.formatData(payments, 'date')
    }

    return res;
  }
}
