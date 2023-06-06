export const handler = async (event) => {
  const formData = JSON.parse(event.body);
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `Hello, your URL is ${formData.url}`,
    }),
  };
  return response;
};
