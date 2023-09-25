export const getBooks = async (searchTerm = "") => {
  const apiKey = `AIzaSyBN3dCb4bYTImbkGUtCtOQA1a166egyEWA`;
  if (searchTerm === "") {
    throw new Error("Search must have a value");
  }
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12&key=${apiKey}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data;
};

// key=AIzaSyBN3dCb4bYTImbkGUtCtOQA1a166egyEWA
