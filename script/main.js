const click =() => {
    const paragraph = document.getElementById("text-input");
    const text = paragraph.value;
    const output = document.getElementById("text-output");
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
            {
                headers: {
                    Authorization: "Bearer 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",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }
    
    query({inputs: text}).then((response) => {
        output.innerHTML = response[0]?.summary_text
    });
};
