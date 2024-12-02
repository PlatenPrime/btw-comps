import { ColumnDef } from "@tanstack/react-table";
import { Artikul } from "@/shared/types/artikuls";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Artikul>[] = [
  {
    accessorKey: "nameukr",
    header: "Артикул",
  },
  {
    accessorKey: "prod",
    header: "Виробник",
  },
  {
    accessorKey: "size",
    header: "Розмір",
  },

  {
    accessorKey: "avail.btrade",
    header: "Btrade наявність",
  },
  {
    accessorKey: "price.btrade",
    header: "Btrade ціна",
  },
];
