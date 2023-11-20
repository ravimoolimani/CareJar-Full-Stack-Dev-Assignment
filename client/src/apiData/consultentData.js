import axios from "axios";

export const consultentData = async () => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/0b32abfc-c425-429d-9da4-ecc36119fd20"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    throw error;
  }
};