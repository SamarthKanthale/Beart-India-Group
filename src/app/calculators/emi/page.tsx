// src/app/calculators/emi/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, IndianRupee, Percent, CalendarDays } from 'lucide-react';
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend as RechartsLegend } from 'recharts';

interface ChartDataPoint {
  name: string;
  value: number;
}

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [pieOuterRadius, setPieOuterRadius] = useState(80);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateEmi = () => {
    if (!isMounted || loanAmount <= 0 || interestRate < 0 || loanTenure <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayment(0);
      setChartData([]);
      return;
    }

    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;

    if (r === 0) {
      const calculatedEmi = P / n;
      setEmi(n > 0 ? Math.round(calculatedEmi) : 0);
      setTotalInterest(0);
      setTotalPayment(Math.round(P));
      setChartData(P > 0 ? [
        { name: 'Principal Loan Amount', value: Math.round(P) },
        { name: 'Total Interest', value: 0 },
      ] : []);
      return;
    }

    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    if (isNaN(emiValue) || !isFinite(emiValue)) {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayment(0);
      setChartData([]);
      return;
    }

    const totalPaymentValue = emiValue * n;
    const totalInterestValue = totalPaymentValue - P;

    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInterestValue > 0 ? totalInterestValue : 0));
    setTotalPayment(Math.round(totalPaymentValue > 0 ? totalPaymentValue : 0));

    setChartData(P > 0 ? [
      { name: 'Principal Loan Amount', value: Math.round(P) },
      { name: 'Total Interest', value: Math.round(totalInterestValue > 0 ? totalInterestValue : 0) },
    ] : []);
  };

  useEffect(() => {
    if (isMounted) {
      calculateEmi();
      const updatePieRadius = () => setPieOuterRadius(window.innerWidth < 640 ? 60 : 80);
      updatePieRadius();
      window.addEventListener('resize', updatePieRadius);
      return () => window.removeEventListener('resize', updatePieRadius);
    }
  }, [loanAmount, interestRate, loanTenure, isMounted]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  if (!isMounted) {
    return <div className="flex justify-center items-center h-64">Loading calculator...</div>;
  }

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--muted-foreground))'];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
      <CardHeader className="text-left">
        <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center">
          <Calculator className="mr-2 h-7 w-7 text-primary" /> EMI Calculator
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Estimate your Equated Monthly Installment (EMI).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Inputs */}
          <div className="space-y-4">
            {/* Loan Amount */}
            <div>
              <Label htmlFor="loanAmountEmi" className="flex justify-between items-center text-sm sm:text-base">
                Loan Amount <span className="text-primary font-semibold">{formatCurrency(loanAmount)}</span>
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
                <Slider
                  id="loanAmountEmi"
                  min={100000}
                  max={50000000}
                  step={100000}
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  className="flex-grow"
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <Label htmlFor="interestRateEmi" className="flex justify-between items-center text-sm sm:text-base">
                Interest Rate (% p.a.) <span className="text-primary font-semibold">{interestRate.toFixed(2)}%</span>
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <Slider
                  id="interestRateEmi"
                  min={0}
                  max={20}
                  step={0.05}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  className="flex-grow"
                />
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <Label htmlFor="loanTenureEmi" className="flex justify-between items-center text-sm sm:text-base">
                Loan Tenure (Years) <span className="text-primary font-semibold">{loanTenure} Yrs</span>
              </Label>
              <div className="flex items-center gap-2 mt-1">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <Slider
                  id="loanTenureEmi"
                  min={1}
                  max={30}
                  step={1}
                  value={[loanTenure]}
                  onValueChange={(value) => setLoanTenure(value[0])}
                  className="flex-grow"
                />
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <Card className="bg-secondary/50 p-4 sm:p-6 rounded-lg shadow-inner">
            <CardHeader className="p-0 pb-3 sm:pb-4 text-left">
              <CardTitle className="text-lg sm:text-xl font-semibold text-primary">Loan Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-2 text-left">
              <div className="flex justify-between text-sm sm:text-base font-bold pt-1">
                <span className="text-foreground">Monthly EMI:</span>
                <span className="text-primary">{formatCurrency(emi)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm  pt-1 border-t border-border mt-2">
                <span className="text-muted-foreground">Principal Amount:</span>
                <span className="font-medium">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-muted-foreground">Total Interest:</span>
                <span className="font-medium">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm font-semibold pt-1 border-t border-border mt-2">
                <span className="text-foreground">Total Payment:</span>
                <span className="font-medium">{formatCurrency(totalPayment)}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pie Chart */}
        {chartData.length > 0 && totalPayment > 0 && (
          <div className="mt-6 sm:mt-8 h-[200px] sm:h-[250px] w-full animate-in fade-in duration-500 delay-200">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={pieOuterRadius}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="hsl(var(--background))"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip
                  cursor={{ fill: 'hsl(var(--muted))', radius: 4 }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.75rem',
                    boxShadow: 'hsl(var(--shadow))',
                  }}
                  formatter={(value: number) => formatCurrency(value)}
                />
                <RechartsLegend iconType="circle" wrapperStyle={{ fontSize: '0.75rem', paddingTop: '10px' }} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center pt-4">
          Disclaimer: This EMI calculator is for illustrative purposes only. Actual EMI may vary based on lender policies and other factors.
        </p>
      </CardContent>
    </Card>
  );
}

export default function EmiCalculatorPage() {
  return (
    <div className="flex-grow container mx-auto py-8 px-4 md:px-6 flex items-center justify-center animate-in fade-in duration-500">
      <EmiCalculator />
    </div>
  );
}