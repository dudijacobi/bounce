import axios from "axios";

export const getRandomDice = async (numberOfRolls: number = 1) => {
  try {
    const data = await axios
      .get(`https://qrandom.io/api/random/dice?n=${numberOfRolls}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          rejectUnauthorized: false,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
