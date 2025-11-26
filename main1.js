let arr = [8, 3, 5, 1, 2, 4];

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
