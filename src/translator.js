
const API_URL = "https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-en-hi";

document.querySelector('#textGiven').addEventListener('input', async(e) => {
  const inputText = e.target.value;
  document.querySelector('#translatedTxt').innerHTML=  await query(inputText);
});


async function query(data) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: "Bearer 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",
        "Content-Type": "application/json", // Specify content type
      },
      body: JSON.stringify({ inputs: data }), // Wrap data in an object
    });

    const result = await response.json();
    return JSON.stringify(result);

  }