

drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(drawCount * 1e2 * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((drawCount * 1e2 + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0000025 * 0.5 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
            let a = 0 + sin(p.h + jj);
            let l = 0.5;
            let ph = cos(p.x) + sin(p.y);
            p = ro(a, l, p.x, p.y, p.h + ph * 0.75 * sin(t * 2e6));
//             p.x += xOffset * 2.95;
//             p.y += yOffset * 2.95;
            p.x += cos(t * 2e7) * 0.25;
            p.y += sin(t * 2e7) * 0.25;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 0.25;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}



drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(drawCount * 1e2 * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((drawCount * 1e2 + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0000025 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 30000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
            let a = 1 + sin(p.h + jj);
            let l = 0.5;
            let ph = cos(p.x) + sin(p.y);
            p = ro(a, l, p.x, p.y, p.h + ph * 1 * sin(t * 2e7));
//             p.x += xOffset * 2.95;
//             p.y += yOffset * 2.95;
            p.x += cos(t * 1e7) * 0.125;
            p.y += sin(t * 0.25e7) * 0.125;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 0.25;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}





drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(drawCount * 1e2 * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((drawCount * 1e2 + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0000025 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 10000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
            let a = 0.5 + sin(p.h + jj);
            let l = 0.5;
            let ph = cos(p.x * 0.125) * cos(p.y * 0.125);
            p = ro(a, l + ph, p.x + ph * 0.5, p.y + ph * 0.5, p.h);
//             p.x += xOffset * 2.95;
//             p.y += yOffset * 2.95;
            p.x += cos(t * 1e7) * 0.5;
            p.y += sin(t * 1e7) * 0.5;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 0.125 * 0.5;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}






drawCount = 1;
drawDots = function() {
    vertices = [];
    let xOffset = (noise(drawCount * 1e2 * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((drawCount * 1e2 + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.0000025 * 0.5 + 0;
    let fx = 1;
    let fy = 1;
    let x = 0;
    let y = 0;
    let num = 8000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos((h + a)) * l,
            y: y + Math.sin((h + a)) * l,
            h: h + a
        };
    }
    let amountRays = 120;
    let sj = (10 - t) * 1000000;
    let rayInc = Math.PI * 2 / amountRays;
    let numV = 0;
    let metaV = [];
    let indMetaV = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        let m = map(sin(t * 1e5), -1, 1, 200, 201);
        for (let i = 0; i < (num / amountRays); i += 1) {
            let a = sin(jj + i * i * 200);
            let l = 1;
            let ph = cos(p.x) + sin(p.y);
            p = ro(a + ph * 0.1, l, p.x, p.y, p.h);
//             p.x += xOffset * 2.95;
//             p.y += yOffset * 2.95;
            p.x += cos(t * 2e7) * 0.25;
            p.y += sin(t * 2e7) * 0.25;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 0.125 * 0.5;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    let flatV = [];
    for (let j = 0; j < metaV[0].length; j += 3) {
        for (let i = 0; i < metaV.length; i++) {
            flatV.push(metaV[i][j], metaV[i][j + 1], metaV[i][j + 2]);
        }
    }
    vertices = flatV;
    // Create an empty buffer object to store the vertex buffer
    // var vertex_buffer = gl.createBuffer();
    //Bind appropriate array buffer to it
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    /*======== Associating shaders to buffer objects ========*/
    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // Get the attribute location
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    // Point an attribute to the currently bound VBO
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    // Enable the attribute
    gl.enableVertexAttribArray(coord);
    /*============= Drawing the primitive ===============*/
    // // Clear the canvas
    // gl.clearColor(0.5, 0.5, 0.5, 0.9);
    // Clear the color buffer bit
    // gl.clear(gl.COLOR_BUFFER_BIT);
    // Draw the triangle
    gl.drawArrays(gl.POINTS, 0, num);
}