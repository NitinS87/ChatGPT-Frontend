export const fetchResponse = async (chat) => {
  try {
    const response = await fetch("https://chat-gpt-server-three.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chat.map((message) => message.message).join(" \n "),
      }),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
