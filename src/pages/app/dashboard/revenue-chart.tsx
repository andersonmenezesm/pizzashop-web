import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { data: "2022-01-01", revenue: 1000 },
  { data: "2022-01-02", revenue: 150 },
  { data: "2022-01-03", revenue: 200 },
  { data: "2022-01-04", revenue: 1280 },
  { data: "2022-01-05", revenue: 220 },
  { data: "2022-01-06", revenue: 300 },
  { data: "2022-01-07", revenue: 250 },
];

export function RevenueChart() {
  return (
    <>
      <Card className="col-span-6">
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">
              Receita no período
            </CardTitle>
            <CardDescription>Receita diária no período</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data} style={{ fontSize: 12 }}>
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
              />

              <XAxis tickLine={false} axisLine={false} dy={16} />

              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="revenue"
                stroke={colors.violet[500]}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
}
