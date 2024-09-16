export const login = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify({ email: "satej@gmail.com", password: "123456" }),
  };

  try {
    const response = await fetch(
      "https://node.ftvrealestate.in:8089/api/enquiry/login",
      requestOptions
    );
    const data = await response.json();
    if (response.status === 200) {
      return data.token;
    } else {
      console.log(data);
      throw new Error(`Login failed: ${data}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching data: ${error}`);
  }
};
