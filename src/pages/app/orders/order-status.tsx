type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap = {
  pending: {
    label: "Pendente",
    color: "bg-slate-500 dark:bg-slate-400",
  },
  canceled: {
    label: "Cancelado",
    color: "bg-rose-500 dark:bg-rose-400",
  },
  processing: {
    label: "Processando",
    color: "bg-yellow-500 dark:bg-yellow-400",
  },
  delivering: {
    label: "Entregando",
    color: "bg-blue-500 dark:bg-blue-400",
  },
  delivered: {
    label: "Entregue",
    color: "bg-green-500 dark:bg-green-400",
  },
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2 w-2 rounded-full ${orderStatusMap[status].color}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status].label}
      </span>
    </div>
  );
}
