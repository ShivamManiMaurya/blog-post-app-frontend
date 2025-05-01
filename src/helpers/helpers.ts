export const getHeadersWithToken = (
  token: string
): { Authorization: string } => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
