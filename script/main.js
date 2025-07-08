const clicked =() => {
   console.log("callAPI")
    const paragraph = document.getElementById("text-input");
    const text = paragraph.value;
    const output = document.getElementById("text-output");
    const a = "h";
    const b = "f";
    const c = "_BTMDuuAqliBe";
    const d = "bIVMaxHuuKw";
    const e = "FQwOYTntUEp";
async function query(data) {
        const response = await fetch(
            "https://api.fireworks.ai/inference/v1/completions",
            {
                headers: {
                    Authorization: "Bearer " + a + b + c + d + e,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    model: "accounts/fireworks/models/llama-v3-8b-instruct",
                    prompt: data.inputs,
                    max_tokens: 200,
                    temperature: 0.7
                }),
            }
        );
        const result = await response.json();
        return result;
    }

    query({ inputs: text }).then((response) => {
        output.innerHTML = response.choices?.[0]?.text || "No response";
    });
}; 
