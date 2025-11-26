// Array externo
let arr = [8, 3, 5, 4, 7, 6, 1, 2];

function mergeSort(array, nivel = 0) {
    // Log de divisão
    console.log("  ".repeat(nivel) + `Dividindo: [${array}]`);

    if (array.length <= 1) {
        console.log("  ".repeat(nivel) + `Retornando (unitário): [${array}]`);
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid), nivel + 1);
    const right = mergeSort(array.slice(mid), nivel + 1);

    const merged = merge(left, right, nivel);

    console.log("  ".repeat(nivel) + `Merged: [${merged}]`);
    return merged;
}

function merge(left, right, nivel) {
    console.log("  ".repeat(nivel) + `↳ Merge: [${left}] + [${right}]`);

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
    }

    const result = [...sorted, ...left.slice(i), ...right.slice(j)];
    console.log("  ".repeat(nivel) + `↳ Resultado parcial: [${result}]`);
    return result;
}

// Executando
console.log("\n===== INICIANDO MERGE SORT =====");
arr = mergeSort(arr);
console.log("\n===== RESULTADO FINAL =====");
console.log(arr);
