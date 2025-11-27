let arr = [10,20,3,4,5,9,12,30,45,65,100,22,23,27,30,31,45,47,48,50,55,60,62,65,67,70,72,75,78,80,82,85,87,90,92,95,97,100];

function wait() {
    return new Promise(resolve => setTimeout(resolve, 500));
}

async function mergeSort(array, nivel = 0) {
    await log(`Dividindo: [${array}]`, nivel);

    if (array.length <= 1) {
        await log(`Retornando (unitário): [${array}]`, nivel);
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = await mergeSort(array.slice(0, mid), nivel + 1);
    const right = await mergeSort(array.slice(mid), nivel + 1);

    const merged = await merge(left, right, nivel);

    await log(`Merged: [${merged}]`, nivel);
    return merged;
}

async function merge(left, right, nivel) {
    await log(`↳ Merge: [${left}] + [${right}]`, nivel);

    const sorted = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }

        await log(`↳ Resultado parcial: [${sorted}]`, nivel);
    }

    const result = [...sorted, ...left.slice(i), ...right.slice(j)];
    await log(`↳ Resultado parcial final: [${result}]`, nivel);
    return result;
}

// Função que loga com indentação e espera 3 segundos
async function log(msg, nivel) {
    console.log("  ".repeat(nivel) + msg);
    await wait();
}

(async () => {
    console.log("\n===== INICIANDO MERGE SORT =====\n");
    arr = await mergeSort(arr);
    console.log("\n===== RESULTADO FINAL =====");
    console.log(arr);
})();
