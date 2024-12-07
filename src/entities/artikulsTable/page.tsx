import { Artikul } from "@/shared/types/artikuls";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@tanstack/react-query";
import axios from "@/shared/api/axios";

export default function DemoPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["artikuls"],
    queryFn: async () => await axios.get("comps"),
    staleTime: 5 * 60 * 1000,
  });

  const artikuls = data?.data as Artikul[];

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container mx-auto py-10">
      Таблица
      <DataTable columns={columns} data={artikuls} />
    </div>
  );
}
