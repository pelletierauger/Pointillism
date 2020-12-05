drawCount = 1;
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
            p.x = tan(x * 2.05) * 0.49 + cos(x / y * 20) * 0.001;
            p.y = tan(y * 2.05) * 0.49 + sin(x / y * 20) * 0.001;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.25;
            metaV[indMetaV].push(p.y * 0.35 * 1.5 * sc, p.x * 0.8 * sc, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let xOffset = (noise(frameCount * 0.0025) - 0.5) * 0.9;
    let yOffset = (noise((frameCount + 100) * 0.0025) - 0.5) * 0.9;
    let t = drawCount * 0.00000005 + 0;
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
    let ink = 0;
    for (let j = sj; j < (Math.PI * 2 + sj) - rayInc; j += rayInc) {
        let p = {x: 0, y: 0, h: j};
        let jj = j - sj;
        metaV[indMetaV] = [];
        for (let i = 0; i < (num / amountRays); i += 1) {
//             let a = 0;
//             let l = 1;
//             p = ro(a, l, p.x * 1, p.y * 1, p.h);
//             p.x += xOffset * 0.95;
//             p.y += yOffset * 0.95;
//             let ppx = cos(t * 2e6) * 50;
//             let ppy = sin(t * 2e6) * 50;
//             p.x = ppx * 1;
//             p.y = ppy * 1;
            let x = fullArr[ink].x;
            let y = fullArr[ink].y;
            p.x = tan(x * 2.05) * 0.49 + cos(x / y * 20) * 0.001;
            p.y = tan(y * 2.05) * 0.49 + sin(x / y * 20) * 0.001;
            nextArr[ink] = {x: p.x, y: p.y};
            ink++;
            var sc = 0.01 * (1 / cos(t * 4e5));
            sc = 15.5 * 0.125 * 0.5;
            var fiy = p.y * 0.35 * 1.5 * sc;
            var fix = p.x * 0.8 * sc;
            fix = (fix + cos(fiy * 10)) * 0.75;
            fiy = (fiy + sin(fiy * 10)) * 0.75;
            metaV[indMetaV].push(fix, fiy, 0.0);
            numV += 1;
        }
        indMetaV++;
    }
    for (let i = 0; i < num; i++) {
        fullArr[i] = {x: nextArr[i].x, y: nextArr[i].y};
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
fullArr = [];
nextArr = [];
for (let i = 0 ; i < 30000; i++) {
    fullArr.push({x: cos(i) * i, y: sin(i) * i});
    nextArr.push({x: 0, y: 0});
}
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    function ro(a, l, x, y, h) {
        return {
            x: x + Math.cos(h + a) * l,
            y: y + Math.sin(h + a) * l,
            h: h + a
        };
    }
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z) * i * 0.75e-4;
        y = y + sin(i + z) * i * 0.75e-4;
        z = sin(x + y) * map(sin(t * 0.25e1), -1, 1, 0, 1);
        var sx = x * 10 / 16 * 0.5;
        var sy = y * 1 * 0.5 + 0.5;
        vertices.push(sx, sy, 0.0);
    }
    // vertices = flatV;
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
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z) * i * 0.75e-4;
        y = y + sin(i + z) * i * 0.75e-4;
        z = (sin(x) + cos(y)) * map(sin(t * 0.25e1), -1, 1, 0, 1);
        var sx = x * 10 / 16 * 0.5 + 0.5;
        var sy = y * 1 * 0.5 + 1.5;
        vertices.push(sx, sy, 0.0);
    }
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
    gl.drawArrays(gl.POINTS, 0, num);
}


drawCount = 1;
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z) * i * 0.75e-4;
        y = y + sin(i + z) * i * 0.75e-4;
        z = (sin(sin(i + t) + x * 1) * cos(cos(i + t) + y * 1));
        var sx = x * 10 / 16 * 0.5;
        var sy = y * 1 * 0.5 + 0.5;
        vertices.push(sx, sy, 0.0);
    }
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
    gl.drawArrays(gl.POINTS, 0, num);
}


drawCount = 1;
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z) * i * 0.75e-4;
        y = y + sin(i + z) * i * 0.75e-4;
        z = (sin(x) + cos(y)) * map(sin(t * 0.25e1), -1, 1, 0, 1);
        var sx = x * 10 / 16 * 0.5 + 0.5;
        var sy = y * 1 * 0.5 + 1.5;
        vertices.push(sx, sy, 0.0);
    }
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
    gl.drawArrays(gl.POINTS, 0, num);
}


drawCount = 1;
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z * 0.5) * i * 0.75e-4;
        y = y + sin(i + z * 0.5) * i * 0.75e-4;
        z = (sin(sin(i * 2 + t * 0.01) * x) * cos(cos(i * 2 + t * 0.01) * y));
        var sx = x * 10 / 16 * 0.125 + 0.5;
        var sy = y * 1 * 0.125 + 0.5;
        vertices.push(sx, sy, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawCount = 1;
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i * 2 + z * 0.5) * i * 0.75e-4;
        y = y + sin(i * 2 + z * 0.5) * i * 0.75e-4;
        z = (sin(sin(i + t * 0.5e1) * x) * cos(cos(i + t * 0.5e1) * y));
        var sx = x * 10 / 16 * 0.25 + 0.5;
        var sy = y * 1 * 0.25 + 0.5;
        vertices.push(sx, sy, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}

drawCount = 1;
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z * 0.25) * i * 1e-4;
        y = y + sin(i + z * 0.25) * i * 1e-4;
        z = z * sin(x + y) + t * 0.05;
        var sx = x * 10 / 16 * 0.35 + 0.1;
        var sy = y * 1 * 0.35 + 0.4;
        vertices.push(sx, sy, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}


drawCount = 1;
drawDots = function() {
    vertices = [];
    let t = drawCount * 5;
    let x = 0;
    let y = 0;
    let z = 0;
    let num = 30000;
    for (let i = 0; i < num; i ++) {
        x = x + cos(i + z * 0.25) * i * 1e-4;
        y = y + sin(i + z * 0.25) * i * 1e-4;
        z = z * sin(x + y) + t * 5;
        z = sin(z);
        var sx = x * 10 / 16 * 0.35 + 0.1;
        var sy = y * 1 * 0.35 + 0.4;
        vertices.push(sx, sy, 0.0);
    }
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(coord);
    gl.drawArrays(gl.POINTS, 0, num);
}