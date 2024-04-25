import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import moment from "moment";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "./order-status";

interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}

export function OrderTableRow(order: OrderTableRowProps) {
  const {
    order: { orderId, createdAt, status, customerName, total },
  } = order;

  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">{orderId}</TableCell>

      <TableCell className="text-muted-foreground ">
        {moment(createdAt).fromNow()}
      </TableCell>

      <TableCell>
        <OrderStatus status={status} />
      </TableCell>

      <TableCell className="font-medium">{customerName}</TableCell>

      <TableCell className="font-medium">
        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </TableCell>

      <TableCell>
        <Button variant="outline">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
