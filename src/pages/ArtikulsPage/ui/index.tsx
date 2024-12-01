import { useQuery } from "@tanstack/react-query";
import axios from "@/shared/api/axios";
import { Artikul } from "@/shared/types/artikuls";

export default function ArtikulsPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["artikuls"],
    queryFn: async () => await axios.get("comps"),
    staleTime: 5*60*1000,
  });

  const artikuls = data?.data as Artikul[];

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <p>{artikuls[0].artikul}</p>
      <p>{artikuls[0].nameukr}</p>
    </div>
  );
}
