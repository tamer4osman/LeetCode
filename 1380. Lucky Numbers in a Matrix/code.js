const luckyNumbers = (matrix) => {
    const rowMins = matrix.map(row => Math.min(...row));
    
    const colMaxs = matrix[0].map((_, colIndex) => 
        matrix.reduce((max, row) => Math.max(max, row[colIndex]), -Infinity)
    );

    return matrix.flatMap((row, i) => 
        row.filter((num, j) => num === rowMins[i] && num === colMaxs[j])
    );
};
