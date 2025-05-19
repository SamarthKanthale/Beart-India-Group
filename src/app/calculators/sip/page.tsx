'use client'

import { useState, useEffect } from 'react'
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
  Calculator, IndianRupee, Percent, BarChart as BarChartIconLucide
} from 'lucide-react'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend
} from 'recharts'

interface BarChartDataPoint {
  year: string
  invested: number
  returns: number
  total: number
}

export default function SipCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000)
  const [expectedReturnRate, setExpectedReturnRate] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [totalInvested, setTotalInvested] = useState(0)
  const [estimatedReturns, setEstimatedReturns] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [barChartData, setBarChartData] = useState<BarChartDataPoint[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const [chartMarginLeft, setChartMarginLeft] = useState(-25)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const calculateSip = () => {
    if (!isMounted || monthlyInvestment <= 0 || expectedReturnRate < 0 || timePeriod <= 0) {
      setTotalInvested(0)
      setEstimatedReturns(0)
      setTotalValue(0)
      setBarChartData([])
      return
    }

    const P = monthlyInvestment
    const r = expectedReturnRate / 100 / 12
    const n = timePeriod * 12

    if (r === 0) {
      const investedAmount = P * n
      setTotalInvested(investedAmount)
      setEstimatedReturns(0)
      setTotalValue(investedAmount)
      const data: BarChartDataPoint[] = []
      for (let year = 1; year <= timePeriod; year++) {
        const invested = P * year * 12
        data.push({
          year: `Year ${year}`,
          invested,
          returns: 0,
          total: invested
        })
      }
      setBarChartData(data)
      return
    }

    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r))
    const investedAmount = P * n
    const returns = futureValue - investedAmount

    setTotalInvested(Math.round(investedAmount))
    setEstimatedReturns(Math.round(Math.max(returns, 0)))
    setTotalValue(Math.round(Math.max(futureValue, investedAmount)))

    const data: BarChartDataPoint[] = []
    for (let year = 1; year <= timePeriod; year++) {
      const months = year * 12
      const value = P * (((Math.pow(1 + r, months) - 1) / r) * (1 + r))
      const invested = P * months
      data.push({
        year: `Year ${year}`,
        invested: Math.round(invested),
        returns: Math.round(Math.max(value - invested, 0)),
        total: Math.round(Math.max(value, invested))
      })
    }
    setBarChartData(data)
  }

  useEffect(() => {
    if (isMounted) {
      calculateSip()
      const updateChartMargin = () => setChartMarginLeft(window.innerWidth < 640 ? -30 : -25)
      updateChartMargin()
      window.addEventListener('resize', updateChartMargin)
      return () => window.removeEventListener('resize', updateChartMargin)
    }
  }, [monthlyInvestment, expectedReturnRate, timePeriod, isMounted])

  const formatCurrency = (value: number) => new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value)

  if (!isMounted) {
    return <div className="flex justify-center items-center h-64">Loading calculator...</div>
  }

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 animate-in fade-in duration-500">
      <Card className="w-full shadow-xl border-0 shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center justify-center">
            <Calculator className="mr-2 h-7 w-7 text-primary" /> SIP Calculator
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Estimate the future value of your Systematic Investment Plan (SIP).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="space-y-4">
              <div>
                <Label className="flex justify-between text-sm sm:text-base">
                  Monthly Investment <span className="text-primary font-semibold">{formatCurrency(monthlyInvestment)}</span>
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    min={500}
                    max={100000}
                    step={500}
                    value={[monthlyInvestment]}
                    onValueChange={(v) => setMonthlyInvestment(v[0])}
                    className="flex-grow"
                  />
                </div>
              </div>
              <div>
                <Label className="flex justify-between text-sm sm:text-base">
                  Expected Return Rate <span className="text-primary font-semibold">{expectedReturnRate}%</span>
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <Percent className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    min={0}
                    max={30}
                    step={0.5}
                    value={[expectedReturnRate]}
                    onValueChange={(v) => setExpectedReturnRate(v[0])}
                    className="flex-grow"
                  />
                </div>
              </div>
              <div>
                <Label className="flex justify-between text-sm sm:text-base">
                  Time Period (Years) <span className="text-primary font-semibold">{timePeriod} Yrs</span>
                </Label>
                <div className="flex items-center gap-2 mt-1">
                  <BarChartIconLucide className="h-4 w-4 text-muted-foreground rotate-90" />
                  <Slider
                    min={1}
                    max={40}
                    step={1}
                    value={[timePeriod]}
                    onValueChange={(v) => setTimePeriod(v[0])}
                    className="flex-grow"
                  />
                </div>
              </div>
            </div>

            <Card className="bg-secondary/50 p-4 sm:p-6 rounded-lg shadow-inner">
              <CardHeader className="p-0 pb-3 sm:pb-4 text-center">
                <CardTitle className="text-lg sm:text-xl font-semibold text-primary">Projected Value</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-2 text-center sm:text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Invested Amount:</span>
                  <span className="font-medium">{formatCurrency(totalInvested)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Est. Returns:</span>
                  <span className="font-medium">{formatCurrency(estimatedReturns)}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-1 border-t mt-2">
                  <span className="text-foreground">Total Value:</span>
                  <span className="text-primary">{formatCurrency(totalValue)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {barChartData.length > 0 && (
            <div className="mt-6 sm:mt-8 h-[250px] sm:h-[300px] w-full animate-in fade-in duration-500 delay-200">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} margin={{ top: 5, right: 0, left: chartMarginLeft, bottom: 5 }}>
                  <XAxis dataKey="year" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis fontSize={10} tickFormatter={(v) => `${v / 100000}L`} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: 'hsl(var(--muted))', radius: 4 }}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                      fontSize: '0.75rem',
                      boxShadow: 'var(--shadow)'
                    }}
                    formatter={(v: number, name: string) => [formatCurrency(v), name]}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '0.75rem', paddingTop: '10px' }} />
                  <Bar dataKey="invested" stackId="a" fill="hsl(var(--secondary-foreground))" name="Invested" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="returns" stackId="a" fill="hsl(var(--primary))" name="Returns" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center pt-4">
            Disclaimer: The calculations are illustrative and based on the inputs provided. Actual returns may vary.
            Mutual fund investments are subject to market risks.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
