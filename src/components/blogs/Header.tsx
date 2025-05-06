import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "../../assets/EditIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import useBlogMutations from "../../apis/hooks/services/useBlogMutations";
import useCreds from "../../helpers/hooks/useCreds";
import moment from "moment";

interface IProps {
  imgUrl: string;
  name: string;
  date: string;
  isEdit?: boolean;
  id?: string;
  authorId?: string;
}

const Header: React.FC<IProps> = ({
  imgUrl,
  name,
  date,
  isEdit = false,
  id,
  authorId,
}) => {
  const navigate = useNavigate();
  const creds = useCreds();

  const { deletePost } = useBlogMutations();

  const handleClick = () => {
    navigate(`/blog/update/${id}`);
  };

  const handleDelete = async () => {
    if (id) {
      const payload = {
        token: creds.token,
        id,
      };
      await deletePost.mutateAsync(payload);
    }
  };

  const isThisAuthor = useMemo(() => {
    return creds.userId && authorId ? creds.userId === authorId : false;
  }, [creds.userId, authorId]);

  return (
    <div className=" flex items-center justify-start space-x-2 text-sm text-gray-600 py-2">
      <img
        src={imgUrl}
        alt={`${name} avatar`}
        className=" rounded-full w-6 h-6 object-cover"
      />
      <span className=" font-medium text-gray-900">{name}</span>
      <span>.</span>
      <span>{moment(date).local().format("hh:mm A DD-MM-YYYY")}</span>
      {isEdit && isThisAuthor && (
        <div className=" flex justify-start items-center gap-4">
          <button
            type="submit"
            onClick={handleClick}
            className=" flex items-center justify-center">
            <EditIcon />
          </button>
          <button
            type="submit"
            onClick={handleDelete}
            className=" flex items-center justify-center">
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
