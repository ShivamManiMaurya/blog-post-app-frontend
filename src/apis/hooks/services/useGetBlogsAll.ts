import { useQuery } from "@tanstack/react-query";
import { Some } from "../../../helpers/Some";
import { postService } from "../../services/postService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useCreds from "../../../helpers/hooks/useCreds";

function useGetAllBlogs() {
  const token = useCreds();

  async function getAllBlogs() {
    const resp = await postService.getBlogs(Some.String(token));
    return Some.Array(resp?.data?.data).map((d) => Some.String(d));
  }

  return useQuery({
    queryKey: ["get-all-blogs"],
    queryFn: getAllBlogs,
    refetchOnWindowFocus: false,
    initialData: [],
  });
}

export default useGetAllBlogs;
