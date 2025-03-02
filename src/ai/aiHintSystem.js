const fetchHintFromAI = async (city) => {
    try {
        const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct", {
            method: "POST",
            headers: {
                "Authorization": `Bearer YOUR_HUGGINGFACE_API_KEY`,  // If using a key (optional)
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inputs: `Give me a short travel hint for ${city}.`,
            })
        });

        const data = await response.json();
        if (data && data[0] && data[0].generated_text) {
            return data[0].generated_text;
        } else {
            return "No hint available, try guessing!";
        }
    } catch (error) {
        console.error("Error fetching AI hint:", error);
        return "Oops! Hint service unavailable.";
    }
};

export default fetchHintFromAI;
